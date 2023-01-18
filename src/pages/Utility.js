import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';

import { Divider } from '@mui/material';
import { Box } from '@mui/system'

import PageStyles from '../styles/PageStyle';
import RandomStuff from '../components/RandomStuff';
import RandomStyles from '../styles/RandomStyles';
import Space from '../components/Space'

// import * as THREE from 'three';
import { Canvas } from '@react-three/fiber'
import { BakeShadows, OrbitControls, Stage } from '@react-three/drei';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

/* ###########  The Page that contains the most randomest shit ############ */

const Utility = () => {
	const pageSummary = "PLAN:\nadd a bunch of useful tools, for e.g. a stock tracker. Also is a playground for jsx, mui etc";

    // useEffect(() => {alert("big man ting yeah")}, [counter]) // everytime the counter state is altered, the first arg is ran
	const LineBreak = () => {return <div> <h4>{'\n'}</h4> </div>};
	const PrintName = (props) => {return <h3>Hello there, "{props.title}", it's {new Date().toLocaleTimeString()}</h3>};
	// const userName = prompt("What is your name?", "Name");
	const userName = "Skywalker";


	// const renderer = new THREE.WebGL1Renderer();
	// renderer.setSize(window.innerWidth, window.innerHeight);
	// document.body.appendChild(renderer.domElement);

	// const scene = new THREE.Scene();
	// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
	// const orbit = new OrbitControls(camera, renderer.domElement);

	// const loader = new GLTFLoader();

	// loader.load('space/space.gltf', function ( gltf ) {
	// 	scene.add( gltf.scene );
	// }, undefined, function ( error ) {
	// 	console.error( "ERROR: " + error );
	// });

	// camera.position.set(0,0,10);
	// camera.lookAt(0,0,0);
	// orbit.update();

	// function animate(){
	// 	requestAnimationFrame(animate);
	// 	renderer.render(scene, camera);

	// 	renderer.dispose()
	// 	renderer.forceContextLoss()
	// }

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
            
			<PageStyles.ThreeDContainer>
				{console.log("1")}
				<Canvas>
					{/* <Suspense> */}
						<Stage>
							<Space />
						</Stage>
						{/* <BakeShadows /> */}
					{/* </Suspense> */}
					<OrbitControls autoRotate />
				</Canvas>
				{/* <Space /> */}
				{console.log("2")}
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