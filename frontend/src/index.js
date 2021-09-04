import App from "./components/App";
import Navbar from "./components/Navigation";
import React from 'react';
import {render} from 'react-dom';


const appDiv2 = document.getElementById("nav");
render(<Navbar />, appDiv2);

const appDiv = document.getElementById("app");
render(<App />, appDiv);

