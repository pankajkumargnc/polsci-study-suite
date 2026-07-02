"use client";
import { BookOpen, Flag, Globe, Landmark, PenTool, Scale, Shield, Trophy, Users, Zap } from 'lucide-react';

export default function Semester4() {
  return (
    <>
<div id="sem4" className="tab-pane active">

          {/* ── Semester Hero Banner ── */}
          <div className="semester-hero sem-hero-4">
            <div className="sem-hero-icon">🚀</div>
            <h2 className="sem-hero-title">
              <span className="hi">सेमेस्टर IV</span>
              <span className="en">Semester IV</span>
            </h2>
            <p className="sem-hero-subtitle">
              <span className="hi">उन्नत पाठ्यक्रम — अंतर्राष्ट्रीय संगठन, कानून एवं तुलनात्मक सरकार</span>
              <span className="en">Advanced Courses — International Orgs, Law &amp; Comparative Govt</span>
            </p>
            <div className="sem-hero-stats">
              <div className="sem-stat">
                <span className="sem-stat-value">3</span>
                <span className="sem-stat-label"><span className="hi">पेपर</span><span className="en">Papers</span></span>
              </div>
              <div className="sem-stat">
                <span className="sem-stat-value">12+</span>
                <span className="sem-stat-label"><span className="hi">इकाइयाँ</span><span className="en">Units</span></span>
              </div>
              <div className="sem-stat">
                <span className="sem-stat-value">30+</span>
                <span className="sem-stat-label"><span className="hi">मुख्य विषय</span><span className="en">Key Topics</span></span>
              </div>
            </div>
            <p className="sem-hero-quote">
              <span className="hi">"अंतर्राष्ट्रीय कानून राज्यों के आपसी संबंधों को नियंत्रित करने वाला नियमों का समूह है।"</span>
              <span className="en">"International law is the body of rules which governs the mutual relations between states."</span>
            </p>
          </div>

          {/* ── Quick Nav Chips ── */}
          <div className="quick-nav-chips">
            <a href="#sem4-p413" className="nav-chip"><Globe size={16} /> PSC-E-413</a>
            <a href="#sem4-p414" className="nav-chip"><Scale size={16} /> PSC-E-414A</a>
            <a href="#sem4-p415" className="nav-chip"><Users size={16} /> PSC-415</a>
            <a href="#sem4-qa" className="nav-chip"><Trophy size={16} /> Q&amp;A</a>
          </div>

          {/**/}
          <div className="paper-section" data-aos="fade-up" data-accent="cyan" id="sem4-p413">
            <h3 className="paper-title">
              <span style={{display:'flex',alignItems:'center',gap:'10px'}}>
                <span className="paper-icon-badge badge-cyan"><Globe size={18} /></span>
                <span><span className="hi">PSC-E-413A &amp; 413B: अंतर्राष्ट्रीय संगठन एवं भारत की विदेश नीति</span><span className="en">PSC-E-413A &amp; 413B: International Organizations &amp; India's Foreign Policy</span></span>
              </span>
              <span className="unit-count-badge"><span className="hi">4 इकाइयाँ</span><span className="en">4 Units</span></span>
            </h3>

            <h4 className="unit-title"><span className="hi">अंतर्राष्ट्रीय संगठन</span><span className="en">International
                Organizations</span></h4>
            <ul>
              <li><strong><span className="hi">राष्ट्र संघ (League of Nations):</span><span className="en">League of
                    Nations:</span></strong> <span className="hi">प्रथम विश्व युद्ध के बाद 1920 में स्थापित (वुडरो विल्सन के
                  14 सूत्री कार्यक्रम का परिणाम)। यह द्वितीय विश्व युद्ध को रोकने में विफल रहा क्योंकि अमेरिका कभी इसमें
                  शामिल नहीं हुआ और इसके पास अपनी कोई सेना नहीं थी।</span><span className="en">Established in 1920 after WWI
                  (result of Woodrow Wilson's 14-point program). It failed to prevent WWII because the USA never joined
                  and it lacked its own military force.</span></li>
              <li><strong><span className="hi">संयुक्त राष्ट्र सुरक्षा परिषद (UNSC):</span><span className="en">UN Security
                    Council (UNSC):</span></strong> <span className="hi">अंतर्राष्ट्रीय शांति और सुरक्षा के लिए जिम्मेदार।
                  इसमें 15 सदस्य होते हैं: 5 स्थायी (P5 - जिनके पास वीटो पावर है) और 10 गैर-स्थायी (2 साल के कार्यकाल के
                  लिए चुने गए)।</span><span className="en">Responsible for international peace and security. It has 15
                  members: 5 permanent (P5 - with Veto power) and 10 non-permanent (elected for a 2-year term).</span>
              </li>
              <li><strong><span className="hi">रक्षा करने का उत्तरदायित्व (R2P - Responsibility to Protect):</span><span
                    className="en">Responsibility to Protect (R2P):</span></strong> <span className="hi">2005 का UN सिद्धांत।
                  यदि
                  कोई राज्य अपनी आबादी को नरसंहार या युद्ध अपराधों से बचाने में विफल रहता है, तो अंतर्राष्ट्रीय समुदाय
                  को
                  हस्तक्षेप करने का अधिकार (और दायित्व) है।</span><span className="en">A 2005 UN principle. If a state fails
                  to protect its population from genocide or war crimes, the international community has the right (and
                  obligation) to intervene.</span></li>
            </ul>

            <h4 className="unit-title"><span className="hi">भारत की विदेश नीति</span><span className="en">India's Foreign
                Policy</span></h4>
            <ul>
              <li><strong><span className="hi">पंचशील (1954):</span><span className="en">Panchsheel (1954):</span></strong>
                <span className="hi">भारत और चीन के बीच शांतिपूर्ण सह-अस्तित्व के पांच सिद्धांत। 1. एक-दूसरे की क्षेत्रीय
                  अखंडता
                  का सम्मान, 2. गैर-आक्रामकता, 3. आंतरिक मामलों में गैर-हस्तक्षेप, 4. समानता और पारस्परिक लाभ, 5.
                  शांतिपूर्ण सह-अस्तित्व।</span><span className="en">Five principles of peaceful coexistence between India
                  and
                  China. 1. Mutual respect for territorial integrity, 2. Non-aggression, 3. Non-interference in internal
                  affairs, 4. Equality and mutual benefit, 5. Peaceful coexistence.</span>
              </li>
              <li><strong><span className="hi">लुक ईस्ट से एक्ट ईस्ट (Look East to Act East):</span><span className="en">Look
                    East
                    to Act East:</span></strong> <span className="hi">'लुक ईस्ट' नीति (1992 - नरसिम्हा राव) का उद्देश्य
                  आसियान
                  (ASEAN) देशों के साथ आर्थिक संबंध मजबूत करना था। 2014 में इसे 'एक्ट ईस्ट' नीति (PM मोदी) में अपग्रेड
                  किया गया, जिसमें सामरिक और सुरक्षा सहयोग पर भी जोर दिया गया।</span><span className="en">'Look East' policy
                  (1992 - Narasimha Rao) aimed to strengthen economic ties with ASEAN countries. Upgraded to 'Act East'
                  policy in 2014 (PM Modi), emphasizing strategic and security cooperation as well.</span></li>
              <li><strong><span className="hi">123 समझौता (2005-2008):</span><span className="en">123 Agreement
                    (2005-2008):</span></strong> <span className="hi">भारत-अमेरिका असैन्य परमाणु समझौता। इसके तहत भारत अपनी
                  सैन्य और असैन्य परमाणु सुविधाओं को अलग करने पर सहमत हुआ, और अमेरिका ने भारत को परमाणु ईंधन और तकनीक
                  प्रदान की, भले ही भारत ने NPT (परमाणु अप्रसार संधि) पर हस्ताक्षर नहीं किए थे।</span><span
                  className="en">Indo-US Civil Nuclear Agreement. India agreed to separate its military and civilian nuclear
                  facilities, and the US provided nuclear fuel and technology, even though India hadn't signed the NPT
                  (Non-Proliferation Treaty).</span></li>
            </ul>

            {/* ── NEW: Timeline — India's Foreign Policy Evolution ── */}
            <div className="timeline-box">
              <h4>📅 <span className="hi">भारत की विदेश नीति का विकास</span><span className="en">India's Foreign Policy Evolution</span></h4>
              <div className="timeline-items">
                <div className="timeline-item">
                  <div className="timeline-year">1947-1962</div>
                  <div className="timeline-text"><span className="hi">नेहरूवादी युग — गुटनिरपेक्षता (NAM), पंचशील, आदर्शवाद</span><span className="en">Nehruvian Era — Non-Alignment (NAM), Panchsheel, Idealism</span></div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">1971</div>
                  <div className="timeline-text"><span className="hi">इंदिरा युग — यथार्थवाद की ओर झुकाव (Indo-Soviet Treaty)</span><span className="en">Indira Era — Shift towards Realism (Indo-Soviet Treaty)</span></div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">1991-1992</div>
                  <div className="timeline-text"><span className="hi">लुक ईस्ट पॉलिसी (Look East Policy) — नरसिम्हा राव (आर्थिक कूटनीति)</span><span className="en">Look East Policy — Narasimha Rao (Economic Diplomacy)</span></div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">1998</div>
                  <div className="timeline-text"><span className="hi">पोखरण-II परमाणु परीक्षण — "No First Use" नीति की घोषणा</span><span className="en">Pokhran-II Nuclear Tests — "No First Use" policy declared</span></div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">2014-Present</div>
                  <div className="timeline-text"><span className="hi">एक्ट ईस्ट (Act East), नेबरहुड फर्स्ट (Neighbourhood First), मल्टी-अलाइनमेंट</span><span className="en">Act East, Neighbourhood First, Multi-Alignment</span></div>
                </div>
              </div>
            </div>
          </div>

          {/**/}
          <div className="paper-section" data-aos="fade-up" data-accent="indigo" id="sem4-p414">
            <h3 className="paper-title">
              <span style={{display:'flex',alignItems:'center',gap:'10px'}}>
                <span className="paper-icon-badge badge-indigo"><Scale size={18} /></span>
                <span><span className="hi">PSC-E-414A: अंतर्राष्ट्रीय कानून</span><span className="en">PSC-E-414A: International Law</span></span>
              </span>
              <span className="unit-count-badge"><span className="hi">4 इकाइयाँ</span><span className="en">4 Units</span></span>
            </h3>
            <p><strong><span className="hi">ह्यूगो ग्रोटियस (Hugo Grotius):</span><span className="en">Hugo
                  Grotius:</span></strong> <span className="hi">इन्हें 'अंतर्राष्ट्रीय कानून का जनक' माना जाता है। उनकी
                प्रसिद्ध पुस्तक 'डी ज्यूर बेली एक पैसिस' (युद्ध और शांति के कानून पर, 1625) है।</span><span
                className="en">Considered the 'Father of International Law'. His famous book is 'De Jure Belli ac Pacis' (On
                the Law of War and Peace, 1625).</span></p>
            <div className="info-box">
              <h4><span className="hi">अंतर्राष्ट्रीय कानून के स्रोत (ICJ के अनुच्छेद 38 के अनुसार)</span><span
                  className="en">Sources of International Law (According to Article 38 of ICJ)</span></h4>
              <ol>
                <li><span className="hi">अंतर्राष्ट्रीय संधियाँ / कन्वेंशन (Treaties/Conventions)</span><span
                    className="en">International Treaties / Conventions</span></li>
                <li><span className="hi">अंतर्राष्ट्रीय प्रथा (Customs) — कानून के रूप में स्वीकृत सामान्य
                    व्यवहार</span><span className="en">International Customs — general practice accepted as law</span></li>
                <li><span className="hi">कानून के सामान्य सिद्धांत (General principles of law recognized by civilized
                    nations)</span><span className="en">General principles of law recognized by civilized nations</span>
                </li>
                <li><span className="hi">न्यायिक निर्णय और न्यायविदों की शिक्षाएँ (Judicial decisions and teachings of
                    highly
                    qualified publicists)</span><span className="en">Judicial decisions and teachings of highly qualified
                    publicists</span></li>
              </ol>
            </div>
            <ul>
              <li><strong><span className="hi">Pacta Sunt Servanda:</span><span className="en">Pacta Sunt
                    Servanda:</span></strong> <span className="hi">अंतर्राष्ट्रीय कानून का एक मौलिक सिद्धांत जिसका अर्थ है
                  "सहमति का पालन किया जाना चाहिए" (Agreements must be kept)।</span><span className="en">A fundamental
                  principle of international law meaning "Agreements must be kept" (Treaties are binding upon the
                  parties).</span></li>
              <li><strong><span className="hi">प्रत्यर्पण (Extradition):</span><span className="en">Extradition:</span></strong>
                <span className="hi">वह प्रक्रिया जिसके द्वारा एक राज्य, दूसरे राज्य के अनुरोध पर, किसी ऐसे व्यक्ति को
                  सौंपता
                  है जिस पर मुकदमा चलाने या सजा देने का आरोप है। राजनीतिक अपराधों के लिए आमतौर पर प्रत्यर्पण नहीं किया
                  जाता है।</span><span className="en">The process by which one state, at the request of another, surrenders
                  a
                  person accused or convicted of a crime. Extradition is usually not granted for political
                  offenses.</span>
              </li>
            </ul>
            {/* ── NEW: Comparison — International Law vs Municipal Law ── */}
            <div className="comparison-box">
              <div className="comparison-header">
                ⚖️ <span className="hi">अंतर्राष्ट्रीय कानून vs राष्ट्रीय कानून</span><span className="en">International Law vs Municipal Law</span>
              </div>
              <div className="comparison-body">
                <div className="comparison-side">
                  <h5><span className="hi">अंतर्राष्ट्रीय कानून</span><span className="en">International Law</span></h5>
                  <ul>
                    <li><span className="hi">राज्यों के बीच संबंधों को नियंत्रित करता है</span><span className="en">Governs relations between states</span></li>
                    <li><span className="hi">कोई केंद्रीय विधायिका नहीं (UNGA संप्रभु नहीं)</span><span className="en">No central legislature</span></li>
                    <li><span className="hi">सहमति पर आधारित (Treaties)</span><span className="en">Based on consent (Treaties)</span></li>
                    <li><span className="hi">कमजोर प्रवर्तन (Enforcement)</span><span className="en">Weak enforcement</span></li>
                  </ul>
                </div>
                <div className="comparison-vs"><div className="vs-badge">VS</div></div>
                <div className="comparison-side">
                  <h5><span className="hi">राष्ट्रीय (Municipal) कानून</span><span className="en">Municipal Law</span></h5>
                  <ul>
                    <li><span className="hi">राज्य और व्यक्तियों के संबंधों को नियंत्रित करता है</span><span className="en">Governs state-individual relations</span></li>
                    <li><span className="hi">संप्रभु विधायिका द्वारा निर्मित</span><span className="en">Made by sovereign legislature</span></li>
                    <li><span className="hi">बाध्यकारी (Binding)</span><span className="en">Binding on all</span></li>
                    <li><span className="hi">मजबूत प्रवर्तन (पुलिस/अदालतें)</span><span className="en">Strong enforcement (Police/Courts)</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ── NEW: Key Terms — PSC-E-414A ── */}
            <div className="key-term-box">
              <h4>🔑 <span className="hi">मुख्य शब्दावली — अंतर्राष्ट्रीय कानून</span><span className="en">Key Terms — International Law</span></h4>
              <div className="key-terms-grid">
                <span className="key-term-chip"><span className="hi">पैक्टा संट सर्वंडा (Pacta Sunt Servanda)</span><span className="en">Pacta Sunt Servanda</span></span>
                <span className="key-term-chip"><span className="hi">जूस कोजेंस (Jus Cogens)</span><span className="en">Jus Cogens</span></span>
                <span className="key-term-chip"><span className="hi">प्रत्यर्पण (Extradition)</span><span className="en">Extradition</span></span>
                <span className="key-term-chip"><span className="hi">शरण (Asylum)</span><span className="en">Asylum</span></span>
                <span className="key-term-chip"><span className="hi">ICJ</span><span className="en">ICJ</span></span>
                <span className="key-term-chip"><span className="hi">UNCLOS</span><span className="en">UNCLOS</span></span>
              </div>
            </div>
          </div>

          {/**/}
          <div className="paper-section" data-aos="fade-up" data-accent="amber" id="sem4-p415">
            <h3 className="paper-title">
              <span style={{display:'flex',alignItems:'center',gap:'10px'}}>
                <span className="paper-icon-badge badge-amber"><Users size={18} /></span>
                <span><span className="hi">PSC-415 &amp; 414C: तुलनात्मक सरकार एवं समकालीन मुद्दे</span><span className="en">PSC-415 &amp; 414C: Comparative Govt. &amp; Contemporary Issues</span></span>
              </span>
              <span className="unit-count-badge"><span className="hi">4 इकाइयाँ</span><span className="en">4 Units</span></span>
            </h3>
            <p><span className="hi">तुलनात्मक राजनीति में विभिन्न देशों की राजनीतिक प्रणालियों का अध्ययन किया जाता
                है।</span><span className="en">Comparative politics involves the study of the political systems of different
                countries.</span></p>

            <h4 className="unit-title"><span className="hi">विभिन्न राजनीतिक प्रणालियां</span><span className="en">Various Political
                Systems</span></h4>
            <ul>
              <li><strong><span className="hi">USA (अध्यक्षीय प्रणाली - Presidential System):</span><span className="en">USA
                    (Presidential System):</span></strong> <span className="hi">कार्यपालिका विधायिका से स्वतंत्र होती है।
                  शक्तियों का सख्त पृथक्करण। राष्ट्रपति राज्य और सरकार दोनों का प्रमुख होता है।</span><span
                  className="en">Executive is independent of the legislature. Strict separation of powers. President is both
                  head of state and head of government.</span></li>
              <li><strong><span className="hi">UK (संसदीय प्रणाली - Parliamentary System):</span><span className="en">UK
                    (Parliamentary System):</span></strong> <span className="hi">संसदीय संप्रभुता (संसद कुछ भी कर सकती है)।
                  कार्यपालिका विधायिका (संसद) से ली जाती है और उसी के प्रति उत्तरदायी होती है। वेस्टमिंस्टर
                  मॉडल।</span><span className="en">Parliamentary sovereignty (Parliament can do anything). Executive is
                  drawn
                  from and responsible to the legislature (Parliament). Westminster model.</span></li>
              <li><strong><span className="hi">फ्रांस (अर्ध-अध्यक्षीय प्रणाली - Semi-presidential System):</span><span
                    className="en">France (Semi-presidential System):</span></strong> <span className="hi">एक शक्तिशाली
                  प्रत्यक्ष
                  निर्वाचित राष्ट्रपति और संसद के प्रति उत्तरदायी एक प्रधानमंत्री दोनों होते हैं (Dual
                  executive)।</span><span className="en">Features both a powerful directly elected President and a Prime
                  Minister accountable to parliament (Dual executive).</span></li>
              <li><strong><span className="hi">स्विट्जरलैंड (बहुल कार्यपालिका - Plural Executive):</span><span
                    className="en">Switzerland (Plural Executive):</span></strong> <span className="hi">संघीय परिषद (Federal
                  Council) में 7 सदस्य होते हैं जो सामूहिक रूप से राज्य के प्रमुख के रूप में कार्य करते हैं। प्रत्यक्ष
                  लोकतंत्र के लिए भी प्रसिद्ध है (जनमत संग्रह)।</span><span className="en">The Federal Council consists of 7
                  members acting collectively as the head of state. Also famous for direct democracy
                  (Referendums).</span>
              </li>
            </ul>

            <h4 className="unit-title"><span className="hi">भारतीय समकालीन मुद्दे</span><span className="en">Indian Contemporary
                Issues</span></h4>
            <ul>
              <li><strong><span className="hi">अनुच्छेद 370 का निरसन (Abrogation of Art. 370):</span><span
                    className="en">Abrogation of Art. 370:</span></strong> <span className="hi">5 अगस्त 2019 को, जम्मू-कश्मीर की
                  विशेष स्थिति को रद्द कर दिया गया। J&amp;K पुनर्गठन अधिनियम द्वारा इसे दो केंद्र शासित प्रदेशों
                  (J&amp;K और
                  लद्दाख) में विभाजित किया गया।</span><span className="en">On 5 August 2019, the special status of Jammu and
                  Kashmir was revoked. The J&amp;K Reorganization Act divided it into two Union Territories (J&amp;K and
                  Ladakh).</span></li>
              <li><strong><span className="hi">NOTA (उपरोक्त में से कोई नहीं):</span><span className="en">NOTA (None of the
                    Above):</span></strong> <span className="hi">2013 में सुप्रीम कोर्ट (PUCL बनाम भारत संघ) के फैसले के बाद
                  EVM में पेश किया गया। यह मतदाताओं को 'नकारात्मक वोट' देने का अधिकार देता है।</span><span
                  className="en">Introduced in EVMs in 2013 following a Supreme Court judgment (PUCL vs UoI). It gives
                  voters
                  the right to register a 'negative vote'.</span></li>
              <li><strong><span className="hi">103वां संविधान संशोधन (EWS आरक्षण):</span><span className="en">103rd
                    Constitutional
                    Amendment (EWS Quota):</span></strong> <span className="hi">आर्थिक रूप से कमजोर वर्गों (EWS - जो
                  SC/ST/OBC
                  आरक्षण के अंतर्गत नहीं आते) के लिए शिक्षा और सरकारी नौकरियों में 10% आरक्षण प्रदान करता
                  है।</span><span className="en">Provides a 10% reservation in education and government jobs for
                  Economically Weaker Sections
                  (EWS - not covered under SC/ST/OBC quotas).</span></li>
            </ul>
          </div>

          {/**/}
          <div className="paper-section" data-accent="green-qa" id="sem4-qa">
            <h3 className="paper-title"
              style={{"background": "linear-gradient(135deg, #10b981 0%, #059669 100%)", "color": "white"}}>
              <Trophy size={18} />
              <span className="hi">सेमेस्टर IV - मास्टर Q&amp;A और UGC NET टिप्स</span>
              <span className="en">Semester IV - Master Q&amp;A &amp; UGC NET Tips</span>
            </h3>

            <p className="intro-text">
              <span className="hi">परीक्षा में सर्वोच्च अंक (Gold Medal) और JRF के लिए अति-महत्वपूर्ण प्रश्न।</span>
              <span className="en">Highly important questions for Gold Medal in University exams and JRF.</span>
            </p>

            {/**/}
            <h4 className="unit-title" style={{"color": "#6366f1"}}><Flag size={18} /> International Organizations &amp;
              India's Foreign Policy</h4>
            <div className="content-box">
              <h5 className="qa-section-title"><Zap size={18} style={{"color": "#f59e0b"}} /> Short Questions (2-5
                Marks)</h5>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q1</span> <span className="hi">राष्ट्र संघ विफल क्यों हुआ?</span><span
                    className="en">Why did the League of Nations fail?</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">लीग विफल हो गई क्योंकि संयुक्त राज्य अमेरिका (इसका मुख्य वास्तुकार) कभी इसमें
                      शामिल नहीं हुआ, इसके पास निर्णयों को लागू करने के लिए एक स्वतंत्र सैन्य बल का अभाव था, और प्रमुख
                      शक्तियों (जापान, इटली, जर्मनी) ने गंभीर परिणामों का सामना किए बिना खुले तौर पर इसका विरोध किया,
                      जिसके परिणामस्वरूप द्वितीय विश्व युद्ध हुआ।</span><span className="en">The League failed because the
                      USA (its chief architect) never joined, it lacked an independent military force to enforce
                      decisions, and major powers (Japan, Italy, Germany) openly defied it without facing severe
                      consequences, leading up to WWII.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q2</span> <span className="hi">वीटो पावर क्या है?</span><span
                    className="en">What is the Veto Power?</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">संयुक्त राष्ट्र चार्टर द्वारा सुरक्षा परिषद के 5 स्थायी सदस्यों (पी5) (यूएसए,
                      यूके, फ्रांस, रूस, चीन) को किसी भी ठोस प्रस्ताव को एकतरफा रोकने की विशेष शक्ति दी गई है, भले ही
                      इसे कितना भी अंतरराष्ट्रीय समर्थन प्राप्त हो।</span><span className="en">The exclusive power granted
                      by the UN Charter to the 5 permanent members (P5) of the Security Council (USA, UK, France,
                      Russia, China) to unilaterally block any substantive resolution, regardless of how much
                      international support it has.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q3</span> <span className="hi">R2P क्या है?</span><span className="en">What is
                    R2P?</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">सुरक्षा की जिम्मेदारी (आर2पी) 2005 की संयुक्त राष्ट्र की प्रतिबद्धता है जिसमें कहा
                      गया है कि यदि कोई संप्रभु राज्य अपने नागरिकों को नरसंहार, युद्ध अपराध, जातीय सफाई या मानवता के
                      खिलाफ अपराधों से बचाने में विफल रहता है, तो अंतर्राष्ट्रीय समुदाय का कर्तव्य है कि वह हस्तक्षेप
                      करे।</span><span className="en"><strong>Responsibility to Protect (R2P)</strong> is a 2005 UN
                      commitment stating that if a sovereign state fails to protect its own citizens from genocide, war
                      crimes, ethnic cleansing, or crimes against humanity, the international community has a duty to
                      intervene.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q4</span> <span className="hi">पंचशील (1954) क्या है?</span><span
                    className="en">What is Panchsheel (1954)?</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">भारत और चीन के बीच शांतिपूर्ण सह-अस्तित्व के पांच सिद्धांतों पर सहमति हुई:
                      क्षेत्रीय अखंडता के लिए पारस्परिक सम्मान, पारस्परिक गैर-आक्रामकता, आंतरिक मामलों में पारस्परिक
                      गैर-हस्तक्षेप, समानता और पारस्परिक लाभ, और शांतिपूर्ण सह-अस्तित्व।</span><span className="en">The Five
                      Principles of Peaceful Co-existence agreed between India and China: mutual respect for territorial
                      integrity, mutual non-aggression, mutual non-interference in internal affairs, equality and mutual
                      benefit, and peaceful co-existence.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q5</span> <span className="hi">'एक्ट ईस्ट' नीति क्या है?</span><span
                    className="en">What is the 'Act East' Policy?</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">2014 में पीएम मोदी द्वारा शुरू की गई भारत की 'पूर्व की ओर देखो' नीति (1992) का
                      उन्नयन। यह चीन के प्रभाव का मुकाबला करने के लिए आसियान और पूर्वी एशियाई देशों के साथ विशुद्ध रूप
                      से आर्थिक संबंधों से गहरे रणनीतिक, सांस्कृतिक और सुरक्षा जुड़ाव पर ध्यान केंद्रित करता
                      है।</span><span className="en">An upgrade of India's 'Look East' policy (1992), launched by PM Modi in
                      2014. It shifts focus from purely economic ties to deep strategic, cultural, and security
                      engagements with ASEAN and East Asian countries to counter China's influence.</span></p>
                </div>
              </details>

              <h5 className="qa-section-title" style={{"marginTop": "20px"}}><PenTool size={18} style={{"color": "#3b82f6"}} /> Long Questions (15-20 Marks)</h5>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q1</span> <span className="hi">21वीं सदी में संयुक्त राष्ट्र सुरक्षा परिषद
                    की भूमिका और प्रासंगिकता का आलोचनात्मक परीक्षण करें। इसके सुधार हेतु प्रकरण पर चर्चा
                    करें।</span><span className="en">Critically examine the role and relevance of the UN Security Council in
                    the 21st century. Discuss the case for its reform.</span> <span className="qa-marks">[20 Marks]</span>
                </summary>
                <div className="qa-content">
                  <h5><span className="hi">1 परिचय</span><span className="en">1. Introduction</span></h5>
                  <p><span className="hi">यूएनएससी अंतरराष्ट्रीय शांति और सुरक्षा बनाए रखने के लिए जिम्मेदार संयुक्त राष्ट्र
                      का प्राथमिक अंग है। हालाँकि, इसकी संरचना 21वीं सदी की नहीं, बल्कि 1945 की भू-राजनीतिक वास्तविकताओं
                      को दर्शाती है।</span><span className="en">The UNSC is the primary UN organ responsible for maintaining
                      international peace and security. However, its structure reflects the geopolitical realities of
                      1945, not the 21st century.</span></p>
                  <h5><span className="hi">2. भूमिका एवं उपलब्धियाँ</span><span className="en">2. Role and Achievements</span>
                  </h5>
                  <ul>
                    <li><span className="hi">अनेक सफल शांतिरक्षा मिशनों को अधिकृत किया।</span><span className="en">Authorized
                        numerous successful peacekeeping missions.</span></li>
                    <li><span className="hi">प्रभावी प्रतिबंध लगाए गए (उदाहरण के लिए, रंगभेद दक्षिण अफ्रीका, उत्तर कोरिया के
                        खिलाफ)।</span><span className="en">Imposed effective sanctions (e.g., against Apartheid South
                        Africa, North Korea).</span></li>
                    <li><span className="hi">प्रत्यक्ष अमेरिकी-सोवियत परमाणु युद्ध को रोकने के लिए बैक-चैनल कूटनीति के लिए
                        एक मंच प्रदान किया गया।</span><span className="en">Provided a platform for back-channel diplomacy
                        preventing a direct US-Soviet nuclear war.</span></li>
                  </ul>
                  <h5><span className="hi">3. असफलताएँ और आलोचनाएँ</span><span className="en">3. Failures and Criticisms</span>
                  </h5>
                  <ul>
                    <li><strong>Paralysis by Veto:</strong> The P5 use their veto power to protect their own interests
                      or allies (e.g., US protecting Israel, Russia protecting Syria).</li>
                    <li><span className="hi">अप्रतिनिधित्व: अफ्रीका और दक्षिण अमेरिका जैसे संपूर्ण महाद्वीपों का कोई स्थायी
                        प्रतिनिधित्व नहीं है। भारत, दुनिया का सबसे अधिक आबादी वाला लोकतंत्र, बाहर रखा गया
                        है।</span><span className="en"><strong>Unrepresentative:</strong> Entire continents like Africa and
                        South America have no permanent representation. India, the world's most populous democracy, is
                        excluded.</span></li>
                  </ul>
                  <h5><span className="hi">4. सुधार का मामला</span><span className="en">4. The Case for Reform</span></h5>
                  <p><span className="hi">जी4 देश (भारत, ब्राजील, जर्मनी, जापान) यूएनएससी सुधार की पुरजोर वकालत करते हैं।
                      प्रमुख मांगों में शामिल हैं:</span><span className="en">The G4 nations (India, Brazil, Germany, Japan)
                      strongly advocate for UNSC reform. Key demands include:</span></p>
                  <ul>
                    <li><span className="hi">स्थायी और गैर-स्थायी दोनों श्रेणियों का विस्तार।</span><span
                        className="en">Expanding both permanent and non-permanent categories.</span></li>
                    <li><span className="hi">वीटो शक्ति को सुधारना या समाप्त करना।</span><span className="en">Reforming or
                        abolishing the veto power.</span></li>
                    <li><span className="hi">न्यायसंगत भौगोलिक प्रतिनिधित्व सुनिश्चित करना।</span><span className="en">Ensuring
                        equitable geographical representation.</span></li>
                  </ul>
                  <h5><span className="hi">5। उपसंहार</span><span className="en">5. Conclusion</span></h5>
                  <p><span className="hi">यदि यूएनएससी आधुनिक वास्तविकताओं को प्रतिबिंबित करने के लिए सुधार नहीं करता है, तो
                      इसकी वैधता खोने का जोखिम है, जिससे राष्ट्र क्षेत्रीय गठबंधनों के पक्ष में इसे दरकिनार कर
                      देंगे।</span><span className="en">If the UNSC does not reform to reflect modern realities, it risks
                      losing its legitimacy, causing nations to bypass it in favor of regional alliances.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q2</span> <span className="hi">नेहरू युग से वर्तमान तक भारत की विदेश नीति के
                    विकास का विश्लेषण करें।</span><span className="en">Analyze the evolution of India's foreign policy from
                    the Nehruvian era to the present.</span> <span className="qa-marks">[20 Marks]</span></summary>
                <div className="qa-content">
                  <h5><span className="hi">1 परिचय</span><span className="en">1. Introduction</span></h5>
                  <p><span className="hi">भारत की विदेश नीति आदर्शवादी गुटनिरपेक्षता से व्यावहारिक बहु-संरेखण में परिवर्तित
                      हो गई है, जो बदलती वैश्विक व्यवस्थाओं और घरेलू आर्थिक जरूरतों के अनुसार आकार ले रही
                      है।</span><span className="en">India's foreign policy has transitioned from idealistic non-alignment
                      to pragmatic multi-alignment, shaped by changing global orders and domestic economic needs.</span>
                  </p>
                  <h5><span className="hi">2. नेहरूवादी युग (1947-1964): आदर्शवाद और गुटनिरपेक्षता</span><span className="en">2.
                      Nehruvian Era (1947-1964): Idealism &amp; Non-Alignment</span></h5>
                  <ul>
                    <li><span className="hi">साम्राज्यवाद-विरोध, नस्लवाद-विरोध और एशियाई एकजुटता पर ध्यान दें।</span><span
                        className="en">Focus on anti-imperialism, anti-racism, and Asian solidarity.</span></li>
                    <li><span className="hi">शीत युद्ध के दौरान रणनीतिक स्वायत्तता बनाए रखने के लिए गुटनिरपेक्ष आंदोलन (NAM)
                        के वास्तुकार।</span><span className="en">Architect of the Non-Aligned Movement (NAM) to maintain
                        strategic autonomy during the Cold War.</span></li>
                    <li><span className="hi">चीन के प्रति आदर्शवादी दृष्टिकोण (हिन्दी-चीनी भाई-भाई) जिसका 1962 के युद्ध में
                        विनाशकारी अंत हुआ।</span><span className="en">Idealistic approach to China (Hindi-Chini Bhai-Bhai)
                        which ended disastrously in the 1962 war.</span></li>
                  </ul>
                  <h5><span className="hi">3. इंदिरा से राजीव गांधी (1966-1989): कठोर यथार्थवाद</span><span className="en">3.
                      Indira to Rajiv Gandhi (1966-1989): Hard Realism</span></h5>
                  <ul>
                    <li><span className="hi">अमेरिका-पाक-चीन धुरी के कारण सोवियत संघ (1971 मैत्री संधि) की ओर
                        झुकाव।</span><span className="en">Shift towards the Soviet Union (1971 Treaty of Friendship) due to
                        the US-Pak-China axis.</span></li>
                    <li><span className="hi">क्षेत्रीय आधिपत्य का दावा (बांग्लादेश की मुक्ति, 1974 में परमाणु
                        परीक्षण)।</span><span className="en">Assertion of regional hegemony (Liberation of Bangladesh,
                        nuclear test in 1974).</span></li>
                  </ul>
                  <h5><span className="hi">4. शीत युद्ध के बाद और आर्थिक उदारीकरण (1991-2014)</span><span className="en">4.
                      Post-Cold War &amp; Economic Liberalization (1991-2014)</span></h5>
                  <ul>
                    <li><span className="hi">सोवियत पतन ने भारत को विविधता लाने के लिए मजबूर किया।</span><span
                        className="en">The Soviet collapse forced India to diversify.</span></li>
                    <li><span className="hi">एशियाई बाघ अर्थव्यवस्थाओं के साथ जुड़ने के लिए 'पूर्व की ओर देखो'
                        नीति।</span><span className="en">'Look East' policy to engage with Asian tiger economies.</span>
                    </li>
                    <li><span className="hi">1998 (पोखरण-II) में परमाणु विस्फोट के बाद कूटनीतिक पैंतरेबाज़ी के बाद 2008 में
                        भारत-अमेरिका परमाणु समझौता हुआ।</span><span className="en">Nuclear breakout in 1998 (Pokhran-II)
                        followed by diplomatic maneuvering leading to the 2008 Indo-US Nuclear Deal.</span></li>
                  </ul>
                  <h5><span className="hi">5. मोदी युग (2014-वर्तमान): बहु-संरेखण और मुखरता</span><span className="en">5. Modi
                      Era (2014-Present): Multi-Alignment &amp; Assertiveness</span></h5>
                  <ul>
                    <li><span className="hi">'लुक ईस्ट' से 'एक्ट ईस्ट' की ओर बदलाव।</span><span className="en">Shift from 'Look
                        East' to 'Act East'.</span></li>
                    <li><span className="hi">गुटनिरपेक्षता से बहुसंरेखण की ओर संक्रमण (क्वाड, एससीओ, ब्रिक्स के साथ एक साथ
                        जुड़ना)।</span><span className="en">Transition from Non-alignment to
                        <strong>Multi-alignment</strong> (engaging with QUAD, SCO, BRICS simultaneously).</span></li>
                    <li><span className="hi">"पड़ोस पहले" पर ध्यान केंद्रित करें और "विश्व मित्र" (दुनिया का मित्र) के रूप
                        में कार्य करें।</span><span className="en">Focus on "Neighborhood First" and acting as the "Vishwa
                        Mitra" (friend of the world).</span></li>
                  </ul>
                  <h5><span className="hi">6. निष्कर्ष</span><span className="en">6. Conclusion</span></h5>
                  <p><span className="hi">भारत की विदेश नीति बहुध्रुवीय दुनिया में अग्रणी भूमिका की तलाश में राष्ट्रीय हित
                      की व्यावहारिक खोज में परिपक्व हो गई है।</span><span className="en">India's foreign policy has matured
                      into a pragmatic pursuit of national interest, seeking a leading role in a multipolar
                      world.</span></p>
                </div>
              </details>

              <div className="info-box" style={{"borderLeftColor": "#f59e0b"}}>
                <h4>🎓 UGC NET Expert Tips</h4>
                <p>Know the P5: USA, UK, France, Russia, China. India seeks permanent membership. Remember India's
                  Nuclear tests: Smiling Buddha (1974, Pokhran-I) and Shakti (1998, Pokhran-II).</p>
              </div>
            </div>

            {/**/}
            <h4 className="unit-title" style={{"color": "#6366f1"}}><Scale size={18} /> International Law</h4>
            <div className="content-box">
              <h5 className="qa-section-title"><Zap size={18} style={{"color": "#f59e0b"}} /> Short Questions (2-5
                Marks)</h5>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q1</span> <span className="hi">'अंतर्राष्ट्रीय कानून के जनक' कौन
                    हैं?</span><span className="en">Who is the 'Father of International Law'?</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">ह्यूगो ग्रोटियस, एक डच न्यायविद्। उनकी 1625 की उत्कृष्ट कृति, 'डी ज्यूर बेली एसी
                      पेसिस' (युद्ध और शांति के कानून पर) ने प्राकृतिक कानून अवधारणाओं के आधार पर अंतरराष्ट्रीय कानून की
                      नींव रखी।</span><span className="en"><strong>Hugo Grotius</strong>, a Dutch jurist. His 1625
                      masterpiece, <em>'De Jure Belli ac Pacis' (On the Law of War and Peace)</em>, laid the foundations
                      for international law based on natural law concepts.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q2</span> <span className="hi">अंतर्राष्ट्रीय कानून के स्रोत क्या
                    हैं?</span><span className="en">What are the sources of International Law?</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">आईसीजे क़ानून के अनुच्छेद 38 के अनुसार, प्राथमिक स्रोत हैं: अंतर्राष्ट्रीय संधियाँ
                      (सम्मेलन), अंतर्राष्ट्रीय प्रथागत कानून, और सभ्य राष्ट्रों द्वारा मान्यता प्राप्त कानून के सामान्य
                      सिद्धांत।</span><span className="en">According to Article 38 of the ICJ Statute, the primary sources
                      are: International Treaties (conventions), International Customary Law, and General Principles of
                      law recognized by civilized nations.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q3</span> <span className="hi">'रखी जाने वाली प्रथाओं' को परिभाषित
                    करें।</span><span className="en">Define 'Pacta Sunt Servanda'.</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">एक लैटिन वाक्यांश जिसका अर्थ है "समझौते अवश्य निभाए जाने चाहिए।" यह अंतर्राष्ट्रीय
                      कानून का मूलभूत सिद्धांत है जो बताता है कि संधियाँ पार्टियों के लिए बाध्यकारी हैं और इन्हें अच्छे
                      विश्वास के साथ निष्पादित किया जाना चाहिए।</span><span className="en">A Latin phrase meaning
                      <strong>"agreements must be kept."</strong> It is the foundational principle of international law
                      stating that treaties are binding upon the parties and must be performed in good faith.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q4</span> <span className="hi">प्रत्यर्पण क्या है?</span><span
                    className="en">What is Extradition?</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">औपचारिक राजनयिक प्रक्रिया जिसके द्वारा एक राज्य किसी संदिग्ध या दोषी अपराधी को
                      मुकदमे या सजा के लिए दूसरे राज्य में आत्मसमर्पण कर देता है। राजनीतिक अपराधियों और शरण चाहने वालों
                      को आम तौर पर प्रत्यर्पण से छूट दी जाती है।</span><span className="en">The formal diplomatic process by
                      which one state surrenders a suspected or convicted criminal to another state for trial or
                      punishment. Political offenders and asylum seekers are generally exempt from extradition.</span>
                  </p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q5</span> <span className="hi">आईसीजे क्या है?</span><span className="en">What
                    is the ICJ?</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">अंतर्राष्ट्रीय न्यायालय (विश्व न्यायालय) संयुक्त राष्ट्र का प्रमुख न्यायिक अंग है,
                      जो हेग में स्थित है। यह राज्यों (व्यक्तियों के नहीं) के बीच कानूनी विवादों का निपटारा करता है और
                      संयुक्त राष्ट्र के अंगों को सलाहकारी राय देता है।</span><span className="en">The <strong>International
                        Court of Justice</strong> (World Court) is the principal judicial organ of the UN, located in
                      The Hague. It settles legal disputes between states (not individuals) and gives advisory opinions
                      to UN organs.</span></p>
                </div>
              </details>

              <h5 className="qa-section-title" style={{"marginTop": "20px"}}><PenTool size={18} style={{"color": "#3b82f6"}} /> Long Questions (15-20 Marks)</h5>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q1</span> <span className="hi">ICJ क़ानून के अनुच्छेद 38 में बताए गए
                    अंतर्राष्ट्रीय कानून के स्रोतों पर चर्चा करें।</span><span className="en">Discuss the sources of
                    International Law as enumerated in Article 38 of the ICJ Statute.</span> <span className="qa-marks">[20
                    Marks]</span></summary>
                <div className="qa-content">
                  <h5><span className="hi">1 परिचय</span><span className="en">1. Introduction</span></h5>
                  <p><span className="hi">घरेलू कानून के विपरीत, अंतर्राष्ट्रीय कानून में कोई एकल विधायिका नहीं होती है।
                      आईसीजे क़ानून के अनुच्छेद 38(1) को व्यापक रूप से इसके स्रोतों में सबसे आधिकारिक बयान के रूप में
                      मान्यता प्राप्त है।</span><span className="en">Unlike domestic law, international law has no single
                      legislature. Article 38(1) of the ICJ Statute is widely recognized as the most authoritative
                      statement of its sources.</span></p>
                  <h5><span className="hi">2. प्राथमिक स्रोत</span><span className="en">2. Primary Sources</span></h5>
                  <ul>
                    <li><span className="hi">अंतर्राष्ट्रीय सम्मेलन (संधियाँ): राज्यों के बीच लिखित समझौते (जैसे, जिनेवा
                        कन्वेंशन, संयुक्त राष्ट्र चार्टर)। वे पैक्टा संट सर्वंडा के सिद्धांत के आधार पर बाध्यकारी
                        हैं।</span><span className="en"><strong>International Conventions (Treaties):</strong> Written
                        agreements between states (e.g., Geneva Conventions, UN Charter). They are binding based on the
                        principle of <em>pacta sunt servanda</em>.</span></li>
                    <li><span className="hi">अंतर्राष्ट्रीय प्रथा: कानून के रूप में स्वीकृत सामान्य प्रथा का साक्ष्य। दो
                        तत्वों की आवश्यकता है: राज्य अभ्यास (उद्देश्य) और ओपिनियो ज्यूरिस (यह विश्वास कि अभ्यास कानूनी
                        रूप से बाध्यकारी है)।</span><span className="en"><strong>International Custom:</strong> Evidence of
                        a general practice accepted as law. Requires two elements: state practice (objective) and
                        <em>opinio juris</em> (the belief that the practice is legally binding).</span></li>
                    <li><span className="hi">कानून के सामान्य सिद्धांत: विश्व स्तर पर प्रमुख घरेलू कानूनी प्रणालियों द्वारा
                        मान्यता प्राप्त सिद्धांत (उदाहरण के लिए, न्यायिक न्याय, रोक, सद्भावना)। जब संधियाँ और रीति-रिवाज
                        किसी मुद्दे को कवर नहीं करते हैं तो वे अंतराल भरते हैं।</span><span className="en"><strong>General
                          Principles of Law:</strong> Principles recognized by major domestic legal systems globally
                        (e.g., res judicata, estoppel, good faith). They fill the gaps when treaties and customs do not
                        cover an issue.</span></li>
                  </ul>
                  <h5><span className="hi">3. सहायक/माध्यमिक स्रोत</span><span className="en">3. Subsidiary/Secondary
                      Sources</span></h5>
                  <ul>
                    <li><span className="hi">न्यायिक निर्णय: आईसीजे और अन्य न्यायाधिकरणों के फैसले। हालाँकि वे बाध्यकारी
                        मिसाल कायम नहीं करते हैं (स्टेयर डिसिसिस सख्ती से लागू नहीं होता है), वे अत्यधिक प्रेरक वजन रखते
                        हैं।</span><span className="en"><strong>Judicial Decisions:</strong> Rulings of the ICJ and other
                        tribunals. While they do not create binding precedent (stare decisis doesn't strictly apply),
                        they carry immense persuasive weight.</span></li>
                    <li><span className="hi">प्रचारकों की शिक्षाएँ: सबसे उच्च योग्य अकादमिक विद्वानों के लेखन। कानून की
                        व्याख्या और पहचान करते थे, बनाते नहीं।</span><span className="en"><strong>Teachings of
                          Publicists:</strong> The writings of the most highly qualified academic scholars. Used to
                        interpret and identify the law, not create it.</span></li>
                  </ul>
                  <h5><span className="hi">4. निष्कर्ष</span><span className="en">4. Conclusion</span></h5>
                  <p><span className="hi">ये स्रोत गतिशील रूप से परस्पर क्रिया करते हैं। अक्सर, प्रथागत कानून को संधियों में
                      संहिताबद्ध किया जाता है, और संधियाँ अंततः गैर-हस्ताक्षरकर्ताओं पर भी बाध्यकारी नए प्रथागत कानून
                      उत्पन्न कर सकती हैं।</span><span className="en">These sources interact dynamically. Often, customary
                      law is codified into treaties, and treaties can eventually generate new customary law binding even
                      on non-signatories.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q2</span> <span className="hi">अंतर्राष्ट्रीय न्यायालय (आईसीजे) की भूमिका और
                    इसकी सीमाओं का विश्लेषण करें।</span><span className="en">Analyze the role of the International Court of
                    Justice (ICJ) and its limitations.</span> <span className="qa-marks">[15 Marks]</span></summary>
                <div className="qa-content">
                  <h5><span className="hi">1 परिचय</span><span className="en">1. Introduction</span></h5>
                  <p><span className="hi">1945 में स्थापित ICJ, संयुक्त राष्ट्र की सर्वोच्च अदालत है। इसमें 9 साल के
                      कार्यकाल के लिए चुने गए 15 न्यायाधीश शामिल हैं।</span><span className="en">The ICJ, established in
                      1945, is the UN's highest court. It consists of 15 judges elected for 9-year terms.</span></p>
                  <h5><span className="hi">2. भूमिका और अधिकार क्षेत्र</span><span className="en">2. Role and
                      Jurisdiction</span></h5>
                  <ul>
                    <li><span className="hi">विवादास्पद मामले: राज्यों द्वारा प्रस्तुत कानूनी विवादों का निपटारा (जैसे, सीमा
                        विवाद, समुद्री सीमाएँ, संधि उल्लंघन)।</span><span className="en"><strong>Contentious Cases:</strong>
                        Settling legal disputes submitted to it by States (e.g., border disputes, maritime boundaries,
                        treaty violations).</span></li>
                    <li><span className="hi">सलाहकार राय: संयुक्त राष्ट्र के अधिकृत अंगों (जैसे महासभा) द्वारा प्रस्तुत
                        अंतर्राष्ट्रीय कानून प्रश्नों पर कानूनी सलाह प्रदान करना।</span><span
                        className="en"><strong>Advisory Opinions:</strong> Providing legal advice on international law
                        questions submitted by authorized UN organs (like the General Assembly).</span></li>
                  </ul>
                  <h5><span className="hi">3. आईसीजे की सीमाएं</span><span className="en">3. Limitations of the ICJ</span></h5>
                  <ul>
                    <li><span className="hi">सहमति-आधारित क्षेत्राधिकार: आईसीजे किसी मामले की सुनवाई तब तक नहीं कर सकता जब
                        तक कि दोनों राज्य इसके क्षेत्राधिकार पर सहमति न दे दें। राज्य अक्सर संवेदनशील मुद्दों पर अधिकार
                        क्षेत्र मानने से इनकार कर देते हैं।</span><span className="en"><strong>Consent-based
                          Jurisdiction:</strong> The ICJ cannot try a case unless both states have consented to its
                        jurisdiction. States often refuse to accept jurisdiction on sensitive issues.</span></li>
                    <li><span className="hi">प्रवर्तन शक्ति का अभाव: ICJ के पास कोई पुलिस बल नहीं है। यदि कोई राज्य किसी
                        फैसले की अवहेलना करता है (उदाहरण के लिए, निकारागुआ मामले में अमेरिका), तो एकमात्र सहारा संयुक्त
                        राष्ट्र सुरक्षा परिषद है, जहां उल्लंघन करने वाले राज्य के पास वीटो शक्ति हो सकती है।</span><span
                        className="en"><strong>Lack of Enforcement Power:</strong> The ICJ has no police force. If a state
                        defies a ruling (e.g., US in the Nicaragua case), the only recourse is the UN Security Council,
                        where the offending state might have veto power.</span></li>
                    <li><span className="hi">केवल राज्य ही पक्षकार हैं: व्यक्ति, गैर सरकारी संगठन या निगम आईसीजे में मामले
                        नहीं ला सकते (आईसीसी के विपरीत)।</span><span className="en"><strong>Only States are
                          Parties:</strong> Individuals, NGOs, or corporations cannot bring cases to the ICJ (unlike the
                        ICC).</span></li>
                  </ul>
                  <h5><span className="hi">4. निष्कर्ष</span><span className="en">4. Conclusion</span></h5>
                  <p><span className="hi">अपनी सीमाओं के बावजूद, आईसीजे विवादों के शांतिपूर्ण समाधान और अंतरराष्ट्रीय कानूनी
                      सिद्धांतों के प्रगतिशील विकास में महत्वपूर्ण भूमिका निभाता है।</span><span className="en">Despite its
                      limitations, the ICJ plays a crucial role in the peaceful settlement of disputes and the
                      progressive development of international legal principles.</span></p>
                </div>
              </details>

              <div className="info-box" style={{"borderLeftColor": "#f59e0b"}}>
                <h4>🎓 UGC NET Expert Tips</h4>
                <p>ICJ vs ICC: ICJ settles disputes between states. ICC (International Criminal Court, est. 2002 Rome
                  Statute) prosecutes individuals for genocide and war crimes. India has NOT ratified the ICC Rome
                  Statute.</p>
              </div>
            </div>

            {/**/}
            <h4 className="unit-title" style={{"color": "#6366f1"}}><Landmark size={18} /> Comparative Govt. &amp;
              Contemporary Issues</h4>
            <div className="content-box">
              <h5 className="qa-section-title"><Zap size={18} style={{"color": "#f59e0b"}} /> Short Questions (2-5
                Marks)</h5>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q1</span> <span className="hi">राष्ट्रपति एवं संसदीय प्रणालियों में अंतर
                    बताइये।</span><span className="en">Differentiate Presidential and Parliamentary systems.</span>
                </summary>
                <div className="qa-content">
                  <p><span className="hi">राष्ट्रपति पद (यूएसए): शक्तियों का सख्त पृथक्करण; कार्यपालिका विधायिका से स्वतंत्र
                      होती है और एक निश्चित कार्यकाल तक कार्य करती है। संसदीय (यूके/भारत): शक्तियों का संलयन;
                      कार्यपालिका विधायिका से ली गई है और वह तभी तक सत्ता में बनी रहती है जब तक उसे निचले सदन में बहुमत
                      (विश्वास) प्राप्त है।</span><span className="en"><strong>Presidential (USA):</strong> Strict
                      separation of powers; Executive is independent of the legislature and serves a fixed term.
                      <strong>Parliamentary (UK/India):</strong> Fusion of powers; Executive is drawn from the
                      legislature and remains in power only as long as it enjoys a majority (confidence) in the lower
                      house.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q2</span> <span className="hi">'संसदीय संप्रभुता' क्या है?</span><span
                    className="en">What is 'Parliamentary Sovereignty'?</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">यूके के संविधान का एक मूल सिद्धांत यह तय करता है कि संसद सर्वोच्च कानूनी प्राधिकरण
                      है। यह किसी भी कानून को बना या निरस्त कर सकता है, और अदालतें इसके कानून को पलट नहीं सकती हैं
                      (अमेरिका/भारत के विपरीत जहां अदालतों में न्यायिक समीक्षा होती है)।</span><span className="en">A core
                      principle of the UK constitution dictating that Parliament is the supreme legal authority. It can
                      create or repeal any law, and courts cannot overturn its legislation (unlike the US/India where
                      courts have judicial review).</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q3</span> <span className="hi">फ़्रांसीसी अर्ध-राष्ट्रपति प्रणाली क्या
                    है?</span><span className="en">What is the French Semi-Presidential System?</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">एक संकर 'दोहरी कार्यकारी' प्रणाली। इसमें एक शक्तिशाली, सीधे निर्वाचित राष्ट्रपति
                      (राज्य का प्रमुख) होता है जो एक प्रधान मंत्री (सरकार के प्रमुख) के साथ कार्यकारी शक्ति साझा करता
                      है जिसे नेशनल असेंबली का समर्थन प्राप्त होना चाहिए।</span><span className="en">A hybrid 'dual
                      executive' system. It features a powerful, directly elected President (Head of State) who shares
                      executive power with a Prime Minister (Head of Government) who must have the support of the
                      National Assembly.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q4</span> <span className="hi">स्विस बहुवचन कार्यकारी क्या है?</span><span
                    className="en">What is the Swiss Plural Executive?</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">स्विट्ज़रलैंड में एक अद्वितीय 7-सदस्यीय संघीय परिषद है जो सामूहिक रूप से राज्य और
                      सरकार के प्रमुख के रूप में कार्य करती है। राष्ट्रपति पद प्रतिवर्ष उनके बीच घूमता रहता है, जिससे
                      किसी एक व्यक्ति में सत्ता की एकाग्रता को रोका जा सकता है।</span><span className="en">Switzerland has a
                      unique 7-member Federal Council that acts collectively as the head of state and government. The
                      presidency rotates annually among them, preventing the concentration of power in a single
                      individual.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q5</span> <span className="hi">धारा 370 हटने का क्या महत्व है?</span><span
                    className="en">What is the significance of the Abrogation of Article 370?</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">अगस्त 2019 में, भारत सरकार ने अनुच्छेद 370 के तहत जम्मू और कश्मीर की विशेष
                      स्वायत्त स्थिति को रद्द कर दिया। राज्य को दो केंद्र शासित प्रदेशों (जम्मू और कश्मीर और लद्दाख) में
                      विभाजित किया गया, उन्हें पूरी तरह से भारतीय संविधान के साथ एकीकृत किया गया।</span><span
                      className="en">In August 2019, the Government of India revoked the special autonomous status of Jammu
                      &amp; Kashmir under Article 370. The state was bifurcated into two Union Territories (J&amp;K and
                      Ladakh), fully integrating them with the Indian Constitution.</span></p>
                </div>
              </details>

              <h5 className="qa-section-title" style={{"marginTop": "20px"}}><PenTool size={18} style={{"color": "#3b82f6"}} /> Long Questions (15-20 Marks)</h5>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q1</span> <span className="hi">भारतीय संघवाद के लिए अनुच्छेद 370 को निरस्त
                    करने के महत्व और निहितार्थ पर चर्चा करें।</span><span className="en">Discuss the significance and
                    implications of the abrogation of Article 370 for Indian federalism.</span> <span
                    className="qa-marks">[20 Marks]</span></summary>
                <div className="qa-content">
                  <h5><span className="hi">1 परिचय</span><span className="en">1. Introduction</span></h5>
                  <p><span className="hi">अनुच्छेद 370 ने जम्मू और कश्मीर को विशेष स्वायत्त दर्जा दिया, जिससे उसे अपना
                      संविधान, ध्वज और आंतरिक प्रशासन पर स्वायत्तता की अनुमति मिली। 5 अगस्त, 2019 को राष्ट्रपति ने एक
                      आदेश जारी कर इस विशेष दर्जे को प्रभावी ढंग से समाप्त कर दिया।</span><span className="en">Article 370
                      granted special autonomous status to Jammu &amp; Kashmir, allowing it its own constitution, flag,
                      and autonomy over internal administration. On August 5, 2019, the President issued an order
                      effectively abrogating this special status.</span></p>
                  <h5><span className="hi">2.निषेध की विधि</span><span className="en">2. Method of Abrogation</span></h5>
                  <p><span className="hi">सरकार ने धारा 367 में संशोधन करने के लिए धारा 370(1) का चतुराई से उपयोग किया, और
                      "राज्य की संविधान सभा" वाक्यांश को "राज्य की विधान सभा" से बदल दिया, जिससे संसद (राष्ट्रपति शासन
                      के तहत राज्य विधायिका के रूप में कार्य करते हुए) को निरस्तीकरण को मंजूरी देने की अनुमति मिल
                      गई।</span><span className="en">The government cleverly used Article 370(1) to amend Article 367,
                      replacing the phrase "Constituent Assembly of the State" with "Legislative Assembly of the State,"
                      allowing the Parliament (acting as the state legislature under President's Rule) to approve the
                      abrogation.</span></p>
                  <h5><span className="hi">3. संघवाद के लिए निहितार्थ</span><span className="en">3. Implications for
                      Federalism</span></h5>
                  <ul>
                    <li><span className="hi">असममित संघवाद बदल गया: इसने जम्मू-कश्मीर के संघ के साथ अद्वितीय असममित संघीय
                        संबंध को समाप्त कर दिया, जिससे यह अन्य राज्यों/केंद्रशासित प्रदेशों के बराबर आ गया।</span><span
                        className="en"><strong>Asymmetric Federalism altered:</strong> It ended the unique asymmetrical
                        federal relationship J&amp;K had with the Union, bringing it on par with other
                        states/UTs.</span></li>
                    <li><span className="hi">किसी राज्य को अपग्रेड करना: यह पहली बार था कि एक पूर्ण राज्य को अपग्रेड करके
                        केंद्र शासित प्रदेश बना दिया गया, जिससे राज्य विधायिका की सक्रिय सहमति के बिना राज्य की सीमाओं
                        को बदलने की केंद्र की एकतरफा शक्ति के बारे में चिंताएं बढ़ गईं।</span><span
                        className="en"><strong>Downgrading a State:</strong> It was the first time a full-fledged state was
                        downgraded into Union Territories, raising concerns about the Centre's unilateral power to alter
                        state boundaries without the state legislature's active consent.</span></li>
                  </ul>
                  <h5><span className="hi">4. सुप्रीम कोर्ट का फैसला (2023)</span><span className="en">4. The Supreme Court
                      Verdict (2023)</span></h5>
                  <p><span className="hi">सुप्रीम कोर्ट ने सर्वसम्मति से अनुच्छेद 370 को एक अस्थायी प्रावधान घोषित करते हुए
                      निरस्तीकरण को बरकरार रखा और फैसला सुनाया कि भारत में शामिल होने के बाद जम्मू-कश्मीर ने आंतरिक
                      संप्रभुता बरकरार नहीं रखी। हालाँकि, इसने जल्द से जल्द राज्य का दर्जा बहाल करने का आदेश
                      दिया।</span><span className="en">The Supreme Court unanimously upheld the abrogation, declaring
                      Article 370 a temporary provision and ruling that J&amp;K did not retain internal sovereignty
                      after acceding to India. However, it ordered the restoration of statehood at the earliest.</span>
                  </p>
                  <h5><span className="hi">5। उपसंहार</span><span className="en">5. Conclusion</span></h5>
                  <p><span className="hi">इस कदम ने राष्ट्रीय एकता और सुरक्षा को प्राथमिकता देते हुए "एक राष्ट्र, एक
                      संविधान" के दीर्घकालिक राजनीतिक लक्ष्य को हासिल किया, हालांकि इसने संघीय सिद्धांतों और लोकतांत्रिक
                      प्रक्रियाओं के संबंध में गहन बहस छेड़ दी।</span><span className="en">The move achieved the
                      long-standing political goal of "One Nation, One Constitution," prioritizing national integration
                      and security, though it sparked intense debate regarding federal principles and democratic
                      processes.</span></p>
                </div>
              </details>

              <div className="info-box" style={{"borderLeftColor": "#f59e0b"}}>
                <h4>🎓 UGC NET Expert Tips</h4>
                <p>Key constitutional systems: USA = Separation of Powers + Judicial Review. UK = Parliamentary
                  Sovereignty + Rule of Law (Dicey). France = Semi-Presidential (5th Republic, 1958). Switzerland =
                  Direct Democracy (Referendums).</p>
              </div>
            </div>
          </div>
        </div>

        {/**/}
        
    </>
  );
}