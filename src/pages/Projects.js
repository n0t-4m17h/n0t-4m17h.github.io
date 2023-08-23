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

const project_type = ["uni", "personal", "comp"]

const Projects = () => {

    const pageSummary = `The following are some projects I've been involved in since the start of my programming journey (2021).\n`;
    
    const projectsInfoDict = {
        "UNSWStreams": {
            "title": "UNSW Streams",
            "desc": "A less sophisticated version of MS Teams. Contributed to backend Python code 🐍",
            "srcDesc": "Since it's a uni project, source code is unavailable, but... ",
            "img": unswStreamsImg,
            "stack": "Python, Flask, Requests",
            "src": "https://youtu.be/eG7Ga9E_f0o",
            "label": project_type[0]

        },
        "μsickBot": {
            "title": "μsick Bot",
            "desc": "A multipurpose Discord bot🤖 featuring a music playback system, utilises outsourced data from APIs and much more.",
            "srcDesc": "Link to GitHub repo ",
            "img": musickBotImg,
            "stack": "Python, discord.py",
            "src": "https://github.com/m4ch374/mu_sick_bot",
            "label": project_type[1]

        },
        "SocketForum": {
            "title": "Socket Forums",
            "desc": "A crappy terminal-based Reddit clone (with minimal features).\nCoded via Python Socket Programming 🐍 and Client-Server architecture.",
            "srcDesc": "Link to GitHub repo ",
            "img": socketForumImg,
            "stack": "Python, Socket",
            "src": "https://github.com/n0t-4m17h/socket-forum",
            "label": project_type[1]

        },
        "DungeonMania": {
            "title": "Dungeon Mania",
            "desc": "A Naruto themed 'Pixel Dungeon' type of web game (with mazes, battling different enemies, looting etc).\nContributed to backend Java code ☕",
            "srcDesc": "Since it's a uni project, source code is unavailable, but... ",
            "img": dungeonManiaImg,
            "stack": "Java, Scintillia",
            "src": "https://www.youtube.com/watch?v=Rt_Ctu3tUJY&ab_channel=AmithKovoor",
            "label": project_type[0]

        },
        "AlgoTradingAdvisor": {
            "title": "Algo Trading",
            "desc": "A python bot that utilises quantitative trading strats to provide investment recommendations📈",
            "srcDesc": "Link to GitHub repo ",
            "img": algoTradingAdvisorImg,
            "stack": "Python, IEX Cloud API",
            "src": "https://github.com/n0t-4m17h/algorithmic-trading-bot",
            "label": project_type[1]

        },
        "HackathonOnlyGuests": {
            "title": "CSESoc Hackathon",
            "desc": "A congregating app that connects individuals with similar travel interests, titled \"OnlyGuests\"🛫",
            "srcDesc": "Link to GitHub repo ",
            "srcDesc2": [" and DevPost ", <a href="https://devpost.com/software/linkedout?ref_content=my-projects-tab&ref_feature=my_projects" target="_blank" rel="noreferrer">link</a>],
            "img": onlyGuestsImg,
            "stack": "Python, Flask + Typescript, ReactJS, TailwindCSS",
            "src": "https://github.com/m4ch374/cse_hackachon_2023",
            "label": project_type[2]

        },
    };


    

    // Same Logic as Navbar's SideMenu, but multiply by the no. of projects (NOTE: lmao this not good)
    // Unsw Streams -->
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    // Musick Bot -->
    const [open1, setOpen1] = useState(false);
    const handleOpen1 = () => setOpen1(true);
    const handleClose1 = () => setOpen1(false);
    
    // Socket Forum -->
    const [open2, setOpen2] = useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);
    
    // Dungeon Mania -->
    const [open3, setOpen3] = useState(false);
    const handleOpen3 = () => setOpen3(true);
    const handleClose3 = () => setOpen3(false);
    
    // Algo Trading Advisor -->
    const [open4, setOpen4] = useState(false);
    const handleOpen4 = () => setOpen4(true);
    const handleClose4 = () => setOpen4(false);
    
    // Only Guests -->
    const [open5, setOpen5] = useState(false);
    const handleOpen5 = () => setOpen5(true);
    const handleClose5 = () => setOpen5(false);
    


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
                    

                    {/* ONLY GUESTS */}
                    <Grid item >
                        <motion.div
                            whileTap={{ scale: 0.9 }}
                        >
                            <PageStyles.TransCard>
                                <CardActionArea onClick={handleOpen5} sx={{ transitionDuration: '1s', '&:hover': {opacity: [0.9], }, }} >
                                    <CardMedia
                                        component='img'
                                        height='250'
                                        image={projectsInfoDict['HackathonOnlyGuests']['img']} // HackathonOnlyGuests
                                        alt='hackathonOnlyGuestsCard'
                                    />
                                    <CardContent sx={{backgroundColor:'#257DE8'}}>
                                        <Box sx={{ display:'flex', justifyContent: 'space-between', alignContent:'space-evenly'}} >
                                            <PageStyles.CardCaptionTitle style={{fontSize: '24px'}}> 
                                                {projectsInfoDict['HackathonOnlyGuests']['title']} 
                                            </PageStyles.CardCaptionTitle>
                                            <PageStyles.CardCaptionLabel>
                                                {projectsInfoDict['HackathonOnlyGuests']['label']}
                                            </PageStyles.CardCaptionLabel>

                                        </Box>
                                    </CardContent> 
                                </CardActionArea>
                                <Modal open={open5} 
                                        onClose={handleClose5} 
                                        aria-labelledby="modal-modal-title" 
                                        aria-describedby="modal-modal-description"
                                        closeAfterTransition
                                >
                                    <Fade in={open5}>
                                        <Box sx={PageStyles.CardModalStyle}>
                                            <PageStyles.CardModalTitle>
                                                {projectsInfoDict['HackathonOnlyGuests']['desc']} 
                                            </PageStyles.CardModalTitle>
                                            <PageStyles.CardModalStack>
                                                STACK: {projectsInfoDict['HackathonOnlyGuests']['stack']}
                                            </PageStyles.CardModalStack>
                                            <PageStyles.CardModalRef >
                                                {projectsInfoDict['HackathonOnlyGuests']['srcDesc']} 
                                                <ButtonBase disableRipple href={projectsInfoDict['HackathonOnlyGuests']['src']} target="_blank" >
                                                    <OpenInNewRounded style={{fontSize: '18px'}} />
                                                </ButtonBase>
                                                {projectsInfoDict['HackathonOnlyGuests']['srcDesc2'][0]} 
                                                {projectsInfoDict['HackathonOnlyGuests']['srcDesc2'][1]}
                                            </PageStyles.CardModalRef>
                                        </Box>
                                    </Fade>
                                </Modal>
                            </PageStyles.TransCard>
                        </motion.div>
                    </Grid>


                    {/* ALGO TRADING ADVISOR */}
                    <Grid item >
                        <motion.div
                            whileTap={{ scale: 0.9 }}
                        >
                            <PageStyles.TransCard>
                                <CardActionArea onClick={handleOpen4} sx={{ transitionDuration: '1s', '&:hover': {opacity: [0.9], }, }} >
                                    <CardMedia
                                        component='img'
                                        height='250'
                                        image={projectsInfoDict['AlgoTradingAdvisor']['img']} // AlgoTradingAdvisor
                                        alt='algoTradingAdvisorCard'
                                    />
                                    <CardContent sx={{backgroundColor:'#257DE8'}}>
                                        <Box sx={{ display:'flex', justifyContent: 'space-between', alignContent:'space-evenly'}} >
                                            <PageStyles.CardCaptionTitle> 
                                                {projectsInfoDict['AlgoTradingAdvisor']['title']} 
                                            </PageStyles.CardCaptionTitle>
                                            <PageStyles.CardCaptionLabel>
                                                {projectsInfoDict['AlgoTradingAdvisor']['label']}
                                            </PageStyles.CardCaptionLabel>

                                        </Box>
                                    </CardContent> 
                                </CardActionArea>
                                <Modal open={open4} 
                                        onClose={handleClose4} 
                                        aria-labelledby="modal-modal-title" 
                                        aria-describedby="modal-modal-description"
                                        closeAfterTransition
                                >
                                    <Fade in={open4}>
                                        <Box sx={PageStyles.CardModalStyle}>
                                            <PageStyles.CardModalTitle>
                                                {projectsInfoDict['AlgoTradingAdvisor']['desc']} 
                                            </PageStyles.CardModalTitle>
                                            <PageStyles.CardModalStack>
                                                STACK: {projectsInfoDict['AlgoTradingAdvisor']['stack']}
                                            </PageStyles.CardModalStack>
                                            <PageStyles.CardModalRef >
                                                {projectsInfoDict['AlgoTradingAdvisor']['srcDesc']} 
                                                <ButtonBase disableRipple href={projectsInfoDict['AlgoTradingAdvisor']['src']} target="_blank" >
                                                    <OpenInNewRounded style={{fontSize: '18px'}} />
                                                </ButtonBase>
                                            </PageStyles.CardModalRef>
                                        </Box>
                                    </Fade>
                                </Modal>
                            </PageStyles.TransCard>
                        </motion.div>
                    </Grid>


                    {/* DUNGEON MANIA */}
                    <Grid item >
                        <motion.div
                            whileTap={{ scale: 0.9 }}
                        >
                            <PageStyles.TransCard>
                                <CardActionArea onClick={handleOpen3} sx={{ transitionDuration: '1s', '&:hover': {opacity: [0.9], }, }} >
                                    <CardMedia
                                        component='img'
                                        height='250'
                                        image={projectsInfoDict['DungeonMania']['img']}
                                        alt='dungeonManiaCard'
                                    />
                                    <CardContent sx={{backgroundColor:'#257DE8'}}>
                                        <Box sx={{ display:'flex', justifyContent: 'space-between', alignContent:'space-evenly'}} >
                                            <PageStyles.CardCaptionTitle> 
                                                {projectsInfoDict['DungeonMania']['title']} 
                                            </PageStyles.CardCaptionTitle>
                                            <PageStyles.CardCaptionLabel>
                                                {projectsInfoDict['DungeonMania']['label']}
                                            </PageStyles.CardCaptionLabel>

                                        </Box>
                                    </CardContent> 
                                </CardActionArea>
                                <Modal open={open3} 
                                        onClose={handleClose3} 
                                        aria-labelledby="modal-modal-title" 
                                        aria-describedby="modal-modal-description"
                                        closeAfterTransition
                                >
                                    <Fade in={open3}>
                                        <Box sx={PageStyles.CardModalStyle}>
                                            <PageStyles.CardModalTitle>
                                                {projectsInfoDict['DungeonMania']['desc']} 
                                            </PageStyles.CardModalTitle>
                                            <PageStyles.CardModalStack>
                                                STACK: {projectsInfoDict['DungeonMania']['stack']}
                                            </PageStyles.CardModalStack>
                                            <PageStyles.CardModalRef >
                                                {projectsInfoDict['DungeonMania']['srcDesc']} 
                                                <ButtonBase disableRipple href={projectsInfoDict['DungeonMania']['src']} target="_blank" >
                                                    <OpenInNewRounded style={{fontSize: '18px'}} />
                                                </ButtonBase>
                                            </PageStyles.CardModalRef>
                                        </Box>
                                    </Fade>
                                </Modal>
                            </PageStyles.TransCard>
                        </motion.div>
                    </Grid>

                    {/* SOCKET FORUM */}
                    <Grid item >
                        <motion.div
                            whileTap={{ scale: 0.9 }}
                        >
                            <PageStyles.TransCard>
                                <CardActionArea onClick={handleOpen2} sx={{ transitionDuration: '1s', '&:hover': {opacity: [0.9], }, }} >
                                    <CardMedia
                                        component='img'
                                        height='250'
                                        image={projectsInfoDict['SocketForum']['img']}
                                        alt='socketForumCard'
                                    />
                                    <CardContent sx={{backgroundColor:'#257DE8'}}>
                                        <Box sx={{ display:'flex', justifyContent: 'space-between', alignContent:'space-evenly'}} >
                                            <PageStyles.CardCaptionTitle> 
                                                {projectsInfoDict['SocketForum']['title']} 
                                            </PageStyles.CardCaptionTitle>
                                            <PageStyles.CardCaptionLabel>
                                                {projectsInfoDict['SocketForum']['label']}
                                            </PageStyles.CardCaptionLabel>

                                        </Box>
                                    </CardContent> 
                                </CardActionArea>
                                <Modal open={open2} 
                                        onClose={handleClose2} 
                                        aria-labelledby="modal-modal-title" 
                                        aria-describedby="modal-modal-description"
                                        closeAfterTransition
                                >
                                    <Fade in={open2}>
                                        <Box sx={PageStyles.CardModalStyle}>
                                            <PageStyles.CardModalTitle>
                                                {projectsInfoDict['SocketForum']['desc']} 
                                            </PageStyles.CardModalTitle>
                                            <PageStyles.CardModalStack>
                                                STACK: {projectsInfoDict['SocketForum']['stack']}
                                            </PageStyles.CardModalStack>
                                            <PageStyles.CardModalRef >
                                                {projectsInfoDict['SocketForum']['srcDesc']} 
                                                <ButtonBase disableRipple href={projectsInfoDict['SocketForum']['src']} target="_blank" >
                                                    <OpenInNewRounded style={{fontSize: '18px'}} />
                                                </ButtonBase>
                                            </PageStyles.CardModalRef>
                                        </Box>
                                    </Fade>
                                </Modal>
                            </PageStyles.TransCard>
                        </motion.div>
                    </Grid>

                    {/* MUSICK BOT */}
                    <Grid item >
                        <motion.div
                                whileTap={{ scale: 0.9 }}
                        >
                            <PageStyles.TransCard>
                                <CardActionArea onClick={handleOpen1} sx={{ transitionDuration: '1s', '&:hover': {opacity: [0.9], }, }} >
                                    <CardMedia
                                        component='img'
                                        height='250'
                                        image={projectsInfoDict['μsickBot']['img']}
                                        alt='μsickBotCard'
                                    />
                                    <CardContent sx={{backgroundColor:'#257DE8'}}>
                                        <Box sx={{ display:'flex', justifyContent: 'space-between', alignContent:'space-evenly'}} >
                                            <PageStyles.CardCaptionTitle> 
                                                {projectsInfoDict['μsickBot']['title']} 
                                            </PageStyles.CardCaptionTitle>
                                            <PageStyles.CardCaptionLabel>
                                                {projectsInfoDict['μsickBot']['label']}
                                            </PageStyles.CardCaptionLabel>
                                        </Box>
                                    </CardContent>
                                </CardActionArea>
                                <Modal open={open1} 
                                        onClose={handleClose1} 
                                        aria-labelledby="modal-modal-title" 
                                        aria-describedby="modal-modal-description"
                                        closeAfterTransition
                                >
                                    <Fade in={open1}>
                                        <Box sx={PageStyles.CardModalStyle}>
                                            <PageStyles.CardModalTitle>
                                                {projectsInfoDict['μsickBot']['desc']} 
                                            </PageStyles.CardModalTitle>
                                            <PageStyles.CardModalStack>
                                                STACK: {projectsInfoDict['μsickBot']['stack']}
                                            </PageStyles.CardModalStack>
                                            <PageStyles.CardModalRef >
                                                {projectsInfoDict['μsickBot']['srcDesc']} 
                                                <ButtonBase disableRipple href={projectsInfoDict['μsickBot']['src']} target="_blank" >
                                                    <OpenInNewRounded style={{fontSize: '18px'}} />
                                                </ButtonBase>
                                            </PageStyles.CardModalRef>
                                        </Box>
                                    </Fade>
                                </Modal>
                            </PageStyles.TransCard>
                        </motion.div>
                    </Grid>

                    {/* UNSW STREAMS */}
                    <Grid item >
                        <motion.div
                            whileTap={{ scale: 0.9 }}
                        >
                            <PageStyles.TransCard>
                                <CardActionArea onClick={handleOpen} sx={{ transitionDuration: '1s', '&:hover': {opacity: [0.9], }, }} >
                                    <CardMedia
                                        component='img'
                                        height='250'
                                        image={projectsInfoDict['UNSWStreams']['img']}
                                        alt='unswStreamsCard'
                                    />
                                    <CardContent sx={{backgroundColor:'#257DE8'}}>
                                        <Box sx={{ display:'flex', justifyContent: 'space-between', alignContent:'space-evenly'}} >
                                            <PageStyles.CardCaptionTitle> 
                                                {projectsInfoDict['UNSWStreams']['title']} 
                                            </PageStyles.CardCaptionTitle>
                                            <PageStyles.CardCaptionLabel>
                                                {projectsInfoDict['UNSWStreams']['label']}
                                            </PageStyles.CardCaptionLabel>
                                        </Box>
                                    </CardContent> 
                                </CardActionArea>
                                <Modal open={open} 
                                        onClose={handleClose} 
                                        aria-labelledby="modal-modal-title" 
                                        aria-describedby="modal-modal-description"
                                        closeAfterTransition
                                        >
                                    <Fade in={open}>
                                        <Box sx={PageStyles.CardModalStyle}>
                                            <PageStyles.CardModalTitle>
                                                {projectsInfoDict['UNSWStreams']['desc']} 
                                            </PageStyles.CardModalTitle>
                                            <PageStyles.CardModalStack>
                                                STACK: {projectsInfoDict['UNSWStreams']['stack']}
                                            </PageStyles.CardModalStack>
                                            <PageStyles.CardModalRef >
                                                {projectsInfoDict['UNSWStreams']['srcDesc']} 
                                                <ButtonBase disableRipple href={projectsInfoDict['UNSWStreams']['src']} target="_blank" >
                                                    <OpenInNewRounded style={{fontSize: '18px'}} />
                                                </ButtonBase>
                                            </PageStyles.CardModalRef>
                                        </Box>
                                    </Fade>
                                </Modal>
                            </PageStyles.TransCard>
                        </motion.div>
                    </Grid>

                </Grid>
            </Box>
        </motion.div>
    )
}

export default Projects;