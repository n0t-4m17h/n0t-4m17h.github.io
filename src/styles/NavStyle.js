import { styled } from '@mui/material';


const NavContainer = styled('nav')({
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

const NavPages = styled('div')({
    // POSITIONING
    paddingLeft: '12.5px',
    paddingRight: '12.5px',
    fontSize: 20,
    display: 'flex',
    // justifyContent: 'center',
    alignItems: 'flex-end',
    marginLeft: '5%',
    width: '30px',

    // LOOKS
    color: 'white',
    fontFamily: "Arial",
    // backgroundColor: 'red',
})

const PageLinkStyle = styled('p1')({fontSize: '18px', fontWeight: 'bold'});

const NavStyles = {
    NavContainer,
    NavPages,
    PageLinkStyle,
}

export default NavStyles;