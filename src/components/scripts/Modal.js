import HelpOutlineRoundedIcon from '@material-ui/icons/HelpOutlineRounded';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import '../styles/modal.css'

function Modal({ setOpenModal }) {
    return (
      <div className="vent-modal">
        <div className="one">
          <div>
        <button
           id="cancel"
            onClick={() => {
              setOpenModal(false);
            }}
          ><CancelRoundedIcon/></button>
          </div>
            <div>
            <img className="modal-img" src='./images/Vent-Headphones.svg' alt='am'></img>
            <p>Listener<span><HelpOutlineRoundedIcon color="action"/></span></p>
            </div>
            <div><hr className="line"/></div>
            <div>
            <img className="modal-img" src='./images/Vent-Mic.svg' alt='am'></img>
            <p>Speaker<span><HelpOutlineRoundedIcon color="action"/></span></p>
            </div>
        </div>
        <div >
         <button id="modalb">Get Started</button>   
         </div>
      </div>
      
    );
  }
  
  export default Modal;
