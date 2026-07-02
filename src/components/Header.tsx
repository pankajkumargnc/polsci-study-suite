"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { 
  Menu, Moon, Sun, Printer, Home, ListChecks, BookOpen, BookOpenCheck, 
  Layers, Globe, Zap, Network, GraduationCap, History, FileSignature, 
  Brain, Copy, Link, Smartphone, Hourglass, Headphones, Landmark, 
  Scale, MessageSquare, Compass, MonitorPlay, Bot, Calendar,
  Library, Newspaper, PenTool, Briefcase
} from "lucide-react";

export default function Header() {
  const [isEnglish, setIsEnglish] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsEnglish(document.documentElement.getAttribute("data-lang") === "en");

    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = () => {
    document.querySelector(".sidebar")?.classList.toggle("open");
    document.querySelector(".overlay")?.classList.toggle("active");
  };

  const toggleLanguage = () => {
    const newIsEnglish = !isEnglish;
    setIsEnglish(newIsEnglish);
    document.documentElement.lang = newIsEnglish ? "en" : "hi";
    document.documentElement.setAttribute("data-lang", newIsEnglish ? "en" : "hi");
  };

  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const getPageInfo = () => {
    switch(pathname) {
      case "/": return { Icon: Home, hi: "डैशबोर्ड", en: "Dashboard" };
      case "/syllabus": return { Icon: ListChecks, hi: "सिलेबस ट्रैकर", en: "Syllabus Tracker" };
      case "/semester-1": return { Icon: BookOpen, hi: "सेमेस्टर I", en: "Semester I" };
      case "/semester-2": return { Icon: BookOpenCheck, hi: "सेमेस्टर II", en: "Semester II" };
      case "/semester-3": return { Icon: Layers, hi: "सेमेस्टर III", en: "Semester III" };
      case "/semester-4": return { Icon: Globe, hi: "सेमेस्टर IV", en: "Semester IV" };
      case "/rev": return { Icon: Zap, hi: "क्विक रिवीज़न", en: "Quick Revision" };
      case "/mind-map": return { Icon: Network, hi: "माइंड मैप्स", en: "Mind Maps" };
      case "/ugc": return { Icon: GraduationCap, hi: "UGC NET गाइड", en: "UGC NET Guide" };
      case "/pyq": return { Icon: History, hi: "PYQ मास्टरक्लास", en: "PYQ Masterclass" };
      case "/mock-test": return { Icon: FileSignature, hi: "फुल मॉक टेस्ट", en: "Full Mock Test" };
      case "/quiz": return { Icon: Brain, hi: "MCQ क्विज़", en: "MCQ Quiz" };
      case "/flashcards": return { Icon: Copy, hi: "फ़्लैशकार्ड्स", en: "Flashcards" };
      case "/matching": return { Icon: Link, hi: "सही मिलान", en: "Match the Following" };
      case "/swipe-revision": return { Icon: Smartphone, hi: "स्वाइप रिवीज़न", en: "Swipe Revision" };
      case "/chronology": return { Icon: Hourglass, hi: "ऐतिहासिक कालक्रम", en: "Historical Chronology" };
      case "/study-hub": return { Icon: Headphones, hi: "स्टडी हब", en: "Study Hub" };
      case "/mock-parliament": return { Icon: Landmark, hi: "मॉक पार्लियामेंट", en: "Mock Parliament" };
      case "/policy-sim": return { Icon: Scale, hi: "पॉलिसी सिमुलेटर", en: "Policy Simulator" };
      case "/debate": return { Icon: MessageSquare, hi: "डिबेट सिमुलेटर", en: "Debate Simulator" };
      case "/knowledge-graph": return { Icon: Network, hi: "नॉलेज ग्राफ", en: "Knowledge Graph" };
      case "/political-compass": return { Icon: Compass, hi: "पॉलिटिकल कंपास", en: "Political Compass" };
      case "/ar-masterclass": return { Icon: MonitorPlay, hi: "AR मास्टरक्लास", en: "AR Masterclass" };
      case "/research-assistant": return { Icon: Bot, hi: "AI रिसर्च असिस्टेंट", en: "AI Assistant" };
      case "/on-this-day": return { Icon: Calendar, hi: "आज के दिन", en: "On This Day" };
      case "/library": return { Icon: Library, hi: "ई-पुस्तकालय", en: "Research Library" };
      case "/current-affairs": return { Icon: Newspaper, hi: "करेंट अफेयर्स", en: "Current Affairs" };
      case "/answer-writing": return { Icon: PenTool, hi: "उत्तर लेखन कला", en: "Answer Writing" };
      case "/constitution": return { Icon: Scale, hi: "संविधान एक्सप्लोरर", en: "Interactive Constitution" };
      case "/career": return { Icon: Briefcase, hi: "करियर और अवसर", en: "Career & Opportunities" };
      default: return { Icon: Home, hi: "डैशबोर्ड", en: "Dashboard" };
    }
  };

  const { Icon, hi, en } = getPageInfo();

  return (
    <header className="top-header">
      <div className="reading-progress-bar" id="reading-progress">
        <div className="reading-progress-fill" id="reading-progress-fill" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="header-left">
        <button className="hamburger-btn" id="hamburger-btn" aria-label="Toggle Menu" onClick={toggleSidebar}>
          <Menu size={20} />
        </button>
        <h1 id="current-tab-title" className="flex items-center gap-2">
          <Icon size={24} className="text-primary" /> 
          <span className="hi">{hi}</span>
          <span className="en">{en}</span>
        </h1>
      </div>
      <div className="header-controls">
        <button className="control-btn" id="lang-toggle" title="Toggle Language" aria-label="Switch Language" onClick={toggleLanguage}>
          {isEnglish ? "HI" : "EN"}
        </button>
        <button className="control-btn" id="dark-mode-toggle" title="Toggle Dark Mode" aria-label="Toggle Dark Mode" onClick={toggleDarkMode}>
          {mounted && theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <button className="print-btn flex items-center gap-2" onClick={() => window.print()}>
          <Printer size={16} />
          <span className="hi">PDF / प्रिंट</span>
          <span className="en">PDF / Print</span>
        </button>
      </div>
    </header>
  );
}
