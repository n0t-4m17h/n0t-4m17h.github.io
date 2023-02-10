import React from 'react';

import { Box, BottomNavigation, createTheme, ThemeProvider, Typography } from '@mui/material';

import { motion } from 'framer-motion';

import quoteBank from '../assets/quotes.json';
import FootStyles from '../styles/FootStyle';




const Footer = () => {
    // Randomised quote index selection (length exclusive, thus accounting for 0th index)
    //                                  for e.g., if array len is 4, quoteIndex is in [0,1,2,3]
    const quoteIndex = Math.floor(Math.random() * quoteBank.length);
    
    // Responsive font for quotes, based on viewport's width (look below for more)
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