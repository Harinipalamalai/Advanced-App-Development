import { useState,} from "react";
import './Login.css';
import { FaFacebook, FaTwitterSquare, FaGoogle } from 'react-icons/fa';
import {Link} from "react-router-dom"
import './signup'
const Login=()=>{
    const iconSize = "36px"; 
    const iconColor="Green"// Set the desired size for the icons
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
  };
    return(
      <div className="backq">
      <div className="logq">
        <form onSubmit={handleSubmit}>
        <center><h1 className="h1n">LOGIN</h1>
          {/* <br></br> */}
       </center>
       <p>  </p>
          <div className="inputbq">
            <label name="uname">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required id="uname" />
          </div>
          <p  style={{color:"white",fontSize:"17px"}}></p>      
            <div className="inputbq">
            <label name="pass">Password</label>
            <input  type="password" required id="pass" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <p  style={{color:"white",fontSize:"17px"}}></p>      
          <center>
           <Link to='/nav'> <button className="butq" type="submit" >
              Login
            </button></Link>
          </center>
          <br></br>
          <br></br>
          <div className="regq">
          <p>Do not have a account? <Link to="/Signup"><a href="#">Register</a></Link></p>
          <div className="social">
              <a href="#" style={{ fontSize: iconSize , color:iconColor}}><FaFacebook /></a>
              <a href="#" style={{ fontSize: iconSize,color:iconColor }}><FaTwitterSquare /></a>
              <a href="#" style={{ fontSize: iconSize ,color:iconColor}}><FaGoogle /></a>
            </div>
          </div>
        </form>
      </div>
      </div>
        
    )
}

export default Login;