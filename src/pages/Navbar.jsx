// src/components/Navbar.js
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { WbSunny, DarkMode } from '@mui/icons-material'; // Import Sun and Moon icons
import '../styles/navbar.css';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    // Additional logic can be added here if you want to toggle dark mode styles
  };

  return (
    <AppBar position="static" className="navbar">
      <Toolbar className="navbar-toolbar">
        {/* Logo or Text on the left */}
        <Typography variant="h6" component="div" className="navbar-title">
          <Link 
            to="/greeting" 
            style={{ 
              textDecoration: 'none', 
              color: 'inherit' // Ensures the text color matches the AppBar color
            }}
          >
            Waiting Time Predictor
          </Link>
        </Typography>

        {/* Centered buttons */}
        <Box className="navbar-buttons">
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/contact">Contact</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/predict">Predict</Button>
        </Box>

        {/* Toggle Button (Sun/Moon Icon) at the Right */}
        <Box className="navbar-toggle">
          <IconButton onClick={handleToggle} color="inherit">
            {isDarkMode ? <WbSunny /> : <DarkMode />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
