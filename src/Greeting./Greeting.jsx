import React, { useContext } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { ThemeContext } from '../Context/ThemeContext'; // Import the ThemeContext
import './greeting.css'; // Import the CSS file

const Greeting = () => {
  const { isDarkMode } = useContext(ThemeContext); // Consume the ThemeContext to get the current mode

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
    </Container>
  );
};

export default Greeting;
