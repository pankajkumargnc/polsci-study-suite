"use client";

import React, { useState } from "react";
import { Book, Microscope } from 'lucide-react';

export default function ResearchAssistant() {
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [title, setTitle] = useState("");
  const [publisher, setPublisher] = useState("");
  const [citation, setCitation] = useState("Generated citation will appear here...");

  const generateCitation = (format: string) => {
    if (!author || !title) {
      setCitation("Please enter at least Author and Title.");
      return;
    }

    if (format === 'APA') {
      setCitation(`${author} (${year || "n.d."}). ${title}. ${publisher || "Publisher"}.`);
    } else {
      setCitation(`${author}. ${title}. ${publisher || "Publisher"}, ${year || "n.d."}.`);
    }
  };

  return (
    <>
      <div id="research-assistant" className="tab-pane active" style={{ padding: "20px" }}>
        <h2 className="semester-title" style={{ marginBottom: "20px" }}>
          <Microscope size={18} style={{ color: "#10b981", marginRight: "10px" }} />
          <span className="hi">शोध प्रबंध एवं रिसर्च असिस्टेंट</span>
          <span className="en">Research & Dissertation Assistant</span>
        </h2>

        <div className="glass-card bento-card" style={{ padding: "30px", maxWidth: "700px", margin: "0 auto" }}>
          <h3 style={{ fontSize: "1.3rem", marginBottom: "20px" }}>
            <Book size={18} style={{ color: "#3b82f6", marginRight: "10px" }} />
            <span className="hi">उद्धरण जनरेटर (Citation Generator)</span>
            <span className="en">Citation Generator (APA & MLA)</span>
          </h3>
          <div style={{ display: "grid", gap: "15px" }}>
            <input
              type="text"
              placeholder="Author Last, First (e.g., Marx, Karl)"
              className="search-input"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              style={{ padding: "12px", borderRadius: "8px", border: "1px solid var(--border-color)", width: "100%", background: "var(--bg-secondary)", color: "var(--text-primary)" }}
            />
            <input
              type="text"
              placeholder="Year (e.g., 1867)"
              className="search-input"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              style={{ padding: "12px", borderRadius: "8px", border: "1px solid var(--border-color)", width: "100%", background: "var(--bg-secondary)", color: "var(--text-primary)" }}
            />
            <input
              type="text"
              placeholder="Book Title (e.g., Das Kapital)"
              className="search-input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{ padding: "12px", borderRadius: "8px", border: "1px solid var(--border-color)", width: "100%", background: "var(--bg-secondary)", color: "var(--text-primary)" }}
            />
            <input
              type="text"
              placeholder="Publisher (e.g., Penguin)"
              className="search-input"
              value={publisher}
              onChange={(e) => setPublisher(e.target.value)}
              style={{ padding: "12px", borderRadius: "8px", border: "1px solid var(--border-color)", width: "100%", background: "var(--bg-secondary)", color: "var(--text-primary)" }}
            />
            <div style={{ display: "flex", gap: "15px", marginTop: "10px" }}>
              <button className="bento-primary-cta" style={{ flex: 1 }} onClick={() => generateCitation('APA')}>Generate APA</button>
              <button className="bento-primary-cta" style={{ flex: 1, background: "var(--bg-secondary)", color: "var(--text-primary)", border: "1px solid var(--border-color)" }} onClick={() => generateCitation('MLA')}>Generate MLA</button>
            </div>
          </div>
          <div
            style={{
              marginTop: "25px", padding: "20px", background: "var(--bg-secondary)",
              borderLeft: "4px solid #3b82f6", borderRadius: "0 8px 8px 0",
              fontFamily: "monospace", fontSize: "1.1rem", color: "var(--text-primary)"
            }}
          >
            {citation}
          </div>
        </div>
      </div>

      {/**/}

    </>
  );
}