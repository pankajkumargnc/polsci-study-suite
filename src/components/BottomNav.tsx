"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Brain, Copy, Landmark, Headphones } from "lucide-react";

export default function BottomNav() {
  const pathname = usePathname();
  
  const navItems = [
    { href: "/", Icon: Home, textHi: "होम", textEn: "Home" },
    { href: "/quiz", Icon: Brain, textHi: "क्विज़", textEn: "Quiz" },
    { href: "/flashcards", Icon: Copy, textHi: "कार्ड्स", textEn: "Cards" },
    { href: "/mock-parliament", Icon: Landmark, textHi: "संसद", textEn: "Parl" },
    { href: "/study-hub", Icon: Headphones, textHi: "स्टडी", textEn: "Study" }
  ];

  return (
    <nav className="mobile-bottom-nav" id="mobile-bottom-nav">
      {navItems.map((item, index) => {
        const isActive = pathname === item.href;
        const Icon = item.Icon;
        
        return (
          <Link 
            key={index} 
            href={item.href}
            className={`bottom-nav-item ${isActive ? "active" : ""}`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <Icon size={20} className="mb-1" />
            <span className="hi text-xs">{item.textHi}</span>
            <span className="en text-xs">{item.textEn}</span>
          </Link>
        );
      })}
    </nav>
  );
}
