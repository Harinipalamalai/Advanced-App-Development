import React from 'react';
import './First.css';
import { Link } from 'react-router-dom';
const First = () => {
  return (
    <div className='centeredContainer'>
      <section>
        <div className='ha'>
          <p className='centeredText'>AGERA</p>
         <p className='ba'>Growing Dreams, Harvesting Futures</p>
         <br></br>
         <p>----------------------------------------------------------------------------</p>
         <br></br>
         <br></br><br></br>
         <Link to='/login'> <button className="userbut" type="submit" >
              USER
            </button></Link>
            <br></br>
            <br></br>
            <button className="Adminbut" type="submit" >
              ADMIN
            </button>
        </div>
      </section>
    </div>
  );
};

export default First;