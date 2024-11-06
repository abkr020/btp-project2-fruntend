import React, { useState } from 'react';
import '../styles/WaitTimeForm.css';

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
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Arrival Time:</label>
                    <input
                        type="text"
                        name="arrivalTime"
                        value={features.arrivalTime}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Department:</label>
                    <input
                        type="text"
                        name="department"
                        value={features.department}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Doctors Available:</label>
                    <input
                        type="text"
                        name="doctorsAvailable"
                        value={features.doctorsAvailable}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? 'Predicting...' : 'Predict Wait Time'}
                </button>
            </form>
            {/* {waitTime !== null && <p className="result-text">Predicted Wait Time: {waitTime} minutes</p>} */}
            {waitTime !== null && (
                <div className="result-text">
                    <div><strong>For the input options:</strong></div>
                    <div><span className="highlighted-time">{waitTime} minutes</span></div>
                </div>
            )}
            
        </div>
    );
}

export default WaitTimeForm;
