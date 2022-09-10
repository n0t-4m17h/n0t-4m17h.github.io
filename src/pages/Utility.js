import React from 'react';

import RandomStuff from '../components/RandomStuff';
import RandomStyles from '../styles/RandomStyles';


/* ###########  The Page that contains the randomest shit ############ */

const Utility = () => {
    // useEffect(() => {alert("big man ting yeah")}, [counter]) // everytime the counter state is altered, the first arg is ran
	
	const LineBreak = () => {return <div> <h4>{'\n'}</h4> </div>};
	const PrintName = (props) => {return <h3>Hello there "{props.title}", it's {new Date().toLocaleTimeString()}</h3>};
	// const userName = prompt("What is your name?", "Name");
	const userName = "General Kenobi";

    return (
        <div className="Utility">
            <h1 style={{ border: '5px solid pink', display: 'flex', justifyContent: 'center' }}> 
                Utility Page 
            </h1>
			<PrintName title={userName}/>

			<RandomStuff.CounterPlusMinus/>

			<RandomStyles.CenterDiv> My Div </RandomStyles.CenterDiv>
			<LineBreak />
			
			<RandomStuff.ChangeColor/>
			<LineBreak />

			<LineBreak />
			<RandomStuff.SearchBar/>
		</div>       
    );
}

export default Utility;