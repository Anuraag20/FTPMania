import React from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import CreateRoom from './RoomComponents/CreateRoom'
import JoinRoom from './RoomComponents/JoinRoom'

const App = (props) => {

    return(
        <div className = "center">
        <Router>
            <Switch>
                <Route exact path = "/" component = {CreateRoom} />
                {/* The '?' in the url below helps us to pass roomCode as an optional argument */}
                <Route path = "/room/:roomCode?" component = {JoinRoom}/>
            </Switch>
        </Router>
        </div>
    );
    
}

export default App;
