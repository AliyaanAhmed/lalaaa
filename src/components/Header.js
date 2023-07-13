import React, { useEffect, useState } from 'react';
import myvideo from '../img/video.mp4';
import './Header.css'; // Import the CSS file for styling

function Header() {
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
    <header>
      <video src={myvideo} loop autoPlay muted></video>
      <h1 className={`fade-in ${fadeIn ? 'active' : ''} heading`}>
        <span className="welcome"> Welcome To </span> The Festive Solutions
      </h1>
      <div className="headerbg"></div>
    </header>
  );
}

export default Header;
