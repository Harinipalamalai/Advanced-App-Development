import React from 'react'
import { Link } from 'react-router-dom'
import './Apply.css'
import regiamge from '../assets/regiamge.jpg'
const Apply = () => {
  return (
    <div className='apply26' style={{ backgroundImage:`url(${regiamge})` }} >
         <section className="container26">
      <header>Registration Form</header>
      <form action="#" className="form26">
        <div className="input-box26">
          <label>Full Name</label>
          <input type="text" placeholder="Enter full name" required />
        </div>

        <div className="input-box26">
          <label>Email Address</label>
          <input type="text" placeholder="Enter email address" required />
        </div>

        <div className="column26">
          <div className="input-box26">
            <label>Phone Number</label>
            <input type="number" placeholder="Enter phone number" required />
          </div>
          <div className="input-box26">
            <label>Birth Date</label>
            <input type="date" placeholder="Enter birth date" required />
          </div>
        </div>
        <div className="gender-box26">
          <h3>Gender</h3>
          <div className="gender-option26">
            <div className="gender26">
              <input type="radio" id="check-male" name="gender" defaultChecked />
              <label htmlFor="check-male">male</label>
            </div>
            <div className="gender26">
              <input type="radio" id="check-female" name="gender" />
              <label htmlFor="check-female">Female</label>
            </div>
            <div className="gender26">
              <input type="radio" id="check-other" name="gender" />
              <label htmlFor="check-other">prefer not to say</label>
            </div>
          </div>
        </div>
        <div className="input-box26 address26">
          <label>Address</label>
          <input type="text" placeholder="Enter street address" required />
          <input type="text" placeholder="Enter street address line 2" required />
          <div className="column26">
            <input type="text" placeholder="Enter your city" required />
          </div>
          <div className="column262">
            <input type="text" placeholder="Enter your region" required />
            <input type="number" placeholder="Enter postal code" required />
          </div>
        </div>
        <br></br>
        <div className="input-box262">
          <label>Proof Details</label>
          <br></br>
          <input type="number" placeholder="Enter Applicant Aadhaar Number" required />
          <input type="number" placeholder="Enter Applicant Pan Number" required />
            <input type="number" placeholder="Enter Applicant Salary" required />
            <input type="number" placeholder="Enter Loan Amount Required" required />
        </div>
        <Link to="/Doc"><button>NEXT</button></Link>
      </form>
    </section>
    </div>
  )
}

export default Apply