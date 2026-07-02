"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Clock, ChevronLeft, ChevronRight, Send, AlertTriangle } from "lucide-react";
import { MCQ_BANK } from "../../data/mcq-bank";

export default function MockTest() {
  const [questions, setQuestions] = useState<typeof MCQ_BANK>([]);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60 * 60); // 60 mins
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Select 50 random questions for the mock test
    const shuffled = [...MCQ_BANK].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 50);
    setQuestions(selected);
    setUserAnswers(new Array(selected.length).fill(-1));
  }, []);

  useEffect(() => {
    if (isSubmitted || !mounted) return;
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsSubmitted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isSubmitted, mounted]);

  if (!mounted || questions.length === 0) return null;

  const handleOptionSelect = (optIndex: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentIndex] = optIndex;
    setUserAnswers(newAnswers);
  };

  const calculateScore = () => {
    return userAnswers.reduce((score, answer, index) => {
      return score + (answer === questions[index].correct ? 1 : 0);
    }, 0);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  if (isSubmitted) {
    const score = calculateScore();
    const percentage = (score / questions.length) * 100;
    
    return (
      <div className="tab-pane active" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "80vh" }}>
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="ultra-pro-card text-center max-w-lg w-full"
        >
          <div className="icon-wrapper icon-green mx-auto mb-6">
            <CheckCircle size={32} />
          </div>
          <h2 className="text-3xl font-extrabold mb-4">
            <span className="hi">टेस्ट समाप्त!</span>
            <span className="en">Test Complete!</span>
          </h2>
          <div className="text-6xl font-black text-indigo-500 mb-6">
            {score} <span className="text-2xl text-slate-400">/ {questions.length}</span>
          </div>
          <p className="text-lg text-slate-500 mb-8">
            {percentage >= 80 ? "Outstanding performance! You are ready for JRF." :
             percentage >= 60 ? "Good effort! Keep practicing to secure your rank." :
             "Needs improvement. Review the syllabus and try again."}
          </p>
          <button 
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl transition-colors"
            onClick={() => window.location.reload()}
          >
            <span className="hi">पुनः प्रयास करें</span>
            <span className="en">Retry Mock Test</span>
          </button>
        </motion.div>
      </div>
    );
  }

  const currentQ = questions[currentIndex];
  
  // To handle the language correctly, we need to know the document language. 
  // For simplicity, since the UI often renders both or toggles via CSS, we render both sets.
  return (
    <div className="tab-pane active" style={{ padding: "0", background: "transparent", border: "none", boxShadow: "none" }}>
      
      {/* Test Header */}
      <div className="ultra-pro-card flex justify-between items-center mb-6 p-4 md:p-6" style={{ borderRadius: "20px" }}>
        <div className="flex items-center gap-3">
          <div className="icon-wrapper icon-pink mb-0 w-12 h-12">
            <CheckCircle size={24} />
          </div>
          <div>
            <h2 className="text-xl font-bold m-0">UGC NET Mock Test</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 m-0">50 Questions • 60 Mins</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 font-mono text-xl font-bold text-rose-500 bg-rose-50 dark:bg-rose-950/30 px-4 py-2 rounded-lg">
            <Clock size={20} />
            {formatTime(timeLeft)}
          </div>
          <button 
            onClick={() => { if(confirm("Submit test early?")) setIsSubmitted(true); }}
            className="hidden md:flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-lg font-bold transition-colors"
          >
            <Send size={18} /> Submit
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Question Area */}
        <div className="lg:col-span-3 flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="ultra-pro-card flex-1 flex flex-col p-6 md:p-8"
            >
              <div className="mb-6 pb-6 border-b border-slate-200 dark:border-slate-700/50">
                <span className="inline-block bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 font-bold px-3 py-1 rounded-full text-sm mb-4">
                  Question {currentIndex + 1} of {questions.length}
                </span>
                <h3 className="text-xl md:text-2xl font-semibold leading-relaxed">
                  <span className="hi">{currentQ.q_hi}</span>
                  <span className="en">{currentQ.q_en}</span>
                </h3>
              </div>

              <div className="flex flex-col gap-4 mb-8">
                {currentQ.options_en.map((opt_en, idx) => {
                  const isSelected = userAnswers[currentIndex] === idx;
                  return (
                    <div 
                      key={idx}
                      onClick={() => handleOptionSelect(idx)}
                      className={`p-4 md:p-5 rounded-xl border-2 cursor-pointer transition-all ${
                        isSelected 
                          ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20' 
                          : 'border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-700'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${
                          isSelected ? 'border-indigo-500' : 'border-slate-300 dark:border-slate-600'
                        }`}>
                          {isSelected && <div className="w-3 h-3 bg-indigo-500 rounded-full" />}
                        </div>
                        <div className="text-base md:text-lg">
                          <span className="hi">{currentQ.options_hi[idx]}</span>
                          <span className="en">{opt_en}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-auto flex justify-between pt-6 border-t border-slate-200 dark:border-slate-700/50">
                <button 
                  onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
                  disabled={currentIndex === 0}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft size={20} /> Previous
                </button>
                <button 
                  onClick={() => setCurrentIndex(Math.min(questions.length - 1, currentIndex + 1))}
                  disabled={currentIndex === questions.length - 1}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold bg-indigo-600 hover:bg-indigo-700 text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Next <ChevronRight size={20} />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Palette Area */}
        <div className="lg:col-span-1">
          <div className="ultra-pro-card p-6 h-full">
            <h3 className="font-bold mb-4 border-b border-slate-200 dark:border-slate-700/50 pb-4">
              Question Palette
            </h3>
            <div className="grid grid-cols-5 gap-2">
              {questions.map((_, idx) => {
                const answered = userAnswers[idx] !== -1;
                const isCurrent = idx === currentIndex;
                return (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-10 h-10 flex items-center justify-center rounded-lg font-semibold text-sm transition-all ${
                      isCurrent 
                        ? 'ring-2 ring-indigo-500 ring-offset-2 ring-offset-white dark:ring-offset-slate-900 bg-indigo-500 text-white' 
                        : answered 
                          ? 'bg-emerald-500 text-white' 
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
            
            <div className="mt-8 flex flex-col gap-3 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-emerald-500"></div> Answered
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600"></div> Not Answered
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-indigo-500"></div> Current
              </div>
            </div>

            <button 
              onClick={() => { if(confirm("Submit test early?")) setIsSubmitted(true); }}
              className="mt-8 w-full md:hidden flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-3 rounded-xl font-bold transition-colors"
            >
              <Send size={18} /> Submit Test
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}