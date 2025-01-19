import React from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';

import { darkTheme } from './CustomTheme';
import { 
    CssBaseline, 
    Typography,
    Grid,
    AppBar,
    CardMedia, 
    Paper
} from '@material-ui/core';
import {SocialIcon} from 'react-social-icons'
import { isDesktop }  from "react-device-detect";

const Contact = (props) => {

    const classes = useStyles();
    var appBarColor = isDesktop? "transparent": "black";
    return (
        <ThemeProvider theme = {darkTheme}>
            <CssBaseline />
            <div style = {{paddingTop: "10vh", maxWidth: "100vw"}}>
                <Typography style = {{textAlign: "center"}} component = "h3" variant = "h3">
                    About the Dev
                </Typography>

                <Grid container justifyContent = "center" style = {{marginBottom: "3vh"}}>
                    <Grid item xs = {12} style = {{textAlign: "center"}}>
                        <Typography component = "body1" variant = "body1">
                            Hi there, this is Anuraag. I am a Software Developer and Data Scientist from London and <b> FTPMania </b> is my project.

                            <br />

                            All of my social media info is available below. So, hit me up!

                            <br />
                            <br />
		
                           
                        </Typography>
                    </Grid>
                </Grid>

                {!isDesktop &&
                <span>
                    <br />
                    <br />
                    <br />
                    <br /> 
                    <br />
                    <br />
                    <br />
                    <br />
                </span>
                }          
                <AppBar style={{ background: appBarColor, boxShadow: 'none', top: 'auto', bottom: 0, height: "9vh"}}>
                    <Grid container spacing = {1} style = {{textAlign: "center", paddingBottom: "10px", paddingTop: "7px"}}>
                        <Grid item xs = {4}> 
                            <SocialIcon url = "https://www.linkedin.com/in/anuraag-m/" fgColor = "#FFFFFF" target = "_blank"/>
                            <a href = "https://www.linkedin.com/in/anuraag-m/" className = {classes.anchor} target = "_blank"> 
                                &nbsp;&nbsp;LinkedIn
                            </a>
                        </Grid>


                        <Grid item xs = {4}> 
                            <SocialIcon url = "https://github.com/Anuraag20" fgColor = "#FFFFFF" bgColor = "#000000" target = "_blank"/>
                            <a href = "https://github.com/Anuraag20" className = {classes.anchor} target = "_blank"> 
                                &nbsp;&nbsp;GitHub 
                            </a>
                        </Grid>

                        
                        <Grid item xs = {4}> 
                            <SocialIcon url = "https://anuraag.tech/" bgColor = "#BB100B" fgColor = "#FFFFFF" target = "_blank"/>
                            <a href = "https://anuraag.tech/" className = {classes.anchor} target = "_blank"> 
                                &nbsp;&nbsp; Website 
                            </a>
                        </Grid>
                    </Grid>
                </AppBar>
                
            </div>
        </ThemeProvider>
    );
}

const useStyles = makeStyles ((theme) => ({
    '@global': {
      '*::-webkit-scrollbar': {
        width: '0.9em'
      },
      '*::-webkit-scrollbar-track': {
        '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
      },
      '*::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgb(0,0,0, .5)',
        outline: '1px solid slategrey'
      }
    },
    anchor: {
        color: 'inherit',
        textDecoration: 'inherit'
    }
  }));

export default Contact;
