import { 
    Dialog, 
    DialogTitle,
    DialogActions,
    DialogContent,
    Button, 
    CircularProgress,
    List,
    ListItem, 
    Fab,
    ListItemIcon,
    ListItemText,
    Box
    
} from '@material-ui/core';
import axios from 'axios';
import AddIcon from '@material-ui/icons/Add';
import React, {useState} from 'react';
import Dropzone from 'react-dropzone';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import { client } from 'websocket';

const FileManager = (props) =>{

    
    const [progress, setProgress] = useState(0.01);
    const [file, setFile] = useState();
    const [fileDrop, setFileDrop] = useState(false);
    const [fileOpen, setFileOpen] = useState(false);
    const [spaceError, setSpaceError] = useState(0);

    

    const postFile = () => {

        const config = {
            onUploadProgress: function(progressEvent) {
              var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
              setProgress(percentCompleted);

            },
            headers: {
                'content-type': 'multipart/form-data'
              }
          }
        
        var formData = new FormData();
        formData.append('file', file, file.name);

        axios.post('/api/file-upload/', formData, config)
            .then(response => {
    
                if(response.data.not_enough_space){
                    setSpaceError(response.data.not_enough_space + 'B');
                }
                
                setFileDrop(false);
                setFile();
                client.send(JSON.stringify({
                    message: {
                        name: 'THIS_IS_SIGNIFYING_THAT_A_FILE_HAS_BEEN_SENT',
                        message: 'data',
                        time: 'hi',
                    }
                }));
            
            }).
            catch(error => {
                setSpaceError(true);
                setFile();
            });
    }

 
    if (spaceError === true){
        <Dialog open={fileOpen} aria-labelledby="form-dialog-title">

            <DialogTitle id="form-dialog-title"> Looks like something went wrong while uploading! </DialogTitle>

            <DialogActions>
                <Button onClick = {() => {
                    setFileOpen(false);
                    setSpaceError(0);
                }} color="primary">
                OK
                </Button>
            </DialogActions>
        </Dialog>    
    } 

    return(
        <div>

            {!file  && 
            
            <Box align = "center" pt = {1.5}>                
                <Fab color = "secondary" size = 'small' disabled = {fileDrop == 'posting'} aria-label="add" onClick = {() => setFileDrop(true)}>
                    <AddIcon />
                </Fab>
            </Box>

            }

            {file && !fileOpen &&  
                <List>     
                <ListItem className = "centerPos">

                    <ListItemText primary={file.name.length > 65? file.name.slice(0, 24) + "...: ": file.name + ": "} />

                    <ListItemIcon>
                        {progress != 100 && <CircularProgress size = {25} variant = "determinate" value = {progress} />}
                        {progress == 100 && <CircularProgress size = {25} />}
                    </ListItemIcon>
                    </ListItem> 
                </List>
            }
        
        <Dialog open={fileDrop === true} aria-labelledby="form-dialog-title" >
        <DialogTitle style = {{overflowWrap: "break-word"}} id="form-dialog-title">
            Choose File
        </DialogTitle>
            <DialogContent align = "center">
                <Dropzone onDrop={acceptedFile => {
                    setFileDrop('posting');
                    setFile(acceptedFile[0]);
                    setFileOpen(true);
                }}>
                {({getRootProps, getInputProps}) => (

                    <section>
                    <div {...getRootProps()}>
                        <List>     
                            <ListItem className = "centerPos">
                            <ListItemIcon>
                                <InsertDriveFileIcon />
                            </ListItemIcon>
                            <ListItemText primary="Drag and Drop a File/ Click to Browse" />
                            </ListItem> 
                        </List>
                        <input type = "file" {...getInputProps()} />
                    </div>
                    </section>
                )}
                </Dropzone>

            </DialogContent>
        <DialogActions align = "center">            

            <Button onClick = {() => setFileDrop(false)}color = "secondary">
                <div align = "center"> Cancel </div>
            </Button>
        </DialogActions>
    
        </Dialog>
        
        <Dialog open={fileOpen && file} aria-labelledby="form-dialog-title">
            <DialogTitle style = {{overflowWrap: "break-word"}} id="form-dialog-title"> 
                {file && <p> Are you sure you want to send {file.name}? </p>} 
            </DialogTitle>

            <DialogActions>
                <Button onClick = {(e) => {

                    if(props.sizeLeft < file.size){
                        setFileDrop(false);
                        setFileOpen(false);
                        setSpaceError(Math.round(props.sizeLeft/(1024*1024)) + 'MB');
                    }
                    else{
                        e.preventDefault();
                        setFileDrop('posting');
                        setFileOpen(false);
                        postFile();
                    }

                }} color="primary">
                Yes
                </Button>

                <Button onClick = {() => {
                    setFile();
                    setFileOpen(false);
                    setFileDrop(false);
                }}color = "secondary">
                    No
                </Button>
            </DialogActions>
        </Dialog>
            
        <Dialog open={spaceError} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">  
                    The file exceeds the room limit. You only have {spaceError} left for this room. 
                </DialogTitle>

                <DialogActions>
                    <Button onClick = {() => {
                        setFile();
                        setSpaceError(0);
                    }} color="primary">
                    OK
                    </Button>
                </DialogActions>
        </Dialog>
    
    </div>
    );
}



export default FileManager; 
