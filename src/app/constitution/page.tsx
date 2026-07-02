"use client";
import React, { useState } from 'react';
import { Scale, Search, BookOpen, FileText } from 'lucide-react';
import { PageTransition } from '@/components/PageTransition';

export default function ConstitutionExplorer() {
  const [activeTab, setActiveTab] = useState<'articles' | 'amendments'>('articles');
  const [searchTerm, setSearchTerm] = useState('');

  const articles = [
    { art: "Article 1", desc: "Name and territory of the Union", hiDesc: "संघ का नाम और राज्य क्षेत्र", part: "Part I" },
    { art: "Article 3", desc: "Formation of new States and alteration of areas, boundaries or names of existing States", hiDesc: "नए राज्यों का निर्माण और वर्तमान राज्यों के क्षेत्रों, सीमाओं या नामों में परिवर्तन", part: "Part I" },
    { art: "Article 14", desc: "Equality before law", hiDesc: "विधि के समक्ष समानता", part: "Part III (Fundamental Rights)" },
    { art: "Article 15", desc: "Prohibition of discrimination on grounds of religion, race, caste, sex or place of birth", hiDesc: "धर्म, मूलवंश, जाति, लिंग या जन्मस्थान के आधार पर भेदभाव का निषेध", part: "Part III" },
    { art: "Article 16", desc: "Equality of opportunity in matters of public employment", hiDesc: "लोक नियोजन के विषय में अवसर की समानता", part: "Part III" },
    { art: "Article 19", desc: "Protection of certain rights regarding freedom of speech, etc.", hiDesc: "वाक् स्वातंत्र्य आदि विषयक कुछ अधिकारों का संरक्षण", part: "Part III" },
    { art: "Article 21", desc: "Protection of life and personal liberty", hiDesc: "प्राण और दैहिक स्वतंत्रता का संरक्षण", part: "Part III" },
    { art: "Article 21A", desc: "Right to education", hiDesc: "शिक्षा का अधिकार", part: "Part III" },
    { art: "Article 25", desc: "Freedom of conscience and free profession, practice and propagation of religion", hiDesc: "अंतःकरण की और धर्म के अबाध रूप से मानने, आचरण और प्रचार करने की स्वतंत्रता", part: "Part III" },
    { art: "Article 32", desc: "Remedies for enforcement of rights (Constitutional Remedies)", hiDesc: "संवैधानिक उपचारों का अधिकार", part: "Part III" },
    { art: "Article 39", desc: "Certain principles of policy to be followed by the State", hiDesc: "राज्य द्वारा अनुसरणीय कुछ नीति तत्त्व", part: "Part IV (DPSP)" },
    { art: "Article 40", desc: "Organization of village panchayats", hiDesc: "ग्राम पंचायतों का संगठन", part: "Part IV" },
    { art: "Article 44", desc: "Uniform civil code for the citizens", hiDesc: "नागरिकों के लिए एक समान नागरिक संहिता", part: "Part IV" },
    { art: "Article 51A", desc: "Fundamental Duties", hiDesc: "मूल कर्तव्य", part: "Part IVA" },
    { art: "Article 72", desc: "Power of President to grant pardons, etc.", hiDesc: "क्षमा आदि की और कुछ मामलों में दंडादेश के निलंबन, परिहार या लघुकरण की राष्ट्रपति की शक्ति", part: "Part V" },
    { art: "Article 74", desc: "Council of Ministers to aid and advise President", hiDesc: "राष्ट्रपति को सहायता और सलाह देने के लिए मंत्रिपरिषद", part: "Part V" },
    { art: "Article 110", desc: "Definition of 'Money Bills'", hiDesc: "धन विधेयकों की परिभाषा", part: "Part V" },
    { art: "Article 123", desc: "Power of President to promulgate Ordinances during recess of Parliament", hiDesc: "संसद के विश्रांति काल में अध्यादेश प्रख्यापित करने की राष्ट्रपति की शक्ति", part: "Part V" },
    { art: "Article 143", desc: "Power of President to consult Supreme Court", hiDesc: "उच्चतम न्यायालय से परामर्श करने की राष्ट्रपति की शक्ति", part: "Part V" },
    { art: "Article 226", desc: "Power of High Courts to issue certain writs", hiDesc: "कुछ रिट निकालने की उच्च न्यायालय की शक्ति", part: "Part VI" },
    { art: "Article 280", desc: "Finance Commission", hiDesc: "वित्त आयोग", part: "Part XII" },
    { art: "Article 312", desc: "All-India Services", hiDesc: "अखिल भारतीय सेवाएं", part: "Part XIV" },
    { art: "Article 324", desc: "Superintendence, direction and control of elections to be vested in an Election Commission", hiDesc: "निर्वाचनों का अधीक्षण, निदेशन और नियंत्रण का निर्वाचन आयोग में निहित होना", part: "Part XV" },
    { art: "Article 352", desc: "Proclamation of Emergency (National Emergency)", hiDesc: "आपात की उद्घोषणा (राष्ट्रीय आपातकाल)", part: "Part XVIII" },
    { art: "Article 356", desc: "Provisions in case of failure of constitutional machinery in States", hiDesc: "राज्यों में संवैधानिक तंत्र के विफल हो जाने की दशा में उपबंध (राष्ट्रपति शासन)", part: "Part XVIII" },
    { art: "Article 360", desc: "Provisions as to financial emergency", hiDesc: "वित्तीय आपात के बारे में उपबंध", part: "Part XVIII" },
    { art: "Article 368", desc: "Power of Parliament to amend the Constitution and procedure therefor", hiDesc: "संविधान का संशोधन करने की संसद की शक्ति और उसके लिए प्रक्रिया", part: "Part XX" }
  ];

  const amendments = [
    { no: "1st Amendment, 1951", desc: "Added Ninth Schedule to protect land reform laws from judicial review.", hiDesc: "भूमि सुधार कानूनों को न्यायिक समीक्षा से बचाने के लिए नौवीं अनुसूची जोड़ी गई।" },
    { no: "42nd Amendment, 1976", desc: "Mini Constitution: Added Socialist, Secular, Integrity. Added Fundamental Duties (Part IVA).", hiDesc: "लघु संविधान: समाजवादी, धर्मनिरपेक्ष, अखंडता शब्द जोड़े गए। मूल कर्तव्य (भाग IVA) जोड़े गए।" },
    { no: "44th Amendment, 1978", desc: "Reversed many changes of 42nd CAA. Removed Right to Property from Fundamental Rights.", hiDesc: "42वें संशोधन के कई बदलावों को उलटा। संपत्ति के अधिकार को मौलिक अधिकारों से हटाया गया।" },
    { no: "52nd Amendment, 1985", desc: "Anti-Defection Law (Tenth Schedule).", hiDesc: "दल-बदल विरोधी कानून (दसवीं अनुसूची)।" },
    { no: "61st Amendment, 1989", desc: "Reduced voting age from 21 to 18 years.", hiDesc: "मतदान की आयु 21 से घटाकर 18 वर्ष की गई।" },
    { no: "73rd Amendment, 1992", desc: "Panchayati Raj Institutions (Part IX).", hiDesc: "पंचायती राज संस्थाएं (भाग IX)।" },
    { no: "74th Amendment, 1992", desc: "Urban Local Bodies/Municipalities (Part IXA).", hiDesc: "शहरी स्थानीय निकाय/नगर पालिकाएं (भाग IXA)।" },
    { no: "86th Amendment, 2002", desc: "Right to Education (Article 21A) for children aged 6-14.", hiDesc: "6-14 वर्ष के बच्चों के लिए शिक्षा का अधिकार (अनुच्छेद 21A)।" },
    { no: "101st Amendment, 2016", desc: "Goods and Services Tax (GST).", hiDesc: "वस्तु एवं सेवा कर (GST)।" },
    { no: "103rd Amendment, 2019", desc: "10% Reservation for Economically Weaker Sections (EWS).", hiDesc: "आर्थिक रूप से कमजोर वर्गों (EWS) के लिए 10% आरक्षण।" },
    { no: "106th Amendment, 2023", desc: "Women's Reservation Bill (Nari Shakti Vandan Adhiniyam) - 33% reservation in Lok Sabha and State Assemblies.", hiDesc: "महिला आरक्षण विधेयक (नारी शक्ति वंदन अधिनियम) - लोकसभा और राज्य विधानसभाओं में 33% आरक्षण।" },
  ];

  const filteredArticles = articles.filter(a => a.art.toLowerCase().includes(searchTerm.toLowerCase()) || a.desc.toLowerCase().includes(searchTerm.toLowerCase()) || a.hiDesc.includes(searchTerm));
  const filteredAmendments = amendments.filter(a => a.no.toLowerCase().includes(searchTerm.toLowerCase()) || a.desc.toLowerCase().includes(searchTerm.toLowerCase()) || a.hiDesc.includes(searchTerm));

  return (
    <PageTransition>
      <div className="tab-pane active" style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div 
          className="rounded-3xl p-8 md:p-12 relative mb-8 shadow-2xl overflow-hidden flex flex-col items-start"
          style={{ background: 'linear-gradient(135deg, #3730a3 0%, #1e40af 50%, #312e81 100%)' }}
        >
          <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}></div>
          
          <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-md mb-6 shadow-lg border border-white/10">
            <Scale size={40} color="white" />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-black mb-3 tracking-tight" style={{ color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
            <span className="hi">संविधान एक्सप्लोरर</span><span className="en">Constitution Explorer</span>
          </h1>
          <p className="text-lg max-w-2xl font-medium" style={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>
            <span className="hi">भारतीय संविधान के महत्वपूर्ण अनुच्छेद, भाग, अनुसूचियां और संशोधन।</span>
            <span className="en">Important Articles, Parts, Schedules, and Amendments of the Indian Constitution.</span>
          </p>
        </div>

        <div className="p-4 max-w-6xl mx-auto">
          <div className="search-bar flex items-center bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 mb-6">
            <Search size={20} className="text-gray-400 mr-3" />
            <input 
              type="text" 
              placeholder={activeTab === 'articles' ? "Search Articles (e.g., 'Equality' or '32')..." : "Search Amendments (e.g., 'GST' or '42')..."} 
              className="bg-transparent border-none outline-none w-full text-gray-700 dark:text-gray-200 text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex gap-4 mb-6">
            <button 
              onClick={() => setActiveTab('articles')}
              className={`flex-1 py-3 px-4 rounded-xl font-bold flex justify-center items-center gap-2 transition-all ${activeTab === 'articles' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200 dark:shadow-indigo-900/20' : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-indigo-50 dark:hover:bg-gray-700'}`}
            >
              <BookOpen size={18} /> <span className="hi">अनुच्छेद (Articles)</span><span className="en">Articles</span>
            </button>
            <button 
              onClick={() => setActiveTab('amendments')}
              className={`flex-1 py-3 px-4 rounded-xl font-bold flex justify-center items-center gap-2 transition-all ${activeTab === 'amendments' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200 dark:shadow-indigo-900/20' : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-indigo-50 dark:hover:bg-gray-700'}`}
            >
              <FileText size={18} /> <span className="hi">संशोधन (Amendments)</span><span className="en">Amendments</span>
            </button>
          </div>

          {activeTab === 'articles' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredArticles.map((item, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Scale size={100} />
                  </div>
                  
                  <span className="text-xs font-bold text-indigo-600 bg-indigo-50 dark:bg-indigo-900/30 dark:text-indigo-400 px-2 py-1 rounded mb-3 inline-block">
                    {item.part}
                  </span>
                  
                  <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-2">{item.art}</h2>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-1 font-medium">
                    {item.desc}
                  </p>
                  
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {item.hiDesc}
                  </p>

                  <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                    <button className="text-sm text-indigo-600 dark:text-indigo-400 font-medium flex items-center hover:underline">
                      <BookOpen size={14} className="mr-1" /> Read Full Text
                    </button>
                  </div>
                </div>
              ))}
              {filteredArticles.length === 0 && <div className="col-span-full text-center py-10 text-gray-500">No articles found matching your search.</div>}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredAmendments.map((item, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <FileText size={100} />
                  </div>
                  
                  <h2 className="text-xl font-black text-indigo-600 dark:text-indigo-400 mb-3">{item.no}</h2>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-2 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                  
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                    {item.hiDesc}
                  </p>
                </div>
              ))}
              {filteredAmendments.length === 0 && <div className="col-span-full text-center py-10 text-gray-500">No amendments found matching your search.</div>}
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
}
