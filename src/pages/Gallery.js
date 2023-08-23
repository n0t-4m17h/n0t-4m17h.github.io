import React from 'react';
import { Helmet } from 'react-helmet';

import { motion } from 'framer-motion';

import { Divider, ImageList, ImageListItem } from '@mui/material';
import { Box } from '@mui/system'

import PageStyles from '../styles/PageStyle';


const Gallery = () => {
    const pageSummary = "\"Pictures of you, pictures of me,\nhung upon your wall, for the world to see\"";

    const imgsInfoLIST = [
        {
            "title": "huntervalley",
            "img": require('../assets/images/gallery/huntervalley.png'),
            "cols": 4,
            "rows": 4,
            "style": null
        },
        {
            'title': 'iss',
            "img": require('../assets/images/gallery/iss.jpg'),
            "cols": 2,
            "rows": 2,
            "style": { objectPosition: '100% 40%', objectFit: 'cover' }
        },
        {
            'title': 'nyc',
            "img": require('../assets/images/gallery/nyc.jpg'),
            "cols": 2,
            "rows": 4,
            "style": { objectPosition: '15% 100%', objectFit: 'cover' }
        },
        {
            'title': 'disneyworld',
            "img": require('../assets/images/gallery/disneyworld.png'),
            "cols": 2,
            "rows": 4,
            "style": null
        },
        {
            'title': 'lightshow',
            "img": require('../assets/images/gallery/lightshow.png'),
            "cols": 2,
            "rows": 2,
            "style": null
        },
        {
            'title': 'vivid1',
            "img": require('../assets/images/gallery/vivid1.png'),
            "cols": 4,
            "rows": 2,
            "style": { objectPosition: '100% 15%' }
        },
        {
            'title': 'vivid2',
            "img": require('../assets/images/gallery/disneyworld2.png'),
            "cols": 1,
            "rows": 2,
            "style": { objectPosition: '100% 100%', objectFit: 'fill' }
        },
        {
            'title': 'macHeights',
            "img": require('../assets/images/gallery/macHeights2.png'),
            "cols": 2,
            "rows": 2,
            "style": null
        },
        {
            'title': 'wollongong',
            "img": require('../assets/images/gallery/wollongong.jpg'),
            "cols": 1,
            "rows": 2,
            "style": null
        },
    ]


    return (
        <motion.div className="Gallery"
            initial={{ translateY: -5000, translateX: 0 }}
            animate={{ translateY: 0, translateX: 0 }}
            exit={{ translateY: -5000, translateX: 0 }}
            transition={{ duration: 0.25, delay: 0.5 }}
        >
            <Helmet>
                <title>ajk ~ gallery</title>
                <meta name="description" content="amith's gallery" />
            </Helmet>

            <PageStyles.Title> Gallery </PageStyles.Title>

            <Box sx={{margin: 'auto', maxWidth: '500px', marginBottom: '35px',}}>
                <PageStyles.StdParagraph>
                    {pageSummary}
                </PageStyles.StdParagraph>
            </Box>

            <Box sx={{margin: 'auto', maxWidth: '500px', marginBottom: '20px'}}>
                <Divider variant='middle' sx={{ bgcolor: "secondary.light", display: 'flex', alignContent:'center', }} />
            </Box>
        
            <Box sx={{margin: 'auto', height: '75vh', width: '95vw', display: 'flex', justifyContent: 'center' }} >
                <ImageList
                    sx={{ width: 800, height: '65vh', borderRadius: '10px' }}
                    variant="quilted"
                    cols={4}
                    rowHeight={121}
                > 
                    {imgsInfoLIST.map((imgs) => {
                        return imgs.style === null ? 
                            (
                                <ImageListItem key={imgs.img} cols={imgs.cols} rows={imgs.rows} >
                                    <img src={imgs.img} 
                                        alt={imgs.title} 
                                        loading='lazy' 
                                    />
                                </ImageListItem>
                            )
                        : 
                            (
                                <ImageListItem key={imgs.img} cols={imgs.cols} rows={imgs.rows} >
                                    <img src={imgs.img} 
                                        alt={imgs.title} 
                                        loading='lazy' 
                                        style={imgs.style}
                                    />
                                </ImageListItem>
                            )
                    })}

                </ImageList>
            </Box>
        </motion.div>
    )
}

export default Gallery;