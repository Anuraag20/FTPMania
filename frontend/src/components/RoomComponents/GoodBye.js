import { Typography } from '@material-ui/core';
import React, {useState, useEffect} from 'react';

const GoodBye = (props) => {

    return (
        <Typography commponent = "h2" variant = "h2" className = "center">
            GoodBye, {props.name}!
        </Typography>
    )
}

export default GoodBye;