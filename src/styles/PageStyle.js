// General style of a standard Page and it's header types
import { styled } from '@mui/material';

const Title = styled('h1')({
    color:"#EEEE9B", 
    border: '5px solid pink',
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'monospace',
});

const AnimationContainer = styled('div')({
    border: '3px solid pink',
    display:'flex',
    justifyContent: 'center',
})

const StdParagraph = styled('p1')({
    fontSize: '20px',
    fontFamily: ["monospace"],
    color: 'white',
    border: '2px solid pink',
    borderWidth: 'thin',
    boxSizing:'content-box',
    display:'flex',
    justifyContent: 'center',
    alignContent: 'space-evenly',
    textAlign: 'center',
    whiteSpace: "pre-line"
});


const PageStyles = {
    Title,
    AnimationContainer,
    StdParagraph,
}

export default PageStyles;