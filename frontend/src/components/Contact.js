import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import { darkTheme } from './CustomTheme';
import { CssBaseline } from '@material-ui/core';

const Contact = (props) => {

    return (
        <ThemeProvider theme = {darkTheme}>
            <CssBaseline />
            <div  className = "center">
                this is where the contact page goes
            </div>
        </ThemeProvider>
    );
}

export default Contact;