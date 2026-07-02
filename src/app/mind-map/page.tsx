"use client";

import React, { useState } from "react";
import { Network } from 'lucide-react';

export default function MindMap() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="tab-pane active" style={{ padding: "20px", minHeight: "80vh" }}>
      <h2 style={{ marginBottom: "30px" }}>
        <Network size={18} style={{ color: "#ec4899", marginRight: "10px" }} /> 
        <span className="hi">इंटरैक्टिव माइंड मैप</span>
        <span className="en">Interactive Concept Mind Map</span>
      </h2>
      
      <div className="glass-card bento-card" style={{ textAlign: "center", padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ marginBottom: "40px", color: "var(--text-secondary)" }}>
          <span className="hi">विस्तार करने के लिए रूट नोड पर क्लिक करें!</span>
          <span className="en">Click the root node to expand!</span>
        </p>

        {/* Root Node */}
        <div 
          onClick={() => setExpanded(!expanded)}
          style={{ 
            display: "inline-block", padding: "15px 40px", background: "linear-gradient(135deg, #ec4899, #f43f5e)", 
            color: "white", borderRadius: "30px", fontWeight: "bold", fontSize: "1.3rem", 
            cursor: "pointer", boxShadow: "0 10px 25px rgba(236,72,153,0.4)",
            transition: "transform 0.3s", transform: expanded ? "scale(1.1)" : "scale(1)"
          }}
        >
          Marxism
        </div>

        {/* Child Nodes */}
        <div 
          style={{ 
            display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px", marginTop: "40px", 
            opacity: expanded ? "1" : "0", 
            transform: expanded ? "translateY(0)" : "translateY(-20px)",
            visibility: expanded ? "visible" : "hidden",
            transition: "all 0.5s ease" 
          }}
        >
          <div style={{ padding: "15px 25px", background: "var(--bg-secondary)", border: "2px solid #ec4899", color: "var(--text-primary)", borderRadius: "20px", fontWeight: "bold", boxShadow: "0 5px 15px rgba(0,0,0,0.05)" }}>
            Class Struggle
          </div>
          <div style={{ padding: "15px 25px", background: "var(--bg-secondary)", border: "2px solid #ec4899", color: "var(--text-primary)", borderRadius: "20px", fontWeight: "bold", boxShadow: "0 5px 15px rgba(0,0,0,0.05)" }}>
            Surplus Value
          </div>
          <div style={{ padding: "15px 25px", background: "var(--bg-secondary)", border: "2px solid #ec4899", color: "var(--text-primary)", borderRadius: "20px", fontWeight: "bold", boxShadow: "0 5px 15px rgba(0,0,0,0.05)" }}>
            Historical Materialism
          </div>
        </div>
      </div>
    </div>
  );
}