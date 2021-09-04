import React, {Suspense} from 'react';
import { CircularProgress, CssBaseline } from '@material-ui/core';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import {render} from 'react-dom';

import { darkTheme } from './CustomTheme';

// import CreateRoom from './RoomComponents/CreateRoom'
// import JoinRoom from './RoomComponents/JoinRoom'
// import About from './About';
// import Contact from './Contact';

const App = () => {
    const CreateRoom = React.lazy(() => import('./RoomComponents/CreateRoom'));
    const JoinRoom = React.lazy(() => import('./RoomComponents/JoinRoom'));
    
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
