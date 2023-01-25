// Styling related to the Footer
import { styled } from '@mui/material';


const FootQuote = styled('p')({
    // border: '2px solid pink',
    // fontSize: '0.95vw',
    fontFamily: ["Trebuchet MS"],
    fontStyle: 'italic',
    color: 'beige',
    lineHeight: '15px',
});

const FootSrc = styled('p')({
    fontFamily: ["Trebuchet MS"],
    fontWeight: 'bold',
    color: '#d9b99b',
    lineHeight: '15px',
})

const FootStyles = {
    FootQuote,
    FootSrc
}

export default FootStyles;