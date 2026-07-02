"use client";
import { Briefcase, Target, GraduationCap, Building, ExternalLink } from 'lucide-react';
import { PageTransition } from '@/components/PageTransition';

export default function Career() {
  return (
    <PageTransition>
      <div className="tab-pane active" style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div 
          className="rounded-3xl p-8 md:p-12 relative mb-8 shadow-2xl overflow-hidden flex flex-col items-start"
          style={{ background: 'linear-gradient(135deg, #be185d 0%, #9f1239 50%, #831843 100%)' }}
        >
          <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}></div>
          
          <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-md mb-6 shadow-lg border border-white/10">
            <Briefcase size={40} color="white" />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-black mb-3 tracking-tight" style={{ color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
            <span className="hi">करियर और अवसर</span><span className="en">Career & Opportunities</span>
          </h1>
          <p className="text-lg max-w-2xl font-medium" style={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>
            <span className="hi">MA राजनीति विज्ञान के बाद जॉब, फेलोशिप और हायर एजुकेशन की राह।</span>
            <span className="en">Career paths, fellowships, and higher education after MA Political Science.</span>
          </p>
        </div>
        <div className="p-4 max-w-4xl mx-auto mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="career-card bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:border-pink-500 transition-colors">
              <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/50 rounded-xl flex items-center justify-center text-pink-600 dark:text-pink-400 mb-4">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Academia & Research</h3>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-1.5 mr-2 shrink-0"></span>
                  <div><strong>UGC NET / JRF:</strong> Qualify for Assistant Professor roles and get Junior Research Fellowship for PhD.</div>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-1.5 mr-2 shrink-0"></span>
                  <div><strong>PhD (Doctorate):</strong> In-depth research in International Relations, Public Admin, or Indian Polity.</div>
                </li>
              </ul>
            </div>

            <div className="career-card bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:border-blue-500 transition-colors">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Civil Services</h3>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 shrink-0"></span>
                  <div><strong>UPSC CSE:</strong> Political Science & International Relations (PSIR) is one of the highest scoring optional subjects.</div>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 shrink-0"></span>
                  <div><strong>State PSC (JPSC, BPSC):</strong> Core subjects like Polity and Public Administration directly overlap with the syllabus.</div>
                </li>
              </ul>
            </div>

            <div className="career-card bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:border-teal-500 transition-colors md:col-span-2">
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/50 rounded-xl flex items-center justify-center text-teal-600 dark:text-teal-400 mb-4">
                <Building size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Think Tanks & Policy Roles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 mr-2 shrink-0"></span>
                    <div><strong>Political Consulting:</strong> Firms like I-PAC, IPD employ political science graduates for election management.</div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 mr-2 shrink-0"></span>
                    <div><strong>Journalism & Media:</strong> Political analyst, editorial writer for leading newspapers.</div>
                  </li>
                </ul>
                <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-xl border border-teal-100 dark:border-teal-800">
                  <h4 className="font-bold text-teal-800 dark:text-teal-300 mb-2">Active Fellowships</h4>
                  <a href="#" className="flex items-center text-sm text-teal-600 hover:underline mb-2"><ExternalLink size={14} className="mr-1" /> LAMP Fellowship (PRS)</a>
                  <a href="#" className="flex items-center text-sm text-teal-600 hover:underline"><ExternalLink size={14} className="mr-1" /> Chief Minister's Fellowship</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </PageTransition>
  );
}
