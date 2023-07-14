import { Link, animateScroll as scroll } from 'react-scroll'
import './Footer.css'
import React, { useState, useEffect } from 'react';

function Footer() {

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
      setNavbarTextColor('white');
    } else {
      setNavbarColor('transparent');
      setNavbarTextColor('white');
    }
  }, [scrollPosition]);

  const toggleNavbar = () => {
    setIsBarOpened(!isBarOpened);
    if (!isBarOpened) {
      document.querySelector('.navbar ul').classList.add('opened');
      document.querySelector('.navopened').classList.add('opened');
    } else {
      document.querySelector('.navbar ul').classList.remove('opened');
      document.querySelector('.navopened').classList.remove('opened');
    }
  };
  const handleLinkClick = () => {
    setIsBarOpened(false);
  };

  const handleGoTopClick = () => {
    scroll.scrollToTop({
      duration: 1000,
      smooth: true,
    });
  };

  return (
    <footer class="footer-distributed">

      <div class="footer-left">

        <div className='secc-title'>
          <h2>
            <span>The</span> Festive Solution
          </h2>
        </div>
        <p class="footer-links">
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
          |
          <Link
                activeClass="active"
                to="ucontainer"
                spy={true}
                smooth={true}
                duration={1000}
                onClick={handleLinkClick}
                style={{ color: navbarTextColor }}
                offset={-200}
              >
                Services
              </Link>
          |
          <Link
                activeClass="active"
                to="sec-title"
                spy={true}
                smooth={true}
                duration={1000}
                onClick={handleLinkClick}
                style={{ color: navbarTextColor }}
                offset={-200}
              >
                About
              </Link>
        
        |

        <Link
                activeClass="active"
                to="book-now-button"
                spy={true}
                smooth={true}
                duration={1000}
                onClick={handleLinkClick}
                style={{ color: navbarTextColor }}
                offset={-200}
              >
                Booking
              </Link>
        </p>

        <p class="footer-company-name">Website Developed By <strong>Aliyaan & Shoaib</strong></p>
        <p class="footer-company-name">Developer Contact <strong>: aliyaan.ahmed46376@gmail.com</strong></p>
      </div>

      <div class="footer-center">
        <div>
          <i class="fa fa-map-marker"></i>
          <p><span>Karachi</span>
            Pakistan</p>
        </div>

        <div>
          <i class="fa fa-phone"></i>
          <p>+91 74**9**258</p>
        </div>
        <div>
          <i class="fa fa-envelope"></i>
          <p><a href="mailto:sagar00001.co@gmail.com">xyz@gmail.com</a></p>
        </div>
      </div>
      <div class="footer-right">
        <p class="footer-company-about">
          <span>About the company</span>
          <strong>Sagar Developer</strong> is a Youtube channel where you can find more creative CSS Animations
          and
          Effects along with
          HTML, JavaScript and Projects using C/C++.
        </p>
        <div class="footer-icons">
          <a href="#"><i class="fa fa-facebook"></i></a>
          <a href="#"><i class="fa fa-instagram"></i></a>
          <a href="#"><i class="fa fa-linkedin"></i></a>
          <a href="#"><i class="fa fa-twitter"></i></a>
          <a href="#"><i class="fa fa-youtube"></i></a>
        </div>
      </div>
    </footer>

  );
}
export default Footer;
