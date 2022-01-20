import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import '../styles/lsmodal.css'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 750,
    height:550,
    bgcolor: '#FFF6ED ',
    border: '1.34405px solid #FFDCB3',
    boxShadow: 24,
    p: 4,
    borderRadius: '5%',
    flexGrow: 1,
    justifyContent: 'center'
  };
 
function Login() {

   
    return (
     
        <div className="modal-content">
      <Box sx={style}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
        <div className="bdiv">
              <button className="inactiveb"><span className="b-text">Sign Up</span></button>
              <button className="activeb"><span className="b-text">Login</span></button>

          </div>
        </Grid>
        <Grid item xs={6}>
        <div className="left">
            <h1 className="modal-heading">Log in</h1>
            <div className="divc">
              <div className='i1'><input className="w-l-input" type="email" name="email" placeholder="Email Address"></input></div>
            <div className="i2"> <input className="w-l-input" type="password" name="password" placeholder="Create Password"></input></div>
           
            </div>
            <p className="p1">Forgot password?</p>
            <div id="cp"> <input type="checkbox"  name="rm" value="rm"/>
<span id="rm">Remember me</span></div>
            <button className="finalb"><span className="finalbt">Login</span></button>
            <p id="ll"><u>Not a member yet.Click here to Register</u></p>
        </div>
        </Grid>
        <Grid item xs={6}>
        <div className="right">
        <img id="log" src='./images/Login1.png' alt='am'></img>

        </div>
        </Grid>
        
      </Grid>
      </Box> 
           </div>

       
    )
}

export default Login
