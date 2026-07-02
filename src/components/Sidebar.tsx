"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Home, ListChecks, BookOpen, BookOpenCheck, Layers, Globe, Zap, Network, 
  GraduationCap, History, FileSignature, Brain, Copy, Link as LinkIcon, 
  Smartphone, Hourglass, Headphones, Landmark, Scale, MessageSquare, 
  Compass, MonitorPlay, Bot, Calendar, Library, Newspaper, PenTool, Briefcase
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();
  
  const navItems = [
    { href: "/", Icon: Home, textHi: "डैशबोर्ड", textEn: "Dashboard" },
    
    { type: "separator", textHi: "कोर स्टडी मटेरियल", textEn: "Core Study Material" },
    { href: "/syllabus", Icon: ListChecks, textHi: "सिलेबस ट्रैकर", textEn: "Syllabus Tracker" },
    { href: "/semester-1", Icon: BookOpen, textHi: "सेमेस्टर I", textEn: "Semester I" },
    { href: "/semester-2", Icon: BookOpenCheck, textHi: "सेमेस्टर II", textEn: "Semester II" },
    { href: "/semester-3", Icon: Layers, textHi: "सेमेस्टर III", textEn: "Semester III" },
    { href: "/semester-4", Icon: Globe, textHi: "सेमेस्टर IV", textEn: "Semester IV" },
    { href: "/rev", Icon: Zap, textHi: "क्विक रिवीज़न", textEn: "Quick Revision", badge: "HOT" },
    { href: "/mind-map", Icon: Network, textHi: "माइंड मैप्स", textEn: "Mind Maps", badge: "NEW" },
    
    { type: "separator", textHi: "UGC NET प्रिपरेशन", textEn: "UGC NET Preparation" },
    { href: "/ugc", Icon: GraduationCap, textHi: "UGC NET गाइड", textEn: "UGC NET Guide" },
    { href: "/pyq", Icon: History, textHi: "PYQ मास्टरक्लास", textEn: "PYQ Masterclass", badge: "PRO" },
    { href: "/mock-test", Icon: FileSignature, textHi: "फुल मॉक टेस्ट", textEn: "Full Mock Test", badge: "PRO" },
    
    { type: "separator", textHi: "गेमिफाइड प्रैक्टिस", textEn: "Gamified Practice" },
    { href: "/quiz", Icon: Brain, textHi: "MCQ क्विज़", textEn: "MCQ Quiz" },
    { href: "/flashcards", Icon: Copy, textHi: "फ़्लैशकार्ड्स", textEn: "Flashcards" },
    { href: "/matching", Icon: LinkIcon, textHi: "सही मिलान", textEn: "Match the Following" },
    { href: "/swipe-revision", Icon: Smartphone, textHi: "स्वाइप रिवीज़न", textEn: "Swipe Revision", badge: "PRO" },
    { href: "/chronology", Icon: Hourglass, textHi: "ऐतिहासिक कालक्रम", textEn: "Historical Chronology" },
    
    { type: "separator", textHi: "एडवांस फीचर्स 🚀", textEn: "Advanced Features 🚀" },
    { href: "/study-hub", Icon: Headphones, textHi: "स्टडी हब (Pomodoro)", textEn: "Study Hub (Pomodoro)", badge: "PRO" },
    { href: "/mock-parliament", Icon: Landmark, textHi: "मॉक पार्लियामेंट", textEn: "Mock Parliament", badge: "PRO" },
    { href: "/policy-sim", Icon: Scale, textHi: "पॉलिसी सिमुलेटर", textEn: "Policy Simulator", badge: "NEW" },
    { href: "/debate", Icon: MessageSquare, textHi: "डिबेट सिमुलेटर", textEn: "Debate Simulator", badge: "NEW" },
    { href: "/knowledge-graph", Icon: Network, textHi: "नॉलेज ग्राफ", textEn: "Knowledge Graph", badge: "PRO" },
    { href: "/political-compass", Icon: Compass, textHi: "पॉलिटिकल कंपास", textEn: "Political Compass" },
    { href: "/ar-masterclass", Icon: MonitorPlay, textHi: "AR मास्टरक्लास", textEn: "AR Masterclass", badge: "BETA" },
    { href: "/research-assistant", Icon: Bot, textHi: "AI रिसर्च असिस्टेंट", textEn: "AI Assistant", badge: "PRO" },
    { href: "/on-this-day", Icon: Calendar, textHi: "आज के दिन", textEn: "On This Day" },

    { type: "separator", textHi: "अल्टीमेट मास्टरपीस 🌟", textEn: "Ultimate Masterpiece 🌟" },
    { href: "/library", Icon: Library, textHi: "ई-पुस्तकालय", textEn: "Research Library", badge: "NEW" },
    { href: "/current-affairs", Icon: Newspaper, textHi: "करेंट अफेयर्स", textEn: "Current Affairs", badge: "HOT" },
    { href: "/answer-writing", Icon: PenTool, textHi: "उत्तर लेखन कला", textEn: "Answer Writing Mastery", badge: "PRO" },
    { href: "/constitution", Icon: Scale, textHi: "संविधान एक्सप्लोरर", textEn: "Interactive Constitution", badge: "NEW" },
    { href: "/career", Icon: Briefcase, textHi: "करियर और अवसर", textEn: "Career Guidance" },
  ];

  const closeSidebar = () => {
    document.querySelector(".sidebar")?.classList.remove("open");
    document.querySelector(".overlay")?.classList.remove("active");
  };

  return (
    <>
      <div className="overlay" id="overlay" aria-hidden="true" onClick={closeSidebar}></div>
      <aside className="sidebar" id="sidebar" aria-label="Main Navigation">
        <div className="sidebar-header">
          <h2>
            <span className="hi">BBMKU M.A. नोट्स</span>
            <span className="en">BBMKU M.A. Notes</span>
          </h2>
          <p>
            <span className="hi">कम्पलीट स्टडी मटेरियल</span>
            <span className="en">Complete Study Material</span>
          </p>
        </div>

        <ul className="nav-menu">
          {navItems.map((item, index) => {
            if (item.type === "separator") {
              return (
                <li key={index} className="nav-separator">
                  <span className="hi">{item.textHi}</span>
                  <span className="en">{item.textEn}</span>
                </li>
              );
            }

            const isActive = pathname === item.href;
            const Icon = item.Icon;
            
            return (
              <li key={index} className={`nav-item ${isActive ? "active" : ""}`}>
                <Link href={item.href || "#"} onClick={closeSidebar} style={{ display: "flex", alignItems: "center", width: "100%", color: "inherit", textDecoration: "none" }}>
                  {Icon && <Icon size={18} />}
                  <span className="hi" style={{ marginLeft: "10px" }}>{item.textHi}</span>
                  <span className="en" style={{ marginLeft: "10px" }}>{item.textEn}</span>
                  {item.badge && <span className="nav-badge" style={{ marginLeft: "auto" }}>{item.badge}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
}
