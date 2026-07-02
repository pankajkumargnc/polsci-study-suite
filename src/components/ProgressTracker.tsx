"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Target, TrendingUp, Award } from 'lucide-react';
import { useTheme } from 'next-themes';

interface ProgressData {
  sem1: number;
  sem2: number;
  sem3: number;
  sem4: number;
  overall: number;
}

const defaultProgress: ProgressData = {
  sem1: 65,
  sem2: 30,
  sem3: 0,
  sem4: 0,
  overall: 24,
};

export default function ProgressTracker() {
  const [progress, setProgress] = useState<ProgressData>(defaultProgress);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("bbmku_progress");
    if (saved) {
      try {
        setProgress(JSON.parse(saved));
      } catch (e) {
        console.error("Invalid progress data", e);
      }
    } else {
      localStorage.setItem("bbmku_progress", JSON.stringify(defaultProgress));
    }
  }, []);

  if (!mounted) return null;

  const barData = [
    { name: 'Sem I', completed: progress.sem1 },
    { name: 'Sem II', completed: progress.sem2 },
    { name: 'Sem III', completed: progress.sem3 },
    { name: 'Sem IV', completed: progress.sem4 },
  ];

  const pieData = [
    { name: 'Completed', value: progress.overall },
    { name: 'Remaining', value: 100 - progress.overall },
  ];

  const COLORS = ['#10b981', resolvedTheme === 'dark' ? '#334155' : '#e2e8f0'];
  const textColor = resolvedTheme === 'dark' ? '#f8fafc' : '#0f172a';
  const gridColor = resolvedTheme === 'dark' ? '#334155' : '#e2e8f0';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10"
    >
      {/* Overall Progress Donut */}
      <div className="ultra-pro-card flex flex-col items-center justify-center p-6 lg:col-span-1">
        <div className="flex items-center gap-2 mb-2 w-full justify-start">
          <Target className="text-indigo-500" size={24} />
          <h3 className="text-xl font-bold">
            <span className="hi">कुल प्रगति</span>
            <span className="en">Overall Progress</span>
          </h3>
        </div>
        <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 w-full text-left">
          Your master's degree journey
        </p>

        <div className="relative w-full h-[220px] flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={65}
                outerRadius={90}
                paddingAngle={2}
                dataKey="value"
                stroke="none"
                cornerRadius={5}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  borderRadius: '12px', 
                  border: 'none', 
                  background: resolvedTheme === 'dark' ? '#1e293b' : '#ffffff',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  color: textColor
                }} 
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-3xl font-extrabold text-emerald-500">{progress.overall}%</span>
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-widest mt-1">Done</span>
          </div>
        </div>
      </div>

      {/* Semester Breakdown Bar Chart */}
      <div className="ultra-pro-card flex flex-col p-6 lg:col-span-2">
        <div className="flex justify-between items-start mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="text-rose-500" size={24} />
              <h3 className="text-xl font-bold">
                <span className="hi">सेमेस्टर वाइज ट्रैकर</span>
                <span className="en">Semester Breakdown</span>
              </h3>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Syllabus coverage across all semesters
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 bg-rose-500/10 text-rose-500 px-3 py-1.5 rounded-full text-xs font-bold">
            <Award size={14} /> Focus on Sem I
          </div>
        </div>

        <div className="w-full h-[200px] mt-auto">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: textColor, fontSize: 12, fontWeight: 500 }} 
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: textColor, fontSize: 12 }} 
                domain={[0, 100]} 
                ticks={[0, 50, 100]}
              />
              <Tooltip 
                cursor={{ fill: resolvedTheme === 'dark' ? '#334155' : '#f1f5f9' }}
                contentStyle={{ 
                  borderRadius: '12px', 
                  border: 'none', 
                  background: resolvedTheme === 'dark' ? '#1e293b' : '#ffffff',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  color: textColor
                }}
                formatter={(value: any) => [`${value}%`, 'Completed']}
              />
              <Bar 
                dataKey="completed" 
                fill="#4f46e5" 
                radius={[6, 6, 6, 6]}
                barSize={32}
              >
                {barData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.completed > 75 ? '#10b981' : entry.completed > 40 ? '#4f46e5' : '#f59e0b'} 
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </motion.div>
  );
}
