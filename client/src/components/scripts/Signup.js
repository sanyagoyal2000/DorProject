import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import {Link,useNavigate} from "react-router-dom";
import {useState} from "react";
import '../styles/lsmodal.css'
import axios from "axios";

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
  const [check,setCheck]=useState(false);
  const [data, setData] = useState({
		fname: "",
		lname: "",
		email: "",
		password: "",
    date:"",
    month:"",
    year:"",
    gender: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/users";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};
   
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
            <form onSubmit={()=>{
              if(check===true){
              handleSubmit();}
              else{
                alert("Please agree to the terms and conditions");
              }
            }}>
            <div className="divr1">
            <div><input className="w-m-input" type="text" name="fname" onChange={handleChange} value={data.fname} required placeholder="First name"></input></div>
            <div><input className="w-m-input" type="text" name="lname" onChange={handleChange} value={data.lname} required placeholder="Last name"></input></div>
            </div>

            <div className="divc">
              <div className='i1'><input className="w-l-input" type="email" name="email" onChange={handleChange} value={data.email} required placeholder="Email Address"></input></div>
            <div className="i2"> <input className="w-l-input" type="password" name="password" onChange={handleChange} value={data.password} required placeholder="Create Password"></input></div>
           
            </div>
            <div className="divr2">
                <input className="w-xs-input" type="text" name="date" onChange={handleChange} value={data.date} required placeholder="DD"/>
                <input className="w-xs-input" type="text" name="month" onChange={handleChange} value={data.month} required placeholder="MM"/>
                <input className="w-xs-input" type="text" name="year" onChange={handleChange} value={data.year} required placeholder="YY"/>
                <input className="w-s-input" type="text" name="gender" onChange={handleChange} value={data.gender} required placeholder="Gender"></input>

            </div>

            <div id="cps"><input type="checkbox"  name="rm" value={check} onClick={()=>{setCheck(!check)}} /><span id="cpsp">By clicking Register, you agree to the <span classname="btp">Terms</span> and that you have read our <span classname="btp">Privacy Policy</span> and <span classname="btp">User Safety Guidelines</span></span></div>
            
            <button className="finalbs" ><span className="finalbt">Sign up</span></button>
            </form>
            <Link to="/login"><p id="sp"><u>Already have an account? Click here to login</u></p></Link>
            {error && alert(error)}
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
