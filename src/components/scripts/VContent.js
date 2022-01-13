import React from 'react';
import '../styles/vent1.css'
import '../styles/boxrowv.css'
function VContent() {
    return (
        
        <div id="vent-content">
            <div id="back">
                <img src="./images/Vector.png" alt='am'></img>
            </div>
            <div id="front">
                <div id="inner">
            <div id="content">
                <div>
                    <h1 id="header">Vent</h1>
                </div>
                <div>
                    <p className="vc">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia. </p>
                </div>
                <div>
                    <button id="ventb"><span id="but">Get Started</span></button>
                </div>

            </div>
            <div>
              
              <div id="imag">
              <img src="./images/ventmain.svg" alt='am'></img>
              </div>
            </div>
            </div>
            <div id="box-row">
            <div className="small1">
                  <h1><span className="title">What?</span></h1>
                  <p className="divs">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
            </div>
            <div className="large"> 
            <h1><span className="titlel">How?</span></h1>
                  <p className="divl">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
             </div>
            <div className="small2"> 
            <h1><span className="title">Why?</span></h1>
                  <p className="divs">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
             </div>
        </div>
            
            </div>
        </div>
       
      
    )
}

export default VContent
