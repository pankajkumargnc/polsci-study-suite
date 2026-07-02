"use client";

import React, { useState, useEffect } from "react";
import { Headphones, ListTodo, Pause, Play, RotateCcw } from 'lucide-react';

export default function StudyHub() {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState<"Work" | "Break">("Work");
  const [tasks, setTasks] = useState<{id: number, text: string, done: boolean}[]>([
    { id: 1, text: "Read Chapter 1: Political Theory", done: false },
    { id: 2, text: "Complete PYQ 2021", done: false }
  ]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      if (mode === "Work") {
        setMode("Break");
        setTimeLeft(5 * 60); // 5 min break
      } else {
        setMode("Work");
        setTimeLeft(25 * 60);
      }
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft, mode]);

  const toggleTimer = () => setIsRunning(!isRunning);
  
  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(mode === "Work" ? 25 * 60 : 5 * 60);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, done: false }]);
      setNewTask("");
    }
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  return (
    <div className="tab-pane active" style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: "20px" }}>
        <Headphones size={18} style={{ color: "#14b8a6", marginRight: "10px" }} /> 
        <span className="hi">स्टडी हब (Pomodoro)</span>
        <span className="en">Study Hub (Pomodoro)</span>
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
        {/* Timer Section */}
        <div className="bento-card" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 20px" }}>
          <h3 style={{ color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "10px" }}>{mode} Mode</h3>
          <div style={{ fontSize: "5rem", fontWeight: "bold", fontFamily: "monospace", color: "var(--text-primary)" }}>
            {formatTime(timeLeft)}
          </div>
          <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
            <button onClick={toggleTimer} className="bento-primary-cta" style={{ width: "120px" }}>
              {isRunning ? <><Pause size={18} /> Pause</> : <><Play size={18} /> Start</>}
            </button>
            <button onClick={resetTimer} className="control-btn" style={{ padding: "10px 20px", borderRadius: "10px", background: "var(--bg-secondary)", border: "1px solid var(--border-color)", cursor: "pointer" }}>
              <RotateCcw size={18} /> Reset
            </button>
          </div>
        </div>

        {/* Lofi Player Section */}
        <div className="bento-card" style={{ padding: "0", overflow: "hidden" }}>
          <iframe 
            width="100%" 
            height="100%" 
            style={{ minHeight: "250px", border: "none" }}
            src="https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=0" 
            title="Lofi Hip Hop Radio" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>

        {/* Tasks Section */}
        <div className="bento-card bento-span-12" style={{ padding: "20px" }}>
          <h3><ListTodo size={18} /> Study Goals</h3>
          <form onSubmit={addTask} style={{ display: "flex", gap: "10px", marginTop: "15px", marginBottom: "20px" }}>
            <input 
              type="text" 
              value={newTask} 
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="What are you working on?" 
              style={{ flex: 1, padding: "10px", borderRadius: "10px", border: "1px solid var(--border-color)", background: "var(--bg-secondary)", color: "var(--text-primary)" }}
            />
            <button type="submit" className="bento-primary-cta" style={{ padding: "10px 20px" }}>Add</button>
          </form>

          <ul style={{ listStyle: "none", padding: 0 }}>
            {tasks.map(t => (
              <li key={t.id} style={{ display: "flex", alignItems: "center", gap: "15px", padding: "10px 0", borderBottom: "1px solid var(--border-color)" }}>
                <input 
                  type="checkbox" 
                  checked={t.done} 
                  onChange={() => toggleTask(t.id)} 
                  style={{ width: "20px", height: "20px", cursor: "pointer" }}
                />
                <span style={{ fontSize: "1.1rem", textDecoration: t.done ? "line-through" : "none", color: t.done ? "var(--text-secondary)" : "var(--text-primary)" }}>
                  {t.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
