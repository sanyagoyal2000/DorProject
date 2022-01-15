import React from 'react';
import '../styles/talk.css'
import '../styles/boxrowt.css'
function TContent() {
    return (
        
        <div id="talk-content">
            <div id="back">
                <img src="./images/Vector.png" alt='am'></img>
            </div>
            <div id="front">
                <div id="inner">
            <div id="content">
                <div>
                    <h1 id="header">Talk</h1>
                </div>
                <div>
                    <p className="vc">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia. </p>
                </div>
                <div id="row-buttalk">
                    <div><button className="talkbutton"><span id="butb">Get Started</span></button>
                    
                </div>
                <div>
                    <button className="talkbutton"><span id="butb">Personality Test</span></button>
                    
                </div></div>

            </div>
            <div>
              
              <div id="imagt">
              <img src="./images/talk1.png" alt='am'></img>
              </div>
            </div>
            </div>
            <div id="box-row">
            <div className="smallt1">
                  <h1><span className="title">What?</span></h1>
                  <p className="divs">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
            </div>
            <div className="larget"> 
            <h1><span className="titlel">How?</span></h1>
                  <p className="divl">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
             </div>
            <div className="smallt2"> 
            <h1><span className="title">Why?</span></h1>
                  <p className="divs">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
             </div>
        </div>
            
            </div>
        </div>
       
      
    )
}

export default TContent
