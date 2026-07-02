"use client";
import { Newspaper, ExternalLink, Calendar, MapPin, Globe } from 'lucide-react';
import { PageTransition } from '@/components/PageTransition';

export default function CurrentAffairs() {
  const newsItems = [
    {
      title: "G20 Summit 2026: Climate Tech and Global South",
      hiTitle: "G20 शिखर सम्मेलन 2026: क्लाइमेट टेक और ग्लोबल साउथ",
      date: "Sep 12, 2026",
      source: "The Hindu",
      tags: ["IR", "Sem 4"],
      linkedTo: "PSC-E-413A",
      summary: "The 2026 G20 summit emphasized rapid climate tech sharing and structural reforms giving voice to the Global South in financial institutions.",
      hiSummary: "2026 G20 शिखर सम्मेलन ने जलवायु तकनीक साझाकरण और वित्तीय संस्थानों में ग्लोबल साउथ को आवाज देने वाले संरचनात्मक सुधारों पर जोर दिया।"
    },
    {
      title: "One Nation One Election: Implementation Framework Unveiled",
      hiTitle: "एक देश एक चुनाव: कार्यान्वयन ढांचा जारी",
      date: "May 25, 2026",
      source: "Indian Express",
      tags: ["Indian Polity", "Sem 3"],
      linkedTo: "PSC-C-311",
      summary: "The Election Commission officially rolled out the multi-phase framework for simultaneous elections starting from the 2029 electoral cycle.",
      hiSummary: "चुनाव आयोग ने 2029 के चुनावी चक्र से शुरू होने वाले एक साथ चुनावों के लिए बहु-चरण रूपरेखा आधिकारिक तौर पर जारी की।"
    },
    {
      title: "UNSC Reforms 2026: Veto Power Restructuring Proposed",
      hiTitle: "UNSC सुधार 2026: वीटो पावर पुनर्गठन प्रस्तावित",
      date: "Feb 18, 2026",
      source: "Hindustan Times",
      tags: ["Int. Orgs", "Sem 4"],
      linkedTo: "PSC-E-413B",
      summary: "A historic UN resolution was drafted to dilute the absolute veto power of P5 nations, backed heavily by the G4 nations including India.",
      hiSummary: "P5 देशों की पूर्ण वीटो शक्ति को कम करने के लिए एक ऐतिहासिक संयुक्त राष्ट्र प्रस्ताव का मसौदा तैयार किया गया, जिसका भारत सहित G4 देशों ने भारी समर्थन किया।"
    }
  ];

  return (
    <PageTransition>
      <div className="tab-pane active" style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div 
          className="rounded-3xl p-8 md:p-12 relative mb-8 shadow-2xl overflow-hidden flex flex-col items-start"
          style={{ background: 'linear-gradient(135deg, #0f766e 0%, #0d9488 50%, #064e3b 100%)' }}
        >
          <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}></div>
          
          <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-md mb-6 shadow-lg border border-white/10">
            <Newspaper size={40} color="white" />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-black mb-3 tracking-tight" style={{ color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
            <span className="hi">करेंट अफेयर्स</span><span className="en">Current Affairs</span>
          </h1>
          <p className="text-lg max-w-2xl font-medium" style={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>
            <span className="hi">राष्ट्रीय और अंतर्राष्ट्रीय महत्व की समसामयिक घटनाएं।</span>
            <span className="en">Current events of national and international importance.</span>
          </p>
        </div>

        <div className="news-feed p-4 max-w-3xl mx-auto">
          {newsItems.map((news, idx) => (
            <div key={idx} className="news-card bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 mb-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-teal-500"></div>
              
              <div className="flex justify-between items-start mb-3">
                <div className="flex gap-2">
                  {news.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] uppercase tracking-wider font-bold text-teal-700 bg-teal-50 dark:bg-teal-900/30 dark:text-teal-400 px-2 py-1 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="text-xs text-gray-400 flex items-center">
                  <Calendar size={12} className="mr-1" /> {news.date}
                </div>
              </div>

              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                <span className="hi">{news.hiTitle}</span>
                <span className="en">{news.title}</span>
              </h2>

              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                <span className="hi">{news.hiSummary}</span>
                <span className="en">{news.summary}</span>
              </p>

              <div className="flex items-center justify-between border-t border-gray-100 dark:border-gray-700 pt-3 mt-2">
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                  <Globe size={14} className="mr-1" /> {news.source}
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="text-xs font-medium text-gray-500 flex items-center">
                    <MapPin size={12} className="mr-1 text-gray-400" /> Syllabus: {news.linkedTo}
                  </span>
                  <button className="text-teal-600 dark:text-teal-400 hover:text-teal-700 hover:bg-teal-50 dark:hover:bg-teal-900/30 p-1.5 rounded-lg transition-colors">
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
