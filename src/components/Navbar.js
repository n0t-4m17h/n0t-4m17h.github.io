import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import { AppBar, Toolbar, Stack, Grid, Button, useMediaQuery } from '@mui/material';
import Box from '@mui/system/Box'
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HandymanIcon from '@mui/icons-material/Handyman';
import EngineeringIcon from '@mui/icons-material/Engineering';
import HomeIcon from '@mui/icons-material/Home';

import NavStyles from '../styles/NavStyle';
import PrisonMike from '../assets/images/prison-mike.jpg'
// import VividSydney from '../assets/images/vividSydney.jpg'
// import NightCity from '../assets/images/city.jpg'
import HarbourBridge from '../assets/images/bridge.png'

const Navbar = () => {
    const [clicked, setClicked] = useState(false); // for showing drop down MENU when required
    const [menuBtn, setButton] = useState(true); // for showing drop down menu BUTTON on small windows only

    const handleMenuClick = () => setClicked(!clicked); // open/close menu when clicked

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
    const VIP_COLORS = ["#153454", "#063970","#002884", "#0d539E", "#1E3247", "#204063", "#257DE8", "#EEEE9B"];
    
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" 
                        variant='outli' 
                        color='transparent' 
                        enableColorOnDark 
                        sx={{ background: "#153454"}}> 
                         {/* display: 'center' */}
                    <Toolbar variant='regular' disableGutters>
                        <Stack component="NavbarLogo" direction="row" sx={{ justifyContent:"flex-start"}} >
                            <Box sx={{transitionDuration: '0.375s', '&:hover': {opacity: [0.7],}, }} > 
                                <Link to='/' className='NavbarLogoLink'> 
                                {/* this would preferrably be an animation of "AJK" */}
                                    <img src={PrisonMike} alt='AJK' style={{height: '55px', borderRadius: 35, border: '2px solid #EEEE9B', display: 'flex' }}/>
                                </Link>
                            </Box>
                        
                            <NavStyles.TransIconButton color='primary' aria-label='MenuLogo' disableRipple='true' style={{color: "#EEEE9B"}}
                                onClick={handleMenuClick}
                                > 
                                <menuBtn style={{display: 'flex'}}>
                                    {clicked ? <ExpandMoreIcon style={{fontSize: '25px'}}/> : <ExpandCircleDownIcon style={{fontSize: '25px'}}/>}
                                </menuBtn>
                            </NavStyles.TransIconButton>
                        </Stack>

                        
                        <Grid container direction="row" justifyContent="center" alignItems="center">
                            <Stack direction="row" spacing={15} sx={{marginLeft: '10%', marginRight: '-5%', position: 'relative', boxSizing:'border-box', '@media (max-width:754px)':{display:'none'}, }}>
                                <NavStyles.NavPages> {/* NOTE: could avoid this repetition via Box */}
                                    <Link to='/' className='NavbarLink'> 
                                        <Button size='small' disableRipple='true' style={{color: "#EEEE9B"}}
                                            onMouseEnter = {handleHomeHover}
                                            onMouseLeave = {handleHomeHover}
                                        >
                                            {homeHovered ? <NavStyles.PageLinkStyle> Home </NavStyles.PageLinkStyle> : <HomeIcon style={{fontSize: '40px'}}/>}
                                        </Button>
                                    </Link>
                                </NavStyles.NavPages>
                                
                                <NavStyles.NavPages>
                                    <Link to='/projects' className='NavbarLink'> 
                                        <Button size='small' disableRipple='true' style={{color: "#EEEE9B"}}
                                            onMouseEnter = {handleProjectsHover}
                                            onMouseLeave = {handleProjectsHover}
                                        >
                                            {projectsHovered ? <NavStyles.PageLinkStyle> Projects </NavStyles.PageLinkStyle> : <EngineeringIcon style={{fontSize: '40px'}}/>}
                                        </Button>
                                    </Link>
                                </NavStyles.NavPages>
                                
                                <NavStyles.NavPages>
                                    <Link to='/utility' className='NavbarLink'> 
                                        <Button size='small' disableRipple='true' style={{color: "#EEEE9B"}}
                                            onMouseEnter = {handleUtilityHover}
                                            onMouseLeave = {handleUtilityHover}
                                        >
                                            {utilityHovered ? <NavStyles.PageLinkStyle> Utility </NavStyles.PageLinkStyle> : <HandymanIcon style={{fontSize: '40px'}}/>}
                                        </Button>
                                    </Link>
                                </NavStyles.NavPages>
                            </Stack>
                        </Grid>

                        <img src={HarbourBridge} style={{height: '62px', width: '400px', maxWidth:'400px'}}/>

                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}


export default Navbar;