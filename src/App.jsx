// src/App.jsx
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import {useNavigate } from 'react-router-dom';
import DayInput from './DayInput';
import DayStats from './DayStats'; // New component for displaying day stats
import Graph from './Graph'; 

function Home() {
  const navigate = useNavigate();
  const handleImageClick=()=>{
    navigate('/day-input');
  }
  return (
    <div className= "themiddle">
      <h2>Welcome to the Home Page</h2>
      <h3>How to use this  app:</h3>
      <div>1. Press the foot to move into the "Day Input" section</div> 
      <div>2. Input your data into the "Day Input" section(make sure to submit)    </div>
      <div>3. Move to the "Day Stats" section and select a day </div>
      <div>4. View your carbon footprint</div>
      <div>5. View your weekly progress through the graph</div>
      <div>6      . Implement our tips and help save the world step by step! </div>
      <div>
      </div>
      <img className="thefoot" src= "TheFoot.png" alt = "TheFoot" onClick= {(handleImageClick)} />
    </div>)
}

export default function App() {
  const [processedData, setProcessedData] = React.useState([]);

  return (
    <Router>
      <nav>
        <ul>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/day-input">Day Input</Link>
          </div>
          <div>
            <Link to="/day-stats">Day Stats</Link>
          </div>
          <div>
            <Link to="/graph">Graph</Link>
          </div>
          
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/day-input" element={<DayInput onProcessedDataChange={setProcessedData} />} />
        <Route path="/day-stats" element={<DayStats processedData={processedData} />} />
        <Route path="/graph" element={<Graph processedData={processedData} />} />
      </Routes>
    </Router>
  );
}