import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import '../styles/lsmodal.css'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 750,
    height:620,
    bgcolor: '#FFF6ED ',
    border: '1.34405px solid #FFDCB3',
    boxShadow: 24,
    p: 4,
    borderRadius: '5%',
    flexGrow: 1,
    justifyContent: 'center'
  };
 
function Signup() {

   
    return (
     
        <div className="modal-content">
      <Box sx={style}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <div className="bdiv">
              <button  className="activeb"><span className="b-text">Sign Up</span></button>
              <button className="inactiveb"><span className="b-text">Login</span></button>

          </div>
        </Grid>
        <Grid item xs={6}>
        <div className="left">
            <h1 className="modal-heading">Sign up</h1>
            <div className="divr1">
            <div><input className="w-m-input" type="text" name="fname" placeholder="First name"></input></div>
            <div><input className="w-m-input" type="text" name="lname" placeholder="Last name"></input></div>
            </div>

            <div className="divc">
              <div className='i1'><input className="w-l-input" type="email" name="email" placeholder="Email Address"></input></div>
            <div className="i2"> <input className="w-l-input" type="password" name="password" placeholder="Create Password"></input></div>
           
            </div>
            <div className="divr2">
                <input className="w-xs-input" type="text" name="date" placeholder="DD"/>
                <input className="w-xs-input" type="text" name="month" placeholder="MM"/>
                <input className="w-xs-input" type="text" name="year" placeholder="YY"/>
                <input className="w-s-input" type="text" name="gender" placeholder="Gender"></input>

            </div>

            <div id="cps"><input type="checkbox"  name="rm" value="rm"/><span id="cpsp">By clicking Register, you agree to the <span classname="btp">Terms</span> and that you have read our <span classname="btp">Privacy Policy</span> and <span classname="btp">User Safety Guidelines</span></span></div>
            <button className="finalbs"><span className="finalbt">Sign up</span></button>
            <p id="sp"><u>Already have an account? Click here to login</u></p>
        </div>
        </Grid>
        <Grid item xs={6}>
        <div className="right">
        <img id="sig" src='./images/Signup.svg' alt='am'></img>

        </div>
        </Grid>
        
      </Grid>
      </Box> 
           </div>

       
    )
}

export default Signup
