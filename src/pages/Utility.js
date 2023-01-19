import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';

import { Divider } from '@mui/material';
import { Box } from '@mui/system'

import PageStyles from '../styles/PageStyle';
import RandomStuff from '../components/RandomStuff';
import RandomStyles from '../styles/RandomStyles';
// import Space from '../components/Space'
import Thefuture from '../components/Thefuture'

// import * as THREE from 'three';
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

/* ###########  The Page that contains the most randomest shit ############ */

const Utility = () => {
	const pageSummary = "PLAN:\nTo feature a bunch of useful tools. Also is a coding playground ";

    // useEffect(() => {alert("big man ting yeah")}, [counter]) // everytime the counter state is altered, the first arg is ran
	const LineBreak = () => {return <div> <h4>{'\n'}</h4> </div>};
	const PrintName = (props) => {return <h3>Hello there, "{props.title}", it's {new Date().toLocaleTimeString()}</h3>};
	// const userName = prompt("What is your name?", "Name");
	const userName = "Skywalker";


    return (
        <div className="Utility">
			<Helmet>
                <title>ajk ~ utility</title>
                <meta name="description" content="amith's utilities" />
            </Helmet>

            <PageStyles.Title> Utilities </PageStyles.Title>

			<Box sx={{margin: 'auto', maxWidth: '500px', marginBottom: '2%',}}>
                <PageStyles.StdParagraph>
                    {pageSummary}
                </PageStyles.StdParagraph>
            </Box>

            <Box sx={{margin: 'auto', maxWidth: '500px', }}>
                <Divider variant='middle' sx={{ bgcolor: "secondary.light", display: 'flex', alignContent:'center', }} />
            </Box>


            {/* CC0 + CC BY + CC BY-SA */}
			<PageStyles.ThreeDContainer>
				<Canvas camera={{fov: 30}} >
					<ambientLight intensity={1.25} />
					<spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
					<OrbitControls autoRotate />
					<Suspense fallback={null}>
						<boxGeometry />
							<Stage>
								<Thefuture />
							</Stage>
					</Suspense>
				</Canvas>
			</PageStyles.ThreeDContainer>
			


			<Box sx={{margin: 'auto', maxWidth: '500px', marginBottom: '2.5%'}}>
                <Divider variant='middle' sx={{ bgcolor: "secondary.light", display: 'flex', alignContent:'center', }} />
            </Box>


			<div style={{marginLeft: '1%', marginBottom:'3%', flex: 2}}>
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