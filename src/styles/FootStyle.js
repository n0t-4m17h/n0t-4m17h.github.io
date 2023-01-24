// Styling related to the Footer
import { styled } from '@mui/material';


const FootQuote = styled('p')({
    // border: '2px solid pink',
    fontSize: '0.95vw', //15px
    fontFamily: ["Trebuchet MS"],
    fontStyle: 'italic',
    color: 'beige',
    // whiteSpace: "pre-line", 
});

const FootSrc = styled('p')({
    fontSize: '1.1vw', //18px
    fontFamily: ["Trebuchet MS"],
    fontWeight: 'bold',
    color: '#d9b99b',
})

const FootStyles = {
    FootQuote,
    FootSrc
}

export default FootStyles;