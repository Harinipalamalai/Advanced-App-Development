import { useState,} from "react";
import './Signup.css';

const Signup=()=>{

    const [email, setEmail] = useState("");
    const [user, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [conpassword, setconPassword] = useState("");
    const [number, setPhoneno] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
  };
    return(
      <div className="back">
      <div className="log">
        <form onSubmit={handleSubmit}>
        <center><h1 className="h1n">REGISTER</h1>
          {/* <br></br> */}
       </center>
       <p>  </p>
       <div className="inputb">
            <label name="uname1">Username</label>
            <input type="text" value={user} onChange={(e) => setUsername(e.target.value)} required id="uname" />
          </div>

          <div className="inputb">
            <label name="uname">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required id="uname" />
          </div>
          <p  style={{color:"white",fontSize:"17px"}}></p>      
            <div className="inputb">
            <label name="pass">Password</label>
            <input  type="password" required id="pass" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div className="inputb">
            <label name="pass">Confirm Password</label>
            <input  type="password" required id="pass1" value={conpassword} onChange={(e) => setconPassword(e.target.value)}/>
          </div>
          <p  style={{color:"white",fontSize:"17px"}}></p>   
          <div className="inputb">
            <label name="num">Phone Number</label>
            <input  type="text" required id="num" value={number} onChange={(e) => setPhoneno(e.target.value)}/>
          </div>
          <p  style={{color:"white",fontSize:"17px"}}></p>   
          <center>
            <button className="but1" type="submit" >
              Signup
            </button>
          </center>
         
        
        </form>
      </div>
      </div>
        
    )
}

export default Signup;