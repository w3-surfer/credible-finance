import React from 'react';
import { PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { FiTrendingUp, FiPieChart } from 'react-icons/fi';

const scoreData = [
  { month: 'Jan', score: 650 },
  { month: 'Feb', score: 680 },
  { month: 'Mar', score: 720 },
  { month: 'Apr', score: 750 },
  { month: 'May', score: 780 },
  { month: 'Jun', score: 800 },
];

const creditDistribution = [
  { name: 'Cards', value: 40, color: '#B9E605' },
  { name: 'Loans', value: 30, color: '#9BCA05' },
  { name: 'Investments', value: 20, color: '#7DAE05' },
  { name: 'Others', value: 10, color: '#5F9205' },
];

const COLORS = ['#B9E605', '#9BCA05', '#7DAE05', '#5F9205'];

export const Charts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Area Chart - Score Evolution */}
      <div className="bg-cyber-gray-200 rounded-lg p-6 border border-cyber-green/20 hover:border-cyber-green transition-all duration-300">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-[#B9E605]">Score Evolution</h3>
          <FiTrendingUp className="w-6 h-6 text-[#B9E605]" />
        </div>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={scoreData}>
              <defs>
                <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#B9E605" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#B9E605" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis 
                dataKey="month" 
                stroke="#9CA3AF"
                tick={{ fill: '#9CA3AF' }}
              />
              <YAxis 
                stroke="#9CA3AF"
                tick={{ fill: '#9CA3AF' }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1a1a1a', 
                  border: '1px solid #B9E605',
                  borderRadius: '8px',
                  color: '#fff'
                }}
                labelStyle={{ color: '#B9E605' }}
              />
              <Area
                type="monotone"
                dataKey="score"
                stroke="#B9E605"
                fillOpacity={1}
                fill="url(#colorScore)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Pie Chart - Credit Distribution */}
      <div className="bg-cyber-gray-200 rounded-lg p-6 border border-cyber-green/20 hover:border-cyber-green transition-all duration-300">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-[#B9E605]">Credit Distribution</h3>
          <FiPieChart className="w-6 h-6 text-[#B9E605]" />
        </div>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={creditDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {creditDistribution.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1a1a1a', 
                  border: '1px solid #B9E605',
                  borderRadius: '8px',
                  color: '#fff'
                }}
                labelStyle={{ color: '#B9E605' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}; 