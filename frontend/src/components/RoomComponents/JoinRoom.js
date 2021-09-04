import React, {useState, useEffect, Suspense} from 'react';
import {render} from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { darkTheme, lightTheme } from '../CustomTheme';
import {
  Grid, 
  Typography, 
  TextField, 
  Button, 
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogTitle,
  CircularProgress,
  CssBaseline,
} from '@material-ui/core';


const JoinRoom = (props) => {

    
    const [isHost, setIsHost] = useState(false);
    const [isLocked, setIsLocked] = useState(false);
    const [name, setName] = useState();
    const [roomCode, setRoomCode] = useState(props.match.params.roomCode);

    const [nameValidator, setNameValidator] = useState();
    const [noName, setNoName] = useState(true);

    //Related To fetching and handling room code
    const [roomValidated, setRoomValidated] = useState(false);

    const[roomError, setRoomError] = useState();
    const [noRoom, setNoRoom] = useState(true? !roomCode: false); 

    const [isAlreadyHost, setIsAlreadyHost] = useState();
    const [errorStatus, setErrorStatus] = useState();

    
    useEffect(() => {
        getRoomDetails();
    }, [noName])
    
    const getRoomDetails = () => {

        fetch("/api/get-room" + "?code=" + roomCode)
        .then((response) => {
            if (!response.ok){
                return {'status': response.status}
            }
            else{
                return response.json()
            }
        })
        .then((data) => {

            if(data.already_host){
                
                setIsAlreadyHost(data.already_host);
                setErrorStatus();
            }

            else if (data.status == 400 || data.status == 403 || data.status == 404 || data.status == 301){
                setRoomValidated(false);
                setErrorStatus(data.status);
            }

            else{
                
                setErrorStatus();
                setName(data.name);
                setIsHost(data.is_host);
                setIsLocked(data.is_locked);

                setRoomValidated(true);
            }
        })
        .catch((data) => console.log(data));
    }

    const destroyRoom = () => {
        const requestOptions = {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({})
          };
          
          fetch("/api/delete-room/", requestOptions)
          .then((response) => response.json())
          .then((data) => {
            setIsActive(false);
            setOpen(false);
          })
    }

    const onButtonPressed = (e) => {

        if ((name == '') || (name == "" )||(name === null)){
            setNameValidator("This field cannot be left blank");
            setNoName(true);
        }

        else{
            
            const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: name
            }),
            };
            
            fetch("/api/update-name/?code=" + roomCode, requestOptions)
            .then((response) => response.json())
            .then((response) => {
    
                if (response.same_name == "present"){
                    setNameValidator("Someone in the room already picked this name...");
                }
                else if (response.bad_request){
                    setErrorStatus(400);
                }
                else if (response.expired){
                    setErrorStatus(301);
                }
                else{
                    setNoName(false);
                }
            });
        }

    }


    const handleKeyPress = (event) => {
        if (event.code === "Enter" || event.code === "NumpadEnter") {
          onButtonPressed(event);
        } 
    };

    const handleJoinKeyPress = (event) => {
        if (event.code === "Enter" || event.code === "NumpadEnter") {
          
            if(!roomCode){
                setRoomError("Please Enter the Room Code");
            }
            else{
                setErrorStatus();
                setNoRoom(false);
                getRoomDetails();
                props.history.push("/room/" + roomCode);
            }   
        } 
    };
    
    

    if(noRoom)
    {
        return(
            <ThemeProvider theme = {darkTheme}>
                <CssBaseline />
                <Grid container spacing = {3} justifyContent = "center">
                    <Grid container spacing={1}>
                        <Grid item xs={12} align="center">
                        <Typography component="h1" variant="h2">
                            Room Code 
                        </Typography>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} align="center">
                        <TextField
                        align = "center"
                        inputProps={{min: 0, style: { textAlign: 'center' }}}
                        autoComplete='off'
                        onKeyPress = {handleJoinKeyPress}
                        error = {roomError}
                        autoFocus
                        margin="dense"
                        id="code"
                        value = {roomCode} 
                        helperText = {roomError}
                        onChange = {(e) => {setRoomCode(e.target.value)}}
                        type="code"
                        fullWidth
                        />
                    </Grid>

                 
                        <Grid item xl = {12}>

                            <Button
                            size = "medium"
                            color="primary"
                            variant="contained"
                            onClick={() => {

                                if(!roomCode){
                                    setRoomError("Please Enter the Room Code");
                                }
                                else{
                                    setErrorStatus();
                                    setNoRoom(false);
                                    getRoomDetails();
                                    props.history.push("/room/" + roomCode);
                                }       
                            }}
                            >
                            Join The Room
                            </Button>
                       
                    </Grid>
                </Grid> 
            </ThemeProvider>
        )        
    }

    if(isAlreadyHost){
        return ( 
            
            <ThemeProvider theme = {darkTheme}>
                    <CssBaseline />
                <Grid container spacing =  {1}  align = "center">
                    <Grid item xs = {12}>
                        <Typography component="h4" variant="h4">
                            Already host of: {isAlreadyHost}
                        </Typography>
                    </Grid>
                    <Grid item xs = {12} spacing =  {3}>
                        <Button size = "large" color = "primary" variant="contained" onClick = {() => {
                            props.history.push("/room/" + isAlreadyHost);
                            setIsAlreadyHost();
                            }}>
                            Go to that Room
                        </Button>
                        
                        <Button size = "large" onClick = {() => {
                            destroyRoom();
                            window.location.reload(false);
                            }} color = "secondary">
                            Destroy Room
                        </Button>
                    </Grid>
                </Grid>  
            </ThemeProvider>
        )
    }

    if(errorStatus){

        if (errorStatus == 404){

            setNoRoom(true);
            setRoomError("No such room exists. Tip: Room Codes are CaSe SenSiTive");
        }

        else{ 
            return(
                <ThemeProvider theme = {darkTheme}>
                    <CssBaseline />
                    <Typography component = "h2" variant = "h2">

                        {errorStatus == 403 && "Looks like the room has been locked by the host!"}

                        {erroStatus == 301 && "This room has expired and will be deleted soon"}

                        {errorStatus != 403 && errorStatus != 301 && "Something went wrong..."}

                    </Typography>
                </ThemeProvider>
            );
        }
    }

    if(roomValidated){
        
        if (noName){
                        
            return (

                
            <ThemeProvider theme = {darkTheme}>
                <CssBaseline />
                    <Dialog open={noName} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title"> Enter your name </DialogTitle>
                    <DialogContent>
                        <TextField
                        inputProps={{ maxLength: 20 }}
                        autoFocus
                        onKeyPress = {handleKeyPress}
                        error = {nameValidator}
                        margin = "dense"
                        id="name"
                        helperText = {nameValidator}
                        onChange = {(e) => setName(e.target.value)}
                        value = {name} 
                        label = "Name"
                        type = "name"
                        fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={onButtonPressed} color="primary">
                        OK!
                        </Button>
                    </DialogActions>
                    </Dialog>
                </ThemeProvider>
            );    

        }
    }
    

    if (roomValidated && !noName){
        const Room = React.lazy(() => import('./Room'));
        const appDiv = document.getElementById("app");

        render(
            <ThemeProvider theme = {darkTheme}>
                <CssBaseline />
                <Suspense fallback={<CircularProgress className = "center" />}> 
                    <Room roomCode = {roomCode} isHost = {isHost} isLocked = {isLocked} name = {name} />
                </Suspense>
            </ThemeProvider>
        , appDiv)

  
    }


    return (
        <ThemeProvider theme = {darkTheme}>
            <CssBaseline />
            <CircularProgress />
        </ThemeProvider> 
    );

    

}

export default JoinRoom;

