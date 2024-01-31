import { useState,} from "react";
import './Adminlogin.css';
import { FaFacebook, FaTwitterSquare, FaGoogle } from 'react-icons/fa';
import {Link} from "react-router-dom"
import userloginimage from '../assets/userloginimage.jpg'
const Adminlogin=()=>{
    const iconSize = "36px"; 
    const iconColor="Green"
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
  };
    return(
      <div className="backq25" style={{ backgroundImage:`url(${userloginimage})` }} >
      <div className="logq25">
        <form onSubmit={handleSubmit}>
        <center><h1 className="h1n25">LOGIN</h1>
       </center>
       <p>  </p>
          <div className="inputbq25">
            <label name="uname">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required id="uname" />
          </div>
          <p  style={{color:"white",fontSize:"17px"}}></p>      
            <div className="inputbq25">
            <label name="pass">Password</label>
            <input  type="password" required id="pass" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <p  style={{color:"white",fontSize:"17px"}}></p>      
          <center>
         <Link to={'/Admindash'} > <button className="butq25" type="submit" >
              Login
            </button></Link>
          </center>
          <br></br>
          <br></br>
          <div className="regq25">
          <p>Do not have a account? <a href="#">Register</a></p>
          {/* <div className="social25">
              <a href="#" style={{ fontSize: iconSize , color:iconColor}}><FaFacebook /></a>
              <a href="#" style={{ fontSize: iconSize,color:iconColor }}><FaTwitterSquare /></a>
              <a href="#" style={{ fontSize: iconSize ,color:iconColor}}><FaGoogle /></a>
            </div> */}
          </div>
        </form>
      </div>
      </div>
        
    )
}

export default Adminlogin;