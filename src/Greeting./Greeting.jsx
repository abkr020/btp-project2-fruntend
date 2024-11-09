import React, { useContext, useState, useEffect, useRef } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { ThemeContext } from '../Context/ThemeContext'; // Import the ThemeContext
import './greeting.css'; // Import the CSS file

const Greeting = () => {
  const { isDarkMode } = useContext(ThemeContext); // Consume the ThemeContext to get the current mode
  const [isVisible, setIsVisible] = useState(false); // Track visibility of the signature pop-out
  const popupRef = useRef(null); // Ref for the pop-out container
  const [buttonVisible, setButtonVisible] = useState(false);


  const handleSignatureClick = (e) => {
    e.stopPropagation(); // Prevents the document click handler from triggering
    setIsVisible(!isVisible); // Toggle visibility on click
  };

  // Effect to handle click outside of the pop-out to close it
  useEffect(() => {
    const handleClickOutside = (e) => {
      // Check if the click was outside the popup and the button
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setIsVisible(false); // Close the pop-out
      }
    };

    // Add the event listener for clicks
    document.addEventListener('click', handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === 'Escape') {
        setButtonVisible((prev) => !prev); // Toggle button visibility
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <Container maxWidth="md">
      <Box
        className={`greeting-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`} // Apply the appropriate class based on dark mode
      >
        <Typography variant="h3" component="h1" className="greeting-title" gutterBottom>
          Hello and Welcome!
        </Typography>
        <Typography variant="body1" className="greeting-text" paragraph>
          We’re thrilled to have you here. Explore our AI-powered tools designed to make healthcare more efficient.
        </Typography>
        <Typography variant="body1" className="greeting-text" paragraph>
          Feel free to navigate through our site to learn more about what we offer. Thank you for visiting!
        </Typography>
      </Box>

      {/* Signature button */}
      <button className="signature-button" onClick={handleSignatureClick}>
        ?
      </button>

      {/* Pop-out section with a link */}
      {isVisible && (
        <div className="signature-popout" id="popup" ref={popupRef}>
          <a href="https://your-link.com" target="_blank" rel="noopener noreferrer" className="popup-link">
            AK
          </a>
          <div>weifjiw</div>
          <div>weifjiw</div>
          <div>weifjiw</div>
        </div>
      )}
    </Container>
  );
};

export default Greeting;
