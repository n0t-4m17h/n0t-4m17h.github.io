import React, { useEffect, createRef } from 'react';
// import { Helmet } from 'react-helmet';

import { Grid, Divider, ButtonBase } from '@mui/material';
import { Box } from '@mui/system'
import { GitHub, LinkedIn, Instagram } from '@mui/icons-material';

import lottie from 'lottie-web';

import PageStyles from '../styles/PageStyle';
import '../styles/Home.css';
// import '../assets/animations/lottie';
import animation from '../assets/animations/data.json';


const Home = () => {
    
    const hello = ">\thello, world ";
    var i = 0;
    const speed = 135;
    const typeWriter = () => {
        document.querySelector("#typeWriter").innerHTML = hello.substring(0, i) + "<span>\u25ae</span>";
        if (i++ !== hello.length) {
            setTimeout(typeWriter, speed);
        }
    }
    
    const summary = `My name's Amith.\n Currently a third year CSE student at UNSW, aiming to be the next Sundar Pichai ;)\n
        80% of the time, I'm busy engaging in cse-related stuff, such as personal projects, and expanding my knowledge across multiple areas of study in CS, including AI (ML) and cyber security (shoutout to Computerphile), whilst also keeping upto date with the latest news on frontend dev.\n
        19% of my time is spent religiously pumping some iron.\n
        The other 1% is spent doing literally anything and everything.`;
    var j = 0;
    const speedJ = 40;
    const typeWriterJ = () => {
        document.querySelector("#typeWriterJ").innerHTML = summary.substring(0, j);
        if (j++ !== summary.length) {
            setTimeout(typeWriterJ, speedJ);
        }
    }
    
    let animationContainer = createRef();
    
    useEffect(() => {
        lottie.loadAnimation({
            // container: document.getElementById('anim'),
            container: animationContainer.current,
            animationData: animation,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            // path:'../assets/animation/data.json',
            onComplete: lottie.destroy() // NOTE: this is needed due to Strict mode's double rendering
        });
        console.log("LOADED")
        window.addEventListener("load", typeWriter);
        window.addEventListener("click", typeWriter);
        
        window.addEventListener("load", typeWriterJ);
        window.addEventListener("click", typeWriterJ);
        
        return () => {
            
            window.removeEventListener("load", typeWriter);
            window.removeEventListener("click", typeWriter);
            
            window.removeEventListener("load", typeWriterJ);
            window.removeEventListener("click", typeWriterJ);

        };
    });


    return (
        <div className="Home">
            {/* <Helmet>
                <title>ajk ~ home</title>
                <meta name="description" content="amith's home page" />
            </Helmet> */}

            {/* <PageStyles.Title> Home Page </PageStyles.Title> */}
            {/* <PageStyles.LineBreak /> */}

            <PageStyles.AnimationContainer id='anim' ref={animationContainer} />


            <Box sx={{ width: '100%'}} >
                <Grid container justifyContent='center' rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 18 }} >

                    <Grid item xs={12} sm={6.5}>
                        <Box sx={{margin: 'auto', maxWidth: '450px', marginBottom: '2%'}}>
                            <PageStyles.RetroTerminal>
                                {/* this "home" class (from css file) prevents blinking effect applying to all page's span tags */}
                                <p id="typeWriter" className="home1" > </p>
                            </PageStyles.RetroTerminal>
                        </Box>
                    </Grid>

                    <Grid item xs={7.5} >
                        <Divider variant='middle' sx={{ bgcolor: "secondary.light" }} />
                    </Grid>

                    <Grid item xs={12} sm={7}>
                        <Box sx={{margin: 'auto', maxWidth: '1000px'}}>
                            <PageStyles.StdParagraph>
                                {/* {summary} */}
                                <p id="typeWriterJ" className="home1"> </p>
                            </PageStyles.StdParagraph>
                        </Box>
                    </Grid>

                    <Grid item xs={7.5} >
                        <Divider variant='middle' sx={{ bgcolor: "secondary.light", minHeight:'0.5px' }} />
                    </Grid>

                    <Grid item xs={7}>
                        <Box sx={{minHeight: '4vh', margin: 'auto', maxWidth: '1000px'}}>
                            <PageStyles.SocialsContainer>

                                <PageStyles.TransIconButton color='inherit' disableRipple='true'>
                                    <ButtonBase disableRipple href='https://github.com/n0t-4m17h' target="_blank" 
                                                sx={{ transitionDuration: '0.6s', '&:hover': {opacity: [0.6], }, }}
                                    >
                                        <GitHub style={{fontSize: '50px'}} />
                                    </ButtonBase>
                                </PageStyles.TransIconButton>

                                <PageStyles.TransIconButton color='info' disableRipple='true'>
                                    <ButtonBase disableRipple href='https://www.linkedin.com/in/amith-jacob-kovoor/' target="_blank" 
                                                sx={{ transitionDuration: '0.6s', '&:hover': {opacity: [0.6], }, }}
                                    >
                                        <LinkedIn style={{fontSize: '50px'}} />
                                    </ButtonBase>
                                </PageStyles.TransIconButton>

                                <PageStyles.TransIconButton color='warning' disableRipple='true'>
                                    <ButtonBase disableRipple href='https://www.instagram.com/hasbulla.hushetskiy/' target="_blank" 
                                                sx={{ transitionDuration: '0.6s', '&:hover': {opacity: [0.6], }, }} 
                                    >
                                        <Instagram style={{fontSize: '50px'}} />
                                    </ButtonBase>
                                </PageStyles.TransIconButton>

                            </PageStyles.SocialsContainer>

                        </Box>
                    </Grid>

                </Grid>
            </Box>


        </div>
    )
}

export default Home;