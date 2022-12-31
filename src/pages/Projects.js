import React, { useState } from 'react';

import { Grid, Divider, ButtonBase, CardContent, CardMedia, CardActionArea, Modal, Fade } from '@mui/material';
import { Box } from '@mui/system'

import { OpenInNewRounded } from '@mui/icons-material';

import PageStyles from '../styles/PageStyle';
import musickBotImg from '../assets/images/projects/musickBotDiscord.jpg';
import unswStreamsImg from '../assets/images/projects/unswStreams.jpg';
import socketForumImg from '../assets/images/projects/socketForum1.jpg';
import dungeonManiaImg from '../assets/images/projects/dungeonManiaNaruto1.jpg';


const Projects = () => {

    const pageSummary = `The following are some projects I've been involved in since the start of my programming journey (2021).\n`;
    
    const projectsInfoDict = {
        "UNSWStreams": {
            "title": "UNSW Streams",
            "desc": "A less sophisticated version of MS Teams. Contributed to backend Python code.",
            "srcDesc": "Since it's a uni project, source code is unavailable, but... ",
            "img": unswStreamsImg,
            "src": "https://www.reddit.com/r/unsw/comments/uq3eef/is_the_trimester_system_still_bad/",
            "label": "(uni)"

        },
        "μsickBot": {
            "title": "μsick Bot",
            "desc": "A multipurpose Discord bot that has a music playback system, utilises outsourced data from APIs etc.",
            "srcDesc": "Link to GitHub repo ",
            "img": musickBotImg,
            "src": "https://github.com/m4ch374/mu_sick_bot",
            "label": "(personal)"

        },
        "SocketForum": {
            "title": "Socket Forum",
            "desc": "A crappy terminal-based Reddit clone (with minimal features), coded via Python Socket Programming and Client-Server architecture.",
            "srcDesc": "Link to GitHub repo ",
            "img": socketForumImg,
            "src": "https://github.com/n0t-4m17h/socket-forum",
            "label": "(personal)"

        },
        "DungeonMania": {
            "title": "Dungeon Mania",
            "desc": "A Naruto themed 'Pixel Dungeon' type of web game (with mazes, battling different enemies, looting etc). Contributed to backend Java code.",
            "srcDesc": "Since it's a uni project, source code is unavailable, but... ",
            "img": dungeonManiaImg,
            "src": "https://www.youtube.com/watch?v=Rt_Ctu3tUJY&ab_channel=AmithKovoor",
            "label": "(uni)"

        },
    };


    

    // Same Logic as Navbar's SideMenu, but times by the no. of projects (lmfao this not good)
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
    


    return (
        <div>
            <PageStyles.Title> Projects </PageStyles.Title>

            <Box sx={{margin: 'auto', maxWidth: '500px', marginBottom: '2%', minHeight:'5vh',}}>
                <PageStyles.StdParagraph>
                    {pageSummary}
                </PageStyles.StdParagraph>
            </Box>

            <Box sx={{margin: 'auto', maxWidth: '500px', marginBottom: '2.5%'}}>
                <Divider variant='middle' sx={{ bgcolor: "secondary.light", display: 'flex', alignContent:'center', }} />
            </Box>

            {/* PROJECT CARDS Begin here #### */}
            <Box sx={{margin: 'auto', maxWidth: '1000px', marginBottom: '2%', }} >
                <Grid container justifyContent='center' rowSpacing={8} columnSpacing={{ xs: 1, sm: 1, md: 8 }}>
                    {/* UNSW STREAMS */}
                    <Grid item sx={{ transitionDuration: '1s', '&:hover': {opacity: [0.7], }, }} >
                        <PageStyles.TransCard>
                            <CardActionArea onClick={handleOpen}>
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
                                        <PageStyles.CardModalRef >
                                            {projectsInfoDict['UNSWStreams']['srcDesc']} 
                                            <ButtonBase disableRipple href={projectsInfoDict['UNSWStreams']['src']} target="_blank" >
                                                <OpenInNewRounded style={{fontSize: '25px'}} />
                                            </ButtonBase>
                                        </PageStyles.CardModalRef>
                                    </Box>
                                </Fade>
                            </Modal>
                        </PageStyles.TransCard>
                    </Grid>
                    {/* MUSICK BOT */}
                    <Grid item sx={{ transitionDuration: '1s', '&:hover': {opacity: [0.7], }, }} >
                        <PageStyles.TransCard>
                            <CardActionArea onClick={handleOpen1}>
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
                                        <PageStyles.CardModalRef >
                                            {projectsInfoDict['μsickBot']['srcDesc']} 
                                            <ButtonBase disableRipple href={projectsInfoDict['μsickBot']['src']} target="_blank" >
                                                <OpenInNewRounded style={{fontSize: '25px'}} />
                                            </ButtonBase>
                                        </PageStyles.CardModalRef>
                                    </Box>
                                </Fade>
                            </Modal>
                        </PageStyles.TransCard>
                    </Grid>
                    {/* SOCKET FORUM */}
                    <Grid item sx={{ transitionDuration: '1s', '&:hover': {opacity: [0.7], }, }} >
                        <PageStyles.TransCard>
                            <CardActionArea onClick={handleOpen2}>
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
                                        <PageStyles.CardModalRef >
                                            {projectsInfoDict['SocketForum']['srcDesc']} 
                                            <ButtonBase disableRipple href={projectsInfoDict['SocketForum']['src']} target="_blank" >
                                                <OpenInNewRounded style={{fontSize: '25px'}} />
                                            </ButtonBase>
                                        </PageStyles.CardModalRef>
                                    </Box>
                                </Fade>
                            </Modal>
                        </PageStyles.TransCard>
                    </Grid>
                    {/* DUNGEON MANIA */}
                    <Grid item sx={{ transitionDuration: '1s', '&:hover': {opacity: [0.7], }, }} >
                        <PageStyles.TransCard>
                            <CardActionArea onClick={handleOpen3}>
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
                                        <PageStyles.CardModalRef >
                                            {projectsInfoDict['DungeonMania']['srcDesc']} 
                                            <ButtonBase disableRipple href={projectsInfoDict['DungeonMania']['src']} target="_blank" >
                                                <OpenInNewRounded style={{fontSize: '25px'}} />
                                            </ButtonBase>
                                        </PageStyles.CardModalRef>
                                    </Box>
                                </Fade>
                            </Modal>
                        </PageStyles.TransCard>
                    </Grid>
                    {/* ML??? */}

                </Grid>
            </Box>
        </div>
    )
}

export default Projects;