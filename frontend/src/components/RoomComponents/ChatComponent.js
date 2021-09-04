import React, {useState, useEffect, useRef} from 'react';

import { 
    makeStyles,
    Paper,
    Box,
    Grid,
    Divider,
    TextField,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Avatar,
    Fab,
    Card
 } from '@material-ui/core';

import SendIcon from '@material-ui/icons/Send';
import { client } from 'websocket';
import moment from 'moment';

import FileManager from './FileManager';


const useStyles = makeStyles((theme) => ({
    divider: {
        color: 'grey'
    },
    table: {
        minWidth: 650,
    },
    chatSection: {
        width: '100%',
        height: '60vh'
    },
    headBG: {
        backgroundColor: '#e0e0e0'
    },
    borderRight500: {
        borderRight: '1px solid grey',
    },
    messageArea: {
        height: '50vh',
        overflowY: 'auto',
        top: 'auto',
        bottom: 0,
    },

    textField: {
        
        [`& fieldset`]:{
            borderRadius:30,
        },
        
    },

}));

const ChatComponent = (props) => {
    

    const scrollRef = useRef(null);
    const classes = useStyles();
    const [chatBoxText, setChatBoxText] = useState("");


    const handleKeyPress = (event) => {
        if (event.code === "Enter" || event.code === "NumpadEnter") {
            setChatBoxText("");
          
          if(chatBoxText && chatBoxText.trim()){
            sendMessage();
          }
        }
    };
    
    const sendMessage = () => {
        var now = new moment();
        if( (chatBoxText && chatBoxText.trim() )){
            client.send(JSON.stringify({
                message: {
                    name: props.name,
                    message: chatBoxText,
                    time: now.format("HH:mm"),
                }
            }));
            props.setChatText((prevText) => [...prevText, {
                name: props.name,
                message: chatBoxText,
                time: now.format("HH:mm")
            }]);
        }
        setChatBoxText("");
    };

    const activeMembers = props.members.map((member) =>
        member != props.name &&
        <ListItem key = {member}>
            <ListItemIcon>
                <Avatar alt = {member}> {member == props.name? null : member.slice(0,1)} </Avatar>
            </ListItemIcon>
            <ListItemText primary = {member}> {member} </ListItemText>
        </ListItem>        
    );

    const chats = props.chatText.map((chat, i = 0) => 
     
        <ListItem key = {i++}>

            <Grid container spacing = {1}>

            {props.name != chat.name && 
            <Grid item xs = {1}>
                <Box pt = {2.5} >
                    <Avatar alt = {chat.name}>  {chat.name.slice(0,1)} </Avatar>
                </Box>
            </Grid>
            }

            <Grid item xs={11}>

                <Typography 
                    color = {(props.name == chat.name)? "primary" : "secondary" }>
                    <ListItemText
                    align={chat.name == props.name? "right": "left"} 
                    primary = {chat.name == props.name? "You": chat.name} />
                </Typography>
                <ListItemText style = {{"word-wrap": "break-word"}} align={chat.name == props.name? "right": "left"} primary = {chat.message} />
                <ListItemText align = {chat.name == props.name? "right": "left"} secondary = {chat.time} />

            </Grid>

            {props.name == chat.name && 
            <Grid item xs = {1}>
                <Box pt = {2.7} >
                    <Avatar alt = {props.name} />
                </Box>
            </Grid>
            }

            </Grid>


        </ListItem>

    );

    useEffect(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollIntoView({ behaviour: "smooth" });
        }
      }, [props.chatText]);

  return (
        <Grid container component={Paper} style = {{minWidth: '100vw'}} className={classes.chatSection}>
            <Grid item xs={2} className={classes.borderRight500}>

                <List style={{maxHeight: "7vh", overflow: 'hidden'}}>
                        <Typography color = {props.darkState? "white" :"primary"} component = "h5" variant = "h5" >
                            Members ({props.members.length})
                        </Typography>
                </List>

                <Divider />
                    
                <Box style={{maxHeight: "45vh", overflow: 'auto'}} >
                  
                    <List>
                        <ListItem key = {props.name}>
                            <ListItemIcon>
                            <Avatar/>
                            </ListItemIcon>
                            <ListItemText> You </ListItemText>
                        </ListItem>

                        {activeMembers}
                    </List>
                </Box>
            </Grid>

            <Grid item xs={6} className={classes.borderRight500}>

                <List className={classes.messageArea}>

                    {chats == "" &&
                        <Paper elevation = {5} pt = {1} align = "center" style = {{width: '25vw'}}>
                            <ListItemText primary = "Start the convo!" />
                        </Paper> 
                    }
                    {chats}

                    <li ref={scrollRef} />

                </List>

             
                <Grid container>
                    <Grid item xs={11}>
                        <Box pl = {2}>
                            <TextField 
                            className = {classes.textField} 
                            maxRows = {1} 
                            value = {chatBoxText} 
                            onChange = {(e) => setChatBoxText(e.target.value)}  
                            placeholder = "Type Something" 
                            onKeyPress = {handleKeyPress} 
                            variant = "outlined"
                            fullWidth
                            />
                        </Box>
                    </Grid>
                    <Grid xs={1}>
                        <Box pt = {0.7}>
                            <Fab size = 'small' color="primary" aria-label="add" onClick = {sendMessage} > <SendIcon/> </Fab>
                        </Box>
                    </Grid>

                </Grid>
            
            </Grid>

            <Grid item xs = {4}>
                <List style={{maxHeight: "7vh", overflow: 'hidden'}}>
                    <Typography color = {props.darkState? "white" :"primary"} component = "h5" variant = "h5">
                        Received Files ({Math.round(props.sizeLeft/1000000)} MB Left)
                    </Typography>
                </List>
                <Divider />
                <Box style={{height: "44vh", overflow: 'auto'}}>

                    <List>
                        {props.files}
                    </List>
                </Box>

                <Divider />
                <Box style={{maxHeight: "9vh", overflow: 'auto'}}>
                    <FileManager sizeLeft = {props.sizeLeft} />
                </Box>
            </Grid>
        </Grid>
  );
}


export default ChatComponent ;