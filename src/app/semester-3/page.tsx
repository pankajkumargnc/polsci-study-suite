"use client";
import { Globe, Handshake, Landmark, Newspaper, PenTool, Scale, Shield, TreePine, Trophy, Users, Zap } from 'lucide-react';

export default function Semester3() {
  return (
    <>
<div id="sem3" className="tab-pane active">

          {/* ── Semester Hero Banner ── */}
          <div className="semester-hero sem-hero-3">
            <div className="sem-hero-icon">🔥</div>
            <h2 className="sem-hero-title">
              <span className="hi">सेमेस्टर III</span>
              <span className="en">Semester III</span>
            </h2>
            <p className="sem-hero-subtitle">
              <span className="hi">ऐच्छिक पाठ्यक्रम — मानवाधिकार, झारखंड, समाजशास्त्र एवं समकालीन मुद्दे</span>
              <span className="en">Elective Courses — Human Rights, Jharkhand, Sociology &amp; Contemporary Issues</span>
            </p>
            <div className="sem-hero-stats">
              <div className="sem-stat">
                <span className="sem-stat-value">4</span>
                <span className="sem-stat-label"><span className="hi">पेपर</span><span className="en">Papers</span></span>
              </div>
              <div className="sem-stat">
                <span className="sem-stat-value">18+</span>
                <span className="sem-stat-label"><span className="hi">इकाइयाँ</span><span className="en">Units</span></span>
              </div>
              <div className="sem-stat">
                <span className="sem-stat-value">35+</span>
                <span className="sem-stat-label"><span className="hi">मुख्य विषय</span><span className="en">Key Topics</span></span>
              </div>
            </div>
            <p className="sem-hero-quote">
              <span className="hi">"मानवाधिकार वे अहरणीय अधिकार हैं जो प्रत्येक मनुष्य को जन्म से प्राप्त हैं।" — UDHR, 1948</span>
              <span className="en">"Human rights are inalienable rights inherent to every human being by birth." — UDHR, 1948</span>
            </p>
          </div>

          {/* ── Quick Nav Chips ── */}
          <div className="quick-nav-chips">
            <a href="#sem3-p309" className="nav-chip"><Shield size={16} /> PSC-A-309</a>
            <a href="#sem3-p310" className="nav-chip"><TreePine size={16} /> PSC-C-310</a>
            <a href="#sem3-p311" className="nav-chip"><Users size={16} /> PSC-C-311</a>
            <a href="#sem3-p312" className="nav-chip"><Newspaper size={16} /> PSC-C-312</a>
            <a href="#sem3-qa" className="nav-chip"><Trophy size={16} /> Q&amp;A</a>
          </div>

          {/**/}
          <div className="paper-section" data-aos="fade-up" data-accent="rose" id="sem3-p309">
            <h3 className="paper-title">
              <span style={{display:'flex',alignItems:'center',gap:'10px'}}>
                <span className="paper-icon-badge badge-rose"><Shield size={18} /></span>
                <span><span className="hi">PSC-A-309: मानवाधिकार</span><span className="en">PSC-A-309: Human Rights</span></span>
              </span>
              <span className="unit-count-badge"><span className="hi">5 इकाइयाँ</span><span className="en">5 Units</span></span>
            </h3>
            <p><span className="hi">मानवाधिकार वे अहरणीय (Inalienable) अधिकार हैं जो प्रत्येक व्यक्ति को केवल इंसान होने के
                नाते प्राप्त हैं।</span><span className="en">Human rights are inalienable rights inherent to all human
                beings,
                regardless of race, sex, nationality, ethnicity, language, religion, or any other status.</span></p>
            <div className="info-box">
              <h4><span className="hi">मानवाधिकारों की तीन पीढ़ियां (करेल वासक द्वारा)</span><span className="en">Three
                  Generations of Human Rights (by Karel Vasak)</span></h4>
              <ul>
                <li><strong><span className="hi">पहली पीढ़ी (नागरिक और राजनीतिक अधिकार):</span><span className="en">First
                      Generation (Civil and Political Rights):</span></strong> <span className="hi">स्वतंत्रता से संबंधित
                    (जैसे, अभिव्यक्ति की स्वतंत्रता)। इन्हें नकारात्मक अधिकार माना जाता है क्योंकि राज्य को हस्तक्षेप
                    करने
                    से रोका जाता है।</span><span className="en">Relating to liberty (e.g., freedom of speech). Considered
                    negative rights because they prevent state interference.</span></li>
                <li><strong><span className="hi">दूसरी पीढ़ी (आर्थिक, सामाजिक और सांस्कृतिक अधिकार):</span><span
                      className="en">Second Generation (Economic, Social &amp; Cultural Rights):</span></strong> <span
                    className="hi">समानता से संबंधित (जैसे, काम का अधिकार, शिक्षा का अधिकार)। इन्हें सकारात्मक अधिकार माना
                    जाता है क्योंकि राज्य को इन्हें सुनिश्चित करना होता है।</span><span className="en">Relating to equality
                    (e.g., right to work, education). Considered positive rights because the state must provide
                    them.</span></li>
                <li><strong><span className="hi">तीसरी पीढ़ी (सामूहिक/एकजुटता अधिकार):</span><span className="en">Third
                      Generation
                      (Collective/Solidarity Rights):</span></strong> <span className="hi">बंधुत्व से संबंधित (जैसे, स्वच्छ
                    पर्यावरण का अधिकार, विकास का अधिकार)।</span><span className="en">Relating to fraternity (e.g., right to
                    a
                    clean environment, right to development).</span></li>
              </ul>
            </div>
            <ul>
              <li><strong><span className="hi">UDHR (1948):</span><span className="en">UDHR (1948):</span></strong> <span
                  className="hi">मानवाधिकारों की सार्वभौम घोषणा (Universal Declaration of Human Rights)। इसे 10 दिसंबर 1948
                  को
                  UNGA द्वारा अपनाया गया (इसलिए 10 दिसंबर को मानवाधिकार दिवस मनाया जाता है)।</span><span
                  className="en">Universal Declaration of Human Rights. Adopted by UNGA on 10 December 1948 (hence Human
                  Rights Day is celebrated on 10th December).</span></li>
              <li><strong><span className="hi">ICCPR और ICESCR (1966):</span><span className="en">ICCPR &amp; ICESCR
                    (1966):</span></strong> <span className="hi">नागरिक और राजनीतिक अधिकारों पर अंतर्राष्ट्रीय नियम (ICCPR)
                  और
                  आर्थिक, सामाजिक और सांस्कृतिक अधिकारों पर अंतर्राष्ट्रीय नियम (ICESCR)।</span><span
                  className="en">International Covenant on Civil and Political Rights (ICCPR) and International Covenant on
                  Economic, Social and Cultural Rights (ICESCR).</span></li>
            </ul>
            {/* ── NEW: Timeline — Human Rights Milestones ── */}
            <div className="timeline-box">
              <h4>📅 <span className="hi">मानवाधिकार के मील के पत्थर</span><span className="en">Human Rights Milestones</span></h4>
              <div className="timeline-items">
                <div className="timeline-item">
                  <div className="timeline-year">1215</div>
                  <div className="timeline-text"><span className="hi">मैग्ना कार्टा — राजा की शक्ति पर प्रथम सीमा (England)</span><span className="en">Magna Carta — First limit on King's power (England)</span></div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">1948</div>
                  <div className="timeline-text"><span className="hi">UDHR — मानवाधिकारों की सार्वभौम घोषणा (10 दिसंबर)</span><span className="en">UDHR — Universal Declaration of Human Rights (10 December)</span></div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">1966</div>
                  <div className="timeline-text"><span className="hi">ICCPR + ICESCR — नागरिक और आर्थिक अधिकारों के अंतर्राष्ट्रीय नियम</span><span className="en">ICCPR + ICESCR — International Covenants on Civil/Economic Rights</span></div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">1993</div>
                  <div className="timeline-text"><span className="hi">वियना विश्व सम्मेलन — NHRC जैसे राष्ट्रीय संस्थानों की स्थापना</span><span className="en">Vienna World Conference — Establishment of NHRCs like India's NHRC</span></div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">2005</div>
                  <div className="timeline-text"><span className="hi">R2P (Responsibility to Protect) — रक्षा करने का उत्तरदायित्व</span><span className="en">R2P (Responsibility to Protect) — UN Principle</span></div>
                </div>
              </div>
            </div>
          </div>

          {/**/}
          <div className="paper-section" data-aos="fade-up" data-accent="emerald" id="sem3-p310">
            <h3 className="paper-title">
              <span style={{display:'flex',alignItems:'center',gap:'10px'}}>
                <span className="paper-icon-badge badge-emerald"><TreePine size={18} /></span>
                <span><span className="hi">PSC-C-310: झारखंड की राजनीति</span><span className="en">PSC-C-310: Jharkhand Politics</span></span>
              </span>
              <span className="unit-count-badge"><span className="hi">5 इकाइयाँ</span><span className="en">5 Units</span></span>
            </h3>
            <ul>
              <li><strong><span className="hi">बिरसा मुंडा का 'उलगुलान' (Ulgulan):</span><span className="en">Birsa Munda's
                    'Ulgulan':</span></strong> <span className="hi">1899-1900 का महान मुंडा विद्रोह। इसके परिणामस्वरूप
                  <strong>छोटानागपुर काश्तकारी अधिनियम (CNT Act, 1908)</strong> लागू हुआ, जिसने गैर-आदिवासियों (दीकुओं)
                  को
                  आदिवासी भूमि के हस्तांतरण पर रोक लगा दी।</span><span className="en">The Great Munda Rebellion of
                  1899-1900.
                  It resulted in the <strong>Chota Nagpur Tenancy Act (CNT Act, 1908)</strong>, which prohibited the
                  transfer of tribal land to non-tribals (Dikus).</span></li>
              <li><strong><span className="hi">पेसा अधिनियम (PESA Act, 1996):</span><span className="en">PESA Act
                    (1996):</span></strong> <span className="hi">Panchayats (Extension to Scheduled Areas) Act। यह 5वीं
                  अनुसूची के क्षेत्रों (झारखंड सहित) में ग्राम सभाओं को प्राकृतिक संसाधनों पर नियंत्रण का अधिकार देकर
                  आदिवासी स्वशासन को मजबूत करता है।</span><span className="en">Panchayats (Extension to Scheduled Areas)
                  Act.
                  It strengthens tribal self-governance in 5th Schedule areas (including Jharkhand) by empowering Gram
                  Sabhas with control over natural resources.</span></li>
              <li><strong><span className="hi">संसाधन का अभिशाप (Resource Curse):</span><span className="en">Resource
                    Curse:</span></strong> <span className="hi">झारखंड खनिजों (कोयला, लोहा, अभ्रक) में समृद्ध है, लेकिन यहां
                  के लोग आर्थिक रूप से पिछड़े हैं। औद्योगीकरण के कारण भारी विस्थापन हुआ है और वामपंथी उग्रवाद (नक्सलवाद)
                  जैसी समस्याएं उत्पन्न हुई हैं।</span><span className="en">Jharkhand is rich in minerals (coal, iron,
                  mica),
                  but its people are economically backward. Industrialization has led to massive displacement and
                  problems
                  like Left-Wing Extremism (Naxalism).</span></li>
            </ul>
            {/* ── NEW: Key Terms — PSC-C-310 ── */}
            <div className="key-term-box">
              <h4>🔑 <span className="hi">मुख्य शब्दावली — PSC-C-310</span><span className="en">Key Terms — PSC-C-310</span></h4>
              <div className="key-terms-grid">
                <span className="key-term-chip"><span className="hi">उलगुलान (Ulgulan)</span><span className="en">Ulgulan</span></span>
                <span className="key-term-chip"><span className="hi">CNT Act, 1908</span><span className="en">CNT Act, 1908</span></span>
                <span className="key-term-chip"><span className="hi">PESA Act, 1996</span><span className="en">PESA Act, 1996</span></span>
                <span className="key-term-chip"><span className="hi">संसाधन का अभिशाप</span><span className="en">Resource Curse</span></span>
                <span className="key-term-chip"><span className="hi">नक्सलवाद</span><span className="en">Naxalism</span></span>
                <span className="key-term-chip"><span className="hi">बिरसा मुंडा</span><span className="en">Birsa Munda</span></span>
              </div>
            </div>
          </div>

          {/**/}
          <div className="paper-section" data-aos="fade-up" data-accent="purple" id="sem3-p311">
            <h3 className="paper-title">
              <span style={{display:'flex',alignItems:'center',gap:'10px'}}>
                <span className="paper-icon-badge badge-purple"><Users size={18} /></span>
                <span><span className="hi">PSC-C-311: राजनीतिक समाजशास्त्र</span><span className="en">PSC-C-311: Political Sociology</span></span>
              </span>
              <span className="unit-count-badge"><span className="hi">5 इकाइयाँ</span><span className="en">5 Units</span></span>
            </h3>
            <ul>
              <li><strong><span className="hi">राजनीतिक समाजीकरण (Political Socialization):</span><span className="en">Political
                    Socialization:</span></strong> <span className="hi">वह प्रक्रिया जिसके द्वारा नागरिक राजनीतिक मूल्यों और
                  मान्यताओं को सीखते हैं। प्रमुख एजेंसियां: परिवार (सबसे महत्वपूर्ण), स्कूल, सहकर्मी समूह (Peer group)
                  और
                  मीडिया।</span><span className="en">The process by which citizens learn political values and beliefs. Main
                  agencies: Family (most important), school, peer group, and media.</span></li>
              <li><strong><span className="hi">राजनीतिक संस्कृति (Political Culture):</span><span className="en">Political
                    Culture:</span></strong> <span className="hi">राजनीतिक व्यवस्था के प्रति लोगों के दृष्टिकोण का पैटर्न।
                  गेब्रियल आमंड और सिडनी वर्बा ने अपनी पुस्तक 'द सिविक कल्चर' (1963) में इसके तीन प्रकार
                  बताए:</span><span className="en">The pattern of people's attitudes towards the political system. Gabriel
                  Almond and Sidney
                  Verba in their book 'The Civic Culture' (1963) identified three types:</span>
                <ol>
                  <li><span className="hi">संकीर्ण (Parochial): नागरिकों को व्यवस्था की कोई जानकारी नहीं होती (उदा. पारंपरिक
                      समाज)।</span><span className="en">Parochial: Citizens have no awareness of the system (e.g.,
                      traditional
                      societies).</span></li>
                  <li><span className="hi">अधीनस्थ (Subject): नागरिक सरकार को जानते हैं, लेकिन निर्णय लेने में भाग नहीं लेते
                      (उदा. तानाशाही)।</span><span className="en">Subject: Citizens know the government but do not
                      participate
                      in decision-making (e.g., dictatorships).</span></li>
                  <li><span className="hi">सहभागी (Participant): नागरिक राजनीतिक प्रक्रिया में सक्रिय रूप से भाग लेते हैं
                      (उदा. मजबूत लोकतंत्र)।</span><span className="en">Participant: Citizens actively participate in the
                      political process (e.g., strong democracies).</span></li>
                </ol>
              </li>
            </ul>
            <div className="info-box">
              <h4><span className="hi">अभिजात वर्ग सिद्धांत (Elite Theory)</span><span className="en">Elite Theory</span></h4>
              <p><span className="hi"><strong>रॉबर्ट मिशेल्स का 'अल्पतंत्र का लौह नियम' (Iron Law of Oligarchy):</strong>
                  उनका
                  दावा है कि कोई भी संगठन, चाहे वह कितना भी लोकतांत्रिक क्यों न हो, अंततः एक छोटे से कुलीन वर्ग
                  (Oligarchy) द्वारा नियंत्रित हो जाता है।</span><span className="en"><strong>Robert Michels' 'Iron Law of
                    Oligarchy':</strong> Claims that any organization, no matter how democratic, eventually becomes
                  controlled by a small elite (Oligarchy).</span></p>
              <p><span className="hi"><strong>विल्फ्रेडो पारेतो का 'अभिजात वर्ग का परिसंचरण' (Circulation of
                    Elites):</strong>
                  समाज में हमेशा शासन करने वाले अभिजात वर्ग और गैर-अभिजात वर्ग होते हैं, और सत्ता 'शेरों' (जो बल प्रयोग
                  करते हैं) और 'लोमड़ियों' (जो चालाकी का प्रयोग करते हैं) के बीच घूमती रहती है।</span><span
                  className="en"><strong>Vilfredo Pareto's 'Circulation of Elites':</strong> Society always has governing
                  elites and non-elites, and power circulates between 'Lions' (who use force) and 'Foxes' (who use
                  cunning).</span></p>
            </div>
          </div>

          {/**/}
          <div className="paper-section" data-aos="fade-up" data-accent="amber" id="sem3-p312">
            <h3 className="paper-title">
              <span style={{display:'flex',alignItems:'center',gap:'10px'}}>
                <span className="paper-icon-badge badge-amber"><Newspaper size={18} /></span>
                <span><span className="hi">PSC-C-312: समकालीन राजनीतिक मुद्दे</span><span className="en">PSC-C-312: Contemporary Political Issues</span></span>
              </span>
              <span className="unit-count-badge"><span className="hi">5 इकाइयाँ</span><span className="en">5 Units</span></span>
            </h3>
            <ul>
              <li><strong><span className="hi">उत्तर-दक्षिण विभाजन (North-South Divide):</span><span className="en">North-South
                    Divide:</span></strong> <span className="hi">अमीर, विकसित देशों ('वैश्विक उत्तर') और गरीब, विकासशील
                  देशों
                  ('वैश्विक दक्षिण') के बीच सामाजिक-आर्थिक और राजनीतिक विभाजन (ब्रांट लाइन द्वारा दर्शाया
                  गया)।</span><span className="en">The socio-economic and political division between rich, developed
                  countries
                  ('Global North') and poor, developing countries ('Global South') (represented by the Brandt
                  Line).</span></li>
              <li><strong><span className="hi">NIEO (1974):</span><span className="en">NIEO (1974):</span></strong> <span
                  className="hi">नई अंतर्राष्ट्रीय आर्थिक व्यवस्था (New International Economic Order)। UNGA द्वारा पारित।
                  विकासशील देशों (NAM देशों) ने मांग की कि व्यापार और वित्तीय प्रणाली को उनके पक्ष में पुनर्गठित किया
                  जाए।</span><span className="en">New International Economic Order. Passed by UNGA. Developing countries
                  (NAM
                  countries) demanded that the trade and financial system be restructured in their favor.</span></li>
              <li><strong><span className="hi">सतत विकास (Sustainable Development):</span><span className="en">Sustainable
                    Development:</span></strong> <span className="hi"><strong>ब्रंटलैंड रिपोर्ट (1987) — 'हमारा साझा भविष्य'
                    (Our Common Future):</strong> "वह विकास जो भविष्य की पीढ़ियों की अपनी जरूरतों को पूरा करने की क्षमता
                  से समझौता किए बिना वर्तमान की जरूरतों को पूरा करता है।"</span><span className="en"><strong>Brundtland
                    Report
                    (1987) — 'Our Common Future':</strong> "Development that meets the needs of the present without
                  compromising the ability of future generations to meet their own needs."</span></li>
              <li><strong><span className="hi">CBDR (समान लेकिन विभेदित जिम्मेदारियाँ):</span><span className="en">CBDR (Common
                    But Differentiated Responsibilities):</span></strong> <span className="hi">यह सिद्धांत (रियो पृथ्वी
                  सम्मेलन 1992 में अपनाया गया) स्वीकार करता है कि यद्यपि सभी देशों की पर्यावरण की रक्षा करने की साझी
                  जिम्मेदारी है, लेकिन विकसित देशों को अधिक बोझ उठाना चाहिए क्योंकि उन्होंने ऐतिहासिक रूप से अधिक
                  प्रदूषण
                  किया है।</span><span className="en">This principle (adopted at Rio Earth Summit 1992) acknowledges that
                  while all countries share the responsibility to protect the environment, developed countries must bear
                  a
                  greater burden as they are historically responsible for more pollution.</span></li>
            </ul>
          </div>

          {/**/}
          <div className="paper-section" data-accent="green-qa" id="sem3-qa">
            <h3 className="paper-title"
              style={{"background": "linear-gradient(135deg, #10b981 0%, #059669 100%)", "color": "white"}}>
              <Trophy size={18} />
              <span className="hi">सेमेस्टर III - मास्टर Q&amp;A और UGC NET टिप्स</span>
              <span className="en">Semester III - Master Q&amp;A &amp; UGC NET Tips</span>
            </h3>

            <p className="intro-text">
              <span className="hi">परीक्षा में सर्वोच्च अंक (Gold Medal) और JRF के लिए अति-महत्वपूर्ण प्रश्न।</span>
              <span className="en">Highly important questions for Gold Medal in University exams and JRF.</span>
            </p>

            {/**/}
            <h4 className="unit-title" style={{"color": "#6366f1"}}><Handshake size={18} /> Human Rights</h4>
            <div className="content-box">
              <h5 className="qa-section-title"><Zap size={18} style={{"color": "#f59e0b"}} /> Short Questions (2-5
                Marks)</h5>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q1</span> <span className="hi">मानवाधिकारों की तीन पीढ़ियाँ कौन सी
                    हैं?</span><span className="en">What are the three generations of human rights?</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">कारेल वासाक द्वारा प्रस्तावित, वे हैं: प्रथम पीढ़ी: नागरिक और राजनीतिक अधिकार
                      (स्वतंत्रता); दूसरी पीढ़ी: आर्थिक, सामाजिक और सांस्कृतिक अधिकार (समानता); और तीसरी पीढ़ी: स्वच्छ
                      पर्यावरण (बिरादरी) के अधिकार जैसे सामूहिक या एकजुटता अधिकार।</span><span className="en">Proposed by
                      Karel Vasak, they are: <strong>First Gen:</strong> Civil and Political rights (Liberty);
                      <strong>Second Gen:</strong> Economic, Social, and Cultural rights (Equality); and <strong>Third
                        Gen:</strong> Collective or Solidarity rights like the right to a clean environment
                      (Fraternity).</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q2</span> <span className="hi">यूडीएचआर क्या है?</span><span className="en">What
                    is the UDHR?</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">मानव अधिकारों की सार्वभौम घोषणा (यूडीएचआर) 10 दिसंबर, 1948 को संयुक्त राष्ट्र
                      महासभा द्वारा अपनाया गया एक मील का पत्थर दस्तावेज है। इसमें व्यक्तिगत अधिकारों की पुष्टि करने वाले
                      30 लेख शामिल हैं, जो कानूनी रूप से बाध्यकारी नहीं होने के बावजूद अंतरराष्ट्रीय मानवाधिकार कानून की
                      नींव बनाते हैं।</span><span className="en">The <strong>Universal Declaration of Human Rights
                        (UDHR)</strong> is a milestone document adopted by the UN General Assembly on December 10, 1948.
                      It consists of 30 articles affirming individual rights, which, although not legally binding, forms
                      the foundation of international human rights law.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q3</span> <span className="hi">आईसीसीपीआर और आईसीईएससीआर के बीच
                    अंतर?</span><span className="en">Difference between ICCPR and ICESCR?</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">ICCPR (सिविल/राजनीतिक) नकारात्मक अधिकारों से संबंधित है जहां राज्य को हस्तक्षेप
                      करने से बचना चाहिए (उदाहरण के लिए, बोलने की स्वतंत्रता)। आईसीईएससीआर (आर्थिक/सामाजिक/सांस्कृतिक)
                      सकारात्मक अधिकारों से संबंधित है जहां राज्य को प्रदान करने के लिए सक्रिय कदम उठाने चाहिए (उदाहरण
                      के लिए, शिक्षा, स्वास्थ्य का अधिकार)।</span><span className="en"><strong>ICCPR</strong>
                      (Civil/Political) deals with negative rights where the state must refrain from interfering (e.g.,
                      freedom of speech). <strong>ICESCR</strong> (Economic/Social/Cultural) deals with positive rights
                      where the state must take active steps to provide (e.g., right to education, health).</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q4</span> <span className="hi">एनएचआरसी क्या है?</span><span className="en">What
                    is the NHRC?</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">भारत का राष्ट्रीय मानवाधिकार आयोग (एनएचआरसी) 12 अक्टूबर 1993 को स्थापित एक वैधानिक
                      निकाय है। यह देश में मानवाधिकारों के प्रहरी के रूप में कार्य करता है, उल्लंघनों की जांच करता है और
                      सरकार को सुधारात्मक कार्रवाई की सिफारिश करता है।</span><span className="en">The <strong>National Human
                        Rights Commission (NHRC)</strong> of India is a statutory body established on 12 October 1993.
                      It acts as the watchdog of human rights in the country, investigating violations and recommending
                      corrective actions to the government.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q5</span> <span className="hi">'अविच्छेद्य अधिकार' को परिभाषित
                    करें।</span><span className="en">Define 'inalienable rights'.</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">मानव होने के नाते सभी मनुष्यों में अविभाज्य अधिकार अंतर्निहित हैं। उन्हें किसी
                      राज्य द्वारा प्रदान नहीं किया जा सकता है, न ही उन्हें छीना जा सकता है, आत्मसमर्पण किया जा सकता है,
                      या स्थानांतरित किया जा सकता है (उदाहरण के लिए, जीवन का अधिकार, यातना से मुक्ति)।</span><span
                      className="en">Inalienable rights are inherent to all human beings by virtue of them being human. They
                      cannot be granted by a state, nor can they be taken away, surrendered, or transferred (e.g., right
                      to life, freedom from torture).</span></p>
                </div>
              </details>

              <h5 className="qa-section-title" style={{"marginTop": "20px"}}><PenTool size={18} style={{"color": "#3b82f6"}} /> Long Questions (15-20 Marks)</h5>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q1</span> <span className="hi">कारेल वासाक द्वारा प्रस्तावित तीन पीढ़ियों के
                    संदर्भ में मानव अधिकारों के ऐतिहासिक विकास पर चर्चा करें।</span><span className="en">Discuss the
                    historical evolution of Human Rights with reference to the three generations proposed by Karel
                    Vasak.</span> <span className="qa-marks">[20 Marks]</span></summary>
                <div className="qa-content">
                  <h5><span className="hi">1 परिचय</span><span className="en">1. Introduction</span></h5>
                  <p><span className="hi">मानवाधिकार की अवधारणा मैग्ना कार्टा (1215) से लेकर संयुक्त राष्ट्र चार्टर तक
                      सदियों से विकसित हुई है। चेक न्यायविद कारेल वासाक (1979) ने इस विकास को फ्रांसीसी क्रांति के आदर्श
                      वाक्य के अनुरूप तीन पीढ़ियों में वर्गीकृत किया: लिबर्टे, एगैलिटे, फ्रेटरनिटे।</span><span
                      className="en">The concept of human rights has evolved over centuries from the Magna Carta (1215) to
                      the UN Charter. Czech jurist Karel Vasak (1979) classified this evolution into three generations,
                      corresponding to the French Revolution's motto: <em>Liberté, Égalité, Fraternité</em>.</span></p>
                  <h5><span className="hi">2. पहली पीढ़ी (स्वतंत्रता)</span><span className="en">2. First Generation
                      (Liberty)</span></h5>
                  <ul>
                    <li><span className="hi">प्रकृति: नागरिक और राजनीतिक अधिकार. वे "नकारात्मक अधिकार" हैं क्योंकि उन्हें
                        राज्य से व्यक्तिगत जीवन में हस्तक्षेप न करने की आवश्यकता होती है।</span><span
                        className="en"><strong>Nature:</strong> Civil and political rights. They are "negative rights" as
                        they require the state to <em>not</em> interfere in individual lives.</span></li>
                    <li><span className="hi">उदाहरण: बोलने की स्वतंत्रता, धर्म, जीवन का अधिकार, निष्पक्ष सुनवाई का
                        अधिकार।</span><span className="en"><strong>Examples:</strong> Freedom of speech, religion, right to
                        life, right to a fair trial.</span></li>
                    <li><span className="hi">फोकस: राज्य के अत्याचार (लॉकियन उदारवाद) से व्यक्ति की रक्षा करना।</span><span
                        className="en"><strong>Focus:</strong> Protecting the individual from state tyranny (Lockean
                        liberalism).</span></li>
                  </ul>
                  <h5><span className="hi">3. दूसरी पीढ़ी (समानता)</span><span className="en">3. Second Generation
                      (Equality)</span></h5>
                  <ul>
                    <li><span className="hi">प्रकृति: आर्थिक, सामाजिक और सांस्कृतिक अधिकार। वे "सकारात्मक अधिकार" हैं जिनके
                        लिए राज्य के हस्तक्षेप और संसाधनों की आवश्यकता होती है।</span><span
                        className="en"><strong>Nature:</strong> Economic, social, and cultural rights. They are "positive
                        rights" requiring state intervention and resources.</span></li>
                    <li><span className="hi">उदाहरण: शिक्षा, स्वास्थ्य देखभाल, आवास और न्यूनतम वेतन का अधिकार।</span><span
                        className="en"><strong>Examples:</strong> Right to education, healthcare, housing, and a minimum
                        wage.</span></li>
                    <li><span className="hi">फोकस: सम्मानजनक जीवन स्तर (समाजवादी/कल्याणकारी राज्य आदर्श) सुनिश्चित
                        करना।</span><span className="en"><strong>Focus:</strong> Ensuring a dignified standard of living
                        (Socialist/Welfare State ideals).</span></li>
                  </ul>
                  <h5><span className="hi">4. तीसरी पीढ़ी (भाईचारा/एकजुटता)</span><span className="en">4. Third Generation
                      (Fraternity/Solidarity)</span></h5>
                  <ul>
                    <li><span className="hi">प्रकृति: व्यक्तियों के बजाय समूहों या लोगों से संबंधित सामूहिक
                        अधिकार।</span><span className="en"><strong>Nature:</strong> Collective rights belonging to groups or
                        peoples rather than individuals.</span></li>
                    <li><span className="hi">उदाहरण: स्वच्छ पर्यावरण का अधिकार, आत्मनिर्णय का अधिकार, आर्थिक विकास का
                        अधिकार।</span><span className="en"><strong>Examples:</strong> Right to a clean environment, right to
                        self-determination, right to economic development.</span></li>
                    <li><span className="hi">फोकस: वैश्विक सहयोग और जलवायु परिवर्तन जैसी आधुनिक चुनौतियों का
                        समाधान।</span><span className="en"><strong>Focus:</strong> Global cooperation and addressing modern
                        challenges like climate change.</span></li>
                  </ul>
                  <h5><span className="hi">5। उपसंहार</span><span className="en">5. Conclusion</span></h5>
                  <p><span className="hi">ये पीढ़ियाँ परस्पर अनन्य नहीं बल्कि अन्योन्याश्रित हैं। यदि कोई व्यक्ति भूख से मर
                      रहा है (दूसरी पीढ़ी के अधिकारों से इनकार) तो वह अपने पहली पीढ़ी के राजनीतिक अधिकारों का प्रयोग
                      नहीं कर सकता है।</span><span className="en">These generations are not mutually exclusive but
                      interdependent. A person cannot exercise their first-generation political rights if they are
                      starving (a denial of second-generation rights).</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q2</span> <span className="hi">मानव अधिकारों की सार्वभौम घोषणा (यूडीएचआर)
                    1948 और वैश्विक राजनीति पर इसके प्रभाव का आलोचनात्मक परीक्षण करें।</span><span className="en">Critically
                    examine the Universal Declaration of Human Rights (UDHR) 1948 and its impact on global
                    politics.</span> <span className="qa-marks">[20 Marks]</span></summary>
                <div className="qa-content">
                  <h5><span className="hi">1 परिचय</span><span className="en">1. Introduction</span></h5>
                  <p><span className="hi">10 दिसंबर, 1948 को अपनाया गया, यूडीएचआर द्वितीय विश्व युद्ध और नरसंहार के
                      अत्याचारों का सीधा जवाब था। एलेनोर रूजवेल्ट की अध्यक्षता वाली एक समिति द्वारा तैयार किया गया, यह
                      अंतर्निहित मानवाधिकारों की पहली वैश्विक अभिव्यक्ति का प्रतिनिधित्व करता है।</span><span
                      className="en">Adopted on December 10, 1948, the UDHR was a direct response to the atrocities of WWII
                      and the Holocaust. Drafted by a committee chaired by Eleanor Roosevelt, it represents the first
                      global expression of inherent human rights.</span></p>
                  <h5><span className="hi">2. मुख्य विशेषताएं</span><span className="en">2. Key Features</span></h5>
                  <ul>
                    <li><strong>Universality:</strong> Applies to all individuals regardless of race, religion, or
                      nationality.</li>
                    <li><strong>Comprehensiveness:</strong> Its 30 articles cover both civil/political rights (Articles
                      3-21) and economic/social rights (Articles 22-27).</li>
                    <li><span className="hi">गैर-बाध्यकारी: यह एक घोषणा है, संधि नहीं, जिसका अर्थ है कि इसमें औपचारिक कानूनी
                        बाध्यकारी बल का अभाव है।</span><span className="en"><strong>Non-Binding:</strong> It is a
                        declaration, not a treaty, meaning it lacks formal legal binding force.</span></li>
                  </ul>
                  <h5><span className="hi">3. वैश्विक राजनीति पर प्रभाव</span><span className="en">3. Impact on Global
                      Politics</span></h5>
                  <ul>
                    <li><strong>Foundation of International Law:</strong> It birthed the International Bill of Human
                      Rights (UDHR + ICCPR + ICESCR).</li>
                    <li><span className="hi">संविधानों के लिए प्रेरणा: भारत के मौलिक अधिकार (भाग III) और DPSP (भाग IV) सहित
                        उत्तर-औपनिवेशिक संविधानों को बहुत प्रभावित किया।</span><span className="en"><strong>Inspiration for
                          Constitutions:</strong> Greatly influenced post-colonial constitutions, including India’s
                        Fundamental Rights (Part III) and DPSP (Part IV).</span></li>
                    <li><span className="hi">जवाबदेही का मानक: यह एक नैतिक मानदंड प्रदान करता है जिसके आधार पर राज्यों के
                        कार्यों को विश्व स्तर पर आंका जाता है (उदाहरण के लिए, एमनेस्टी इंटरनेशनल की
                        रिपोर्ट)।</span><span className="en"><strong>Standard of Accountability:</strong> It provides a
                        moral yardstick against which the actions of states are judged globally (e.g., Amnesty
                        International reports).</span></li>
                  </ul>
                  <h5><span className="hi">4. आलोचनाएँ</span><span className="en">4. Criticisms</span></h5>
                  <ul>
                    <li><span className="hi">पश्चिमी पूर्वाग्रह: आलोचकों का तर्क है कि यह वैश्विक दक्षिण के सामुदायिक
                        मूल्यों की अनदेखी करते हुए पश्चिमी व्यक्तिवाद को बढ़ावा देता है।</span><span
                        className="en"><strong>Western Bias:</strong> Critics argue it promotes Western individualism,
                        ignoring communitarian values of the Global South.</span></li>
                    <li><span className="hi">प्रवर्तन तंत्र का अभाव: अंतरराष्ट्रीय पुलिस बल के बिना, राज्य अक्सर दण्ड से
                        मुक्ति के साथ यूडीएचआर का उल्लंघन करते हैं (उदाहरण के लिए, तानाशाही शासन)।</span><span
                        className="en"><strong>Lack of Enforcement mechanism:</strong> Without an international police
                        force, states often violate UDHR with impunity (e.g., dictatorial regimes).</span></li>
                  </ul>
                  <h5><span className="hi">5। उपसंहार</span><span className="en">5. Conclusion</span></h5>
                  <p><span className="hi">गैर-बाध्यकारी होने और कार्यान्वयन चुनौतियों का सामना करने के बावजूद, यूडीएचआर पूरी
                      मानवता का मैग्ना कार्टा बना हुआ है, जिससे अंतरराष्ट्रीय कानून का ध्यान राज्यों से हटकर व्यक्तियों
                      पर केंद्रित हो गया है।</span><span className="en">Despite being non-binding and facing implementation
                      challenges, the UDHR remains the Magna Carta of all humanity, shifting international law's focus
                      from states to individuals.</span></p>
                </div>
              </details>

              <div className="info-box" style={{"borderLeftColor": "#f59e0b"}}>
                <h4>🎓 UGC NET Expert Tips</h4>
                <p>Dates matter: Human Rights Day is Dec 10. NHRC established in 1993. Know that 1st generation rights
                  correlate to "Liberty", 2nd to "Equality", and 3rd to "Fraternity".</p>
              </div>
            </div>

            {/**/}
            <h4 className="unit-title" style={{"color": "#6366f1"}}><TreePine size={18} /> Jharkhand Politics</h4>
            <div className="content-box">
              <h5 className="qa-section-title"><Zap size={18} style={{"color": "#f59e0b"}} /> Short Questions (2-5
                Marks)</h5>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q1</span> <span className="hi">बिरसा मुंडा 'उलगुलान' क्या था?</span><span
                    className="en">What was the Birsa Munda 'Ulgulan'?</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">"उलगुलान" या ग्रेट टुमल्ट (1899-1900) ब्रिटिश औपनिवेशिक अधिकारियों और 'दिकुओं'
                      (बाहरी जमींदारों/साहूकारों) के खिलाफ बिरसा मुंडा के नेतृत्व में एक आदिवासी विद्रोह था, जो आदिवासी
                      भूमि पर कब्जा कर रहे थे और उनकी पारंपरिक कृषि प्रणाली (खुंटकट्टी) को नष्ट कर रहे थे।</span><span
                      className="en">The "Ulgulan" or Great Tumult (1899-1900) was a tribal uprising led by Birsa Munda
                      against the British colonial authorities and the 'dikus' (outsider landlords/moneylenders) who
                      were seizing tribal lands and destroying their traditional agrarian system (Khuntkatti).</span>
                  </p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q2</span> <span className="hi">सीएनटी एक्ट 1908 क्या है?</span><span
                    className="en">What is the CNT Act 1908?</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">छोटा नागपुर टेनेंसी (सीएनटी) अधिनियम बिरसा मुंडा विद्रोह के बाद बनाया गया था। यह
                      आदिवासी भूमि को गैर-आदिवासियों को हस्तांतरित करने पर सख्ती से रोक लगाता है, जो झारखंड में आदिवासी
                      पहचान और कृषि आजीविका के लिए एक महत्वपूर्ण सुरक्षा कवच के रूप में कार्य करता है।</span><span
                      className="en">The <strong>Chota Nagpur Tenancy (CNT) Act</strong> was enacted post-Birsa Munda
                      rebellion. It strictly prohibits the transfer of tribal land to non-tribals, acting as a crucial
                      protective shield for the tribal identity and agrarian livelihood in Jharkhand.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q3</span> <span className="hi">झारखंड में 'संसाधन अभिशाप' को परिभाषित
                    करें।</span><span className="en">Define the 'Resource Curse' in Jharkhand.</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">विरोधाभास जहां विशाल प्राकृतिक संसाधनों (झारखंड में कोयला, लोहा, यूरेनियम) वाला एक
                      क्षेत्र स्थिर आर्थिक विकास, अत्यधिक गरीबी और खराब सामाजिक संकेतकों का अनुभव करता है, जिसका मुख्य
                      कारण शोषण, विस्थापन और भ्रष्टाचार है।</span><span className="en">The paradox where a region with
                      immense natural resources (coal, iron, uranium in Jharkhand) experiences stagnant economic growth,
                      extreme poverty, and poor social indicators, largely due to exploitation, displacement, and
                      corruption.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q4</span> <span className="hi">पेसा अधिनियम 1996 क्या है?</span><span
                    className="en">What is the PESA Act 1996?</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">पंचायत (अनुसूचित क्षेत्रों तक विस्तार) अधिनियम स्वशासन के माध्यम से आदिवासी
                      समुदायों को सशक्त बनाता है। यह ग्राम सभा को उनके पारंपरिक कानूनों का सम्मान करते हुए स्थानीय
                      संसाधनों, लघु वन उपज और भूमि अधिग्रहण पर व्यापक अधिकार प्रदान करता है।</span><span className="en">The
                      <strong>Panchayats (Extension to Scheduled Areas) Act</strong> empowers tribal communities through
                      self-governance. It grants the Gram Sabha sweeping powers over local resources, minor forest
                      produce, and land acquisition, respecting their customary laws.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q5</span> <span className="hi">झारखण्ड के प्रथम मुख्यमंत्री का नाम
                    बताइये?</span><span className="en">Name the first Chief Minister of Jharkhand.</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">बाबूलाल मरांडी (बीजेपी से). उन्होंने 15 नवंबर 2000 को पद की शपथ ली, जिस दिन बिहार
                      से अलग होकर झारखंड बना था।</span><span className="en"><strong>Babulal Marandi</strong> (from the BJP).
                      He took the oath of office on November 15, 2000, the day Jharkhand was carved out of Bihar.</span>
                  </p>
                </div>
              </details>

              <h5 className="qa-section-title" style={{"marginTop": "20px"}}><PenTool size={18} style={{"color": "#3b82f6"}} /> Long Questions (15-20 Marks)</h5>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q1</span> <span className="hi">अलग झारखंड राज्य के निर्माण के लिए ऐतिहासिक
                    पृष्ठभूमि और सामाजिक-राजनीतिक आंदोलन का पता लगाएं।</span><span className="en">Trace the historical
                    background and the socio-political movement for the creation of a separate Jharkhand state.</span>
                  <span className="qa-marks">[20 Marks]</span>
                </summary>
                <div className="qa-content">
                  <h5><span className="hi">1 परिचय</span><span className="en">1. Introduction</span></h5>
                  <p><span className="hi">झारखंड (जंगलों की भूमि) का गठन 15 नवंबर 2000 को हुआ था। एक अलग राज्य के लिए संघर्ष
                      भारत में सबसे लंबे संघर्षों में से एक था, जो जातीय पहचान और आर्थिक शोषण में निहित था।</span><span
                      className="en">Jharkhand (the land of forests) was formed on Nov 15, 2000. The struggle for a separate
                      state was one of the longest in India, rooted in ethnic identity and economic exploitation.</span>
                  </p>
                  <h5><span className="hi">2. प्रारंभिक चरण (स्वतंत्रता-पूर्व)</span><span className="en">2. Early Phase
                      (Pre-Independence)</span></h5>
                  <ul>
                    <li><span className="hi">जनजातीय विद्रोह: संथाल हुल (1855), बिरसा मुंडा उलगुलान (1899) 'दिकू' (बाहरी)
                        शोषण के खिलाफ शुरुआती दावे थे।</span><span className="en"><strong>Tribal Rebellions:</strong>
                        Santhal Hul (1855), Birsa Munda Ulgulan (1899) were early assertions against 'diku' (outsider)
                        exploitation.</span></li>
                    <li><span className="hi">छोटा नागपुर उन्नति समाज (1915): आदिवासी उत्थान की मांग करने वाला पहला
                        सामाजिक-राजनीतिक संगठन।</span><span className="en"><strong>Chota Nagpur Unnati Samaj
                          (1915):</strong> First socio-political organization demanding tribal upliftment.</span></li>
                    <li><span className="hi">आदिवासी महासभा (1938): जयपाल सिंह मुंडा के नेतृत्व में, इसने औपचारिक रूप से
                        साइमन कमीशन के समक्ष आदिवासियों के लिए एक अलग राज्य की मांग की।</span><span
                        className="en"><strong>Adivasi Mahasabha (1938):</strong> Led by Jaipal Singh Munda, it formally
                        demanded a separate state for tribals before the Simon Commission.</span></li>
                  </ul>
                  <h5><span className="hi">3. स्वतंत्रता के बाद का चरण</span><span className="en">3. Post-Independence
                      Phase</span></h5>
                  <ul>
                    <li><span className="hi">झारखंड पार्टी (1950): जयपाल सिंह मुंडा ने राजनीतिक मांग का नेतृत्व किया।
                        हालाँकि, राज्य पुनर्गठन आयोग (1956) ने एक आम भाषा की कमी का हवाला देते हुए इस मांग को खारिज कर
                        दिया।</span><span className="en"><strong>Jharkhand Party (1950):</strong> Jaipal Singh Munda led the
                        political demand. However, the States Reorganisation Commission (1956) rejected the demand
                        citing lack of a common language.</span></li>
                    <li><span className="hi">झामुमो का गठन (1973): यह आंदोलन पूरी तरह से आदिवासी मुद्दे से हटकर क्षेत्रीय
                        सामाजिक-आर्थिक मुद्दे पर केंद्रित हो गया। शिबू सोरेन (झामुमो) ने ए.के. के साथ गठबंधन किया। रॉय
                        (मार्क्सवादी) और बिनोद बिहारी महतो, आर्थिक शोषण के खिलाफ आदिवासियों और स्थानीय गैर-आदिवासियों
                        (सदान) को एक साथ ला रहे हैं।</span><span className="en"><strong>Formation of JMM (1973):</strong>
                        The movement shifted from a purely tribal issue to a regional socio-economic issue. Shibu Soren
                        (JMM) aligned with A.K. Roy (Marxist) and Binod Bihari Mahato, bringing tribals and local
                        non-tribals (Sadan) together against economic exploitation.</span></li>
                  </ul>
                  <h5><span className="hi">4. अंतिम चरण</span><span className="en">4. Final Phase</span></h5>
                  <ul>
                    <li><span className="hi">लंबे संघर्ष, बंद और बातचीत के कारण 1995 में झारखंड क्षेत्र स्वायत्त परिषद
                        (जेएएसी) का गठन हुआ।</span><span className="en">The prolonged struggle, bandhs, and negotiations led
                        to the formation of the Jharkhand Area Autonomous Council (JAAC) in 1995.</span></li>
                    <li><span className="hi">अंततः, बिहार पुनर्गठन विधेयक पारित हुआ और 2000 में झारखंड भारत का 28वां राज्य
                        बन गया।</span><span className="en">Finally, the Bihar Reorganisation Bill was passed, and Jharkhand
                        became the 28th state of India in 2000.</span></li>
                  </ul>
                  <h5><span className="hi">5। उपसंहार</span><span className="en">5. Conclusion</span></h5>
                  <p><span className="hi">झारखंड आंदोलन अद्वितीय था क्योंकि यह एक जातीय आदिवासी पहचान आंदोलन से आंतरिक
                      उपनिवेशवाद और आर्थिक हाशिये पर जाने के खिलाफ एक व्यापक क्षेत्रीय आंदोलन में परिवर्तित हो
                      गया।</span><span className="en">The Jharkhand movement was unique as it transitioned from an ethnic
                      tribal identity movement into a broader regional movement against internal colonialism and
                      economic marginalization.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q2</span> <span className="hi">औद्योगीकरण के सामाजिक-आर्थिक प्रभाव और इसके
                    परिणामस्वरूप झारखंड में वामपंथी उग्रवाद (नक्सलवाद) के उदय का विश्लेषण करें।</span><span
                    className="en">Analyze the socio-economic impact of industrialization and the consequent rise of
                    Left-Wing Extremism (Naxalism) in Jharkhand.</span> <span className="qa-marks">[20 Marks]</span>
                </summary>
                <div className="qa-content">
                  <h5><span className="hi">1 परिचय</span><span className="en">1. Introduction</span></h5>
                  <p><span className="hi">भारत की 40% खनिज संपदा झारखंड में है। हालाँकि, स्वतंत्रता के बाद अपनाए गए
                      औद्योगीकरण (खदान, बांध, कारखाने) के मॉडल का स्वदेशी आबादी पर गंभीर प्रतिकूल प्रभाव पड़ा
                      है।</span><span className="en">Jharkhand accounts for 40% of India's mineral wealth. However, the
                      model of industrialization (mines, dams, factories) pursued post-independence has had severe
                      adverse impacts on the indigenous population.</span></p>
                  <h5><span className="hi">2. औद्योगीकरण का सामाजिक-आर्थिक प्रभाव</span><span className="en">2. Socio-Economic
                      Impact of Industrialization</span></h5>
                  <ul>
                    <li><span className="hi">बड़े पैमाने पर विस्थापन: डीवीसी, एचईसी रांची और कोयला खदानों जैसी परियोजनाओं ने
                        पर्याप्त पुनर्वास या मुआवजे के बिना लाखों आदिवासियों को विस्थापित किया।</span><span
                        className="en"><strong>Massive Displacement:</strong> Projects like the DVC, HEC Ranchi, and coal
                        mines displaced lakhs of tribals without adequate rehabilitation or compensation.</span></li>
                    <li><span className="hi">आजीविका का नुकसान: आदिवासियों ने अपनी जमीन और जंगल (जल, जंगल, जमीन) खो दिए,
                        जिससे स्वतंत्र किसान दिहाड़ी मजदूर या बेसहारा हो गए।</span><span className="en"><strong>Loss of
                          Livelihood:</strong> Tribals lost their land and forests (Jal, Jungle, Zameen), turning
                        independent farmers into daily wage laborers or destitutes.</span></li>
                    <li><span className="hi">जनसांख्यिकीय बदलाव: औद्योगिक नौकरियों के लिए बाहरी लोगों (दिकुओं) की भारी आमद
                        ने कई जिलों में आदिवासियों को अल्पसंख्यक बना दिया, जिससे उनकी राजनीतिक शक्ति और संस्कृति कमजोर
                        हो गई।</span><span className="en"><strong>Demographic Shift:</strong> Massive influx of outsiders
                        (dikus) for industrial jobs reduced tribals to a minority in many districts, diluting their
                        political power and culture.</span></li>
                    <li><span className="hi">पर्यावरणीय गिरावट: अनियमित खनन से गंभीर जल और मिट्टी प्रदूषण हुआ, जिससे कृषि
                        पारिस्थितिकी तंत्र नष्ट हो गया।</span><span className="en"><strong>Environmental
                          Degradation:</strong> Unregulated mining caused severe water and soil pollution, destroying
                        the agricultural ecosystem.</span></li>
                  </ul>
                  <h5><span className="hi">3. वामपंथी उग्रवाद (नक्सलवाद) का उदय</span><span className="en">3. Rise of Left-Wing
                      Extremism (Naxalism)</span></h5>
                  <ul>
                    <li><span className="hi">मूल कारण: झारखंड में नक्सलवाद केवल कानून-व्यवस्था की समस्या नहीं है; यह एक
                        सामाजिक-आर्थिक मुद्दा है जिसकी जड़ भूमि हस्तांतरण, शोषण और न्याय प्रदान करने में राज्य की विफलता
                        है।</span><span className="en"><strong>Root Cause:</strong> Naxalism in Jharkhand is not merely a
                        law-and-order problem; it is a socio-economic issue rooted in land alienation, exploitation, and
                        the state's failure to provide justice.</span></li>
                    <li><span className="hi">शून्यता: माओवादियों ने त्वरित न्याय प्रदान करने के लिए "कंगारू अदालतें" आयोजित
                        करके और शोषणकारी ठेकेदारों और वन अधिकारियों के खिलाफ लड़ाई करके दूरदराज के क्षेत्रों में शासन की
                        शून्यता को भर दिया।</span><span className="en"><strong>The Vacuum:</strong> The Maoists filled the
                        governance vacuum in remote areas, holding "Kangaroo courts" to provide speedy justice and
                        fighting against exploitative contractors and forest officials.</span></li>
                    <li><span className="hi">भर्ती: अलग-थलग और विस्थापित युवा, कोई भविष्य न देखकर और राज्य की उदासीनता से
                        नाराज होकर, आसानी से चरमपंथी विचारधारा का शिकार हो गए।</span><span
                        className="en"><strong>Recruitment:</strong> The alienated and displaced youth, seeing no future and
                        angry at the state's apathy, easily fell prey to extremist ideologies.</span></li>
                  </ul>
                  <h5><span className="hi">4. निष्कर्ष</span><span className="en">4. Conclusion</span></h5>
                  <p><span className="hi">उग्रवाद को हल करने के लिए, राज्य को पेसा अधिनियम को अक्षरश: लागू करना चाहिए, खनन
                      रॉयल्टी (उदाहरण के लिए, डीएमएफ फंड) का समान वितरण सुनिश्चित करना चाहिए, और केवल कॉर्पोरेट नेतृत्व
                      वाले विकास के बजाय मानव विकास पर ध्यान केंद्रित करना चाहिए।</span><span className="en">To solve
                      extremism, the state must implement the PESA Act in letter and spirit, ensure equitable
                      distribution of mining royalties (e.g., DMF funds), and focus on human development rather than
                      just corporate-led growth.</span></p>
                </div>
              </details>

              <div className="info-box" style={{"borderLeftColor": "#f59e0b"}}>
                <h4>🎓 UGC NET Expert Tips</h4>
                <p>For State Politics, know the timeline: Adivasi Mahasabha (1938) -&gt; Jharkhand Party under Jaipal
                  Singh Munda (1950) -&gt; JMM (1973). Jharkhand was formed via Bihar Reorganisation Act 2000.</p>
              </div>
            </div>

            {/**/}
            <h4 className="unit-title" style={{"color": "#6366f1"}}><Users size={18} /> Political Sociology</h4>
            <div className="content-box">
              <h5 className="qa-section-title"><Zap size={18} style={{"color": "#f59e0b"}} /> Short Questions (2-5
                Marks)</h5>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q1</span> <span className="hi">राजनीतिक समाजीकरण को परिभाषित
                    करें।</span><span className="en">Define Political Socialization.</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">यह आजीवन प्रक्रिया है जिसके माध्यम से व्यक्ति अपने समाज की राजनीतिक संस्कृति,
                      मूल्यों और मानदंडों को सीखते हैं, स्वीकार करते हैं और आत्मसात करते हैं। एजेंसियों में परिवार,
                      स्कूल, सहकर्मी समूह और जनसंचार माध्यम शामिल हैं।</span><span className="en">It is the lifelong process
                      through which individuals learn, accept, and internalize the political culture, values, and norms
                      of their society. Agencies include family, school, peer groups, and mass media.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q2</span> <span className="hi">राजनीतिक संस्कृति के प्रकार क्या
                    हैं?</span><span className="en">What are the types of Political Culture?</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">गेब्रियल बादाम और सिडनी वर्बा ने तीन प्रकारों की पहचान की: पारोचियल (नागरिकों को
                      राजनीतिक व्यवस्था के बारे में कोई जागरूकता नहीं है), विषय (प्रणाली के बारे में जागरूक लेकिन
                      निष्क्रिय/आज्ञाकारी), और प्रतिभागी (जागरूक और सक्रिय रूप से राजनीतिक प्रक्रिया में
                      शामिल)।</span><span className="en">Gabriel Almond and Sidney Verba identified three types:
                      <strong>Parochial</strong> (citizens have no awareness of the political system),
                      <strong>Subject</strong> (aware of the system but passive/obedient), and
                      <strong>Participant</strong> (aware and actively involved in the political process).</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q3</span> <span className="hi">'अल्पतंत्र का लौह कानून' क्या है?</span><span
                    className="en">What is the 'Iron Law of Oligarchy'?</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">रॉबर्ट मिशेल्स द्वारा विकसित एक सिद्धांत जिसमें कहा गया है कि सभी जटिल संगठन, चाहे
                      वे कितने भी लोकतांत्रिक क्यों न हों, अंततः नौकरशाही विशेषज्ञता और नेतृत्व की आवश्यकता के कारण
                      कुलीनतंत्र (कुछ अभिजात वर्ग द्वारा शासन) में विकसित हो जाते हैं।</span><span className="en">A theory
                      developed by <strong>Robert Michels</strong> stating that all complex organizations, regardless of
                      how democratic they start out, eventually evolve into oligarchies (rule by a few elites) due to
                      the necessity of bureaucratic specialization and leadership.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q4</span> <span className="hi">'अभिजात वर्ग के चक्र' को परिभाषित
                    करें।</span><span className="en">Define 'Circulation of Elites'.</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">विल्फ्रेडो पेरेटो द्वारा गढ़ा गया, यह वर्णन करता है कि सत्ता कैसे दो प्रकार के
                      अभिजात वर्ग के बीच आगे और पीछे बदलती है: 'शेर' (जो बल/स्थिरता द्वारा शासन करते हैं) और 'फॉक्स' (जो
                      चालाक/नवाचार द्वारा शासन करते हैं)। जैसे ही एक समूह का क्षय होता है, दूसरा उसकी जगह ले लेता
                      है।</span><span className="en">Coined by <strong>Vilfredo Pareto</strong>, it describes how power
                      shifts back and forth between two types of elites: 'Lions' (who rule by force/stability) and
                      'Foxes' (who rule by cunning/innovation). As one group decays, the other replaces it.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q5</span> <span className="hi">राजनीतिक समाजीकरण में परिवार की क्या भूमिका
                    है?</span><span className="en">What is the role of family in political socialization?</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">परिवार सबसे मौलिक और प्राथमिक एजेंसी है। यह अधिकार, आज्ञाकारिता और सामाजिक मुद्दों
                      के प्रति एक बच्चे के शुरुआती दृष्टिकोण को आकार देता है, जो काफी हद तक उनके भविष्य के राजनीतिक दल
                      की संबद्धता और वैचारिक झुकाव को निर्धारित करता है।</span><span className="en">The family is the most
                      fundamental and primary agency. It shapes a child's earliest attitudes towards authority,
                      obedience, and social issues, largely determining their future political party affiliations and
                      ideological leanings.</span></p>
                </div>
              </details>

              <h5 className="qa-section-title" style={{"marginTop": "20px"}}><PenTool size={18} style={{"color": "#3b82f6"}} /> Long Questions (15-20 Marks)</h5>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q1</span> <span className="hi">राजनीतिक संस्कृति को परिभाषित करें और
                    गेब्रियल बादाम और सिडनी वर्बा द्वारा इसके वर्गीकरण का आलोचनात्मक परीक्षण करें।</span><span
                    className="en">Define Political Culture and critically examine its classification by Gabriel Almond and
                    Sidney Verba.</span> <span className="qa-marks">[20 Marks]</span></summary>
                <div className="qa-content">
                  <h5><span className="hi">1 परिचय</span><span className="en">1. Introduction</span></h5>
                  <p><span className="hi">राजनीतिक संस्कृति उन दृष्टिकोणों, विश्वासों और भावनाओं के समूह को संदर्भित करती है
                      जो एक राजनीतिक प्रक्रिया को आदेश और अर्थ देते हैं। बादाम और वर्बा ने अपनी मौलिक पुस्तक 'द सिविक
                      कल्चर' (1963) में राजनीतिक संस्कृति को वर्गीकृत करने के लिए पांच देशों का अध्ययन किया।</span><span
                      className="en">Political Culture refers to the set of attitudes, beliefs, and sentiments that give
                      order and meaning to a political process. Almond and Verba, in their seminal book <em>'The Civic
                        Culture' (1963)</em>, studied five nations to classify political culture.</span></p>
                  <h5><span className="hi">2. राजनीतिक संस्कृति का वर्गीकरण</span><span className="en">2. Classification of
                      Political Culture</span></h5>
                  <ul>
                    <li><span className="hi">संकीर्ण राजनीतिक संस्कृति: नागरिकों को राष्ट्रीय राजनीतिक व्यवस्था के बारे में
                        कोई जागरूकता नहीं है। उनकी वफादारी स्थानीय जनजाति, गांव या धार्मिक नेता (जैसे, पारंपरिक समाज) के
                        प्रति है।</span><span className="en"><strong>Parochial Political Culture:</strong> Citizens have no
                        awareness of the national political system. Their loyalty is to the local tribe, village, or
                        religious leader (e.g., traditional societies).</span></li>
                    <li><span className="hi">विषय राजनीतिक संस्कृति: नागरिक राजनीतिक व्यवस्था और उसके परिणामों (कानून, कर)
                        के बारे में जानते हैं, लेकिन वे खुद को ऐसे विषयों के रूप में देखते हैं जिनका पालन करना चाहिए, न
                        कि सक्रिय प्रतिभागियों के रूप में जो सिस्टम को बदल सकते हैं (उदाहरण के लिए, सत्तावादी
                        शासन)।</span><span className="en"><strong>Subject Political Culture:</strong> Citizens are aware of
                        the political system and its outputs (laws, taxes), but they view themselves as subjects who
                        must obey, not as active participants who can change the system (e.g., authoritarian
                        regimes).</span></li>
                    <li><span className="hi">सहभागी राजनीतिक संस्कृति: नागरिक इनपुट (मांग) और आउटपुट दोनों प्रणाली के बारे
                        में अत्यधिक जागरूक हैं, और मतदान, विरोध और हित समूहों (उदाहरण के लिए, आधुनिक लोकतंत्र) के माध्यम
                        से राजनीति में सक्रिय रूप से भाग लेते हैं।</span><span className="en"><strong>Participant Political
                          Culture:</strong> Citizens are highly aware of the system, both inputs (demands) and outputs,
                        and actively participate in politics through voting, protesting, and interest groups (e.g.,
                        modern democracies).</span></li>
                  </ul>
                  <h5><span className="hi">3. 'नागरिक संस्कृति'</span><span className="en">3. The 'Civic Culture'</span></h5>
                  <p><span className="hi">बादाम और वर्बा ने तर्क दिया कि स्थिर लोकतंत्र के लिए आदर्श संस्कृति नागरिक
                      संस्कृति है - विषय और भागीदार संस्कृतियों का एक संतुलित मिश्रण। बहुत अधिक भागीदारी प्रणाली पर
                      अधिभार और अस्थिरता का कारण बनती है; सरकार के सुचारू रूप से कार्य करने के लिए कुछ विषयगत
                      निष्क्रियता की आवश्यकता है।</span><span className="en">Almond and Verba argued that the ideal culture
                      for a stable democracy is the <strong>Civic Culture</strong>—a balanced mix of Subject and
                      Participant cultures. Too much participation causes system overload and instability; some subject
                      passivity is needed for government to function smoothly.</span></p>
                  <h5><span className="hi">4. निष्कर्ष</span><span className="en">4. Conclusion</span></h5>
                  <p><span className="hi">जबकि पश्चिमी पूर्वाग्रह (जातीयकेंद्रवाद) के लिए आलोचना की गई है, उनका वर्गीकरण यह
                      समझने के लिए एक मूलभूत अवधारणा बना हुआ है कि लोकतंत्र कुछ देशों में सफल क्यों होता है और दूसरों
                      में विफल रहता है।</span><span className="en">While criticized for Western bias (ethnocentrism), their
                      classification remains a foundational concept for understanding why democracy succeeds in some
                      nations and fails in others.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q2</span> <span className="hi">पेरेटो, मोस्का और मिशेल्स के योगदान के विशेष
                    संदर्भ में लोकतंत्र के अभिजात वर्ग सिद्धांत की आलोचनात्मक जांच करें।</span><span
                    className="en">Critically examine the Elite Theory of Democracy with special reference to the
                    contributions of Pareto, Mosca, and Michels.</span> <span className="qa-marks">[20 Marks]</span>
                </summary>
                <div className="qa-content">
                  <h5><span className="hi">1 परिचय</span><span className="en">1. Introduction</span></h5>
                  <p><span className="hi">अभिजन सिद्धांत का मानना ​​है कि किसी भी समाज में सच्चा लोकतंत्र (लोगों द्वारा
                      शासन) एक भ्रम है। सत्ता हमेशा एक असंगठित बहुसंख्यक (जनता) पर एक छोटे, संगठित अल्पसंख्यक (अभिजात
                      वर्ग) के हाथों में केंद्रित होती है।</span><span className="en">The Elite Theory posits that in any
                      society, true democracy (rule by the people) is an illusion. Power is always concentrated in the
                      hands of a small, organized minority (the elite) over an unorganized majority (the masses).</span>
                  </p>
                  <h5><span className="hi">2. विल्फ्रेडो पेरेटो (अभिजात वर्ग का चक्र)</span><span className="en">2. Vilfredo
                      Pareto (Circulation of Elites)</span></h5>
                  <p><span className="hi">'द माइंड एंड सोसाइटी' में पेरेटो ने तर्क दिया कि लोग शारीरिक और बौद्धिक रूप से
                      असमान हैं। अभिजात वर्ग वे हैं जिनके पास उच्चतम क्षमताएं हैं। उन्होंने उन्हें 'शेर' (बल का उपयोग
                      करना, उदाहरण के लिए, सैन्य तानाशाह) और 'फॉक्स' (चालाक का उपयोग करना, उदाहरण के लिए, राजनेता) में
                      वर्गीकृत किया। इतिहास "अभिजात वर्ग का कब्रिस्तान" है क्योंकि ये दोनों प्रकार लगातार एक-दूसरे की
                      जगह लेते हैं (अभिजात वर्ग का चक्र)।</span><span className="en">In <em>'The Mind and Society'</em>,
                      Pareto argued that people are unequal physically and intellectually. The elite are those with the
                      highest abilities. He categorized them into 'Lions' (using force, e.g., military dictators) and
                      'Foxes' (using cunning, e.g., politicians). History is a "graveyard of aristocracies" as these two
                      types constantly replace each other (Circulation of Elites).</span></p>
                  <h5>3. Gaetano Mosca (The Ruling Class)</h5>
                  <p><span className="hi">'द रूलिंग क्लास' में, मोस्का ने तर्क दिया कि सभी समाजों में, दो वर्ग दिखाई देते
                      हैं: एक वर्ग जो शासन करता है और एक वर्ग जो शासित होता है। शासक वर्ग हमेशा अल्पसंख्यक होता है,
                      लेकिन वह हावी रहता है क्योंकि वह अत्यधिक संगठित होता है, जबकि बहुसंख्यक असंगठित होता है। वे एक
                      "राजनीतिक सूत्र" (मिथक/विचारधारा) के माध्यम से अपने शासन को उचित ठहराते हैं।</span><span
                      className="en">In <em>'The Ruling Class'</em>, Mosca argued that in all societies, two classes appear:
                      a class that rules and a class that is ruled. The ruling class is always a minority, but it
                      dominates because it is highly organized, whereas the majority is unorganized. They justify their
                      rule through a "political formula" (myth/ideology).</span></p>
                  <h5><span className="hi">4. रॉबर्ट मिशेल्स (अल्पतंत्र का लौह कानून)</span><span className="en">4. Robert
                      Michels (Iron Law of Oligarchy)</span></h5>
                  <p><span className="hi">'राजनीतिक दलों' में, मिशेल ने समाजवादी पार्टियों का अध्ययन किया और पाया कि
                      लोकतंत्र के लिए प्रतिबद्ध संगठन भी अनिवार्य रूप से कुलीनतंत्र में बदल जाते हैं। क्यों? क्योंकि
                      जटिल संगठनों को विशेषज्ञ नेतृत्व और नौकरशाही की आवश्यकता होती है। समय के साथ, ये नेता शक्ति को
                      मजबूत करते हैं, और जनता उदासीन हो जाती है।</span><span className="en">In <em>'Political Parties'</em>,
                      Michels studied socialist parties and found that even organizations committed to democracy
                      inevitably turn into oligarchies. Why? Because complex organizations require expert leadership and
                      bureaucracy. Over time, these leaders consolidate power, and the masses become apathetic.</span>
                  </p>
                  <h5><span className="hi">5। उपसंहार</span><span className="en">5. Conclusion</span></h5>
                  <p><span className="hi">अभिजात वर्ग का सिद्धांत मूल रूप से मार्क्सवादी वर्ग सिद्धांत (यह कहकर कि अभिजात्य
                      शासन अपरिहार्य है, यहां तक ​​कि साम्यवाद में भी) और शास्त्रीय लोकतंत्र (यह कहकर कि जनता कभी भी
                      वास्तव में शासन नहीं करती) दोनों को चुनौती देती है। यह शक्ति की गतिशीलता का एक सनकी लेकिन अत्यधिक
                      यथार्थवादी दृष्टिकोण प्रदान करता है।</span><span className="en">The Elite theory fundamentally
                      challenges both Marxist class theory (by stating elite rule is inevitable, even in communism) and
                      Classical Democracy (by stating the masses never truly rule). It provides a cynical but highly
                      realistic view of power dynamics.</span></p>
                </div>
              </details>

              <div className="info-box" style={{"borderLeftColor": "#f59e0b"}}>
                <h4>🎓 UGC NET Expert Tips</h4>
                <p>Key mapping: *The Civic Culture* (Almond &amp; Verba). *The Ruling Class* (Mosca). *The Mind and
                  Society* (Pareto). Elite theory fundamentally rejects Marxist class struggle.</p>
              </div>
            </div>

            {/**/}
            <h4 className="unit-title" style={{"color": "#6366f1"}}><Newspaper size={18} /> Contemporary Political
              Issues</h4>
            <div className="content-box">
              <h5 className="qa-section-title"><Zap size={18} style={{"color": "#f59e0b"}} /> Short Questions (2-5
                Marks)</h5>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q1</span> <span className="hi">'उत्तर-दक्षिण विभाजन' क्या है?</span><span
                    className="en">What is the 'North-South Divide'?</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">एक सामाजिक-आर्थिक और राजनीतिक विभाजन जो अमीर, औद्योगिकीकृत विकसित देशों (ग्लोबल
                      नॉर्थ) और गरीब, विकासशील देशों (ग्लोबल साउथ) के बीच धन, प्रौद्योगिकी और शक्ति में भारी असमानताओं
                      का प्रतिनिधित्व करता है।</span><span className="en">A socio-economic and political division
                      representing the stark disparities in wealth, technology, and power between the wealthy,
                      industrialized developed nations (the Global North) and the poorer, developing nations (the Global
                      South).</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q2</span> <span className="hi">सतत विकास को परिभाषित करें।</span><span
                    className="en">Define Sustainable Development.</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">जैसा कि ब्रंटलैंड रिपोर्ट (1987) द्वारा परिभाषित किया गया है, यह "विकास है जो
                      भविष्य की पीढ़ियों की अपनी जरूरतों को पूरा करने की क्षमता से समझौता किए बिना वर्तमान की जरूरतों को
                      पूरा करता है।" यह आर्थिक विकास, पर्यावरण संरक्षण और सामाजिक समानता को संतुलित करता है।</span><span
                      className="en">As defined by the <strong>Brundtland Report (1987)</strong>, it is "development that
                      meets the needs of the present without compromising the ability of future generations to meet
                      their own needs." It balances economic growth, environmental protection, and social equity.</span>
                  </p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q3</span> <span className="hi">सीबीडीआर का मतलब क्या है?</span><span
                    className="en">What does CBDR stand for?</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">सामान्य लेकिन विभेदित जिम्मेदारियाँ। अंतरराष्ट्रीय पर्यावरण कानून में एक सिद्धांत
                      यह स्वीकार करता है कि जहां सभी देशों का पर्यावरण की रक्षा करने का साझा दायित्व है, वहीं विकसित
                      राष्ट्र अपने ऐतिहासिक कार्बन उत्सर्जन और अधिक वित्तीय क्षमता के कारण अधिक जिम्मेदारी निभाते
                      हैं।</span><span className="en"><strong>Common But Differentiated Responsibilities</strong>. A
                      principle in international environmental law acknowledging that while all nations have a shared
                      obligation to protect the environment, developed nations bear greater responsibility due to their
                      historical carbon emissions and greater financial capacity.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q4</span> <span className="hi">एनआईईओ क्या है?</span><span className="en">What
                    is NIEO?</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">न्यू इंटरनेशनल इकोनॉमिक ऑर्डर (1974) गुटनिरपेक्ष आंदोलन (एनएएम) द्वारा समर्थित
                      प्रस्तावों का एक समूह था, जिसमें विकासशील देशों के खिलाफ व्यापार की असमान शर्तों और नव-उपनिवेशवाद
                      को समाप्त करने के लिए वैश्विक आर्थिक प्रणाली के पुनर्गठन की मांग की गई थी।</span><span
                      className="en">The <strong>New International Economic Order (1974)</strong> was a set of proposals
                      championed by the Non-Aligned Movement (NAM) demanding the restructuring of the global economic
                      system to end unequal terms of trade and neo-colonialism against developing countries.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q5</span> <span className="hi">वैश्वीकरण को परिभाषित करें।</span><span
                    className="en">Define Globalization.</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">वस्तुओं और सेवाओं, प्रौद्योगिकी और निवेश, लोगों और सूचना के प्रवाह में सीमा पार
                      व्यापार के माध्यम से वैश्विक अर्थव्यवस्थाओं, संस्कृतियों और आबादी का तेजी से एकीकरण और
                      अंतर्संबंध।</span><span className="en">The rapid integration and interconnectedness of global
                      economies, cultures, and populations through cross-border trade in goods and services, technology,
                      and flows of investment, people, and information.</span></p>
                </div>
              </details>

              <h5 className="qa-section-title" style={{"marginTop": "20px"}}><PenTool size={18} style={{"color": "#3b82f6"}} /> Long Questions (15-20 Marks)</h5>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q1</span> <span className="hi">विकासशील देशों द्वारा नई अंतर्राष्ट्रीय
                    आर्थिक व्यवस्था (एनआईईओ) की मांग का विश्लेषण करें। आज यह कितना प्रासंगिक है?</span><span
                    className="en">Analyze the demand for a New International Economic Order (NIEO) by developing countries.
                    How relevant is it today?</span> <span className="qa-marks">[20 Marks]</span></summary>
                <div className="qa-content">
                  <h5><span className="hi">1 परिचय</span><span className="en">1. Introduction</span></h5>
                  <p><span className="hi">1970 के दशक में, नव स्वतंत्र राष्ट्रों को एहसास हुआ कि आर्थिक स्वतंत्रता के बिना
                      राजनीतिक स्वतंत्रता अर्थहीन है। उन्होंने ब्रेटन वुड्स संस्थानों (आईएमएफ, विश्व बैंक) को ग्लोबल
                      नॉर्थ के प्रति अत्यधिक पक्षपाती पाया। इस प्रकार, 1974 में, संयुक्त राष्ट्र महासभा ने NIEO के लिए
                      एक घोषणा को अपनाया।</span><span className="en">In the 1970s, newly independent nations realized that
                      political independence was meaningless without economic independence. They found the Bretton Woods
                      institutions (IMF, World Bank) heavily biased toward the Global North. Thus, in 1974, the UN
                      General Assembly adopted a declaration for a NIEO.</span></p>
                  <h5><span className="hi">2. एनआईईओ की मुख्य मांगें</span><span className="en">2. Core Demands of NIEO</span>
                  </h5>
                  <ul>
                    <li><span className="hi">प्राकृतिक संसाधनों पर संप्रभुता: विकासशील देशों को विदेशी संपत्तियों का
                        राष्ट्रीयकरण करने और अपने संसाधनों को नियंत्रित करने का अधिकार।</span><span
                        className="en"><strong>Sovereignty over Natural Resources:</strong> The right of developing
                        countries to nationalize foreign properties and control their own resources.</span></li>
                    <li><span className="hi">निष्पक्ष व्यापार की शर्तें: असमान विनिमय को रोकना जहां विकासशील देश सस्ते कच्चे
                        माल का निर्यात करते थे और महंगी निर्मित वस्तुओं का आयात करते थे।</span><span
                        className="en"><strong>Fair Trade Terms:</strong> Stopping the unequal exchange where developing
                        nations exported cheap raw materials and imported expensive manufactured goods.</span></li>
                    <li><span className="hi">प्रौद्योगिकी हस्तांतरण: पश्चिमी प्रौद्योगिकी तक अप्रतिबंधित और सस्ती पहुंच की
                        मांग करना।</span><span className="en"><strong>Technology Transfer:</strong> Demanding unrestricted
                        and cheaper access to Western technology.</span></li>
                    <li><span className="hi">वैश्विक संस्थानों में सुधार: आईएमएफ और विश्व बैंक में ग्लोबल साउथ के लिए अधिक
                        मतदान शक्ति।</span><span className="en"><strong>Reforming Global Institutions:</strong> More voting
                        power for the Global South in the IMF and World Bank.</span></li>
                  </ul>
                  <h5><span className="hi">3. एनआईईओ का पतन</span><span className="en">3. Decline of NIEO</span></h5>
                  <p><span className="hi">1980 के दशक में विकासशील देशों में ऋण संकट, नवउदारवाद (रीगन/थैचर) के उदय और विकसित
                      देशों की रियायतें देने की अनिच्छा के कारण यह आंदोलन फीका पड़ गया।</span><span className="en">The
                      movement faded in the 1980s due to the debt crisis in developing nations, the rise of
                      neoliberalism (Reagan/Thatcher), and the reluctance of developed nations to make
                      concessions.</span></p>
                  <h5><span className="hi">4. आज प्रासंगिकता</span><span className="en">4. Relevance Today</span></h5>
                  <p><span className="hi">एनआईईओ की भावना आज अत्यधिक प्रासंगिक है। ब्रिक्स जैसे मंच, बहुध्रुवीय मुद्रा पर
                      जोर, और डब्ल्यूटीओ (वैक्सीन पेटेंट, कृषि सब्सिडी) में सुधार की मांग एक निष्पक्ष आर्थिक व्यवस्था के
                      लिए ग्लोबल साउथ के निरंतर संघर्ष को दर्शाते हैं।</span><span className="en">The spirit of NIEO is
                      highly relevant today. Forums like BRICS, the push for a multipolar currency, and demands for
                      reform in the WTO (vaccine patents, agricultural subsidies) reflect the continuing struggle of the
                      Global South for a fairer economic order.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q2</span> <span className="hi">सतत विकास की अवधारणा पर चर्चा करें। जलवायु
                    परिवर्तन से निपटने के लिए वैश्विक प्रयासों (जैसे रियो शिखर सम्मेलन और सीबीडीआर सिद्धांत) का
                    आलोचनात्मक मूल्यांकन करें।</span><span className="en">Discuss the concept of Sustainable Development.
                    Critically evaluate the global efforts (like the Rio Summit and CBDR principle) to address climate
                    change.</span> <span className="qa-marks">[20 Marks]</span></summary>
                <div className="qa-content">
                  <h5><span className="hi">1 परिचय</span><span className="en">1. Introduction</span></h5>
                  <p><span className="hi">20वीं सदी के अंधाधुंध औद्योगीकरण के कारण गंभीर पारिस्थितिक संकट पैदा हुआ। सतत
                      विकास की अवधारणा पर्यावरण संरक्षण के साथ आर्थिक विकास में सामंजस्य स्थापित करने के लिए
                      उभरी।</span><span className="en">The reckless industrialization of the 20th century led to severe
                      ecological crises. The concept of Sustainable Development emerged to reconcile economic growth
                      with environmental preservation.</span></p>
                  <h5><span className="hi">2. रियो पृथ्वी शिखर सम्मेलन (1992)</span><span className="en">2. The Rio Earth Summit
                      (1992)</span></h5>
                  <p><span className="hi">रियो डी जनेरियो में पर्यावरण और विकास पर संयुक्त राष्ट्र सम्मेलन (यूएनसीईडी) एक
                      ऐतिहासिक घटना थी। इसका परिणाम यह हुआ:</span><span className="en">The UN Conference on Environment and
                      Development (UNCED) in Rio de Janeiro was a landmark event. It resulted in:</span></p>
                  <ul>
                    <li><span className="hi">एजेंडा 21: सतत विकास पर वैश्विक कार्रवाई के लिए एक व्यापक खाका।</span><span
                        className="en"><strong>Agenda 21:</strong> A comprehensive blueprint for global action on
                        sustainable development.</span></li>
                    <li><span className="hi">यूएनएफसीसीसी: ग्रीनहाउस गैस सांद्रता को स्थिर करने के लिए स्थापित
                        संधि।</span><span className="en"><strong>UNFCCC:</strong> The treaty established to stabilize
                        greenhouse gas concentrations.</span></li>
                  </ul>
                  <h5><span className="hi">3. सीबीडीआर सिद्धांत</span><span className="en">3. The CBDR Principle</span></h5>
                  <p><span className="hi">रियो में, विकासशील देशों ने आम लेकिन विभेदित जिम्मेदारियों के सिद्धांत को
                      सफलतापूर्वक आगे बढ़ाया। इसने स्वीकार किया कि:</span><span className="en">At Rio, developing countries
                      successfully pushed for the <strong>Common But Differentiated Responsibilities</strong> principle.
                      It acknowledged that:</span></p>
                  <ul>
                    <li><span className="hi">ग्लोबल नॉर्थ ने अपने औद्योगीकरण के दौरान अधिकांश ऐतिहासिक उत्सर्जन का कारण
                        बना।</span><span className="en">The Global North caused the vast majority of historical emissions
                        during their industrialization.</span></li>
                    <li><span className="hi">इसलिए, उत्तर को उत्सर्जन में कटौती करने का नेतृत्व करना चाहिए और ग्लोबल साउथ को
                        जलवायु वित्त और प्रौद्योगिकी प्रदान करनी चाहिए।</span><span className="en">Therefore, the North must
                        take the lead in cutting emissions and provide climate finance and technology to the Global
                        South.</span></li>
                    <li><span className="hi">ग्लोबल साउथ को गरीबी उन्मूलन और आर्थिक विकास को प्राथमिकता देने का अधिकार
                        है।</span><span className="en">The Global South has a right to prioritize poverty eradication and
                        economic development.</span></li>
                  </ul>
                  <h5><span className="hi">4. वैश्विक प्रयासों का आलोचनात्मक मूल्यांकन</span><span className="en">4. Critical
                      Evaluation of Global Efforts</span></h5>
                  <ul>
                    <li><span className="hi">क्योटो प्रोटोकॉल (1997): केवल विकसित राष्ट्रों पर बाध्यकारी लक्ष्य थोपे गए,
                        लेकिन अमेरिका के पीछे हटने और अन्य के लक्ष्य चूक जाने के कारण यह विफल हो गया।</span><span
                        className="en"><strong>Kyoto Protocol (1997):</strong> Imposed binding targets only on developed
                        nations, but failed as the US withdrew and others missed targets.</span></li>
                    <li><span className="hi">पेरिस समझौता (2015): ऊपर से नीचे के लक्ष्यों से नीचे की ओर "राष्ट्रीय स्तर पर
                        निर्धारित योगदान" (एनडीसी) की ओर बदलाव। इसने सभी देशों को एक साथ ला दिया, लेकिन आलोचकों का तर्क
                        है कि वार्मिंग को 1.5 डिग्री सेल्सियस तक सीमित करने के लिए प्रतिज्ञाएं अपर्याप्त हैं। इसके
                        अलावा, उत्तर से जलवायु वित्त के वादे ($100B/वर्ष) अधूरे हैं।</span><span
                        className="en"><strong>Paris Agreement (2015):</strong> A shift from top-down targets to bottom-up
                        "Nationally Determined Contributions" (NDCs). It brought all nations on board, but critics argue
                        the pledges are insufficient to limit warming to 1.5°C. Furthermore, climate finance promises
                        ($100B/year) from the North remain unfulfilled.</span></li>
                  </ul>
                  <h5><span className="hi">5। उपसंहार</span><span className="en">5. Conclusion</span></h5>
                  <p><span className="hi">जबकि वैश्विक जागरूकता चरम पर है, वास्तविक कार्यान्वयन राष्ट्रीय हितों और विकसित
                      देशों की उनके द्वारा मुख्य रूप से पैदा किए गए संकट का वित्तीय बोझ उठाने की अनिच्छा के कारण बाधित
                      है।</span><span className="en">While global awareness has peaked, actual implementation is hindered by
                      national interests and the reluctance of developed nations to bear the financial burden of the
                      crisis they primarily created.</span></p>
                </div>
              </details>

              <div className="info-box" style={{"borderLeftColor": "#f59e0b"}}>
                <h4>🎓 UGC NET Expert Tips</h4>
                <p>Remember the Brandt Line (North-South divide). Brundtland Commission's report was titled "Our Common
                  Future" (1987). NIEO was heavily championed by the Non-Aligned Movement (NAM).</p>
              </div>
            </div>
          </div>
        </div>

        {/**/}
        
    </>
  );
}