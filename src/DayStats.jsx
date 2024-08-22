// src/DayStats.jsx
import React, { useState } from 'react';

export default function DayStats({ processedData }) {
  const [selectedDay, setSelectedDay] = useState(null);

  const handleDayChange = (event) => {
    setSelectedDay(parseInt(event.target.value) - 1);
  };

  const getEnergyUsageRating = (energyUsage) => {
    const usage = energyUsage * 0.86;
    if (usage < 20) return 'Low';
    if (usage > 40) return 'High';
    return 'Moderate';
  };

  const getTransportationRating = (transportation) => {
    const transport = transportation * 0.4;
    if (transport < 15) return 'Low';
    if (transport > 30) return 'High';
    return 'Moderate';
  };

  const getWasteRating = (waste) => {
    const wasteAmount = waste * 1.2;
    if (wasteAmount < 0.5) return 'Low';
    if (wasteAmount > 1) return 'High';
    return 'Moderate';
  };
  const getTotalRating = (waste, transportation, energyUsage) => {
    const totalamount = (waste * 1.2)+ (transportation*.4) + (energyUsage * 0.86);
    if (totalamount < 35) return 'Low';
    if (totalamount > 70) return 'High';
    return 'Moderate';
  };

  const getColorForRating = (rating) => {
    if (rating === 'Low') return 'green';
    if (rating === 'Moderate') return 'orange';
    return 'red';
  };

  return (
    <div>
      <div className = 'key'>
        <div>KEY</div>
        <div className = "bad">BAD</div>
        <div className = 'mod'>MODERATE</div>
        <div className = 'good'>GOOD</div>
      </div>
      
      <div className = "droppy">
        <h2>
          What day do you want?
          <div></div>
          <select value={selectedDay !== null ? selectedDay + 1 : ""} onChange={handleDayChange}>
            <option value="">Select a day</option>
            <option value="1">Day 1</option>
            <option value="2">Day 2</option>
            <option value="3">Day 3</option>
            <option value="4">Day 4</option>
            <option value="5">Day 5</option>
            <option value="6">Day 6</option>
            <option value="7">Day 7</option>
          </select>
        </h2>
      </div>

      {selectedDay !== null && processedData.length > 0 && (
        <div>
          <h2 className = "three">Day {selectedDay + 1} Footprint Stats</h2>
          <p>
            <span style={{ color: getColorForRating(getEnergyUsageRating(processedData[selectedDay].energyUsage)) }}>
              Energy Usage: {(processedData[selectedDay].energyUsage * 0.86).toFixed(2)}   
            </span>
          </p>
          <p>
            <span style={{ color: getColorForRating(getTransportationRating(processedData[selectedDay].transportation)) }}>
              Transportation: {(processedData[selectedDay].transportation * 0.4).toFixed(2)}   
            </span>
          </p>
          <p>
            <span style={{ color: getColorForRating(getWasteRating(processedData[selectedDay].waste)) }}>
              Waste: {(processedData[selectedDay].waste * 1.2).toFixed(2)}  
            </span>
          </p>
          <p>
            <span style={{ color: getColorForRating(getTotalRating(processedData[selectedDay].waste,processedData[selectedDay].transportation, processedData[selectedDay].energyUsage)) }}>
              Total: {(processedData[selectedDay].waste * 1.2+processedData[selectedDay].energyUsage * .86 +processedData[selectedDay].transportation * .4).toFixed(2)}  
            </span>
          </p>
        </div>
      )}
    </div>
  );
}
