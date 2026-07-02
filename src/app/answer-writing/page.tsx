"use client";
import { PenTool, CheckCircle, FileText, ChevronRight } from 'lucide-react';
import { PageTransition } from '@/components/PageTransition';

export default function AnswerWriting() {
  return (
    <PageTransition>
      <div className="tab-pane active" style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div 
          className="rounded-3xl p-8 md:p-12 relative mb-8 shadow-2xl overflow-hidden flex flex-col items-start"
          style={{ background: 'linear-gradient(135deg, #d97706 0%, #b45309 50%, #78350f 100%)' }}
        >
          <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}></div>
          
          <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-md mb-6 shadow-lg border border-white/10">
            <PenTool size={40} color="white" />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-black mb-3 tracking-tight" style={{ color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
            <span className="hi">उत्तर लेखन कला</span><span className="en">Answer Writing Mastery</span>
          </h1>
          <p className="text-lg max-w-2xl font-medium" style={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>
            <span className="hi">MA और UGC NET/JRF के लिए बेहतरीन उत्तर लिखने की तकनीकें और स्ट्रक्चर।</span>
            <span className="en">Techniques and structures for writing excellent answers for MA and UGC NET/JRF.</span>
          </p>
        </div>
        <div className="p-4 max-w-4xl mx-auto mt-4">
          
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
              <span className="bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400 p-2 rounded-lg mr-3">
                <FileText size={20} />
              </span>
              <span className="hi">आदर्श उत्तर की संरचना (Ideal Answer Structure)</span>
              <span className="en">Ideal Answer Structure</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-sm border-t-4 border-t-blue-500">
                <h3 className="font-bold text-blue-600 dark:text-blue-400 mb-2 text-lg">1. Introduction</h3>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                  <li className="flex items-start"><CheckCircle size={14} className="mt-1 mr-2 text-green-500" /> Define the core concept.</li>
                  <li className="flex items-start"><CheckCircle size={14} className="mt-1 mr-2 text-green-500" /> Mention relevant thinkers.</li>
                  <li className="flex items-start"><CheckCircle size={14} className="mt-1 mr-2 text-green-500" /> 10-15% of total words.</li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-sm border-t-4 border-t-amber-500">
                <h3 className="font-bold text-amber-600 dark:text-amber-400 mb-2 text-lg">2. Body</h3>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                  <li className="flex items-start"><CheckCircle size={14} className="mt-1 mr-2 text-green-500" /> Subheadings are crucial.</li>
                  <li className="flex items-start"><CheckCircle size={14} className="mt-1 mr-2 text-green-500" /> Add flowcharts/diagrams.</li>
                  <li className="flex items-start"><CheckCircle size={14} className="mt-1 mr-2 text-green-500" /> Quote books & authors.</li>
                  <li className="flex items-start"><CheckCircle size={14} className="mt-1 mr-2 text-green-500" /> 70-80% of total words.</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-sm border-t-4 border-t-green-500">
                <h3 className="font-bold text-green-600 dark:text-green-400 mb-2 text-lg">3. Conclusion</h3>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                  <li className="flex items-start"><CheckCircle size={14} className="mt-1 mr-2 text-green-500" /> Summarize main points.</li>
                  <li className="flex items-start"><CheckCircle size={14} className="mt-1 mr-2 text-green-500" /> Give a balanced/optimistic view.</li>
                  <li className="flex items-start"><CheckCircle size={14} className="mt-1 mr-2 text-green-500" /> 10-15% of total words.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
            <div className="bg-gray-50 dark:bg-gray-900 p-4 border-b border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-gray-800 dark:text-white">Topper's Tips</h3>
            </div>
            <div className="p-5">
              <div className="flex items-start mb-4 pb-4 border-b border-gray-100 dark:border-gray-700">
                <ChevronRight className="text-amber-500 mt-1 mr-2 shrink-0" />
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  <strong className="text-gray-800 dark:text-white">Use Keywords:</strong> Instead of saying "States do what they want", write <span className="italic text-amber-600">"Anarchic international system compels states to pursue self-help."</span>
                </p>
              </div>
              <div className="flex items-start">
                <ChevronRight className="text-amber-500 mt-1 mr-2 shrink-0" />
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  <strong className="text-gray-800 dark:text-white">Highlight Thinkers:</strong> Always underline or box the names of political scientists (e.g., <span className="underline decoration-amber-500 decoration-2">Hans Morgenthau</span>, <span className="underline decoration-amber-500 decoration-2">Kenneth Waltz</span>).
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </PageTransition>
  );
}
