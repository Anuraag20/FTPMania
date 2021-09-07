import React, {Suspense} from 'react';
import { CircularProgress, CssBaseline, Typography } from '@material-ui/core';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { isDesktop }  from "react-device-detect";


import { darkTheme } from './CustomTheme';
const App = () => {
    const CreateRoom = React.lazy(() => import('./RoomComponents/CreateRoom'));
    const JoinRoom = React.lazy(() => import('./RoomComponents/JoinRoom'));
    
    if(!isDesktop){
        return(
        <div className = "center">
            <ThemeProvider theme = {darkTheme}>
                <CssBaseline />
                <Typography component = "h2" variant = "h2">
                    Sorry! We are still working on the mobile version.
                </Typography>
            </ThemeProvider>
        </div>
        );
    }

    return(
        <div className = "center">
        <Suspense fallback = 
        {
            <ThemeProvider theme = {darkTheme}>
                <CssBaseline />
                <CircularProgress className = "center" />
            </ThemeProvider>
        }>
            <Router>
                <Switch>
                    <Route exact path = "/" component = {CreateRoom} />
                    {/* The '?' in the url below helps us to pass roomCode as an optional argument */}
                    <Route path = "/room/:roomCode?" component = {JoinRoom}/>             
                </Switch>
            </Router>
        </Suspense>
        </div>
    );
    
}

export default App;
