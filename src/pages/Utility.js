import React from 'react';
import { Helmet } from 'react-helmet';

import { motion } from 'framer-motion';

import { Divider } from '@mui/material';
import { Box } from '@mui/system'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage, useGLTF } from '@react-three/drei';

import PageStyles from '../styles/PageStyle';
import RandomStuff from '../components/RandomStuff';
import RandomStyles from '../styles/RandomStyles';
// import Thefuture from '../components/Thefuture'

function Model(props) {
	const { scene } = useGLTF("/doom_slayer.glb");
	return <primitive object={scene} {...props} />
}

/* ###########  The Page that contains the most randomest shit ############ */
const Utility = () => {
	const pageSummary = "PLAN:\nTo feature a bunch of useful tools. Also is a coding playground ";

    // useEffect(() => {alert("big man ting yeah")}, [counter]) // everytime the counter state is altered, the first arg is ran
	const LineBreak = () => {return <div> <h4>{'\n'}</h4> </div>};
	const PrintName = (props) => {return <h3>Hello there, "{props.title}", it's {new Date().toLocaleTimeString()}</h3>};
	// const userName = prompt("What is your name?", "Name");
	const userName = "Doomslayer";

	
    return (
        <motion.div className="Utility"
			initial={{ translateY: -5000, translateX: 0 }}
			animate={{ translateY: 0, translateX: 0 }}
			exit={{ translateY: -5000, translateX: 0 }}
			transition={{ duration: 0.25, delay: 0.25 }}
			style={{ marginBottom: '70px' }}
		>
			<Helmet>
                <title>ajk ~ utility</title>
                <meta name="description" content="amith's utilities" />
            </Helmet>

            <PageStyles.Title> Utilities </PageStyles.Title>
			{/* <br /> */}
			<Box sx={{margin: 'auto', maxWidth: '500px', marginBottom: '40px',}}>
                <PageStyles.StdParagraph>
                    {pageSummary}
                </PageStyles.StdParagraph>
            </Box>

            <Box sx={{margin: 'auto', maxWidth: '500px', marginBottom: '20px'}}>
                <Divider variant='middle' sx={{ bgcolor: "secondary.light", display: 'flex', alignContent:'center', }} />
            </Box>


            {/* CC0 + CC BY + CC BY-SA */}
			<PageStyles.ThreeDContainer>
				{/* border: '3px solid pink' */}
				<Canvas camera={{ fov: 5 }} style={{height: '50vh', width:'100vw'}} >
					<ambientLight intensity={1.25} />
					{/* Play around with the angles -> https://sbcode.net/react-three-fiber/orbit-controls/ */}
					<OrbitControls autoRotate 
						minPolarAngle={Math.PI / 6}
						maxPolarAngle={Math.PI - Math.PI / 2.70}
					/>
					<Stage environment={null} >
						<Model />
					</Stage>
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
		</motion.div>       
    );
}

export default Utility;