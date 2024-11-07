// src/pages/About.jsx
import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const About = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ padding: '2rem', textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to the AI-Powered Patient Wait-Time Predictor! Our mission is to streamline hospital workflows
          by predicting wait times for patients using advanced machine learning algorithms.
        </Typography>
        <Typography variant="body1" paragraph>
          This tool helps healthcare professionals manage patient flow efficiently, improving patient experience
          and reducing wait times. Thank you for visiting our project.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
