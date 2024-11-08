import React, { createContext, useState, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Create a context for theme
export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Define light and dark themes
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDarkMode ? 'dark' : 'light',
          ...(isDarkMode
            ? {
                background: { default: '#121212', paper: '#1d1d1d' }, // Dark mode background
                text: { primary: '#ffffff' },
              }
            : {
                background: { default: '#ffffff', paper: '#f4f4f4' }, // Light mode background
                text: { primary: '#000000' },
              }),
        },
      }),
    [isDarkMode]
  );
  

  // Toggle function for dark/light mode
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
