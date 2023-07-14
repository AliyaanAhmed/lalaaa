import React, { useState, useEffect } from 'react';
import './PastEvent.css';
import img1 from '../img/card1.jpg';
import img3 from '../img/card3.jpg';
import img2 from '../img/card2.jpg'
import { useNavigate } from 'react-router';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';


const images = [img1, img2, img1, img3];

const PastEvent = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [delay, setDelay] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isButtonClicked && !delay) {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      }
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [isButtonClicked, delay]);

  const handlePrevImage = () => {
    if (!delay) {
      setIsButtonClicked(true);
      setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
      setDelay(true);
      setTimeout(() => {
        setDelay(false);
        setIsButtonClicked(false);
      }, 500);
    }
  };

  const handleNextImage = () => {
    if (!delay) {
      setIsButtonClicked(true);
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      setDelay(true);
      setTimeout(() => {
        setDelay(false);
        setIsButtonClicked(false);
      }, 500);
    }
  };
  

  const handleSeePortfolio = () => {
    window.scrollTo(0, 0); // Scroll to top of the page
    navigate('/our-event');
  };

  return (
    <div className="past-event-container">
      <h1 className="myservicesheading">PAST EVENTS</h1>
      <div className="image-slider">
      <button className="prev-btn" onClick={handlePrevImage} disabled={isButtonClicked}>
        <MdArrowBack />
      </button>
        <div
          className="image-container"
          onMouseEnter={() => setIsButtonClicked(true)}
          onMouseLeave={() => setIsButtonClicked(false)}
        >
          <img src={images[currentImage]} alt={`Event ${currentImage + 1}`} className="event-image" />
          <div className='button-container'>
            <button className="ubtn btn1" onClick={handleSeePortfolio}>SEE OUR PORTFOLIO</button>
          </div>
        </div>
        <button className="next-btn" onClick={handleNextImage} disabled={isButtonClicked}>
           <MdArrowForward />
        </button>
      </div>
    </div>
  );
};

export default PastEvent;