"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pyqData } from "@/data/pyqData";
import { CheckCircle, History, Eye, EyeOff, AlertTriangle } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export default function PYQMasterclass() {
  const [selectedYear, setSelectedYear] = useState<string>("2025");
  const [showAnswers, setShowAnswers] = useState<Record<string, boolean>>({});

  const years = ["2025", "2024", "2023", "2022", "2021", "2020"];
  const filteredQuestions = pyqData.filter(q => q.year === selectedYear);

  const toggleAnswer = (id: string) => {
    setShowAnswers(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="tab-pane active" style={{ padding: "0", background: "transparent", border: "none", boxShadow: "none" }}>
      
      {/* Header Area */}
      <div className="ultra-pro-card flex flex-col md:flex-row md:items-center justify-between p-6 mb-8 gap-4">
        <div className="flex items-center gap-4">
          <div className="icon-wrapper icon-blue mb-0 w-12 h-12 shrink-0">
            <History size={24} />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold m-0">
              <span className="hi">UGC NET (पिछले 5 वर्षों के PYQs)</span>
              <span className="en">UGC NET (Past 5 Years PYQs)</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 m-0 mt-1">Master the exam patterns by solving previous year questions.</p>
          </div>
        </div>
      </div>

      {/* Important Note */}
      <div className="flex gap-4 p-5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 mb-8">
        <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={20} />
        <p className="text-amber-800 dark:text-amber-200/80 leading-relaxed text-sm md:text-base">
          <strong><span className="hi">महत्वपूर्ण नोट:</span><span className="en">IMPORTANT:</span></strong>
          <span className="hi"> नीचे पिछले वर्षों के सबसे महत्वपूर्ण और बार-बार दोहराए जाने वाले प्रश्नों का विशाल संग्रह दिया गया है। आप किसी भी वर्ष को चुनकर अभ्यास कर सकते हैं।</span>
          <span className="en"> Below is a massive collection of the most important and frequently repeated questions from past years. You can select any year to practice.</span>
        </p>
      </div>

      {/* Year Selector */}
      <div className="flex gap-3 mb-10 flex-wrap">
        {years.map(year => {
          const isSelected = selectedYear === year;
          return (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-6 py-2.5 rounded-full font-bold transition-all ${
                isSelected 
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 ring-2 ring-indigo-600 ring-offset-2 ring-offset-white dark:ring-offset-slate-900' 
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {year}
            </button>
          );
        })}
      </div>

      {/* Question List */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-100 dark:border-indigo-900/50 pb-3 mb-6 inline-block pr-8">
          <span className="hi">वर्ष {selectedYear} के प्रश्न</span>
          <span className="en">Year {selectedYear} Questions</span>
        </h3>

        <motion.div 
          key={selectedYear}
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-6"
        >
          {filteredQuestions.map((q, index) => {
            const isShowing = showAnswers[q.id];
            return (
              <motion.div 
                key={q.id} 
                variants={itemVariants}
                className="ultra-pro-card p-6 md:p-8 flex flex-col"
              >
                <div className="flex gap-4 mb-6">
                  <span className="text-xl md:text-2xl font-black text-indigo-500 mt-1 shrink-0">
                    Q{index + 1}.
                  </span>
                  <h4 className="text-lg md:text-xl font-semibold leading-relaxed text-slate-800 dark:text-slate-100 text-justify">
                    <span className="hi">{q.questionHi}</span>
                    <span className="en">{q.questionEn}</span>
                  </h4>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 pl-0 md:pl-12">
                  {q.optionsEn.map((optEn, i) => (
                    <div 
                      key={i} 
                      className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 text-base"
                    >
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 font-bold shrink-0">
                        {String.fromCharCode(65 + i)}
                      </span>
                      <div className="text-slate-700 dark:text-slate-300">
                        <div className="hi">{q.optionsHi[i].replace(/^\([A-D]\)\s*/, '')}</div>
                        <div className="en">{optEn.replace(/^\([A-D]\)\s*/, '')}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pl-0 md:pl-12">
                  <button 
                    onClick={() => toggleAnswer(q.id)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold transition-all ${
                      isShowing 
                        ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800' 
                        : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-md'
                    }`}
                  >
                    {isShowing ? <EyeOff size={18} /> : <Eye size={18} />}
                    {isShowing ? "Hide Answer" : "View Answer & Explanation"}
                  </button>

                  <AnimatePresence>
                    {isShowing && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-6 p-5 md:p-6 bg-emerald-50 dark:bg-emerald-950/30 border-l-4 border-emerald-500 rounded-r-xl">
                          <p className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-2 text-lg mb-3">
                            <CheckCircle size={20} />
                            Correct Answer: Option {String.fromCharCode(65 + q.correctAnswer)}
                          </p>
                          <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
                            <span className="hi">{q.explanationHi}</span>
                            <span className="en">{q.explanationEn}</span>
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
          
          {filteredQuestions.length === 0 && (
            <div className="text-center p-10 text-slate-500 dark:text-slate-400">
              Loading questions for {selectedYear}...
            </div>
          )}
        </motion.div>
      </div>

    </div>
  );
}