import { Typography, Button, Box } from '@material-ui/core';
import React from 'react';

const GoodBye = (props) => {

    return (
        <div className = "center">
            <Typography commponent = "h2" variant = "h2" >
                Goodbye, {props.name}!
            </Typography>

            <br />
            <Box style = {{margin: 'auto', textAlign: 'center'}}>
                <a href = "/research" style = {{color: "inherit", textDecoration: "inherit"}}>
                    <Button color = "primary" variant = "contained" >
                        Please take a minute to fill out this form!
                    </Button>
                </a>
            </Box>
        </div>
    )
}

export default GoodBye;