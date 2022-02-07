import React from 'react';
import '../styles/banner.css'

function Banner(props){
	return(
		<React.Fragment>
			<div id='banner'>
				<div id='amoeba'>
					<img src='./images/amoeba.png' alt='am'></img>
				</div>
				<div id='crowd'>
					<img src='./images/crowd.svg' alt='am'></img>
				</div>
				<h1>TheDorProject.</h1>
				<h1><span id='headline'>TheDor</span><br/>Project.</h1>
			</div>
		</React.Fragment>
	)
}

export default Banner;