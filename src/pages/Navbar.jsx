import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { WbSunny, DarkMode } from '@mui/icons-material'; // Import Sun and Moon icons
import { ThemeContext } from '../Context/ThemeContext'; // Import the ThemeContext

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext); // Consume ThemeContext

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Logo or Text on the left */}
        <Typography variant="h6" component="div">
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
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/contact">Contact</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/predict">Predict</Button>
        </Box>

        {/* Toggle Button (Sun/Moon Icon) at the Right */}
        <Box>
          <IconButton onClick={toggleTheme} color="inherit">
            {isDarkMode ? <WbSunny /> : <DarkMode />} {/* Switch between icons */}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
