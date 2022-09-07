import React, {useState} from 'react'
import Button from '@mui/material/Button';
import { AddCircleOutline} from '@mui/icons-material';
import RemoveCircleOutline from '@mui/icons-material/RemoveCircleOutline';
import { ThemeProvider } from '@mui/material'; // read -> https://mui.com/material-ui/customization/theming/
import { createTheme } from '@mui/material';
import { Typography } from '@mui/material';
import { green } from '@mui/material/colors';
import { styled } from '@mui/material';

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
            contrastText: '#FFF',
        },
        primary: {
            main: green[500],
        },
    },
});


// the applied MUI Button transforms (see below 'hover') upon mouseEnter and reverts upon mouseLeave
const TransHoverButton = styled(Button)(({ theme }) => ({
    cursor: 'pointer',
    backgroundColor: theme.palette.ceruleanBlue,
    // This 'transition' section allows for smooth movement
    transition: theme.transitions.create(['backgroundColor', 'transform'], {
        // decide the speed of animation here
        duration: theme.transitions.duration.complex,
    }),    
    '&:hover': {
        backgroundColor: theme.palette.steelBlue.main,
        transform: "scale(1.1)"
        // transform: "scale(1.2, 1.1) translate(25%, -25%) rotateX(3.14rad) rotateY(3.14rad)"
    }
}));

// Change MUI Button's text color to black
const ColorHoverButton = styled(Button) `
    :hover {
        color: black;
    } 
`;


///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////


function CounterPlusMinus() {
    const initCtr = 0;
    const [counter, setCounter] = useState(initCtr);
    return (
        // instead of a "<div> </div>", we can use a fragment ("<>...</>") here, since a div would just add to DOM's load. 
        <ThemeProvider theme={sampleTheme}>
            <ColorHoverButton size="small" color="greens" variant="contained" startIcon={<AddCircleOutline />}
                onClick={
                    () => {
                        setCounter((prevCount) => prevCount + 1);
                        console.log("incrementing ctr");
                    }
                } > 
                PLUS
            </ColorHoverButton>

            {/* <big> {counter} </big> */}
            <Typography variant="caption"> {counter} </Typography>

            <TransHoverButton size="small" color="ceruleanBlue" variant="contained" endIcon={<RemoveCircleOutline />}
                onClick={
                    () => {
                        setCounter((prevCount) => prevCount - 1);
                        console.log("decrementing ctr");
                    }
                }>
                MINUS
            </TransHoverButton>
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