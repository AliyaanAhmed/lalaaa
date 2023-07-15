import { Swiper, SwiperSlide } from "swiper/react";
import "./PastEvent.css";

import "swiper/css";
import { useNavigate } from 'react-router';

import image1 from "../img/card1.jpg";
import image2 from "../img/card1.jpg";
import image3 from "../img/card1.jpg";
import image4 from "../img/card1.jpg";
import image5 from "../img/card1.jpg";
import image6 from "../img/card1.jpg";
import image7 from "../img/card1.jpg";

const slides = [image1, image2, image3, image4, image5, image6, image7];

 const Carousel = () => {
  const navigate = useNavigate();
  const handleSeePortfolio = () => {
    navigate('/our-event');
  };
  

  return (
    <div className="container-slide">
      <h1 className="servicesheading">PAST EVENTS</h1>
    <Swiper spaceBetween={10} slidesPerView={3} loop>
      {slides.map((slide) => (
        <SwiperSlide>
          <img className="image-slide" src={slide} />
        </SwiperSlide>
      ))}
    </Swiper>
    <div className="inner-column wow fadeInRight">
    <div className='button-container'>
            
            <button class="ubtn btn1" onClick={handleSeePortfolio}>Our Portfolio</button>
          </div>
          </div>
    </div>
  );
};
export default Carousel;