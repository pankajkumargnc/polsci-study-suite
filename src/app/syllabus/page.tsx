"use client";
import { ListChecks } from 'lucide-react';

export default function Syllabus() {
  return (
    <>
<div id="syllabus" className="tab-pane active">
          <h2 className="semester-title"><ListChecks size={18} /> <span className="hi">सिलेबस ट्रैकर</span><span
              className="en">Syllabus Tracker</span></h2>
          <div className="content-box">
            <p className="intro-text"><span className="hi">अपने पढ़े हुए टॉपिक्स पर टिक लगाएँ। आपकी प्रगति सेव हो
                जाएगी।</span><span className="en">Check off the topics you have completed. Your progress will be saved
                automatically.</span></p>

            {/**/}
            <h3 className="paper-title" style={{"marginTop": "20px"}}>Semester I</h3>
            <ul style={{"listStyle": "none", "paddingLeft": "0"}}>
              <li style={{"marginBottom": "10px"}}><label><input type="checkbox" className="syl-check" data-id="s1p1" />
                  <b>PSC-F-101:</b> Elementary Political Science (Theory &amp; Ideologies)</label></li>
              <li style={{"marginBottom": "10px"}}><label><input type="checkbox" className="syl-check" data-id="s1p2" />
                  <b>PSC-C-102:</b> Western Political Thought (Plato to Marx)</label></li>
              <li style={{"marginBottom": "10px"}}><label><input type="checkbox" className="syl-check" data-id="s1p3" />
                  <b>PSC-C-103:</b> Indian Political Thought (Ancient &amp; Modern)</label></li>
              <li style={{"marginBottom": "10px"}}><label><input type="checkbox" className="syl-check" data-id="s1p4" />
                  <b>PSC-C-104:</b> Comparative Politics</label></li>
            </ul>

            {/**/}
            <h3 className="paper-title" style={{"marginTop": "20px"}}>Semester II</h3>
            <ul style={{"listStyle": "none", "paddingLeft": "0"}}>
              <li style={{"marginBottom": "10px"}}><label><input type="checkbox" className="syl-check" data-id="s2p1" />
                  <b>PSC-S-205:</b> Academic Writing / Research Methodology</label></li>
              <li style={{"marginBottom": "10px"}}><label><input type="checkbox" className="syl-check" data-id="s2p2" />
                  <b>PSC-C-206:</b> International Relations (Theories &amp; Concepts)</label></li>
              <li style={{"marginBottom": "10px"}}><label><input type="checkbox" className="syl-check" data-id="s2p3" />
                  <b>PSC-C-207:</b> Public Administration (Principles &amp; Theories)</label></li>
              <li style={{"marginBottom": "10px"}}><label><input type="checkbox" className="syl-check" data-id="s2p4" />
                  <b>PSC-C-208:</b> Indian Political System</label></li>
            </ul>

            {/**/}
            <h3 className="paper-title" style={{"marginTop": "20px"}}>Semester III</h3>
            <ul style={{"listStyle": "none", "paddingLeft": "0"}}>
              <li style={{"marginBottom": "10px"}}><label><input type="checkbox" className="syl-check" data-id="s3p1" />
                  <b>PSC-E-309:</b> State Politics in India (Focus on Jharkhand)</label></li>
              <li style={{"marginBottom": "10px"}}><label><input type="checkbox" className="syl-check" data-id="s3p2" />
                  <b>PSC-E-310:</b> Political Sociology</label></li>
              <li style={{"marginBottom": "10px"}}><label><input type="checkbox" className="syl-check" data-id="s3p3" />
                  <b>PSC-C-311:</b> Contemporary Political Issues</label></li>
              <li style={{"marginBottom": "10px"}}><label><input type="checkbox" className="syl-check" data-id="s3p4" />
                  <b>PSC-C-312:</b> Research Methodology</label></li>
            </ul>

            {/**/}
            <h3 className="paper-title" style={{"marginTop": "20px"}}>Semester IV</h3>
            <ul style={{"listStyle": "none", "paddingLeft": "0"}}>
              <li style={{"marginBottom": "10px"}}><label><input type="checkbox" className="syl-check" data-id="s4p1" />
                  <b>PSC-E-413:</b> International Organizations &amp; India's Foreign Policy</label></li>
              <li style={{"marginBottom": "10px"}}><label><input type="checkbox" className="syl-check" data-id="s4p2" />
                  <b>PSC-E-414:</b> International Law</label></li>
              <li style={{"marginBottom": "10px"}}><label><input type="checkbox" className="syl-check" data-id="s4p3" />
                  <b>PSC-415:</b> Comparative Government &amp; Contemporary Issues</label></li>
            </ul>
          </div>
        </div>

        {/**/}
        
    </>
  );
}