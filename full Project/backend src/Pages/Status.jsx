import './Status.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import homeic from '../assets/homeic.png'
const Status = () => {
  return (
      <div className='conbackg'>
    <div className="container456">
      <div className="content456">
        <div className="left-side">
          <div className="address details">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <br></br>
            <br></br>
            <div className="topic">Address</div>
            <div className="text-one">Surkhet, NP12</div>
            <div className="text-two">Birendranagar 06</div>
          </div>
          <div className="phone details">
            <FontAwesomeIcon icon={faPhoneAlt} />            
            <br></br>
            <br></br>
            <div className="topic">Phone</div>
            <div className="text-one">+0098 9893 5647</div>
            <div className="text-two">+0096 3434 5678</div>
          </div>
          <div className="email details">
            <FontAwesomeIcon icon={faEnvelope} />
            <br></br>
            <br></br>

            <div className="topic">Email</div>
            <div className="text-one">codinglab@gmail.com</div>
            <div className="text-two">info.codinglab@gmail.com</div>
          </div>
        </div>
        <div className="right-side">
          <div className="topic-text">Send us a message</div>
          <p>
            If you have any work from me or any types of queries related to my tutorial,
            you can send me a message from here. It's my pleasure to help you.
          </p>
          <br></br>
          <form action="#">
            <div className="input-box456">
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="input-box456">
              <input type="text" placeholder="Enter your email" />
            </div>
            <div className="input-box456 message-box">               
            <input type="text" placeholder="Enter your Text" />
                </div>
            
            <div className="button456">
              <input type="button" value="Send Now" />
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Status;
