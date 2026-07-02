"use client";

import React, { useState } from "react";
import { flashcards } from "../../data/flashcard-data";
import { Heart, Smartphone, X } from 'lucide-react';

export default function SwipeRevision() {
  const [cards, setCards] = useState(() => {
    // Map the real flashcard data to the format expected by the UI (q and a)
    if (flashcards && flashcards.length > 0) {
      interface FlashcardData {
        front_hi: string;
        front_en: string;
        back_hi: string;
        back_en: string;
      }
      return flashcards.map((card: FlashcardData, index: number) => ({
        id: index + 1,
        q: `${card.front_hi} / ${card.front_en}`,
        a: `${card.back_hi} / ${card.back_en}`,
      }));
    }
    // Fallback dummy data
    return [
      { id: 1, q: "Who is known as the father of Political Science?", a: "Aristotle" },
      { id: 2, q: "What is the core concept of Machiavelli's 'The Prince'?", a: "Realpolitik and the separation of politics from ethics." },
      { id: 3, q: "Who wrote 'The Social Contract'?", a: "Jean-Jacques Rousseau" },
      { id: 4, q: "What is 'Soft Power'?", a: "The ability to co-opt rather than coerce." },
    ];
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleSwipe = (direction: "left" | "right") => {
    // right = remember, left = forget
    setShowAnswer(false);
    setCurrentIndex((prev) => prev + 1);
  };

  if (currentIndex >= cards.length) {
    return (
      <div className="tab-pane active" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "80vh" }}>
        <h2>🎉 All Caught Up!</h2>
        <p>You have reviewed all flashcards for today.</p>
        <button className="bento-primary-cta" onClick={() => setCurrentIndex(0)}>Restart</button>
      </div>
    );
  }

  const currentCard = cards[currentIndex];

  return (
    <div className="tab-pane active" style={{ padding: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h2 style={{ marginBottom: "20px" }}>
        <Smartphone size={18} style={{ color: "#f59e0b", marginRight: "10px" }} /> 
        <span className="hi">स्वाइप रिवीज़न (Tinder Mode)</span>
        <span className="en">Swipe Revision</span>
      </h2>
      
      <div className="swipe-card-container" style={{ position: "relative", width: "100%", maxWidth: "350px", height: "450px", perspective: "1000px" }}>
        <div 
          className="swipe-card" 
          onClick={() => setShowAnswer(!showAnswer)}
          style={{ 
            width: "100%", height: "100%", background: "var(--card-bg, #fff)", 
            borderRadius: "20px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
            padding: "30px", textAlign: "center", cursor: "pointer", border: "1px solid var(--border-color)",
            transition: "transform 0.6s", transformStyle: "preserve-3d",
            transform: showAnswer ? "rotateY(180deg)" : "rotateY(0deg)"
          }}
        >
          {/* Front */}
          <div style={{ position: "absolute", backfaceVisibility: "hidden", display: showAnswer ? "none" : "block" }}>
            <h3 style={{ fontSize: "1.5rem", color: "var(--text-primary)" }}>{currentCard.q}</h3>
            <p style={{ marginTop: "20px", color: "var(--text-secondary)", fontSize: "0.9rem" }}>Tap to flip</p>
          </div>
          
          {/* Back */}
          <div style={{ position: "absolute", backfaceVisibility: "hidden", transform: "rotateY(180deg)", display: showAnswer ? "block" : "none" }}>
            <h3 style={{ fontSize: "1.2rem", color: "var(--success-color, #10b981)" }}>Answer:</h3>
            <p style={{ marginTop: "15px", fontSize: "1.3rem", color: "var(--text-primary)" }}>{currentCard.a}</p>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", gap: "20px", marginTop: "30px" }}>
        <button 
          onClick={() => handleSwipe("left")}
          style={{ width: "60px", height: "60px", borderRadius: "50%", background: "#fee2e2", color: "#ef4444", border: "none", fontSize: "1.5rem", cursor: "pointer", boxShadow: "0 4px 10px rgba(239, 68, 68, 0.2)" }}
        >
          <X size={18} />
        </button>
        <button 
          onClick={() => handleSwipe("right")}
          style={{ width: "60px", height: "60px", borderRadius: "50%", background: "#d1fae5", color: "#10b981", border: "none", fontSize: "1.5rem", cursor: "pointer", boxShadow: "0 4px 10px rgba(16, 185, 129, 0.2)" }}
        >
          <Heart size={18} />
        </button>
      </div>
      <p style={{ marginTop: "20px", color: "var(--text-secondary)" }}>Left for 'Needs Review', Right for 'Mastered'</p>
    </div>
  );
}
