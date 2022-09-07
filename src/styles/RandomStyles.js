// alternative for 'styled-components' library
import { styled } from '@mui/material';


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
    display: 'flex', 
    justifyContent: 'center', // centers the text, w/ 'display: flex'
    // height: '25px',
    width: '75px',
    margin: 'auto', // centers the whole component
});





const randomStyles = {
    CenterDiv,
}

export default randomStyles;