import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registration from './registration';
import Login from './login';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
