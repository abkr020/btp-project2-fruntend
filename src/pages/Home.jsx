import React, { useContext } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { ThemeContext } from '../Context/ThemeContext'; // Import the ThemeContext
import '../styles/Home.css'; // Import the CSS file

const Home = () => {
  const { isDarkMode } = useContext(ThemeContext); // Consume the ThemeContext to get the current mode

  return (
    <Container maxWidth="md">
      <Box
        className={`home-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`} // Apply the appropriate class based on dark mode
      >
        <Typography variant="h3" component="h1" className="home-title" gutterBottom>
          Welcome to the Patient Wait-Time Predictor
        </Typography>
        <Typography variant="body1" className="home-text" paragraph>
          Our AI-powered tool helps healthcare providers manage patient wait times effectively.
        </Typography>
        <Typography variant="body1" className="home-text" paragraph>
          By predicting wait times, we aim to improve patient satisfaction and streamline hospital workflows.
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
