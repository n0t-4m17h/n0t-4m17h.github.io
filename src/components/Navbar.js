import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import { AppBar, Toolbar, Stack, Grid, ButtonBase, IconButton, Menu, MenuItem } from '@mui/material';
import Box from '@mui/system/Box'
import { Zoom } from '@mui/material';

import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HomeIcon from '@mui/icons-material/HomeRounded';
import EngineeringIcon from '@mui/icons-material/Engineering';
import HandymanIcon from '@mui/icons-material/HandymanRounded';
import CameraIcon from '@mui/icons-material/PartyModeRounded';


import NavStyles from '../styles/NavStyle';
// import PrisonMike from '../assets/images/prison-mike.jpg'
import HarbourBridge from '../assets/images/bridge.png'

import lottie from 'lottie-web';
import animation2 from '../assets/animations/data.json';


const Navbar = ( ) => {
    //                      NAVBAR    SIDEBAR   SIDEBAR(2) PAGE(Light) PAGE(Dark) PAGE(MID)  MUI(Prim) SoftYellow CONSIDER-THIS
    // const VIP_COLORS = ["#153454", "#063970","#002884", "#0d539E", "#1E3247", "#204063", "#257DE8", "#EEEE9B", "#0a427e"];
    // const XTRA_COLORS = ["#111164", "#8f5a24", "#202062"]
    // const PAGE_LIST = ['Home', 'Projects', 'Utility', 'Gallery']
    
    const pagesInfo = [
        {
            "title": 'Home',
            "link": '/',
            "mainIcon": <HomeIcon style={{fontSize: '40px'}} />,
            "sideIcon": <HomeIcon style={{fontSize: '25px', marginRight: '5%'}} />
        },
        {
            "title": 'Projects',
            "link": '/projects',
            "mainIcon": <EngineeringIcon style={{fontSize: '40px'}} />,
            "sideIcon": <EngineeringIcon style={{fontSize: '25px', marginRight: '5%'}} />
        },
        {
            "title": 'Utility',
            "link": '/utility',
            "mainIcon": <HandymanIcon style={{fontSize: '40px'}} />,
            "sideIcon": <HandymanIcon style={{fontSize: '25px', marginRight: '5%'}} />
        },
        {
            "title": 'Gallery',
            "link": '/gallery',
            "mainIcon": <CameraIcon style={{fontSize: '40px'}} />,
            "sideIcon": <CameraIcon style={{fontSize: '25px', marginRight: '5%'}} />
        },
    ]


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

    let animationContainer2 = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            name:'ajk',
            container: animationContainer2.current,
            animationData: animation2,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            // onComplete: lottie.destroy() // NOTE: this is needed due to Strict mode's double rendering
        });

        window.addEventListener("resize", updateDimensions);
        
        return () => {
            lottie.destroy("ajk");
            window.removeEventListener("resize", updateDimensions);
        }
            
    });
    

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed" variant='elevation' color='transparent' enableColorOnDark sx={{ background: "#153454"}}> {/* display: 'center' */}
                    <Toolbar variant='regular' disableGutters >

                        {/* ########################### */}
                        {/* ####### LHS Box (animation + sidemenu) */}
                        <Stack component="navbarLogo" direction="row" sx={{ justifyContent:"flex-start" }} >
                            <Box sx={{transitionDuration: '0.375s', '&:hover': {opacity: [0.7],},  width: '80px', height: '80px', marginBottom: '-6%', marginTop:'-6%'}} > 
                                <a href='https://youtu.be/a7RoP1LKMeM?t=112' target="_blank" rel="noreferrer">
                                    <div ref={animationContainer2}/>
                                </a>
                            </Box>
                            

                            {/* ################### */}
                            {/* #### SIDE MENU (dropdown pages) */}
                            <NavStyles.TransIconButton color='primary' aria-label='MenuLogo' disableRipple='true' style={{color: "#EEEE9B"}} >
                                <ButtonBase disableRipple
                                    onClick={handleClick} 
                                >
                                    {clicked ? <ExpandMoreIcon style={{fontSize: '29px'}} /> : <ExpandCircleDownIcon style={{fontSize: '29px'}} />}
                                </ButtonBase>
                            </NavStyles.TransIconButton>

                            <Menu
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                TransitionComponent={Zoom}
                                transitionDuration={300}
                                sx={{filter: 'sepia(300%) hue-rotate(320deg) saturate(450%) drop-shadow(3px 3px 3px #ff9933) invert(95%)'}}
                            >

                                {pagesInfo.map((pages) => (
                                    <Link to={pages.link} className='NavbarLink' style={{ textDecoration: 'none' }} > {/* , rotate:["3.14rad"] */}
                                        <MenuItem onClick={ handleClose } sx={{ color:"#111164", fontFamily:"monospace", fontWeight: 'bold', transitionDuration: '0.6s', '&:hover': {opacity: [0.5], }, }}>
                                            {pages.sideIcon}
                                            {pages.title}
                                        </MenuItem>
                                    </Link>
                                ))}

                            </Menu>
                        </Stack>

                        {/* ########################### */}
                        {/* ####### NAV MENU (pages) */}
                        <Grid container direction="row" justifyContent="center" alignItems="center" >
                            <Stack direction="row" spacing={innerWidth / 80} sx={{marginLeft: '12%', position: 'relative', boxSizing:'border-box', '@media (max-width:816px)':{display:'none'}, }}>

                                {pagesInfo.map((pages) => (
                                    <NavStyles.NavPages>
                                        <Link to={pages.link} className='NavbarLink' style={{ textDecoration: 'none' }} > 
                                            <IconButton size='small' disableRipple='true' style={{color: "#EEEE9B"}} >
                                                {pages.mainIcon}
                                            </IconButton>
                                        </Link>
                                    </NavStyles.NavPages>
                                ))}

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