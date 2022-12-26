import React, { useState, useEffect } from 'react';

import { Grid, Divider } from '@mui/material';
import { Box } from '@mui/system'

import PageStyles from '../styles/PageStyle';
import '../styles/TypeWriter.css'

const Home = () => {
    // document.body.style.backgroundColor="#257DE8";

    const hello = "Hello world!";
    var i = 0;
    var speed = 100;
    const typeWriter = () => {
        document.querySelector("#typeWriter").innerHTML = hello.substring(0, i) + "<span>\u25ae</span>";
        if (i++ != hello.length) {
            setTimeout(typeWriter, speed);
        }
    }
    window.addEventListener("load", typeWriter);


    const summary = `
        A third year CSE student at UNSW, aiming to be the next Sundar Pichai ;)\n
        80% of the time, I'm busy engaging in cse-related stuff, such as personal projects, and expanding my knowledge across multiple areas of study in CS, including AI (ML) and cyber security (shoutout Computerphile), whilst also keeping upto date with the latest news on frontend dev.\n
        19% of the time is spent religiously pumping some iron.\n
        The other 1% is spent doing literally anything and everything. 
    `;


    return (
        <div>
            {/* <PageStyles.Title> Home Page </PageStyles.Title> */}
            <h1> {'\n'} </h1>

            <Box sx={{ 
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    minHeight:'50vh',
                    border: '3px solid pink',
                    marginBottom: '2.5%'
                    }} 
            >
                **INSERT ANIMATION**
            </Box>

            {/* UTILISE DIVIDERS */}

            <Box sx={{ width: '100%'}} >
                {/* NOTE: the "md: <x>" in columnSpacing determines width of the box/grid, see it via border*/}
                <Grid container justifyContent='center' rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 10 }} >
                    {/* NOTE: this "xs={{<x>}}" determines the width of each item !!! */}
                    <Grid item xs={7}>
                        <PageStyles.StdParagraph sx={{fontSize: '25px', fontWeight: 'bold',}} >
                            <p id="typeWriter" > </p>
                        </PageStyles.StdParagraph>
                    </Grid>

                    <Grid item xs={6} >
                        <Divider variant='middle' sx={{ bgcolor: "secondary.light" }} />
                    </Grid>

                    <Grid item xs={9}>
                        <PageStyles.StdParagraph>
                        {summary}
                        </PageStyles.StdParagraph>
                    </Grid>

                    <Grid item xs={6} >
                        <Divider variant='middle' sx={{ bgcolor: "secondary.light" }} />
                    </Grid>

                    <Grid item xs={7}>
                        <Box sx={{minHeight: '4vh'}}>
                            <PageStyles.StdParagraph>
                                **insert LI & GH**
                            </PageStyles.StdParagraph>
                        </Box>
                    </Grid>

                </Grid>
            </Box>


        </div>
    )
}

export default Home;