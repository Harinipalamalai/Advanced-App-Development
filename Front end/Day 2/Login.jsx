import { useState,} from "react";
import './Login.css';
import { FaFacebook, FaTwitterSquare, FaGoogle } from 'react-icons/fa';

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
            <button className="butq" type="submit" >
              Login
            </button>
          </center>
          <div className="regq">
              <p>Do not have a account? <a href="#">Register</a></p>
          </div>
          <div className="social">
              <a href="#" style={{ fontSize: iconSize , color:iconColor}}><FaFacebook /></a>
              <a href="#" style={{ fontSize: iconSize,color:iconColor }}><FaTwitterSquare /></a>
              <a href="#" style={{ fontSize: iconSize ,color:iconColor}}><FaGoogle /></a>
            </div>
        </form>
      </div>
      </div>
        
    )
}

export default Login;