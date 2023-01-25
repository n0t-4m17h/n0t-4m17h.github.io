import React from 'react';

import { Box, BottomNavigation, createTheme, ThemeProvider, Typography } from '@mui/material';

import { motion } from 'framer-motion';

import FootStyles from '../styles/FootStyle';






const Footer = () => {

    const quoteBank = [
        {
            "quote": "\"When you stand before God, you cannot say, 'But I was told by others to do thus,' or that virtue was not convenient at the time. This will not suffice.\"",
            "src": "King Baldwin IV",
        },
        {
            "quote": "\"...a house divided against itself shall not stand.\"",
            "src": "Matthew 12:25",
        },
        {
            "quote": "\" 'You miss 100% of the shots you don't take.' - Wayne Gretzky\"",
            "src": "Michael Scott",
        },
        {
            "quote": "\"Whenever I'm about to do something, I think, 'Would an idiot do that?' And if they would, I do not do that thing.\"",
            "src": "Dwight Schrute",
        },
        {
            "quote": "\"Never forget what you are, the rest of the world will not. Wear it like armor and it can never be used to hurt you.\"",
            "src": "Tyrion Lannister",
        },
        {
            "quote": "\"Time is the capital of your life, so spend it wisely.\"",
            "src": "Tony Robbins",
        },
        {
            "quote": "\"...but are you a different animal and the same beast?\"",
            "src": "Kobe Bryant",
        },
        {
            "quote": "\"I love sleep; it's my favorite.\"",
            "src": "Kanye West",
        },
        {
            "quote": "\"I won't be a rock star. I will be a legend.\"",
            "src": "Freddie Mercury",
        },
        {
            "quote": "\"Note to self: no matter how bad life gets, there's always beer.\"",
            "src": "Norm MacDonald",
        },
        {
            "quote": "\"Tatakae!\"",
            "src": "Eren Yeager",
        },
        {
            "quote": "\"It's foolish to fear what we have yet to see and know.\"",
            "src": "Itachi Uchiha",
        },
    ]
    // Randomised quote index selection (length exclusive, thus accounting for 0th index)
    //                                                      for e.g., if array len is 4, range is [0,1,2,3]
    const quoteIndex = Math.floor(Math.random() * quoteBank.length);
    
    const theme = createTheme({
        typography: {
            xsQuote: {
                fontSize: '10px',
            },
            smQuote: {
                fontSize: '15px',
            }
        },
    });

    return (
        <div>
            <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, }} elevation={20}>
                <BottomNavigation style={{ background: "#153454", }}> 
                    <Box sx={{ 
                            display:'flex', 
                            justifyContent: 'center', 
                            alignItems:'center', 
                            gap: '0.5rem',
                        }} 
                    >
                        <motion.div
                            initial={{ translateY: 0, translateX: -5000 }}
                            animate={{ translateY: 0, translateX: 0 }}
                            exit={{ translateY: 0, translateX: -5000 }}
                            transition={{ duration: 1 }}
                        >
                            {/* xs   ->   sm   ->   md   ->   lg    ->    xl   */}
                            {/* 0px+ -> 600px+ -> 900px+ -> 1200px+ -> 1536px+ */}
                            <ThemeProvider theme={theme}>
                                <Typography sx={{ typography: { xs: 'xsQuote', sm: 'smQuote' } }} >
                                    <FootStyles.FootQuote>
                                        {quoteBank[quoteIndex]['quote']}
                                    </FootStyles.FootQuote>
                                </Typography>
                            </ThemeProvider>
                        </motion.div>

                        <motion.div
                            initial={{ translateY: 0, translateX: 5000 }}
                            animate={{ translateY: 0, translateX: 0 }}
                            exit={{ translateY: 0, translateX: 5000 }}
                            transition={{ duration: 1.5 }}
                        >
                            <ThemeProvider theme={theme}>
                                <Typography sx={{ typography: { xs: 'xsQuote', sm: 'smQuote' } }} >
                                    <FootStyles.FootSrc>
                                        {" ~ " + quoteBank[quoteIndex]['src']}
                                    </FootStyles.FootSrc>
                                </Typography>
                            </ThemeProvider>
                        </motion.div>
                    </Box>
                </BottomNavigation>
            </Box>
        </div>
    );
}

export default Footer;