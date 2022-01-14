import Box from '@material-ui/core/Box';

import Grid from '@material-ui/core/Grid';
import '../styles/modal.css'

import HelpOutlineRoundedIcon from '@material-ui/icons/HelpOutlineRounded';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 550,
  height:400,
  bgcolor: '#FFFFFF ',
  border: '2px solid #FFAFAF',
  boxShadow: 24,
  p: 4,
  borderRadius: '1%',
  flexGrow: 1,
  justifyContent: 'center'
};

export default function Vent2() {
  
  
  return (
    <div className="modal-content">
      
        <Box sx={style}>
        <Grid container spacing={6} >
        <Grid item xs={5} className="upper">
        <div className="figure">
        <img className="modal-img"  src='./images/Vent-Headphones.svg' alt='am'></img>
        </div>
        <p className="mh">Listener<span className="ic"><HelpOutlineRoundedIcon color="action"/></span></p>
        </Grid>
        <Grid item xs='auto'>
            <div id="line">
        <img id="lines" src='./images/line.png' alt='am'></img>
        </div>
        </Grid>
        <Grid item xs={5} className="upper">
        <div className="figure">
        <img className="modal-img" src='./images/Vent-Mic.svg' alt='am'></img>
        </div>
        <p className="mh">Speaker<HelpOutlineRoundedIcon className="ic" color="action"/></p>
        </Grid>
        </Grid>
        <Grid container spacing={6}>
        <Grid item xs="auto" className="lower">
        <button id="modalb"><span id="bm">Get Started</span></button> 
        </Grid>
      </Grid>
        </Box>
      
    </div>
  );
}