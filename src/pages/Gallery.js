import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// ########## USE THIS 'Complex Button' TO MAKE THE PROJECT CARDS expansive & CLICKABLE (to your github link) 
//                                     --> @ bottom of: https://mui.com/material-ui/react-button/ 
// import ButtonBase from '@mui/material/ButtonBase';
// import Grid --> ##### all imgs are grids of diff sizes !!
import { Grid, Divider, ButtonBase, Card, CardContent, CardMedia, CardActionArea, Popover } from '@mui/material';
import { Box } from '@mui/system'

import PageStyles from '../styles/PageStyle';

const Gallery = () => {

    const pageSummary = "\"Pictures of you, pictures of me,\nhung upon your wall, for the world to see\"";


    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;



    return (
        <div>
            <PageStyles.Title> Gallery </PageStyles.Title>

            <Box sx={{margin: 'auto', maxWidth: '500px', marginBottom: '2%',}}>
                <PageStyles.StdParagraph>
                    {pageSummary}
                </PageStyles.StdParagraph>
            </Box>

            <Box sx={{margin: 'auto', maxWidth: '500px', marginBottom: '2.5%'}}>
                <Divider variant='middle' sx={{ bgcolor: "secondary.light", display: 'flex', alignContent:'center', }} />
            </Box>

            <Box sx={{margin: 'auto', maxWidth: '1000px', marginBottom: '2%', }} >
                <Grid container justifyContent='center' rowSpacing={8} columnSpacing={{ xs: 1, sm: 1, md: 8 }}>
                    
                    <Grid item >

                    </Grid>

                </Grid>
            </Box>
        </div>
    )
}

export default Gallery;