import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import { AppBar, Toolbar, Stack, Button} from '@mui/material';
import Box from '@mui/system/Box'
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HandymanIcon from '@mui/icons-material/Handyman';
import EngineeringIcon from '@mui/icons-material/Engineering';
import HomeIcon from '@mui/icons-material/Home';

import NavStyles from '../styles/NavStyle';
import PrisonMike from '../assets/images/prison-mike.jpg'

const Navbar = () => {
    const [clicked, setClicked] = useState(false); // for showing drop down MENU when required
    const [menuBtn, setButton] = useState(true); // for showing drop down menu BUTTON on small windows only

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

    //                   NAVBAR    SIDEBAR   SIDEBAR(2) PAGE(Light) PAGE(Dark) PAGE(MID)  MUI(Prim) SoftYellow
    const POI_COLORS = ["#153454", "#063970","#002884", "#0d539e", "#1e3247", "#204063", "#257DE8", "#EEEE9B"];
    
    return (
        <Box component="nav">
            <AppBar position="static" variant='elevation' color='transparent' enableColorOnDark sx={{ background: "#153454"}}> 
                <Toolbar variant='regular' disableGutters>
                    <Box component="NavbarLogo" 
                        sx={{transitionDuration: '0.375s', '&:hover': {opacity: [0.7],}, }} 
                    > 
                        <Link to='/' className='NavbarLogoLink'> 
                        {/* this would preferrably be an animation of "AJK" */}
                            <img src={PrisonMike} alt='AJK' style={{height: '55px', borderRadius: 35, border: '2px solid #EEEE9B', display: 'flex', marginLeft:'2.2%' }}/>
                        </Link>
                    </Box>
                    
                    <NavStyles.TransIconButton color='primary' aria-label='MenuLogo' disableRipple='true' style={{color: "#EEEE9B"}}
                        onClick={handleMenuClick}
                    > 
                        <menuBtn style={{display: 'flex'}}>
                            {clicked ? <ExpandMoreIcon style={{fontSize: '25px'}}/> : <ExpandCircleDownIcon style={{fontSize: '25px'}}/>}
                        </menuBtn>
                    </NavStyles.TransIconButton>

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
                            <Button size='small' disableRipple='true' style={{color: "#EEEE9B"}}
                                onMouseEnter = {handleHomeHover}
                                onMouseLeave = {handleHomeHover}
                            >
                                {homeHovered ? <NavStyles.PageLinkStyle> Home </NavStyles.PageLinkStyle> : <HomeIcon style={{fontSize: '30px'}}/>}
                            </Button>
                        </Link>
                    </NavStyles.NavPages>
                    
                    <NavStyles.NavPages>
                        <Link to='/projects' className='NavbarLink'> 
                            <Button size='small' disableRipple='true' style={{color: "#EEEE9B"}}
                                onMouseEnter = {handleProjectsHover}
                                onMouseLeave = {handleProjectsHover}
                            >
                                {projectsHovered ? <NavStyles.PageLinkStyle> Projects </NavStyles.PageLinkStyle> : <EngineeringIcon style={{fontSize: '30px'}}/>}
                            </Button>
                        </Link>
                    </NavStyles.NavPages>
                    
                    <NavStyles.NavPages>
                        <Link to='/utility' className='NavbarLink'> 
                            <Button size='small' disableRipple='true' style={{color: "#EEEE9B"}}
                                onMouseEnter = {handleUtilityHover}
                                onMouseLeave = {handleUtilityHover}
                            >
                                {utilityHovered ? <NavStyles.PageLinkStyle> Utility </NavStyles.PageLinkStyle> : <HandymanIcon style={{fontSize: '27px'}}/>}
                            </Button>
                        </Link>
                    </NavStyles.NavPages>
                </Toolbar>
            </AppBar>
        </Box>
    );
}


export default Navbar;