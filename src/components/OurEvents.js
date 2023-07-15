import React from 'react';
import './OurEvents.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Services1 from '../img/Service1.jpg';
import Services2 from '../img/Service2.jpg';
import Services3 from '../img/Service3.jpg';
import Services4 from '../img/Service4.jpg';
import myvideo1 from '../img/video1.mp4';
import festivelogo from '../img/festive.png';

function OurEvents() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Set the fade-in effect immediately on the first load
    setFadeIn(true);

    // Function to toggle the fade-in effect
    const toggleFade = () => {
      setFadeIn((prevValue) => !prevValue);
    };

    // Set an interval to toggle the fade every 4 seconds
    const interval = setInterval(toggleFade, 4000);

    // Clear the interval when the component is unmounted or the dependency changes
    return () => clearInterval(interval);
  }, []);


  return (
    <>
    <header>

    <img src={festivelogo} alt="Festive Logo" className="festive-logo" />
      <video src={myvideo1} loop autoPlay muted></video>
      <h1 className={`fade-in ${fadeIn ? 'active' : ''} heading`}>
        <span className="welcome"> Our </span> Past Events
        
      </h1>
      
      <div className="headerbg"></div>
    </header>

 

    <div className="container-flip">
    <div className="row">
      
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={Services4} alt="Card Front Image" />
            <div className="card-title">YS CONCERT</div>
          </div>
          
          <div className="flip-card-back">
            <div className="card-content">
              <h2>Card Title</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam auctor, eros at posuere fringilla, turpis tortor
                efficitur velit, at fringilla tortor magna id quam.
              </p>
              <a href="#" className="btn">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    

      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={Services3} alt="Card Front Image" />
            <div className="card-title">YS CONCERT</div>
          </div>
          <div className="flip-card-back">
            <div className="card-content">
              <h2>Card Title</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam auctor, eros at posuere fringilla, turpis tortor
                efficitur velit, at fringilla tortor magna id quam.
              </p>
              <a href="#" className="btn">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>


      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={Services4} alt="Card Front Image" />
            <div className="card-title">YS CONCERT</div>
          </div>
          <div className="flip-card-back">
            <div className="card-content">
              <h2>Card Title</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam auctor, eros at posuere fringilla, turpis tortor
                efficitur velit, at fringilla tortor magna id quam.
              </p>
              <a href="#" className="btn">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>


      </div>
      </div>

     

      <div className="container-flip">
    <div className="row">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={Services4} alt="Card Front Image" />
            <div className="card-title">YS CONCERT</div>
          </div>
          <div className="flip-card-back">
            <div className="card-content">
              <h2>Card Title</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam auctor, eros at posuere fringilla, turpis tortor
                efficitur velit, at fringilla tortor magna id quam.
              </p>
              <a href="#" className="btn">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={Services3} alt="Card Front Image" />
            <div className="card-title">YS CONCERT</div>
          </div>
          <div className="flip-card-back">
            <div className="card-content">
              <h2>Card Title</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam auctor, eros at posuere fringilla, turpis tortor
                efficitur velit, at fringilla tortor magna id quam.
              </p>
              <a href="#" className="btn">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>


      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={Services4} alt="Card Front Image" />
            <div className="card-title">YS CONCERT</div>
          </div>
          <div className="flip-card-back">
            <div className="card-content">
              <h2>Card Title</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam auctor, eros at posuere fringilla, turpis tortor
                efficitur velit, at fringilla tortor magna id quam.
              </p>
              <a href="#" className="btn">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>


      </div>
      </div>





    <div className="container-flip">
    <div className="row">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={Services4} alt="Card Front Image" />
            <div className="card-title">YS CONCERT</div>
          </div>
          <div className="flip-card-back">
            <div className="card-content">
              <h2>Card Title</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam auctor, eros at posuere fringilla, turpis tortor
                efficitur velit, at fringilla tortor magna id quam.
              </p>
              <a href="#" className="btn">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={Services3} alt="Card Front Image" />
            <div className="card-title">YS CONCERT</div>
          </div>
          <div className="flip-card-back">
            <div className="card-content">
              <h2>Card Title</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam auctor, eros at posuere fringilla, turpis tortor
                efficitur velit, at fringilla tortor magna id quam.
              </p>
              <a href="#" className="btn">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>


      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={Services4} alt="Card Front Image" />
            <div className="card-title">YS CONCERT</div>
          </div>
          <div className="flip-card-back">
            <div className="card-content">
              <h2>Card Title</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam auctor, eros at posuere fringilla, turpis tortor
                efficitur velit, at fringilla tortor magna id quam.
              </p>
              <a href="#" className="btn">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>


      </div>
      </div>

    </>
  );
}
export default OurEvents;