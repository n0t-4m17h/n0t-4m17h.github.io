import React, { useEffect, useState } from 'react';

import { Grid, Divider, ButtonBase, Card, CardContent, CardMedia, CardActionArea, Popover } from '@mui/material';
import { Box } from '@mui/system'

import { GitHub } from '@mui/icons-material';

import PageStyles from '../styles/PageStyle';
// import '../styles/Utility.css';
import musickBotImg from '../assets/images/musickBotDiscord.jpg';


// import Box from '@mui/material/Box';
// ########## USE THIS 'Complex Button' TO MAKE THE PROJECT CARDS expansive & CLICKABLE (to your github link) 
//                                     --> @ bottom of: https://mui.com/material-ui/react-button/ 


const Projects = () => {

    const pageSummary = `The following are some projects I've been involved in since the start of my programming journey (2021).\n`;
    // const musickBotDesc = "A multi-purpose Discord bot";
    // const unswStreamsDesc = "A lite version of MS Teams";
    // const socketForumDesc = "A terminal-based Reddit clone, but uglier and less features";
    // const dungeonManiaDesc = "A 'Fireboy and Watergirl' type of game, but with more features";
    const projectsInfoDict = {
        "UNSWStreams": {
            "title": "UNSW Streams",
            "desc": "A lite version of MS Teams" + " \u279c ",
            "img": null,
            "src": "https://www.reddit.com/r/unsw/comments/uq3eef/is_the_trimester_system_still_bad/",
            "label": "(uni)"

        },
        "μsickBot": {
            "title": "μsick Bot",
            "desc": "A multipurpose Discord bot" + " \u279c ",
            "img": musickBotImg,
            "src": "https://github.com/m4ch374/mu_sick_bot",
            "label": "(personal)"

        },
        "SocketForum": {
            "title": "Socket Forum",
            "desc": "A crappy terminal-based Reddit clone" + " \u279c ",
            "img": null,
            "src": "https://github.com/n0t-4m17h/socket-forum",
            "label": "(personal)"

        },
        "DungeonMania": {
            "title": "Dungeon Mania",
            "desc": "A 'Fireboy and Watergirl' type of game" + " \u279c ",
            "img": null,
            "src": "https://www.reddit.com/r/unsw/comments/uq3eef/is_the_trimester_system_still_bad/",
            "label": "(uni)"

        },
    };


    // Same Logic as Navbar's SideMenu, but times by the no. of projects (lmfao this not good)
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    // Musick Bot -->
    const [anchorEl1, setAnchorEl1] = useState(null);
    const handleClick1 = (event) => {
        setAnchorEl1(event.currentTarget);
    };
    const handleClose1 = () => {
        setAnchorEl1(null);
    };
    const open1 = Boolean(anchorEl1);
    const id1 = open1 ? 'simple-popover' : undefined;

    // Socket Forums -->
    const [anchorEl2, setAnchorEl2] = useState(null);
    const handleClick2 = (event) => {
        setAnchorEl2(event.currentTarget);
    };
    const handleClose2 = () => {
        setAnchorEl2(null);
    };
    const open2 = Boolean(anchorEl2);
    const id2 = open2 ? 'simple-popover' : undefined;

    // Dungeon Mania -->
    const [anchorEl3, setAnchorEl3] = useState(null);
    const handleClick3 = (event) => {
        setAnchorEl3(event.currentTarget);
    };
    const handleClose3 = () => {
        setAnchorEl3(null);
    };
    const open3 = Boolean(anchorEl3);
    const id3 = open3 ? 'simple-popover' : undefined;
    


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
            <Box sx={{margin: 'auto', maxWidth: '1000px', marginBottom: '2%',  }} >
                <Grid container justifyContent='center' rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 8 }}>

                    <Grid item >
                        <PageStyles.TransCard>
                            <CardActionArea onClick={handleClick}>
                                <CardMedia
                                    component='img'
                                    height='250'
                                    image={projectsInfoDict['μsickBot']['img']}
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
                            <Popover id={id} open={open} anchorEl={anchorEl} onClose={handleClose} anchorOrigin={{ vertical:'bottom', horizontal:'left',}} transformOrigin={{ vertical: 'top', horizontal: 'left', }} >
                                {/* <Box sx={{ display:'flex', justifyContent: 'space-between', alignContent:'space-evenly'}} >        */}
                                    <PageStyles.CardPopup>
                                        {projectsInfoDict['UNSWStreams']['desc']}
                                    </PageStyles.CardPopup>
                                    <ButtonBase disableRipple href={projectsInfoDict['UNSWStreams']['src']} target="_blank" >
                                        <GitHub style={{fontSize: '30px'}} />
                                    </ButtonBase>
                                {/* </Box> */}
                            </Popover>
                        </PageStyles.TransCard>
                    </Grid>

                    <Grid item >
                        <PageStyles.TransCard>
                            <CardActionArea onClick={handleClick1}>
                                <CardMedia
                                    component='img'
                                    height='250'
                                    image={projectsInfoDict['μsickBot']['img']}
                                    alt='musickBotCard'
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
                            <Popover id={id1} open={open1} anchorEl={anchorEl1} onClose={handleClose1} anchorOrigin={{ vertical:'bottom', horizontal:'left',}} transformOrigin={{ vertical: 'top', horizontal: 'left', }} >
                                <PageStyles.CardPopup>
                                    {projectsInfoDict['μsickBot']['desc']}
                                </PageStyles.CardPopup>
                                <ButtonBase disableRipple href={projectsInfoDict['μsickBot']['src']} target="_blank" >
                                    <GitHub style={{fontSize: '30px'}} />
                                </ButtonBase>
                            </Popover>
                        </PageStyles.TransCard>
                    </Grid>

                    <Grid item >
                        <PageStyles.TransCard>
                            <CardActionArea onClick={handleClick2}>
                                <CardMedia
                                    component='img'
                                    height='250'
                                    image={projectsInfoDict['μsickBot']['img']}
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
                            <Popover id={id2} open={open2} anchorEl={anchorEl2} onClose={handleClose2} anchorOrigin={{ vertical:'bottom', horizontal:'left',}} transformOrigin={{ vertical: 'top', horizontal: 'left', }} >
                                <PageStyles.CardPopup>
                                    {projectsInfoDict['SocketForum']['desc']}
                                </PageStyles.CardPopup>
                                <ButtonBase disableRipple href={projectsInfoDict['SocketForum']['src']} target="_blank" >
                                    <GitHub style={{fontSize: '30px'}} />
                                </ButtonBase>
                            </Popover>
                        </PageStyles.TransCard>
                    </Grid>

                    <Grid item >
                        <PageStyles.TransCard>
                            <CardActionArea onClick={handleClick3}>
                                <CardMedia
                                    component='img'
                                    height='250'
                                    image={projectsInfoDict['μsickBot']['img']}
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
                            <Popover id={id3} open={open3} anchorEl={anchorEl3} onClose={handleClose3} anchorOrigin={{ vertical:'bottom', horizontal:'left',}} transformOrigin={{ vertical: 'top', horizontal: 'left', }} >
                                <PageStyles.CardPopup>
                                    {projectsInfoDict['DungeonMania']['desc']}
                                </PageStyles.CardPopup>
                                <ButtonBase disableRipple href={projectsInfoDict['DungeonMania']['src']} target="_blank" >
                                    <GitHub style={{fontSize: '30px'}} />
                                </ButtonBase>
                            </Popover>
                        </PageStyles.TransCard>
                    </Grid>

                </Grid>
            </Box>
        </div>
    )
}

export default Projects;