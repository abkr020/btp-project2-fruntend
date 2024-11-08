import React, { useState } from 'react';
import { Box, TextField, Button, Typography, CircularProgress } from '@mui/material';

function WaitTimeForm() {
    const [features, setFeatures] = useState({
        arrivalTime: '',
        department: '',
        doctorsAvailable: '',
    });
    const [waitTime, setWaitTime] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFeatures({
            ...features,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch('https://btp-project2-backend-1.onrender.com/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(features),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setWaitTime(data.wait_time);
        } catch (error) {
            console.error('Error fetching wait time:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box 
            sx={{ 
                padding: 3, 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                backgroundColor: 'background.default',  // Use theme background color
                minHeight: '100vh'  // Ensure full screen height for proper visibility
            }}
        >
            <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: 400 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                    Predict Wait Time
                </Typography>

                <TextField
                    label="Arrival Time"
                    variant="outlined"
                    name="arrivalTime"
                    value={features.arrivalTime}
                    onChange={handleChange}
                    fullWidth
                    required
                    margin="normal"
                />

                <TextField
                    label="Department"
                    variant="outlined"
                    name="department"
                    value={features.department}
                    onChange={handleChange}
                    fullWidth
                    required
                    margin="normal"
                />

                <TextField
                    label="Doctors Available"
                    variant="outlined"
                    name="doctorsAvailable"
                    value={features.doctorsAvailable}
                    onChange={handleChange}
                    fullWidth
                    required
                    margin="normal"
                />

                <Box display="flex" justifyContent="center" marginTop={2}>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={loading}
                        fullWidth
                        sx={{ maxWidth: 200 }}
                    >
                        {loading ? <CircularProgress size={24} color="inherit" /> : 'Predict Wait Time'}
                    </Button>
                </Box>
            </form>

            {waitTime !== null && (
                <Box className="result-text" mt={3} p={2} borderRadius={1} textAlign="center" bgcolor="background.paper">
                    <Typography variant="h6">Predicted Wait Time</Typography>
                    <Typography variant="body1">
                        For the input options:
                    </Typography>
                    <Typography variant="h4" color="secondary" mt={1}>
                        {waitTime} minutes
                    </Typography>
                </Box>
            )}
        </Box>
    );
}

export default WaitTimeForm;
