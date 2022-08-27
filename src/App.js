import React from 'react';
// import { useState, useEffect } from 'react';
import './App.css';
// import {makeStyles} from '@mui/material/styles';
// import Button from '@mui/material/Button';
// import PropTypes from "prop-types"

import ButtonStuff from './components/ButtonStuff';

function App() {
	// useEffect(() => {alert("big man ting yeah")}, [counter]) // everytime the counter is altered, the first arg is ran
	
	function lineBreak() {
		return (<div> <h4>{'\n'}</h4> </div>)
	}

	return (
		<div className="App">
			<h1>What's 9 + 10?</h1>

			<ButtonStuff.CounterPlusMinus/>
			{lineBreak()}
			<ButtonStuff.ChangeColor/>

			{lineBreak()}
			{/* <lineBreak id={4}/> */}

			<div className='Search'>
				<input placeholder='Stock name' value='patti'
					onChange={() => {}} />
				<img src={null} alt='Search'
					onClick={() => {}}/>
			</div>
			
		</div>
	);
}

export default App;