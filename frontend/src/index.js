import App from "./components/App";
import Navbar from "./components/Navigation";
import About from "./components/About";
import Contact from "./components/Contact";

import React from 'react';
import {render} from 'react-dom';

try {
    const appDiv = document.getElementById("app");
    render(<App />, appDiv);

  }
  catch(err) {
    ;
}

const appDiv2 = document.getElementById("nav");
render(<Navbar />, appDiv2);

try {
    const appDiv3 = document.getElementById("about");
    render(<About />, appDiv3)
  }
  catch(err) {
    ;
}




