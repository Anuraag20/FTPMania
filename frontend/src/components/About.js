import React, {useEffect} from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import Contact from './Contact';
import { darkTheme } from './CustomTheme';
import { 
    CssBaseline, 
    Grid, 
    Box, 
    CardMedia, 
    Typography, 
    Paper,
    Divider,
    CircularProgress
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
    /*
    else if(window.location.pathname == '/terms/'){
        return(
            <ThemeProvider theme = {darkTheme}>
            <CssBaseline />
            <div style = {{paddingTop: "8vh"}}>
                
                <Grid container = {1} justifyContent = "center"  style = {{paddingTop: "2vh"}}>

                <Paper style = {{margin: "auto", maxWidth: "80vw", paddingBottom: "1vh"}}>
                    
                    <Grid item xs = {12} style = {{margin: "0vw 5vw"}}>

                        <br />

                        <Box style = {{width: "60vw", height: "78vh"}}>
                            <iframe 
                            style = {{position: "relative", height: "100%", width: "100%"}}
                            src="https://portal.termshub.io/ftpmania.tech/" 
                            frameborder="0" 
                            marginheight="0" 
                            marginwidth="0">
                            
                                <CircularProgress color = "primary"/>

                                
                            </iframe>
                        </Box>

                        <Typography component = "body1" variant = "body1" >
                            <div style = {{textAlign: "center"}}>
                                <br />

                                DISCLAIMER: The site does NOT use any client-side encryption techniques as of now.
                                <b> DO NOT </b> share any sensitive material.
                                <br />
                     
                            </div>
                        </Typography>
                        
                    </Grid>
                    
                </Paper>

            </Grid>

            </div>
        </ThemeProvider>
        );
    }
    else if(window.location.pathname == '/contact/'){
        return <Contact />;
    }
    */
    
    else if(window.location.pathname == '/research/'){
        return(
            <ThemeProvider theme = {darkTheme}>
                <CssBaseline />
                <div style = {{paddingTop: "10vh"}}>
                    <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLSejqw9LLPxHeSl_FrovhpbUV4GLN8dTbqXmqocWvklCpl-j_A/viewform?embedded=true" 
                    style = {{position: "relative", height: "100%", width: "100%"}}
                    frameborder="0" 
                    marginheight="0" 
                    marginwidth="0"
                    >
                        <CircularProgress color = "primary"/>
                        
                    </iframe>
                </div>

            </ThemeProvider>

        );
    
    }

    else{
        return <Typography component = "h2" variant = "h2"> Something went wrong... </Typography>
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
