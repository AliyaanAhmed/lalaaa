import React from 'react';
import './services.css';
import card1 from '../img/card1.jpg'
import card2 from '../img/card2.jpg'
import card3 from '../img/card3.jpg'

function Card(props) {
  return (
    
    <div className="container">
          <h1 className="myservicesheading">OUR SERVICES</h1>
      <div className="row">
        <div className="col-sm-4">
          <div className="flipy">
            <div className="card">
              <div className="face front">
                <img src={card1} alt="Front" />
              </div>
              <div className="face back">
                <img src="http://davidwalsh.name/demo/logo.png" alt="Back" />
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-4">
          <div className="flipy">
            <div className="card">
              <div className="face front">
                <img src={card2} alt="Front" />
              </div>
              <div className="face back">
                <img src="http://davidwalsh.name/demo/logo.png" alt="Back" />
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-4">
          <div className="flipy">
            <div className="card">
              <div className="face front">
                <img src={card3} alt="Front" />
              </div>
              <div className="face back">
                <img src="http://davidwalsh.name/demo/logo.png" alt="Back" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Card;