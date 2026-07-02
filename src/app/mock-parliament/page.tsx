"use client";

import React, { useState } from "react";
import { Landmark } from 'lucide-react';

export default function MockParliament() {
  const [scenario, setScenario] = useState("Crisis: Severe Economic Inflation!");
  const [desc, setDesc] = useState("Prices are skyrocketing. The public is angry. As the Chief Policy Advisor, what do you recommend?");
  const [result, setResult] = useState("");
  const [stage, setStage] = useState(1);

  const playSim = (choice: string) => {
    if (stage === 1) {
      if (choice === 'keynes') {
        setResult("📉 Inflation rises further! The public is protesting. You need to control money supply.");
      } else {
        setResult("✅ Inflation drops, but unemployment rises slightly. A balanced approach worked!");
      }
      setStage(2);
      setTimeout(() => {
        setScenario("Foreign Policy Crisis: Border Skirmish");
        setDesc("A neighboring country has mobilized troops. Do you use hard power or soft power?");
        setResult("");
      }, 3000);
    } else if (stage === 2) {
      if (choice === 'hard') {
        setResult("⚔️ War breaks out! Economy crashes. Game Over.");
      } else {
        setResult("🕊️ Diplomatic victory! Trade resumes. You are a successful statesman!");
      }
      setStage(3);
    }
  };

  return (
    <div className="tab-pane active" style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: "20px" }}>
        <Landmark size={18} style={{ color: "#8b5cf6", marginRight: "10px" }} /> 
        <span className="hi">मॉक पार्लियामेंट (Policy Simulator)</span>
        <span className="en">Mock Parliament</span>
      </h2>

      <div className="glass-card" style={{ padding: "40px 30px", textAlign: "center", maxWidth: "600px", margin: "0 auto", background: "var(--card-bg)" }}>
        <h3 style={{ color: "#ef4444", marginBottom: "20px", fontSize: "1.5rem" }}>{scenario}</h3>
        <p style={{ fontSize: "1.1rem", marginBottom: "30px", color: "var(--text-primary)" }}>{desc}</p>
        
        {stage === 1 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <button className="bento-primary-cta" onClick={() => playSim('keynes')}>Option A: Increase Government Spending (Keynesian)</button>
            <button className="bento-primary-cta" style={{ background: "var(--bg-secondary)", color: "var(--text-primary)", border: "1px solid var(--border-color)" }} onClick={() => playSim('monetarist')}>Option B: Raise Interest Rates (Monetarist)</button>
          </div>
        )}

        {stage === 2 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <button className="bento-primary-cta" style={{ background: "#ef4444" }} onClick={() => playSim('hard')}>Option A: Military Retaliation (Hard Power)</button>
            <button className="bento-primary-cta" style={{ background: "#10b981" }} onClick={() => playSim('soft')}>Option B: Sanctions & Talks (Soft Power)</button>
          </div>
        )}

        {stage === 3 && (
          <div style={{ marginTop: "20px" }}>
            <button className="bento-primary-cta" onClick={() => { setStage(1); setResult(""); setScenario("Crisis: Severe Economic Inflation!"); setDesc("Prices are skyrocketing. The public is angry. As the Chief Policy Advisor, what do you recommend?"); }}>Play Again</button>
          </div>
        )}

        {result && (
          <div style={{ marginTop: "30px", padding: "20px", background: "var(--bg-secondary)", borderRadius: "10px", fontWeight: "bold", fontSize: "1.2rem", color: "var(--text-primary)" }}>
            {result}
          </div>
        )}
      </div>
    </div>
  );
}
