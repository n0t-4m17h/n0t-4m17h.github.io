/* 
    General style of a standard Page and it's many header types
*/
import { styled, IconButton, Card } from '@mui/material';


const Title = styled('h1')({
    color:"#EEEE9B", 
    // border: '5px solid pink', // ################# HELPFUL FOR DEBUGGING !!!!!!
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'monospace',
    letterSpacing: '4px',
    marginTop: '95px', // NOTE: pixels instead of percentage ensure elem doesn't move as page resizes
});

const AnimationContainer = styled('div')({
    // border: '3px solid pink',
    display:'flex',
    justifyContent: 'center',
    alignItems:'center',
    // minHeight:'25vh',
    // maxWidth: '400px',
    height: '350px',
    width: '350px',
    margin:'auto',
    marginTop: '65px', // NOTE: pixels instead of percentage ensure elem doesn't move as page resizes
});

const StdParagraph = styled('p1')({
    fontSize: '20px',
    fontFamily: ["monospace"],
    color: '#eeee6b',
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
    backgroundColor: '#111',
    border: '2px solid #41FF00 ',
    borderRadius: 3,
    boxShadow: '0px 0px 7px #41FF00',
})

const RetroParagraph = styled(StdParagraph)({
    // Overwrite StdParagraph's options
    textTransform: 'none', 
    textShadow: 'none',
    fontSize: '25px',
    color: '#41FF00',
    // additions
    fontWeight: 'bold',
    border: '2px solid #111',
    borderWidth: '25px',
})

const SocialsContainer = styled('div')({
    display:'flex',
    justifyContent: 'center',
    gap: '1rem',
    // minHeight: '7vh',
    marginBottom:'5px'
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
    "@keyframes expand": {
        "0%": {
            transform: "scale(1.5)",
        },
        "100%": {
            transform: "scale(1)",
        },
    },
}));



const TransCard = styled(Card)({
    minWidth: '281px',
    maxWidth: '281px',
    borderRadius: 10,
    boxShadow: '2px 2px 6px #EEEE9B',
    cursor: 'pointer',
    '&:hover': {
        animation: "jump 1.5s ease-in-out infinite",
    },
    "@keyframes jump": {
        "0%": {
            transform: "translate(0px, 0px)",
        },
        "50%": {
            transform: "translate(0px, -40px)",
        },
        "100%": {
            transform: "translate(0px, 0px)",
        },
    },
});

const CardCaptionTitle = styled('p1')({
    fontSize: '25px',
    fontFamily: ["monospace"],
    color: 'navy',
    // border: '5px solid pink',
    fontWeight: 'bold',
    textTransform: 'lowercase',
    textShadow:'0px 0px 4px #EEEE9B', 
});

const CardCaptionLabel = styled('p1')({
    fontSize: '15px',
    fontFamily: ["monospace"],
    color: 'black',
    // border: '5px solid pink',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textTransform: 'lowercase',
    marginTop:'3%',
    backgroundColor: '#EEEE9B',
    borderRadius: 7,
});



const CardModalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 450,
    minWidth: 250,
    bgcolor: '#222',
    border: '2px solid #EEEE9B',
    borderRadius: 4,
    boxShadow: '0px 0px 4px #EEEE9B',
    p: 4,
};

const CardModalTitle = styled('h1')({
    fontSize: '25px',
    fontFamily: ["monospace"],
    color: '#eee',
    // border: '5px solid pink',
    lineHeight: '40px',
    whiteSpace: 'pre-line' // allows for newlines "\n" to actually work on display
});

const CardModalRef = styled('p1')({
    fontSize: '15px',
    fontFamily: ["monospace"],
    color: '#eee',
    // border: '5px solid pink',
    // fontWeight: 'bold',
    fontStyle: 'italic', 
    mt: 2,
});

const CardModalStack = styled('p')({
    fontSize: '18px',
    fontFamily: ["monospace"],
    color: '#8ac7db',

})


const ThreeDContainer = styled('div')({
    // border: '3px solid pink',
    display:'flex',
    justifyContent: 'center',
    alignItems:'center',
    height:'50vh',
    width: '90vw',
    // height: '350px',
    // width: '350px',
    margin:'auto',
    // marginBottom: '-5%',
    // marginTop: '-5%',
});




const PageStyles = {
    // LineBreak,
    Title,
    StdParagraph,

    AnimationContainer,
    RetroTerminal,
    RetroParagraph, 
    SocialsContainer,
    TransIconButton,

    TransCard,
    CardCaptionTitle,
    CardCaptionLabel,
    CardModalStyle,
    CardModalTitle,
    CardModalRef,
    CardModalStack,

    ThreeDContainer,
};

export default PageStyles;