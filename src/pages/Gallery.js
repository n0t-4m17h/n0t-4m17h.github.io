import React from 'react';
import { Helmet } from 'react-helmet';

import { Divider, ImageList, ImageListItem } from '@mui/material';
import { Box } from '@mui/system'

import PageStyles from '../styles/PageStyle';

import huntervalley from '../assets/images/gallery/huntervalley.png';
import lightshow from '../assets/images/gallery/lightshow.png';
import vivid2 from '../assets/images/gallery/vivid2.png';
import wollongong from '../assets/images/gallery/wollongong.jpg';
import macHeights2 from '../assets/images/gallery/macHeights2.png';
import vivid1 from '../assets/images/gallery/vivid1.png';
// import macHeights1 from '../assets/images/gallery/macHeights1.png';


const Gallery = () => {

    const pageSummary = "\"Pictures of you, pictures of me,\nhung upon your wall, for the world to see\"";

    const imgsInfo = {
        "huntervalley": {
            "img": huntervalley,
            "title": "huntervalley",
        },
        "lightshow": {
            'img': lightshow,
            'title': 'lightshow',
        },
        "wollongong": {
            'img': wollongong,
            'title': 'wollongong',
        },
        "macHeights2": {
            'img': macHeights2,
            'title': 'macHeights2',
        },
        "vivid1": {
            'img': vivid1,
            'title': 'vivid1',
        },
        "vivid2": {
            'img': vivid2,
            'title': 'vivid2',
        }
    }

    return (
        <div className="Gallery">
            <Helmet>
                <title>ajk ~ gallery</title>
                <meta name="description" content="amith's gallery" />
            </Helmet>

            <PageStyles.Title> Gallery </PageStyles.Title>

            <Box sx={{margin: 'auto', maxWidth: '500px', marginBottom: '2%',}}>
                <PageStyles.StdParagraph>
                    {pageSummary}
                </PageStyles.StdParagraph>
            </Box>

            <Box sx={{margin: 'auto', maxWidth: '500px', marginBottom: '1%'}}>
                <Divider variant='middle' sx={{ bgcolor: "secondary.light", display: 'flex', alignContent:'center', }} />
            </Box>
        
            <Box sx={{margin: 'auto', maxWidth: '1000px', display: 'flex', justifyContent: 'center'}} >
                <ImageList
                    sx={{ width: 800, height: 700 }}
                    variant="quilted"
                    cols={4}
                    rowHeight={121}
                >
                    {/* {imgsInfo.map((imgs, index) => (
                        <ImageListItem key={index} >
                            <img src={imgs.img} 
                                alt={imgs.title} 
                                loading='lazy' />
                        </ImageListItem>
                    ))} */}
                    <ImageListItem key={imgsInfo['huntervalley']['img']} cols={4} rows={4} >
                        <img src={imgsInfo['huntervalley']['img']} 
                            alt='huntervalley' 
                            loading='lazy' 
                        />
                    </ImageListItem>
                    <ImageListItem key={imgsInfo['lightshow']['img']} cols={2} rows={2} >
                        <img src={imgsInfo['lightshow']['img']} 
                            alt='lightshow' 
                            loading='lazy' 
                        />
                    </ImageListItem>
                    <ImageListItem key={imgsInfo['vivid2']['img']} cols={2} rows={4} >
                        <img src={imgsInfo['vivid2']['img']} 
                            alt='vivid2' 
                            loading='lazy'
                            style={{ objectPosition: '100% 15%', objectFit: 'fill' }}
                        />
                    </ImageListItem>
                    <ImageListItem key={imgsInfo['wollongong']['img']} cols={2} rows={4} >
                        <img src={imgsInfo['wollongong']['img']} 
                            alt='wollongong' 
                            loading='lazy' 
                        />
                    </ImageListItem>
                    <ImageListItem key={imgsInfo['macHeights2']['img']} cols={2} rows={2} >
                        <img src={imgsInfo['macHeights2']['img']} 
                            alt='macHeights2' 
                            loading='lazy' 
                        />
                    </ImageListItem>
                    <ImageListItem key={imgsInfo['vivid1']['img']} cols={4} rows={2} >
                        <img src={imgsInfo['vivid1']['img']} 
                            alt='vivid1' 
                            loading='lazy' 
                            style={{ objectPosition: '100% 15%' }}
                        />
                    </ImageListItem>


                </ImageList>
            </Box>
        </div>
    )
}

export default Gallery;