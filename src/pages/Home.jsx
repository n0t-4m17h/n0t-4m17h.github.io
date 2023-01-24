import React, { useEffect, useRef } from 'react';
// import { Helmet } from 'react-helmet';

import { Divider, ButtonBase } from '@mui/material';
import { Box } from '@mui/system'
import { GitHub, LinkedIn, Instagram } from '@mui/icons-material';

import lottie from 'lottie-web';

import '../styles/Home.css';
import PageStyles from '../styles/PageStyle';
import animation from '../assets/animations/coder1.json';


const Home = () => {
    
    const socialsInfo = [
        {
            "title": 'GitHub',
            "color": 'inherit',
            "link": 'https://github.com/n0t-4m17h',
            "icon": <GitHub style={{fontSize: '50px'}} />
        },
        {
            "title": 'LinkedIn',
            "color": 'info',
            "link": 'https://www.linkedin.com/in/amith-jacob-kovoor/',
            "icon": <LinkedIn style={{fontSize: '50px'}} />
        },
        {
            "title": 'Instagram',
            "color": 'warning',
            "link": 'https://www.instagram.com/hasbulla.hushetskiy/',
            "icon": <Instagram style={{fontSize: '50px'}} />
        },
    ]


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
        80% of the time, I'm busy engaging in cse-related activities, such as personal projects, and expanding my knowledge across multiple areas of study in CS, including AI (ML) and cyber security (shoutout to Computerphile), whilst also keeping upto date with the latest news on frontend dev.\n
        19% of my time is spent religiously pumping some iron.\n
        The other 1% is spent doing literally anything and everything.`;
    var j = 0;
    const speedJ = 30;
    function typeWriterJ () {
        document.querySelector("#typeWriterJ").innerHTML = summary.substring(0, j);
        if (j++ !== summary.length) {
            setTimeout(typeWriterJ, speedJ);
        }
    }
    

    const animationContainer = useRef(null);
    

    useEffect(() => {
        lottie.loadAnimation({
            name:'coder',
            container: animationContainer.current,
            animationData: animation,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            prerender:true,
            // onComplete: lottie.destroy() // NOTE: this is needed due to Strict mode's double rendering
        });
        
        window.addEventListener("load", typeWriter);
        window.addEventListener("click", typeWriter);
        
        window.addEventListener("load", typeWriterJ);
        window.addEventListener("click", typeWriterJ);
        
        return () => {
            lottie.destroy("coder");

            window.removeEventListener("load", typeWriter);
            window.removeEventListener("click", typeWriter);
            
            window.removeEventListener("load", typeWriterJ);
            window.removeEventListener("click", typeWriterJ);

        };
    });



    return (
        <div className="Home">
            <PageStyles.AnimationContainer id='anim' ref={animationContainer} />

            <Box sx={{ width: '100%'}} >

                <Box sx={{margin: 'auto', maxWidth: '450px', marginBottom: '40px', marginTop: '10px'}}>
                    <PageStyles.RetroTerminal>
                        {/* this "home" class (from css file) prevents blinking effect applying to all page's span tags */}
                        <p id="typeWriter" className="home1" > </p>
                    </PageStyles.RetroTerminal>
                </Box>

                <Box sx={{margin: 'auto', maxWidth: '700px', marginBottom: '15px'}}>
                    <Divider variant='middle' sx={{ bgcolor: "secondary.light" }} />
                </Box>

                <Box sx={{margin: 'auto', width: '80vw', maxWidth: '1000px', marginBottom: '25px', }}>
                    <PageStyles.StdParagraph>
                        <p id="typeWriterJ" className="home1"> </p>
                    </PageStyles.StdParagraph>
                </Box>

                <Box sx={{margin: 'auto', maxWidth: '700px', marginBottom: '25px'}}>
                    <Divider variant='middle' sx={{ bgcolor: "secondary.light" }} />
                </Box>

                <Box sx={{ margin: 'auto', maxWidth: '1000px'}}>
                    <PageStyles.SocialsContainer>

                        {socialsInfo.map((socials) => (
                            <PageStyles.TransIconButton color={socials.color} disableRipple='true'>
                                <ButtonBase disableRipple href={socials.link} target="_blank" 
                                            sx={{ transitionDuration: '0.6s', '&:hover': {opacity: [0.6], }, }}
                                >
                                    {socials.icon}
                                </ButtonBase>
                            </PageStyles.TransIconButton>
                        ))}

                    </PageStyles.SocialsContainer>
                </Box>

            </Box>

        </div>
    )
}

export default Home;