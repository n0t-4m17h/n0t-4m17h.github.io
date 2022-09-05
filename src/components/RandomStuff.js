import React, {useState} from 'react'
import Button from '@mui/material/Button';

import { ThemeProvider } from '@mui/material'; // read -> https://mui.com/material-ui/customization/theming/
import { createTheme } from '@mui/material';
import {Typography} from '@mui/material';
import { green } from '@mui/material/colors';


// TYPOGRAPHY related
const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({color: {main: mainColor} });
const sampleTheme = createTheme({
    typography: {
        // for texts of variant type "caption"
        caption: {
            fontFamily: [
                // "Roboto",
                // "Arial",
                "Gothic"
            ].join(","),
            fontSize: 22,
            fontWeight: 'Bold',
            fontStyle: "italic",
            color: "anger"
        },
        // for texts of variant type "button"
        button: {
            fontFamily: [
                // "Roboto",
                "Arial",
                // "Arial Black"
            ].join(","),
            textTransform: 'uppercase',
            fontSize: 13,
            lineHeight: 2,
            fontWeight: 'Bold',
            color: "anger"
        }
    },
    palette: {
        apple: createColor('#5DBA40'),
        steelBlue: createColor('#5C76B7'),
        ceruleanBlue: createColor('#98B4D4'),
        greens: {
            main: green['A700'],
            contrastText: '#FFF' 
        },
        primary: {
            main: green[500],
        },
    },
    transitions: {

    }
});





function CounterPlusMinus() {
    const initCtr = 0;
    const [counter, setCounter] = useState(initCtr);
    return (
        // instead of a "<div> </div>", we can use a fragment ("<>...</>") here, since a div would just add to DOM's load. 
        <ThemeProvider theme={sampleTheme}>
            <Button size="small" color="greens" variant="contained"
                onClick={
                    () => {
                        setCounter((prevCount) => prevCount + 1);
                        console.log("incrementing ctr");
                    }
                } > 
                PLUS
            </Button>

            {/* <big> {counter} </big> */}
            <Typography variant="caption"> {counter} </Typography>

            <Button size="small" color="ceruleanBlue" variant="contained" 
                onClick={
                    () => {
                        setCounter((prevCount) => prevCount - 1);
                        console.log("decrementing ctr");
                    }
                }
                onMouseEnter={
                    () => {
                        // setCounter((prevCount) => prevCount = initCtr);
                        // textTransform.apply(Scale(1))
                        console.log("expanding up");
                    }
                } 
                onMouseLeave={
                    () => {
                        console.log("concaving back down");
                    }
                }>
                MINUS
            </Button>
        </ThemeProvider>
    );
}


function ChangeColor() {
    const [color, setColor] = useState("secondary");
    return (
        // The 'color' variable here is determined by the color state above
        <Button size="large" color={color} variant="contained"
            onClick={
                () => {
                    setColor((prevColor) => prevColor === "secondary" ? "error" : "secondary");
                    console.log("changing color");
                }
            } >
            CHANGE COLOR
        </Button>
    );
}


function SearchBar() {
    return (
        <div className="search">
            {/* You need a js/css file that holds Search's style, refer to https://www.youtube.com/watch?v=b9eMGE7QtTk&list=LL&index=15&t=3579s&ab_channel=JavaScriptMastery*/}
            <input placeholder='Name/Ticker symbol'
                onChange={() => {}} />
            <img src={null} alt='Search'
                onClick={() => {}} />
        </div>
    );
}




const randomStuff = {
    CounterPlusMinus,
    ChangeColor,
    SearchBar
}

export default randomStuff;