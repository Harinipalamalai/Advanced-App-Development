import './Services.css';
import { Link } from 'react-router-dom';
// import servicesimg from '../assets/servicesimg'
function Services() {
  return (

    <div className='services-container'> 
      <nav className='navi4'>
     <p className="no-hover"> < Link to="#" >Loan</Link></p>
      <p>  <Link to="/Submit">Loan Status</Link></p>
      <p>  <Link to="/Profileinfo">Profile</Link></p>
      </nav>
    <div className='academy'>
     <main>
    <div className="about-me">
      <div className='event1'><img src="https://img.freepik.com/free-photo/tractor-field-ai-generated-image_268835-6450.jpg?t=st=1706292829~exp=1706296429~hmac=e34568904fa38810b992d7b75551c7421a8b195e7247ea43d62f70b432b0983a&w=1800" alt="me"></img>
      <p className='para'>A Tractor loan is a type of financing specifically designed to assist individuals, farmers, or businesses in purchasing tractors and related agricultural equipment.</p>
     <Link to='/Apply'> <button className='button-33'>APPLY NOW</button></Link></div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div className='event2'><img src="https://img.freepik.com/free-photo/plant-growing-soil-with-sun-shining-it_1340-38891.jpg?size=626&ext=jpg&ga=GA1.1.627563915.1683457253&semt=ais_ai_generated" alt="me"></img>
      <p className='para'>Agriculture land loans are specifically intended for the purchase, development of agricultural land.The loan amount depends on factors such as the value of the land.</p>
      <button className='button-33'>APPLY NOW</button>
      </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div className='event3'><img src="https://img.freepik.com/free-photo/photorealistic-lohri-festival-with-man-celebrating_23-2151098192.jpg?size=626&ext=jpg&ga=GA1.1.627563915.1683457253&semt=ais_ai_generated" alt="me"></img><p className='para'>Agricultural loans provide essential financial support to farmers for activities like crop cultivation and equipment purchase, with varying amounts and collateral. </p><button className='button-33'>APPLY NOW</button></div>
    </div>
    <div className="about-me1">
      <div className='event4'><img src="https://images.pexels.com/photos/19460850/pexels-photo-19460850/free-photo-of-men-working-in-the-field-during-harvest.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="me"></img><p className='para'>Agricultural loans provide essential financial support to farmers for activities like crop cultivation and equipment purchase, with varying amounts, subsidized interest rates, and collateral requirements. </p><button className='button-31'>APPLY NOW</button></div>&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div className='event5'><img src="https://img.freepik.com/free-photo/organic-farm-harvests-fresh-fruit-vegetables-generated-by-ai_188544-36467.jpg?t=st=1706294658~exp=1706298258~hmac=c6e59c75ff88077c0501d0d77dfe8b799ca5c1c6111e2c44d271d7a47045ea94&w=2000" alt="me"></img><p className='para'>Agricultural loans provide essential financial support to farmers for activities like crop cultivation and equipment purchase, with varying amounts, subsidized interest rates, and collateral requirements. </p><button className='button-31'>APPLY NOW</button>
      </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div className='event6'><img src="https://img.freepik.com/free-photo/photorealistic-money-with-plant_23-2151027604.jpg?size=626&ext=jpg&ga=GA1.1.627563915.1683457253&semt=ais_ai_generated" alt="me"></img><p className='para'>Agricultural loans provide essential financial support to farmers for activities like crop cultivation and equipment purchase, with varying amounts, subsidized interest rates, and collateral requirements. </p><button className='button-31'>APPLY NOW</button></div>
    </div>
  </main>
  </div>
    </div>
  );
}

export default Services;

