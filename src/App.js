import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import './App.css'; // NOTE: this includes the side scroll bar !!!!

// Components imports
import Navbar from './components/Navbar';
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
	document.body.style.backgroundColor="#0a427e";

	return (
		<div className="App">
			<Router>
				<Navbar />
				<Helmet>
					<title>ajk</title>
					<meta name="description" content="amith's personal website" />
					<meta name="keywords" content="amith, amith jacob kovoor, ajk" />
				</Helmet>
				<AnimatedRoutes />
			</Router>
		</div>
	);
}

export default App;