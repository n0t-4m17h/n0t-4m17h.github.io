import React, { useEffect, useRef } from 'react';

import { motion } from 'framer-motion';
import lottie from 'lottie-web';
import Typewriter from 'typewriter-effect';

import { Divider, ButtonBase } from '@mui/material';
import { Box } from '@mui/system'
import { GitHub, LinkedIn, Instagram } from '@mui/icons-material';

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

    const summary = `My name's Amith.\n Currently a penultimate year CSE student at UNSW 🏫 \n
        80% of the time, I'm busy engaging in cse-related activities, such as personal projects, and expanding my knowledge across multiple areas of study in CS, especially AI and backend dev, whilst also keeping upto date with the latest news on frontend dev 🤖\n
        19% of my time is spent religiously pumping some iron 🏋️‍♂️\n
        The other 1% is spent doing anything and everything `
    ;
    
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
        
        return () => {
            lottie.destroy("coder");
        };
    });



    return (
        <motion.div className="Home"
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 0 }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: '68px' }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'center' }} >
                <motion.div
                    drag
                    dragConstraints={{
                        top: 0, bottom: 0, left: 0, right: 0
                    }}
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.1 }}
                >
                    <PageStyles.AnimationContainer id='anim' ref={animationContainer} />
                </motion.div>
            </Box>

            <Box sx={{ width: '100%' }} >

                <Box sx={{margin: 'auto', maxWidth: '450px', marginBottom: '38px', marginTop: '10px'}}>
                    <PageStyles.RetroTerminal>
                        <PageStyles.RetroParagraph>
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter
                                    .typeString(hello)
                                    .start();
                                }}
                                options={{
                                    delay: 125,
                                    cursor:'\u25ae' 
                                }}
                            />
                        </PageStyles.RetroParagraph>
                    </PageStyles.RetroTerminal>
                </Box>

                <Box sx={{margin: 'auto', maxWidth: '700px', marginBottom: '15px'}}>
                    <Divider variant='middle' sx={{ bgcolor: "secondary.light" }} />
                </Box>

                <Box sx={{margin: 'auto', width: '80vw', maxWidth: '1000px', marginBottom: '25px', }}>
                    <PageStyles.StdParagraph>
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString(" ")
                                    .pauseFor(1750)
                                    .typeString(summary)
                                    .start();
                            }}
                            options={{
                                delay: 25,
                                cursor:'ಠ_ಠ' //⚛
                            }}
                        />
                    </PageStyles.StdParagraph>
                </Box>

                <Box sx={{margin: 'auto', maxWidth: '700px', marginBottom: '16px'}}>
                    <Divider variant='middle' sx={{ bgcolor: "secondary.light" }} />
                </Box>

                <Box sx={{ margin: 'auto', maxWidth: '1000px' }}>
                    <PageStyles.SocialsContainer>

                        {socialsInfo.map((socials) => (
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <PageStyles.TransIconButton color={socials.color} disableRipple='true'>
                                    <ButtonBase disableRipple href={socials.link} target="_blank" 
                                                sx={{ transitionDuration: '0.6s', '&:hover': {opacity: [0.6], }, }}
                                    >
                                        {socials.icon}
                                    </ButtonBase>
                                </PageStyles.TransIconButton>
                            </motion.div>
                        ))}

                    </PageStyles.SocialsContainer>
                </Box>

            </Box>

        </motion.div>
    )
}

export default Home;