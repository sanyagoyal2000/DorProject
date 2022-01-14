import Box from '@material-ui/core/Box';

import Grid from '@material-ui/core/Grid';
import '../styles/modal.css'

import HelpOutlineRoundedIcon from '@material-ui/icons/HelpOutlineRounded';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height:400,
  bgcolor: '#FFFFFF ',
  border: '2px solid #FFAFAF',
  boxShadow: 24,
  p: 4,
  borderRadius: '1%',
  flexGrow: 1
};

export default function Vent2() {
  
  
  return (
    <div>
      
        <Box sx={style}>
        <Grid container spacing={3}>
        <Grid item xs={5}>
        <img className="modal-img"  src='./images/Vent-Headphones.svg' alt='am'></img>
        <p>Listener<span className="ic"><HelpOutlineRoundedIcon color="action"/></span></p>
        </Grid>
        <Grid item xs={2}>
        <hr id="line"/>
        </Grid>
        <Grid item xs={5}>
        <img className="modal-img" src='./images/Vent-Mic.svg' alt='am'></img>
        <p>Speaker<HelpOutlineRoundedIcon className="ic" color="action"/></p>
        </Grid>
        
        <Grid item xs={6}>
        <button id="modalb">Get Started</button> 
        </Grid>
      </Grid>
        </Box>
      
    </div>
  );
}