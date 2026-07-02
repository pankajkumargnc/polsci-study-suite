"use client";

import React, { useState } from "react";
import { Network } from 'lucide-react';

export default function KnowledgeGraph() {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  const nodes = [
    { id: "plato", label: "Plato", x: 50, y: 20, desc: "Philosopher king, Theory of Forms", color: "#3b82f6" },
    { id: "aristotle", label: "Aristotle", x: 20, y: 50, desc: "Father of Political Science", color: "#10b981" },
    { id: "machiavelli", label: "Machiavelli", x: 80, y: 50, desc: "Realpolitik, The Prince", color: "#ef4444" },
    { id: "rousseau", label: "Rousseau", x: 50, y: 80, desc: "Social Contract Theory", color: "#f59e0b" },
  ];

  const edges = [
    { from: "plato", to: "aristotle" },
    { from: "aristotle", to: "machiavelli" },
    { from: "machiavelli", to: "rousseau" },
    { from: "plato", to: "rousseau" },
  ];

  return (
    <div className="tab-pane active" style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: "20px" }}>
        <Network size={18} style={{ color: "#3b82f6", marginRight: "10px" }} /> 
        <span className="hi">इंटरएक्टिव नॉलेज ग्राफ</span>
        <span className="en">Interactive Knowledge Graph</span>
      </h2>
      <p style={{ color: "var(--text-secondary)", marginBottom: "30px" }}>Connect the dots between thinkers and ideologies.</p>

      <div className="bento-card" style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative", minHeight: "500px", padding: 0, overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "10px", left: "20px", zIndex: 10 }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>Ideology Map</h3>
        </div>

        <svg width="100%" height="100%" style={{ position: "absolute", top: 0, left: 0 }}>
          {edges.map((e, i) => {
            const n1 = nodes.find(n => n.id === e.from);
            const n2 = nodes.find(n => n.id === e.to);
            if (!n1 || !n2) return null;
            return (
              <line 
                key={i} 
                x1={`${n1.x}%`} y1={`${n1.y}%`} 
                x2={`${n2.x}%`} y2={`${n2.y}%`} 
                stroke="var(--border-color)" strokeWidth="2" strokeDasharray="5,5" 
              />
            );
          })}
        </svg>

        {nodes.map(n => (
          <div 
            key={n.id}
            onClick={() => setSelectedNode(n.id)}
            style={{ 
              position: "absolute", 
              top: `${n.y}%`, left: `${n.x}%`, 
              transform: "translate(-50%, -50%)",
              background: n.color,
              color: "white",
              padding: "10px 20px",
              borderRadius: "30px",
              fontWeight: "bold",
              cursor: "pointer",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              transition: "transform 0.3s, box-shadow 0.3s",
              zIndex: 5,
              border: selectedNode === n.id ? "3px solid white" : "none"
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = "translate(-50%, -50%) scale(1.1)"}
            onMouseOut={(e) => e.currentTarget.style.transform = "translate(-50%, -50%) scale(1)"}
          >
            {n.label}
          </div>
        ))}

        {selectedNode && (
          <div style={{ position: "absolute", bottom: "20px", right: "20px", background: "var(--card-bg, #fff)", padding: "20px", borderRadius: "15px", boxShadow: "0 10px 30px rgba(0,0,0,0.2)", width: "250px", border: `2px solid ${nodes.find(n => n.id === selectedNode)?.color}`, zIndex: 20 }}>
            <h4 style={{ color: nodes.find(n => n.id === selectedNode)?.color, fontSize: "1.2rem", marginBottom: "10px" }}>{nodes.find(n => n.id === selectedNode)?.label}</h4>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>{nodes.find(n => n.id === selectedNode)?.desc}</p>
            <button onClick={() => setSelectedNode(null)} style={{ marginTop: "15px", background: "transparent", border: "none", color: "var(--text-secondary)", cursor: "pointer", textDecoration: "underline" }}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
}
