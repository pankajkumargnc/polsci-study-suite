"use client";
import { BookOpen, Edit, Globe, Handshake, Landmark, Network, PenTool, Scale, Trophy, Zap } from 'lucide-react';

export default function Semester2() {
  return (
    <>
<div id="sem2" className="tab-pane active">

          {/* ── Semester Hero Banner ── */}
          <div className="semester-hero sem-hero-2">
            <div className="sem-hero-icon">🌍</div>
            <h2 className="sem-hero-title">
              <span className="hi">सेमेस्टर II</span>
              <span className="en">Semester II</span>
            </h2>
            <p className="sem-hero-subtitle">
              <span className="hi">कोर पाठ्यक्रम — अंतर्राष्ट्रीय राजनीति, लोक प्रशासन एवं पाश्चात्य विचार</span>
              <span className="en">Core Courses — International Politics, Public Admin &amp; Western Thought</span>
            </p>
            <div className="sem-hero-stats">
              <div className="sem-stat">
                <span className="sem-stat-value">4</span>
                <span className="sem-stat-label"><span className="hi">पेपर</span><span className="en">Papers</span></span>
              </div>
              <div className="sem-stat">
                <span className="sem-stat-value">20+</span>
                <span className="sem-stat-label"><span className="hi">इकाइयाँ</span><span className="en">Units</span></span>
              </div>
              <div className="sem-stat">
                <span className="sem-stat-value">40+</span>
                <span className="sem-stat-label"><span className="hi">मुख्य विषय</span><span className="en">Key Topics</span></span>
              </div>
            </div>
            <p className="sem-hero-quote">
              <span className="hi">"अंतर्राष्ट्रीय राजनीति में शक्ति ही सबकुछ है — थूसिडाइड्स" — मेलियन संवाद</span>
              <span className="en">"The strong do what they can and the weak suffer what they must" — Thucydides, Melian Dialogue</span>
            </p>
          </div>

          {/* ── Quick Nav Chips ── */}
          <div className="quick-nav-chips">
            <a href="#sem2-p205" className="nav-chip"><Edit size={16} /> PSC-S-205</a>
            <a href="#sem2-p206" className="nav-chip"><Globe size={16} /> PSC-C-206</a>
            <a href="#sem2-p207" className="nav-chip"><Landmark size={16} /> PSC-C-207</a>
            <a href="#sem2-p208" className="nav-chip"><BookOpen size={16} /> PSC-C-208</a>
            <a href="#sem2-qa" className="nav-chip"><Trophy size={16} /> Q&amp;A</a>
          </div>

          {/**/}
          <div className="paper-section" data-aos="fade-up" data-accent="teal" id="sem2-p205">
            <h3 className="paper-title">
              <span style={{display:'flex',alignItems:'center',gap:'10px'}}>
                <span className="paper-icon-badge badge-teal"><Edit size={18} /></span>
                <span><span className="hi">PSC-S-205: शैक्षणिक लेखन एवं संचार कौशल</span><span className="en">PSC-S-205: Academic Writing and Communication Skills</span></span>
              </span>
              <span className="unit-count-badge"><span className="hi">6 इकाइयाँ</span><span className="en">6 Units</span></span>
            </h3>
            <h4 className="unit-title"><span className="hi">इकाई 1, 2 एवं 6: शैक्षणिक लेखन और संदर्भ शैलियाँ</span><span
                className="en">Unit 1, 2 &amp; 6: Academic Writing and Citation Styles</span></h4>
            <p><strong><span className="hi">शैक्षणिक लेखन:</span><span className="en">Academic Writing:</span></strong> <span
                className="hi">विश्वविद्यालयों और विद्वत्तापूर्ण प्रकाशनों में प्रयुक्त लेखन की एक औपचारिक शैली। इसकी
                विशेषताएँ हैं: स्पष्ट तर्क, साक्ष्य-आधारित दावे, औपचारिक स्वर, सटीक भाषा और उचित उद्धरण
                (Citation)।</span><span className="en">A formal style of writing used in universities and scholarly
                publications. Its features include: clear arguments, evidence-based claims, formal tone, precise
                language, and proper citation.</span></p>
            <ul>
              <li><strong><span className="hi">सिनॉप्सिस (Synopsis):</span><span className="en">Synopsis:</span></strong> <span
                  className="hi">शोध कार्य का खाका। मुख्य तत्व: शीर्षक, समस्या का विवरण, उद्देश्य, परिकल्पना, साहित्य
                  समीक्षा, शोध पद्धति (Methodology)।</span><span className="en">A blueprint of the research work. Key
                  elements: Title, Statement of the Problem, Objectives, Hypothesis, Literature Review,
                  Methodology.</span></li>
            </ul>
            <table>
              <thead>
                <tr>
                  <th><span className="hi">प्रमुख उद्धरण (Citation) शैलियाँ</span><span className="en">Major Citation
                      Styles</span></th>
                  <th><span className="hi">विवरण</span><span className="en">Description</span></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong><span className="hi">APA (अमेरिकन साइकोलॉजिकल एसोसिएशन)</span><span className="en">APA (American
                        Psychological Association)</span></strong></td>
                  <td><span className="hi">लेखक-दिनांक प्रणाली। मुख्य रूप से <strong>सामाजिक विज्ञान (Social
                        Sciences)</strong> में प्रयुक्त। उदा: Rawls, J. (1971). A Theory of Justice.</span><span
                      className="en">Author-Date system. Mainly used in <strong>Social Sciences</strong>. e.g.: Rawls, J.
                      (1971). A Theory of Justice.</span></td>
                </tr>
                <tr>
                  <td><strong><span className="hi">MLA (मॉडर्न लैंग्वेज एसोसिएशन)</span><span className="en">MLA (Modern
                        Language Association)</span></strong></td>
                  <td><span className="hi">लेखक-पृष्ठ प्रणाली। मुख्य रूप से <strong>मानविकी (Humanities)</strong> में
                      प्रयुक्त।</span><span className="en">Author-Page system. Mainly used in
                      <strong>Humanities</strong>.</span></td>
                </tr>
                <tr>
                  <td><strong><span className="hi">Chicago / Turabian</span><span className="en">Chicago /
                        Turabian</span></strong></td>
                  <td><span className="hi">इतिहास और राजनीति विज्ञान में प्रयुक्त फुटनोट/ग्रंथसूची प्रणाली।</span><span
                      className="en">Footnote/Bibliography system used in History and Political Science.</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/**/}
          <div className="paper-section" data-aos="fade-up" data-accent="indigo" id="sem2-p206">
            <h3 className="paper-title">
              <span style={{display:'flex',alignItems:'center',gap:'10px'}}>
                <span className="paper-icon-badge badge-indigo"><Globe size={18} /></span>
                <span><span className="hi">PSC-C-206: अंतर्राष्ट्रीय राजनीति के सिद्धांत</span><span className="en">PSC-C-206: Theories of International Politics</span></span>
              </span>
              <span className="unit-count-badge"><span className="hi">9 इकाइयाँ</span><span className="en">9 Units</span></span>
            </h3>
            <h4 className="unit-title"><span className="hi">इकाई 2: उपागम — यथार्थवाद (Realism)</span><span className="en">Unit 2:
                Approaches — Realism</span></h4>
            <p><span className="hi">अंतर्राष्ट्रीय संबंधों में प्रमुख प्रतिमान (Paradigm)। प्रमुख मान्यताएँ: राज्य प्राथमिक
                कर्ता हैं, अंतर्राष्ट्रीय व्यवस्था अराजक है (कोई विश्व सरकार नहीं), राज्य तर्कसंगत रूप से राष्ट्रीय हित
                (शक्ति) की पूर्ति करते हैं, और नैतिकता का कोई विशेष स्थान नहीं है।</span><span className="en">The dominant
                paradigm in International Relations. Key assumptions: States are the primary actors, the international
                system is anarchic (no world government), states rationally pursue national interest (power), and
                morality has no significant place.</span></p>
            <ul>
              <li><strong><span className="hi">हंस मोर्गेन्थाऊ (शास्त्रीय यथार्थवाद):</span><span className="en">Hans Morgenthau
                    (Classical Realism):</span></strong> <span className="hi">आधुनिक यथार्थवाद के जनक। पुस्तक:
                  <em>'पॉलिटिक्स अमंग नेशंस' (1948)</em>। 'शक्ति के रूप में परिभाषित राष्ट्रीय हित' इनकी मुख्य अवधारणा
                  है।</span><span className="en">Father of modern realism. Book: <em>'Politics Among Nations' (1948)</em>.
                  'National interest defined in terms of power' is his core concept.</span></li>
              <li><strong><span className="hi">थ्यूसीडाइड्स:</span><span className="en">Thucydides:</span></strong> <span
                  className="hi">प्राचीन ग्रीक इतिहासकार (पेलोपोनेसियन युद्ध)। मेलियन संवाद (Melian Dialogue): "शक्तिशाली
                  वही करते हैं जो वे कर सकते हैं और कमज़ोर वही सहते हैं जो उन्हें सहना पड़ता है।"</span><span
                  className="en">Ancient Greek historian (Peloponnesian War). Melian Dialogue: "The strong do what they can
                  and the weak suffer what they must."</span></li>
              <li><strong><span className="hi">नव-यथार्थवाद / संरचनात्मक यथार्थवाद (केनेथ वाल्ट्ज़):</span><span
                    className="en">Neo-Realism / Structural Realism (Kenneth Waltz):</span></strong> <span
                  className="hi">पुस्तक: <em>'थ्योरी ऑफ इंटरनेशनल पॉलिटिक्स' (1979)</em>। इन्होंने राज्यों के इरादों के बजाय
                  अंतर्राष्ट्रीय व्यवस्था की 'अराजक संरचना' पर ध्यान केंद्रित किया।</span><span className="en">Book:
                  <em>'Theory of International Politics' (1979)</em>. Focused on the 'anarchic structure' of the
                  international system rather than the intentions of states.</span></li>
            </ul>
            <h4 className="unit-title"><span className="hi">इकाई 5 से 9: शक्ति संतुलन, सामूहिक सुरक्षा एवं
                गुटनिरपेक्षता</span><span className="en">Unit 5 to 9: Balance of Power, Collective Security &amp; NAM</span>
            </h4>
            <ul>
              <li><strong><span className="hi">शक्ति संतुलन (Balance of Power):</span><span className="en">Balance of
                    Power:</span></strong> <span className="hi">ऐसी स्थिति जहाँ कोई भी एक राज्य अत्यधिक हावी नहीं हो पाता।
                  राज्य अपनी सुरक्षा और स्वतंत्रता को बनाए रखने के लिए गठबंधन (Alliances) बनाते हैं।</span><span
                  className="en">A situation where no single state becomes overly dominant. States form alliances to
                  maintain their security and independence.</span></li>
              <li><strong><span className="hi">सामूहिक सुरक्षा (Collective Security):</span><span className="en">Collective
                    Security:</span></strong> <span className="hi">यह सिद्धांत कि "एक पर हमला सभी पर हमला है" (One for all,
                  all for one)। यह राष्ट्र संघ (League of Nations) और संयुक्त राष्ट्र चार्टर (अध्याय VII) का आधार
                  है।</span><span className="en">The principle that "an attack on one is an attack on all" (One for all, all
                  for one). This is the basis of the League of Nations and the UN Charter (Chapter VII).</span></li>
              <li><strong><span className="hi">गुटनिरपेक्षता (NAM):</span><span className="en">Non-Aligned Movement
                    (NAM):</span></strong> <span className="hi">शीत युद्ध के दौरान किसी भी सैन्य गठबंधन (NATO या वारसा
                  पैक्ट) में शामिल न होने की विदेश नीति। बांडुंग सम्मेलन (1955) इसके लिए प्रारंभिक कदम था; इसे औपचारिक
                  रूप से बेलग्रेड (1961) में शुरू किया गया था।</span><span className="en">The foreign policy of not joining
                  any military alliance (NATO or Warsaw Pact) during the Cold War. The Bandung Conference (1955) was the
                  preliminary step; it was formally launched in Belgrade (1961).</span></li>
            </ul>
            {/* ── NEW: Comparison — Realism vs Liberalism ── */}
            <div className="comparison-box">
              <div className="comparison-header">
                ⚖️ <span className="hi">यथार्थवाद vs आदर्शवाद</span><span className="en">Realism vs Liberalism</span>
              </div>
              <div className="comparison-body">
                <div className="comparison-side">
                  <h5><span className="hi">यथार्थवाद (Realism)</span><span className="en">Realism</span></h5>
                  <ul>
                    <li><span className="hi">राज्य प्राथमिक कर्ता</span><span className="en">States are primary actors</span></li>
                    <li><span className="hi">अराजक व्यवस्था</span><span className="en">Anarchic system</span></li>
                    <li><span className="hi">शक्ति ही सबकुछ है</span><span className="en">Power is everything</span></li>
                    <li><span className="hi">मोर्गेन्थाउ, वाल्ट्ज़</span><span className="en">Morgenthau, Waltz</span></li>
                  </ul>
                </div>
                <div className="comparison-vs"><div className="vs-badge">VS</div></div>
                <div className="comparison-side">
                  <h5><span className="hi">आदर्शवाद (Liberalism)</span><span className="en">Liberalism</span></h5>
                  <ul>
                    <li><span className="hi">अनेक कर्ता (IGOs, NGOs, MNCs)</span><span className="en">Multiple actors (IGOs, NGOs, MNCs)</span></li>
                    <li><span className="hi">सहयोग संभव</span><span className="en">Cooperation is possible</span></li>
                    <li><span className="hi">लोकतंत्र शांति सिद्धांत</span><span className="en">Democratic Peace Theory</span></li>
                    <li><span className="hi">कांट, कियोहेन</span><span className="en">Kant, Keohane</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/**/}
          <div className="paper-section" data-aos="fade-up" data-accent="amber" id="sem2-p207">
            <h3 className="paper-title">
              <span style={{display:'flex',alignItems:'center',gap:'10px'}}>
                <span className="paper-icon-badge badge-amber"><Landmark size={18} /></span>
                <span><span className="hi">PSC-C-207: लोक प्रशासन</span><span className="en">PSC-C-207: Public Administration</span></span>
              </span>
              <span className="unit-count-badge"><span className="hi">6 इकाइयाँ</span><span className="en">6 Units</span></span>
            </h3>
            <h4 className="unit-title"><span className="hi">इकाई 2: लोक प्रशासन के प्रमुख सिद्धांत</span><span className="en">Unit
                2: Major Theories of Public Administration</span></h4>
            <ul>
              <li><strong><span className="hi">मानवीय संबंध सिद्धांत — एल्टन मेयो:</span><span className="en">Human Relations
                    Theory — Elton Mayo:</span></strong> <span className="hi"><strong>हाथॉर्न प्रयोग (1924–32)</strong> ने
                  साबित किया कि कार्यस्थल पर उत्पादकता केवल भौतिक परिस्थितियों (रोशनी/पैसे) पर नहीं, बल्कि सामाजिक
                  कारकों, कार्यकर्ता के मनोबल और अनौपचारिक समूहों (Informal groups) पर निर्भर करती है।</span><span
                  className="en">The <strong>Hawthorne Experiments (1924–32)</strong> proved that workplace productivity
                  depends not only on physical conditions (lighting/money) but on social factors, worker morale, and
                  informal groups.</span></li>
              <li><strong><span className="hi">निर्णय-निर्माण सिद्धांत — हर्बर्ट साइमन:</span><span
                    className="en">Decision-Making Theory — Herbert Simon:</span></strong> <span className="hi">'प्रशासनिक
                  व्यवहार' (1947)। प्रमुख अवधारणा: <strong>परिसीमित तर्कसंगतता (Bounded Rationality)</strong>। साइमन के
                  अनुसार निर्णय निर्माता असीमित जानकारी नहीं रखते, इसलिए वे 'इष्टतम' (Optimize) करने के बजाय 'संतोषजनक'
                  (Satisficing) विकल्प चुनते हैं।</span><span className="en">'Administrative Behavior' (1947). Core concept:
                  <strong>Bounded Rationality</strong>. Simon argued that decision-makers lack unlimited information, so
                  they choose a 'satisficing' option instead of an 'optimizing' one.</span></li>
              <li><strong><span className="hi">पारिस्थितिक सिद्धांत — एफ. डब्ल्यू. रिग्स:</span><span className="en">Ecological
                    Theory — F. W. Riggs:</span></strong> <span className="hi">विकासशील देशों के प्रशासन को समझाने के लिए
                  <strong>प्रिज़्मेटिक-साला मॉडल (Prismatic-Sala Model)</strong> विकसित किया। (फ्यूज्ड → प्रिज़्मेटिक →
                  डिफ्रैक्टेड)।</span><span className="en">Developed the <strong>Prismatic-Sala Model</strong> to explain
                  administration in developing countries. (Fused → Prismatic → Diffracted).</span></li>
            </ul>
            {/* ── NEW: Timeline — Public Administration Evolution ── */}
            <div className="timeline-box">
              <h4>📅 <span className="hi">लोक प्रशासन का विकास</span><span className="en">Evolution of Public Administration</span></h4>
              <div className="timeline-items">
                <div className="timeline-item">
                  <div className="timeline-year">1887</div>
                  <div className="timeline-text"><span className="hi">वुडरो विल्सन — "The Study of Administration" — राजनीति-प्रशासन द्वैतवाद (Dichotomy)</span><span className="en">Woodrow Wilson — "The Study of Administration" — Politics-Administration Dichotomy</span></div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">1924-32</div>
                  <div className="timeline-text"><span className="hi">एल्टन मेयो — हाथॉर्न प्रयोग — मानवीय संबंध सिद्धांत</span><span className="en">Elton Mayo — Hawthorne Experiments — Human Relations Theory</span></div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">1947</div>
                  <div className="timeline-text"><span className="hi">हर्बर्ट साइमन — "प्रशासनिक व्यवहार" — परिसीमित तर्कसंगतता (Bounded Rationality)</span><span className="en">Herbert Simon — "Administrative Behavior" — Bounded Rationality</span></div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">1961</div>
                  <div className="timeline-text"><span className="hi">एफ.डब्ल्यू. रिग्स — प्रिज़्मेटिक-साला मॉडल — पारिस्थितिकीय सिद्धांत</span><span className="en">F.W. Riggs — Prismatic-Sala Model — Ecological Theory</span></div>
                </div>
              </div>
            </div>
          </div>

          {/**/}
          <div className="paper-section" data-aos="fade-up" data-accent="purple" id="sem2-p208">
            <h3 className="paper-title">
              <span style={{display:'flex',alignItems:'center',gap:'10px'}}>
                <span className="paper-icon-badge badge-purple"><BookOpen size={18} /></span>
                <span><span className="hi">PSC-C-208: पाश्चात्य राजनीतिक विचार</span><span className="en">PSC-C-208: Western Political Thought</span></span>
              </span>
              <span className="unit-count-badge"><span className="hi">10 इकाइयाँ</span><span className="en">10 Units</span></span>
            </h3>
            <h4 className="unit-title"><span className="hi">इकाई 1 एवं 2: प्लेटो और अरस्तू</span><span className="en">Unit 1 &amp;
                2: Plato and Aristotle</span></h4>
            <ul>
              <li><strong><span className="hi">प्लेटो (Plato):</span><span className="en">Plato:</span></strong> <span
                  className="hi">द रिपब्लिक (The Republic) के लेखक। <strong>दार्शनिक-राजा (Philosopher-King)</strong> की
                  वकालत। उन्होंने संरक्षकों (Guardians) को भ्रष्टाचार से मुक्त रखने के लिए <strong>'पत्नियों और संपत्ति
                    का साम्यवाद' (Abolition of property/family)</strong> का सुझाव दिया। उनका 'नोबल लाई' (Noble Lie)
                  सामाजिक स्थिरता के लिए था।</span><span className="en">Author of The Republic. Advocated for the
                  <strong>Philosopher-King</strong>. He suggested the <strong>'Communism of wives and property'
                    (Abolition of property/family)</strong> for the guardians to keep them free from corruption. His
                  'Noble Lie' (Myth of Metals) was for social stability.</span></li>
              <li><strong><span className="hi">अरस्तू (Aristotle):</span><span className="en">Aristotle:</span></strong> <span
                  className="hi">राजनीति विज्ञान के जनक। उनका प्रसिद्ध कथन है "मनुष्य स्वभाव से एक राजनीतिक प्राणी है।" उनका
                  आदर्श राज्य <strong>पॉलिटी (Polity)</strong> है, जो कुलीनतंत्र और लोकतंत्र का मिश्रण है, जहाँ मध्यम
                  वर्ग स्थिरता प्रदान करता है।</span><span className="en">Father of Political Science. His famous statement
                  is "Man is by nature a political animal." His ideal state is <strong>Polity</strong>, a mixed form of
                  oligarchy and democracy, where the middle class provides stability.</span></li>
            </ul>
            <h4 className="unit-title"><span className="hi">इकाई 4: मैकियावेली - आधुनिक विचारक</span><span className="en">Unit 4:
                Machiavelli - Modern Thinker</span></h4>
            <p><span className="hi">निकोलो मैकियावेली की प्रसिद्ध पुस्तक <strong>'द प्रिंस' (1513)</strong> है। उन्होंने
                राजनीति को नैतिकता और धर्म से अलग किया (राजनीतिक यथार्थवाद)। 'प्रिंस' को शेर (बल) और लोमड़ी (चालाकी)
                दोनों होना चाहिए। उनका मानना था कि <strong>"उद्देश्य साधनों को उचित ठहराता है" (The end justifies the
                  means)</strong>।</span><span className="en">Niccolò Machiavelli's famous book is <strong>'The Prince'
                  (1513)</strong>. He separated politics from morality and religion (Political Realism). A 'Prince' must
                be both a lion (force) and a fox (cunning). He believed that <strong>"The end justifies the
                  means"</strong>.</span></p>
            <h4 className="unit-title"><span className="hi">इकाई 6 और 10: जे.एस. मिल और कार्ल मार्क्स</span><span
                className="en">Unit 6 and 10: J.S. Mill and Karl Marx</span></h4>
            <ul>
              <li><strong><span className="hi">जे. एस. मिल (J. S. Mill - स्वतंत्रता):</span><span className="en">J. S. Mill
                    (Liberty):</span></strong> <span className="hi">उनकी पुस्तक <em>'ऑन लिबर्टी' (1859)</em> में
                  <strong>हानि सिद्धांत (Harm Principle)</strong> दिया गया है: "किसी सभ्य समुदाय के किसी सदस्य पर उसकी
                  इच्छा के विरुद्ध शक्ति का प्रयोग करने का एकमात्र उद्देश्य दूसरों को नुकसान से बचाना है।"</span><span
                  className="en">His book <em>'On Liberty' (1859)</em> introduces the <strong>Harm Principle</strong>: "The
                  only purpose for which power can be rightfully exercised over any member of a civilized community,
                  against his will, is to prevent harm to others."</span></li>
              <li><strong><span className="hi">कार्ल मार्क्स (Karl Marx):</span><span className="en">Karl Marx:</span></strong>
                <span className="hi"><strong>ऐतिहासिक भौतिकवाद (Historical Materialism):</strong> इतिहास का निर्धारण
                  आर्थिक/भौतिक स्थितियों द्वारा होता है। <strong>अतिरिक्त मूल्य (Surplus Value):</strong> मज़दूर जितना
                  मूल्य पैदा करते हैं, उन्हें भुगतान उससे बहुत कम मिलता है; यही चोरी हुआ मुनाफा शोषण का स्रोत है।
                  उन्होंने एक 'वर्गविहीन और राज्यविहीन' (Classless and stateless) साम्यवादी समाज की वकालत
                  की।</span><span className="en"><strong>Historical Materialism:</strong> History is determined by
                  economic/material conditions. <strong>Surplus Value:</strong> Workers create more value than they are
                  paid; this stolen profit is the source of exploitation. He advocated for a 'classless and stateless'
                  communist society.</span>
              </li>
            </ul>
            {/* ── NEW: Comparison — Plato vs Aristotle ── */}
            <div className="comparison-box">
              <div className="comparison-header">
                ⚖️ <span className="hi">प्लेटो vs अरस्तू</span><span className="en">Plato vs Aristotle</span>
              </div>
              <div className="comparison-body">
                <div className="comparison-side">
                  <h5><span className="hi">प्लेटो</span><span className="en">Plato</span></h5>
                  <ul>
                    <li><span className="hi">आदर्शवादी (Idealist)</span><span className="en">Idealist</span></li>
                    <li><span className="hi">दार्शनिक-राजा की वकालत</span><span className="en">Philosopher-King</span></li>
                    <li><span className="hi">संपत्ति/परिवार का साम्यवाद</span><span className="en">Communism of property/family</span></li>
                    <li><span className="hi">पुस्तक: द रिपब्लिक</span><span className="en">Book: The Republic</span></li>
                  </ul>
                </div>
                <div className="comparison-vs"><div className="vs-badge">VS</div></div>
                <div className="comparison-side">
                  <h5><span className="hi">अरस्तू</span><span className="en">Aristotle</span></h5>
                  <ul>
                    <li><span className="hi">यथार्थवादी (Realist)</span><span className="en">Realist</span></li>
                    <li><span className="hi">मध्यम वर्ग स्थिरता देता है</span><span className="en">Middle class ensures stability</span></li>
                    <li><span className="hi">आदर्श: पॉलिटी (Polity)</span><span className="en">Ideal: Polity (Mixed govt)</span></li>
                    <li><span className="hi">पुस्तक: पॉलिटिक्स</span><span className="en">Book: Politics</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ── NEW: Did You Know ── */}
            <div className="did-you-know">
              <h4>✨ <span className="hi">क्या आप जानते हैं?</span><span className="en">Did You Know?</span></h4>
              <p><span className="hi">अरस्तू प्लेटो के छात्र थे लेकिन उन्होंने अपने गुरु की लगभग हर बात से असहमति जताई! अरस्तू ने प्लेटो के <strong>दार्शनिक-राजा</strong> की अवधारणा को "अव्यावहारिक" और "काल्पनिक" बताया। यह पश्चिमी राजनीतिक चिंतन में पहली बड़ी बहस थी!</span><span className="en">Aristotle was Plato's student, yet he disagreed with almost everything his teacher said! He called Plato's <strong>Philosopher-King</strong> concept "impractical" and "utopian." This was the first major debate in Western Political Thought!</span></p>
            </div>
          </div>


          {/**/}
          <div className="paper-section" data-accent="green-qa" id="sem2-qa">
            <h3 className="paper-title"
              style={{"background": "linear-gradient(135deg, #10b981 0%, #059669 100%)", "color": "white"}}>
              <Trophy size={18} />
              <span className="hi">सेमेस्टर II - मास्टर Q&amp;A और UGC NET टिप्स</span>
              <span className="en">Semester II - Master Q&amp;A &amp; UGC NET Tips</span>
            </h3>

            <p className="intro-text">
              <span className="hi">परीक्षा में सर्वोच्च अंक (Gold Medal) और JRF के लिए अति-महत्वपूर्ण प्रश्न।</span>
              <span className="en">Highly important questions for Gold Medal in University exams and JRF.</span>
            </p>

            {/**/}
            <h4 className="unit-title" style={{"color": "#6366f1"}}><Edit size={18} /> Academic Writing and
              Communication Skills</h4>
            <div className="content-box">
              <h5 className="qa-section-title"><Zap size={18} style={{"color": "#f59e0b"}} /> Short Questions (2-5
                Marks)</h5>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q1</span> <span className="hi">शोध सारांश क्या है?</span><span
                    className="en">What is a Research Synopsis?</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">एक शोध सारांश एक प्रस्तावित शोध परियोजना का संक्षिप्त सारांश या खाका है। यह शोध
                      समस्या, उद्देश्य, परिकल्पना, कार्यप्रणाली और अध्ययन के महत्व को रेखांकित करता है। यह पर्यवेक्षकों
                      को अनुसंधान शुरू होने से पहले उसकी व्यवहार्यता का मूल्यांकन करने में मदद करता है।</span><span
                      className="en">A research synopsis is a brief summary or blueprint of a proposed research project. It
                      outlines the research problem, objectives, hypothesis, methodology, and significance of the study.
                      It helps supervisors evaluate the feasibility of the research before it begins.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q2</span> <span className="hi">APA का क्या अर्थ है और इसका उपयोग कहाँ किया
                    जाता है?</span><span className="en">What does APA stand for and where is it used?</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">एपीए का मतलब अमेरिकन साइकोलॉजिकल एसोसिएशन है। यह एक मानक उद्धरण शैली है जिसका
                      उपयोग मुख्य रूप से सामाजिक विज्ञान, शिक्षा और मनोविज्ञान में अकादमिक पत्रों के प्रारूपण, संदर्भ और
                      उद्धरणों में स्थिरता सुनिश्चित करने के लिए किया जाता है।</span><span className="en">APA stands for
                      <strong>American Psychological Association</strong>. It is a standard citation style primarily
                      used in the Social Sciences, Education, and Psychology to ensure consistency in formatting,
                      references, and citations within academic papers.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q3</span> <span className="hi">'लेखक-तिथि' उद्धरण प्रणाली की व्याख्या
                    करें।</span><span className="en">Explain the 'Author-Date' citation system.</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">मुख्य रूप से एपीए शैली में प्रयुक्त, इस प्रणाली के लिए लेखक के अंतिम नाम और
                      प्रकाशन वर्ष को उद्धृत पाठ के तुरंत बाद कोष्ठक में रखना आवश्यक है (उदाहरण के लिए, स्मिथ, 2020)। यह
                      पाठकों को ग्रंथ सूची में संपूर्ण स्रोत का तुरंत पता लगाने की अनुमति देता है।</span><span
                      className="en">Used predominantly in the APA style, this system requires the author's last name and
                      the publication year to be placed in parentheses immediately after the cited text (e.g., Smith,
                      2020). It allows readers to quickly locate the full source in the bibliography.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q4</span> <span className="hi">साहित्यिक चोरी क्या है?</span><span
                    className="en">What is Plagiarism?</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">साहित्यिक चोरी उचित क्रेडिट या उद्धरण प्रदान किए बिना किसी और के विचारों, शब्दों,
                      डेटा या कार्य को अपने स्वयं के रूप में प्रस्तुत करने की अनैतिक प्रथा है। शिक्षा जगत में इसे एक
                      गंभीर बौद्धिक अपराध माना जाता है जिसके लिए निष्कासन या शोध को अस्वीकार करना दंडनीय है।</span><span
                      className="en">Plagiarism is the unethical practice of presenting someone else's ideas, words, data,
                      or work as your own without providing proper credit or citation. In academia, it is considered a
                      serious intellectual offense punishable by expulsion or rejection of research.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q5</span> <span className="hi">साहित्य समीक्षा क्या है?</span><span
                    className="en">What is a Literature Review?</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">किसी विशिष्ट विषय पर पहले प्रकाशित शोध का व्यापक सारांश और आलोचनात्मक विश्लेषण। यह
                      मौजूदा ज्ञान में अंतराल की पहचान करने, काम के दोहराव को रोकने और नए शोध के लिए एक ठोस आधार प्रदान
                      करने में मदद करता है।</span><span className="en">A comprehensive summary and critical analysis of
                      previously published research on a specific topic. It helps identify gaps in existing knowledge,
                      preventing duplication of work and providing a solid foundation for new research.</span></p>
                </div>
              </details>

              <h5 className="qa-section-title" style={{"marginTop": "20px"}}><PenTool size={18} style={{"color": "#3b82f6"}} /> Long Questions (15-20 Marks)</h5>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q1</span> <span className="hi">अकादमिक लेखन को परिभाषित करें और रचनात्मक
                    लेखन की तुलना में इसकी प्रमुख विशेषताओं पर चर्चा करें।</span><span className="en">Define Academic
                    Writing and discuss its key characteristics compared to creative writing.</span> <span
                    className="qa-marks">[15 Marks]</span></summary>
                <div className="qa-content">
                  <h5><span className="hi">1 परिचय</span><span className="en">1. Introduction</span></h5>
                  <p><span className="hi">अकादमिक लेखन विश्वविद्यालयों और विद्वानों के प्रकाशनों में उपयोग की जाने वाली लेखन
                      की एक औपचारिक शैली है। लेखन के अन्य रूपों के विपरीत, इसका उद्देश्य जटिल विचारों को अकादमिक दर्शकों
                      तक स्पष्ट, तार्किक और वस्तुनिष्ठ रूप से संप्रेषित करना है।</span><span className="en">Academic writing
                      is a formal style of writing used in universities and scholarly publications. Unlike other forms
                      of writing, it aims to communicate complex ideas clearly, logically, and objectively to an
                      academic audience.</span></p>
                  <h5><span className="hi">2. अकादमिक लेखन की प्रमुख विशेषताएँ</span><span className="en">2. Key Characteristics
                      of Academic Writing</span></h5>
                  <ul>
                    <li><span className="hi">औपचारिकता: बोलचाल की भाषा, कठबोली भाषा और संकुचन से बचा जाता है (उदाहरण के लिए,
                        "नहीं करें" के बजाय "नहीं करें" का उपयोग करें)।</span><span
                        className="en"><strong>Formality:</strong> Avoids colloquialisms, slang, and contractions (e.g.,
                        uses "do not" instead of "don't").</span></li>
                    <li><span className="hi">वस्तुनिष्ठता: तीसरे व्यक्ति में लिखा गया; भावनात्मक भाषा से बचते हैं. यह
                        व्यक्तिगत भावनाओं के बजाय तथ्यों और सबूतों पर ध्यान केंद्रित करता है।</span><span
                        className="en"><strong>Objectivity:</strong> Written in the third person; avoids emotional language.
                        It focuses on facts and evidence rather than personal feelings.</span></li>
                    <li><span className="hi">संरचना: एक स्पष्ट परिचय, मुख्य पैराग्राफ (विषय वाक्यों के साथ), और एक निष्कर्ष
                        के साथ अत्यधिक संरचित।</span><span className="en"><strong>Structure:</strong> Highly structured with
                        a clear introduction, body paragraphs (with topic sentences), and a conclusion.</span></li>
                    <li><span className="hi">साक्ष्य-आधारित: दावों को अनुभवजन्य डेटा या विश्वसनीय, सहकर्मी-समीक्षित स्रोतों
                        के उद्धरणों द्वारा समर्थित किया जाना चाहिए।</span><span
                        className="en"><strong>Evidence-Based:</strong> Claims must be supported by empirical data or
                        citations from credible, peer-reviewed sources.</span></li>
                    <li><span className="hi">परिशुद्धता: भाषा सटीक और स्पष्ट होनी चाहिए।</span><span
                        className="en"><strong>Precision:</strong> Language must be precise and unambiguous.</span></li>
                  </ul>
                  <h5><span className="hi">3. अकादमिक बनाम रचनात्मक लेखन</span><span className="en">3. Academic vs. Creative
                      Writing</span></h5>
                  <ul>
                    <li><span className="hi">उद्देश्य: अकादमिक लेखन तथ्यों के आधार पर जानकारी देता है, विश्लेषण करता है और
                        समझाता है। रचनात्मक लेखन मनोरंजन करता है, भावनाएँ जगाता है और कहानियाँ सुनाता है।</span><span
                        className="en"><strong>Purpose:</strong> Academic writing informs, analyzes, and persuades based on
                        facts. Creative writing entertains, evokes emotion, and tells stories.</span></li>
                    <li><span className="hi">स्वर: शैक्षणिक वस्तुनिष्ठ और औपचारिक है; रचनात्मक व्यक्तिपरक, अभिव्यंजक और
                        अनौपचारिक है।</span><span className="en"><strong>Tone:</strong> Academic is objective and formal;
                        Creative is subjective, expressive, and informal.</span></li>
                    <li><span className="hi">फ़ॉर्मेटिंग: अकादमिक सख्त उद्धरण शैलियों (एपीए, एमएलए) का पालन करता है;
                        क्रिएटिव के कोई सख्त नियम नहीं हैं।</span><span className="en"><strong>Formatting:</strong> Academic
                        follows strict citation styles (APA, MLA); Creative has no strict rules.</span></li>
                  </ul>
                  <h5><span className="hi">4. निष्कर्ष</span><span className="en">4. Conclusion</span></h5>
                  <p><span className="hi">शोधकर्ताओं के लिए ज्ञान के वैश्विक निकाय में विश्वसनीय और पेशेवर रूप से योगदान
                      करने के लिए अकादमिक लेखन में महारत हासिल करना आवश्यक है।</span><span className="en">Mastering academic
                      writing is essential for researchers to contribute to the global body of knowledge credibly and
                      professionally.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q2</span> <span className="hi">विभिन्न मानक उद्धरण शैलियों (एपीए, एमएलए,
                    शिकागो) की व्याख्या करें। शोध में उचित उद्धरण क्यों आवश्यक है?</span><span className="en">Explain the
                    different standard Citation Styles (APA, MLA, Chicago). Why is proper citation essential in
                    research?</span> <span className="qa-marks">[20 Marks]</span></summary>
                <div className="qa-content">
                  <h5><span className="hi">1 परिचय</span><span className="en">1. Introduction</span></h5>
                  <p><span className="hi">उद्धरण किसी प्रकाशित या अप्रकाशित स्रोत का औपचारिक संदर्भ है। कौन सी जानकारी सबसे
                      महत्वपूर्ण मानी जाती है, इसके आधार पर विभिन्न शैक्षणिक अनुशासन अलग-अलग उद्धरण शैलियों का उपयोग
                      करते हैं।</span><span className="en">A citation is a formal reference to a published or unpublished
                      source. Different academic disciplines use different citation styles based on what information is
                      deemed most important.</span></p>
                  <h5><span className="hi">2. प्रमुख उद्धरण शैलियाँ</span><span className="en">2. Major Citation Styles</span>
                  </h5>
                  <ul>
                    <li><span className="hi">एपीए (अमेरिकन साइकोलॉजिकल एसोसिएशन): सामाजिक विज्ञान में उपयोग किया जाता है।
                        पाठ में "लेखक-तिथि" प्रारूप का उपयोग करता है। यह प्रकाशन के वर्ष को प्राथमिकता देता है क्योंकि
                        विज्ञान में वर्तमान शोध महत्वपूर्ण है। उदाहरण: (स्मिथ, 2021)।</span><span className="en"><strong>APA
                          (American Psychological Association):</strong> Used in Social Sciences. Uses an "Author-Date"
                        format in-text. It prioritizes the year of publication because current research is vital in
                        sciences. <br /><em>Example: (Smith, 2021).</em></span></li>
                    <li><span className="hi">एमएलए (आधुनिक भाषा संघ): मानविकी (साहित्य, कला) में प्रयुक्त। "लेखक-पृष्ठ"
                        प्रारूप का उपयोग करता है। यह लेखक और उस विशिष्ट पृष्ठ को प्राथमिकता देता है जहां उद्धरण पाया
                        जाता है। उदाहरण: (स्मिथ 45)।</span><span className="en"><strong>MLA (Modern Language
                          Association):</strong> Used in Humanities (Literature, Arts). Uses an "Author-Page" format. It
                        prioritizes the author and the specific page where a quote is found. <br /><em>Example: (Smith
                          45).</em></span></li>
                    <li><span className="hi">शिकागो शैली: इतिहास में अधिकतर प्रयुक्त। यह आम तौर पर पाठ में उद्धरणों के बजाय
                        फ़ुटनोट्स या एंडनोट्स का उपयोग करता है, जिससे पाठ को अव्यवस्थित किए बिना व्यापक ऐतिहासिक टिप्पणी
                        की अनुमति मिलती है।</span><span className="en"><strong>Chicago Style:</strong> Used mostly in
                        History. It typically uses Footnotes or Endnotes rather than in-text citations, allowing for
                        extensive historical commentary without cluttering the text.</span></li>
                  </ul>
                  <h5><span className="hi">3. उचित उद्धरण क्यों आवश्यक है?</span><span className="en">3. Why is Proper Citation
                      Essential?</span></h5>
                  <ul>
                    <li><span className="hi">साहित्यिक चोरी से बचना: मूल लेखकों को श्रेय देना बौद्धिक चोरी को रोकता
                        है।</span><span className="en"><strong>Avoiding Plagiarism:</strong> Giving credit to original
                        authors prevents intellectual theft.</span></li>
                    <li><span className="hi">सत्यापनीयता: पाठकों और सहकर्मी-समीक्षकों को तथ्यों के स्रोत का पता लगाने की
                        अनुमति देता है, जिससे शोध की विश्वसनीयता सुनिश्चित होती है।</span><span
                        className="en"><strong>Verifiability:</strong> Allows readers and peer-reviewers to trace the source
                        of facts, ensuring the research's credibility.</span></li>
                    <li><span className="hi">पूर्व कार्य को स्वीकार करना: दर्शाता है कि शोधकर्ता मौजूदा साहित्य से अवगत
                        है।</span><span className="en"><strong>Acknowledging Prior Work:</strong> Shows that the researcher
                        is aware of existing literature.</span></li>
                  </ul>
                  <h5><span className="hi">4. निष्कर्ष</span><span className="en">4. Conclusion</span></h5>
                  <p><span className="hi">उद्धरण केवल एक स्वरूपण नियम नहीं है; यह अकादमिक अखंडता की रीढ़ है, यह सुनिश्चित
                      करते हुए कि विद्वानों की बातचीत पारदर्शी है और सत्यापन योग्य नींव पर बनी है।</span><span
                      className="en">Citation is not just a formatting rule; it is the backbone of academic integrity,
                      ensuring that scholarly conversations are transparent and built on verifiable foundations.</span>
                  </p>
                </div>
              </details>

              <div className="info-box" style={{"borderLeftColor": "#f59e0b"}}>
                <h4>🎓 UGC NET Expert Tips</h4>
                <p>For Research Aptitude (Paper 1), remember: APA is Author-Date (Social Sciences). MLA is Author-Page
                  (Humanities). Chicago uses Footnotes/Endnotes (History).</p>
              </div>
            </div>

            {/**/}
            <h4 className="unit-title" style={{"color": "#6366f1"}}><Handshake size={18} /> Theories of International
              Politics</h4>
            <div className="content-box">
              <h5 className="qa-section-title"><Zap size={18} style={{"color": "#f59e0b"}} /> Short Questions (2-5
                Marks)</h5>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q1</span> <span className="hi">'शास्त्रीय यथार्थवाद' क्या है?</span><span
                    className="en">What is 'Classical Realism'?</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">हंस मोर्गेंथाऊ द्वारा समर्थित, यह तर्क देता है कि अंतर्राष्ट्रीय राजनीति मनुष्य के
                      स्वार्थी और सत्ता-चाहने वाले स्वभाव से प्रेरित है। मनुष्यों के नेतृत्व में राज्य स्वाभाविक रूप से
                      अपनी शक्ति को अधिकतम करने की कोशिश करते हैं, जिससे अपरिहार्य संघर्ष होता है।</span><span
                      className="en">Championed by <strong>Hans Morgenthau</strong>, it argues that international politics
                      is driven by the selfish and power-seeking nature of human beings. States, led by humans,
                      naturally seek to maximize their power, leading to inevitable conflict.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q2</span> <span className="hi">'नव-यथार्थवाद' क्या है?</span><span
                    className="en">What is 'Neo-Realism'?</span> </summary>
                <div className="qa-content">
                  <p>Developed by <strong>Kenneth Waltz</strong> (Structural Realism), it argues that state behavior is
                    determined not by human nature, but by the <strong>anarchic structure</strong> of the international
                    system. Since there is no world government, states must prioritize self-help and survival.</p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q3</span> <span className="hi">'शक्ति संतुलन' को परिभाषित करें।</span><span
                    className="en">Define 'Balance of Power'.</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">यथार्थवाद में एक मूल अवधारणा जहां सैन्य क्षमता वितरित होने पर राष्ट्रीय सुरक्षा
                      बढ़ जाती है ताकि कोई भी राज्य अन्य सभी पर हावी होने के लिए पर्याप्त मजबूत न हो। यदि एक राज्य बहुत
                      अधिक शक्तिशाली हो जाता है, तो अन्य उसे 'संतुलित' करने के लिए गठबंधन बनाते हैं।</span><span
                      className="en">A core concept in Realism where national security is enhanced when military capability
                      is distributed so that no one state is strong enough to dominate all others. If one state grows
                      too powerful, others form alliances to 'balance' it.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q4</span> <span className="hi">'सामूहिक सुरक्षा' क्या है?</span><span
                    className="en">What is 'Collective Security'?</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">राष्ट्र संघ और संयुक्त राष्ट्र के केंद्र में एक व्यवस्था, जहां राष्ट्रों का एक
                      समूह इस बात पर सहमत होता है कि किसी एक पर सुरक्षा खतरा या हमला सभी पर हमला है। वे आक्रामकता (जैसे,
                      खाड़ी युद्ध) को रोकने के लिए सामूहिक प्रतिक्रिया के लिए प्रतिबद्ध हैं।</span><span className="en">An
                      arrangement, central to the League of Nations and the UN, where a group of nations agree that a
                      security threat or attack on one is an attack on all. They commit to a collective response to
                      deter aggression (e.g., the Gulf War).</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q5</span> <span className="hi">रचनावाद का मूल तर्क क्या है?</span><span
                    className="en">What is the core argument of Constructivism?</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">अलेक्जेंडर वेंडेट ने प्रसिद्ध रूप से कहा, "अराजकता वह है जो राज्य इसे बनाते हैं।"
                      रचनावाद का तर्क है कि अंतर्राष्ट्रीय संबंध सामाजिक रूप से विचारों, मानदंडों, पहचान और संस्कृति
                      द्वारा निर्मित होते हैं, न कि केवल भौतिक शक्ति या निश्चित संरचनात्मक अराजकता द्वारा।</span><span
                      className="en">Alexander Wendt famously said, <strong>"Anarchy is what states make of it."</strong>
                      Constructivism argues that international relations are socially constructed by ideas, norms,
                      identities, and culture, not just by material power or fixed structural anarchy.</span></p>
                </div>
              </details>

              <h5 className="qa-section-title" style={{"marginTop": "20px"}}><PenTool size={18} style={{"color": "#3b82f6"}} /> Long Questions (15-20 Marks)</h5>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q1</span> <span className="hi">हंस मोर्गेंथाऊ के राजनीतिक यथार्थवाद के छह
                    सिद्धांतों का आलोचनात्मक परीक्षण करें।</span><span className="en">Critically examine Hans Morgenthau’s
                    Six Principles of Political Realism.</span> <span className="qa-marks">[20 Marks]</span></summary>
                <div className="qa-content">
                  <h5><span className="hi">1 परिचय</span><span className="en">1. Introduction</span></h5>
                  <p><span className="hi">हंस मोर्गेंथाऊ ने अपनी 1948 की पुस्तक 'पॉलिटिक्स अमंग नेशंस' में शास्त्रीय
                      यथार्थवाद की नींव रखी। उन्होंने तर्क दिया कि राजनीति, समाज की तरह, मानव स्वभाव में निहित
                      वस्तुनिष्ठ कानूनों द्वारा शासित होती है।</span><span className="en">Hans Morgenthau laid the
                      foundation for Classical Realism in his 1948 book <em>'Politics Among Nations'</em>. He argued
                      that politics, like society, is governed by objective laws rooted in human nature.</span></p>
                  <h5><span className="hi">2. छह सिद्धांत</span><span className="en">2. The Six Principles</span></h5>
                  <ul>
                    <li><span className="hi">मानव स्वभाव के वस्तुनिष्ठ नियम: राजनीति मनुष्यों के स्वार्थी और सत्ता-लोलुप
                        स्वभाव में निहित कानूनों द्वारा शासित होती है।</span><span className="en"><strong>Objective Laws of
                          Human Nature:</strong> Politics is governed by laws rooted in the selfish and power-seeking
                        nature of humans.</span></li>
                    <li><span className="hi">हित को शक्ति के रूप में परिभाषित किया गया है: राजनीतिक कार्रवाई का मुख्य संकेत
                        शक्ति के संदर्भ में परिभाषित राष्ट्रीय हित की अवधारणा है।</span><span
                        className="en"><strong>Interest defined as Power:</strong> The main signpost of political action is
                        the concept of national interest defined in terms of power.</span></li>
                    <li><span className="hi">रुचि की गतिशील प्रकृति: रुचि की अवधारणा वही रहती है, लेकिन सत्ता का गठन करने
                        वाली वास्तविकता राजनीतिक/सांस्कृतिक वातावरण के आधार पर बदल जाती है।</span><span
                        className="en"><strong>Dynamic nature of Interest:</strong> The concept of interest remains the
                        same, but the reality of what constitutes power changes depending on the political/cultural
                        environment.</span></li>
                    <li><span className="hi">राजनीतिक कार्रवाई का नैतिक महत्व: सार्वभौमिक नैतिक सिद्धांतों को सीधे राज्य के
                        कार्यों पर लागू नहीं किया जा सकता है। राज्य की रक्षा करना सर्वोच्च नैतिक कर्तव्य है।</span><span
                        className="en"><strong>Moral Significance of Political Action:</strong> Universal moral principles
                        cannot be applied directly to state actions. The survival of the state is the supreme moral
                        duty.</span></li>
                    <li><span className="hi">राष्ट्रीय और सार्वभौमिक नैतिकता के बीच अंतर: किसी विशेष राष्ट्र की नैतिक
                        आकांक्षाओं की तुलना ब्रह्मांड के नैतिक कानूनों से नहीं की जानी चाहिए।</span><span
                        className="en"><strong>Difference between National and Universal Morals:</strong> The moral
                        aspirations of a particular nation should not be equated with the moral laws of the
                        universe.</span></li>
                    <li><span className="hi">राजनीतिक क्षेत्र की स्वायत्तता: राजनीतिक यथार्थवाद अर्थशास्त्र या नैतिकता से
                        अलग, राजनीतिक क्षेत्र की स्वायत्तता को बनाए रखता है।</span><span className="en"><strong>Autonomy of
                          the Political Sphere:</strong> Political realism maintains the autonomy of the political
                        sphere, distinct from economics or ethics.</span></li>
                  </ul>
                  <h5><span className="hi">3. आलोचना</span><span className="en">3. Criticism</span></h5>
                  <p><span className="hi">जे. एन टिकनर जैसे नारीवादी विद्वान अत्यधिक मर्दाना और संघर्ष-उन्मुख होने के कारण
                      इसकी आलोचना करते हैं। नव-यथार्थवादी अंतर्राष्ट्रीय व्यवस्था की संरचना की अनदेखी करने के लिए इसकी
                      आलोचना करते हैं।</span><span className="en">Feminist scholars like J. Ann Tickner criticize it for
                      being overly masculine and conflict-oriented. Neo-realists criticize it for ignoring the structure
                      of the international system.</span></p>
                  <h5><span className="hi">4. निष्कर्ष</span><span className="en">4. Conclusion</span></h5>
                  <p><span className="hi">आलोचनाओं के बावजूद, मोर्गेंथाऊ के सिद्धांत सत्ता की राजनीति और राष्ट्रीय सुरक्षा
                      को समझने के लिए शुरुआती बिंदु बने हुए हैं।</span><span className="en">Despite criticisms, Morgenthau’s
                      principles remain the starting point for understanding power politics and national
                      security.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q2</span> <span className="hi">शास्त्रीय यथार्थवाद (मोर्गेंथाऊ) और
                    संरचनात्मक यथार्थवाद (वाल्ट्ज) के बीच अंतर बताएं।</span><span className="en">Differentiate between
                    Classical Realism (Morgenthau) and Structural Realism (Waltz).</span> <span className="qa-marks">[15
                    Marks]</span></summary>
                <div className="qa-content">
                  <h5><span className="hi">1 परिचय</span><span className="en">1. Introduction</span></h5>
                  <p><span className="hi">जबकि यथार्थवाद की दोनों शाखाएँ इस बात पर सहमत हैं कि राज्य प्राथमिक अभिनेता हैं और
                      अंतर्राष्ट्रीय प्रणाली अराजक है, वे राज्य के व्यवहार के कारण मौलिक रूप से भिन्न हैं।</span><span
                      className="en">While both branches of Realism agree that states are the primary actors and that the
                      international system is anarchic, they differ fundamentally on the <em>cause</em> of state
                      behavior.</span></p>
                  <h5><span className="hi">2. शास्त्रीय यथार्थवाद (मोर्गेंथाऊ)</span><span className="en">2. Classical Realism
                      (Morgenthau)</span></h5>
                  <ul>
                    <li><span className="hi">मूल कारण: मानव स्वभाव. राज्य आक्रामक तरीके से कार्य करते हैं क्योंकि मनुष्य में
                        सत्ता के लिए जन्मजात लालसा (एनिमस डोमिनैंडी) होती है।</span><span className="en"><strong>Root
                          Cause:</strong> Human Nature. States act aggressively because humans possess an innate lust
                        for power (animus dominandi).</span></li>
                    <li><span className="hi">लक्ष्य: शक्ति का अधिकतमीकरण. सत्ता अपने आप में एक साध्य है.</span><span
                        className="en"><strong>Goal:</strong> Maximization of power. Power is an end in itself.</span></li>
                    <li><span className="hi">फोकस: त्रुटिपूर्ण मानव स्वभाव और राज्य के नेताओं के निर्णय।</span><span
                        className="en"><strong>Focus:</strong> Flawed human nature and the decisions of state
                        leaders.</span></li>
                  </ul>
                  <h5><span className="hi">3. संरचनात्मक यथार्थवाद / नव-यथार्थवाद (वाल्ट्ज)</span><span className="en">3.
                      Structural Realism / Neo-Realism (Waltz)</span></h5>
                  <ul>
                    <li><span className="hi">मूल कारण: अंतर्राष्ट्रीय संरचना। वैश्विक व्यवस्था की अराजक संरचना (केंद्रीय
                        प्रवर्तक की कमी) के कारण राज्य आक्रामक तरीके से कार्य करते हैं।</span><span
                        className="en"><strong>Root Cause:</strong> International Structure. States act aggressively due to
                        the anarchic structure of the global system (lack of a central enforcer).</span></li>
                    <li><span className="hi">लक्ष्य: सुरक्षा को अधिकतम बनाना (रक्षात्मक यथार्थवाद)। सत्ता अस्तित्व सुनिश्चित
                        करने का एक साधन मात्र है।</span><span className="en"><strong>Goal:</strong> Maximization of security
                        (Defensive Realism). Power is just a means to ensure survival.</span></li>
                    <li><span className="hi">फोकस: सिस्टम में क्षमताओं का वितरण (द्विध्रुवीयता बनाम
                        बहुध्रुवीयता)।</span><span className="en"><strong>Focus:</strong> The distribution of capabilities
                        (bipolarity vs multipolarity) in the system.</span></li>
                  </ul>
                  <h5><span className="hi">4. निष्कर्ष</span><span className="en">4. Conclusion</span></h5>
                  <p><span className="hi">वाल्ट्ज ने "मानव स्वभाव" पर व्यक्तिपरक निर्भरता को हटाकर यथार्थवाद को और अधिक
                      वैज्ञानिक बना दिया, इसके बजाय इस पर ध्यान केंद्रित किया कि कैसे सिस्टम राज्यों को रक्षात्मक रूप से
                      कार्य करने के लिए मजबूर करता है, भले ही उनके नेता अच्छे हों या बुरे।</span><span className="en">Waltz
                      made realism more scientific by removing the subjective reliance on "human nature," focusing
                      instead on how the system forces states to act defensively, regardless of whether their leaders
                      are good or bad.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q3</span> <span className="hi">समकालीन बहुध्रुवीय विश्व में गुटनिरपेक्ष
                    आंदोलन (NAM) की प्रासंगिकता का विश्लेषण करें।</span><span className="en">Analyze the relevance of the
                    Non-Aligned Movement (NAM) in the contemporary multi-polar world.</span> <span className="qa-marks">[20
                    Marks]</span></summary>
                <div className="qa-content">
                  <h5><span className="hi">1 परिचय</span><span className="en">1. Introduction</span></h5>
                  <p><span className="hi">1961 (बेलग्रेड सम्मेलन) में गठित, NAM शीत युद्ध के दौरान अमेरिका और सोवियत गुटों
                      से स्वतंत्रता की मांग करने वाले विकासशील देशों का एक आंदोलन था। 1991 में शीत युद्ध की समाप्ति के
                      साथ, इसकी प्रासंगिकता पर भारी बहस हुई है।</span><span className="en">Formed in 1961 (Belgrade
                      Conference), NAM was a movement of developing nations seeking independence from the US and Soviet
                      blocs during the Cold War. With the end of the Cold War in 1991, its relevance has been heavily
                      debated.</span></p>
                  <h5><span className="hi">2. प्रासंगिकता में गिरावट के लिए तर्क</span><span className="en">2. Arguments for the
                      Decline of Relevance</span></h5>
                  <ul>
                    <li><span className="hi">द्विध्रुवीयता का अंत: चूँकि अब दो प्रतिद्वंद्वी महाशक्तियाँ नहीं हैं, इसलिए
                        "गुटनिरपेक्षता" का प्राथमिक तर्क अप्रचलित लगता है।</span><span className="en"><strong>End of
                          Bipolarity:</strong> Since there are no longer two rival superpowers, the primary logic of
                        "non-alignment" seems obsolete.</span></li>
                    <li><span className="hi">आर्थिक वैश्वीकरण: विकासशील देश आर्थिक रूप से पश्चिम के साथ काफी हद तक एकीकृत
                        हैं, जिससे राजनीतिक गुटनिरपेक्षता कठिन हो गई है।</span><span className="en"><strong>Economic
                          Globalization:</strong> Developing nations are heavily integrated with the West economically,
                        making political non-alignment difficult.</span></li>
                    <li><span className="hi">आंतरिक संघर्ष: NAM देश अक्सर आपस में लड़ते हैं (उदाहरण के लिए, ईरान-इराक
                        युद्ध), जिससे सामूहिक एकजुटता कमजोर होती है।</span><span className="en"><strong>Internal
                          Conflicts:</strong> NAM countries often fight among themselves (e.g., Iran-Iraq war),
                        weakening collective solidarity.</span></li>
                  </ul>
                  <h5><span className="hi">3. निरंतर प्रासंगिकता के लिए तर्क</span><span className="en">3. Arguments for
                      Continued Relevance</span></h5>
                  <ul>
                    <li><span className="hi">वॉयस ऑफ द ग्लोबल साउथ: 120 सदस्यों के साथ, यह संयुक्त राष्ट्र के बाहर सबसे बड़ा
                        समूह बना हुआ है, जो तीसरी दुनिया के लिए एक महत्वपूर्ण मंच के रूप में कार्य करता है।</span><span
                        className="en"><strong>Voice of the Global South:</strong> With 120 members, it remains the largest
                        grouping outside the UN, acting as a crucial platform for the Third World.</span></li>
                    <li><span className="hi">साम्राज्यवाद के नए रूप: नव-उपनिवेशवाद, अनुचित डब्ल्यूटीओ व्यापार प्रथाओं और
                        पश्चिमी आधिपत्य का विरोध करने की आवश्यकता है।</span><span className="en"><strong>New Forms of
                          Imperialism:</strong> It is needed to resist neo-colonialism, unfair WTO trade practices, and
                        Western hegemony.</span></li>
                    <li><span className="hi">समसामयिक मुद्दे: NAM जलवायु परिवर्तन (CBDR), आतंकवाद और संयुक्त राष्ट्र सुरक्षा
                        परिषद सुधारों की मांग जैसी नई चुनौतियों पर ध्यान केंद्रित करता है।</span><span
                        className="en"><strong>Contemporary Issues:</strong> NAM focuses on new challenges like climate
                        change (CBDR), terrorism, and the demand for UN Security Council reforms.</span></li>
                    <li><span className="hi">सामरिक स्वायत्तता: बहुध्रुवीय दुनिया में भी, राष्ट्रों को नई प्रतिद्वंद्विता
                        (उदाहरण के लिए, अमेरिका बनाम चीन) के बीच संघर्ष में घसीटे जाने से बचने के लिए एक ढांचे की
                        आवश्यकता होती है।</span><span className="en"><strong>Strategic Autonomy:</strong> Even in a
                        multipolar world, nations need a framework to avoid being dragged into conflicts between new
                        rivalries (e.g., US vs China).</span></li>
                  </ul>
                  <h5><span className="hi">4. निष्कर्ष</span><span className="en">4. Conclusion</span></h5>
                  <p><span className="hi">जबकि मूल शीत युद्ध का संदर्भ चला गया है, 'रणनीतिक स्वायत्तता' और एक न्यायसंगत
                      वैश्विक व्यवस्था की अंतर्निहित इच्छा एनएएम (या गुटनिरपेक्षता का विचार) को आज अत्यधिक प्रासंगिक
                      बनाती है।</span><span className="en">While the original Cold War context is gone, the underlying
                      desire for 'Strategic Autonomy' and a just global order makes NAM (or the idea of non-alignment)
                      highly relevant today.</span></p>
                </div>
              </details>

              <div className="info-box" style={{"borderLeftColor": "#f59e0b"}}>
                <h4>🎓 UGC NET Expert Tips</h4>
                <p>Match the book to the thinker: *Politics Among Nations* (Morgenthau), *Theory of International
                  Politics* (Waltz), *The Tragedy of Great Power Politics* (Mearsheimer - Offensive Realism).</p>
              </div>
            </div>

            {/**/}
            <h4 className="unit-title" style={{"color": "#6366f1"}}><Network size={18} /> Public Administration</h4>
            <div className="content-box">
              <h5 className="qa-section-title"><Zap size={18} style={{"color": "#f59e0b"}} /> Short Questions (2-5
                Marks)</h5>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q1</span> <span className="hi">'नागफनी प्रभाव' क्या है?</span><span
                    className="en">What is the 'Hawthorne Effect'?</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">वेस्टर्न इलेक्ट्रिक (1920 के दशक) में एल्टन मेयो के प्रयोगों से व्युत्पन्न, यह
                      बताता है कि श्रमिकों की उत्पादकता न केवल भौतिक स्थितियों के कारण बढ़ती है, बल्कि इसलिए भी क्योंकि
                      वे महसूस करते हैं कि उन्हें देखा जाता है, महत्व दिया जाता है और वे एक एकजुट सामाजिक समूह का हिस्सा
                      हैं। इसने मानवीय संबंध दृष्टिकोण को जन्म दिया।</span><span className="en">Derived from <strong>Elton
                        Mayo's</strong> experiments at Western Electric (1920s), it states that workers' productivity
                      increases not just due to physical conditions, but because they feel observed, valued, and part of
                      a cohesive social group. It birthed the Human Relations approach.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q2</span> <span className="hi">'बद्ध तर्कसंगतता' को परिभाषित
                    करें।</span><span className="en">Define 'Bounded Rationality'.</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">हर्बर्ट साइमन की अवधारणा कि मनुष्य पूर्णतः तर्कसंगत नहीं हैं। प्रशासन में निर्णय
                      लेने वालों के पास पूरी जानकारी, समय और संज्ञानात्मक क्षमता का अभाव होता है। इसलिए, "इष्टतम" विकल्प
                      चुनने के बजाय, वे पहला स्वीकार्य विकल्प चुनते हैं - एक प्रक्रिया जिसे "संतोषजनक" कहा जाता
                      है।</span><span className="en"><strong>Herbert Simon's</strong> concept that humans are not perfectly
                      rational. In administration, decision-makers lack complete information, time, and cognitive
                      capacity. Therefore, instead of making the "optimal" choice, they choose the first acceptable
                      option—a process called <strong>"satisficing."</strong></span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary> What are the features of Weber's Ideal Bureaucracy?</summary>
                <div className="qa-content">
                  <p><span className="hi">मैक्स वेबर ने इसे एक कानूनी-तर्कसंगत संगठन के रूप में पहचाना, जिसकी विशेषता है:
                      सख्त पदानुक्रम, श्रम की विशेषज्ञता, कठोर औपचारिक नियम, अवैयक्तिकता (पूर्वाग्रह के बिना काम करना),
                      और तकनीकी योग्यता/योग्यता के आधार पर भर्ती।</span><span className="en">Max Weber identified it as a
                      legal-rational organization characterized by: strict hierarchy, specialization of labor, rigid
                      formal rules, impersonality (working without bias), and recruitment based on technical
                      qualifications/merit.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q4</span> <span className="hi">'प्रिज़्मेटिक-साला' मॉडल क्या है?</span><span
                    className="en">What is the 'Prismatic-Sala' model?</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">विकासशील (संक्रमणकालीन) समाजों में प्रशासन की व्याख्या करने के लिए एफ.डब्ल्यू.
                      रिग्स द्वारा बनाया गया। इसमें 'औपचारिकता' (कानून और वास्तविकता के बीच का अंतर), 'विषमता' (आधुनिक
                      और पारंपरिक प्रणालियों का मिश्रण), और 'ओवरलैपिंग' (पारंपरिक परिवार/जाति संबंधों से अत्यधिक
                      प्रभावित आधुनिक संरचनाएं) शामिल हैं।</span><span className="en">Created by <strong>F.W. Riggs</strong>
                      to explain administration in developing (transitional) societies. It features 'Formalism' (gap
                      between law and reality), 'Heterogeneity' (mix of modern and traditional systems), and
                      'Overlapping' (modern structures heavily influenced by traditional family/caste ties).</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q5</span> <span className="hi">'शून्य-आधारित बजट' (ZBB) को परिभाषित
                    करें।</span><span className="en">Define 'Zero-Based Budgeting' (ZBB).</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">1970 में पीटर पायहर द्वारा विकसित, ZBB एक बजट पद्धति है जहां प्रत्येक नई अवधि के
                      लिए सभी खर्चों को उचित ठहराया जाना चाहिए। पिछले वर्ष के बजट को समायोजित करने वाले पारंपरिक बजट के
                      विपरीत, ZBB "शून्य आधार" से शुरू होता है, जो विभागों को यह साबित करने के लिए मजबूर करता है कि
                      उन्हें धन की आवश्यकता क्यों है।</span><span className="en">Developed by Peter Pyhrr in 1970, ZBB is a
                      budgeting method where all expenses must be justified for each new period. Unlike traditional
                      budgets that adjust the previous year's budget, ZBB starts from a "zero base," forcing departments
                      to prove why they need money.</span></p>
                </div>
              </details>

              <h5 className="qa-section-title" style={{"marginTop": "20px"}}><PenTool size={18} style={{"color": "#3b82f6"}} /> Long Questions (15-20 Marks)</h5>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q1</span> <span className="hi">लोक प्रशासन में हर्बर्ट साइमन के निर्णय लेने
                    के दृष्टिकोण का मूल्यांकन करें।</span><span className="en">Evaluate Herbert Simon's Decision-Making
                    Approach in Public Administration.</span> <span className="qa-marks">[20 Marks]</span></summary>
                <div className="qa-content">
                  <h5><span className="hi">1 परिचय</span><span className="en">1. Introduction</span></h5>
                  <p><span className="hi">हर्बर्ट साइमन (नोबेल पुरस्कार विजेता) ने "प्रशासन के सिद्धांतों" (जिसे उन्होंने
                      कहावतें कहा) से "निर्णय लेने" की प्रक्रिया पर ध्यान केंद्रित करके लोक प्रशासन में क्रांति ला
                      दी।</span><span className="en">Herbert Simon (Nobel Laureate) revolutionized Public Administration by
                      shifting the focus from "principles of administration" (which he called proverbs) to the process
                      of "decision-making."</span></p>
                  <h5><span className="hi">2. 'आर्थिक आदमी' की अस्वीकृति</span><span className="en">2. Rejection of 'Economic
                      Man'</span></h5>
                  <p><span className="hi">शास्त्रीय सिद्धांतकार 'आर्थिक मनुष्य' में विश्वास करते थे जो पूरी तरह तर्कसंगत है
                      और उपयोगिता को अधिकतम करता है। साइमन ने तर्क दिया कि मानव बुद्धि और उपलब्ध जानकारी की सीमाओं के
                      कारण वास्तव में यह असंभव है।</span><span className="en">Classical theorists believed in the 'Economic
                      Man' who is perfectly rational and maximizes utility. Simon argued this is impossible in reality
                      due to limits on human intelligence and available information.</span></p>
                  <h5><span className="hi">3. बंधी हुई तर्कसंगतता और संतुष्टिदायक</span><span className="en">3. Bounded
                      Rationality &amp; Satisficing</span></h5>
                  <ul>
                    <li><span className="hi">बंधी हुई तर्कसंगतता: 'प्रशासनिक मनुष्य' की तर्कसंगतता संज्ञानात्मक,
                        मनोवैज्ञानिक और पर्यावरणीय सीमाओं से बंधी होती है।</span><span className="en"><strong>Bounded
                          Rationality:</strong> The rationality of the 'Administrative Man' is bounded by cognitive,
                        psychological, and environmental limits.</span></li>
                    <li><span className="hi">संतुष्टिदायक: 'संतुष्ट' और 'पर्याप्त' का संयोजन। प्रशासक संपूर्ण "सर्वोत्तम"
                        समाधान खोजने में अनंत समय बर्बाद करने के बजाय ऐसे समाधान की तलाश करते हैं जो "काफी अच्छा"
                        हो।</span><span className="en"><strong>Satisficing:</strong> A combination of 'satisfy' and
                        'suffice'. Administrators look for a solution that is "good enough" rather than spending
                        infinite time finding the absolute "best" solution.</span></li>
                  </ul>
                  <h5><span className="hi">4. निर्णय लेने की प्रक्रिया</span><span className="en">4. The Decision-Making
                      Process</span></h5>
                  <p><span className="hi">साइमन ने तीन चरणों की पहचान की:</span><span className="en">Simon identified three
                      stages:</span></p>
                  <ul>
                    <li><span className="hi">खुफिया गतिविधि: निर्णय के लिए आवश्यक परिस्थितियों के लिए वातावरण की खोज
                        करना।</span><span className="en"><strong>Intelligence Activity:</strong> Searching the environment
                        for conditions calling for a decision.</span></li>
                    <li><span className="hi">डिज़ाइन गतिविधि: कार्रवाई के संभावित पाठ्यक्रमों का आविष्कार, विकास और विश्लेषण
                        करना।</span><span className="en"><strong>Design Activity:</strong> Inventing, developing, and
                        analyzing possible courses of action.</span></li>
                    <li><span className="hi">चयन गतिविधि: उपलब्ध विकल्पों में से एक विशिष्ट विकल्प का चयन करना।</span><span
                        className="en"><strong>Choice Activity:</strong> Selecting a specific alternative from those
                        available.</span></li>
                  </ul>
                  <h5><span className="hi">5। उपसंहार</span><span className="en">5. Conclusion</span></h5>
                  <p><span className="hi">साइमन ने प्रशासनिक संगठन वास्तव में कैसे कार्य करते हैं, इसकी अत्यधिक यथार्थवादी,
                      व्यवहारिक और वैज्ञानिक समझ प्रदान की, जिससे वह आधुनिक प्रशासनिक सिद्धांत के अग्रणी बन
                      गए।</span><span className="en">Simon provided a highly realistic, behavioral, and scientific
                      understanding of how administrative organizations actually function, making him a pioneer of
                      modern administrative theory.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q2</span> <span className="hi">मैक्स वेबर के नौकरशाही के सिद्धांत का
                    आलोचनात्मक विश्लेषण करें। रॉबर्ट मेर्टन की इसकी आलोचना पर चर्चा करें।</span><span
                    className="en">Critically analyze Max Weber’s theory of Bureaucracy. Discuss Robert Merton's critique of
                    it.</span> <span className="qa-marks">[20 Marks]</span></summary>
                <div className="qa-content">
                  <h5><span className="hi">1 परिचय</span><span className="en">1. Introduction</span></h5>
                  <p><span className="hi">जर्मन समाजशास्त्री मैक्स वेबर ने नौकरशाही के "आदर्श प्रकार" को 'कानूनी-तर्कसंगत'
                      अधिकार पर आधारित संगठन के सबसे कुशल, तर्कसंगत और श्रेष्ठ रूप के रूप में प्रस्तुत किया।</span><span
                      className="en">Max Weber, a German sociologist, presented the "Ideal Type" of bureaucracy as the most
                      efficient, rational, and superior form of organization based on 'legal-rational' authority.</span>
                  </p>
                  <h5><span className="hi">2. वेबेरियन नौकरशाही की विशेषताएँ</span><span className="en">2. Characteristics of
                      Weberian Bureaucracy</span></h5>
                  <ul>
                    <li><span className="hi">पदानुक्रम: आदेश की एक स्पष्ट श्रृंखला (ऊपर से नीचे)।</span><span
                        className="en"><strong>Hierarchy:</strong> A clear chain of command (top-down).</span></li>
                    <li><span className="hi">विशेषज्ञता: विशेषज्ञता के आधार पर श्रम का स्पष्ट विभाजन।</span><span
                        className="en"><strong>Specialization:</strong> Clear division of labor based on expertise.</span>
                    </li>
                    <li><span className="hi">औपचारिक नियम: संचालन लिखित दस्तावेज़ों द्वारा नियंत्रित होते हैं, जो निरंतरता
                        सुनिश्चित करते हैं।</span><span className="en"><strong>Formal Rules:</strong> Operations governed by
                        written documents, ensuring consistency.</span></li>
                    <li><strong>Impersonality:</strong> Officials act without hatred or passion, treating everyone
                      equally according to the law.</li>
                    <li><span className="hi">कैरियर प्रणाली: तकनीकी योग्यता के आधार पर रोजगार, कार्यकाल और पेंशन की
                        पेशकश।</span><span className="en"><strong>Career System:</strong> Employment based on technical
                        qualifications, offering tenure and pension.</span></li>
                  </ul>
                  <h5><span className="hi">3. रॉबर्ट मेर्टन की आलोचना (नौकरशाही की ख़राबियाँ)</span><span className="en">3.
                      Robert Merton's Critique (Dysfunctions of Bureaucracy)</span></h5>
                  <p><span className="hi">मेर्टन ने तर्क दिया कि वेबर ने अधिकारियों पर नौकरशाही के नकारात्मक मनोवैज्ञानिक
                      प्रभावों को नजरअंदाज कर दिया।</span><span className="en">Merton argued that Weber ignored the negative
                      psychological effects of bureaucracy on the officials.</span></p>
                  <ul>
                    <li><span className="hi">प्रशिक्षित अक्षमता: अधिकारी नियमों का पालन करने के लिए इतने कठोर रूप से
                        प्रशिक्षित हो जाते हैं कि वे बदलती या अनोखी परिस्थितियों के अनुकूल नहीं बन पाते।</span><span
                        className="en"><strong>Trained Incapacity:</strong> Officials become so rigidly trained to follow
                        rules that they cannot adapt to changing or unique situations.</span></li>
                    <li><span className="hi">लक्ष्य विस्थापन: नियमों का पालन संगठन के वास्तविक लक्ष्यों (क्लासिक "रेड टेप")
                        को प्राप्त करने के साधन के बजाय अपने आप में एक लक्ष्य बन जाता है।</span><span
                        className="en"><strong>Goal Displacement:</strong> Following the rules becomes an end in itself,
                        rather than a means to achieve the organization's actual goals (classic "Red Tape").</span></li>
                    <li><span className="hi">अवैयक्तिकता अहंकार बन जाती है: व्यक्तिगत स्पर्श की कमी प्रशासन को नागरिकों के
                        प्रति अलग और असंवेदनशील बना देती है।</span><span className="en"><strong>Impersonality becomes
                          Arrogance:</strong> The lack of personal touch makes the administration appear aloof and
                        insensitive to citizens.</span></li>
                  </ul>
                  <h5><span className="hi">4. निष्कर्ष</span><span className="en">4. Conclusion</span></h5>
                  <p><span className="hi">जबकि वेबर ने आधुनिक प्रशासन के लिए खाका प्रदान किया, मेर्टन जैसे आलोचकों ने
                      नौकरशाही विकृति को रोकने के लिए प्रशासनिक लचीलेपन और मानवीय संबंधों की आवश्यकता पर प्रकाश
                      डाला।</span><span className="en">While Weber provided the blueprint for modern administration, critics
                      like Merton highlight the need for administrative flexibility and human relations to prevent
                      bureaucratic pathologies.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q3</span> <span className="hi">नवीन लोक प्रशासन (एनपीए) की अवधारणा, विकास और
                    मूल सिद्धांतों की जांच करें।</span><span className="en">Examine the concept, evolution, and core
                    principles of New Public Administration (NPA).</span> <span className="qa-marks">[15 Marks]</span>
                </summary>
                <div className="qa-content">
                  <h5><span className="hi">1 परिचय</span><span className="en">1. Introduction</span></h5>
                  <p><span className="hi">पारंपरिक लोक प्रशासन दक्षता, अर्थव्यवस्था और मूल्य-तटस्थता पर केंद्रित था। 1960 के
                      दशक के उत्तरार्ध में, जब अमेरिका में सामाजिक उथल-पुथल का दौर था, विद्वानों ने तर्क दिया कि प्रशासन
                      को सामाजिक असमानताओं को दूर करना चाहिए। इससे न्यू पब्लिक एडमिनिस्ट्रेशन (एनपीए) का जन्म
                      हुआ।</span><span className="en">Traditional public administration focused on efficiency, economy, and
                      value-neutrality. In the late 1960s, a period of social turmoil in the US, scholars argued that
                      administration must address social inequalities. This led to the New Public Administration
                      (NPA).</span></p>
                  <h5><span className="hi">2. विकास (मिनोब्रुक सम्मेलन)</span><span className="en">2. Evolution (Minnowbrook
                      Conference)</span></h5>
                  <p><span className="hi">एनपीए ड्वाइट वाल्डो और जॉर्ज फ्रेडरिकसन के नेतृत्व में प्रथम मिनोब्रुक सम्मेलन
                      (1968) से प्रमुखता से उभरा, जिसने अनुशासन को फिर से परिभाषित करने के लिए युवा विद्वानों को एक साथ
                      लाया।</span><span className="en">NPA emerged prominently from the First Minnowbrook Conference (1968),
                      led by Dwight Waldo and George Frederickson, bringing young scholars together to redefine the
                      discipline.</span></p>
                  <h5><span className="hi">3. एनपीए के मुख्य विषय</span><span className="en">3. Core Themes of NPA</span></h5>
                  <ul>
                    <li><span className="hi">प्रासंगिकता: प्रशासन को प्रासंगिक, वास्तविक दुनिया की समस्याओं (गरीबी, नस्लवाद,
                        असमानता) से निपटना चाहिए।</span><span className="en"><strong>Relevance:</strong> Administration must
                        deal with relevant, real-world problems (poverty, racism, inequality).</span></li>
                    <li><span className="hi">मूल्य: "मूल्य-तटस्थता" की अस्वीकृति। प्रशासकों को वंचितों की वकालत करनी
                        चाहिए।</span><span className="en"><strong>Values:</strong> Rejection of "value-neutrality."
                        Administrators should advocate for the disadvantaged.</span></li>
                    <li><span className="hi">सामाजिक समानता: प्राथमिक लक्ष्य केवल दक्षता नहीं होना चाहिए, बल्कि यह सुनिश्चित
                        करना चाहिए कि सामाजिक असमानताओं को कम करने के लिए सार्वजनिक सेवाओं को समान रूप से वितरित किया
                        जाए।</span><span className="en"><strong>Social Equity:</strong> The primary goal should not just be
                        efficiency, but ensuring that public services are distributed equitably to reduce social
                        disparities.</span></li>
                    <li><span className="hi">परिवर्तन: प्रशासन को यथास्थिति को चुनौती देते हुए सामाजिक परिवर्तन के एक सक्रिय
                        एजेंट के रूप में कार्य करना चाहिए।</span><span className="en"><strong>Change:</strong>
                        Administration should act as an active agent of social change, challenging the status
                        quo.</span></li>
                    <li><span className="hi">ग्राहक-फोकस: नौकरशाही नियमों का आँख बंद करके पालन करने के बजाय नागरिकों
                        (ग्राहकों) को प्रभावी ढंग से सेवा देना।</span><span className="en"><strong>Client-Focus:</strong>
                        Serving the citizens (clients) effectively rather than blindly following bureaucratic
                        rules.</span></li>
                  </ul>
                  <h5><span className="hi">4. निष्कर्ष</span><span className="en">4. Conclusion</span></h5>
                  <p><span className="hi">एनपीए ने अनुशासन में एक मजबूत नैतिक और नैतिक आयाम डाला। इसने प्रशासक की छवि को एक
                      तटस्थ, रोबोटिक कार्यान्वयनकर्ता से सामाजिक न्याय के एक सक्रिय चैंपियन में बदल दिया।</span><span
                      className="en">NPA injected a strong moral and ethical dimension into the discipline. It transformed
                      the image of the administrator from a neutral, robotic implementer into a proactive champion of
                      social justice.</span></p>
                </div>
              </details>

              <div className="info-box" style={{"borderLeftColor": "#f59e0b"}}>
                <h4>🎓 UGC NET Expert Tips</h4>
                <p>Keywords mapping: "Satisficing" = Simon. "Prismatic/Sala" = Riggs. "Scientific Management" = Taylor.
                  "Social Equity/Minnowbrook" = NPA (Frederickson).</p>
              </div>
            </div>

            {/**/}
            <h4 className="unit-title" style={{"color": "#6366f1"}}><Scale size={18} /> Indian Political System
              &amp; Western Thought</h4>
            <div className="content-box">
              <h5 className="qa-section-title"><Zap size={18} style={{"color": "#f59e0b"}} /> Short Questions (2-5
                Marks)</h5>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q1</span> <span className="hi">'बुनियादी संरचना सिद्धांत' क्या
                    है?</span><span className="en">What is the 'Basic Structure Doctrine'?</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">ऐतिहासिक केशवानंद भारती मामले (1973) में सर्वोच्च न्यायालय द्वारा स्थापित। यह संसद
                      की संशोधन शक्ति (अनुच्छेद 368) को सीमित करता है, जिसमें कहा गया है कि संसद संविधान की मूलभूत
                      विशेषताओं (जैसे धर्मनिरपेक्षता, संघवाद, न्यायिक समीक्षा) को नहीं बदल सकती है।</span><span
                      className="en">Established by the Supreme Court in the landmark <strong>Kesavananda Bharati case
                        (1973)</strong>. It limits Parliament's amending power (Art 368), stating that Parliament cannot
                      alter the fundamental features of the Constitution (like secularism, federalism, judicial
                      review).</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q2</span> <span className="hi">'न्यायिक सक्रियता' को परिभाषित
                    करें।</span><span className="en">Define 'Judicial Activism'.</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">नागरिकों के अधिकारों की रक्षा करने और समाज में न्याय को बढ़ावा देने में
                      न्यायपालिका द्वारा निभाई गई सक्रिय भूमिका, अक्सर कार्यपालिका या विधायिका के डोमेन में कदम रखती है।
                      जनहित याचिका (पीआईएल) इसका प्राथमिक उपकरण है।</span><span className="en">The proactive role played by
                      the judiciary in protecting the rights of citizens and promoting justice in society, often
                      stepping into the domains of the executive or legislature. Public Interest Litigation (PIL) is its
                      primary tool.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q3</span> <span className="hi">अरस्तू का राज्य का वर्गीकरण क्या
                    है?</span><span className="en">What is Aristotle's classification of the State?</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">उन्होंने राज्यों को दो मानदंडों के आधार पर वर्गीकृत किया: शासकों की संख्या, और
                      उनके इरादे (शुद्ध बनाम भ्रष्ट)। 1 का नियम: राजशाही (शुद्ध) / अत्याचारी (भ्रष्ट) कुछ का नियम:
                      अभिजात वर्ग / कुलीनतंत्र, कई का नियम: राजनीति / लोकतंत्र।</span><span className="en">He classified
                      states based on two criteria: the number of rulers, and their intent (pure vs. corrupt).<br />Rule
                      of 1: Monarchy (Pure) / Tyranny (Corrupt)<br />Rule of Few: Aristocracy / Oligarchy<br />Rule of Many:
                      Polity / Democracy.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q4</span> <span className="hi">जे.एस. क्या है? मिल का 'हानिकारक
                    सिद्धांत'?</span><span className="en">What is J.S. Mill's 'Harm Principle'?</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">यह सिद्धांत कि सत्ता का प्रयोग सभ्य समुदाय के किसी भी सदस्य पर उसकी इच्छा के
                      विरुद्ध केवल दूसरों को नुकसान पहुंचाने के लिए ही किया जा सकता है। व्यक्ति अपने शरीर और मन पर
                      संप्रभु है।</span><span className="en">The principle that power can only be rightfully exercised over
                      any member of a civilized community against his will to prevent harm to others. The individual is
                      sovereign over his own body and mind.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q5</span> <span className="hi">मार्क्स का 'ऐतिहासिक भौतिकवाद' क्या
                    है?</span><span className="en">What is Marx's 'Historical Materialism'?</span> </summary>
                <div className="qa-content">
                  <p><span className="hi">यह सिद्धांत कि आर्थिक आधार (उत्पादन की शक्तियाँ और संबंध) वैचारिक अधिरचना (कानून,
                      राजनीति, धर्म) को निर्धारित करता है। इतिहास भौतिक परिस्थितियों से प्रेरित वर्ग संघर्षों के माध्यम
                      से विकसित होता है, जो अंततः साम्यवाद की ओर ले जाता है।</span><span className="en">The theory that the
                      economic base (forces and relations of production) determines the ideological superstructure
                      (laws, politics, religion). History evolves through class struggles driven by material conditions,
                      leading eventually to Communism.</span></p>
                </div>
              </details>

              <h5 className="qa-section-title" style={{"marginTop": "20px"}}><PenTool size={18} style={{"color": "#3b82f6"}} /> Long Questions (15-20 Marks)</h5>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q1</span> <span className="hi">"भारतीय संविधान स्वरूप में संघीय लेकिन भावना
                    में एकात्मक है।" चर्चा करना।</span><span className="en">"The Indian Constitution is federal in form but
                    unitary in spirit." Discuss.</span> <span className="qa-marks">[20 Marks]</span></summary>
                <div className="qa-content">
                  <h5><span className="hi">1 परिचय</span><span className="en">1. Introduction</span></h5>
                  <p><span className="hi">के.सी. व्हेयर ने भारत को "अर्ध-संघीय" राज्य के रूप में वर्णित किया। जबकि भारतीय
                      संविधान एक संघीय ढांचे की स्थापना करता है, इसमें मजबूत केंद्रीकरण की प्रवृत्ति शामिल है, जो इसे
                      आत्मा में एकात्मक बनाती है।</span><span className="en">K.C. Wheare described India as a
                      "quasi-federal" state. While the Indian Constitution establishes a federal structure, it contains
                      strong centralizing tendencies, making it unitary in spirit.</span></p>
                  <h5><span className="hi">2. संघीय विशेषताएँ (प्रपत्र)</span><span className="en">2. Federal Features
                      (Form)</span></h5>
                  <ul>
                    <li><span className="hi">दोहरी राजनीति: संघ और राज्य सरकारों का अस्तित्व।</span><span
                        className="en"><strong>Dual Polity:</strong> Existence of Union and State governments.</span></li>
                    <li><span className="hi">लिखित एवं सर्वोच्च संविधान: शक्तियों को रेखांकित करने वाला देश का सर्वोच्च
                        कानून।</span><span className="en"><strong>Written &amp; Supreme Constitution:</strong> The supreme
                        law of the land outlining powers.</span></li>
                    <li><span className="hi">शक्तियों का विभाजन: 7वीं अनुसूची (संघ, राज्य, समवर्ती सूची) में स्पष्ट रूप से
                        सीमांकित किया गया है।</span><span className="en"><strong>Division of Powers:</strong> Clearly
                        demarcated in the 7th Schedule (Union, State, Concurrent lists).</span></li>
                    <li><span className="hi">स्वतंत्र न्यायपालिका: सर्वोच्च न्यायालय केंद्र-राज्य विवादों में मध्यस्थ के रूप
                        में कार्य करता है।</span><span className="en"><strong>Independent Judiciary:</strong> Supreme Court
                        acts as the arbiter in Centre-State disputes.</span></li>
                  </ul>
                  <h5><span className="hi">3. एकात्मक विशेषताएं (आत्मा)</span><span className="en">3. Unitary Features
                      (Spirit)</span></h5>
                  <ul>
                    <li><span className="hi">मजबूत केंद्र: अवशिष्ट शक्तियां केंद्र के पास रहती हैं। संघ सूची में अधिक और
                        महत्वपूर्ण विषय हैं।</span><span className="en"><strong>Strong Centre:</strong> Residuary powers
                        rest with the Centre. The Union List has more and weightier subjects.</span></li>
                    <li><span className="hi">आपातकालीन प्रावधान: आपात्कालीन स्थिति (अनुच्छेद 352, 356) के दौरान, संघीय ढांचा
                        औपचारिक संशोधन के बिना पूरी तरह से एकात्मक में परिवर्तित हो जाता है।</span><span
                        className="en"><strong>Emergency Provisions:</strong> During emergencies (Art 352, 356), the federal
                        structure converts entirely into a unitary one without formal amendment.</span></li>
                    <li><span className="hi">एकल नागरिकता और संविधान: अमेरिका के विपरीत, राज्यों के पास अपना स्वयं का
                        संविधान या नागरिकता नहीं है।</span><span className="en"><strong>Single Citizenship &amp;
                          Constitution:</strong> Unlike the US, states do not have their own constitutions or
                        citizenship.</span></li>
                    <li><span className="hi">राज्यपालों की नियुक्ति: केंद्र राज्यपालों की नियुक्ति करता है जो राज्य के
                        विधेयकों को राष्ट्रपति के विचार के लिए आरक्षित कर सकते हैं।</span><span
                        className="en"><strong>Appointment of Governors:</strong> The Centre appoints Governors who can
                        reserve state bills for the President's consideration.</span></li>
                    <li><span className="hi">अखिल भारतीय सेवाएँ: आईएएस, आईपीएस अधिकारियों की भर्ती केंद्र द्वारा की जाती है,
                        लेकिन वे राज्यों में काम करते हैं, जिससे केंद्रीय नियंत्रण की अनुमति मिलती है।</span><span
                        className="en"><strong>All-India Services:</strong> IAS, IPS officers are recruited by the Centre
                        but serve in states, allowing central control.</span></li>
                  </ul>
                  <h5><span className="hi">4. निष्कर्ष</span><span className="en">4. Conclusion</span></h5>
                  <p><span className="hi">जैसा कि डॉ. बी.आर. अंबेडकर ने कहा, भारतीय संविधान देश की अनूठी जरूरतों को पूरा
                      करने के लिए तैयार किया गया है - यह देश की अखंडता की रक्षा के लिए सामान्य समय में संघात्मक रूप से
                      और संकट के दौरान एकात्मक रूप से कार्य करता है।</span><span className="en">As Dr. B.R. Ambedkar noted,
                      the Indian Constitution is tailored to meet the country's unique needs—it functions federally in
                      normal times and unitarily during crises to protect the nation's integrity.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q2</span> <span className="hi">'द प्रिंस' में उल्लिखित एक शासक को मैकियावेली
                    की सलाह का विश्लेषण करें। उन्हें प्रथम आधुनिक राजनीतिक विचारक क्यों माना जाता है?</span><span
                    className="en">Analyze Machiavelli's advice to a ruler as outlined in 'The Prince'. Why is he considered
                    the first modern political thinker?</span> <span className="qa-marks">[20 Marks]</span></summary>
                <div className="qa-content">
                  <h5><span className="hi">1 परिचय</span><span className="en">1. Introduction</span></h5>
                  <p><span className="hi">निकोलो मैकियावेली ने 'द प्रिंस' (1513) को एक शासक के लिए सत्ता हासिल करने, बनाए
                      रखने और विस्तार करने के लिए एक व्यावहारिक मार्गदर्शक के रूप में लिखा था। यह मध्यकालीन आदर्शवाद से
                      आमूल परिवर्तन का प्रतीक है।</span><span className="en">Niccolò Machiavelli wrote <em>'The Prince'
                        (1513)</em> as a practical guide for a ruler to acquire, maintain, and expand power. It marks a
                      radical departure from medieval idealism.</span></p>
                  <h5><span className="hi">2. शासक को मुख्य सलाह</span><span className="en">2. Key Advice to the Ruler</span>
                  </h5>
                  <ul>
                    <li><span className="hi">राजनीति और नैतिकता का पृथक्करण: एक राजकुमार को पारंपरिक ईसाई नैतिकता से बंधा
                        नहीं होना चाहिए। "अंत माध्यम को सही ठहराता है।" यदि राज्य सुरक्षित है तो साधन सदैव सम्माननीय
                        समझे जायेंगे।</span><span className="en"><strong>Separation of Politics and Morality:</strong> A
                        Prince must not be bound by traditional Christian ethics. "The end justifies the means." If the
                        state is preserved, the means will always be judged honorable.</span></li>
                    <li><span className="hi">शेर और लोमड़ी: एक शासक के पास शेर की ताकत (भेड़ियों को डराने के लिए) और लोमड़ी
                        की चालाक (जाल को पहचानने के लिए) होनी चाहिए।</span><span className="en"><strong>Lion and the
                          Fox:</strong> A ruler must possess the strength of a lion (to frighten wolves) and the cunning
                        of a fox (to recognize traps).</span></li>
                    <li><span className="hi">प्यार करने से डरना बेहतर है: प्यार अस्थिर है और दायित्व पर आधारित है, जिसे
                        पुरुष तब तोड़ देते हैं जब यह उनके लिए उपयुक्त होता है। दण्ड के भय से भय बना रहता है, जो कभी असफल
                        नहीं होता। हालाँकि, राजकुमार को नफरत होने से बचना चाहिए (संपत्ति जब्त न करके)।</span><span
                        className="en"><strong>Better to be Feared than Loved:</strong> Love is fickle and based on
                        obligation, which men break when it suits them. Fear is maintained by the dread of punishment,
                        which never fails. However, the Prince must avoid being hated (by not confiscating
                        property).</span></li>
                    <li><span className="hi">एक उपकरण के रूप में धर्म: राजकुमार को धार्मिक दिखना चाहिए, क्योंकि धर्म राज्य
                        को एकजुट करने और जनता को नियंत्रित करने का एक शक्तिशाली उपकरण है।</span><span
                        className="en"><strong>Religion as a Tool:</strong> The Prince should appear religious, as religion
                        is a powerful tool to unite the state and control the masses.</span></li>
                  </ul>
                  <h5><span className="hi">3. प्रथम आधुनिक विचारक क्यों?</span><span className="en">3. Why the First Modern
                      Thinker?</span></h5>
                  <ul>
                    <li><span className="hi">उन्होंने मध्यकालीन धर्मशास्त्र और दैवीय अधिकार सिद्धांत को अस्वीकार कर
                        दिया।</span><span className="en">He rejected medieval theology and the divine right theory.</span>
                    </li>
                    <li><span className="hi">उन्होंने राजनीतिक यथार्थवाद का परिचय दिया, राजनीति का अध्ययन 'जैसा है' के बजाय
                        'जैसा होना चाहिए' किया।</span><span className="en">He introduced <strong>Political Realism</strong>,
                        studying politics 'as it is' rather than 'as it ought to be'.</span></li>
                    <li><span className="hi">उन्होंने आधुनिक धर्मनिरपेक्ष राष्ट्र-राज्य और 'राज्य का कारण' (राइसन डी'एटैट)
                        की अवधारणा की संकल्पना की, जिसमें राष्ट्रीय सुरक्षा को सभी से ऊपर प्राथमिकता दी गई।</span><span
                        className="en">He conceptualized the modern secular nation-state and the concept of 'Reason of
                        State' (Raison d'État), prioritizing national security above all else.</span></li>
                  </ul>
                  <h5><span className="hi">4. निष्कर्ष</span><span className="en">4. Conclusion</span></h5>
                  <p><span className="hi">मैकियावेली के कुंद यथार्थवाद ने उनके समकालीनों को चौंका दिया, लेकिन उनकी
                      व्यावहारिक अंतर्दृष्टि ने आधुनिक राजनीति विज्ञान और अंतर्राष्ट्रीय संबंधों की नींव
                      रखी।</span><span className="en">Machiavelli's blunt realism shocked his contemporaries, but his
                      pragmatic insights laid the foundation for modern political science and international
                      relations.</span></p>
                </div>
              </details>

              <details className="qa-accordion">
                <summary><span className="qa-badge">Q3</span> <span className="hi">कार्ल मार्क्स के वर्ग संघर्ष और अधिशेष मूल्य
                    के सिद्धांत पर चर्चा करें।</span><span className="en">Discuss Karl Marx's theory of Class Struggle and
                    Surplus Value.</span> <span className="qa-marks">[20 Marks]</span></summary>
                <div className="qa-content">
                  <h5><span className="hi">1 परिचय</span><span className="en">1. Introduction</span></h5>
                  <p><span className="hi">पूंजीवाद की कार्ल मार्क्स की आलोचना आर्थिक शोषण की उनकी समझ पर आधारित है। वर्ग
                      संघर्ष और अधिशेष मूल्य के सिद्धांत इस आलोचना के केंद्र में हैं।</span><span className="en">Karl Marx’s
                      critique of capitalism is anchored in his understanding of economic exploitation. The theories of
                      Class Struggle and Surplus Value are central to this critique.</span></p>
                  <h5><span className="hi">2. वर्ग संघर्ष का सिद्धांत</span><span className="en">2. Theory of Class
                      Struggle</span></h5>
                  <ul>
                    <li><span className="hi">"अब तक मौजूद सभी समाज का इतिहास वर्ग संघर्षों का इतिहास है।" (कम्युनिस्ट
                        घोषणापत्र)।</span><span className="en"><em>"The history of all hitherto existing society is the
                          history of class struggles."</em> (Communist Manifesto).</span></li>
                    <li><span className="hi">उत्पादन के साधनों के साथ उनके संबंध के आधार पर समाज को हमेशा दो विरोधी वर्गों
                        में विभाजित किया गया है: उत्पीड़क (मालिक) और उत्पीड़ित (श्रमिक)।</span><span className="en">Society
                        has always been divided into two antagonistic classes based on their relation to the means of
                        production: the oppressor (owners) and the oppressed (workers).</span></li>
                    <li><span className="hi">पूंजीवाद में, ये वर्ग हैं पूंजीपति (कारखानों के मालिक पूंजीपति) और सर्वहारा
                        (श्रमिक जो अपना श्रम बेचते हैं)। उनके हितों का असंगत रूप से विरोध किया जाता है, जो अनिवार्य रूप
                        से क्रांति की ओर ले जाता है।</span><span className="en">In Capitalism, these classes are the
                        <strong>Bourgeoisie</strong> (capitalists who own the factories) and the
                        <strong>Proletariat</strong> (workers who sell their labor). Their interests are irreconcilably
                        opposed, leading inevitably to revolution.</span></li>
                  </ul>
                  <h5><span className="hi">3. अधिशेष मूल्य का सिद्धांत</span><span className="en">3. Theory of Surplus
                      Value</span></h5>
                  <ul>
                    <li><span className="hi">मूल्य के श्रम सिद्धांत में निहित है, जो बताता है कि किसी वस्तु का मूल्य उसके
                        उत्पादन के लिए आवश्यक सामाजिक रूप से आवश्यक श्रम समय से निर्धारित होता है।</span><span
                        className="en">Rooted in the Labor Theory of Value, which states that the value of a commodity is
                        determined by the socially necessary labor time required to produce it.</span></li>
                    <li><span className="hi">श्रमिक मूल्य पैदा करता है, लेकिन पूंजीपति ऐसी मजदूरी देता है जो श्रमिक के जीवित
                        रहने (निर्वाह मजदूरी) के लिए पर्याप्त होती है।</span><span className="en">The worker produces value,
                        but the capitalist pays a wage that is only enough for the worker's survival (subsistence
                        wage).</span></li>
                    <li><span className="hi">श्रमिक द्वारा उत्पादित मूल्य और उसे मिलने वाली मजदूरी के बीच का अंतर अधिशेष
                        मूल्य है।</span><span className="en">The difference between the value the worker produces and the
                        wage he receives is the <strong>Surplus Value</strong>.</span></li>
                    <li><span className="hi">यह अधिशेष मूल्य पूंजीपति लाभ के रूप में अपनी जेब में डाल लेता है। मार्क्स के
                        लिए, मुनाफ़ा अवैतनिक श्रम के अलावा और कुछ नहीं है - यह चोरी है और शोषण का गणितीय प्रमाण
                        है।</span><span className="en">This surplus value is pocketed by the capitalist as profit. For Marx,
                        profit is nothing but unpaid labor—it is theft and the mathematical proof of
                        exploitation.</span></li>
                  </ul>
                  <h5><span className="hi">4. निष्कर्ष</span><span className="en">4. Conclusion</span></h5>
                  <p><span className="hi">मार्क्स ने तर्क दिया कि अधिक अधिशेष मूल्य के लिए निरंतर अभियान पूंजीपतियों को
                      श्रमिकों का और अधिक शोषण करने (लंबे घंटे, कम वेतन) की ओर ले जाता है, जो अंततः श्रमिक वर्ग को उस
                      बिंदु तक ले जाता है जहां वे एकजुट होते हैं, पूंजीपति वर्ग को उखाड़ फेंकते हैं और एक समाजवादी राज्य
                      की स्थापना करते हैं।</span><span className="en">Marx argued that the constant drive for more surplus
                      value leads capitalists to exploit workers further (longer hours, lower wages), which eventually
                      immiserates the working class to the point where they unite, overthrow the bourgeoisie, and
                      establish a socialist state.</span></p>
                </div>
              </details>

              <div className="info-box" style={{"borderLeftColor": "#f59e0b"}}>
                <h4>🎓 UGC NET Expert Tips</h4>
                <p>For Indian Polity, remember Art 32 (5 Writs), Art 143 (Advisory Jurisdiction), Art 356 (President's
                  Rule). For Western Thought, remember Machiavelli separated Politics from Ethics/Religion.</p>
              </div>
            </div>
          </div>
        </div>

        {/**/}
        
    </>
  );
}