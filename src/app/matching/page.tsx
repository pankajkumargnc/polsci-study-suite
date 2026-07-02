"use client";

import React, { useState, useEffect } from "react";
import { MATCH_POOL } from "../../data/matching-data";
import { Link } from 'lucide-react';

export default function Matching() {
  const [leftItems, setLeftItems] = useState<{id: number, content: string}[]>([]);
  const [rightItems, setRightItems] = useState<{id: number, content: string}[]>([]);
  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  const [selectedRight, setSelectedRight] = useState<number | null>(null);
  const [matches, setMatches] = useState<Record<number, number>>({});
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Pick 5 random pairs
    const shuffled = [...MATCH_POOL].sort(() => 0.5 - Math.random()).slice(0, 5);
    
    // Assign IDs
    const pairs = shuffled.map((p, idx) => ({ id: idx, left: p.left, right: p.right }));
    
    // Separate and shuffle left/right
    setLeftItems(pairs.map(p => ({ id: p.id, content: p.left })).sort(() => 0.5 - Math.random()));
    setRightItems(pairs.map(p => ({ id: p.id, content: p.right })).sort(() => 0.5 - Math.random()));
  }, []);

  useEffect(() => {
    if (selectedLeft !== null && selectedRight !== null) {
      if (selectedLeft === selectedRight) {
        // Match!
        setMatches(prev => ({ ...prev, [selectedLeft]: selectedRight }));
        setSelectedLeft(null);
        setSelectedRight(null);
        
        if (Object.keys(matches).length + 1 === leftItems.length) {
          setIsFinished(true);
        }
      } else {
        // Mismatch - reset after delay
        setTimeout(() => {
          setSelectedLeft(null);
          setSelectedRight(null);
        }, 800);
      }
    }
  }, [selectedLeft, selectedRight, matches, leftItems.length]);

  if (leftItems.length === 0) return <div>Loading...</div>;

  return (
    <div className="tab-pane active" style={{ padding: "20px" }}>
      <h2 className="semester-title">
        <Link size={18} /> 
        <span className="en">Match the Following</span>
        <span className="hi">सही मिलान करें</span>
      </h2>
      
      <p style={{ textAlign: "center", marginBottom: "30px", color: "var(--text-secondary)" }}>
        Select an item from the left column, then select its match on the right.
      </p>

      {isFinished ? (
        <div style={{ textAlign: "center", padding: "40px", background: "#d1fae5", borderRadius: "15px", border: "2px solid #10b981" }}>
          <h2 style={{ color: "#065f46", fontSize: "2rem", marginBottom: "20px" }}>🎉 Perfect Match!</h2>
          <button className="bento-primary-cta" onClick={() => window.location.reload()}>Play Again</button>
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", maxWidth: "800px", margin: "0 auto" }}>
          {/* Left Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            {leftItems.map(item => {
              const isMatched = matches[item.id] !== undefined;
              const isSelected = selectedLeft === item.id;
              
              let bg = "var(--bg-secondary)";
              let border = "1px solid var(--border-color)";
              if (isSelected) { bg = "#e0f2fe"; border = "2px solid #3b82f6"; }
              if (isMatched) { bg = "#d1fae5"; border = "1px solid #10b981"; opacity: 0.6; }

              return (
                <button 
                  key={`l-${item.id}`}
                  onClick={() => !isMatched && setSelectedLeft(item.id)}
                  disabled={isMatched}
                  style={{ padding: "20px", borderRadius: "10px", background: bg, border: border, cursor: isMatched ? "default" : "pointer", opacity: isMatched ? 0.5 : 1, transition: "all 0.3s", color: "var(--text-primary)" }}
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              );
            })}
          </div>

          {/* Right Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            {rightItems.map(item => {
              const isMatched = Object.values(matches).includes(item.id);
              const isSelected = selectedRight === item.id;
              
              let bg = "var(--bg-secondary)";
              let border = "1px solid var(--border-color)";
              if (isSelected) { bg = "#e0f2fe"; border = "2px solid #3b82f6"; }
              if (isMatched) { bg = "#d1fae5"; border = "1px solid #10b981"; opacity: 0.6; }

              return (
                <button 
                  key={`r-${item.id}`}
                  onClick={() => !isMatched && setSelectedRight(item.id)}
                  disabled={isMatched}
                  style={{ padding: "20px", borderRadius: "10px", background: bg, border: border, cursor: isMatched ? "default" : "pointer", opacity: isMatched ? 0.5 : 1, transition: "all 0.3s", color: "var(--text-primary)" }}
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}