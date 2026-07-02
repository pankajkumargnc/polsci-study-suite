"use client";

import React, { useState, useEffect } from "react";
import { Bell, Calendar } from 'lucide-react';

export default function OnThisDay() {
  const [events, setEvents] = useState<{year: number, event: string}[]>([]);
  const [today, setToday] = useState("");

  useEffect(() => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric' };
    setToday(date.toLocaleDateString('en-US', options));
    
    // Dummy historical political events (would normally be fetched from an API)
    setEvents([
      { year: 1945, event: "The United Nations Charter was signed in San Francisco." },
      { year: 1975, event: "The Emergency was declared in India by Prime Minister Indira Gandhi." },
      { year: 1991, event: "The Warsaw Pact was officially dissolved." },
      { year: 2016, event: "The United Kingdom voted to leave the European Union (Brexit)." },
    ]);
  }, []);

  return (
    <div className="tab-pane active" style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
          <Calendar size={18} style={{ color: "#3b82f6", marginRight: "15px" }} /> 
          <span className="hi">आज के दिन (On This Day)</span>
          <span className="en">On This Day</span>
        </h2>
        <p style={{ fontSize: "1.2rem", color: "var(--text-secondary)" }}>Historical political events that happened on <strong>{today}</strong></p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {events.map((e, idx) => (
          <div key={idx} className="bento-card" style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <div style={{ fontSize: "2rem", fontWeight: "bold", color: "#3b82f6", minWidth: "100px", borderRight: "2px solid var(--border-color)", paddingRight: "20px", textAlign: "right" }}>
              {e.year}
            </div>
            <div style={{ fontSize: "1.2rem", color: "var(--text-primary)", lineHeight: "1.6" }}>
              {e.event}
            </div>
          </div>
        ))}
      </div>

      <div className="bento-card" style={{ marginTop: "40px", textAlign: "center", background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)", color: "white" }}>
        <h3 style={{ color: "white" }}><Bell size={18} /> Enable Notifications</h3>
        <p style={{ margin: "15px 0", color: "rgba(255,255,255,0.8)" }}>Get daily alerts for important historical political events right on your device.</p>
        <button 
          onClick={() => alert("Notification permission requested! (Demo)")} 
          style={{ background: "white", color: "#2563eb", padding: "12px 25px", borderRadius: "30px", border: "none", fontWeight: "bold", cursor: "pointer", boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}
        >
          Enable Push Notifications
        </button>
      </div>
    </div>
  );
}
