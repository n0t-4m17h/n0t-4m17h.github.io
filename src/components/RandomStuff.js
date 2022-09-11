import React, {useState} from 'react'

import Button from '@mui/material/Button';
import { AddCircleOutline } from '@mui/icons-material';
import RemoveCircleOutline from '@mui/icons-material/RemoveCircleOutline';
import { ThemeProvider, createTheme, Typography} from '@mui/material'; // read -> https://mui.com/material-ui/customization/theming/
import { green } from '@mui/material/colors';

import RandomStyles from '../styles/RandomStyles';

///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////


// TYPOGRAPHY RELATED
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
            color: "red"
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
            contrastText: '#FFF',
        },
        primary: {
            main: green[500],
        },
    },
});



///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////


function CounterPlusMinus() {
    const initCtr = 0;
    const [counter, setCounter] = useState(initCtr);
    return (
        // instead of a "<div> </div>", we can use a fragment ("<>...</>") here, since a div would just add to DOM's load. 
        <ThemeProvider theme={sampleTheme}>
            <RandomStyles.ColorHoverButton size="small" color="greens" variant="contained" startIcon={<AddCircleOutline />}
                onClick={
                    () => {
                        setCounter((prevCount) => prevCount + 1);
                        console.log("incrementing ctr");
                    }
                }> 
                PLUS
            </RandomStyles.ColorHoverButton>

            {/* <big> {counter} </big> */}
            <Typography variant="caption"> {counter} </Typography>

            <RandomStyles.TransHoverButton size="small" color="ceruleanBlue" variant="contained" endIcon={<RemoveCircleOutline />}
                onClick={
                    () => {
                        setCounter((prevCount) => prevCount - 1);
                        console.log("decrementing ctr");
                    }
                }>
                MINUS
            </RandomStyles.TransHoverButton>
        </ThemeProvider>
    );
}


function ChangeColor() {
    const [color, setColor] = useState("secondary");
    return (
        // The 'color' variable here is determined by the color state above
        <Button size="large" color={color} variant="contained" style={{border: '4px dashed white'}}
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
            {/* You need a js file that holds Search's style, refer to https://www.youtube.com/watch?v=b9eMGE7QtTk&list=LL&index=15&t=3579s&ab_channel=JavaScriptMastery*/}
            <input placeholder='Name/Ticker symbol'
                onChange={() => {}} />
            <img src={null} alt='Search'
                onClick={() => {}} />
        </div>
    );
}


///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
const randomStuff = {
    CounterPlusMinus,
    ChangeColor,
    SearchBar
}

export default randomStuff;