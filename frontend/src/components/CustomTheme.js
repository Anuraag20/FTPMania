import { createTheme } from '@material-ui/core/styles';



const darkTheme = createTheme({
    palette: {
        type: "dark",
        primary: {
            main:  "#7d4fba", //"#4527a0", //"#fbbb34",
        },
        secondary: {
            main:  "#ff4085"//"#ff914d"//"#30a8f0", //"#311b92", // "#cc9534",
        },
        light:{
            main: '#000000'
        },
        // background:{
        //     default: "#121212",
        // }
    }

});
  
const lightTheme = createTheme({
    palette: {
        type: "light",
        primary: {
            main: "#3f51b5",
        },
        secondary: {
            main: "#f50057",
        },
        background:{
            default: "#e4f0e2",
        }
    }

});

export {darkTheme, lightTheme};


