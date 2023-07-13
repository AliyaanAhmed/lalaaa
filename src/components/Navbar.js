import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import festivelogo from '../img/festive.png';

function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarColor, setNavbarColor] = useState('transparent');
  const [navbarTextColor, setNavbarTextColor] = useState('white');
  const [isBarOpened, setIsBarOpened] = useState(false);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 0) {
      setNavbarColor('white');
      setNavbarTextColor('black');
    } else {
      setNavbarColor('transparent');
      setNavbarTextColor('white');
    }
  }, [scrollPosition]);

  const openBar = () => {
    setIsBarOpened(!isBarOpened);
  };
  const handleLinkClick = () => {
    if (isBarOpened) {
      setIsBarOpened(false);
    }
  };

  const handleGoTopClick = () => {
    scroll.scrollToTop({
      duration: 1000,
      smooth: true,
    });
  };

  return (
    <nav className="navbar" style={{ backgroundColor: navbarColor }}>
      <div className="container">
        <div className="row">
          <div className="logo-container">
            <h1 className="logo">
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                duration={1000}
                to="headerbg"
                style={{ cursor: 'pointer', color: navbarTextColor }}
                onClick={handleLinkClick}
              >
                <img alt="hi" src={festivelogo} className="img-fluid" />
              </Link>
            </h1>
          </div>
          <ul className="bar">
            <li>
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                duration={1000}
                to="headerbg"
                onClick={handleLinkClick}
                style={{ color: navbarTextColor }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="myservicesheading"
                spy={true}
                smooth={true}
                duration={1000}
                onClick={handleLinkClick}
                style={{ color: navbarTextColor }}
                offset={-200}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="about-scroll"
                spy={true}
                smooth={true}
                duration={1000}
                onClick={handleLinkClick}
                style={{ color: navbarTextColor }}
              >
                About
              </Link>
              
            </li>
            <li>
              <Link
                activeClass="active"
                to="past-event-container"
                spy={true}
                smooth={true}
                duration={1000}
                onClick={handleLinkClick}
                style={{ color: navbarTextColor }}
                offset={-140}
              >
                Past Events
              </Link>
              
            </li>
          </ul>
          <div className="button" onClick={openBar}>
            <div className="burger"></div>
            <div className="burger"></div>
            <div className="burger"></div>
          </div>
       
          <div>
              <Link
                activeClass="active"
                to="bookings"
                spy={true}
                smooth={true}
                duration={1000}
                className="book-now-button"
                onClick={handleLinkClick}
                offset={-200}
              >
                Book Now!
              </Link>
            </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
