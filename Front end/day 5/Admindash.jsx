import { Link } from 'react-router-dom';
import './Admindash.css';
const Admindash = () => {
  return (
    <div className='dash79'>
      <div className='background-image79'>
        <nav className='navbar79'>
              <p className='nohoverpro'><Link to="#">Applied Loans</Link></p>
             <p> <Link to={'/Details'}>Loan Details</Link></p>
        </nav>
        <div className="table877">
      <div className="grid-container890">
  <div className="grid-item890">Applicant Name: Harini P</div>
  <div className="grid-item890">Applicant phone: 9988776655</div>
  <div className="grid-item890">Applicant Loan Id: 556677</div> 
</div>
<div className="grid-container2890">
  <div className="grid-item2890">Applicant Email: harinipalanaXXX@gmail.com</div>
  </div>
  <div className="grid-container3890">
  <div className="grid-item3890">Applicant Pan no: 2398xxxxx</div>
  <div class="grid-item3890"></div>
  <div class="grid-item3890"><button className='accreg89'>Accepted</button><p><button className='accreg99'>Rejected</button></p></div>
  </div>
      </div>
      <div className="table977">
      <div className="grid-container890">
  <div className="grid-item890">Applicant Name: Harini P</div>
  <div className="grid-item890">Applicant phone: 9988776655</div>
  <div className="grid-item890">Applicant Loan Id: 556677</div> 
</div>
<div className="grid-container2890">
  <div className="grid-item2890">Applicant Email: harinipalanaXXX@gmail.com</div>
  </div>
  <div className="grid-container3890">
  <div className="grid-item3890">Applicant Pan no: 2398xxxxx</div>
  <div class="grid-item3890"></div>
  <div class="grid-item3890"><button className='accreg89'>Accepted</button><p><button className='accreg99'>Accepted</button></p></div>
  </div>
      </div>
      </div>
    </div>
  );
};
export default Admindash;

