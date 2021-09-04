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
            <AppBar style = {{background: "#000000", maxHeight: "15vh"}}>
                <Toolbar>
                    <a href = "/" className = {classes.anchor}>
                    <MenuItem>
                        Home
                    </MenuItem>
                    </a>

                    <a href = "/about" className = {classes.anchor}>
                    <MenuItem>
                        About FTPMania
                    </MenuItem>
                    </a>

                    <div className = {classes.rightAlign} />


                    <Box edge = "end">
                        <a href = "/contact" className = {classes.anchor}>
                        <MenuItem>
                            Contact
                        </MenuItem>
                        </a>
                    </Box>
                </Toolbar>
            </AppBar>
      </ThemeProvider>
    );
}


export default Navigation;