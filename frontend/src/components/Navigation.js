import React from 'react';
import { AppBar, Toolbar, Typography, Box, MenuItem } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';

import { darkTheme } from './CustomTheme';



const useStyles = makeStyles((theme) => ({
  
    anchor: {
      color: "inherit", 
      textDecoration: "inherit",
    },
    
    rightAlign: {
        flexGrow: 1,
      },
   
  }));
  
  

const Navigation = (props) =>{

    const classes = useStyles();
    
    return(
        <ThemeProvider theme = {darkTheme}>
            <AppBar style = {{background: "#000000"}}>
                <Toolbar>
                    <a href = "/" className = {classes.anchor}>
                    <MenuItem onClick = {() => props.history.push('/')}>
                        Home
                    </MenuItem>
                    </a>
                    <a href = "/" className = {classes.anchor}>
                    <MenuItem onClick = {() => props.history.push('/')}>
                        About (Also takes you home for now)
                    </MenuItem>
                    </a>

                    <div className = {classes.rightAlign} />


                    <Box edge = "end">
                        <a href = "/" className = {classes.anchor}>
                        <MenuItem onClick = {() => props.history.push('/')}>
                            Contact (Guess where this takes ya)
                        </MenuItem>
                        </a>
                    </Box>
                </Toolbar>
            </AppBar>
      </ThemeProvider>
    );
}


export default Navigation;