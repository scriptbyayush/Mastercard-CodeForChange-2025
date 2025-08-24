// src/components/Reports.jsx
import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

export default function Reports({ feedbackData }) {
  const [range, setRange] = useState("all");

  // For now, dummy report data
  const reportData = feedbackData.map((f, idx) => ({
    id: idx + 1,
    trees: f.trees,
    rating: f.rating,
  }));

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Reports & Analytics</h2>

      {/* Filters */}
      <div className="flex space-x-4 mb-4">
        <select
          className="border p-2 rounded"
          value={range}
          onChange={(e) => setRange(e.target.value)}
        >
          <option value="all">All Time</option>
          <option value="week">This Week</option>
          <option value="month">This Month</option>
        </select>
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Download Report
        </button>
      </div>

      {/* Chart */}
      <LineChart width={500} height={300} data={reportData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="id" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="trees" stroke="#4CAF50" />
        <Line type="monotone" dataKey="rating" stroke="#2196F3" />
      </LineChart>
    </div>
  );
}
