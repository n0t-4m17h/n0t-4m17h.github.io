import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { AppBar, Toolbar, Stack, Grid, Button, ButtonBase, IconButton, Menu, MenuItem } from '@mui/material';
import Box from '@mui/system/Box'
import { Zoom } from '@mui/material';

import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HomeIcon from '@mui/icons-material/HomeRounded';
import EngineeringIcon from '@mui/icons-material/Engineering';
import HandymanIcon from '@mui/icons-material/HandymanRounded';
import CameraIcon from '@mui/icons-material/PartyModeRounded';

import NavStyles from '../styles/NavStyle';
import PrisonMike from '../assets/images/prison-mike.jpg'
import HarbourBridge from '../assets/images/bridge.png'


const Navbar = () => {
    //                   NAVBAR    SIDEBAR   SIDEBAR(2) PAGE(Light) PAGE(Dark) PAGE(MID)  MUI(Prim) SoftYellow CONSIDER-THIS
    const VIP_COLORS = ["#153454", "#063970","#002884", "#0d539E", "#1E3247", "#204063", "#257DE8", "#EEEE9B", "#0a427e"];
    const XTRA_COLORS = ["#111164", "#8f5a24", "#202062"]
    const PAGE_LIST = ['Home', 'Projects', 'Utility', 'Gallery']
    

    // ######## The SideMenu state handling
    const [clicked, setClicked] = useState(false); // for chaning the sidebar menu, when clicked
    const handleMenuClick = () => setClicked(!clicked); // open/close SideMenu when clicked
    
    const [anchorEl, setAnchorEl] = useState(null); // "anchorEl" is used to set the position of the popup
    const open = Boolean(anchorEl);
    const handleClick = (event) => { 
        setAnchorEl(event.currentTarget); // sets position just below the button, approx.
        handleMenuClick(); // changes to ExpandMoreIcon
    };
    const handleClose = () => {
        setAnchorEl(null);
        handleMenuClick(); // reverts to ExpandCircleDownIcon
    }
    

    // ######## Used for changing NavMenu pages spacing relative to Window size
    const [innerWidth, setWidth]   = useState(window.innerWidth);
    const updateDimensions = () => {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    


    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" variant='elevation' color='transparent' enableColorOnDark sx={{ background: "#153454"}}> {/* display: 'center' */}
                    <Toolbar variant='regular' disableGutters >

                        {/* ########################### */}
                        {/* ####### LHS Box (avatar + sidemenu) */}
                        <Stack component="NavbarLogo" direction="row" sx={{ justifyContent:"flex-start"}} >
                            <Box sx={{transitionDuration: '0.375s', '&:hover': {opacity: [0.7],}, }} > 
                                <a href='https://youtu.be/a7RoP1LKMeM?t=112' target="_blank">
                                    <img src={PrisonMike} alt='AJK' style={{height: '55px', borderRadius: 35, border: '2px solid #EEEE9B', display: 'flex' }}/>
                                </a>
                            </Box>
                            
                            <NavStyles.TransIconButton color='primary' aria-label='MenuLogo' disableRipple='true' style={{color: "#EEEE9B"}}
                            >
                                <ButtonBase disableRipple 
                                    onClick={handleClick} 
                                >
                                    {clicked ? <ExpandMoreIcon style={{fontSize: '28px'}} /> : <ExpandCircleDownIcon style={{fontSize: '28px'}} />}
                                </ButtonBase>
                            </NavStyles.TransIconButton>

                            {/* ################### */}
                            {/* #### SIDE MENU (dropdown pages) */}
                            <Menu
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                TransitionComponent={Zoom}
                                transitionDuration={300}
                                sx={{filter: 'sepia(300%) hue-rotate(320deg) saturate(450%) drop-shadow(3px 3px 3px #ff9933) invert(95%)'}}
                            >
                                <Link to='/' className='NavbarLink' style={{ textDecoration: 'none' }} > {/* , rotate:["3.14rad"] */}
                                    <MenuItem onClick={ handleClose } sx={{ color:"#111164", fontFamily:"monospace", fontWeight: 'bold', transitionDuration: '0.6s', '&:hover': {opacity: [0.5], }, }}> 
                                        <HomeIcon style={{fontSize: '25px', marginRight: '5%'}} />
                                        Home
                                    </MenuItem>
                                </Link>
                                <Link to='/projects' className='NavbarLink' style={{ textDecoration: 'none' }} >
                                    <MenuItem onClick={ handleClose } sx={{ color:"#111164", fontFamily:"monospace", fontWeight: 'bold', transitionDuration: '0.6s', '&:hover': {opacity: [0.5], }, }}> 
                                        <EngineeringIcon style={{fontSize: '25px', marginRight: '5%'}} />
                                        Projects
                                    </MenuItem>
                                </Link>
                                <Link to='/utility' className='NavbarLink' style={{ textDecoration: 'none' }} >
                                    <MenuItem onClick={ handleClose } sx={{ color:"#111164", fontFamily:"monospace", fontWeight: 'bold', transitionDuration: '0.6s', '&:hover': {opacity: [0.5], }, }}> 
                                        <HandymanIcon style={{fontSize: '25px', marginRight: '5%'}} />
                                        Utility
                                    </MenuItem>
                                </Link>
                                <Link to='/gallery' className='NavbarLink' style={{ textDecoration: 'none' }} >
                                    <MenuItem onClick={ handleClose } sx={{ color:"#111164", fontFamily:"monospace", fontWeight: 'bold', transitionDuration: '0.6s', '&:hover': {opacity: [0.5], }, }}> 
                                        <CameraIcon style={{fontSize: '25px', marginRight: '5%'}} />
                                        Gallery
                                    </MenuItem>
                                </Link>
                            </Menu>
                        </Stack>

                        {/* ########################### */}
                        {/* ####### NAV MENU (pages) */}
                        <Grid container direction="row" justifyContent="center" alignItems="center" >
                            <Stack direction="row" spacing={innerWidth / 80} sx={{marginLeft: '12%', position: 'relative', boxSizing:'border-box', '@media (max-width:816px)':{display:'none'}, }}>
                                
                                <NavStyles.NavPages>
                                    <Link to='/' className='NavbarLink' style={{ textDecoration: 'none' }} > 
                                        <IconButton size='small' disableRipple='true' style={{color: "#EEEE9B"}} >
                                            <HomeIcon style={{fontSize: '40px'}} />
                                        </IconButton>
                                    </Link>
                                </NavStyles.NavPages>
                                
                                <NavStyles.NavPages>
                                    <Link to='/projects' className='NavbarLink' style={{ textDecoration: 'none' }} > 
                                        <IconButton size='small' disableRipple='true' style={{color: "#EEEE9B"}} >
                                            <EngineeringIcon style={{fontSize: '40px'}} />
                                        </IconButton>
                                    </Link>
                                </NavStyles.NavPages>
                                
                                <NavStyles.NavPages>
                                    <Link to='/utility' className='NavbarLink' style={{ textDecoration: 'none' }} > 
                                        <IconButton size='small' disableRipple='true' style={{color: "#EEEE9B"}} >
                                            <HandymanIcon style={{fontSize: '40px'}} />
                                        </IconButton>
                                    </Link>
                                </NavStyles.NavPages>

                                <NavStyles.NavPages> 
                                    <Link to='/gallery' className='NavbarLink' style={{ textDecoration: 'none' }} > 
                                        <IconButton size='small' disableRipple='true' style={{color: "#EEEE9B"}} >
                                            <CameraIcon style={{fontSize: '40px'}} />
                                        </IconButton>
                                    </Link>
                                </NavStyles.NavPages>
                            </Stack>
                        </Grid>

                        {/* ########################### */}
                        {/* ####### BRIDGE image box */}
                        <img src={HarbourBridge} alt='Bridge' style={{ height: '62px', width: '400px', maxWidth:'400px' }}/>

                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}


export default Navbar;