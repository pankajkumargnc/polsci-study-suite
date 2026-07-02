"use client";

import React, { useState } from "react";
import { Compass } from 'lucide-react';

export default function PoliticalCompass() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState({ econ: 0, social: 0 });
  const [showResult, setShowResult] = useState(false);

  const questions = [
    { text: "The government should control major industries.", axis: "econ", weight: -1 },
    { text: "Free speech should be absolute, even if it offends people.", axis: "social", weight: -1 },
    { text: "Taxes on the wealthy should be significantly increased.", axis: "econ", weight: -1 },
    { text: "Traditional values are essential for a stable society.", axis: "social", weight: 1 },
  ];

  const handleAnswer = (multiplier: number) => {
    const q = questions[step];
    setScore(prev => ({
      ...prev,
      [q.axis]: prev[q.axis as keyof typeof prev] + (q.weight * multiplier)
    }));

    if (step < questions.length - 1) {
      setStep(prev => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const getResult = () => {
    if (score.econ < 0 && score.social < 0) return "Libertarian Left (Democratic Socialism)";
    if (score.econ < 0 && score.social > 0) return "Authoritarian Left (Communism)";
    if (score.econ > 0 && score.social < 0) return "Libertarian Right (Laissez-faire)";
    if (score.econ > 0 && score.social > 0) return "Authoritarian Right (Conservatism/Fascism)";
    return "Centrist (Moderate)";
  };

  return (
    <div className="tab-pane active" style={{ padding: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h2 style={{ marginBottom: "20px" }}>
        <Compass size={18} style={{ color: "#f43f5e", marginRight: "10px" }} /> 
        <span className="hi">पॉलिटिकल कंपास टेस्ट</span>
        <span className="en">Political Compass Test</span>
      </h2>

      {!showResult ? (
        <div className="bento-card" style={{ maxWidth: "600px", width: "100%", textAlign: "center", padding: "40px 20px" }}>
          <div style={{ marginBottom: "20px", color: "var(--text-secondary)", fontWeight: "bold" }}>
            Question {step + 1} of {questions.length}
          </div>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "40px", color: "var(--text-primary)" }}>
            {questions[step].text}
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <button className="bento-primary-cta" style={{ background: "#10b981" }} onClick={() => handleAnswer(2)}>Strongly Agree</button>
            <button className="bento-primary-cta" style={{ background: "#34d399", color: "#064e3b" }} onClick={() => handleAnswer(1)}>Agree</button>
            <button className="bento-primary-cta" style={{ background: "#f87171", color: "#7f1d1d" }} onClick={() => handleAnswer(-1)}>Disagree</button>
            <button className="bento-primary-cta" style={{ background: "#ef4444" }} onClick={() => handleAnswer(-2)}>Strongly Disagree</button>
          </div>
        </div>
      ) : (
        <div className="bento-card" style={{ maxWidth: "600px", width: "100%", textAlign: "center", padding: "40px 20px" }}>
          <h3 style={{ fontSize: "2rem", marginBottom: "20px", color: "var(--text-primary)" }}>Your Result</h3>
          <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#3b82f6", marginBottom: "30px", padding: "20px", background: "var(--bg-secondary)", borderRadius: "10px" }}>
            {getResult()}
          </div>
          
          <div style={{ position: "relative", width: "300px", height: "300px", margin: "0 auto", background: "#f1f5f9", borderRadius: "10px", border: "2px solid #cbd5e1" }}>
            {/* Grid Lines */}
            <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: "2px", background: "#94a3b8" }}></div>
            <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: "2px", background: "#94a3b8" }}></div>
            {/* Labels */}
            <span style={{ position: "absolute", top: "5px", left: "50%", transform: "translateX(-50%)", fontSize: "0.8rem", color: "#64748b" }}>AUTHORITARIAN</span>
            <span style={{ position: "absolute", bottom: "5px", left: "50%", transform: "translateX(-50%)", fontSize: "0.8rem", color: "#64748b" }}>LIBERTARIAN</span>
            <span style={{ position: "absolute", left: "5px", top: "50%", transform: "translateY(-50%)", fontSize: "0.8rem", color: "#64748b" }}>LEFT</span>
            <span style={{ position: "absolute", right: "5px", top: "50%", transform: "translateY(-50%)", fontSize: "0.8rem", color: "#64748b" }}>RIGHT</span>
            
            {/* Point */}
            <div style={{ 
              position: "absolute", 
              width: "15px", height: "15px", background: "#ef4444", borderRadius: "50%",
              top: `calc(50% + ${score.social * 15}%)`,
              left: `calc(50% + ${score.econ * 15}%)`,
              transform: "translate(-50%, -50%)",
              boxShadow: "0 0 10px rgba(239, 68, 68, 0.5)"
            }}></div>
          </div>

          <button className="bento-primary-cta" style={{ marginTop: "40px" }} onClick={() => { setStep(0); setScore({econ: 0, social: 0}); setShowResult(false); }}>Retake Test</button>
        </div>
      )}
    </div>
  );
}
