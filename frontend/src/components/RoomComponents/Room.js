import React, {useState, useEffect} from 'react';
import BottomMenu from './BottomMenu';
import GoodBye from './GoodBye';
import ChatComponent from './ChatComponent';
import { darkTheme, lightTheme } from '../CustomTheme';

import { CountdownCircleTimer } from 'react-countdown-circle-timer';

import {
  CssBaseline,
  Box,
  Grid, 
  Typography, 
  Tooltip,
  Button, 
  Dialog, 
  DialogActions, 
  DialogContent,
  DialogContentText, 
  DialogTitle,
  AppBar,
  Divider,
  Toolbar,
  Fab,
  MenuItem,
  ListItem
} from '@material-ui/core';

import { makeStyles, ThemeProvider  } from '@material-ui/core/styles';
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import GetAppIcon from '@material-ui/icons/GetApp';

import {client, w3cwebsocket as W3Cwebsocket} from "websocket"
import moment from 'moment';


const Room = (props) =>{
  
  const [darkState, setDarkState] = useState(true); 

  const roomCode = props.roomCode;
  const isHost = props.isHost;
  const name = props.name;
  
  const classes = useStyles();

  const [tnc, setTnc] = useState(true);

  const [members, setMembers] = useState([])
  const [isLocked, setIsLocked] = useState(props.isLocked);
  const [isActive, setIsActive] = useState(true);

  
  const [timeLeft, setTimeLeft] = useState();
  const [sizeLeft, setSizeLeft] = useState('500M')

  const [open, setOpen] = useState(false);
  const [roomStatus, setRoomStatus] = useState([]);
  const [chatText, setChatText] = useState([]);
  const [fileURL, setFileURL] = useState([]);

  var now = new moment();



  const getMembers = () => {
    
  const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    fetch("/api/get-members/", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        var membersCleaned = [];
  
        for(let i = 0; i < data.members.length; i++){
          if (data.members[i] === ""){
            continue;
          }
          
          membersCleaned.push(data.members[i]);
        }

        setMembers(membersCleaned);
      });
  }

  const getTimeLeft = () => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    fetch("/api/get-timeleft/", requestOptions)
      .then((response) => response.json())
      .then((data) => setTimeLeft(data.time));
  }

  const getFiles = () => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    };

          
    fetch("/api/get-files/", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      setFileURL([]);
      for (let i = 0; i < data.files.length; i++){
        console.log(data.files[i]);
        setFileURL((prevURLs) => [...prevURLs, data.files[i]]);
      }
    })

  }

  const getSpaceLeft = () => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

          
    fetch("/api/get-space/", requestOptions)
    .then((response) => response.json())
    .then((data) => {
        setSizeLeft(data.space_left);
    })
  }

  useEffect(() => {
    getSpaceLeft()
    getMembers();
    getTimeLeft();
    getFiles();

    client = new W3Cwebsocket('ws://'+ window.location.host +':8001/ws/room/' + roomCode +'/')
    
    client.onmessage = (receivedData) => {
      
      let data = JSON.parse(receivedData.data);

      console.log(data)

      if(data.member_joined){
        setMembers((prevMembers) => [...prevMembers, data.member_joined]);
        setRoomStatus((prevRoomStatus) => [...prevRoomStatus, "'" + data.member_joined + "'" + " joined!"]);
      }

      
      if(data.member_rejoined){

        if(data.member_rejoined.old_name == name){
          setIsActive(false);
        }
        else if(data.member_rejoined.old_name == data.member_rejoined.new_name){
          setRoomStatus((prevRoomStatus) => [...prevRoomStatus, "'" + data.member_rejoined.new_name +"' rejoined"])
        }
        else{
          setMembers((prevMembers) => {
            let index = prevMembers.indexOf(data.member_rejoined.old_name);
            if (index != -1){
              prevMembers.splice(index, 1);
              return [...prevMembers, data.member_rejoined.new_name];
            }

            return prevMembers;
          });
          setRoomStatus((prevRoomStatus) => [...prevRoomStatus, "'" + data.member_rejoined.old_name +"' rejoined as '" + data.member_rejoined.new_name + "'"])
        }

      }

      if(data.room_destroyed){
        setIsActive(false);
        client.close();
      }

      if(data.message){
        if (data.message.name == name){
          setChatText((prevText) => prevText);
        }
        else if (data.message.name == 'THIS_IS_SIGNIFYING_THAT_A_FILE_HAS_BEEN_SENT'){
          getSpaceLeft()
          getFiles();
          setRoomStatus((prevRoomStatus) => [...prevRoomStatus, "A new file has been added."])
        }
        else if (data.message.name == 'ROOM_HAS_NOW_BEEN_LOCKED_FOR_EVERYONE'){
          setIsLocked(true)
        }
        else if (data.message.name == 'ROOM_HAS_NOW_BEEN_UNLOCKED_FOR_EVERYONE'){
          setIsLocked(false)
        }
        else if(data.message.name == 'SOMEONE_HAS_JUST_LEFT_THE_ROOM'){
          if(data.message.member_left == name){
            setIsActive(false)
          }
          else{
            setMembers((prevMembers) => {
              let index = prevMembers.indexOf(data.message.member_left);
              if (index != -1){
                prevMembers.splice(index, 1);
              }
  
              return prevMembers;
            })
            setRoomStatus((prevRoomStatus) => [...prevRoomStatus, data.message.member_left + " has left."]);
          } 
          
        }
        else{
          setChatText((prevText) => [...prevText, data.message])
        }
        
      }
    }

  }, [])

  
  const handleLockChange = () => {
    
    if (!isLocked){

      setIsLocked(true);
      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };

      client.send(JSON.stringify({
        message: {
            name: "ROOM_HAS_NOW_BEEN_LOCKED_FOR_EVERYONE",
            message: "placeholder",
            time: now.format("HH:mm"),
        }
      }));
    }

    else{

      setIsLocked(false);
      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };

      client.send(JSON.stringify({
        message: {
            name: "ROOM_HAS_NOW_BEEN_UNLOCKED_FOR_EVERYONE",
            message: "placeholder",
            time: now.format("HH:mm"),
        }
      }));
    }
  }

  const leaveRoom = () => {

    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      };
      
      fetch("/api/leave-room/", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setIsActive(false);
        setOpen(false);

        client.send(JSON.stringify({
          message: {
              name: "SOMEONE_HAS_JUST_LEFT_THE_ROOM",
              message: "placeholder",
              time: now.format("HH:mm"),
              member_left: name
          }
        }));
      })
  }

  const destroyRoom = () => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" }
      };
      
      fetch("/api/delete-room/", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setIsActive(false);
        setOpen(false);
      })
  }


  if (isActive){
  
    const roomLogs = roomStatus.map((message) => message && <div> <MenuItem disabled = {true} key={message}> {message} </MenuItem> <Divider /> </div>);
    
    const fileURLs = fileURL.map((file) => file && 
     
      
      <ListItem> 
        {file.file_name.length > 40? file.file_name.slice(0, 40) + "...": file.file_name} 
        
        <Button style={{ marginLeft: "auto" }} size = "20"> 
          <a className = {classes.anchor} href = {file.file_url} target = "_blank" > 
            <GetAppIcon />
          </a>
        </Button>
      </ListItem> 
      
    );

    const clock =  <MenuItem>
      
      { timeLeft && <CountdownCircleTimer
      size = {95}
      isPlaying
      id = "hello"
      duration = {3600}
      initialRemainingTime = {timeLeft}
      onComplete = {() => setIsActive(false)}
      //primary first, secondary next
      colors={[
      [darkState? "#7d4fba": "#3f51b5", 0.9],
      [darkState? "#ff4085": "#f50057", 0.1],
      ]}>


        {({ remainingTime }) => {
          
          const minutes = Math.floor(remainingTime / 60);
          const seconds = remainingTime % 60;
          setTimeLeft(remainingTime);

          if(minutes >= 10 && seconds >= 10) {
            return <Typography> {minutes}:{seconds} </Typography>
          }
          
          else if(minutes >= 10 && seconds < 10) {
            return <Typography> {minutes}:0{seconds} </Typography>
          }

          else if(seconds < 10) {
            return <Typography> 0{minutes}:0{seconds} </Typography>
          }
          
          else{
            return <Typography> 0{minutes}:{seconds} </Typography>
          }
      }}

      </CountdownCircleTimer>
    }
      
    </MenuItem> 
    
    return(
      <div className = 'room'>
        <ThemeProvider theme = {darkState? darkTheme: lightTheme} >
          <CssBaseline />

          <Grid container spacing = {1} align = "center"  className =  {classes.centerHorizontal}>

            <Grid item xs = {12}>
              <Typography component = "h3" variant = "h3" display="inline">
                Room Code: 
              </Typography>
              <Typography color = {darkState? "primary": "primary"} component = "h3" variant = "h3" display="inline">
                &nbsp; {roomCode}
              </Typography>
            </Grid>

         
            <Box display={{ xs: "none"}}>
              {/* This is just to keep the track of time globally */}
              { timeLeft && <CountdownCircleTimer
              size = {95}
              isPlaying
              duration = {3600}
              initialRemainingTime = {timeLeft}
              onComplete = {() => setIsActive(false)}
              colors={[
                [darkState? "#7d4fba": "#3f51b5", 0.9],
                [darkState? "#ff4085": "#f50057", 0.1],
              ]}>

              {({ remainingTime }) => {
                const minutes = Math.floor(remainingTime / 60);
                const seconds = remainingTime % 60;
                setTimeLeft(remainingTime);

                if(minutes >= 10 && seconds >= 10) {
                  return <Typography> {minutes}:{seconds} </Typography>
                }
                
                else if(minutes >= 10 && seconds < 10) {
                  return <Typography> {minutes}:0{seconds} </Typography>
                }

                else if(seconds < 10) {
                  return <Typography> 0{minutes}:0{seconds} </Typography>
                }
                
                else{
                  return <Typography> 0{minutes}:{seconds} </Typography>
                }
              }}

              </CountdownCircleTimer>
              }
    
            </Box> 

            <Grid item xs = {12}>

              <ChatComponent 
              darkState = {darkState}
              chatText = {chatText} 
              setChatText = {setChatText} 
              name = {name} 
              members = {members} 
              client = {client} 
              files = {fileURLs}
              sizeLeft = {sizeLeft}/>

            </Grid> 

 
          </Grid>
                          
          <AppBar color = "primary" className = {classes.stickToBottom}>
            <Toolbar >
    
              <BottomMenu title = "Room Members' Activity" list = {roomLogs}/>

              <BottomMenu title = "Time Left" list = {clock}/>

              <div className = {classes.rightAlign} />

              <Fab color="secondary" aria-label="add" className={classes.fabButton} onClick = {() => setDarkState(!darkState)}>
                {!darkState? <NightsStayIcon />: <WbSunnyIcon/>}
              </Fab>

              <Divider />

              
              
              <Fab color="secondary" aria-label="add" className={classes.fabButton} onClick = {() => setDarkState(!darkState)}>
              <Tooltip title = {darkState? "You really want to change to light mode?" : "MY EYEES, MY EYYEES."} interactive>
                <span>
                  {!darkState? <NightsStayIcon />: <WbSunnyIcon/>}
                </span>
                </Tooltip>
              </Fab>
              

              <Box edge = "end" pr = {5}>
                
                {isHost && 
                <Tooltip title = 
                {isLocked? "Room is locked. Click to let new people join the room": "Room is open for all. Click to prevent new people from joining"} interactive>
                  <Button
                  color = 'black'
                  onClick = {handleLockChange}
                  startIcon = {isLocked? <LockOpenIcon />: <LockIcon />}  
                  >
                  {isLocked && <div> Unlock </div>}
                  {!isLocked && <div> Lock </div>}

                  </Button>
                </Tooltip>
                }

                
                {!isHost && 
                <Tooltip title = {isLocked? "The room is locked for new people": "The room is open for everyone to join"} interactive>
                  <span>
                    <Button
                    variant = "outline"
                    disabled = {true}
                    startIcon = {isLocked? <LockIcon />: <LockOpenIcon />}  
                  >
                    {isLocked && "Locked"}

                    {!isLocked && "Open"}
                    
                    </Button>
                  </span>
                </Tooltip>
                }

              </Box>

              <Box edge = "end">
                <Button color="secondary" variant = "contained" onClick = {() => setOpen(true)}>
                  {isHost? "Destroy" : "Leave"} Room
                </Button>
              </Box>

            </Toolbar>
          </AppBar>
          

          <Dialog
            open = {open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title"> {isHost? "Destroying": "Leaving"} this Room </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Are you sure you want to {isHost? "destroy": "leave"} this room?  {!isHost? "You won't be able to rejoin if the room gets locked!": ""}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick = {isHost? destroyRoom: leaveRoom} color = "primary">
                Yes
              </Button>
              <Button onClick = {() => setOpen(false)} color = "secondary" autoFocus>
                No
              </Button>
            </DialogActions>
          </Dialog>
        
          <Dialog open = {tnc} aria-labelledby="form-dialog-title">
            <DialogTitle style = {{overflowWrap: "break-word"}} id="form-dialog-title"> 
                Make sure you've read our ToS in its entirety! 
            </DialogTitle>

            <DialogActions>


              <Button onClick = {() => setTnc(false)} color = "primary">
                I've read and accepted it
              </Button>


              <a href = '/terms' className = {classes.anchor} target = "_blank">
                <Button color = "secondary">
                  Take me there
                </Button>
              </a>


                
            </DialogActions>
        </Dialog>
        
        </ThemeProvider>
      </div>
    );
  }

  else { 
    return <ThemeProvider theme = {darkTheme}> <CssBaseline /> <GoodBye name = {name} /> </ThemeProvider> ;
  }

}

const useStyles = makeStyles((theme) => ({
  
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em'
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid slategrey'
    }
  },

  stickToBottom: {
    top: 'auto',
    bottom: 0,
  },

  rightAlign: {
    flexGrow: 1,
  },

  centerHorizontal: {
    position: "absolute",
    width: "100%",
  },

  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
  anchor: {
    color: "inherit", 
    textDecoration: "inherit",
    textAlign: "right",
  },
 
}));


export default Room;


