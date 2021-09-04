import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import { darkTheme } from './CustomTheme';
import { CssBaseline } from '@material-ui/core';

const About = (props) => {

    if (window.location.pathname == '/about/'){
        return (
            <ThemeProvider theme = {darkTheme}>
                <CssBaseline />
                <div className = "center">
                    this is where the about page goes
                </div>
            </ThemeProvider>
        );
    }

    else {
        return(
            <ThemeProvider theme = {darkTheme}>
            <CssBaseline />
            <div className = "center">
                this is where the T&amp;C page goes
            </div>
        </ThemeProvider>
        );
    }
}

export default About;