// src/components/WaitTimeFormStyles.js

export const formContainerStyles = {
    padding: 3,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
};

export const formStyles = {
    width: '100%',
    maxWidth: 400,
};

export const buttonContainerStyles = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 2,
};

export const buttonStyles = {
    maxWidth: 200,
};

export const resultBoxStyles = {
    mt: 3,
    p: 2,
    borderRadius: 1,
    textAlign: 'center',
    bgcolor: 'background.paper',
};

// Add a style for TextField to handle dark mode
export const textFieldStyles = (isDarkMode) => ({
    input: {
        color: isDarkMode ? '#ffffff' : '#000000',  // Text color
        backgroundColor: isDarkMode ? '#333333' : '#ffffff',  // Background color
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: isDarkMode ? '#ffffff' : '#000000',  // Border color
        },
        '&:hover fieldset': {
            borderColor: isDarkMode ? '#bbbbbb' : '#333333',  // Border color on hover
        },
        '&.Mui-focused fieldset': {
            borderColor: isDarkMode ? '#ffffff' : '#000000',  // Border color on focus
        },
    },
});
