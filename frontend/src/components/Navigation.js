import React from 'react';
import { AppBar, Toolbar, Tooltip, Box, MenuItem } from '@material-ui/core';
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
		    
	            
                    <a href = "/research" className = {classes.anchor}>
                        <Tooltip title = "Help me out to collect some data!" interactive> 
                            <MenuItem>
                                Market Research
                            </MenuItem>
                        </Tooltip>
                    </a>
                    

                    <div className = {classes.rightAlign} />
			
                </Toolbar>
            </AppBar>
      </ThemeProvider>
    );
}


export default Navigation;
