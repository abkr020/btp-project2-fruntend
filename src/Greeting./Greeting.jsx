import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import './greeting.css';

const Greeting = () => {
  return (
    <Container maxWidth="md">
      <Box className="greeting-container">
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
