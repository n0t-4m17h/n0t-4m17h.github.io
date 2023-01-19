// General style of a standard Page and it's header types
import { styled, IconButton, Card } from '@mui/material';

const LineBreak = () => {
    return <div> <h4>{'\n'}</h4> </div>
};

const Title = styled('h1')({
    color:"#EEEE9B", 
    // border: '5px solid pink',
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'monospace',
    letterSpacing: '4px'
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
    marginBottom: '1%',
    marginTop: '1%',
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


const SocialsContainer = styled('div')({
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
    minWidth: 300,
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
});

const CardModalRef = styled('p1')({
    fontSize: '18px',
    fontFamily: ["monospace"],
    color: '#eee',
    // border: '5px solid pink',
    // fontWeight: 'bold',
    fontStyle: 'italic', 
    mt: 2,
});


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
    LineBreak,
    Title,
    StdParagraph,

    AnimationContainer,
    RetroTerminal,
    SocialsContainer,
    TransIconButton,

    TransCard,
    CardCaptionTitle,
    CardCaptionLabel,
    CardModalStyle,
    CardModalTitle,
    CardModalRef,

    ThreeDContainer,
};

export default PageStyles;