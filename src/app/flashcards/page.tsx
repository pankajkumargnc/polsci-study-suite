"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { flashcards } from "../../data/flashcard-data";
import { ArrowRight, ArrowLeft, Copy, Lightbulb, CheckCircle } from 'lucide-react';

export default function Flashcard() {
  const [cards, setCards] = useState<typeof flashcards>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    // Shuffle cards on client load
    const shuffled = [...flashcards].sort(() => 0.5 - Math.random());
    setCards(shuffled.slice(0, 20)); // Pick 20 cards for the session
  }, []);

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      if (currentIndex < cards.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    }, 150); // slight delay to allow flip back animation before changing text
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setTimeout(() => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    }, 150);
  };

  if (cards.length === 0) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <Copy size={32} className="text-indigo-400" />
          <p className="text-slate-500 font-semibold">Loading Flashcards...</p>
        </div>
      </div>
    );
  }

  const currentCard = cards[currentIndex];

  return (
    <div className="tab-pane active" style={{ padding: "0", background: "transparent", border: "none", boxShadow: "none" }}>
      
      {/* Header */}
      <div className="ultra-pro-card flex flex-col md:flex-row md:items-center justify-between p-6 mb-8 gap-4">
        <div className="flex items-center gap-4">
          <div className="icon-wrapper icon-blue mb-0 w-12 h-12 shrink-0">
            <Copy size={24} />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold m-0">
              <span className="hi">फ़्लैशकार्ड्स (Active Recall)</span>
              <span className="en">Flashcards (Active Recall)</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 m-0 mt-1">Master concepts through spaced repetition.</p>
          </div>
        </div>
        <div className="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-bold px-4 py-2 rounded-full border border-indigo-100 dark:border-indigo-800">
          Card {currentIndex + 1} of {cards.length}
        </div>
      </div>

      <div className="flex flex-col items-center">
        {/* Flashcard 3D Container */}
        <div className="relative w-full max-w-2xl h-[400px] mb-10" style={{ perspective: "1000px" }}>
          <motion.div
            className="w-full h-full cursor-pointer"
            initial={false}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
            style={{ transformStyle: "preserve-3d" }}
            onClick={() => setIsFlipped(!isFlipped)}
          >
            {/* Front of Card */}
            <div 
              className="absolute w-full h-full ultra-pro-card flex flex-col justify-center items-center p-8 md:p-12 text-center backface-hidden"
              style={{ backfaceVisibility: "hidden" }}
            >
              <div className="absolute top-6 left-6 flex items-center gap-2 text-indigo-500 font-bold text-sm bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1 rounded-full">
                <Lightbulb size={16} /> Question
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-800 dark:text-slate-100 leading-tight mb-8">
                <span className="hi">{currentCard.front_hi}</span>
                <span className="en">{currentCard.front_en}</span>
              </h3>
              <p className="absolute bottom-6 text-slate-400 dark:text-slate-500 font-semibold animate-pulse">
                Tap card to reveal answer
              </p>
            </div>

            {/* Back of Card */}
            <div 
              className="absolute w-full h-full ultra-pro-card border-2 border-emerald-500 flex flex-col justify-center items-center p-8 md:p-12 text-center backface-hidden"
              style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
            >
              <div className="absolute top-6 left-6 flex items-center gap-2 text-emerald-500 font-bold text-sm bg-emerald-50 dark:bg-emerald-900/30 px-3 py-1 rounded-full">
                <CheckCircle size={16} /> Answer
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                <span className="hi">{currentCard.back_hi}</span>
                <span className="en">{currentCard.back_en}</span>
              </h3>
              <div className="absolute bottom-6 text-emerald-500 font-bold">
                Did you get it right?
              </div>
            </div>
          </motion.div>
        </div>

        {/* Navigation Controls */}
        <div className="flex gap-4 w-full max-w-2xl">
          <button 
            className="flex-1 flex justify-center items-center gap-2 py-4 rounded-xl font-bold text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm"
            onClick={handlePrev} 
            disabled={currentIndex === 0}
          >
            <ArrowLeft size={20} /> Previous
          </button>
          <button 
            className="flex-1 flex justify-center items-center gap-2 py-4 rounded-xl font-bold text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-indigo-600/30"
            onClick={handleNext} 
            disabled={currentIndex === cards.length - 1}
          >
            Next <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}