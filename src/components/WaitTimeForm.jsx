import React, { useState } from 'react';
import { TextField, Button, CircularProgress, Typography, Box, FormControlLabel, Checkbox } from '@mui/material';
import '../styles/WaitTimeForm.css'; // Import the CSS file

function WaitTimeForm() {
    const [features, setFeatures] = useState({
        arrivalTime: '',
        department: '',
        doctorsAvailable: '',
        consultationRevenue: '',
        CT_hour: '',
        ET_hour: '',
        doctorTypeFloating: false,
        doctorTypeLocum: false,
        financialClassHMO: false,
        financialClassInsurance: false,
        financialClassMedicare: false,
        financialClassPrivate: false,
    });
    const [waitTime, setWaitTime] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFeatures({
            ...features,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Convert boolean values to 0 or 1
        const transformedFeatures = {
            ...features,
            doctorTypeFloating: features.doctorTypeFloating ? 1 : 0,
            doctorTypeLocum: features.doctorTypeLocum ? 1 : 0,
            financialClassHMO: features.financialClassHMO ? 1 : 0,
            financialClassInsurance: features.financialClassInsurance ? 1 : 0,
            financialClassMedicare: features.financialClassMedicare ? 1 : 0,
            financialClassPrivate: features.financialClassPrivate ? 1 : 0,
        };

        try {
            const response = await fetch('http://localhost:3000/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(transformedFeatures),
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
        <Box className="form-container">
            <form onSubmit={handleSubmit}>
                <Typography variant="h5" component="h2" gutterBottom>
                    Predict Wait Time
                </Typography>

                {/* <TextField
                    label="Arrival Time"
                    variant="outlined"
                    name="arrivalTime"
                    value={features.arrivalTime}
                    onChange={handleChange}
                    fullWidth
                    required
                    margin="normal"
                /> */}

                {/* <TextField
                    label="Department"
                    variant="outlined"
                    name="department"
                    value={features.department}
                    onChange={handleChange}
                    fullWidth
                    required
                    margin="normal"
                /> */}

                {/* <TextField
                    label="Doctors Available"
                    variant="outlined"
                    name="doctorsAvailable"
                    value={features.doctorsAvailable}
                    onChange={handleChange}
                    fullWidth
                    required
                    margin="normal"
                /> */}

                <TextField
                    label="Consultation Revenue"
                    variant="outlined"
                    name="consultationRevenue"
                    type="number"
                    value={features.consultationRevenue}
                    onChange={handleChange}
                    fullWidth
                    required
                    margin="normal"
                />

                <TextField
                    label="Entry Time (ET_hour)"
                    variant="outlined"
                    name="ET_hour"
                    type="number"
                    value={features.ET_hour}
                    onChange={handleChange}
                    fullWidth
                    required
                    margin="normal"
                />
                <TextField
                    label="Completion Time (CT_hour)"
                    variant="outlined"
                    name="CT_hour"
                    type="number"
                    value={features.CT_hour}
                    onChange={handleChange}
                    fullWidth
                    required
                    margin="normal"
                />


                <Typography className='doctor-type' variant="h6" mt={2}>
                    Doctor Types
                </Typography>
                <FormControlLabel
                    control={
                        <Checkbox
                            name="doctorTypeFloating"
                            checked={features.doctorTypeFloating}
                            onChange={handleChange}
                        />
                    }
                    label="Floating Doctor"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            name="doctorTypeLocum"
                            checked={features.doctorTypeLocum}
                            onChange={handleChange}
                        />
                    }
                    label="Locum Doctor"
                />

                <Typography className='financial-classes' variant="h6" mt={2}>
                    Financial Classes
                </Typography>
                <FormControlLabel
                    control={
                        <Checkbox
                            name="financialClassHMO"
                            checked={features.financialClassHMO}
                            onChange={handleChange}
                        />
                    }
                    label="HMO"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            name="financialClassInsurance"
                            checked={features.financialClassInsurance}
                            onChange={handleChange}
                        />
                    }
                    label="Insurance"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            name="financialClassMedicare"
                            checked={features.financialClassMedicare}
                            onChange={handleChange}
                        />
                    }
                    label="Medicare"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            name="financialClassPrivate"
                            checked={features.financialClassPrivate}
                            onChange={handleChange}
                        />
                    }
                    label="Private"
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
