import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import './App.css'; // NOTE: this includes the side scroll bar !!!!

// Page imports
import Home from './pages/Home';
import Projects from './pages/Projects';
import Utility from './pages/Utility';
import Gallery from './pages/Gallery';

// Components imports
import Navbar from './components/Navbar';

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
				<Routes> 
					<Route exact path='/' element={<Home />} />
					<Route exact path='/projects' element={<Projects />} />
					<Route exact path='/utility' element={<Utility />} />
					<Route exact path='/gallery' element={<Gallery />} />
				</Routes>
			</Router>

		</div>
	);
}

export default App;