import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import '../styles/lsmodal.css'
import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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
 
function Login({open}) {
  const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");
  const [check,setCheck] =useState(false);
  
	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
      
			window.location = "/";
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
              <button className="inactiveb"><span className="b-text">Sign Up</span></button>
              <button className="activeb"><span className="b-text">Login</span></button>

          </div>
        </Grid>
        <Grid item xs={6}>
        <div className="left">
            <h1 className="modal-heading">Log in</h1>
            <form onSubmit={handleSubmit}>
            <div className="divc">
              <div className='i1'><input className="w-l-input" type="email" name="email"
							onChange={handleChange}
							value={data.email}
							required placeholder="Email Address"></input></div>
            <div className="i2"> <input className="w-l-input" type="password" name="password" onChange={handleChange}
							value={data.password}
							required placeholder="Create Password"></input></div>
           
            </div>
            <p className="p1">Forgot password?</p>
            <div id="cp"> <input type="checkbox"  name="rm"  />
<span id="rm" value={check} onClick={()=>{setCheck(!check)}}>Remember me</span></div>
{error && alert(error)}
            <button className="finalb"><span className="finalbt">Login</span></button>
            </form>
            <Link to="/signup"><p id="ll"><u>Not a member yet.Click here to Register</u></p></Link>
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
