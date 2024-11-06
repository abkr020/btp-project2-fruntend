// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './pages/Navbar';
import WaitTimeForm from './components/WaitTimeForm';
import About from './pages/About';
import Home from './pages/Home';
// import About from './pages/About';
// import Predict from './pages/Predict';
import Greeting from './Greeting./Greeting';

function App() {
    return (
        <Router>
            <Navbar />
            <div className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/predict" element={<WaitTimeForm />} />
                    <Route path="/greeting" element={<Greeting />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
