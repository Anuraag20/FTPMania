import React, {useState} from 'react';
import { Button, CssBaseline, Grid, Typography, CardMedia, Box } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { darkTheme } from '../CustomTheme';

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
              handleRoomButtonPressed()
              return data;
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
            <Grid style = {{maxHeight: "80vh"}}>
            <Box style = {{textAlign: "center"}}>

                <Typography component = "h1" variant = "h1" >
                    FTPMania
                </Typography>

            </Box> 
            
            <Grid container spacing = {2} style = {{margin: "auto", maxWidth: "40vw"}}> 
            <Grid item xs = {6} >
           
                <Button
                fullWidth
                color="primary"
                variant="contained"
                size = "large"
                onClick={handleRoomButtonPressed}
                >
                Create Room
                </Button>

            </Grid>
            <Grid item xs = {6} >
                <Button
                fullWidth
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