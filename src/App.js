import React from 'react';
import './App.css';
// import {makeStyles} from '@mui/material/styles';

import RandomStuff from './components/RandomStuff';

function App() {
	// useEffect(() => {alert("big man ting yeah")}, [counter]) // everytime the counter state is altered, the first arg is ran
	
	const LineBreak = () => {return <div> <h4>{'\n'}</h4> </div>};
	const PrintName = (props) => {return <h3>Hello there, {props.title}, it's {new Date().toLocaleTimeString()}</h3>};
	const userName = "General Kenobi";
	
	return (
		<div className="App">
			<h1>What's 9 + 10?</h1>
			<PrintName title={userName} />

			<RandomStuff.CounterPlusMinus/>

			<LineBreak />
			<RandomStuff.ChangeColor/>

			<LineBreak />
			<RandomStuff.SearchBar/>
			
		</div>
	);
}

export default App;