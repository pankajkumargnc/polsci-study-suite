"use client";
import { CheckCircle } from 'lucide-react';

export default function Chronology() {
  return (
    <>
<div id="chronology" className="tab-pane active">
          <h2 className="semester-title"><CheckCircle size={18} /> <span className="en">Chronology Builder
              Game</span><span className="hi">क्रोनोलॉजी मेकर गेम</span></h2>
          <p className="intro-text"><span className="en">Drag and drop the events/books in the correct chronological order
              (oldest to newest).</span><span className="hi">घटनाओं/पुस्तकों को ड्रैग करके सही कालानुक्रम (पुराने से नए) में
              सजाएं।</span></p>
          <div id="chronology-game-container"></div>
        </div>

        {/**/}
        
    </>
  );
}