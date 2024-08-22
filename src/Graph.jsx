// src/Graph.jsx
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export default function Graph({ processedData }) {
  // Prepare data for the chart
  const chartData = processedData.map((dayData, index) => ({
    day: `Day ${index + 1}`,
    energyUsage: (dayData.energyUsage * 0.86).toFixed(2),
    transportation: (dayData.transportation * 0.4).toFixed(2),
    waste: (dayData.waste * 1.2).toFixed(2),
    total: (dayData.energyUsage * 0.86 + dayData.transportation * 0.4 + dayData.waste * 1.2).toFixed(2)
  }));

  return (
    <div style={{ width: '100%', height: 400 }}>
      <h3>7-Day Footprint Graph</h3>
      <ResponsiveContainer>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="energyUsage" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="transportation" stroke="#82ca9d" />
          <Line type="monotone" dataKey="waste" stroke="#ffc658" />
          <Line type="monotone" dataKey="total" stroke="#f02215" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
