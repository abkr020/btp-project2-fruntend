// src/components/Navbar.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'; // Import the CSS file for custom styling

const Navbar = () => {
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
            wating time predictor
          </Link>
        </Typography>

        {/* Centered buttons */}
        <Box className="navbar-buttons">
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/contact">Contact</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/predict">predict</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
