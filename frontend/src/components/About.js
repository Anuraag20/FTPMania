import React, {useEffect} from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';

import { darkTheme } from './CustomTheme';
import { 
    CssBaseline, 
    Grid, 
    Box, 
    CardMedia, 
    Typography, 
    Paper,
    Divider
} from '@material-ui/core';

const About = (props) => {

    const classes = useStyles();


    useEffect(() => {
        if (window.location.pathname == '/about/'){
            window.scrollTo({
                top: window.innerHeight/5,
                left: 0,
                behavior: 'smooth'
              });
        }

    }, [])

    if (window.location.pathname == '/about/'){
        return (
            <ThemeProvider theme = {darkTheme}>
                <CssBaseline />
                <div style = {{paddingTop: "8vh"}}>
                    <Box minWidth = "38vw" minHeight = "30vh" margin = 'auto'>
                        <CardMedia
                        
                        component="img"
                        alt="FTPMania"
                        width = "500"
                        height = "300"
                        image="/static/images/favicon.png"
                        title="FTPMania"
                        />
                    </Box>

                    <Grid container = {1} justifyContent = "center"  style = {{paddingTop: "2vh"}}>

                    

                        <Grid item xs = {12} style = {{textAlign: "center"}}>
                        <Typography component = "h3" variant = "h3"> Create a Room, Share, Disappear.  </Typography>
                        </Grid>
                        

                        
                        <Grid item xs = {12} style = {{margin: "0vw 10vw"}} >   

                            <Typography component = "body1" variant = "body1" >
                                <br />

                                Sharing large files always has been a real pain in the neck. 
                                <br />
                                <br />

                                WhatsApp has a pretty tiny limit, not everyone has Telegram.
                                If you end up using WeTransfer, there's no way to send something back without creating a completely separate link
                                <br />
                                <br />

                                You do have google drive, but you then need to deal with sharing passwords, giving them file access.  
                                If you just share the file link, you might not want to keep that access forever, but forget to set up the expiry.
                                After all this, if you forget about the file, it just sits there cluttering up your cloud.
                                <br />
                                <br />

                                With <b> FTPMania </b>, this problem is now a thing of the past.
                                < br /> 
                                <ul>
                                    <li> You create a room (no login required) </li> 
                                    <li> Share the code </li> 
                                    <li> Once everyone's in, then lock the room (optional) </li>
                                    <li> Share upto 500 MB! </li>
                                    <li> The room and all its contents become inaccessible within one hour of creation </li>
                                    <li> Our servers are wiped every 24 hours </li> 
                                </ul>

                                <br /> 
                                Here are some reviews from some of our satisfied users: 
                                
                                <br />
                                <br />
                                                            
                            </Typography>

                            <Paper style = {{textAlign: "center"}}>
                                <Typography component = "h6" variant = "h6">
                                    <i> "This would've saved me from a lot of trouble" </i> 
                                    &nbsp;-&nbsp; Raj Kundra (For legal reasons thats a joke)
                                </Typography>
                            </Paper>

                            <Typography component = "body1" variant = "body1" >
                                <br />
                                Are you still not convinced? 
                                <br />
                                <br />
                            </Typography>       
                            
                            <Paper style = {{textAlign: "center"}}>
                                <Typography component = "h6" variant = "h6">
                                    <i> "Edward Snowden could have been avoided" </i> &nbsp;-&nbsp; The CIA (Probably, idk)
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                    <br />
                    <Divider />
                    <br />
                </div>

                
            </ThemeProvider>
        );
    }

    else {
        return(
            <ThemeProvider theme = {darkTheme}>
            <CssBaseline />
            <div style = {{paddingTop: "10vh"}}>
                
            <Grid container = {1} justifyContent = "center"  style = {{paddingTop: "2vh"}}>

            <Grid item xs = {12} style = {{textAlign: "center"}}>
                <Typography component = "h3" variant = "h3"> Terms of Service </Typography>
            </Grid>

            <Paper style = {{margin: "auto", maxWidth: "80vw"}}>
                <Typography component = "body1" variant = "body1">
                    <Grid item xs = {12} style = {{margin: "0vw 5vw"}}>
                        <br />

                        DISCLAIMER: The site does NOT use any encryption techniques as of now.
                        <br />
                        This is just a "proof-of-concept". So, <b> DO NOT </b> share any sensitive media over the Website.
                        <br />
                        <br />

                        The site of this site is not liable in case any copyrighted material is unlawfully distributed by the end-user.
                        <br />
                        The site is also not liable in the event of a data breach.

                        <br /> 
                        Basically case mat thoko mujhpe!

                        <br />
                        <br />                  
                        <a style = {{color: "inherit"}} href = "https://portal.termshub.io/ftpmania.tech/website_tos/" target = "_blank">
                            Click here for the full ToS 
                        </a>

                        <br />
                        <br />

                        Remember to follow the golden rule: <b> Don't be a dick! </b>
                        <br />
                        <br />

                    </Grid>
                </Typography>
            </Paper>

            </Grid>

            </div>
        </ThemeProvider>
        );
    }
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
    }
  }));

export default About;