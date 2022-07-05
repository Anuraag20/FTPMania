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
                            Hi there, this is Anuraag. I am a Computer Science Student from Mumbai and <b> FTPMania </b> is my project.

                            <br />

                            All of my social media info is available below. So, hit me up!

                            <br />
                            <br />

                            Do you have too much money?
                            <br />
                            Do you feel like giving some of it away to a 20-year-old developer who worked <b> REALLY </b> hard on this project?
                            <br />
                            If so, <i> YOU ARE IN LUCK! </i> 
                            <br />
                            Go ahead and buy me a Cup of Coffee! (Several Cups of Coffee sounds pretty great. I'd also settle for a VadaPav tbh)

                            <Paper style = {{maxWidth: "40vh", maxHeight: "40vh", margin: "auto", marginTop: "2vh"}}>
                                <CardMedia
                                style = {{margin: "auto"}}
                                component="img"
                                alt="UPI Code"
                                image="/static/images/gpayCode.jpeg"
                                title="UPI Code"
                                />
                            </Paper>
                           
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
                            <SocialIcon url = "https://www.instagram.com/anuraagtriestosing/" fgColor = "#FFFFFF" target = "_blank"/>
                            <a href = "https://www.instagram.com/anuraagtriestosing/" className = {classes.anchor} target = "_blank"> 
                                &nbsp;&nbsp;Instagram (I make music here!) 
                            </a>
                        </Grid>


                        <Grid item xs = {4}> 
                            <SocialIcon url = "https://github.com/Anuraag20" fgColor = "#FFFFFF" bgColor = "#000000" target = "_blank"/>
                            <a href = "https://github.com/Anuraag20" className = {classes.anchor} target = "_blank"> 
                                &nbsp;&nbsp;GitHub 
                            </a>
                        </Grid>

                        
                        <Grid item xs = {4}> 
                            <SocialIcon url = "mailto:anuraagmukherjee1@gmail.com?subject=From%20FTPMania%20User" bgColor = "#BB100B" fgColor = "#FFFFFF" target = "_blank"/>
                            <a href = "mailto:anuraagmukherjee1@gmail.com?subject=From%20FTPMania%20User" className = {classes.anchor} target = "_blank"> 
                                &nbsp;&nbsp; anuraagmukherjee1@gmail.com 
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