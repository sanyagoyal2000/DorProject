import React from 'react';
import '../styles/profile.css'
import {BsGenderFemale} from "react-icons/bs";
import HelpOutlineRoundedIcon from '@material-ui/icons/HelpOutlineRounded';

function ProfContent() 

{
  return(
  
    <div id="profile-content">
    <div id="backp">
    <img src="./images/profilevector.png" alt='amoeba'></img>
    </div>
    <div id="frontp">
   < div id="left">
     <div className="pencil-icon"><svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
</svg></div>
     <div id="deer-div">
     <img src="./images/deer-profile.png" alt='amoeba'></img>
      
     <h1>Jane Doe</h1>
     <div id="ldiv-child">
     <div className="lr"><svg xmlns="http://www.w3.org/2000/svg" className="ilr" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
</svg><p>janedoethedeer
</p></div>
     <div className="lr"><svg xmlns="http://www.w3.org/2000/svg" className="ilr" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg><p>thefemaledeer@doesbeforehoes.com
</p></div>
     <div className="lr"><svg xmlns="http://www.w3.org/2000/svg" className="ilr" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
</svg><p>25th December. 1996
</p></div>
     <div className="lr"><BsGenderFemale className="ilr"/><p>Female</p></div>
     <div className="lr"><svg xmlns="http://www.w3.org/2000/svg" className="ilr" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
</svg><p>...........</p></div>
   <p id="lcp">Change password?</p>
   </div>
   </div>
    <div id="right">
      <div id="upr">
        <div id="up-l">
          <p id="title-p1">I think I am <HelpOutlineRoundedIcon className="qi"/> </p>
          <ul>
            <li><span>Cheerful</span></li>
            <li><span>Creative</span></li>
            <li><span>Kind</span></li>
          </ul>
        </div>
        <div id="up-m"><hr/></div>
        <div id="up-r">
        <p id="title-p2">Interests <HelpOutlineRoundedIcon className="qi"/> </p>
        <div id="up-r1">
        <div class="left-side">
          <div class="one"><img className="r4" src="./images/Dancing.png" alt='amoeba'></img><p>Dance</p></div>
          <div class="three"><img className="r4" src="./images/football.png" alt='amoeba'></img><p>Football</p></div>

       </div>
       <div class="right-side">
           <div class="two"><img className="r4" src="./images/musicp.png" alt='amoeba'></img><p>Music</p></div>
           <div class="four"><img className="r4" src="./images/cook.png" alt='amoeba'></img><p>Cooking</p></div>
       </div></div>
        </div>
      </div>
      <div id="downr">
     <div id="d1"><img src="./images/Ellipse.png" alt='amoeba'></img></div>
     <div id="d2">
       <p id="title-p3">INTJ <HelpOutlineRoundedIcon className="qi"/> </p>
       <p id="t1">The Mastermind</p>
       <p id="t2">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
       <p id="t3">Do you feel your personality does not depict you aptly?
Click <b>here</b> to re-take the personality test</p>    
     </div>
      </div>
    </div>
    </div>
    </div>
</div>
)
}

export default ProfContent
