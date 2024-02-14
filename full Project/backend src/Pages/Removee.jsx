
import React, { useState } from 'react';
import './Remove.css';
import axios from 'axios' 
const Removee = () => {
  const [formData, setFormData] = useState({
    fullName: '',
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  let token = localStorage.getItem('token');
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.delete(
        `http://localhost:8080/registration-forms/delete/${formData.fullName}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'cache-control': 'no-cache',
          },
          // Data should be included in the 'data' property
          data: {
            fullName: formData.fullName,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  
  
    return (
      <div className='apply26g' >
      <section className='container26g'>
        <header>Delete Loan</header>
        <form className='form26g' onSubmit={handleSubmit}>
          {/* Your input fields with corresponding names and values */}
          <div className='input-box26g'>
            <label>Full Name</label>
            <br></br>
            <br></br>
            <input
              type='text'
              name='fullName'
              placeholder='Enter full name'
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <button className="msg"type="submit">Delete Loan</button>
        </form>
      </section>
    </div>
  );
};
  export default Removee;