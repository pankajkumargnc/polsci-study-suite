"use client";
import { BookOpen, CheckCircle, Flag, Globe, Landmark, PenTool, Scale, Settings, BarChart3, Trophy, Zap } from 'lucide-react';

export default function Semester1() {
  return (
    <>
<div id="sem1" className="tab-pane active">

          {/* ── Semester Hero Banner ── */}
          <div className="semester-hero sem-hero-1">
            <div className="sem-hero-icon">🎓</div>
            <h2 className="sem-hero-title">
              <span className="hi">सेमेस्टर I</span>
              <span className="en">Semester I</span>
            </h2>
            <p className="sem-hero-subtitle">
              <span className="hi">फाउंडेशन एवं कोर पाठ्यक्रम — राजनीति विज्ञान की नींव</span>
              <span className="en">Foundation &amp; Core Courses — The Bedrock of Political Science</span>
            </p>
            <div className="sem-hero-stats">
              <div className="sem-stat">
                <span className="sem-stat-value">4</span>
                <span className="sem-stat-label"><span className="hi">पेपर</span><span className="en">Papers</span></span>
              </div>
              <div className="sem-stat">
                <span className="sem-stat-value">15+</span>
                <span className="sem-stat-label"><span className="hi">इकाइयाँ</span><span className="en">Units</span></span>
              </div>
              <div className="sem-stat">
                <span className="sem-stat-value">50+</span>
                <span className="sem-stat-label"><span className="hi">मुख्य विषय</span><span className="en">Key Topics</span></span>
              </div>
            </div>
            <p className="sem-hero-quote">
              <span className="hi">"राजनीति विज्ञान समाज का दर्पण है — यह बताता है कि शक्ति कहाँ है और उसका उपयोग कैसे होता है।"</span>
              <span className="en">"Political Science is the mirror of society — it reveals where power lies and how it is exercised."</span>
            </p>
          </div>

          {/* ── Quick Nav Chips ── */}
          <div className="quick-nav-chips">
            <a href="#sem1-p101" className="nav-chip"><Landmark size={16} /> PSC-F-101</a>
            <a href="#sem1-p102" className="nav-chip"><Flag size={16} /> PSC-C-102</a>
            <a href="#sem1-p103" className="nav-chip"><Settings size={16} /> PSC-C-103</a>
            <a href="#sem1-p104" className="nav-chip"><BarChart3 size={16} /> PSC-C-104</a>
            <a href="#sem1-qa" className="nav-chip"><Trophy size={16} /> Q&amp;A</a>
          </div>

          {/**/}
          <div className="paper-section" data-aos="fade-up" data-accent="indigo" id="sem1-p101">
            <h3 className="paper-title">
              <span style={{display:'flex',alignItems:'center',gap:'10px'}}>
                <span className="paper-icon-badge badge-indigo"><Landmark size={18} /></span>
                <span><span className="hi">PSC-F-101: प्रारंभिक राजनीति विज्ञान</span><span className="en">PSC-F-101: Elementary Political Science</span></span>
              </span>
              <span className="unit-count-badge"><span className="hi">8 इकाइयाँ</span><span className="en">8 Units</span></span>
            </h3>

            <h4 className="unit-title"><span className="hi">इकाई 1: भारतीय संविधान की विशेषताएँ एवं प्रस्तावना</span><span
                className="en">Unit 1: Features of Indian Constitution &amp; Preamble</span></h4>
            <p><span className="hi">26 नवंबर 1949 को अधिनियमित और 26 जनवरी 1950 को लागू हुआ भारतीय संविधान विश्व का सबसे
                लंबा
                लिखित संविधान है। यह एक नव-स्वतंत्र, लोकतांत्रिक राष्ट्र की आकांक्षाओं का प्रतीक है और शासन के लिए एक
                व्यापक रूपरेखा प्रदान करता है।</span><span className="en">Enacted on 26 November 1949 and enforced on 26
                January 1950, the Indian Constitution is the longest written constitution in the world. It symbolizes
                the
                aspirations of a newly independent, democratic nation and provides a comprehensive framework for
                governance.</span></p>

            <div className="info-box">
              <h4><span className="hi">भारतीय संविधान की प्रमुख विशेषताएँ</span><span className="en">Key Features of the Indian
                  Constitution</span></h4>
              <ul>
                <li><strong><span className="hi">सबसे लंबा लिखित संविधान:</span><span className="en">Longest Written
                      Constitution:</span></strong> <span className="hi">मूल रूप से 395 अनुच्छेद और 8 अनुसूचियां; वर्तमान
                    में
                    470 अनुच्छेद, 25 भाग, 12 अनुसूचियां और 104+ संशोधन।</span><span className="en">Originally 395 articles
                    and
                    8 schedules; currently 470 articles, 25 parts, 12 schedules and 104+ amendments.</span></li>
                <li><strong><span className="hi">अनेक स्रोतों से प्रेरित:</span><span className="en">Drawn from Multiple
                      Sources:</span></strong> <span className="hi">ब्रिटिश संविधान (संसदीय प्रणाली), अमेरिकी संविधान (मूल
                    अधिकार, न्यायिक पुनरावलोकन), आयरिश संविधान (नीति निर्देशक तत्व), कनाडाई संविधान (सशक्त केंद्र के साथ
                    संघवाद), ऑस्ट्रेलियाई संविधान (समवर्ती सूची), जर्मनी का वाइमर संविधान (आपातकालीन
                    प्रावधान)।</span><span className="en">British (Parliamentary system), American (Fundamental Rights,
                    Judicial Review), Irish (DPSP), Canadian (Federalism with strong Centre), Australian (Concurrent
                    List), Germany's Weimar (Emergency provisions).</span></li>
                <li><strong><span className="hi">संघात्मक किंतु एकात्मकता की ओर झुका हुआ:</span><span className="en">Federal
                      with
                      Unitary Bias:</span></strong> <span className="hi">भारत एक संघ है लेकिन आपातकाल के दौरान यह एकात्मक
                    रूप
                    ले लेता है (अनुच्छेद 352, 356, 360)।</span><span className="en">India is a federation but assumes
                    unitary
                    character during emergencies (Articles 352, 356, 360).</span></li>
                <li><strong><span className="hi">संसदीय शासन प्रणाली:</span><span className="en">Parliamentary
                      System:</span></strong> <span className="hi">कार्यपालिका विधायिका के प्रति उत्तरदायी होती है; कैबिनेट
                    की
                    सामूहिक जिम्मेदारी।</span><span className="en">Executive is responsible to the legislature; collective
                    responsibility of the Cabinet.</span></li>
                <li><strong><span className="hi">मूल अधिकार (भाग III):</span><span className="en">Fundamental Rights (Part
                      III):</span></strong> <span className="hi">न्यायसंगत (Justiciable) अधिकार जो नागरिकों की नागरिक
                    स्वतंत्रता की गारंटी देते हैं।</span><span className="en">Justiciable rights guaranteeing civil
                    liberties.</span></li>
                <li><strong><span className="hi">राज्य के नीति निर्देशक तत्व (भाग IV):</span><span className="en">DPSP (Part
                      IV):</span></strong> <span className="hi">गैर-न्यायसंगत सामाजिक-आर्थिक लक्ष्य; आयरलैंड का
                    प्रभाव।</span><span className="en">Non-justiciable socio-economic goals; inspired by Ireland.</span>
                </li>
                <li><strong><span className="hi">स्वतंत्र न्यायपालिका:</span><span className="en">Independent
                      Judiciary:</span></strong> <span className="hi">न्यायिक पुनरावलोकन और रिट अधिकार क्षेत्र के साथ एकल
                    एकीकृत न्यायपालिका।</span><span className="en">Single integrated judiciary with judicial review and writ
                    jurisdiction.</span></li>
                <li><strong><span className="hi">सार्वभौमिक वयस्क मताधिकार:</span><span className="en">Universal Adult
                      Suffrage:</span></strong> <span className="hi">18 वर्ष से अधिक आयु के प्रत्येक नागरिक को वोट देने का
                    अधिकार (61वें संशोधन द्वारा 1989 में 21 से घटाकर 18 वर्ष किया गया)।</span><span className="en">Every
                    citizen above 18 years has the right to vote (61st Amendment, 1989 reduced from 21 to 18).</span>
                </li>
                <li><strong><span className="hi">एकल नागरिकता:</span><span className="en">Single Citizenship:</span></strong>
                  <span className="hi">अमेरिका के विपरीत, भारत में एकल नागरिकता का प्रावधान है।</span><span
                    className="en">Unlike
                    the USA, India provides for single citizenship.</span>
                </li>
              </ul>
            </div>

            <h4><span className="hi">प्रस्तावना — पाठ एवं विश्लेषण</span><span className="en">Preamble — Text &amp;
                Analysis</span>
            </h4>
            <div className="quote-box">
              <span className="hi">"हम, भारत के लोग, भारत को एक संपूर्ण प्रभुत्व-संपन्न, समाजवादी, पंथनिरपेक्ष,
                लोकतंत्रात्मक
                गणराज्य बनाने के लिए... सामाजिक, आर्थिक और राजनीतिक न्याय... विचार, अभिव्यक्ति, विश्वास, धर्म और उपासना
                की
                स्वतंत्रता... समता... और बंधुता बढ़ाने के लिए संकल्पित होकर..." — भारतीय संविधान की प्रस्तावना</span>
              <span className="en">"We, the people of India, having solemnly resolved to constitute India into a Sovereign,
                Socialist, Secular, Democratic Republic and to secure to all its citizens... Justice, social, economic
                and
                political... Liberty of thought, expression, belief, faith and worship... Equality... and Fraternity..."
                —
                Preamble to the Indian Constitution</span>
            </div>
            <ul>
              <li><strong><span className="hi">संप्रभु (Sovereign):</span><span className="en">Sovereign:</span></strong> <span
                  className="hi">भारत बाहरी नियंत्रण से मुक्त है; सर्वोच्च सत्ता जनता में निहित है।</span><span
                  className="en">India is free from external control; supreme power is vested in the people.</span></li>
              <li><strong><span className="hi">समाजवादी (Socialist):</span><span className="en">Socialist:</span></strong> <span
                  className="hi">42वें संशोधन (1976) द्वारा जोड़ा गया। राज्य द्वारा निर्देशित आर्थिक गतिविधि, असमानता को कम
                  करना और कल्याणकारी दृष्टिकोण।</span><span className="en">Added by 42nd Amendment (1976). State-directed
                  economic activity, reducing inequality, and welfare approach.</span></li>
              <li><strong><span className="hi">धर्मनिरपेक्ष/पंथनिरपेक्ष (Secular):</span><span
                    className="en">Secular:</span></strong> <span className="hi">42वें संशोधन (1976) द्वारा जोड़ा गया। राज्य का
                  कोई आधिकारिक धर्म नहीं है; सभी धर्मों के साथ समान व्यवहार।</span><span className="en">Added by 42nd
                  Amendment (1976). State has no official religion; equal treatment of all religions.</span></li>
              <li><strong><span className="hi">लोकतांत्रिक (Democratic):</span><span className="en">Democratic:</span></strong>
                <span className="hi">सरकार जनता से अपना अधिकार प्राप्त करती है; आवधिक चुनाव जवाबदेही सुनिश्चित करते
                  हैं।</span><span className="en">Government derives its authority from the people; periodic elections
                  ensure
                  accountability.</span>
              </li>
              <li><strong><span className="hi">गणराज्य (Republic):</span><span className="en">Republic:</span></strong> <span
                  className="hi">राज्य का प्रमुख निर्वाचित होता है, वंशानुगत नहीं (जैसे भारत का राष्ट्रपति)।</span><span
                  className="en">Head of state is elected, not hereditary (e.g., President of India).</span></li>
            </ul>

            <div className="info-box">
              <h4><span className="hi">🔑 स्मृति सहायक — SSDDR</span><span className="en">🔑 Mnemonic — SSDDR</span></h4>
              <p><span className="hi">Sovereign (संप्रभु) → Socialist (समाजवादी) → Secular (धर्मनिरपेक्ष) → Democratic
                  (लोकतांत्रिक) → Republic (गणराज्य)। यह क्रम UGC NET में बार-बार पूछा जाता है। समाजवादी और धर्मनिरपेक्ष
                  शब्द 42वें संशोधन (1976) द्वारा जोड़े गए थे।</span><span className="en">Sovereign → Socialist → Secular →
                  Democratic → Republic. This order is repeatedly asked in UGC NET. Socialist and Secular words were
                  added
                  by the 42nd Amendment (1976).</span></p>
            </div>

            {/* ── NEW: Timeline — Constitution Making ── */}
            <div className="timeline-box">
              <h4>📅 <span className="hi">संविधान निर्माण की समयरेखा</span><span className="en">Constitution Making Timeline</span></h4>
              <div className="timeline-items">
                <div className="timeline-item">
                  <div className="timeline-year">1946</div>
                  <div className="timeline-text"><span className="hi">कैबिनेट मिशन योजना — संविधान सभा का गठन</span><span className="en">Cabinet Mission Plan — Formation of Constituent Assembly</span></div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">9 Dec 1946</div>
                  <div className="timeline-text"><span className="hi">संविधान सभा की प्रथम बैठक — अध्यक्ष: सच्चिदानंद सिन्हा (अस्थायी)</span><span className="en">First meeting of Constituent Assembly — Chair: Sachidananda Sinha (Temporary)</span></div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">13 Dec 1946</div>
                  <div className="timeline-text"><span className="hi">नेहरू द्वारा उद्देश्य प्रस्ताव (Objectives Resolution) प्रस्तुत</span><span className="en">Objectives Resolution moved by Nehru</span></div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">29 Aug 1947</div>
                  <div className="timeline-text"><span className="hi">प्रारूप समिति (Drafting Committee) का गठन — अध्यक्ष: डॉ. बी.आर. अम्बेडकर</span><span className="en">Drafting Committee formed — Chairman: Dr. B.R. Ambedkar</span></div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">26 Nov 1949</div>
                  <div className="timeline-text"><span className="hi">संविधान अंगीकृत — "हम, भारत के लोग..." — संविधान दिवस</span><span className="en">Constitution Adopted — "We, the people of India..." — Constitution Day</span></div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">26 Jan 1950</div>
                  <div className="timeline-text"><span className="hi">संविधान लागू — गणतंत्र दिवस — भारत गणराज्य बना</span><span className="en">Constitution Enforced — Republic Day — India became a Republic</span></div>
                </div>
              </div>
            </div>

            {/* ── NEW: Did You Know ── */}
            <div className="did-you-know">
              <h4>✨ <span className="hi">क्या आप जानते हैं?</span><span className="en">Did You Know?</span></h4>
              <p><span className="hi">भारतीय संविधान मूल रूप से हस्तलिखित (handwritten) था और इसे <strong>प्रेम बिहारी नारायण रायज़ादा</strong> ने सुंदर कैलिग्राफी में लिखा था! इसे छापा नहीं गया था, बल्कि हाथ से लिखा गया था। मूल प्रतियां संसद भवन के पुस्तकालय में हीलियम-भरे केस में सुरक्षित रखी हैं।</span><span className="en">The Indian Constitution was originally <strong>handwritten</strong> by <strong>Prem Behari Narain Raizada</strong> in beautiful calligraphy! It was not printed but written by hand. The original copies are preserved in helium-filled cases in the Parliament House Library.</span></p>
            </div>

            <h4 className="unit-title"><span className="hi">इकाई 2: भारत में संघवाद</span><span className="en">Unit 2: Federalism in
                India</span></h4>
            <p><span className="hi">संघवाद (Federalism) सरकार की वह प्रणाली है जिसमें शक्तियां संवैधानिक रूप से एक केंद्रीय
                (राष्ट्रीय) सरकार और क्षेत्रीय (राज्य) सरकारों के बीच विभाजित होती हैं, और दोनों अपने-अपने क्षेत्र में
                सर्वोच्च होते हैं।</span><span className="en">Federalism is a system of government in which powers are
                constitutionally divided between a central (national) government and regional (state) governments, and
                both are supreme in their respective spheres.</span></p>
            <div className="info-box">
              <h4><span className="hi">भारतीय संघवाद की विशेषताएँ</span><span className="en">Features of Indian
                  Federalism</span>
              </h4>
              <ul>
                <li><strong><span className="hi">शक्तियों का विभाजन:</span><span className="en">Division of
                      Powers:</span></strong> <span className="hi">7वीं अनुसूची — संघ सूची (97 विषय), राज्य सूची (66 विषय),
                    समवर्ती सूची (52 विषय)।</span><span className="en">7th Schedule — Union List (97 subjects), State List
                    (66
                    subjects), Concurrent List (52 subjects).</span></li>
                <li><strong><span className="hi">संविधान की सर्वोच्चता:</span><span className="en">Supremacy of
                      Constitution:</span></strong> <span className="hi">संसद एकतरफा संघीय ढांचे को नहीं बदल
                    सकती।</span><span className="en">Parliament cannot unilaterally alter the federal structure.</span></li>
                <li><strong><span className="hi">द्विसदनीय विधायिका:</span><span className="en">Bicameral
                      Legislature:</span></strong> <span className="hi">राज्य सभा राष्ट्रीय स्तर पर राज्यों का प्रतिनिधित्व
                    करती है।</span><span className="en">Rajya Sabha represents states at the national level.</span></li>
              </ul>
              <h4><span className="hi">एकात्मक विशेषताएँ (भारत 'अर्ध-संघीय' के रूप में)</span><span className="en">Unitary
                  Features (India as 'Quasi-Federal')</span></h4>
              <ul>
                <li><strong><span className="hi">शक्तिशाली केंद्र:</span><span className="en">Strong Centre:</span></strong>
                  <span className="hi">अवशिष्ट शक्तियां (Residuary powers) संसद में निहित हैं (अनुच्छेद 248)।</span><span
                    className="en">Residuary powers vest with the Parliament (Article 248).</span>
                </li>
                <li><strong><span className="hi">राज्यपालों की नियुक्ति (अनुच्छेद 155):</span><span className="en">Appointment
                      of
                      Governors (Art. 155):</span></strong> <span className="hi">राज्यपाल केंद्र के एजेंट के रूप में कार्य
                    करते हैं।</span><span className="en">Governors act as agents of the Centre.</span></li>
                <li><strong><span className="hi">अखिल भारतीय सेवाएँ:</span><span className="en">All-India
                      Services:</span></strong> <span className="hi">IAS, IPS, IFS केंद्र और राज्य दोनों की सेवा करते हैं
                    लेकिन केंद्र द्वारा नियंत्रित होते हैं।</span><span className="en">IAS, IPS, IFS serve both Centre and
                    State but are controlled by the Centre.</span></li>
              </ul>
            </div>
            <p><strong><span className="hi">के. सी. व्हीयर (K. C. Wheare) का वर्गीकरण:</span><span className="en">K. C. Wheare's
                  Classification:</span></strong> <span className="hi">के. सी. व्हीयर ने भारतीय संघवाद को
                <strong>'अर्ध-संघीय'
                  (Quasi-federal)</strong> के रूप में वर्णित किया क्योंकि आपातकाल के दौरान केंद्र आसानी से राज्यों को
                ओवरराइड कर सकता है।</span><span className="en">K. C. Wheare described Indian federalism as
                <strong>'Quasi-federal'</strong> because the Centre can easily override states during
                emergencies.</span>
            </p>

            {/* ── NEW: Comparison — Indian vs American Federalism ── */}
            <div className="comparison-box">
              <div className="comparison-header">
                ⚖️ <span className="hi">भारतीय vs अमेरिकी संघवाद</span><span className="en">Indian vs American Federalism</span>
              </div>
              <div className="comparison-body">
                <div className="comparison-side">
                  <h5>🇮🇳 <span className="hi">भारत</span><span className="en">India</span></h5>
                  <ul>
                    <li><span className="hi">एकल नागरिकता</span><span className="en">Single citizenship</span></li>
                    <li><span className="hi">शक्तिशाली केंद्र (अवशिष्ट शक्तियां केंद्र में)</span><span className="en">Strong Centre (Residuary powers with Centre)</span></li>
                    <li><span className="hi">राज्य पुनर्गठन संभव (Art. 3)</span><span className="en">State reorganization possible (Art. 3)</span></li>
                    <li><span className="hi">एकीकृत न्यायपालिका</span><span className="en">Integrated Judiciary</span></li>
                    <li><span className="hi">अर्ध-संघीय (Quasi-Federal)</span><span className="en">Quasi-Federal</span></li>
                  </ul>
                </div>
                <div className="comparison-vs"><div className="vs-badge">VS</div></div>
                <div className="comparison-side">
                  <h5>🇺🇸 <span className="hi">अमेरिका</span><span className="en">USA</span></h5>
                  <ul>
                    <li><span className="hi">दोहरी नागरिकता</span><span className="en">Dual citizenship</span></li>
                    <li><span className="hi">राज्य अधिक शक्तिशाली (10वां संशोधन)</span><span className="en">States more powerful (10th Amendment)</span></li>
                    <li><span className="hi">राज्य सीमा बदलना कठिन</span><span className="en">State boundaries hard to change</span></li>
                    <li><span className="hi">दोहरी न्यायपालिका (संघीय + राज्य)</span><span className="en">Dual Judiciary (Federal + State)</span></li>
                    <li><span className="hi">सच्चा संघीय (True Federal)</span><span className="en">True Federal</span></li>
                  </ul>
                </div>
              </div>
            </div>

            <h4 className="unit-title"><span className="hi">इकाई 3: राज्य — परिभाषा, तत्व एवं स्वभाव</span><span className="en">Unit
                3: State — Definition, Elements &amp; Nature</span></h4>
            <p><strong><span className="hi">राज्य (State):</span><span className="en">State:</span></strong> <span
                className="hi">राज्य एक निश्चित क्षेत्र में एक संप्रभु सरकार के अधीन रहने वाले लोगों का एक राजनीतिक रूप से
                संगठित निकाय है। अरस्तू ने मनुष्य को 'राजनीतिक प्राणी' (Political Animal) माना है।</span><span
                className="en">The state is a politically organized body of people living within a defined territory under a
                sovereign government. Aristotle considered man a 'Political Animal'.</span></p>
            <ul>
              <li><strong><span className="hi">राज्य के चार आवश्यक तत्व (गार्नर के अनुसार):</span><span className="en">Four
                    essential elements of State (according to Garner):</span></strong> <span className="hi">1. जनसंख्या
                  (Population), 2. निश्चित भूभाग (Territory), 3. सरकार (Government), 4. संप्रभुता (Sovereignty - सबसे
                  महत्वपूर्ण तत्व)।</span><span className="en">1. Population, 2. Territory, 3. Government, 4. Sovereignty
                  (most important element).</span></li>
            </ul>
            <table>
              <thead>
                <tr>
                  <th><span className="hi">राज्य की प्रकृति के सिद्धांत</span><span className="en">Theories of the Nature of
                      State</span></th>
                  <th><span className="hi">विवरण</span><span className="en">Description</span></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong><span className="hi">आदर्शवादी सिद्धांत</span><span className="en">Idealist Theory</span></strong>
                  </td>
                  <td><span className="hi">राज्य एक आंगिक पूर्णता है; हेगेल का राज्य अपने आप में एक साध्य (End) है। व्यक्ति
                      राज्य से ही अर्थ प्राप्त करता है।</span><span className="en">The state is an organic whole; Hegel's
                      state is an end in itself. The individual derives meaning only from the state.</span></td>
                </tr>
                <tr>
                  <td><strong><span className="hi">उदारवादी सिद्धांत</span><span className="en">Liberal Theory</span></strong>
                  </td>
                  <td><span className="hi">राज्य व्यक्तिगत अधिकारों (लॉक, मिल) की रक्षा के लिए एक 'आवश्यक बुराई' (Necessary
                      evil) है।</span><span className="en">The state is a 'necessary evil' to protect individual rights
                      (Locke, Mill).</span></td>
                </tr>
                <tr>
                  <td><strong><span className="hi">मार्क्सवादी सिद्धांत</span><span className="en">Marxist
                        Theory</span></strong>
                  </td>
                  <td><span className="hi">राज्य वर्ग-प्रभुत्व (शोषण) का एक साधन है; साम्यवादी समाज में यह 'लुप्त' (Wither
                      away) हो जाएगा।</span><span className="en">The state is an instrument of class domination
                      (exploitation); it will 'wither away' in a communist society.</span></td>
                </tr>
                <tr>
                  <td><strong><span className="hi">बहुलवादी सिद्धांत</span><span className="en">Pluralist Theory</span></strong>
                  </td>
                  <td><span className="hi">राज्य कई संघों में से केवल एक संघ है; यह एकमात्र संप्रभु शक्ति नहीं है (लास्की,
                      बार्कर)।</span><span className="en">The state is merely one among many associations; it is not the
                      sole
                      sovereign power (Laski, Barker).</span></td>
                </tr>
              </tbody>
            </table>

            <h4 className="unit-title"><span className="hi">इकाई 4: संप्रभुता — अर्थ, विशेषताएँ एवं प्रकार</span><span
                className="en">Unit 4: Sovereignty — Meaning, Features &amp; Types</span></h4>
            <p><strong><span className="hi">संप्रभुता (Sovereignty):</span><span className="en">Sovereignty:</span></strong>
              <span className="hi">यह कानून बनाने और बाहरी नियंत्रण से मुक्त होकर उसे लागू करने की राज्य की सर्वोच्च, पूर्ण
                और
                असीमित शक्ति है। इस शब्द को जीन बोडिन (Jean Bodin - 1576) ने अपनी पुस्तक 'सिक्स बुक्स ऑफ द रिपब्लिक' में
                लोकप्रिय बनाया।</span><span className="en">It is the supreme, absolute, and unlimited power of the state to
                make and enforce laws free from external control. The term was popularized by Jean Bodin (1576) in his
                book 'Six Books of the Republic'.</span>
            </p>
            <ul>
              <li><strong><span className="hi">विशेषताएँ:</span><span className="en">Characteristics:</span></strong> <span
                  className="hi">पूर्णता (Absolute), स्थायित्व (Permanent), अविभाज्यता (Indivisible - इसे बांटा नहीं जा
                  सकता),
                  अहस्तांतरणीय (Inalienable)।</span><span className="en">Absolute, Permanent, Indivisible,
                  Inalienable.</span>
              </li>
            </ul>
            <table>
              <thead>
                <tr>
                  <th><span className="hi">संप्रभुता के प्रकार</span><span className="en">Types of Sovereignty</span></th>
                  <th><span className="hi">विवरण</span><span className="en">Description</span></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong><span className="hi">कानूनी संप्रभुता</span><span className="en">Legal Sovereignty</span></strong>
                  </td>
                  <td><span className="hi">वह प्राधिकारी जिसे आदेश जारी करने का कानूनी अधिकार है (उदा. यूके में संसद - जॉन
                      ऑस्टिन की अवधारणा)।</span><span className="en">The authority with the legal right to issue commands
                      (e.g., Parliament in UK - concept of John Austin).</span></td>
                </tr>
                <tr>
                  <td><strong><span className="hi">राजनीतिक संप्रभुता</span><span className="en">Political
                        Sovereignty</span></strong></td>
                  <td><span className="hi">कानूनी संप्रभु के पीछे की वास्तविक राजनीतिक शक्ति (जनमत या मतदाता)।</span><span
                      className="en">The real political power behind the legal sovereign (public opinion or
                      electorate).</span></td>
                </tr>
                <tr>
                  <td><strong><span className="hi">लोकप्रिय संप्रभुता</span><span className="en">Popular
                        Sovereignty</span></strong></td>
                  <td><span className="hi">यह सिद्धांत कि संप्रभु शक्ति जनता में निहित है (रूसो की 'सामान्य
                      इच्छा')।</span><span className="en">The principle that sovereign power lies with the people
                      (Rousseau's
                      'General Will').</span></td>
                </tr>
              </tbody>
            </table>

            <h4 className="unit-title"><span className="hi">इकाई 5: लोकतंत्र — अर्थ एवं सिद्धांत</span><span className="en">Unit 5:
                Democracy — Meaning &amp; Theories</span></h4>
            <p><strong><span className="hi">लोकतंत्र (Democracy):</span><span className="en">Democracy:</span></strong> <span
                className="hi">यह सरकार की एक ऐसी प्रणाली है जहाँ राजनीतिक शक्ति अंततः जनता में निवास करती है। 'डेमोस'
                (जनता)
                + 'क्रेटोस' (शासन)।</span><span className="en">A system of government where political power ultimately rests
                with the people. 'Demos' (people) + 'Kratos' (rule).</span></p>
            <div className="info-box">
              <h4><span className="hi">लोकतंत्र के प्रमुख सिद्धांत</span><span className="en">Major Theories of Democracy</span>
              </h4>
              <ul>
                <li><strong><span className="hi">शास्त्रीय सिद्धांत (रूसो):</span><span className="en">Classical Theory
                      (Rousseau):</span></strong> <span className="hi">सामान्य इच्छा के माध्यम से लोगों का स्व-शासन।
                    प्रत्यक्ष
                    भागीदारी का आदर्श।</span><span className="en">Self-governance of the people through the General Will.
                    Ideal of direct participation.</span></li>
                <li><strong><span className="hi">उदारवादी सिद्धांत (लॉक, मिल):</span><span className="en">Liberal Theory (Locke,
                      Mill):</span></strong> <span className="hi">लोकतंत्र व्यक्तिगत अधिकारों को सुनिश्चित करता है; अत्याचार
                    पर रोक के रूप में प्रतिनिधि सरकार।</span><span className="en">Democracy secures individual rights;
                    representative government as a check against tyranny.</span></li>
                <li><strong><span className="hi">अभिजात वर्ग सिद्धांत (शंपीटर - Schumpeter):</span><span className="en">Elitist
                      Theory (Schumpeter):</span></strong> <span className="hi">लोकतंत्र केवल एक तरीका है — लोगों के वोट के
                    लिए अभिजात वर्ग (Elites) के बीच प्रतिस्पर्धा। यह भागीदारी के बारे में नहीं, नेतृत्व चयन के बारे में
                    है।</span><span className="en">Democracy is merely a method — competition among elites for the people's
                    vote. It's about leadership selection, not participation.</span></li>
                <li><strong><span className="hi">बहुलवादी सिद्धांत (रॉबर्ट डाहल की 'पॉलीआर्की'):</span><span
                      className="en">Pluralist Theory (Dahl's Polyarchy):</span></strong> <span className="hi">शक्ति कई
                    प्रतिस्पर्धी समूहों के बीच फैली हुई है; कोई एक कुलीन वर्ग शासन नहीं करता।</span><span
                    className="en">Power
                    is dispersed among multiple competing groups; no single elite rules.</span></li>
              </ul>
            </div>

            <h4 className="unit-title"><span className="hi">इकाई 6: राजनीतिक दल एवं लोक प्रशासन (इकाई 7-8)</span><span
                className="en">Unit 6: Political Parties &amp; Public Admin (Unit 7-8)</span></h4>
            <p><strong><span className="hi">राजनीतिक दल:</span><span className="en">Political Parties:</span></strong> <span
                className="hi">समान राजनीतिक विचार साझा करने वाले लोगों का एक संगठित समूह, जो चुनाव के माध्यम से राजनीतिक
                शक्ति प्राप्त करने के लिए एकजुट होता है। मॉरिस डुवर्गर ने दलों को 'कैडर दल' (Cadre Party) और 'जन दल'
                (Mass
                Party) में विभाजित किया।</span><span className="en">An organized group of people sharing similar political
                views, united to attain political power through elections. Maurice Duverger divided parties into 'Cadre
                Party' and 'Mass Party'.</span></p>
            <p><strong><span className="hi">लोक प्रशासन (Public Administration):</span><span className="en">Public
                  Administration:</span></strong> <span className="hi">सरकारी नीति का कार्यान्वयन। <strong>वुडरो
                  विल्सन</strong> के 1887 के निबंध 'द स्टडी ऑफ एडमिनिस्ट्रेशन' से इसे एक अलग विषय माना गया। <strong>लूथर
                  गुलिक</strong> ने प्रशासन के दायरे को 'POSDCORB' के रूप में परिभाषित किया।</span><span className="en">The
                implementation of government policy. Considered a distinct discipline since <strong>Woodrow
                  Wilson's</strong> 1887 essay 'The Study of Administration'. <strong>Luther Gulick</strong> defined the
                scope of administration as 'POSDCORB'.</span></p>

            <h4 className="unit-title"><span className="hi">इकाई 9: संविधानवाद — अवधारणा एवं विशेषताएँ</span><span
                className="en">Unit
                9: Constitutionalism — Concept &amp; Features</span></h4>
            <p><strong><span className="hi">संविधानवाद (Constitutionalism):</span><span
                  className="en">Constitutionalism:</span></strong> <span className="hi">यह सिद्धांत कि सरकारी अधिकार एक संविधान
                द्वारा सीमित होने चाहिए, और शक्ति का प्रयोग केवल उसके द्वारा निर्धारित ढांचे के भीतर किया जाना
                चाहिए।</span><span className="en">The principle that government authority should be limited by a
                constitution,
                and power should be exercised only within the framework prescribed by it.</span></p>
            <ul>
              <li><strong><span className="hi">सीमित सरकार:</span><span className="en">Limited Government:</span></strong> <span
                  className="hi">सरकार मनमाने ढंग से कार्य नहीं कर सकती; उसे संवैधानिक सीमाओं के भीतर काम करना
                  चाहिए।</span><span className="en">Government cannot act arbitrarily; it must operate within constitutional
                  limits.</span></li>
              <li><strong><span className="hi">कानून का शासन (Rule of Law):</span><span className="en">Rule of
                    Law:</span></strong> <span className="hi">कानून सर्वोच्च है; कोई भी कानून से ऊपर नहीं है (ए. वी. डायसी -
                  A.V. Dicey की अवधारणा)।</span><span className="en">Law is supreme; no one is above the law (Concept of
                  A.V.
                  Dicey).</span></li>
              <li><strong><span className="hi">शक्तियों का पृथक्करण:</span><span className="en">Separation of
                    Powers:</span></strong> <span className="hi">मोंटेस्क्यू का सिद्धांत — विधायिका कानून बनाती है,
                  कार्यपालिका लागू करती है, न्यायपालिका व्याख्या करती है।</span><span className="en">Montesquieu's principle
                  —
                  Legislature makes law, Executive implements, Judiciary interprets.</span></li>
            </ul>
            {/* ── NEW: Key Terms — PSC-F-101 ── */}
            <div className="key-term-box">
              <h4>🔑 <span className="hi">मुख्य शब्दावली — PSC-F-101</span><span className="en">Key Terms — PSC-F-101</span></h4>
              <div className="key-terms-grid">
                <span className="key-term-chip"><span className="hi">संप्रभुता (Sovereignty)</span><span className="en">Sovereignty</span></span>
                <span className="key-term-chip"><span className="hi">संघवाद (Federalism)</span><span className="en">Federalism</span></span>
                <span className="key-term-chip"><span className="hi">अर्ध-संघीय (Quasi-Federal)</span><span className="en">Quasi-Federal</span></span>
                <span className="key-term-chip"><span className="hi">प्रस्तावना (Preamble)</span><span className="en">Preamble</span></span>
                <span className="key-term-chip"><span className="hi">DPSP</span><span className="en">DPSP</span></span>
                <span className="key-term-chip"><span className="hi">मूल अधिकार</span><span className="en">Fundamental Rights</span></span>
                <span className="key-term-chip"><span className="hi">अनुच्छेद 352</span><span className="en">Art. 352</span></span>
                <span className="key-term-chip"><span className="hi">42वाँ संशोधन</span><span className="en">42nd Amendment</span></span>
                <span className="key-term-chip"><span className="hi">शक्ति पृथक्करण</span><span className="en">Separation of Powers</span></span>
              </div>
            </div>
          </div>

          {/**/}
          <div className="paper-section" data-aos="fade-up" data-accent="emerald" id="sem1-p102">
            <h3 className="paper-title">
              <span style={{display:'flex',alignItems:'center',gap:'10px'}}>
                <span className="paper-icon-badge badge-emerald"><Flag size={18} /></span>
                <span><span className="hi">PSC-C-102: भारतीय राजनीतिक विचार</span><span className="en">PSC-C-102: Indian Political Thought</span></span>
              </span>
              <span className="unit-count-badge"><span className="hi">8 इकाइयाँ</span><span className="en">8 Units</span></span>
            </h3>

            <h4 className="unit-title"><span className="hi">इकाई 1: कौटिल्य — अर्थशास्त्र एवं राजनीति कला</span><span
                className="en">Unit 1: Kautilya — Arthashastra &amp; Statecraft</span></h4>
            <p><span className="hi">कौटिल्य (जिन्हें चाणक्य या विष्णुगुप्त के रूप में भी जाना जाता है) ने 'अर्थशास्त्र' की
                रचना की, जो राज्यशिल्प, राजनीतिक अर्थव्यवस्था और कूटनीति पर एक व्यापक ग्रंथ है। उन्हें <strong>'भारत का
                  मैकियावेली'</strong> माना जाता है।</span><span className="en">Kautilya (also known as Chanakya or
                Vishnugupta) authored the 'Arthashastra', a comprehensive treatise on statecraft, political economy, and
                diplomacy. He is considered the <strong>'Machiavelli of India'</strong>.</span></p>
            <ul>
              <li><strong><span className="hi">सप्तांग सिद्धांत (Saptanga Theory):</span><span className="en">Saptanga
                    Theory:</span></strong> <span className="hi">राज्य के सात अंग होते हैं — राजा, अमात्य (मंत्री), जनपद
                  (क्षेत्र/जनता), दुर्ग (किला), कोष (खजाना), दण्ड (सेना), और मित्र (सहयोगी)।</span><span className="en">The
                  state has seven organs — Swami (King), Amatya (Minister), Janapada (Territory/People), Durg (Fort),
                  Kosha (Treasury), Danda (Army), and Mitra (Ally).</span></li>
              <li><strong><span className="hi">मण्डल सिद्धांत (Mandala Theory):</span><span className="en">Mandala
                    Theory:</span></strong> <span className="hi">अंतर्राष्ट्रीय संबंधों का एक सिद्धांत — निकटतम पड़ोसी
                  संभावित
                  दुश्मन हैं, और उनके पड़ोसी संभावित सहयोगी (मित्र) हैं।</span><span className="en">A theory of
                  international
                  relations — immediate neighbors are potential enemies, and their neighbors are potential allies
                  (Mitra).</span></li>
              <li><strong><span className="hi">षाड्गुण्य नीति (Six-fold Policy):</span><span className="en">Shadgunya Niti
                    (Six-fold Policy):</span></strong> <span className="hi">विदेश नीति की छह रणनीतियाँ — संधि (शांति),
                  विग्रह
                  (युद्ध), आसन (तटस्थता), यान (युद्ध की तैयारी), संश्रय (शरण लेना), द्वैधीभाव (दोहरी नीति)।</span><span
                  className="en">Six strategies of foreign policy — Sandhi (peace), Vigraha (war), Asana (neutrality), Yana
                  (preparation for war), Samshraya (seeking alliance), Dvaidhibhava (dual policy).</span></li>
            </ul>

            <h4 className="unit-title"><span className="hi">इकाई 2: राजा राममोहन राय एवं भारतीय पुनर्जागरण</span><span
                className="en">Unit 2: Raja Ram Mohan Roy &amp; Indian Renaissance</span></h4>
            <p><span className="hi">राजा राममोहन राय (1772–1833) को 'आधुनिक भारत का जनक' और 'भारतीय पुनर्जागरण का भोर का
                तारा'
                कहा जाता है। उन्होंने 1828 में ब्रह्म समाज की स्थापना की।</span><span className="en">Raja Ram Mohan Roy
                (1772–1833) is called the 'Father of Modern India' and the 'Morning Star of the Indian Renaissance'. He
                founded the Brahmo Samaj in 1828.</span></p>
            <ul>
              <li><strong><span className="hi">सती प्रथा का विरोध:</span><span className="en">Opposition to Sati
                    System:</span></strong> <span className="hi">उनके अभियान के परिणामस्वरूप लॉर्ड विलियम बेंटिक द्वारा
                  बंगाल
                  सती विनियमन (1829) लागू हुआ।</span><span className="en">His campaign resulted in the Bengal Sati
                  Regulation
                  (1829) implemented by Lord William Bentinck.</span></li>
              <li><strong><span className="hi">महिला अधिकार:</span><span className="en">Women's Rights:</span></strong> <span
                  className="hi">बहुविवाह का विरोध किया; महिलाओं के लिए संपत्ति और शिक्षा के अधिकार की वकालत की।</span><span
                  className="en">Opposed polygamy; advocated for women's rights to property and education.</span></li>
              <li><strong><span className="hi">प्रेस की स्वतंत्रता:</span><span className="en">Freedom of the
                    Press:</span></strong> <span className="hi">ब्रिटिश सेंसरशिप का विरोध किया।</span><span
                  className="en">Opposed
                  British censorship.</span></li>
            </ul>

            <h4 className="unit-title"><span className="hi">इकाई 3 एवं 4: राम मनोहर लोहिया, मौलाना आज़ाद और जवाहरलाल
                नेहरू</span><span className="en">Unit 3 &amp; 4: Ram Manohar Lohia, Maulana Azad and Jawaharlal Nehru</span>
            </h4>
            <ul>
              <li><strong><span className="hi">राम मनोहर लोहिया:</span><span className="en">Ram Manohar Lohia:</span></strong>
                <span className="hi">समाजवादी विचारक; मार्क्सवादी नहीं बल्कि 'गांधीवादी समाजवादी'। <strong>सप्त क्रांति
                    (Seven
                    Revolutions)</strong> का आह्वान किया (जैसे रंगभेद, जातिभेद और लिंगभेद का अंत)। महिलाओं और निचली
                  जातियों के लिए 'विशेष अवसर' (आरक्षण) की वकालत की।</span><span className="en">Socialist thinker; not
                  Marxist
                  but a 'Gandhian Socialist'. Called for <strong>Sapta Kranti (Seven Revolutions)</strong> (e.g., end to
                  racism, casteism, and sexism). Advocated 'special opportunities' (reservation) for women and lower
                  castes.</span>
              </li>
              <li><strong><span className="hi">मौलाना अबुल कलाम आज़ाद:</span><span className="en">Maulana Abul Kalam
                    Azad:</span></strong> <span className="hi">भारत के पहले शिक्षा मंत्री। <strong>सांझा राष्ट्रवाद
                    (Muttahida
                    Qaumiyat)</strong> का समर्थन किया; द्वि-राष्ट्र सिद्धांत (Two-nation theory) का कड़ा विरोध किया।
                  उनके
                  पत्र: अल-हिलाल और अल-बलाग।</span><span className="en">India's first Education Minister. Supported
                  <strong>Composite Nationalism (Muttahida Qaumiyat)</strong>; strongly opposed the Two-nation theory.
                  His
                  journals: Al-Hilal and Al-Balagh.</span></li>
              <li><strong><span className="hi">जवाहरलाल नेहरू:</span><span className="en">Jawaharlal Nehru:</span></strong>
                <span className="hi">फेबियन समाजवाद (Fabian Socialism) से प्रभावित। मिश्रित अर्थव्यवस्था और राज्य-नेतृत्व
                  वाली
                  योजना का समर्थन किया। गुटनिरपेक्षता (NAM) और <strong>पंचशील (1954 - चीन के साथ शांतिपूर्ण सह-अस्तित्व
                    के
                    पांच सिद्धांत)</strong> के जनक। बांधों और कारखानों को 'आधुनिक भारत के मंदिर' कहा।</span><span
                  className="en">Influenced by Fabian Socialism. Supported mixed economy and state-led planning. Architect
                  of
                  Non-Alignment (NAM) and <strong>Panchsheel (1954 - Five principles of peaceful coexistence with
                    China)</strong>. Called dams and factories the 'Temples of Modern India'.</span>
              </li>
            </ul>

            <h4 className="unit-title"><span className="hi">इकाई 5 एवं 6: रवींद्रनाथ टैगोर और महात्मा गाँधी</span><span
                className="en">Unit 5 &amp; 6: Rabindranath Tagore and Mahatma Gandhi</span></h4>
            <p><strong><span className="hi">रवींद्रनाथ टैगोर:</span><span className="en">Rabindranath Tagore:</span></strong>
              <span className="hi">आक्रामक राष्ट्रवाद के कड़े आलोचक। उन्होंने राष्ट्रवाद को एक 'खतरनाक बीमारी' माना जो युद्ध
                की ओर ले जाती है। वे <strong>सार्वभौमिक मानवतावाद (Universal Humanism)</strong> और अंतर्राष्ट्रीयतावाद
                के
                समर्थक थे।</span><span className="en">Fierce critic of aggressive nationalism. He considered nationalism a
                'dangerous disease' leading to war. He was a proponent of <strong>Universal Humanism</strong> and
                internationalism.</span>
            </p>
            <p><strong><span className="hi">महात्मा गाँधी:</span><span className="en">Mahatma Gandhi:</span></strong> <span
                className="hi">उनके राजनीतिक दर्शन का आधार सत्य और अहिंसा है।</span><span className="en">The foundation of his
                political philosophy is Truth and Non-violence (Ahimsa).</span></p>
            <ul>
              <li><strong><span className="hi">सत्याग्रह:</span><span className="en">Satyagraha:</span></strong> <span
                  className="hi">सत्य का आग्रह। यह विरोध का अहिंसक तरीका है जिसका उद्देश्य नैतिक शक्ति के माध्यम से
                  अत्याचारी
                  का हृदय परिवर्तन करना है।</span><span className="en">Insistence on truth. It is a non-violent method of
                  protest aimed at changing the heart of the oppressor through moral force.</span></li>
              <li><strong><span className="hi">सर्वोदय (Sarvodaya):</span><span className="en">Sarvodaya:</span></strong> <span
                  className="hi">'सभी का कल्याण'। यह विचार जॉन रस्किन की पुस्तक 'अन्टू दिस लास्ट' (Unto This Last) से
                  प्रेरित
                  था।</span><span className="en">'Welfare of all'. This idea was inspired by John Ruskin's book 'Unto This
                  Last'.</span></li>
              <li><strong><span className="hi">राज्य पर विचार:</span><span className="en">Views on State:</span></strong> <span
                  className="hi">गाँधीजी आधुनिक राज्य को 'हिंसा का रूप' मानते थे। उनका आदर्श 'रामराज्य' (स्व-शासी ग्राम
                  गणराज्यों का महासागरीय वृत्त) था।</span><span className="en">Gandhi considered the modern state a 'form of
                  violence'. His ideal was 'Ram Rajya' (oceanic circles of self-governing village republics).</span>
              </li>
            </ul>

            <h4 className="unit-title"><span className="hi">इकाई 7 एवं 8: जयप्रकाश नारायण और डॉ. बी. आर. अम्बेडकर</span><span
                className="en">Unit 7 &amp; 8: Jayaprakash Narayan and Dr. B. R. Ambedkar</span></h4>
            <p><strong><span className="hi">जयप्रकाश नारायण (JP):</span><span className="en">Jayaprakash Narayan
                  (JP):</span></strong> <span className="hi">'लोक नायक'। 1974 में <strong>'संपूर्ण क्रांति' (Total
                  Revolution)</strong> का नारा दिया। उन्होंने 'दलविहीन लोकतंत्र' (Partyless Democracy) का समर्थन किया
                क्योंकि राजनीतिक दल भ्रष्टाचार को बढ़ावा देते हैं।</span><span className="en">'Lok Nayak'. Raised the slogan
                of <strong>'Total Revolution'</strong> in 1974. He supported 'Partyless Democracy' because political
                parties promote corruption.</span></p>
            <p><strong><span className="hi">डॉ. बी. आर. अम्बेडकर:</span><span className="en">Dr. B. R. Ambedkar:</span></strong>
              <span className="hi">भारतीय संविधान के पिता।</span><span className="en">Father of the Indian Constitution.</span>
            </p>
            <ul>
              <li><strong><span className="hi">जाति का उन्मूलन (Annihilation of Caste, 1936):</span><span
                    className="en">Annihilation of Caste (1936):</span></strong> <span className="hi">तर्क दिया कि हिंदू धर्म के
                  भीतर जाति व्यवस्था में सुधार नहीं हो सकता, इसे पूरी तरह नष्ट करना होगा।</span><span className="en">Argued
                  that the caste system cannot be reformed within Hinduism, it must be completely destroyed.</span></li>
              <li><strong><span className="hi">सामाजिक न्याय:</span><span className="en">Social Justice:</span></strong> <span
                  className="hi">उन्होंने कहा कि 'सामाजिक और आर्थिक लोकतंत्र' के बिना 'राजनीतिक लोकतंत्र' अर्थहीन है। 1932
                  में
                  गाँधीजी के साथ प्रसिद्ध 'पूना पैक्ट' पर हस्ताक्षर किए।</span><span className="en">He said that 'political
                  democracy' is meaningless without 'social and economic democracy'. Signed the famous 'Poona Pact' with
                  Gandhi in 1932.</span></li>
            </ul>
            {/* ── NEW: Key Terms — PSC-C-102 ── */}
            <div className="key-term-box">
              <h4>🔑 <span className="hi">मुख्य शब्दावली — PSC-C-102</span><span className="en">Key Terms — PSC-C-102</span></h4>
              <div className="key-terms-grid">
                <span className="key-term-chip"><span className="hi">ब्रह्म समाज</span><span className="en">Brahmo Samaj</span></span>
                <span className="key-term-chip"><span className="hi">सत्याग्रह</span><span className="en">Satyagraha</span></span>
                <span className="key-term-chip"><span className="hi">सर्वोदय</span><span className="en">Sarvodaya</span></span>
                <span className="key-term-chip"><span className="hi">सप्त क्रांति</span><span className="en">Sapta Kranti</span></span>
                <span className="key-term-chip"><span className="hi">संपूर्ण क्रांति</span><span className="en">Total Revolution</span></span>
                <span className="key-term-chip"><span className="hi">पंचशील</span><span className="en">Panchsheel</span></span>
                <span className="key-term-chip"><span className="hi">रामराज्य</span><span className="en">Ram Rajya</span></span>
                <span className="key-term-chip"><span className="hi">जाति उन्मूलन</span><span className="en">Annihilation of Caste</span></span>
              </div>
            </div>
          </div>

          {/**/}
          <div className="paper-section" data-aos="fade-up" data-accent="orange" id="sem1-p103">
            <h3 className="paper-title">
              <span style={{display:'flex',alignItems:'center',gap:'10px'}}>
                <span className="paper-icon-badge badge-orange"><Settings size={18} /></span>
                <span><span className="hi">PSC-C-103: राजनीतिक सिद्धांत</span><span className="en">PSC-C-103: Political Theory</span></span>
              </span>
              <span className="unit-count-badge"><span className="hi">10 इकाइयाँ</span><span className="en">10 Units</span></span>
            </h3>

            <h4 className="unit-title"><span className="hi">इकाई 1 से 3: उपागम, व्यवहारवाद एवं उत्तर-व्यवहारवाद</span><span
                className="en">Unit 1 to 3: Approaches, Behavioralism &amp; Post-behavioralism</span></h4>
            <p><span className="hi">राजनीतिक सिद्धांत राजनीतिक संस्थाओं की प्रकृति और उद्देश्य की एक व्यवस्थित खोज
                है।</span><span className="en">Political theory is a systematic inquiry into the nature and purpose of
                political institutions.</span></p>
            <ul>
              <li><strong><span className="hi">दार्शनिक उपागम:</span><span className="en">Philosophical
                    Approach:</span></strong>
                <span className="hi">राजनीतिक आदर्शों का मानकीय विश्लेषण (क्या होना चाहिए?)। प्लेटो से रॉल्स तक इसका उपयोग
                  हुआ
                  है।</span><span className="en">Normative analysis of political ideals (what ought to be?). Used from Plato
                  to Rawls.</span>
              </li>
              <li><strong><span className="hi">व्यवहारवाद (Behavioralism):</span><span
                    className="en">Behavioralism:</span></strong> <span className="hi">1950-60 के दशक में राजनीतिक घटनाओं के
                  वैज्ञानिक, आनुभविक और <strong>मूल्य-मुक्त (Value-free)</strong> अध्ययन पर जोर दिया गया (डेविड ईस्टन,
                  रॉबर्ट डाहल)।</span><span className="en">Emphasized scientific, empirical, and <strong>value-free</strong>
                  study of political phenomena in the 1950s-60s (David Easton, Robert Dahl).</span></li>
              <li><strong><span className="hi">उत्तर-व्यवहारवाद (Post-behavioralism):</span><span
                    className="en">Post-behavioralism:</span></strong> <span className="hi">1969 में डेविड ईस्टन ने ही
                  व्यवहारवाद
                  की 'अत्यधिक वैज्ञानिकता' के खिलाफ प्रतिक्रिया दी। उन्होंने राजनीति विज्ञान में 'प्रासंगिकता'
                  (Relevance)
                  और 'कार्रवाई' पर बल दिया।</span><span className="en">A reaction against the 'over-scientific' nature of
                  behavioralism, initiated by David Easton himself in 1969. He stressed 'Relevance' and 'Action' in
                  political science.</span></li>
            </ul>

            <h4 className="unit-title"><span className="hi">इकाई 4 एवं 5: शक्ति, सत्ता और न्याय (रॉल्स एवं नोज़िक)</span><span
                className="en">Unit 4 &amp; 5: Power, Authority and Justice (Rawls &amp; Nozick)</span></h4>
            <p><strong><span className="hi">सत्ता (Authority):</span><span className="en">Authority:</span></strong> <span
                className="hi">सत्ता 'वैध शक्ति' (Legitimate power) है। मैक्स वेबर ने सत्ता के तीन प्रकार बताए: 1. परंपरागत
                सत्ता (प्रथाओं पर आधारित), 2. करिश्माई सत्ता (नेता के व्यक्तित्व पर आधारित), 3. विधिक-तर्कसंगत सत्ता
                (कानून और नौकरशाही पर आधारित)।</span><span className="en">Authority is 'Legitimate power'. Max Weber
                identified three types of authority: 1. Traditional (based on customs), 2. Charismatic (based on
                leader's
                personality), 3. Legal-Rational (based on law and bureaucracy).</span></p>

            <div className="info-box">
              <h4><span className="hi">न्याय का विवाद: जॉन रॉल्स बनाम रॉबर्ट नोज़िक</span><span className="en">The Justice
                  Debate:
                  John Rawls vs Robert Nozick</span></h4>
              <ul>
                <li><strong><span className="hi">जॉन रॉल्स (A Theory of Justice, 1971):</span><span className="en">John Rawls (A
                      Theory of Justice, 1971):</span></strong> <span className="hi">रॉल्स ने <strong>'अज्ञानता के पर्दे'
                      (Veil of Ignorance)</strong> की अवधारणा दी। उनका 'अंतर सिद्धांत' (Difference Principle) कहता है कि
                    सामाजिक-आर्थिक असमानताएं केवल तभी उचित हैं जब वे समाज के सबसे कमज़ोर/वंचित वर्ग को लाभ पहुंचाएं
                    (वितरणात्मक न्याय)।</span><span className="en">Rawls gave the concept of the <strong>'Veil of
                      Ignorance'</strong>. His 'Difference Principle' states that socio-economic inequalities are
                    justified only if they benefit the least advantaged/weakest section of society (Distributive
                    Justice).</span></li>
                <li><strong><span className="hi">रॉबर्ट नोज़िक (Anarchy, State, and Utopia, 1974):</span><span
                      className="en">Robert Nozick (Anarchy, State, and Utopia, 1974):</span></strong> <span
                    className="hi">नोज़िक
                    एक स्वतंत्रतावादी (Libertarian) हैं। उन्होंने रॉल्स के 'पैटर्न वाले वितरण' का विरोध किया और
                    <strong>'हकदारी सिद्धांत' (Entitlement Theory)</strong> दिया। उनके अनुसार, यदि संपत्ति न्यायपूर्ण
                    तरीके से अर्जित की गई है, तो राज्य को उसे छीनने (टैक्स लगाने) का अधिकार नहीं है। उन्होंने 'न्यूनतम
                    राज्य' (Minimal state) का समर्थन किया।</span><span className="en">Nozick is a Libertarian. He opposed
                    Rawls' 'patterned distribution' and gave the <strong>'Entitlement Theory'</strong>. According to
                    him,
                    if property is acquired justly, the state has no right to take it away (tax it). He supported a
                    'Minimal state'.</span></li>
              </ul>
            </div>

            <h4 className="unit-title"><span className="hi">इकाई 6 से 10: विचारधारा का अंत और हरित राजनीति</span><span
                className="en">Unit 6 to 10: End of Ideology and Green Politics</span></h4>
            <p><strong><span className="hi">विचारधारा के अंत की थीसिस (End of Ideology):</span><span className="en">End of
                  Ideology Thesis:</span></strong> <span className="hi">डैनियल बेल (Daniel Bell, 1960) द्वारा प्रतिपादित।
                इसका
                तर्क है कि पश्चिमी लोकतंत्रों में महान 19वीं सदी की विचारधाराओं (समाजवाद, उदारवाद) का युग समाप्त हो गया
                है, और अब राजनीतिक संघर्षों को व्यावहारिक और तकनीकी तरीकों से सुलझाया जाता है।</span><span
                className="en">Propounded by Daniel Bell (1960). It argues that the era of great 19th-century ideologies
                (socialism, liberalism) has ended in Western democracies, and political conflicts are now resolved
                through
                pragmatic and technical means.</span></p>
            <p><strong><span className="hi">गहरी पारिस्थितिकी (Deep Ecology):</span><span className="en">Deep
                  Ecology:</span></strong> <span className="hi">आर्ने नेस (Arne Naess) द्वारा दिया गया शब्द। यह मानता है कि
                प्रकृति में सभी जीवों का समान आंतरिक मूल्य है; मनुष्य प्रकृति से श्रेष्ठ नहीं है।</span><span
                className="en">Term coined by Arne Naess. It asserts that all living beings in nature have equal intrinsic
                value; humans are not superior to nature.</span></p>

            {/* ── NEW: Warning Box ── */}
            <div className="warning-box">
              <h4><span className="hi">⚠️ सामान्य गलती — Constitutionalism ≠ Constitution</span><span className="en">⚠️ Common Mistake — Constitutionalism ≠ Constitution</span></h4>
              <p><span className="hi"><strong>Constitution (संविधान)</strong> = एक दस्तावेज़ जिसमें शासन के नियम लिखे होते हैं।<br/>
              <strong>Constitutionalism (संविधानवाद)</strong> = सरकार की शक्ति पर सीमा लगाने का सिद्धांत। एक देश के पास संविधान हो सकता है लेकिन संविधानवाद नहीं (जैसे तानाशाही में)। UGC NET में यह अंतर बार-बार पूछा जाता है!</span>
              <span className="en"><strong>Constitution</strong> = A document containing rules of governance.<br/>
              <strong>Constitutionalism</strong> = The principle of limiting government power. A country can have a constitution without constitutionalism (e.g., in a dictatorship). This distinction is frequently asked in UGC NET!</span></p>
            </div>
          </div>

          {/**/}
          <div className="paper-section" data-aos="fade-up" data-accent="rose" id="sem1-p104">
            <h3 className="paper-title">
              <span style={{display:'flex',alignItems:'center',gap:'10px'}}>
                <span className="paper-icon-badge badge-rose"><BarChart3 size={18} /></span>
                <span><span className="hi">PSC-C-104: भारतीय सरकार एवं राजनीति</span><span className="en">PSC-C-104: Indian Govt. &amp; Politics</span></span>
              </span>
              <span className="unit-count-badge"><span className="hi">10 इकाइयाँ</span><span className="en">10 Units</span></span>
            </h3>

            <h4 className="unit-title"><span className="hi">इकाई 2 एवं 3: मूल अधिकार एवं नीति निर्देशक तत्व (DPSP)</span><span
                className="en">Unit 2 &amp; 3: Fundamental Rights &amp; DPSP</span></h4>
            <ul>
              <li><strong><span className="hi">अनुच्छेद 14:</span><span className="en">Article 14:</span></strong> <span
                  className="hi">कानून के समक्ष समानता।</span><span className="en">Equality before law.</span></li>
              <li><strong><span className="hi">अनुच्छेद 21:</span><span className="en">Article 21:</span></strong> <span
                  className="hi">जीवन और व्यक्तिगत स्वतंत्रता का अधिकार।</span><span className="en">Right to life and personal
                  liberty.</span></li>
              <li><strong><span className="hi">अनुच्छेद 32:</span><span className="en">Article 32:</span></strong> <span
                  className="hi">संवैधानिक उपचारों का अधिकार — डॉ. अम्बेडकर ने इसे 'संविधान का हृदय और आत्मा' कहा है। इसके
                  तहत
                  सुप्रीम कोर्ट 5 प्रकार के <strong>रिट (Writs)</strong> जारी करता है: बंदी प्रत्यक्षीकरण, परमादेश,
                  प्रतिषेध, उत्प्रेषण, अधिकार पृच्छा।</span><span className="en">Right to Constitutional Remedies — Dr.
                  Ambedkar called it the 'Heart and Soul of the Constitution'. Under this, the Supreme Court issues 5
                  types of <strong>Writs</strong>: Habeas Corpus, Mandamus, Prohibition, Certiorari,
                  Quo-Warranto.</span>
              </li>
            </ul>
            <p><strong><span className="hi">राज्य के नीति निर्देशक तत्व (DPSP - भाग IV):</span><span className="en">Directive
                  Principles of State Policy (DPSP - Part IV):</span></strong> <span className="hi">ये न्यायसंगत
                (Justiciable)
                नहीं हैं लेकिन शासन में मौलिक हैं। ये आयरिश संविधान से लिए गए हैं और इनका उद्देश्य 'कल्याणकारी राज्य'
                (Welfare state) स्थापित करना है। 1980 के मिनर्वा मिल्स मामले में सुप्रीम कोर्ट ने मूल अधिकारों और DPSP
                के
                बीच 'सामंजस्य' (Harmony) को संविधान का मूल ढांचा माना।</span><span className="en">These are non-justiciable
                but fundamental in the governance of the country. Borrowed from the Irish Constitution, they aim to
                establish a 'Welfare state'. In the Minerva Mills case (1980), the Supreme Court held that 'Harmony'
                between Fundamental Rights and DPSP is part of the basic structure of the Constitution.</span></p>

            <h4 className="unit-title"><span className="hi">इकाई 4 से 9: केंद्र-राज्य संबंध और न्यायिक सक्रियता</span><span
                className="en">Unit 4 to 9: Centre-State Relations &amp; Judicial Activism</span></h4>
            <ul>
              <li><strong><span className="hi">सरकारिया आयोग (1983):</span><span className="en">Sarkaria Commission
                    (1983):</span></strong> <span className="hi">केंद्र-राज्य संबंधों की समीक्षा के लिए नियुक्त। अनुच्छेद
                  356
                  (राष्ट्रपति शासन) के दुरुपयोग को रोकने की सिफारिश की।</span><span className="en">Appointed to review
                  Centre-State relations. Recommended preventing the misuse of Article 356 (President's Rule).</span>
              </li>
              <li><strong><span className="hi">संसद (विधायिका):</span><span className="en">Parliament
                    (Legislature):</span></strong> <span className="hi">लोकसभा (जनता का सदन, धन विधेयक की विशेष शक्ति) और
                  राज्यसभा (राज्यों का स्थायी सदन, एक-तिहाई सदस्य हर 2 वर्ष में सेवानिवृत्त)।</span><span className="en">Lok
                  Sabha (House of the People, special power over Money Bills) and Rajya Sabha (Permanent House of
                  States,
                  one-third members retire every 2 years).</span></li>
              <li><strong><span className="hi">न्यायिक सक्रियतावाद (Judicial Activism) और जनहित याचिका (PIL):</span><span
                    className="en">Judicial Activism and PIL:</span></strong> <span className="hi">भारत में 1970 के दशक में
                  जस्टिस
                  पी. एन. भगवती और वी. आर. कृष्ण अय्यर ने PIL की शुरुआत की, जिससे न्याय प्रणाली का लोकतंत्रीकरण
                  हुआ।</span><span className="en">In India, Justices P. N. Bhagwati and V. R. Krishna Iyer introduced Public
                  Interest Litigation (PIL) in the 1970s, leading to the democratization of the justice system.</span>
              </li>
            </ul>
          </div>

          {/* ── NEW: Tip Box — Answer Writing ── */}
          <div className="tip-box">
            <h4><span className="hi">📝 परीक्षा उत्तर लेखन — गोल्ड मेडल टिप</span><span className="en">📝 Exam Answer Writing — Gold Medal Tip</span></h4>
            <p><span className="hi">हर उत्तर में यह संरचना अपनाएं: <strong>1. परिचय</strong> (1-2 वाक्य — विषय की परिभाषा), <strong>2. मुख्य भाग</strong> (विद्वानों के मत + उदाहरण + तुलना), <strong>3. निष्कर्ष</strong> (समकालीन प्रासंगिकता)। हमेशा 2-3 विद्वानों (Scholars) के नाम और उनकी पुस्तकें लिखें!</span>
            <span className="en">Follow this structure in every answer: <strong>1. Introduction</strong> (1-2 sentences — define the topic), <strong>2. Body</strong> (scholars&apos; views + examples + comparisons), <strong>3. Conclusion</strong> (contemporary relevance). Always mention 2-3 scholars and their books!</span></p>
          </div>

          {/**/}
          <div className="paper-section" data-accent="green-qa" id="sem1-qa">
            <h3 className="paper-title"
              style={{"background": "linear-gradient(135deg, #10b981 0%, #059669 100%)", "color": "white"}}>
              <Trophy size={18} />
              <span className="hi">सेमेस्टर I - मास्टर Q&amp;A और UGC NET टिप्स</span>
              <span className="en">Semester I - Master Q&amp;A &amp; UGC NET Tips</span>
            </h3>

            <p className="intro-text">
              <span className="hi">परीक्षा में सर्वोच्च अंक (Gold Medal) और JRF के लिए अति-महत्वपूर्ण प्रश्न।</span>
              <span className="en">Highly important questions for Gold Medal in University exams and JRF.</span>
            </p>

            {/**/}
            <h4 className="unit-title" style={{"color": "#6366f1"}}><BookOpen size={18} /> Political Theory (राजनीतिक
              सिद्धांत)</h4>
            <div className="content-box">
              <h5 className="qa-section-title"><Zap size={18} style={{"color": "#f59e0b"}} /> Short Questions (2-5
                Marks)</h5>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q1</span> <span className="hi">'उत्तर-व्यवहार क्रांति' क्या है?</span><span
                    className="en">What is the 'Post-Behavioral Revolution'?</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">1960 के दशक के अंत में डेविड ईस्टन के नेतृत्व में, यह व्यवहारवाद के अत्यधिक
                      वैज्ञानिक और मूल्य-मुक्त दृष्टिकोण के खिलाफ एक प्रतिक्रिया थी। इसने वास्तविक दुनिया की सामाजिक
                      समस्याओं को हल करने के लिए दो मुख्य सिद्धांतों पर ध्यान केंद्रित किया: 'कार्रवाई' और
                      'प्रासंगिकता'। ईस्टन ने तर्क दिया कि "बिल्कुल अप्रासंगिक होने की तुलना में अस्पष्ट लेकिन प्रासंगिक
                      होना बेहतर है।"</span><span className="en">Led by <strong>David Easton</strong> in the late 1960s, it
                      was a reaction against the excessive scientific and value-free approach of Behavioralism. It
                      focused on two main tenets: <strong>'Action'</strong> and <strong>'Relevance'</strong> to solve
                      real-world social problems. Easton argued that "it is better to be vague but relevant than to be
                      precisely irrelevant."</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q2</span> <span className="hi">जॉन रॉल्स की 'अज्ञानता का पर्दा'
                    समझाइये।</span><span className="en">Explain John Rawls' 'Veil of Ignorance'.</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">एक विचार प्रयोग जहां व्यक्ति अपने स्वयं के वर्ग, लिंग, नस्ल या क्षमताओं को जाने
                      बिना "मूल स्थिति" से एक न्यायपूर्ण समाज का निर्माण करते हैं। यह निष्पक्ष नियम-निर्माण सुनिश्चित
                      करता है क्योंकि, सबसे निचले पायदान पर पहुंच जाने के डर से, लोग निष्पक्ष सिद्धांत तैयार करेंगे जो
                      सबसे खराब स्थिति की रक्षा करेंगे।</span><span className="en">A thought experiment where individuals
                      design a just society from an "original position" without knowing their own class, gender, race,
                      or abilities. This ensures impartial rule-making because, out of fear of ending up at the bottom,
                      people will design fair principles that protect the worst-off.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q3</span> <span className="hi">'नकारात्मक स्वतंत्रता' को परिभाषित
                    करें।</span><span className="en">Define 'Negative Liberty'.</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">हॉब्स, लोके और यशायाह बर्लिन जैसे विचारकों द्वारा समर्थित, इसे किसी व्यक्ति के
                      जीवन में बाहरी बाधाओं या हस्तक्षेप की अनुपस्थिति के रूप में परिभाषित किया गया है। यह एक न्यूनतम
                      राज्य की वकालत करता है जहां व्यक्तियों को अपनी पसंद चुनने के लिए अकेला छोड़ दिया जाता
                      है।</span><span className="en">Supported by thinkers like Hobbes, Locke, and Isaiah Berlin, it is
                      defined as the <strong>absence of external constraints</strong> or interference in an individual's
                      life. It advocates for a minimal state where individuals are left alone to make their own
                      choices.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q4</span> <span className="hi">'बहुसंस्कृतिवाद' क्या है?</span><span
                    className="en">What is 'Multiculturalism'?</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">एक राजनीतिक दर्शन जो किसी राज्य के भीतर अल्पसंख्यक समूहों के सांस्कृतिक, धार्मिक
                      और जातीय मतभेदों को पहचानता है, समायोजित करता है और उनका सम्मान करता है। विल किम्लिका जैसे विचारक
                      इन अल्पसंख्यक संस्कृतियों को जबरन आत्मसात होने से बचाने के लिए विशिष्ट समूह-विभेदित अधिकारों की
                      वकालत करते हैं।</span><span className="en">A political philosophy that recognizes, accommodates, and
                      respects the cultural, religious, and ethnic differences of minority groups within a state.
                      Thinkers like <strong>Will Kymlicka</strong> advocate for specific group-differentiated rights to
                      protect these minority cultures from forced assimilation.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q5</span> <span className="hi">'आधिपत्य' (ग्राम्शी) क्या है?</span><span
                    className="en">What is 'Hegemony' (Gramsci)?</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">एंटोनियो ग्राम्शी द्वारा विकसित एक अवधारणा, जिसका अर्थ शासक वर्ग का वैचारिक और
                      सांस्कृतिक वर्चस्व है। प्रत्यक्ष बल के विपरीत, आधिपत्य विनिर्माण सहमति से संचालित होता है, जिससे
                      शासक वर्ग के मूल्य श्रमिक वर्ग के लिए "सामान्य ज्ञान" की तरह प्रतीत होते हैं।</span><span
                      className="en">A concept developed by Antonio Gramsci, meaning the <strong>ideological and cultural
                        domination</strong> of the ruling class. Unlike direct force, hegemony operates by manufacturing
                      consent, making the values of the ruling class seem like "common sense" to the working
                      class.</span></p>
                </div>
              </details>

              <h5 className="qa-section-title" style={{"marginTop": "20px"}}><PenTool size={18} style={{"color": "#3b82f6"}} /> Long Questions (15-20 Marks)</h5>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q1</span> <span className="hi">राजनीतिक सिद्धांत के 'पतन और पुनरुत्थान' पर
                    बहस का परीक्षण करें।</span><span className="en">Examine the debate on the 'Decline and Resurgence' of
                    Political Theory.</span> <span className="qa-marks">[20 Marks]</span></summary>
                <div className="qa-content">
                  <h5><span className="hi">1 परिचय</span><span className="en">1. Introduction</span></h5>
                  <p><span className="hi">20वीं सदी के मध्य में, प्रत्यक्षवाद और व्यवहारवाद के उदय ने विद्वानों को राजनीतिक
                      सिद्धांत की "मृत्यु" की घोषणा करने के लिए प्रेरित किया। हालाँकि, 1970 के दशक में इसका बड़े पैमाने
                      पर पुनरुत्थान देखा गया। यह बहस आधुनिक राजनीति विज्ञान को समझने के लिए केंद्रीय है।</span><span
                      className="en">In the mid-20th century, the rise of Positivism and Behavioralism led scholars to
                      declare the "death" of political theory. However, the 1970s saw its massive resurgence. This
                      debate is central to understanding modern political science.</span></p>
                  <h5><span className="hi">2. राजनीतिक सिद्धांत का पतन (1950-60 के दशक)</span><span className="en">2. Decline of
                      Political Theory (1950s-60s)</span></h5>
                  <ul>
                    <li><span className="hi">पीटर लासलेट (1956): प्रसिद्ध रूप से घोषित, "फिलहाल, वैसे भी, राजनीतिक दर्शन मर
                        चुका है।"</span><span className="en"><strong>Peter Laslett (1956):</strong> Famously declared, "For
                        the moment, anyway, political philosophy is dead."</span></li>
                    <li><span className="hi">डेविड ईस्टन का दृष्टिकोण: उन्होंने गिरावट के लिए ऐतिहासिकता (केवल अतीत पर ध्यान
                        केंद्रित करना) और नैतिक सापेक्षवाद को जिम्मेदार ठहराया। ध्यान पूरी तरह से अनुभवजन्य डेटा और
                        तथ्यों पर केंद्रित हो गया।</span><span className="en"><strong>David Easton's View:</strong> He
                        blamed historicism (focusing only on the past) and moral relativism for the decline. The focus
                        shifted purely to empirical data and facts.</span></li>
                    <li><span className="hi">रॉबर्ट डाहल और अल्फ्रेड कोब्बन: तर्क दिया कि शास्त्रीय राजनीतिक सिद्धांत ने
                        समकालीन समस्याओं को हल करने में अपनी प्रासंगिकता खो दी है।</span><span className="en"><strong>Robert
                          Dahl &amp; Alfred Cobban:</strong> Argued that classical political theory had lost its
                        relevance in solving contemporary problems.</span></li>
                  </ul>
                  <h5><span className="hi">3. राजनीतिक सिद्धांत का पुनरुत्थान (1970 के दशक के बाद)</span><span className="en">3.
                      Resurgence of Political Theory (1970s Onwards)</span></h5>
                  <ul>
                    <li><span className="hi">जॉन रॉल्स (1971): उनकी पुस्तक 'ए थ्योरी ऑफ जस्टिस' ने अनुशासन में मूल्यों
                        (न्याय, निष्पक्षता) को व्यवस्थित रूप से फिर से पेश करके मानक राजनीतिक सिद्धांत को अकेले ही
                        पुनर्जीवित किया।</span><span className="en"><strong>John Rawls (1971):</strong> His book <em>'A
                          Theory of Justice'</em> single-handedly revived normative political theory by systematically
                        re-introducing values (justice, fairness) into the discipline.</span></li>
                    <li><span className="hi">उत्तर-व्यवहारवाद: ईस्टन ने स्वयं 'प्रासंगिकता के प्रमाण' पर ध्यान केंद्रित करते
                        हुए उत्तर-व्यवहारवादी क्रांति का आह्वान किया।</span><span
                        className="en"><strong>Post-Behavioralism:</strong> Easton himself called for a post-behavioral
                        revolution focusing on 'credo of relevance'.</span></li>
                    <li><span className="hi">नई विचारधाराओं का उदय: साम्यवाद, नारीवाद और बहुसंस्कृतिवाद ने नई सैद्धांतिक
                        बहसें लाईं, जिससे साबित हुआ कि सिद्धांत बहुत जीवंत था।</span><span className="en"><strong>Rise of
                          New Ideologies:</strong> Communitarianism, Feminism, and Multiculturalism brought fresh
                        theoretical debates, proving theory was very much alive.</span></li>
                  </ul>
                  <h5><span className="hi">4. निष्कर्ष</span><span className="en">4. Conclusion</span></h5>
                  <p><span className="hi">यह गिरावट व्यवहारगत सनक के कारण उत्पन्न एक अस्थायी ग्रहण मात्र थी। आज, अनुभवजन्य
                      अनुसंधान और मानक सिद्धांत सह-अस्तित्व में हैं, जिससे राजनीति विज्ञान एक समृद्ध और संतुलित अनुशासन
                      बन गया है।</span><span className="en">The decline was merely a temporary eclipse caused by the
                      behavioral craze. Today, empirical research and normative theory coexist, making political science
                      a rich and balanced discipline.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q2</span> <span className="hi">जॉन रॉल्स के न्याय सिद्धांत का आलोचनात्मक
                    विश्लेषण करें।</span><span className="en">Critically analyze John Rawls' Theory of Justice.</span> <span
                    className="qa-marks">[20 Marks]</span></summary>
                <div className="qa-content">
                  <h5><span className="hi">1 परिचय</span><span className="en">1. Introduction</span></h5>
                  <p><span className="hi">जॉन रॉल्स ने अपनी महान कृति 'ए थ्योरी ऑफ जस्टिस' (1971) में तत्कालीन प्रमुख
                      उपयोगितावादी दृष्टिकोण को चुनौती देते हुए "न्याय को निष्पक्षता के रूप में" पर आधारित एक सिद्धांत
                      प्रस्तुत किया।</span><span className="en">John Rawls in his magnum opus <em>'A Theory of Justice'
                        (1971)</em> presented a theory based on "Justice as Fairness," challenging the then-dominant
                      utilitarian approach.</span></p>
                  <h5><span className="hi">2. मूल अवधारणाएँ</span><span className="en">2. Core Concepts</span></h5>
                  <ul>
                    <li><span className="hi">मूल स्थिति और अज्ञानता का पर्दा: लोग अपनी सामाजिक/आर्थिक स्थिति को जाने बिना,
                        निष्पक्ष, निष्पक्ष नियमों को सुनिश्चित करते हुए समाज को डिजाइन करते हैं।</span><span
                        className="en"><strong>Original Position &amp; Veil of Ignorance:</strong> People design society
                        without knowing their social/economic status, ensuring unbiased, fair rules.</span></li>
                    <li><span className="hi">शाब्दिक क्रम: सिद्धांतों को सख्त प्राथमिकता में व्यवस्थित किया जाता है; समानता
                        के लिए स्वतंत्रता से समझौता नहीं किया जा सकता।</span><span className="en"><strong>Lexical
                          Order:</strong> Principles are arranged in strict priority; liberty cannot be compromised for
                        equality.</span></li>
                  </ul>
                  <h5><span className="hi">3. न्याय के दो सिद्धांत</span><span className="en">3. Two Principles of
                      Justice</span></h5>
                  <ul>
                    <li><span className="hi">पहला सिद्धांत (समान बुनियादी स्वतंत्रताएं): प्रत्येक व्यक्ति को दूसरों के साथ
                        संगत सबसे व्यापक बुनियादी स्वतंत्रता का समान अधिकार है।</span><span className="en"><strong>First
                          Principle (Equal Basic Liberties):</strong> Each person has an equal right to the most
                        extensive basic liberties compatible with others.</span></li>
                    <li><span className="hi">दूसरा सिद्धांत (सामाजिक और आर्थिक असमानताएँ): असमानताएँ तभी स्वीकार्य हैं जब वे
                        दो शर्तों को पूरा करती हों:
                        (ए) अंतर सिद्धांत: उन्हें समाज के सबसे कम सुविधा प्राप्त सदस्यों के लिए सबसे बड़ा लाभ होना
                        चाहिए।
                        (बी) अवसर की उचित समानता: उचित समानता की शर्तों के तहत कार्यालय और पद सभी के लिए खुले होने
                        चाहिए।</span><span className="en"><strong>Second Principle (Social &amp; Economic
                          Inequalities):</strong> Inequalities are allowed only if they satisfy two conditions:
                        <br />(a) <strong>Difference Principle:</strong> They must be to the greatest benefit of the least
                        advantaged members of society.
                        <br />(b) <strong>Fair Equality of Opportunity:</strong> Offices and positions must be open to all
                        under conditions of fair equality.
                      </span></li>
                  </ul>
                  <h5><span className="hi">4. आलोचनाएँ</span><span className="en">4. Criticisms</span></h5>
                  <ul>
                    <li><span className="hi">कम्यूनिटेरियन क्रिटिक (माइकल सैंडल): रॉल्स सामुदायिक बंधनों की अनदेखी करते हुए
                        व्यक्तियों को "भारमुक्त स्वयं" के रूप में देखते हैं।</span><span
                        className="en"><strong>Communitarian Critique (Michael Sandel):</strong> Rawls views individuals as
                        "unencumbered selves," ignoring community bonds.</span></li>
                    <li><span className="hi">उदारवादी आलोचना (रॉबर्ट नोज़िक): पुनर्वितरण के लिए कराधान (अंतर सिद्धांत) जबरन
                        श्रम के समान है।</span><span className="en"><strong>Libertarian Critique (Robert Nozick):</strong>
                        Taxation for redistribution (Difference Principle) is akin to forced labor.</span></li>
                  </ul>
                  <h5><span className="hi">5। उपसंहार</span><span className="en">5. Conclusion</span></h5>
                  <p><span className="hi">आलोचनाओं के बावजूद, रॉल्स ने राजनीतिक दर्शन को गहराई से बदल दिया। उनका समतावादी
                      ढांचा आधुनिक कल्याणकारी राज्यों के लिए मानक बना हुआ है।</span><span className="en">Despite criticisms,
                      Rawls profoundly transformed political philosophy. His egalitarian framework remains the benchmark
                      for modern welfare states.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q3</span> <span className="hi">यशायाह बर्लिन के संदर्भ में नकारात्मक और
                    सकारात्मक स्वतंत्रता की तुलना करें।</span><span className="en">Compare Negative and Positive Liberty
                    with reference to Isaiah Berlin.</span> <span className="qa-marks">[15 Marks]</span></summary>
                <div className="qa-content">
                  <h5><span className="hi">1 परिचय</span><span className="en">1. Introduction</span></h5>
                  <p><span className="hi">यशायाह बर्लिन ने 1958 के अपने मौलिक निबंध "टू कॉन्सेप्ट्स ऑफ लिबर्टी" में
                      नकारात्मक और सकारात्मक स्वतंत्रता के बीच स्पष्ट अंतर किया।</span><span className="en">Isaiah Berlin,
                      in his seminal 1958 essay <em>"Two Concepts of Liberty"</em>, made a clear distinction between
                      Negative and Positive liberty.</span></p>
                  <h5><span className="hi">2. नकारात्मक स्वतंत्रता</span><span className="en">2. Negative Liberty</span></h5>
                  <ul>
                    <li><span className="hi">अर्थ: दूसरों के दबाव या हस्तक्षेप का अभाव। यह इस प्रश्न का उत्तर देता है: "वह
                        कौन सा क्षेत्र है जिसके भीतर विषय को वह करने के लिए छोड़ दिया जाना चाहिए जो वह चाहता
                        है?"</span><span className="en"><strong>Meaning:</strong> The absence of coercion or interference by
                        others. It answers the question: "What is the area within which the subject should be left to do
                        what he wants?"</span></li>
                    <li><span className="hi">प्रकृति: यह बाहरी बाधाओं से 'मुक्ति' है। यह न्यूनतम राज्य की वकालत करता
                        है।</span><span className="en"><strong>Nature:</strong> It is 'freedom from' external constraints.
                        It advocates for a minimal state.</span></li>
                    <li><span className="hi">प्रस्तावक: हॉब्स, लॉक, जे.एस. मिल, यशायाह बर्लिन।</span><span
                        className="en"><strong>Proponents:</strong> Hobbes, Locke, J.S. Mill, Isaiah Berlin.</span></li>
                  </ul>
                  <h5><span className="hi">3. सकारात्मक स्वतंत्रता</span><span className="en">3. Positive Liberty</span></h5>
                  <ul>
                    <li><span className="hi">अर्थ: अपना स्वामी स्वयं होना। इसका उत्तर है: "नियंत्रण का स्रोत कौन सा है या
                        कौन है जो किसी को उसके बजाय ऐसा करने के लिए निर्धारित कर सकता है?"</span><span
                        className="en"><strong>Meaning:</strong> Being one's own master. It answers: "What or who is the
                        source of control that can determine someone to do this rather than that?"</span></li>
                    <li><span className="hi">स्वभाव: यह आत्म-साक्षात्कार प्राप्त करने की 'स्वतंत्रता' है। इसमें अक्सर राज्य
                        के हस्तक्षेप की आवश्यकता होती है (उदाहरण के लिए, शिक्षा, स्वास्थ्य देखभाल प्रदान
                        करना)।</span><span className="en"><strong>Nature:</strong> It is 'freedom to' achieve
                        self-realization. It often requires state intervention (e.g., providing education,
                        healthcare).</span></li>
                    <li><span className="hi">प्रस्तावक: रूसो, हेगेल, टी.एच. ग्रीन, कार्ल मार्क्स.</span><span
                        className="en"><strong>Proponents:</strong> Rousseau, Hegel, T.H. Green, Karl Marx.</span></li>
                  </ul>
                  <h5><span className="hi">4. बर्लिन का रुख</span><span className="en">4. Berlin's Stance</span></h5>
                  <p><span className="hi">बर्लिन ने नकारात्मक स्वतंत्रता को दृढ़ता से प्राथमिकता दी। उन्होंने चेतावनी दी कि
                      सकारात्मक स्वतंत्रता खतरनाक हो सकती है, क्योंकि तानाशाह अक्सर अधिनायकवादी शासन स्थापित करने के लिए
                      "लोगों को बेहतर बनने के लिए मजबूर करने" के बहाने का उपयोग करते हैं।</span><span className="en">Berlin
                      strongly preferred <strong>Negative Liberty</strong>. He warned that Positive Liberty could be
                      dangerous, as dictators often use the excuse of "forcing people to be their better selves" to
                      establish totalitarian regimes.</span></p>
                  <h5><span className="hi">5। उपसंहार</span><span className="en">5. Conclusion</span></h5>
                  <p><span className="hi">जबकि नकारात्मक स्वतंत्रता उत्पीड़न को रोकती है, आधुनिक लोकतंत्रों को यह सुनिश्चित
                      करने के लिए दोनों के संतुलन की आवश्यकता है कि नागरिकों के पास पूर्ण जीवन जीने का अधिकार और क्षमता
                      दोनों हो।</span><span className="en">While Negative liberty prevents oppression, modern democracies
                      need a balance of both to ensure citizens have both the <em>right</em> and the <em>capacity</em>
                      to live fulfilling lives.</span></p>
                </div>
              </details>

              <div className="info-box" style={{"borderLeftColor": "#f59e0b"}}>
                <h4>🎓 UGC NET Expert Tips</h4>
                <p>Memorize Isaiah Berlin's 1958 essay "Two Concepts of Liberty". Know Peter Laslett's quote: "Political
                  philosophy is dead."</p>
              </div>
            </div>

            {/**/}
            <h4 className="unit-title" style={{"color": "#6366f1"}}><Landmark size={18} /> Western Political Thought
              (पाश्चात्य राजनीतिक विचार)</h4>
            <div className="content-box">
              <h5 className="qa-section-title"><Zap size={18} style={{"color": "#f59e0b"}} /> Short Questions (2-5
                Marks)</h5>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q1</span> <span className="hi">प्लेटो की 'दार्शनिक राजा' की अवधारणा क्या
                    है?</span><span className="en">What is Plato's concept of 'Philosopher King'?</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">प्लेटो ने तर्क दिया कि जब तक दार्शनिक राजा बनकर शासन नहीं करते या जो राजा हैं वे
                      दार्शनिक नहीं बन जाते, तब तक शहरों को अपनी बुराइयों से मुक्ति नहीं मिलेगी। एक दार्शनिक राजा को
                      'अच्छे के स्वरूप' का सच्चा ज्ञान होता है और वह ज्ञान के माध्यम से शासन करता है, परिवार और निजी
                      संपत्ति (पत्नियों और संपत्ति का साम्यवाद) से पूरी तरह अलग होता है।</span><span className="en">Plato
                      argued that until philosophers rule as kings or those who are kings become philosophers, cities
                      will have no rest from their evils. A philosopher king has true knowledge of the 'Form of the
                      Good' and rules through wisdom, completely detached from family and private property (Communism of
                      Wives and Property).</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q2</span> <span className="hi">अरस्तू के 'वितरणात्मक न्याय' को परिभाषित
                    करें।</span><span className="en">Define Aristotle's 'Distributive Justice'.</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">यह नागरिकों के बीच उनकी योग्यता या राज्य में योगदान के अनुसार धन, सम्मान और
                      कार्यालयों के वितरण से संबंधित है। अरस्तू 'ज्यामितीय अनुपात' में विश्वास करते थे, जिसका अर्थ है कि
                      समान लोगों के साथ समान व्यवहार किया जाना चाहिए, और असमान लोगों के साथ उनके मूल्य के आधार पर असमान
                      व्यवहार किया जाना चाहिए।</span><span className="en">It concerns the distribution of wealth, honors,
                      and offices among citizens according to their merit or contribution to the state. Aristotle
                      believed in 'geometric proportion', meaning equals should be treated equally, and unequals
                      unequally based on their worth.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q3</span> <span className="hi">हॉब्स की 'प्रकृति की स्थिति' क्या
                    है?</span><span className="en">What is Hobbes' 'State of Nature'?</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">एक काल्पनिक पूर्व-सामाजिक स्थिति जहां कोई कानून, सरकार या प्राधिकरण नहीं है।
                      क्योंकि मनुष्य स्वाभाविक रूप से स्वार्थी होते हैं और भय से प्रेरित होते हैं, यह निरंतर संघर्ष की
                      स्थिति है - "हर आदमी का हर आदमी के खिलाफ युद्ध।" इस अवस्था में जीवन "अकेला, गरीब, गंदा, क्रूर और
                      छोटा होता है।"</span><span className="en">A hypothetical pre-social condition where there is no law,
                      government, or authority. Because humans are naturally selfish and driven by fear, it is a state
                      of constant conflict—a "war of every man against every man." Life in this state is "solitary,
                      poor, nasty, brutish, and short."</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q4</span> <span className="hi">जे.एस. क्या है? मिल का 'हानिकारक
                    सिद्धांत'?</span><span className="en">What is J.S. Mill's 'Harm Principle'?</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">'ऑन लिबर्टी' में व्यक्त, यह कहा गया है कि समाज या राज्य द्वारा व्यक्तिगत
                      स्वतंत्रता में हस्तक्षेप करने का एकमात्र वैध कारण दूसरों को नुकसान पहुंचाने से रोकना है। मिल ने
                      'स्व-संबंधी' कार्यों (जिन्हें राज्य को नहीं छूना चाहिए) और 'अन्य-संबंधी' कार्यों के बीच अंतर
                      किया।</span><span className="en">Articulated in <em>'On Liberty'</em>, it states that the only
                      legitimate reason for society or the state to interfere with individual liberty is to prevent harm
                      to others. Mill distinguished between 'self-regarding' actions (which the state shouldn't touch)
                      and 'other-regarding' actions.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q5</span> <span className="hi">मार्क्स के 'ऐतिहासिक भौतिकवाद' को परिभाषित
                    करें।</span><span className="en">Define Marx's 'Historical Materialism'.</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">इतिहास का मार्क्सवादी सिद्धांत जो मानता है कि भौतिक, आर्थिक ताकतें ("आधार") अंततः
                      सामाजिक, राजनीतिक और सांस्कृतिक संस्थानों ("अधिरचना") को निर्धारित करती हैं। इतिहास उत्पादन के
                      तरीकों में बदलाव से प्रेरित वर्ग संघर्षों के माध्यम से आगे बढ़ता है।</span><span className="en">The
                      Marxist theory of history which posits that the material, economic forces (the "base") ultimately
                      determine the social, political, and cultural institutions (the "superstructure"). History
                      progresses through class struggles driven by changes in the modes of production.</span></p>
                </div>
              </details>

              <h5 className="qa-section-title" style={{"marginTop": "20px"}}><PenTool size={18} style={{"color": "#3b82f6"}} /> Long Questions (15-20 Marks)</h5>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q1</span> <span className="hi">हॉब्स, लॉक और रूसो के सामाजिक अनुबंध
                    सिद्धांतों की तुलना करें और अंतर बताएं।</span><span className="en">Compare and contrast the Social
                    Contract theories of Hobbes, Locke, and Rousseau.</span> <span className="qa-marks">[20 Marks]</span>
                </summary>
                <div className="qa-content">
                  <h5><span className="hi">1 परिचय</span><span className="en">1. Introduction</span></h5>
                  <p><span className="hi">सामाजिक अनुबंध सिद्धांत राज्य की उत्पत्ति को लोगों के बीच एक सचेत समझौते के रूप
                      में बताता है। तीन महानतम प्रतिपादकों के मानव स्वभाव की समझ के आधार पर बहुत अलग-अलग विचार
                      थे।</span><span className="en">The Social Contract theory explains the origin of the state as a
                      conscious agreement among people. The three greatest exponents had vastly different views based on
                      their understanding of human nature.</span></p>
                  <h5><span className="hi">2. प्रकृति की अवस्था</span><span className="en">2. State of Nature</span></h5>
                  <ul>
                    <li><span className="hi">हॉब्स: मनुष्य स्वार्थी है। प्रकृति की स्थिति युद्ध की क्रूर स्थिति
                        थी।</span><span className="en"><strong>Hobbes:</strong> Humans are selfish. State of nature was a
                        brutal state of war.</span></li>
                    <li><span className="hi">लॉक: मनुष्य तर्कसंगत और शांतिपूर्ण हैं। प्रकृति की स्थिति शांतिपूर्ण थी लेकिन
                        प्राकृतिक अधिकारों (जीवन, स्वतंत्रता, संपत्ति) को लागू करने के लिए एक तटस्थ न्यायाधीश का अभाव
                        था।</span><span className="en"><strong>Locke:</strong> Humans are rational and peaceful. State of
                        nature was peaceful but lacked a neutral judge to enforce natural rights (Life, Liberty,
                        Property).</span></li>
                    <li><span className="hi">रूसो: मनुष्य "महान जंगली", शांतिपूर्ण और निर्दोष थे। निजी संपत्ति के आविष्कार
                        ने इस सुखद स्थिति को भ्रष्ट कर दिया, जिससे असमानता पैदा हुई।</span><span
                        className="en"><strong>Rousseau:</strong> Humans were "noble savages", peaceful and innocent. The
                        invention of private property corrupted this idyllic state, leading to inequality.</span></li>
                  </ul>
                  <h5><span className="hi">3. अनुबंध की प्रकृति</span><span className="en">3. Nature of the Contract</span></h5>
                  <ul>
                    <li><span className="hi">हॉब्स: लोगों ने सुरक्षा के लिए अपने सभी अधिकार एक पूर्ण संप्रभु (लेविथान) को
                        सौंप दिए।</span><span className="en"><strong>Hobbes:</strong> People surrendered ALL rights to an
                        absolute sovereign (Leviathan) for security.</span></li>
                    <li><span className="hi">लॉक: लोगों ने केवल दण्ड देने का अधिकार ही त्याग दिया। संप्रभु अनुबंध से बंधा
                        हुआ है और यदि वह प्राकृतिक अधिकारों (सीमित सरकार) का उल्लंघन करता है तो उसे उखाड़ फेंका जा सकता
                        है।</span><span className="en"><strong>Locke:</strong> People surrendered only the right to punish.
                        The sovereign is bound by the contract and can be overthrown if it violates natural rights
                        (Limited Government).</span></li>
                    <li><span className="hi">रूसो: लोगों ने "सामान्य इच्छा" (प्रत्यक्ष लोकतंत्र/लोकप्रिय संप्रभुता) द्वारा
                        शासित, समग्र रूप से समुदाय को अपने अधिकार सौंप दिए।</span><span
                        className="en"><strong>Rousseau:</strong> People surrendered rights to the community as a whole,
                        governed by the "General Will" (Direct Democracy/Popular Sovereignty).</span></li>
                  </ul>
                  <h5><span className="hi">4. सरकार का स्वरूप</span><span className="en">4. Form of Government</span></h5>
                  <ul>
                    <li><span className="hi">हॉब्स: पूर्ण राजतंत्र।</span><span className="en"><strong>Hobbes:</strong> Absolute
                        Monarchy.</span></li>
                    <li><span className="hi">लॉक: संवैधानिक लोकतंत्र।</span><span className="en"><strong>Locke:</strong>
                        Constitutional Democracy.</span></li>
                    <li><span className="hi">रूसो: प्रत्यक्ष/सहभागी लोकतंत्र।</span><span
                        className="en"><strong>Rousseau:</strong> Direct/Participatory Democracy.</span></li>
                  </ul>
                  <h5><span className="hi">5। उपसंहार</span><span className="en">5. Conclusion</span></h5>
                  <p><span className="hi">हॉब्स ने निरपेक्षता का मार्ग प्रशस्त किया, लॉक ने आधुनिक उदारवाद की नींव रखी और
                      रूसो ने लोकतांत्रिक और समाजवादी आदर्शों को प्रेरित किया।</span><span className="en">Hobbes paved the
                      way for absolutism, Locke laid the foundations for modern liberalism, and Rousseau inspired
                      democratic and socialist ideals.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q2</span> <span className="hi">पूंजीवाद की कार्ल मार्क्स की आलोचना और
                    साम्यवादी समाज के उनके दृष्टिकोण का विश्लेषण करें।</span><span className="en">Analyze Karl Marx's
                    critique of Capitalism and his vision of a Communist society.</span> <span className="qa-marks">[20
                    Marks]</span></summary>
                <div className="qa-content">
                  <h5><span className="hi">1 परिचय</span><span className="en">1. Introduction</span></h5>
                  <p><span className="hi">कार्ल मार्क्स ने 'दास कैपिटल' और 'द कम्युनिस्ट मेनिफेस्टो' के माध्यम से पूंजीवाद
                      की संरचनात्मक आलोचना की, इसके अंतर्निहित विरोधाभासों को उजागर किया और इसके अपरिहार्य पतन की
                      भविष्यवाणी की।</span><span className="en">Karl Marx, through <em>'Das Kapital'</em> and <em>'The
                        Communist Manifesto'</em>, provided a structural critique of Capitalism, exposing its inherent
                      contradictions and predicting its inevitable downfall.</span></p>
                  <h5><span className="hi">2. पूंजीवाद की आलोचना</span><span className="en">2. Critique of Capitalism</span>
                  </h5>
                  <ul>
                    <li><span className="hi">अधिशेष मूल्य का सिद्धांत: पूंजीपति श्रमिकों (सर्वहारा वर्ग) को निर्वाह मजदूरी
                        देकर और उनके श्रम द्वारा बनाए गए अतिरिक्त मूल्य (अधिशेष मूल्य) को लाभ के रूप में जेब में डालकर
                        उनका शोषण करते हैं।</span><span className="en"><strong>Theory of Surplus Value:</strong> Capitalists
                        exploit workers (proletariat) by paying them a subsistence wage and pocketing the extra value
                        (surplus value) created by their labor as profit.</span></li>
                    <li><span className="hi">अलगाव: पूंजीवाद श्रमिकों को उनके श्रम के उत्पाद, उत्पादन की प्रक्रिया, उनके
                        साथी श्रमिकों और उनके स्वयं के मानव सार (प्रजाति-अस्तित्व) से अलग कर देता है।</span><span
                        className="en"><strong>Alienation:</strong> Capitalism alienates the worker from the product of
                        their labor, the process of production, their fellow workers, and their own human essence
                        (species-being).</span></li>
                    <li><span className="hi">वर्ग संघर्ष: पूंजीवाद स्वाभाविक रूप से दो विरोधी वर्ग बनाता है: पूंजीपति
                        (मालिक) और सर्वहारा (श्रमिक)।</span><span className="en"><strong>Class Struggle:</strong> Capitalism
                        inherently creates two antagonistic classes: the Bourgeoisie (owners) and the Proletariat
                        (workers).</span></li>
                  </ul>
                  <h5><span className="hi">3. साम्यवादी समाज का दृष्टिकोण</span><span className="en">3. Vision of Communist
                      Society</span></h5>
                  <ul>
                    <li><span className="hi">सर्वहारा वर्ग की तानाशाही: क्रांति के बाद एक संक्रमणकालीन चरण जहां श्रमिक
                        पूंजीवाद को खत्म करने के लिए राज्य तंत्र का नियंत्रण लेते हैं।</span><span
                        className="en"><strong>Dictatorship of the Proletariat:</strong> A transitional phase after the
                        revolution where the workers take control of the state apparatus to dismantle capitalism.</span>
                    </li>
                    <li><span className="hi">वर्गहीन समाज: निजी संपत्ति के उन्मूलन का अर्थ है वर्ग विभाजन का
                        अंत।</span><span className="en"><strong>Classless Society:</strong> Abolition of private property
                        means the end of class divisions.</span></li>
                    <li><span className="hi">राज्यविहीन समाज: चूँकि राज्य केवल वर्ग उत्पीड़न का एक साधन है, वर्गों के ख़त्म
                        होते ही यह "ख़त्म" हो जाएगा।</span><span className="en"><strong>Stateless Society:</strong> Since
                        the state is merely an instrument of class oppression, it will "wither away" once classes are
                        eliminated.</span></li>
                  </ul>
                  <h5><span className="hi">4. निष्कर्ष</span><span className="en">4. Conclusion</span></h5>
                  <p><span className="hi">जबकि मार्क्स की पूंजीवाद के पतन की भविष्यवाणी विश्व स्तर पर साकार नहीं हुई है,
                      शोषण और असमानता की उनकी आलोचना आधुनिक नवउदारवाद के विश्लेषण में गहराई से प्रासंगिक बनी हुई
                      है।</span><span className="en">While Marx's prediction of capitalism's collapse hasn't materialized
                      globally, his critique of exploitation and inequality remains profoundly relevant in analyzing
                      modern neoliberalism.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q3</span> <span className="hi">रूसो के विरोधाभास का मूल्यांकन करें: "मनुष्य
                    स्वतंत्र पैदा होता है, और हर जगह वह जंजीरों में जकड़ा हुआ है।"</span><span className="en">Evaluate
                    Rousseau's paradox: "Man is born free, and everywhere he is in chains."</span> <span
                    className="qa-marks">[15 Marks]</span></summary>
                <div className="qa-content">
                  <h5><span className="hi">1 परिचय</span><span className="en">1. Introduction</span></h5>
                  <p><span className="hi">'द सोशल कॉन्ट्रैक्ट' (1762) की यह प्रसिद्ध प्रारंभिक पंक्ति रूसो की आधुनिक समाज की
                      आलोचना और एक वैध राजनीतिक व्यवस्था की उनकी खोज को दर्शाती है।</span><span className="en">This famous
                      opening line from <em>'The Social Contract' (1762)</em> encapsulates Rousseau's critique of modern
                      society and his quest for a legitimate political order.</span></p>
                  <h5><span className="hi">2. "मनुष्य स्वतंत्र पैदा होता है"</span><span className="en">2. "Man is born
                      free"</span></h5>
                  <p><span className="hi">प्रकृति की स्थिति को संदर्भित करता है, जहां "कुलीन जंगली" प्राकृतिक दया और
                      आत्म-संरक्षण द्वारा निर्देशित एकान्त, शांतिपूर्ण और स्वतंत्र जीवन जीते थे। कोई सामाजिक पदानुक्रम
                      या जबरदस्ती कानून नहीं थे।</span><span className="en">Refers to the state of nature, where the "noble
                      savage" lived a solitary, peaceful, and independent life, guided by natural pity and
                      self-preservation. There were no social hierarchies or coercive laws.</span></p>
                  <h5><span className="hi">3. "हर जगह वह जंजीरों में जकड़ा हुआ है"</span><span className="en">3. "Everywhere he
                      is in chains"</span></h5>
                  <p><span className="hi">आधुनिक नागरिक समाज को संदर्भित करता है। निजी संपत्ति के आविष्कार ने असमानता,
                      ईर्ष्या और संघर्ष को जन्म दिया। अमीरों ने अपने धन की रक्षा के लिए कानून और सरकार बनाई, अनिवार्य
                      रूप से गरीबों को संस्थागत उत्पीड़न (जंजीरों) में फंसाया।</span><span className="en">Refers to modern
                      civil society. The invention of private property led to inequality, jealousy, and conflict. The
                      rich created laws and government to protect their wealth, essentially tricking the poor into
                      institutionalized oppression (chains).</span></p>
                  <h5><span className="hi">4. समाधान: सामान्य इच्छा</span><span className="en">4. The Solution: The General
                      Will</span></h5>
                  <p><span className="hi">रूसो जंगल में वापसी की वकालत नहीं करता। इसके बजाय, वह एक नए सामाजिक अनुबंध का
                      प्रस्ताव करता है जहां नागरिक उन कानूनों का पालन करते हैं जो उन्होंने स्वयं सामान्य इच्छा (समुदाय
                      के सामूहिक हित) के माध्यम से बनाए हैं। जब व्यक्ति अपने बनाये कानूनों का पालन करते हैं, तो वे
                      स्वतंत्र रहते हैं।</span><span className="en">Rousseau doesn't advocate a return to the forest.
                      Instead, he proposes a new social contract where citizens obey laws that they themselves have made
                      through the <strong>General Will</strong> (the collective interest of the community). When
                      individuals obey laws they authored, they remain free.</span></p>
                  <h5><span className="hi">5। उपसंहार</span><span className="en">5. Conclusion</span></h5>
                  <p><span className="hi">विरोधाभास प्राकृतिक स्वतंत्रता के दुखद नुकसान पर प्रकाश डालता है, लेकिन रूसो
                      नागरिक स्वतंत्रता के माध्यम से मुक्ति प्रदान करता है - लोकतांत्रिक स्वशासन में पाई जाने वाली सच्ची
                      स्वतंत्रता।</span><span className="en">The paradox highlights the tragic loss of natural liberty, but
                      Rousseau offers a redemption through civic liberty—true freedom found in democratic
                      self-governance.</span></p>
                </div>
              </details>

              <div className="info-box" style={{"borderLeftColor": "#f59e0b"}}>
                <h4>🎓 UGC NET Expert Tips</h4>
                <p>Chronology is King! Arrange Plato's books (Republic, Statesman, Laws) in order. Understand the
                  difference between Hegel's Dialectical Idealism and Marx's Dialectical Materialism.</p>
              </div>
            </div>

            {/**/}
            <h4 className="unit-title" style={{"color": "#6366f1"}}><CheckCircle size={18} /> Indian Political Thought (भारतीय
              राजनीतिक विचार)</h4>
            <div className="content-box">
              <h5 className="qa-section-title"><Zap size={18} style={{"color": "#f59e0b"}} /> Short Questions (2-5
                Marks)</h5>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q1</span> <span className="hi">कौटिल्य की 'अमात्य' अवधारणा की व्याख्या
                    करें।</span><span className="en">Explain Kautilya's concept of 'Amatya'.</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">कौटिल्य के सप्तांग सिद्धांत (राज्य के सात तत्व) में 'अमात्य' का तात्पर्य
                      मंत्रियों, उच्च अधिकारियों और प्रशासनिक तंत्र से है। वे राजा की आंखें और कान हैं, जो राज्य को
                      कुशलतापूर्वक चलाने के लिए आवश्यक हैं।</span><span className="en">In Kautilya's <em>Saptanga
                        Theory</em> (Seven elements of the state), 'Amatya' refers to the ministers, high officials, and
                      the administrative machinery. They are the eyes and ears of the King, essential for running the
                      state efficiently.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q2</span> <span className="hi">'ड्रेन थ्योरी' क्या है?</span><span
                    className="en">What is the 'Drain Theory'?</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">दादाभाई नौरोजी द्वारा तैयार, इसमें बताया गया कि कैसे ब्रिटिश औपनिवेशिक शासन
                      व्यवस्थित रूप से भारत की संपत्ति को ब्रिटेन में ले जा रहा था (घरेलू शुल्क, पेंशन, असमान व्यापार के
                      माध्यम से), जिससे भारत में व्यापक गरीबी और अकाल पैदा हो रहे थे।</span><span className="en">Formulated
                      by <strong>Dadabhai Naoroji</strong>, it explained how British colonial rule was systematically
                      draining India's wealth to Britain (via home charges, pensions, uneven trade), causing widespread
                      poverty and famines in India.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q3</span> <span className="hi">गांधीजी की 'ट्रस्टीशिप' को परिभाषित
                    करें।</span><span className="en">Define Gandhi's 'Trusteeship'.</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">एक सामाजिक-आर्थिक अवधारणा जहां धनी व्यक्ति स्वेच्छा से अपने धन के 'ट्रस्टी' के रूप
                      में कार्य करते हैं। वे गरिमापूर्ण जीवन के लिए जो कुछ भी चाहते हैं उसके हकदार हैं, लेकिन अधिशेष
                      समाज का है और इसका उपयोग गरीबों के कल्याण के लिए किया जाना चाहिए।</span><span className="en">A
                      socio-economic concept where wealthy individuals voluntarily act as 'trustees' of their wealth.
                      They are entitled to what they need for a dignified life, but the surplus belongs to society and
                      must be used for the welfare of the poor.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q4</span> <span className="hi">'कट्टरपंथी मानवतावाद' क्या है?</span><span
                    className="en">What is 'Radical Humanism'?</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">एम.एन. द्वारा विकसित एक दर्शन। रॉय अपने बाद के वर्षों में। इसने मार्क्सवाद
                      (व्यक्तिगत स्वतंत्रता को दबाने के लिए) और पूंजीवाद (श्रमिकों के शोषण के लिए) दोनों को खारिज कर
                      दिया। इसने मनुष्य, तर्क और नैतिकता को राजनीतिक संगठन के केंद्र में रखा।</span><span className="en">A
                      philosophy developed by <strong>M.N. Roy</strong> in his later years. It rejected both Marxism
                      (for suppressing individual freedom) and Capitalism (for exploiting workers). It placed the human
                      being, reason, and morality at the center of political organization.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q5</span> <span className="hi">'जाति उन्मूलन' क्या है?</span><span
                    className="en">What is 'Annihilation of Caste'?</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">डॉ. बी.आर. द्वारा लिखित एक अप्रकाशित भाषण 1936 में अम्बेडकर। उन्होंने तर्क दिया कि
                      सामाजिक सुधार राजनीतिक सुधार से पहले होना चाहिए, और जाति व्यवस्था में सुधार नहीं किया जा सकता है;
                      इसे मंजूरी देने वाले धार्मिक ग्रंथों (शास्त्रों) को त्यागकर इसे पूरी तरह से नष्ट कर देना
                      चाहिए।</span><span className="en">An undelivered speech written by <strong>Dr. B.R. Ambedkar</strong>
                      in 1936. He argued that social reform must precede political reform, and that the caste system
                      cannot be reformed; it must be completely destroyed by discarding the religious texts (Shastras)
                      that sanction it.</span></p>
                </div>
              </details>

              <h5 className="qa-section-title" style={{"marginTop": "20px"}}><PenTool size={18} style={{"color": "#3b82f6"}} /> Long Questions (15-20 Marks)</h5>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q1</span> <span className="hi">कौटिल्य के राज्य के सप्तांग सिद्धांत और मंडल
                    सिद्धांत का आलोचनात्मक परीक्षण करें।</span><span className="en">Critically examine Kautilya's Saptanga
                    Theory of State and Mandala Theory.</span> <span className="qa-marks">[20 Marks]</span></summary>
                <div className="qa-content">
                  <h5><span className="hi">1 परिचय</span><span className="en">1. Introduction</span></h5>
                  <p><span className="hi">कौटिल्य (चाणक्य) ने अपने प्राचीन ग्रंथ 'अर्थशास्त्र' में शासन, शासन और विदेश नीति
                      के लिए एक अत्यधिक व्यावहारिक और यथार्थवादी रूपरेखा प्रदान की है।</span><span className="en">Kautilya
                      (Chanakya) in his ancient treatise <em>'Arthashastra'</em> provided a highly pragmatic and
                      realistic framework for statecraft, governance, and foreign policy.</span></p>
                  <h5><span className="hi">2. सप्तांग सिद्धांत (राज्य के सात अंग)</span><span className="en">2. Saptanga Theory
                      (Seven Organs of the State)</span></h5>
                  <p><span className="hi">कौटिल्य ने राज्य की तुलना सात तत्वों से युक्त जीवित जीव से की है:</span><span
                      className="en">Kautilya compared the state to a living organism comprising seven elements:</span></p>
                  <ul>
                    <li><span className="hi">स्वामी (राजा): मुखिया. बुद्धिमान, सक्रिय और सदाचारी होना चाहिए।</span><span
                        className="en"><strong>Swami (King):</strong> The head. Must be wise, active, and virtuous.</span>
                    </li>
                    <li><span className="hi">अमात्य (मंत्री): आँखें। प्रशासनिक संरचना.</span><span className="en"><strong>Amatya
                          (Ministers):</strong> The eyes. The administrative structure.</span></li>
                    <li><strong>Janapada (Territory &amp; Population):</strong> The legs. The resource base.</li>
                    <li><span className="hi">दुर्ग (दुर्ग/राजधानी): हथियार. रक्षा के लिए आवश्यक.</span><span
                        className="en"><strong>Durg (Fort/Capital):</strong> The arms. Essential for defense.</span></li>
                    <li><span className="hi">कोष (खज़ाना): मुँह. वित्त राज्य की जीवनधारा है।</span><span
                        className="en"><strong>Kosha (Treasury):</strong> The mouth. Finance is the lifeblood of the
                        state.</span></li>
                    <li><span className="hi">डंडा (सेना): मस्तिष्क. आंतरिक और बाहरी खतरों से बचाता है.</span><span
                        className="en"><strong>Danda (Army):</strong> The brain. Protects from internal and external
                        threats.</span></li>
                    <li><span className="hi">मित्रा (सहयोगी): कान। संकट के समय में विश्वसनीय मित्र।</span><span
                        className="en"><strong>Mitra (Ally):</strong> The ears. Reliable friends in times of crisis.</span>
                    </li>
                  </ul>
                  <h5><span className="hi">3. मंडला सिद्धांत (राज्यों का चक्र)</span><span className="en">3. Mandala Theory
                      (Circle of States)</span></h5>
                  <p><span className="hi">एक भूराजनीतिक सिद्धांत इस सिद्धांत पर आधारित है कि "दुश्मन का दुश्मन दोस्त होता
                      है।" यह एक काल्पनिक राजा (विजीगिषु - विजय का इच्छुक) पर केन्द्रित है जो पड़ोसी राज्यों (अरि -
                      तत्काल पड़ोसी/प्राकृतिक शत्रु) और सहयोगियों (मित्र) के संकेंद्रित वृत्तों से घिरा हुआ
                      है।</span><span className="en">A geopolitical theory based on the principle that "an enemy's enemy is
                      a friend." It centers on a hypothetical king (Vijigishu - desirous of conquest) surrounded by
                      concentric circles of neighboring states (Ari - immediate neighbor/natural enemy) and allies
                      (Mitra).</span></p>
                  <h5><span className="hi">4. निष्कर्ष</span><span className="en">4. Conclusion</span></h5>
                  <p><span className="hi">कौटिल्य के सिद्धांत उन्हें भारत में राजनीतिक यथार्थवाद का अग्रदूत बनाते हैं, जो
                      मैकियावेली से सदियों पहले का है। शासन कला और कूटनीति पर उनकी अंतर्दृष्टि आधुनिक भू-राजनीति में
                      प्रासंगिक बनी हुई है।</span><span className="en">Kautilya's theories make him the pioneer of political
                      realism in India, predating Machiavelli by centuries. His insights on statecraft and diplomacy
                      remain relevant in modern geopolitics.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q2</span> <span className="hi">जाति और अस्पृश्यता के मुद्दे पर गांधी और
                    अम्बेडकर के बीच बहस का मूल्यांकन करें।</span><span className="en">Evaluate the debate between Gandhi and
                    Ambedkar on the issue of Caste and Untouchability.</span> <span className="qa-marks">[20 Marks]</span>
                </summary>
                <div className="qa-content">
                  <h5><span className="hi">1 परिचय</span><span className="en">1. Introduction</span></h5>
                  <p><span className="hi">महात्मा गांधी और डॉ. बी.आर. अम्बेडकर दोनों ही अस्पृश्यता उन्मूलन के लिए गहराई से
                      प्रतिबद्ध थे, लेकिन उनके दृष्टिकोण, दर्शन और तरीके मौलिक रूप से विरोध में थे।</span><span
                      className="en">Mahatma Gandhi and Dr. B.R. Ambedkar were both deeply committed to eradicating
                      untouchability, but their approaches, philosophies, and methods were fundamentally opposed.</span>
                  </p>
                  <h5><span className="hi">2. गांधीजी का दृष्टिकोण</span><span className="en">2. Gandhi's Perspective</span>
                  </h5>
                  <ul>
                    <li><span className="hi">वर्ण व्यवस्था का दृष्टिकोण: गांधीजी ने एक प्राकृतिक व्यवस्था के रूप में
                        आदर्शीकृत वर्ण व्यवस्था (व्यवसाय के आधार पर श्रम का विभाजन) का समर्थन किया, लेकिन हिंदू धर्म पर
                        "कलंक" के रूप में अस्पृश्यता का विरोध किया।</span><span className="en"><strong>View of Varna
                          System:</strong> Gandhi supported the idealized Varna system (division of labor based on
                        occupation) as a natural order, but opposed untouchability as a "blight" on Hinduism.</span>
                    </li>
                    <li><span className="hi">सुधार का दृष्टिकोण: वह उच्च जाति के हिंदुओं के बीच 'हृदय परिवर्तन' में विश्वास
                        करते थे। उन्होंने "हरिजन" (भगवान के बच्चे) शब्द गढ़ा और मंदिर प्रवेश आंदोलनों और सामाजिक उत्थान
                        पर ध्यान केंद्रित किया।</span><span className="en"><strong>Approach to Reform:</strong> He believed
                        in 'change of heart' among upper-caste Hindus. He coined the term "Harijan" (Children of God)
                        and focused on temple entry movements and social upliftment.</span></li>
                    <li><span className="hi">विधिः एकीकरणवादी। उन्होंने दलितों के लिए अलग निर्वाचन क्षेत्र का विरोध किया,
                        उन्हें डर था कि इससे हिंदू समाज स्थायी रूप से विभाजित हो जाएगा।</span><span
                        className="en"><strong>Method:</strong> Integrationist. He opposed separate electorates for Dalits,
                        fearing it would permanently divide Hindu society.</span></li>
                  </ul>
                  <h5><span className="hi">3. अम्बेडकर का दृष्टिकोण</span><span className="en">3. Ambedkar's Perspective</span>
                  </h5>
                  <ul>
                    <li><span className="hi">वर्ण व्यवस्था का दृष्टिकोण: अम्बेडकर ने वर्ण व्यवस्था को पूरी तरह से खारिज कर
                        दिया, यह तर्क देते हुए कि जाति और अस्पृश्यता हिंदू धार्मिक ग्रंथों से अटूट रूप से जुड़े हुए
                        हैं।</span><span className="en"><strong>View of Varna System:</strong> Ambedkar rejected the Varna
                        system entirely, arguing that caste and untouchability are inextricably linked to Hindu
                        religious texts.</span></li>
                    <li><span className="hi">सुधार का दृष्टिकोण: उन्होंने तर्क दिया कि "हृदय परिवर्तन" एक भ्रम था। दलितों को
                        राजनीतिक शक्ति, कानूनी अधिकार और राज्य संरक्षण की आवश्यकता थी। उन्होंने "जाति उन्मूलन" की वकालत
                        की।</span><span className="en"><strong>Approach to Reform:</strong> He argued that a "change of
                        heart" was a delusion. Dalits needed political power, legal rights, and state protection. He
                        advocated for the "Annihilation of Caste."</span></li>
                    <li><span className="hi">विधि: कट्टरपंथी और संस्थागत. उन्होंने अलग निर्वाचन क्षेत्रों की मांग की (जिससे
                        पूना समझौता 1932 हुआ) और अंततः बौद्ध धर्म में परिवर्तित हो गए, उन्होंने कहा, "मैं एक हिंदू के
                        रूप में पैदा हुआ था, लेकिन मैं एक हिंदू के रूप में नहीं मरूंगा।"</span><span
                        className="en"><strong>Method:</strong> Radical and Institutional. He demanded separate electorates
                        (leading to the Poona Pact 1932) and ultimately converted to Buddhism, stating, "I was born a
                        Hindu, but I will not die a Hindu."</span></li>
                  </ul>
                  <h5><span className="hi">4. निष्कर्ष</span><span className="en">4. Conclusion</span></h5>
                  <p><span className="hi">गांधी ने इस मुद्दे को एक नैतिक और धार्मिक सुधारक के रूप में देखा, जबकि अंबेडकर ने
                      इसे नागरिक अधिकारों की मांग करने वाले एक आधुनिक राजनीतिक नेता और कानूनी विद्वान के रूप में देखा।
                      दोनों ने सामाजिक न्याय के संबंध में आधुनिक भारतीय चेतना को महत्वपूर्ण रूप से आकार
                      दिया।</span><span className="en">Gandhi approached the issue as a moral and religious reformer, while
                      Ambedkar approached it as a modern political leader and legal scholar demanding civil rights. Both
                      significantly shaped the modern Indian consciousness regarding social justice.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q3</span> <span className="hi">Analyze the political philosophy of Bal
                    Gangadhar Tilak (Swaraj, Nationalism).</span><span className="en">Analyze the political philosophy of
                    Bal Gangadhar Tilak (Swaraj, Nationalism).</span> <span className="qa-marks">[15 Marks]</span></summary>
                <div className="qa-content">
                  <h5><span className="hi">1 परिचय</span><span className="en">1. Introduction</span></h5>
                  <p>Bal Gangadhar Tilak, known as the "Father of Indian Unrest," shifted the Indian national movement
                    from the petition-politics of Moderates to mass-based radical nationalism.</p>
                  <h5><span className="hi">2. स्वराज की अवधारणा</span><span className="en">2. Concept of Swaraj</span></h5>
                  <ul>
                    <li><span className="hi">तिलक ने प्रसिद्ध घोषणा की, "स्वराज मेरा जन्मसिद्ध अधिकार है, और मैं इसे लेकर
                        रहूंगा।"</span><span className="en">Tilak famously declared, <em>"Swaraj is my birthright, and I
                          shall have it."</em></span></li>
                    <li><span className="hi">उनके लिए, स्वराज केवल राजनीतिक स्वतंत्रता (गृह शासन) नहीं बल्कि एक धर्म (नैतिक
                        कर्तव्य) था। इसका मतलब ब्रिटिश सांस्कृतिक और राजनीतिक आधिपत्य को अस्वीकार करते हुए भारतीय मामलों
                        पर भारतीयों का नियंत्रण था।</span><span className="en">For him, Swaraj was not just political
                        freedom (home rule) but a Dharma (moral duty). It meant Indian control over Indian affairs,
                        rejecting British cultural and political hegemony.</span></li>
                  </ul>
                  <h5><span className="hi">3. सांस्कृतिक राष्ट्रवाद</span><span className="en">3. Cultural Nationalism</span>
                  </h5>
                  <ul>
                    <li><span className="hi">पश्चिमी संस्थानों की प्रशंसा करने वाले शुरुआती नरमपंथियों के विपरीत, तिलक ने
                        अपने राष्ट्रवाद को भारतीय संस्कृति और हिंदू परंपराओं में निहित किया।</span><span
                        className="en">Unlike early moderates who admired Western institutions, Tilak rooted his nationalism
                        in Indian culture and Hindu traditions.</span></li>
                    <li><span className="hi">उन्होंने सार्वजनिक त्योहारों - गणपति उत्सव (1893) और शिवाजी उत्सव (1895) को
                        पुनर्जीवित किया - इनका उपयोग जनता को राजनीतिक रूप से संगठित करने और एकता की भावना को बढ़ावा देने
                        के लिए किया गया।</span><span className="en">He revitalized public festivals—the <strong>Ganapati
                          festival</strong> (1893) and the <strong>Shivaji festival</strong> (1895)—using them to
                        mobilize the masses politically and foster a sense of unity.</span></li>
                  </ul>
                  <h5><span className="hi">4. संघर्ष के तरीके</span><span className="en">4. Methods of Struggle</span></h5>
                  <p><span className="hi">उन्होंने चार सूत्री कार्यक्रम की वकालत की: बहिष्कार, स्वदेशी, राष्ट्रीय शिक्षा और
                      निष्क्रिय प्रतिरोध। उन्होंने अपने समाचार पत्रों, केसरी (मराठी) और महरत्ता (अंग्रेजी) के माध्यम से
                      इन्हें लोकप्रिय बनाया।</span><span className="en">He advocated the four-point program:
                      <strong>Boycott, Swadeshi, National Education, and Passive Resistance</strong>. He popularized
                      these through his newspapers, <em>Kesari</em> (Marathi) and <em>Mahratta</em> (English).</span>
                  </p>
                  <h5><span className="hi">5। उपसंहार</span><span className="en">5. Conclusion</span></h5>
                  <p><span className="hi">तिलक ने स्वतंत्रता संग्राम को लोकतांत्रिक बनाया, राजनीतिक मुक्ति को सांस्कृतिक
                      गौरव से जोड़ा, गांधी के बाद के जन आंदोलनों के लिए आधार तैयार किया।</span><span className="en">Tilak
                      democratized the freedom struggle, linking political emancipation with cultural pride, laying the
                      groundwork for Gandhi's later mass movements.</span></p>
                </div>
              </details>

              <div className="info-box" style={{"borderLeftColor": "#f59e0b"}}>
                <h4>🎓 UGC NET Expert Tips</h4>
                <p>Differentiate ideological clashes (Gandhi vs Ambedkar, Tilak vs Gokhale). Memorize journals
                  (Mooknayak, Harijan, Young India).</p>
              </div>
            </div>

            {/**/}
            <h4 className="unit-title" style={{"color": "#6366f1"}}><Globe size={18} /> Comparative Politics (तुलनात्मक
              राजनीति)</h4>
            <div className="content-box">
              <h5 className="qa-section-title"><Zap size={18} style={{"color": "#f59e0b"}} /> Short Questions (2-5
                Marks)</h5>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q1</span> <span className="hi">डेविड ईस्टन के 'इनपुट-आउटपुट मॉडल' को
                    परिभाषित करें।</span><span className="en">Define David Easton's 'Input-Output Model'.</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">राजनीति के लिए एक प्रणालीगत दृष्टिकोण जहां राजनीतिक व्यवस्था एक वातावरण में
                      संचालित होती है। नागरिक इनपुट प्रदान करते हैं (करों को कम करने जैसी मांगें, और मतदान जैसे समर्थन)।
                      राजनीतिक व्यवस्था (सरकार) इन्हें संसाधित करती है और आउटपुट (कानून, नीतियां) तैयार करती है। फीडबैक
                      लूप आउटपुट को नए इनपुट से जोड़ते हैं।</span><span className="en">A systems approach to politics where
                      the political system operates in an environment. Citizens provide <strong>Inputs</strong> (Demands
                      like lower taxes, and Supports like voting). The political system (government) processes these and
                      produces <strong>Outputs</strong> (Laws, policies). Feedback loops connect outputs back to new
                      inputs.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q2</span> <span className="hi">'रुचि अभिव्यक्ति' क्या है?</span><span
                    className="en">What is 'Interest Articulation'?</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">बादाम के संरचनात्मक-कार्यात्मक ढांचे में, यह वह प्रक्रिया है जिसके द्वारा व्यक्ति
                      और समूह राजनीतिक निर्णय निर्माताओं के समक्ष अपनी मांगों और शिकायतों को व्यक्त करते हैं। यह मुख्य
                      रूप से दबाव समूहों और गैर सरकारी संगठनों द्वारा किया जाता है।</span><span className="en">In Almond's
                      structural-functional framework, it is the process by which individuals and groups express their
                      demands and grievances to political decision-makers. It is primarily performed by <strong>Pressure
                        Groups</strong> and NGOs.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q3</span> <span className="hi">'राजनीतिक संस्कृति' क्या है?</span><span
                    className="en">What is 'Political Culture'?</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">'द सिविक कल्चर' में गेब्रियल बादाम और सिडनी वर्बा द्वारा परिभाषित, यह दृष्टिकोण,
                      विश्वास और भावनाओं का समूह है जो एक राजनीतिक प्रक्रिया को आदेश और अर्थ देता है। उन्होंने इसे
                      पारोचियल (अनजान), सब्जेक्ट (जागरूक लेकिन निष्क्रिय), और प्रतिभागी (सक्रिय) में वर्गीकृत
                      किया।</span><span className="en">Defined by Gabriel Almond and Sidney Verba in <em>'The Civic
                        Culture'</em>, it is the set of attitudes, beliefs, and sentiments that give order and meaning
                      to a political process. They classified it into Parochial (unaware), Subject (aware but inactive),
                      and Participant (active).</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q4</span> <span className="hi">संघीय और एकात्मक प्रणालियों में अंतर
                    बताइए।</span><span className="en">Differentiate Federal and Unitary systems.</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">संघीय: सत्ता संवैधानिक रूप से केंद्र सरकार और क्षेत्रीय इकाइयों (जैसे, यूएसए,
                      भारत) के बीच विभाजित है। एकात्मक: सारी सर्वोच्च शक्ति एक ही केंद्र सरकार में केंद्रित है;
                      क्षेत्रीय इकाइयों के पास केवल प्रत्यायोजित शक्तियाँ हैं (उदाहरण के लिए, यूके,
                      फ़्रांस)।</span><span className="en"><strong>Federal:</strong> Power is constitutionally divided
                      between a central government and regional units (e.g., USA, India). <br /><strong>Unitary:</strong>
                      All supreme power is concentrated in a single central government; regional units only have
                      delegated powers (e.g., UK, France).</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q5</span> <span className="hi">'कानून का शासन' समझाइये।</span><span
                    className="en">Explain 'Rule of Law'.</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">ए.वी. द्वारा लोकप्रिय बनाई गई एक अवधारणा। डाइसी, जिसका अर्थ है कि कोई भी कानून से
                      ऊपर नहीं है। इसमें मनमानी शक्ति के विपरीत नियमित कानून की पूर्ण सर्वोच्चता, कानून के समक्ष समानता
                      और व्यक्तिगत अधिकारों की सुरक्षा शामिल है।</span><span className="en">A concept popularized by A.V.
                      Dicey, meaning that <strong>no one is above the law</strong>. It entails the absolute supremacy of
                      regular law as opposed to arbitrary power, equality before the law, and the protection of
                      individual rights.</span></p>
                </div>
              </details>

              <h5 className="qa-section-title" style={{"marginTop": "20px"}}><PenTool size={18} style={{"color": "#3b82f6"}} /> Long Questions (15-20 Marks)</h5>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q1</span> <span className="hi">गेब्रियल बादाम के संरचनात्मक-कार्यात्मक
                    दृष्टिकोण का आलोचनात्मक परीक्षण करें।</span><span className="en">Critically examine the
                    Structural-Functional approach of Gabriel Almond.</span> <span className="qa-marks">[20 Marks]</span>
                </summary>
                <div className="qa-content">
                  <h5><span className="hi">1 परिचय</span><span className="en">1. Introduction</span></h5>
                  <p><span className="hi">गेब्रियल बादाम ने संरचनात्मक-कार्यात्मक दृष्टिकोण को विभिन्न राजनीतिक प्रणालियों
                      (विशेष रूप से विकसित और विकासशील देशों) की तुलना करने के लिए एक उपकरण के रूप में विकसित किया, जो
                      कि केवल उनके औपचारिक संस्थानों के बजाय उनके द्वारा किए जाने वाले कार्यों को देखते हैं।</span><span
                      className="en">Gabriel Almond developed the Structural-Functional approach as a tool for comparing
                      different political systems (especially developed and developing nations) by looking at what
                      functions they perform, rather than just their formal institutions.</span></p>
                  <h5><span className="hi">2. मूल परिसर</span><span className="en">2. Core Premise</span></h5>
                  <p><span className="hi">प्रत्येक राजनीतिक व्यवस्था में कुछ संरचनाएँ (पार्टियाँ, अदालतें जैसी संस्थाएँ)
                      होती हैं जो विशिष्ट कार्य करती हैं। किसी सिस्टम को समझने के लिए, हमें पूछना चाहिए: "कौन सी
                      संरचनाएँ क्या कार्य करती हैं?"</span><span className="en">Every political system has certain
                      structures (institutions like parties, courts) that perform specific functions. To understand a
                      system, we must ask: "What structures perform what functions?"</span></p>
                  <h5><span className="hi">3. इनपुट कार्य (समाज/गैर-राज्य अभिनेताओं द्वारा निष्पादित)</span><span
                      className="en">3. Input Functions (Performed by society/non-state actors)</span></h5>
                  <ul>
                    <li><span className="hi">राजनीतिक समाजीकरण और भर्ती: लोगों को राजनीतिक भूमिकाओं (परिवार, स्कूल) में
                        शामिल करना।</span><span className="en"><strong>Political Socialization &amp; Recruitment:</strong>
                        Inducting people into political roles (Family, Schools).</span></li>
                    <li><span className="hi">रुचि अभिव्यक्ति: मांगें व्यक्त करना (दबाव समूह)।</span><span
                        className="en"><strong>Interest Articulation:</strong> Expressing demands (Pressure Groups).</span>
                    </li>
                    <li><span className="hi">हित एकत्रीकरण: मांगों को नीति विकल्पों (राजनीतिक दलों) में जोड़ना।</span><span
                        className="en"><strong>Interest Aggregation:</strong> Combining demands into policy alternatives
                        (Political Parties).</span></li>
                    <li><span className="hi">राजनीतिक संचार: सूचना का प्रवाह (मीडिया)।</span><span
                        className="en"><strong>Political Communication:</strong> Flow of information (Media).</span></li>
                  </ul>
                  <h5><span className="hi">4. आउटपुट कार्य (राज्य द्वारा निष्पादित)</span><span className="en">4. Output
                      Functions (Performed by the state)</span></h5>
                  <ul>
                    <li><span className="hi">नियम बनाना: कानून बनाना (विधानमंडल)।</span><span
                        className="en"><strong>Rule-making:</strong> Making laws (Legislature).</span></li>
                    <li><span className="hi">नियम-आवेदन: कानूनों को लागू करना (कार्यकारी/नौकरशाही)।</span><span
                        className="en"><strong>Rule-application:</strong> Implementing laws (Executive/Bureaucracy).</span>
                    </li>
                    <li><span className="hi">नियम-निर्णय : विवादों का समाधान (न्यायपालिका)।</span><span
                        className="en"><strong>Rule-adjudication:</strong> Resolving disputes (Judiciary).</span></li>
                  </ul>
                  <h5><span className="hi">5. आलोचना</span><span className="en">5. Criticism</span></h5>
                  <p><span className="hi">आलोचकों का तर्क है कि यह पश्चिमी पूर्वाग्रह (जातीयकेंद्रवाद) से ग्रस्त है, यह
                      मानते हुए कि एंग्लो-अमेरिकन लोकतांत्रिक मॉडल आदर्श है। प्रणालीगत स्थिरता पर बहुत अधिक ध्यान
                      केंद्रित करने और क्रांतिकारी परिवर्तन की अनदेखी करने के लिए भी इसकी आलोचना की जाती है।</span><span
                      className="en">Critics argue it suffers from a Western bias (ethnocentrism), assuming the
                      Anglo-American democratic model is the ideal. It is also criticized for focusing too much on
                      systemic stability and ignoring revolutionary change.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q2</span> <span className="hi">लूसियन पाइ और सैमुअल हंटिंगटन द्वारा
                    प्रतिपादित राजनीतिक विकास के सिद्धांतों पर चर्चा करें।</span><span className="en">Discuss the theories
                    of Political Development formulated by Lucian Pye and Samuel Huntington.</span> <span
                    className="qa-marks">[20 Marks]</span></summary>
                <div className="qa-content">
                  <h5><span className="hi">1 परिचय</span><span className="en">1. Introduction</span></h5>
                  <p><span className="hi">1960 के दशक में, राजनीतिक वैज्ञानिकों ने यह समझने की कोशिश की कि "तीसरी दुनिया" के
                      नए स्वतंत्र राष्ट्र राजनीतिक रूप से आधुनिकीकरण कैसे करते हैं। पाइ और हंटिंगटन ने सबसे प्रभावशाली
                      रूपरेखाएँ प्रदान कीं।</span><span className="en">In the 1960s, political scientists sought to
                      understand how newly independent nations of the "Third World" modernize politically. Pye and
                      Huntington provided the most influential frameworks.</span></p>
                  <h5><span className="hi">2. लूसियन पाइ का विकास सिंड्रोम</span><span className="en">2. Lucian Pye's
                      Development Syndrome</span></h5>
                  <p><span className="hi">पाइ ने राजनीतिक विकास ("विकास सिंड्रोम") की तीन मुख्य विशेषताओं की पहचान
                      की:</span><span className="en">Pye identified three core characteristics of political development (the
                      "Development Syndrome"):</span></p>
                  <ul>
                    <li><span className="hi">समानता: सामूहिक भागीदारी, सार्वभौमिक कानून और जन्म के बजाय उपलब्धि के आधार पर
                        भर्ती।</span><span className="en"><strong>Equality:</strong> Mass participation, universal laws, and
                        recruitment based on achievement rather than birth.</span></li>
                    <li><span className="hi">क्षमता: सार्वजनिक मामलों को प्रबंधित करने, कानूनों को लागू करने और तनाव को
                        प्रभावी ढंग से प्रबंधित करने की सरकार की क्षमता।</span><span
                        className="en"><strong>Capacity:</strong> The government's ability to manage public affairs, enforce
                        laws, and manage tensions effectively.</span></li>
                    <li><span className="hi">विभेदीकरण: राजनीतिक भूमिकाओं और संरचनाओं का विशेषज्ञता (उदाहरण के लिए,
                        न्यायपालिका और कार्यपालिका का पृथक्करण)।</span><span
                        className="en"><strong>Differentiation:</strong> Specialization of political roles and structures
                        (e.g., separation of judiciary and executive).</span></li>
                  </ul>
                  <h5><span className="hi">3. सैमुअल हंटिंगटन का संस्थागतकरण सिद्धांत</span><span className="en">3. Samuel
                      Huntington's Institutionalization Theory</span></h5>
                  <p><span className="hi">हंटिंगटन ने इस आशावादी दृष्टिकोण को चुनौती दी कि आर्थिक आधुनिकीकरण स्वाभाविक रूप
                      से राजनीतिक विकास की ओर ले जाता है। 'पॉलिटिकल ऑर्डर इन चेंजिंग सोसाइटीज़' में उन्होंने तर्क
                      दिया:</span><span className="en">Huntington challenged the optimistic view that economic modernization
                      naturally leads to political development. In <em>'Political Order in Changing Societies'</em>, he
                      argued:</span></p>
                  <ul>
                    <li><span className="hi">पर्याप्त राजनीतिक संस्थानों के बिना तीव्र सामाजिक लामबंदी से राजनीतिक पतन
                        (अराजकता, तख्तापलट, अस्थिरता) होता है।</span><span className="en">Rapid social mobilization without
                        adequate political institutions leads to <strong>Political Decay</strong> (chaos, coups,
                        instability).</span></li>
                    <li><span className="hi">राजनीतिक विकास को राजनीतिक संगठनों और प्रक्रियाओं (अनुकूलनशीलता, जटिलता,
                        स्वायत्तता, सुसंगतता) के संस्थागतकरण के रूप में परिभाषित किया गया है।</span><span
                        className="en">Political development is defined as the <strong>institutionalization</strong> of
                        political organizations and procedures (adaptability, complexity, autonomy, coherence).</span>
                    </li>
                    <li><span className="hi">विकासशील देशों में लोकतंत्र से पहले व्यवस्था होनी चाहिए।</span><span
                        className="en">Order must precede democracy in developing nations.</span></li>
                  </ul>
                  <h5><span className="hi">4. निष्कर्ष</span><span className="en">4. Conclusion</span></h5>
                  <p><span className="hi">जबकि पाइ ने एक विकसित राजनीति की गुणात्मक विशेषताओं पर ध्यान केंद्रित किया,
                      हंटिंगटन ने स्थिरता प्राप्त करने की दर्दनाक प्रक्रिया पर ध्यान केंद्रित किया, जिससे आधुनिक नाजुक
                      राज्यों के विश्लेषण के लिए उनका सिद्धांत अत्यधिक प्रासंगिक हो गया।</span><span className="en">While
                      Pye focused on the qualitative characteristics of a developed polity, Huntington focused on the
                      painful process of achieving stability, making his theory highly relevant for analyzing modern
                      fragile states.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q3</span> <span className="hi">संयुक्त राज्य अमेरिका की राष्ट्रपति प्रणाली
                    की तुलना ब्रिटेन की संसदीय प्रणाली से करें।</span><span className="en">Compare the Presidential system
                    of the USA with the Parliamentary system of the UK.</span> <span className="qa-marks">[15 Marks]</span>
                </summary>
                <div className="qa-content">
                  <h5><span className="hi">1 परिचय</span><span className="en">1. Introduction</span></h5>
                  <p><span className="hi">संयुक्त राज्य अमेरिका और ब्रिटेन दो क्लासिक लोकतांत्रिक मॉडल का प्रतिनिधित्व करते
                      हैं, जो कार्यकारी और विधायी शाखाओं के बीच संबंधों में मौलिक रूप से भिन्न हैं।</span><span
                      className="en">The USA and UK represent the two classic democratic models, differing fundamentally in
                      the relationship between the executive and legislative branches.</span></p>
                  <h5><span className="hi">2. शक्तियों का पृथक्करण बनाम शक्तियों का संलयन</span><span className="en">2.
                      Separation of Powers vs. Fusion of Powers</span></h5>
                  <ul>
                    <li><span className="hi">यूएसए (राष्ट्रपति): शक्तियों का सख्त पृथक्करण। राष्ट्रपति (कार्यकारी) का चुनाव
                        कांग्रेस (विधानमंडल) से अलग किया जाता है। उनके अलग-अलग कार्यकाल हैं और वे एक-दूसरे की शाखाओं के
                        सदस्य नहीं हो सकते।</span><span className="en"><strong>USA (Presidential):</strong> Strict
                        Separation of Powers. The President (Executive) is elected separately from Congress
                        (Legislature). They have separate tenures and cannot be members of each other's branches.</span>
                    </li>
                    <li><span className="hi">यूके (संसदीय): शक्तियों का संलयन। प्रधान मंत्री और मंत्रिमंडल संसद (विधानमंडल)
                        से आते हैं और उसमें बैठते हैं।</span><span className="en"><strong>UK (Parliamentary):</strong>
                        Fusion of Powers. The Prime Minister and Cabinet are drawn from the Parliament (Legislature) and
                        sit in it.</span></li>
                  </ul>
                  <h5><span className="hi">3. राज्य और सरकार के प्रमुख</span><span className="en">3. Head of State and
                      Government</span></h5>
                  <ul>
                    <li><span className="hi">यूएसए: राष्ट्रपति राज्य का औपचारिक प्रमुख और सरकार का वास्तविक प्रमुख दोनों
                        होता है।</span><span className="en"><strong>USA:</strong> The President is both the ceremonial Head
                        of State and the actual Head of Government.</span></li>
                    <li><span className="hi">यूके: सम्राट राज्य का औपचारिक प्रमुख होता है, जबकि प्रधान मंत्री सरकार का
                        वास्तविक प्रमुख होता है।</span><span className="en"><strong>UK:</strong> The Monarch is the
                        ceremonial Head of State, while the Prime Minister is the real Head of Government.</span></li>
                  </ul>
                  <h5><span className="hi">4. जवाबदेही और कार्यकाल</span><span className="en">4. Accountability and
                      Tenure</span></h5>
                  <ul>
                    <li><span className="hi">यूएसए: राष्ट्रपति का कार्यकाल निश्चित 4 वर्ष का होता है और उसे कांग्रेस द्वारा
                        अविश्वास मत पर (केवल अपराधों के लिए कठिन महाभियोग के माध्यम से) नहीं हटाया जा सकता
                        है।</span><span className="en"><strong>USA:</strong> The President serves a fixed 4-year term and
                        cannot be removed by Congress on a vote of no-confidence (only via difficult impeachment for
                        crimes).</span></li>
                    <li><span className="hi">यूके: प्रधानमंत्री संसद के निरंतर समर्थन पर निर्भर हैं। 'अविश्वास मत' सरकार को
                        तुरंत हटा सकता है।</span><span className="en"><strong>UK:</strong> The Prime Minister relies on the
                        continuous support of the Parliament. A 'Vote of No Confidence' can remove the government
                        immediately.</span></li>
                  </ul>
                  <h5><span className="hi">5। उपसंहार</span><span className="en">5. Conclusion</span></h5>
                  <p><span className="hi">अमेरिकी प्रणाली जांच और संतुलन तथा स्थिरता को प्राथमिकता देती है, जिससे कभी-कभी
                      गतिरोध उत्पन्न हो जाता है। यूके प्रणाली दक्षता और जवाबदेही को प्राथमिकता देती है, लेकिन बहुमत बड़ा
                      होने पर "वैकल्पिक तानाशाही" हो सकती है।</span><span className="en">The US system prioritizes checks
                      and balances and stability, sometimes leading to gridlock. The UK system prioritizes efficiency
                      and accountability, but can lead to "elective dictatorship" if the majority is large.</span></p>
                </div>
              </details>

              <div className="info-box" style={{"borderLeftColor": "#f59e0b"}}>
                <h4>🎓 UGC NET Expert Tips</h4>
                <p>Memorize the 5 countries in 'The Civic Culture' (USA, UK, Germany, Italy, Mexico). Match Almond's
                  structures correctly (Interest Articulation = Pressure Groups).</p>
              </div>
            </div>
          </div>

        </div>

        {/**/}
        
    </>
  );
}