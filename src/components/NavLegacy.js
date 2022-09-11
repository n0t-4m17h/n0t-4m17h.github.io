
import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import Box from '@mui/system/Box'
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton'
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
// import HandymanIcon from '@mui/icons-material/Handyman';
// import EngineeringIcon from '@mui/icons-material/Engineering';
// import HomeIcon from '@mui/icons-material/Home';

import NavStyles from '../styles/NavStyle';
import PrisonMike from '../assets/images/prison-mike.jpg'
import { Button } from '@mui/material';

const Navbar = () => {
    const [clicked, setClicked] = useState(false); // for showing drop down MENU when required
    const [button, setButton] = useState(true); // for showing drop down menu BUTTON on small windows only

    const handleMenuClick = () => setClicked(!clicked);
    const closeMobileMenu = () => setClicked(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    window.addEventListener('resize', showButton);
    
    // const [utilityHovered, setUtilityHovered] = useState(false);
    // function handleUtilityHover() {
    //     setUtilityHovered(!utilityHovered);
    // }
    
    // const [projectsHovered, setProjectsHovered] = useState(false);
    // function handleProjectsHover() {
    //     setProjectsHovered(!projectsHovered);
    // }
    

    return (
        <Box component="nav">
            <AppBar position="static" color='default'>
            {/* <nav className='Navbar'> */}
                {/* <NavStyles.NavContainer> */}
                    <Link to='/' className='NavbarLogo'> 
                        {/* AJK */}
                        <img src={PrisonMike} alt='AJK' style={{height: '55px',display: 'flex'}}/>
                    </Link>

                    <IconButton color='primary' aria-label='Menu' size='large'
                        onClick={handleMenuClick}> 
                        {clicked ? <ExpandLessIcon/> : <ExpandCircleDownIcon/>}
                    </IconButton>

                    <ul className={clicked ? 'NavMenuActive' : 'NavMenu'} >
                        <li classname='NavItem'>
                            <Link to='/' className='NavLink' onClick={closeMobileMenu}>
                                Homie
                            </Link>
                        </li>
                        <li classname='NavItem'>
                            <Link to='/projects' className='NavLink' onClick={closeMobileMenu}>
                                Projecter
                            </Link>
                        </li>
                        <li classname='NavItem'>
                            <Link to='/utility' className='NavLink' onClick={closeMobileMenu}>
                                Utiliser
                            </Link>
                        </li>
                    </ul>
                    {/* {button && <Button buttonStyle='btn--outline'> PROJECTION </Button>} */}


                    {/*  
                    <NavStyles.NavPages>
                        <Link to='/' className='NavbarLink'> 
                            Home
                        </Link>
                    </NavStyles.NavPages>
                    
                    <NavStyles.NavPages>
                        <Link to='/projects' className='NavbarLink'> 
                            <Button size='small'
                                onMouseEnter = {handleProjectsHover}
                                onMouseLeave = {handleProjectsHover}
                            >
                                {projectsHovered ? <NavStyles.PageLinkStyle> Projects </NavStyles.PageLinkStyle> : <EngineeringIcon />}
                            </Button>
                        </Link>
                    </NavStyles.NavPages>
                    
                    <NavStyles.NavPages>
                        <Link to='/utility' className='NavbarLink'> 
                            <Button size='small'
                                onMouseEnter = {handleUtilityHover}
                                onMouseLeave = {handleUtilityHover}
                            >
                                {utilityHovered ? <NavStyles.PageLinkStyle> Utility </NavStyles.PageLinkStyle> : <HandymanIcon />}
                            </Button>
                        </Link>
                    </NavStyles.NavPages>
                    */}


                {/* </NavStyles.NavContainer> */}
            {/* </nav> */}
            </AppBar>
        </Box>
    );
}

export default Navbar;