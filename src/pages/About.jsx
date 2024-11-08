import React, { useContext } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { ThemeContext } from '../Context/ThemeContext'; // Import the ThemeContext
import '../styles/About.css'; // Import the CSS file

const About = () => {
  const { isDarkMode } = useContext(ThemeContext); // Consume the ThemeContext to get the current mode

  return (
    <Container maxWidth="md">
      <Box
        className={`about-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`} // Apply the appropriate class based on dark mode
      >
        <Typography variant="h4" component="h1" className="about-title" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" className="about-text" paragraph>
          Welcome to the AI-Powered Patient Wait-Time Predictor! Our mission is to streamline hospital workflows
          by predicting wait times for patients using advanced machine learning algorithms.
        </Typography>
        <Typography variant="body1" className="about-text" paragraph>
          This tool helps healthcare professionals manage patient flow efficiently, improving patient experience
          and reducing wait times. Thank you for visiting our project.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
