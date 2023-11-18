import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import { motion } from 'framer-motion';

import { Grid, Divider, ButtonBase, CardContent, CardMedia, CardActionArea, Modal, Fade } from '@mui/material';
import { Box } from '@mui/system'
import { OpenInNewRounded } from '@mui/icons-material';

import PageStyles from '../styles/PageStyle';
import musickBotImg from '../assets/images/projects/musickBotDiscord.jpg';
import unswStreamsImg from '../assets/images/projects/unswStreams.jpg';
import socketForumImg from '../assets/images/projects/socketForum1.jpg';
import dungeonManiaImg from '../assets/images/projects/dungeonManiaNaruto1.jpg';
import algoTradingAdvisorImg from '../assets/images/projects/algoTradingAdvisor.jpg';
import onlyGuestsImg from '../assets/images/projects/onlyGuests.jpg';
import gigConnectImg from '../assets/images/projects/gigconnect-square.jpg';

const project_type = ["uni", "personal", "comp"]

const Projects = () => {

    const pageSummary = `The following are some projects I've been involved in since the start of my programming journey (2021).\n`;
    
    const projectsInfoLIST = [
        {
            "title": "UNSW Streams",
            "desc": "A less sophisticated version of MS Teams.\nContributed to backend Python code 🐍",
            "srcDesc": "Since it's a uni project, source code is unavailable, but... ",
            "img": unswStreamsImg,
            "stack": "Python, Flask, Requests",
            "src": "https://youtu.be/eG7Ga9E_f0o",
            "label": project_type[0]
        },
        {
            "title": "μsick Bot",
            "desc": "A multipurpose Discord bot🤖 featuring a music playback system, utilises outsourced data from APIs and much more.",
            "srcDesc": "Link to GitHub repo ",
            "img": musickBotImg,
            "stack": "Python, discord.py",
            "src": "https://github.com/m4ch374/mu_sick_bot",
            "label": project_type[1]
        },
        {
            "title": "Socket Forums",
            "desc": "A crappy terminal-based Reddit clone (with minimal features).\nCoded via Python Socket Programming 🐍 and Client-Server architecture.",
            "srcDesc": "Link to GitHub repo ",
            "img": socketForumImg,
            "stack": "Python, Socket",
            "src": "https://github.com/n0t-4m17h/socket-forum",
            "label": project_type[1]
        },
        {
            "title": "Dungeon Mania",
            "desc": "A Naruto themed 'Pixel Dungeon' type of web game (with mazes, battling different enemies, looting etc).\nContributed to backend Java code ☕",
            "srcDesc": "Since it's a uni project, source code is unavailable, but... ",
            "img": dungeonManiaImg,
            "stack": "Java, Scintillia",
            "src": "https://www.youtube.com/watch?v=Rt_Ctu3tUJY&ab_channel=AmithKovoor",
            "label": project_type[0]
        },
        {
            "title": "Algo Trading",
            "desc": "A python bot that utilises quantitative trading strats to provide investment recommendations📈",
            "srcDesc": "Link to GitHub repo ",
            "img": algoTradingAdvisorImg,
            "stack": "Python, IEX Cloud API",
            "src": "https://github.com/n0t-4m17h/algorithmic-trading-bot",
            "label": project_type[1]
        },
        {
            "title": "CSESoc Hackathon",
            "desc": "A congregating app that connects individuals with similar travel interests, titled \"OnlyGuests\"🛫\nContributed to backend Python code 🐍",
            "srcDesc": ["Link to GitHub repo ", " and DevPost ", <a href="https://devpost.com/software/linkedout?ref_content=my-projects-tab&ref_feature=my_projects" target="_blank" rel="noreferrer">link</a>],
            "img": onlyGuestsImg,
            "stack": "Python, Flask + Typescript, ReactJS, TailwindCSS",
            "src": "https://github.com/m4ch374/cse_hackachon_2023",
            "label": project_type[2]
        },
        {
            "title": "GigConnect",
            "desc": "A capstone project web platform that connects professionals with companies offering projects⚡\nContributed to the backend design and dev.",
            "srcDesc": "Since it's a uni project, source code is unavailable, but... ",
            "img": gigConnectImg,
            "stack": "Typescript, Express, Prisma, ReactJS, TailwindCSS",
            "src": "https://youtu.be/xXSV1hMa3L0",
            "label": project_type[0]
        },
    ];


    // init all project modal open state as false (used to keep track of each project modal's state)
    const [modalStates, setModalStates] = useState(projectsInfoLIST.map(() => false));
    // open the clicked-on modal by changing its state to true
    const handleOpen = (index) => {
        const newModalStates = [...modalStates];
        newModalStates[index] = true;
        setModalStates(newModalStates);
    };
    const handleClose = (index) => {
        const newModalStates = [...modalStates];
        newModalStates[index] = false;
        setModalStates(newModalStates);
    };
    

    return (
        <motion.div className="Projects"
            initial={{ translateY: -1000, translateX: 0 }}
            animate={{ translateY: 0, translateX: 0 }}
            exit={{ translateY: -1000, translateX: 0 }}
            transition={{ duration: 0.25 }}
            style={{ marginBottom: '70px' }}
        >
            <Helmet>
                <title>ajk ~ projects</title>
                <meta name="description" content="amith's projects" />
            </Helmet>

            <PageStyles.Title> Projects </PageStyles.Title>

            <Box sx={{margin: 'auto', maxWidth: '500px', marginBottom: '30px', minHeight:'5vh',}}>
                <PageStyles.StdParagraph>
                    {pageSummary}
                </PageStyles.StdParagraph>
            </Box>

            <Box sx={{margin: 'auto', maxWidth: '500px', marginBottom: '50px'}}>
                <Divider variant='middle' sx={{ bgcolor: "secondary.light", display: 'flex', alignContent:'center', }} />
            </Box>

            {/* PROJECT CARDS Begin here #### */}
            <Box sx={{margin: 'auto', maxWidth: '1000px', marginBottom: '2%', }} >
                <Grid container justifyContent='center' rowSpacing={8} columnSpacing={{ xs: 1, sm: 1, md: 8 }}>
                    
                    {projectsInfoLIST.reverse().map((project, index) => {
                            return (
                                <Grid item key={index}>
                                    <motion.div
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <PageStyles.TransCard>
                                            <CardActionArea 
                                                onClick={() => handleOpen(index)} 
                                                sx={{ transitionDuration: '1s', '&:hover': {opacity: [0.9], }, }} 
                                            >
                                                <CardMedia
                                                    component='img'
                                                    height='250'
                                                    image={project.img}
                                                    alt={project.title}
                                                />
                                                <CardContent sx={{backgroundColor:'#257DE8'}}>
                                                    <Box sx={{ display:'flex', justifyContent: 'space-between', alignContent:'space-evenly'}} >
                                                    {/* the following is because onlyguests requires smaller font */}
                                                    {project.title === "CSESoc Hackathon" ?
                                                        <PageStyles.CardCaptionTitle style={{fontSize: '24px'}} > 
                                                            {project.title}
                                                        </PageStyles.CardCaptionTitle>
                                                    :
                                                        <PageStyles.CardCaptionTitle> 
                                                            {project.title}
                                                        </PageStyles.CardCaptionTitle>
                                                    }
                                                        <PageStyles.CardCaptionLabel>
                                                            {project.label}
                                                        </PageStyles.CardCaptionLabel>
                                                    </Box>
                                                </CardContent> 
                                            </CardActionArea>
                                            <Modal open={modalStates[index]} 
                                                onClose={() => handleClose(index)} 
                                                aria-labelledby="modal-modal-title" 
                                                aria-describedby="modal-modal-description"
                                                closeAfterTransition
                                            >
                                                <Fade in={modalStates[index]}>
                                                    <Box sx={PageStyles.CardModalStyle}>
                                                        <PageStyles.CardModalTitle>
                                                            {project.desc}
                                                        </PageStyles.CardModalTitle>
                                                        <PageStyles.CardModalStack>
                                                            STACK: {project.stack}
                                                        </PageStyles.CardModalStack>
                                                        <PageStyles.CardModalRef >
                                                            {/* the following logic is such because onlyguests's "srcDesc" key is a list */}
                                                            {Array.isArray(project.srcDesc) ?
                                                                (<>
                                                                    {project.srcDesc[0]}
                                                                    <ButtonBase disableRipple href={project.src} target="_blank" >
                                                                        <OpenInNewRounded style={{fontSize: '18px'}} />
                                                                    </ButtonBase>
                                                                    {project.srcDesc[1]}
                                                                    {project.srcDesc[2]}
                                                                </>)
                                                            :
                                                                (<>
                                                                    {project.srcDesc}
                                                                    <ButtonBase disableRipple href={project.src} target="_blank" >
                                                                        <OpenInNewRounded style={{fontSize: '18px'}} />
                                                                    </ButtonBase>
                                                                </>)
                                                            }
                                                        </PageStyles.CardModalRef>
                                                    </Box>
                                                </Fade>
                                            </Modal>
                                        </PageStyles.TransCard>
                                    </motion.div>
                                </Grid>
                            )
                        })}

                </Grid>
            </Box>
        </motion.div>
    )
}

export default Projects;