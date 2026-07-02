"use client";

import React, { useState, useEffect } from "react";
import { MCQ_BANK } from "../../data/mcq-bank";
import { ArrowRight, Brain } from 'lucide-react';

export default function Quiz() {
  const [questions, setQuestions] = useState<typeof MCQ_BANK>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Shuffle and pick 10 random questions
    const shuffled = [...MCQ_BANK].sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, 10));
  }, []);

  const handleOptionClick = (idx: number) => {
    if (selectedOption !== null) return; // Prevent multiple clicks
    setSelectedOption(idx);
    setShowExplanation(true);
    if (idx === questions[currentIndex].correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      setIsFinished(true);
    }
  };

  const restartQuiz = () => {
    const shuffled = [...MCQ_BANK].sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, 10));
    setCurrentIndex(0);
    setScore(0);
    setSelectedOption(null);
    setShowExplanation(false);
    setIsFinished(false);
  };

  if (questions.length === 0) return <div>Loading...</div>;

  if (isFinished) {
    return (
      <div className="tab-pane active" style={{ padding: "40px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>Quiz Completed!</h2>
        <p style={{ fontSize: "1.5rem", marginBottom: "30px" }}>Your Score: <strong>{score} / {questions.length}</strong></p>
        <button className="bento-primary-cta" onClick={restartQuiz}>Restart Quiz</button>
      </div>
    );
  }

  const q = questions[currentIndex];

  return (
    <div className="tab-pane active" style={{ padding: "20px" }}>
      <h2 className="semester-title">
        <Brain size={18} /> 
        <span className="en">MCQ Quiz Practice</span>
        <span className="hi">MCQ क्विज़ अभ्यास</span>
      </h2>
      
      <div className="glass-card" style={{ padding: "30px", marginBottom: "30px", position: "relative" }}>
        <div style={{ position: "absolute", top: "15px", right: "20px", fontWeight: "bold", color: "var(--text-secondary)" }}>
          {currentIndex + 1} / {questions.length}
        </div>
        <p style={{ fontSize: "1.2rem", color: "var(--text-secondary)", marginBottom: "15px" }}>Paper: {q.paper}</p>
        <h3 style={{ fontSize: "1.4rem", marginBottom: "25px", color: "var(--text-primary)" }}>
          <span className="hi">{q.q_hi}</span>
          <span className="en">{q.q_en}</span>
        </h3>

        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          {q.options_hi.map((optHi, idx) => {
            const optEn = q.options_en[idx];
            let bgColor = "var(--bg-secondary)";
            let borderColor = "var(--border-color)";
            
            if (selectedOption !== null) {
              if (idx === q.correct) {
                bgColor = "#d1fae5"; // green
                borderColor = "#10b981";
              } else if (idx === selectedOption) {
                bgColor = "#fee2e2"; // red
                borderColor = "#ef4444";
              }
            }

            return (
              <button 
                key={idx}
                onClick={() => handleOptionClick(idx)}
                style={{
                  padding: "15px 20px",
                  borderRadius: "12px",
                  background: bgColor,
                  border: `2px solid ${borderColor}`,
                  textAlign: "left",
                  fontSize: "1.1rem",
                  cursor: selectedOption === null ? "pointer" : "default",
                  transition: "all 0.3s",
                  color: "var(--text-primary)"
                }}
              >
                <span className="hi">{optHi}</span>
                <span className="en">{optEn}</span>
              </button>
            );
          })}
        </div>

        {showExplanation && (
          <div style={{ marginTop: "30px", padding: "20px", background: "#f0f9ff", borderLeft: "5px solid #3b82f6", borderRadius: "8px" }}>
            <h4 style={{ color: "#3b82f6", marginBottom: "10px" }}>Explanation:</h4>
            <p className="hi" style={{ color: "var(--text-primary)" }}>{q.explanation_hi}</p>
            <p className="en" style={{ color: "var(--text-primary)" }}>{q.explanation_en}</p>
            <button className="bento-primary-cta" style={{ marginTop: "20px", width: "100%" }} onClick={nextQuestion}>
              Next Question <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}