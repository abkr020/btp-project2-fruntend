import React, { createContext, useState, useMemo, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Create a context for theme
export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  // Set initial dark mode to true
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Define light and dark themes
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDarkMode ? 'dark' : 'light',
          ...(isDarkMode
            ? {
                background: { default: '#121212', paper: '#333' }, // Dark mode background
                text: { primary: '#ffffff' }, // White text for dark mode
              }
            : {
                background: { default: '#ffffff', paper: '#f4f4f4' }, // Light mode background
                text: { primary: '#000000' }, // Black text for light mode
              }),
        },
        typography: {
          h5: {
            fontSize: '1.5rem', // Customize if needed
            color: isDarkMode ? '#ffffff' : '#000000', // Ensure h5 text is visible
          },
        },
      }),
    [isDarkMode]
  );

  // Set initial theme to dark mode when the component mounts
  useEffect(() => {
    document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]); // Run this effect when `isDarkMode` changes

  // Toggle function for dark/light mode
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    // Update the theme on toggle
    document.body.setAttribute('data-theme', !isDarkMode ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
