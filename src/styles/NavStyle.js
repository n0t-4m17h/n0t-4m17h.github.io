// Styling related to the Navigation Bar
import { styled, IconButton } from '@mui/material';
import { Link } from 'react-router-dom'

const NavContainerLEGACY = styled('nav')({
    height: '50px',
    width: '100%',
    display: 'flex', 
    alignItems: 'center',
    position: 'relative',
    padding: '0.15rem 0.01rem',
    backgroundColor: 'lightblue',
    color: 'white',
    boxShadow: '3px 3px 3px blue'
})

// ##########################################################
/* add this to dissapear the pages for smaller windows
    @media screen and (max-width: 768px) {
        display: none;
    }
*/

const NavPages = styled('div')({
    // // POSITIONING
    // paddingLeft: '12.5px',
    // paddingRight: '12.5px',
    fontSize: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    // marginLeft: '5%',
    width: '50px',

    // backgroundColor: 'red',
})


const PageLinkStyle = styled('p1')({
    fontSize: '23px',
    fontWeight: 'bold',
    fontFamily: ["Arial"],
});

const TransIconButton = styled(IconButton)(({ theme }) => ({
    cursor: 'pointer',
    transition: theme.transitions.create(['transform'], {
        duration: theme.transitions.duration.complex,
    }),
    '&:hover': {
        transform: "rotate(3.14rad)",
    },
    // '&:checked': {
    //     transform: "rotate(3.14rad)",
    // }
}));





const NavStyles = {
    NavContainerLEGACY,
    NavPages,
    PageLinkStyle,
    TransIconButton,
}

export default NavStyles;