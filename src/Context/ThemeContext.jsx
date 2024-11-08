import React, { createContext, useState, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Create a context for theme
export const ThemeContext = createContext();

const ThemeContextProvider = ({ children = null }) => {
  const [isDarkMode, setIsDarkMode] = useState(false); // Default light mode

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

  // Toggle function for dark/light mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.setAttribute('data-theme', isDarkMode ? 'light' : 'dark');
  };
  

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
