import React, {useState} from 'react';
import { Button, CssBaseline, Grid, Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { darkTheme, lightTheme } from '../CustomTheme'
const CreateRoom = (props) => {

    const [data, setData]= useState({});

    const handleRoomButtonPressed = () => {
        const requestOptions = {
          method: "GET",
          headers: { "Content-Type": "application/json" }
        };

        fetch("/api/create-room/", requestOptions)
          .then((response) => response.json())
          .then((receivedData) => setData(receivedData))
    };

    
    const destroyRoom = () => {
        const requestOptions = {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          };
          
          fetch("/api/delete-room/", requestOptions)
          .then((response) => response.json())
          .then((data) => {
            setIsActive(false);
            setOpen(false);
          })
    }


    if(data.already_host){
        return ( 
            <ThemeProvider theme = {darkTheme}>
            <CssBaseline />
                <Grid container spacing =  {1}  align = "center">
                    <Grid item xs = {12}>
                        <Typography component="h4" variant="h4">
                            Already host of: {data.already_host}
                        </Typography>
                    </Grid>
                    <Grid item xs = {12} spacing =  {5}>
                        <Button size = "large" color = "primary" variant="contained" onClick = {() => props.history.push("/room/" + data.already_host)}>
                            Go to that Room
                        </Button>
                        
                        <Button size = "large" onClick = {() => {
                            destroyRoom();
                            handleRoomButtonPressed();
                        }} color = "secondary">
                            Destroy Room
                        </Button>
                    </Grid>
                </Grid>
            </ThemeProvider>  
        )
    }

    else if(data.code) {
        props.history.push("/room/" + data.code);
    }
    
    return (    
        <ThemeProvider theme = {darkTheme}>
            <CssBaseline />
            <Grid>
                <Grid container spacing={1}>
                    <Grid item xs={12} align="center">
                    <Typography component="h2" variant="h2">
                        FTP Mania
                    </Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={3}>
                    <Grid item xl={6} align="center">
                            <Button
                            color="primary"
                            variant="contained"
                            size = "large"
                            onClick={handleRoomButtonPressed}
                            >
                            Create Room
                            </Button>
                    </Grid>
                    <Grid item xl={6} align="center">
                            <Button
                            color="secondary"
                            variant="contained"
                            size = "large"
                            onClick={() => props.history.push("/room/")}
                            >
                            Join A Room
                            </Button>
            
                    </Grid>
                </Grid>
            </Grid> 
        </ThemeProvider>          
    );
}

export default CreateRoom;