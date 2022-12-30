import React from 'react';
import { Divider } from '@mui/material';
import { Box } from '@mui/system'

import PageStyles from '../styles/PageStyle';
import RandomStuff from '../components/RandomStuff';
import RandomStyles from '../styles/RandomStyles';


/* ###########  The Page that contains the most randomest shit ############ */

const Utility = () => {
	const pageSummary = "**ignore this page for now**\nPLAN: add a bunch of useful tools, for e.g. a stock tracker. Also is a playground for jsx, mui etc";

    // useEffect(() => {alert("big man ting yeah")}, [counter]) // everytime the counter state is altered, the first arg is ran
	
	const LineBreak = () => {return <div> <h4>{'\n'}</h4> </div>};
	const PrintName = (props) => {return <h3>Hello there "{props.title}", it's {new Date().toLocaleTimeString()}</h3>};
	// const userName = prompt("What is your name?", "Name");
	const userName = "General Kenobi";

    return (
        <div className="Utility">
            <PageStyles.Title> Utilities </PageStyles.Title>

			<Box sx={{margin: 'auto', maxWidth: '500px', marginBottom: '2%',}}>
                <PageStyles.StdParagraph>
                    {pageSummary}
                </PageStyles.StdParagraph>
            </Box>

            <Box sx={{margin: 'auto', maxWidth: '500px', marginBottom: '2.5%'}}>
                <Divider variant='middle' sx={{ bgcolor: "secondary.light", display: 'flex', alignContent:'center', }} />
            </Box>


			<div style={{marginLeft: '1%', flex: 2}}>
				<PrintName title={userName}/>

				<RandomStuff.CounterPlusMinus/>

				<RandomStyles.CenterDiv> My Div </RandomStyles.CenterDiv>
				<LineBreak />
				
				<RandomStuff.ChangeColor/>
				<LineBreak />

				<LineBreak />
				<RandomStuff.SearchBar/>
			</div>
		</div>       
    );
}

export default Utility;