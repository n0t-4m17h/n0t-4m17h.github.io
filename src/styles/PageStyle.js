// General style of a standard Page and it's header types
import { styled, IconButton } from '@mui/material';

const Title = styled('h1')({
    color:"#EEEE9B", 
    border: '5px solid pink',
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'monospace',
    letterSpacing: '4px'
});

const AnimationContainer = styled('div')({
    border: '3px solid pink',
    display:'flex',
    justifyContent: 'center',
});

const StdParagraph = styled('p1')({
    fontSize: '20px',
    fontFamily: ["monospace"],
    color: '#eeee6b',
    // border: '2px solid pink', // ################# HELPFUL FOR DEBUGGING !!!!!!
    borderWidth: 'thin',
    boxSizing:'content-box',
    display:'flex',
    justifyContent: 'center',
    alignContent: 'space-evenly',
    textAlign: 'center',
    whiteSpace: "pre-line",
    textTransform: 'lowercase', 
    textShadow:'4px 4px 4px #153454', 
});


// A poor imitation of the classic retro terminal look
const RetroTerminal = styled(StdParagraph)({
    // Overwrite specific StdParagraph's edits 
    textTransform: 'none', 
    textShadow: 'none',
    fontSize: '25px', 

    fontWeight: 'bold', 
    color: '#41FF00',
    // color: '#5bf870',
    backgroundColor: '#111',
    // borderColor: '#5bf870',
    border: '2px solid #41FF00 ',
    borderRadius: 3,
    boxShadow: '0px 0px 7px #41FF00',
})


const IconContainer = styled('div')({
    display:'flex',
    justifyContent: 'center',
    gap: '1rem',
    // minHeight: '7vh',
    marginBottom:'3%'
})


const TransIconButton = styled(IconButton)(({ theme }) => ({
    cursor: 'pointer',
    '&:hover': {
        animation: "spin 0.5s linear infinite",
        // transition: "opacity(50%)",
    },
    "@keyframes spin": {
        "0%": {
            transform: "rotate(360deg)",
        },
        "100%": {
            transform: "rotate(0deg)",
        },
    },
    // "@keyframes expand": {
    //     "0%": {
    //         transform: "scale(1.5)",
    //     },
    //     "100%": {
    //         transform: "scale(1)",
    //     },
    // },
}));




const PageStyles = {
    Title,
    AnimationContainer,
    StdParagraph,
    RetroTerminal,
    IconContainer,
    TransIconButton,
};

export default PageStyles;