import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import { AppBar, Toolbar, IconButton, Stack} from '@mui/material';
import Box from '@mui/system/Box'
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import HandymanIcon from '@mui/icons-material/Handyman';
import EngineeringIcon from '@mui/icons-material/Engineering';
import HomeIcon from '@mui/icons-material/Home';

import NavStyles from '../styles/NavStyle';
import PrisonMike from '../assets/images/prison-mike.jpg'
import { Button } from '@mui/material';

const Navbar = () => {
    const [clicked, setClicked] = useState(false); // for showing drop down MENU when required
    const [button, setButton] = useState(true); // for showing drop down menu BUTTON on small windows only

    const handleMenuClick = () => setClicked(!clicked); // open/close menu when clicked

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    window.addEventListener('resize', showButton);
    
    const [utilityHovered, setUtilityHovered] = useState(false);
    function handleUtilityHover() {
        setUtilityHovered(!utilityHovered);
    }
    
    const [projectsHovered, setProjectsHovered] = useState(false);
    function handleProjectsHover() {
        setProjectsHovered(!projectsHovered);
    }
    
    const [homeHovered, setHomeHovered] = useState(false);
    function handleHomeHover() {
        setHomeHovered(!homeHovered);
    }
    
    //                  NAVBAR     SIDEBAR  PAGE(Light)  PAGE(Dark)  PAGE(MID)
    const AllColors = ["#153454", "#063970", "#0d539e", "#1e3247", "#204063"];

    return (
        <Box component="nav">
            <AppBar position="static" color='default' variant='elevation' sx={{ background: "#153454" }}>
                <Toolbar variant='regular'>
                    <Link to='/' className='NavbarLogo'> 
                    {/* this would preferrably be an animation of "AJK" */}
                        <img src={PrisonMike} alt='AJK' style={{height: '55px', borderRadius: 10, border: '2px solid #0d539e'}}/>
                    </Link>

                    <IconButton color='primary' aria-label='MenuLogo' style={{marginLeft: '1.5%', marginRight: '-1%'}}
                        onClick={handleMenuClick}
                    > 
                        {clicked ? <ExpandLessIcon/> : <ExpandCircleDownIcon/>}
                    </IconButton>

                    {/* <ul className={clicked ? 'NavMenuActive' : 'NavMenu'} >
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
                    </ul> */}
                        <NavStyles.NavPages>
                            <Link to='/' className='NavbarLink'> 
                                <Button size='small'
                                    onMouseEnter = {handleHomeHover}
                                    onMouseLeave = {handleHomeHover}
                                >
                                    {homeHovered ? <NavStyles.PageLinkStyle> Home </NavStyles.PageLinkStyle> : <HomeIcon />}
                                </Button>
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
                </Toolbar>
            </AppBar>
        </Box>
    );
}


export default Navbar;