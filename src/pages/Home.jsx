// src/pages/Home.jsx
import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const Home = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ padding: '2rem', textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to the Patient Wait-Time Predictor
        </Typography>
        <Typography variant="body1" paragraph>
          Our AI-powered tool helps healthcare providers manage patient wait times effectively.
        </Typography>
        <Typography variant="body1" paragraph>
          By predicting wait times, we aim to improve patient satisfaction and streamline hospital workflows.
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
