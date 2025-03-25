import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
  { quarter: "Q1", revenue: 2000000, target: 3000000 },
  { quarter: "Q2", revenue: 6000000, target: 5000000 },
  { quarter: "Q3", revenue: 4000000, target: 5500000 },
  { quarter: "Q4", revenue: 8000000, target: 7000000 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black text-white p-3 rounded-lg shadow-md">
        <p className="text-xs">{label}</p>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-4 bg-purple-500"></span>
          <p>Revenue: <span className="font-bold">${payload[0].value.toLocaleString()}</span></p>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-4 bg-yellow-500"></span>
          <p>Target: <span className="font-bold">${payload[1].value.toLocaleString()}</span></p>
        </div>
      </div>
    );
  }
  return null;
};

const SalesChart = () => {
  return (
    <div className="bg-white rounded-xl p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Analytic</h2>
        <button className="border px-3 py-1 rounded-md text-gray-600">Sales Estimation ▼</button>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="quarter" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Line type="monotone" dataKey="revenue" stroke="#8B5CF6" strokeWidth={2} />
          <Line type="monotone" dataKey="target" stroke="#FACC15" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;
