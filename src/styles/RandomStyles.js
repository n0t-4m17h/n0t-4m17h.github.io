// alternative for 'styled-components' library
import Button from '@mui/material/Button';
import { styled } from '@mui/material';


// Styles the applied div elements to be centered and more...
const CenterDiv = styled('div')({
    color: 'white',
    backgroundColor: 'red',
    fontFamily: "Arial",
    fontSize: 16,
    fontStyle: 'italic',
    fontWeight: 'bold',
    // padding: '3px 3px',
    padding: 3,
    border: '2px dashed blue',
    borderRadius: 14,
    display: 'center', 
    justifyContent: 'center', // centers the text, w/ 'display: flex'
    // height: '25px',
    width: '75px',
    margin: 'auto', // centers the whole component
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
        transform: "scale(1.1)",
        // transform: "scale(1.2, 1.1) translate(25%, -25%) rotateX(3.14rad) rotateY(3.14rad)"
    }
}));


// Change MUI Button's text color to black
const ColorHoverButton = styled(Button) `
    :hover {
        color: black;
    } 
`;


// // JS' take on CSS
// const borderStyle = {
//     border: '2px solid pink'
// }


const RandomStyles = {
    CenterDiv,
    // sampleTheme, 
    TransHoverButton,
    ColorHoverButton,
    // borderStyle,
}

export default RandomStyles;