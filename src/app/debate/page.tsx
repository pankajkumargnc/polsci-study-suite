"use client";
import { Scale } from 'lucide-react';

export default function Debate() {
  return (
    <>
<div id="debate" className="tab-pane active">
          <h2 className="semester-title"><Scale size={18} /> <span className="en">Argument Builder (Debate
              Mode)</span><span className="hi">आर्गुमेंट बिल्डर (डिबेट मोड)</span></h2>
          <p className="intro-text"><span className="en">Drag the statements to the correct side (Pros vs Cons) for a given
              topic.</span><span className="hi">दिए गए विषय के लिए कथनों को सही पक्ष (समर्थन या आलोचना) में ड्रैग
              करें।</span></p>
          <div id="debate-game-container"></div>
        </div>

        {/**/}
        
    </>
  );
}