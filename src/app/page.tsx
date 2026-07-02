"use client";

import React, { useEffect, useState } from "react";
import ProgressTracker from "@/components/ProgressTracker";
import { useRouter } from "next/navigation";
import { motion, Variants } from "framer-motion";
import { 
  GraduationCap, History, FileSignature, Zap, Brain, Copy, Smartphone, 
  Link as LinkIcon, Landmark, MessageSquare, Headphones, Network, 
  Compass, Scale, Bot, Flame, Trophy, BookOpen, BookOpenCheck, Layers, Globe 
} from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export default function Dashboard() {
  const router = useRouter();
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const savedStreak = localStorage.getItem("bbmku_streak");
    if (savedStreak) setStreak(parseInt(savedStreak, 10));
  }, []);

  const features = [
    { titleHi: "UGC NET गाइड", titleEn: "UGC NET Guide", Icon: GraduationCap, color: "icon-purple", href: "/ugc", desc: "Syllabus & Strategy" },
    { titleHi: "PYQ मास्टरक्लास", titleEn: "PYQ Masterclass", Icon: History, color: "icon-blue", href: "/pyq", desc: "Past 5 Years Solved" },
    { titleHi: "फुल मॉक टेस्ट", titleEn: "Full Mock Test", Icon: FileSignature, color: "icon-pink", href: "/mock-test", desc: "Exam Simulator" },
    { titleHi: "क्विक रिवीज़न", titleEn: "Quick Revision", Icon: Zap, color: "icon-orange", href: "/rev", desc: "Last Minute Notes" },
    
    { titleHi: "MCQ क्विज़", titleEn: "MCQ Quiz", Icon: Brain, color: "icon-green", href: "/quiz", desc: "Topic-wise Practice" },
    { titleHi: "फ़्लैशकार्ड्स", titleEn: "Flashcards", Icon: Copy, color: "icon-blue", href: "/flashcards", desc: "Active Recall" },
    { titleHi: "स्वाइप रिवीज़न", titleEn: "Swipe Revision", Icon: Smartphone, color: "icon-pink", href: "/swipe-revision", desc: "Tinder Style Cards" },
    { titleHi: "सही मिलान", titleEn: "Match the Following", Icon: LinkIcon, color: "icon-purple", href: "/matching", desc: "Concept Mapping" },
    
    { titleHi: "मॉक पार्लियामेंट", titleEn: "Mock Parliament", Icon: Landmark, color: "icon-orange", href: "/mock-parliament", desc: "Roleplay Simulator" },
    { titleHi: "डिबेट सिमुलेटर", titleEn: "Debate Simulator", Icon: MessageSquare, color: "icon-pink", href: "/debate", desc: "AI Argument Practice" },
    { titleHi: "स्टडी हब", titleEn: "Study Hub (Pomodoro)", Icon: Headphones, color: "icon-green", href: "/study-hub", desc: "Lofi Focus Zone" },
    { titleHi: "नॉलेज ग्राफ", titleEn: "Knowledge Graph", Icon: Network, color: "icon-blue", href: "/knowledge-graph", desc: "Visual Connections" },
    
    { titleHi: "पॉलिटिकल कंपास", titleEn: "Political Compass", Icon: Compass, color: "icon-purple", href: "/political-compass", desc: "Find Your Ideology" },
    { titleHi: "पॉलिसी सिमुलेटर", titleEn: "Policy Simulator", Icon: Scale, color: "icon-orange", href: "/policy-sim", desc: "Draft Laws" },
    { titleHi: "AI असिस्टेंट", titleEn: "AI Assistant", Icon: Bot, color: "icon-green", href: "/research-assistant", desc: "24/7 Doubt Solving" },
    { titleHi: "माइंड मैप्स", titleEn: "Mind Maps", Icon: Network, color: "icon-pink", href: "/mind-map", desc: "Visual Summaries" },
  ];

  const semesterIcons = [BookOpen, BookOpenCheck, Layers, Globe];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="tab-pane active" 
      style={{ background: "transparent", border: "none", boxShadow: "none", padding: 0 }}
    >
      
      {/* ULTRA PRO HERO SECTION */}
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="ultra-pro-hero"
      >
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
        
        <div style={{ position: "relative", zIndex: 10, flex: 1 }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "10px", lineHeight: 1.2 }}>
            <span className="hi">BBMKU M.A. राजनीति विज्ञान</span>
            <span className="en">BBMKU M.A. Political Science</span>
          </h1>
          <p style={{ fontSize: "1.1rem", opacity: 0.9, marginBottom: "20px" }}>
            <span className="hi">डिजिटल स्टडी इकोसिस्टम — UGC NET जेआरएफ 2026</span>
            <span className="en">Digital Study Ecosystem — UGC NET JRF 2026</span>
          </p>
          <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.2)", backdropFilter: "blur(10px)", padding: "8px 16px", borderRadius: "30px", fontSize: "0.9rem", fontWeight: 600, border: "1px solid rgba(255,255,255,0.1)" }}>
              <Flame size={18} color="#fcd34d" /> {streak} Day Streak
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.2)", backdropFilter: "blur(10px)", padding: "8px 16px", borderRadius: "30px", fontSize: "0.9rem", fontWeight: 600, border: "1px solid rgba(255,255,255,0.1)" }}>
              <Trophy size={18} color="#fde047" /> Pro Member
            </div>
          </div>
        </div>
        
        <div style={{ opacity: 0.2, transform: "rotate(12deg)", paddingLeft: "20px" }} className="hidden md:block">
          <GraduationCap size={140} />
        </div>
      </motion.div>

      {/* PROGRESS TRACKER */}
      <ProgressTracker />

      {/* CORE SEMESTERS GRID */}
      <h2 className="px-5 mb-4 text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
        <span className="hi">कोर सिलेबस (M.A. Semesters)</span>
        <span className="en">Core Syllabus (M.A. Semesters)</span>
      </h2>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="ultra-pro-grid mb-10"
      >
        {[1, 2, 3, 4].map((num, idx) => {
          const Icon = semesterIcons[idx];
          return (
            <motion.div 
              key={num} 
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="ultra-pro-card group" 
              onClick={() => router.push(`/semester-${num}`)}
            >
              <div className="icon-wrapper icon-blue transition-transform group-hover:scale-110">
                <Icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-1">
                <span className="hi">सेमेस्टर {num === 1 ? 'I' : num === 2 ? 'II' : num === 3 ? 'III' : 'IV'}</span>
                <span className="en">Semester {num === 1 ? 'I' : num === 2 ? 'II' : num === 3 ? 'III' : 'IV'}</span>
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Explore complete syllabus and notes</p>
            </motion.div>
          );
        })}
      </motion.div>

      {/* PRO FEATURES GRID */}
      <h2 className="px-5 mb-4 text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
        <span className="hi">एडवांस प्रैक्टिस और टूल्स 🚀</span>
        <span className="en">Advanced Practice & Tools 🚀</span>
      </h2>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="ultra-pro-grid"
      >
        {features.map((feature, idx) => {
          const Icon = feature.Icon;
          return (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="ultra-pro-card group" 
              onClick={() => router.push(feature.href)}
            >
              <div className={`icon-wrapper ${feature.color} transition-transform group-hover:scale-110`}>
                <Icon size={24} />
              </div>
              <h3 className="text-lg font-bold mb-1">
                <span className="hi">{feature.titleHi}</span>
                <span className="en">{feature.titleEn}</span>
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">{feature.desc}</p>
            </motion.div>
          );
        })}
      </motion.div>
      
      <div className="h-10"></div>
    </motion.div>
  );
}
