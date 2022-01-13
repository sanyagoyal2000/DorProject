import React from 'react';
import '../styles/vtw.css'


function VTW(props){
	return(
		<React.Fragment>
			<section id='VTW'>
				<div id='vent' className='vtw-section'>
					<img className='background-image' src='./images/amoeba1.png' alt="#"></img>
					<img className='character' src='./images/vent.png' alt="#"></img>
					<div className='vtw-content'>
						<h2>Vent</h2>
						<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.  </p>
					</div>
				</div>

				<div id='talk' className='vtw-section'>
					<img className='background-image' src='./images/amoeba2.png' alt="#"></img>
					<img className='character' src='./images/talk.png' alt="#"></img>
					<div className='vtw-content'>
						<h2>Talk</h2>
						<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.  </p>
					</div>
				</div>

				<div id='write' className='vtw-section'>
					<img className='background-image' src='./images/amoeba3.png' alt="#"></img>
					<img className='character' src='./images/write.png' alt="#"></img>
					<div className='vtw-content'>
						<h2>Write</h2>
						<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.  </p>
					</div>
				</div>

			</section>
		</React.Fragment>
	)
}

export default VTW