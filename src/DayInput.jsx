// src/DayInput.jsx
import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

export default function DayInput({ onProcessedDataChange }) {
  const [data, setData] = useState(Array(7).fill({ energyUsage: '', transportation: '', waste: '' }));
  const navigate = useNavigate();
  const handleChange = (day, field, value) => {
    const updatedData = [...data];
    updatedData[day] = { ...updatedData[day], [field]: value };
    setData(updatedData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert all data to numbers
    const processedData = data.map(dayData => ({
      energyUsage: parseFloat(dayData.energyUsage) || 0,
      transportation: parseFloat(dayData.transportation) || 0,
      waste: parseFloat(dayData.waste) || 0,
    }));

    // Save or log the data
    console.log('Data submitted:', processedData[4]);
    // Example: Save to localStorage (you can replace this with your actual saving mechanism)
    // localStorage.setItem('submittedData', JSON.stringify(processedData));

    // Call the callback to pass processedData to App
    onProcessedDataChange(processedData);
    navigate('/day-stats');
  };

  return (
    <form onSubmit={handleSubmit}>
      {data.map((dayData, index) => (
        <div key={index} className="day-input">
          <h3>Day {index + 1}</h3>
          <label>
            Total Energy Usage (kWh/day):
            <input
              type="number"
              value={dayData.energyUsage}
              onChange={(e) => handleChange(index, 'energyUsage', e.target.value)}
            />
          </label>
          <br />
          <label>
            Transportation Miles (miles/day):
            <input
              type="number"
              value={dayData.transportation}
              onChange={(e) => handleChange(index, 'transportation', e.target.value)}
            />
          </label>
          <br />
          <label>
            Waste Production (kg/day):
            <input
              type="number"
              value={dayData.waste}
              onChange={(e) => handleChange(index, 'waste', e.target.value)}
            />
          </label>
          <br />
          <hr />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}