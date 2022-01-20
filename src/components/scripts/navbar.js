import React, {useEffect} from 'react';
import { useState } from "react";
import Login from './Login.js';
import Signup from './Signup.js';
import Modal from '@material-ui/core/Modal';


import '../styles/navbar.css'
import {Link} from "react-router-dom";
function Navbar(props){
	const [openl, setOpenl] = useState(false);
	const [opens, setOpens] = useState(false);
	
    const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleLogin = () =>{
	   setOpenl(true);
	   handleOpen();
   }
   const handleSign = () => {
	   setOpens(true);
       handleOpen();
   }
    const handleClosel = () => setOpenl(false);
	const handleCloses = () => setOpens(false);

	function toggleMenuBar(){
		let icon = document.getElementById('hamburger');
		let navbar = document.getElementById('second-navbar');

		let state = icon.getAttribute('data-state');
		if (state === 'closed'){
			navbar.style.transform = `translateX(0%)`;
			icon.setAttribute('data-state', 'open');
		} else{
			navbar.style.transform = `translateX(100%)`;
			icon.setAttribute('data-state', 'closed');
		}
	}

	function monitorScrollbar(){
		let position = window.pageYOffset;
		let navbar = document.getElementById('navbar');
		
		// Logic to check the scrollbar position, if it is greater than or equal to 110 then I have to add background to navbar.
		if (position >= 110){
			navbar.style.background = 'rgb(245,245,245)';
		} else {
			navbar.style.background = 'transparent';
		}
	}

	// Added onscroll subscription to monitor scrollbar positions
	useEffect(() => {
		window.addEventListener('scroll', monitorScrollbar);
	})

	return(
		<React.Fragment>
			<div id='navbar'>
				<div id='logo'>
					<Link to="/">
				<img src='/images/logo.png' alt="logo"></img></Link>
				</div>
				<div id='nav-links'>
					<ul id='unorderdlist'>
						<li className='nav-link'>
							<Link to="/vent">Vent</Link>
						</li>
						<li className='nav-link'>
						<Link to="/talk">Talk</Link>
						</li>
						<li className='nav-link'>
						<Link to="/talk">Write</Link>
						</li>
						<li className='nav-link'>
						<Link to="/talk">Process</Link>
						</li>
						<li className='nav-link'>
						<Link to="/talk">User Safety</Link>
						</li>
					</ul>
				</div>
				<div id='account'>
				<button onClick={handleLogin}> Log In </button>
				
				<Modal
        open={openl}
        onClose={handleClosel}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
		  <Login/></Modal>
	
	
				
				<button onClick={handleSign} > Register </button>
				<Modal
        open={opens}
        onClose={handleCloses}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
		  <Signup/></Modal>
					<i class="fas fa-bars" id='hamburger' onClick={toggleMenuBar} data-state='closed'></i>
				</div>

			</div>	
			<div id='second-navbar'>
				<div id='sn-header'>
					<div id='close-icon-container'>
						<i class="fas fa-times" id='close-icon' onClick={toggleMenuBar}></i>
					</div>
					<div id='company-logo'>
					<Link to="/">
						<img src='./images/logo.png' alt="logo"></img></Link>
					</div>
				</div>
				<div id='sn-menubar'>
					<ul id='sn-unorderdlist'>
						<li className='sn-nav-link'>
						<Link to="/vent">Vent</Link>
						</li>
						<li className='sn-nav-link'>
						<Link to="/talk">Talk</Link>
						</li>
						<li className='sn-nav-link'>
						<Link to="/talk">Write</Link>
						</li>
						<li className='sn-nav-link'>
						<Link to="/talk">Process</Link>
						</li>
						<li className='sn-nav-link'>
						<Link to="/talk">User Safety</Link>
						</li>
						<li className='sn-nav-link'>
						<button onClick={handleLogin}> Log In </button>
				
				<Modal
        open={openl}
        onClose={handleClosel}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
		  <Login/></Modal>
	
	</li>
	<li className='sn-nav-link'>
				<button onClick={handleSign} > Register </button>
				<Modal
        open={opens}
        onClose={handleCloses}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
		  <Signup/></Modal>
				
						</li>
					</ul>
				</div>
			</div>
		</React.Fragment>
	)
}

export default Navbar