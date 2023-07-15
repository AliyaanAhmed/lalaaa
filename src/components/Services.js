import React from 'react';
import './services.css';
import card1 from '../img/card1.jpg'
import card2 from '../img/card2.jpg'
import card3 from '../img/card3.jpg'

function Card(props) {
  return (

    <div className="container-service">
     <h1 className="umyservicesheading">OUR SERVICES</h1>
      <div className="container">
        <div className="row">

          <div className="ucontainer">
            <div className="ucard" style={{ '--clr': '#FFC40A' }}>
              <div className="uimg-box">
                <img src={card1} alt="Desert" />
              </div>
              <div className="ucontent">
                <h2 className='utext'>WEDDING</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!
                </p>
                <a href="">Read More</a>
              </div>
            </div>
            <div className="ucard" style={{ '--clr': '#87CEEB' }}>
              <div className="uimg-box">
                <img src= {card2} alt="Mountains" />
              </div>
              <div className="ucontent">
                <h2>CONCERT</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!
                </p>
                <a href="">Read More</a>
              </div>
            </div>
            <div className="ucard" style={{ '--clr': '#FFC40A' }}>
              <div className="uimg-box">
                <img src={card3} alt="Ocean" />
              </div>
              <div className="ucontent">
                <h2>CORPORATE EVENTS</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!
                </p>
                <a href="">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;