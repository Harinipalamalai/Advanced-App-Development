
import './Adminnav.css'; 
import {Link} from "react-router-dom"
import userhomeimage from '../assets/userhomeimage.jpg'
const Adminnav = () => {
  
  
  return (
    <div className="home"style={{ backgroundImage:`url(${userhomeimage})` }} >
      <nav className="nav">
            <div className="content">
                <h2>Agera</h2>
                <h2>Agera</h2>
            </div>
            <div className="navlinks">
           <p className='under'> <Link to="#">Home</Link></p>
            <Link to={"/Admindash"}>Submissions</Link>
            <Link to={"/Applyform"}>Include</Link>
            <Link to={"/"}>Logout</Link>
            </div>
      </nav>

      <section >
        <div id='main-content'>
            <h1>#Agrofunds</h1>
            <br></br>
            <br></br>
            <div className='section2'>
                We transform 
                the <br></br>Agriculture<br></br>
                World
            </div>
            <br></br>
            <div className='section1'>
                We invest in developing and scaling up innovative support structure for farmers and smallholder
                that provide modern solution and otion for sustanbly earning reiable income from their hardwork
            </div>
            <br></br>
            <div className='section3'>
          {/* <button className="regwbutq" type="submit" >
              EXPLORE
            </button> */}
            </div>
        </div>
        

       
     </section>
    </div>
  );
}

export default Adminnav;
