import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';

// Page imports
import Home from './pages/Home';
import Utility from './pages/Utility';

// Components imports
import Navbar from './components/Navbar';

function App() {

	
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Routes>
					<Route exact path='/' element={<Home/>} />
					<Route exact path='/utility' element={<Utility/>} />
					{/* <Route exact path='/projects' component={Projects} /> */}
				</Routes>
			</Router>

		</div>
	);
}

export default App;