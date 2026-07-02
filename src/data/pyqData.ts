export interface PYQQuestion {
  id: string;
  year: string;
  questionEn: string;
  questionHi: string;
  optionsEn: string[];
  optionsHi: string[];
  correctAnswer: number;
  explanationEn: string;
  explanationHi: string;
}

export const pyqData: PYQQuestion[] = [
  {
    "id": "2020-1",
    "year": "2020",
    "questionEn": "Who is the author of the famous book 'Capitalism, Socialism and Democracy'?",
    "questionHi": "प्रसिद्ध पुस्तक 'कैपिटलिज़्म, सोशलिज़्म एंड डेमोक्रेसी' के लेखक कौन हैं?",
    "optionsEn": [
      "Joseph Schumpeter",
      "Aristotle",
      "John Rawls",
      "Jawaharlal Nehru"
    ],
    "optionsHi": [
      "जोसेफ शंपीटर",
      "अरस्तू",
      "जॉन रॉल्स",
      "जवाहरलाल नेहरू"
    ],
    "correctAnswer": 0,
    "explanationEn": "'Capitalism, Socialism and Democracy' is a seminal work by Joseph Schumpeter.",
    "explanationHi": "'कैपिटलिज़्म, सोशलिज़्म एंड डेमोक्रेसी' जोसेफ शंपीटर की एक मौलिक कृति है।"
  },
  {
    "id": "2020-2",
    "year": "2020",
    "questionEn": "The concept of 'Ecological Imperialism' in Political Science is associated with:",
    "questionHi": "राजनीति विज्ञान में 'पारिस्थितिक साम्राज्यवाद' की अवधारणा किससे जुड़ी है?",
    "optionsEn": [
      "Gabriel Almond",
      "Ranajit Guha",
      "Alfred Crosby",
      "Antonio Gramsci"
    ],
    "optionsHi": [
      "गेब्रियल अल्मंड",
      "रणजीत गुहा",
      "अल्फ्रेड क्रॉस्बी",
      "एंटोनियो ग्राम्शी"
    ],
    "correctAnswer": 2,
    "explanationEn": "Alfred Crosby is widely known for developing the concept of Ecological Imperialism.",
    "explanationHi": "अल्फ्रेड क्रॉस्बी को पारिस्थितिक साम्राज्यवाद की अवधारणा विकसित करने के लिए व्यापक रूप से जाना जाता है।"
  },
  {
    "id": "2020-3",
    "year": "2020",
    "questionEn": "Which section of the Indian Constitution deals with 'Union, State, and Concurrent Lists'?",
    "questionHi": "भारतीय संविधान का कौन सा भाग 'संघ, राज्य और समवर्ती सूचियां' से संबंधित है?",
    "optionsEn": [
      "Schedule 7",
      "Article 51A",
      "Article 51",
      "Article 32"
    ],
    "optionsHi": [
      "अनुसूची 7",
      "अनुच्छेद 51A",
      "अनुच्छेद 51",
      "अनुच्छेद 32"
    ],
    "correctAnswer": 0,
    "explanationEn": "Schedule 7 of the Indian Constitution explicitly covers Union, State, and Concurrent Lists.",
    "explanationHi": "भारतीय संविधान का अनुसूची 7 स्पष्ट रूप से संघ, राज्य और समवर्ती सूचियां को कवर करता है।"
  },
  {
    "id": "2020-4",
    "year": "2020",
    "questionEn": "In which year did the 'First War of Indian Independence' take place?",
    "questionHi": "'भारतीय स्वतंत्रता का प्रथम संग्राम' किस वर्ष हुआ था?",
    "optionsEn": [
      "2008",
      "1857",
      "1935",
      "1954"
    ],
    "optionsHi": [
      "2008",
      "1857",
      "1935",
      "1954"
    ],
    "correctAnswer": 1,
    "explanationEn": "The First War of Indian Independence is a significant event that occurred in 1857.",
    "explanationHi": "भारतीय स्वतंत्रता का प्रथम संग्राम एक महत्वपूर्ण घटना है जो 1857 में हुई थी।"
  },
  {
    "id": "2020-5",
    "year": "2020",
    "questionEn": "Assertion (A): Rousseau is heavily associated with the political theory of General Will.\nReason (R): This theory fundamentally shaped modern academic discourse in this sub-field.",
    "questionHi": "अभिकथन (A): रूसो का सामान्य इच्छा के राजनीतिक सिद्धांत से गहरा संबंध है।\nकारण (R): इस सिद्धांत ने इस उप-क्षेत्र में आधुनिक शैक्षणिक विमर्श को मौलिक रूप से आकार दिया।",
    "optionsEn": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "optionsHi": [
      "A और R दोनों सत्य हैं और R, A की सही व्याख्या है।",
      "A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं है।",
      "A सत्य है, लेकिन R असत्य है।",
      "A असत्य है, लेकिन R सत्य है।"
    ],
    "correctAnswer": 0,
    "explanationEn": "The assertion accurately reflects Rousseau's contribution to General Will.",
    "explanationHi": "यह अभिकथन सामान्य इच्छा में रूसो के योगदान को सटीक रूप से दर्शाता है।"
  },
  {
    "id": "2020-6",
    "year": "2020",
    "questionEn": "Who is the author of the famous book 'Hind Swaraj'?",
    "questionHi": "प्रसिद्ध पुस्तक 'हिंद स्वराज' के लेखक कौन हैं?",
    "optionsEn": [
      "Rabindranath Tagore",
      "Joseph Schumpeter",
      "Mahatma Gandhi",
      "Karl Popper"
    ],
    "optionsHi": [
      "रवींद्रनाथ टैगोर",
      "जोसेफ शंपीटर",
      "महात्मा गांधी",
      "कार्ल पॉपर"
    ],
    "correctAnswer": 2,
    "explanationEn": "'Hind Swaraj' is a seminal work by Mahatma Gandhi.",
    "explanationHi": "'हिंद स्वराज' महात्मा गांधी की एक मौलिक कृति है।"
  },
  {
    "id": "2020-7",
    "year": "2020",
    "questionEn": "The concept of 'Post-Colonialism' in Political Science is associated with:",
    "questionHi": "राजनीति विज्ञान में 'उत्तर-उपनिवेशवाद' की अवधारणा किससे जुड़ी है?",
    "optionsEn": [
      "Plato",
      "Edward Said",
      "Montesquieu",
      "Rousseau"
    ],
    "optionsHi": [
      "प्लेटो",
      "एडवर्ड सईद",
      "मोंटेस्क्यू",
      "रूसो"
    ],
    "correctAnswer": 1,
    "explanationEn": "Edward Said is widely known for developing the concept of Post-Colonialism.",
    "explanationHi": "एडवर्ड सईद को उत्तर-उपनिवेशवाद की अवधारणा विकसित करने के लिए व्यापक रूप से जाना जाता है।"
  },
  {
    "id": "2020-8",
    "year": "2020",
    "questionEn": "Which section of the Indian Constitution deals with 'Abolition of Untouchability'?",
    "questionHi": "भारतीय संविधान का कौन सा भाग 'अस्पृश्यता का अंत' से संबंधित है?",
    "optionsEn": [
      "Article 356",
      "Article 148",
      "Article 17",
      "Article 352"
    ],
    "optionsHi": [
      "अनुच्छेद 356",
      "अनुच्छेद 148",
      "अनुच्छेद 17",
      "अनुच्छेद 352"
    ],
    "correctAnswer": 2,
    "explanationEn": "Article 17 of the Indian Constitution explicitly covers Abolition of Untouchability.",
    "explanationHi": "भारतीय संविधान का अनुच्छेद 17 स्पष्ट रूप से अस्पृश्यता का अंत को कवर करता है।"
  },
  {
    "id": "2020-9",
    "year": "2020",
    "questionEn": "In which year did the 'Tashkent Agreement' take place?",
    "questionHi": "'ताशकंद समझौता' किस वर्ष हुआ था?",
    "optionsEn": [
      "1919",
      "1966",
      "2016",
      "2001"
    ],
    "optionsHi": [
      "1919",
      "1966",
      "2016",
      "2001"
    ],
    "correctAnswer": 1,
    "explanationEn": "The Tashkent Agreement is a significant event that occurred in 1966.",
    "explanationHi": "ताशकंद समझौता एक महत्वपूर्ण घटना है जो 1966 में हुई थी।"
  },
  {
    "id": "2020-10",
    "year": "2020",
    "questionEn": "Assertion (A): Jeremy Bentham is heavily associated with the political theory of Utilitarianism.\nReason (R): This theory fundamentally shaped modern academic discourse in this sub-field.",
    "questionHi": "अभिकथन (A): जेरेमी बेंथम का उपयोगितावाद के राजनीतिक सिद्धांत से गहरा संबंध है।\nकारण (R): इस सिद्धांत ने इस उप-क्षेत्र में आधुनिक शैक्षणिक विमर्श को मौलिक रूप से आकार दिया।",
    "optionsEn": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "optionsHi": [
      "A और R दोनों सत्य हैं और R, A की सही व्याख्या है।",
      "A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं है।",
      "A सत्य है, लेकिन R असत्य है।",
      "A असत्य है, लेकिन R सत्य है।"
    ],
    "correctAnswer": 0,
    "explanationEn": "The assertion accurately reflects Jeremy Bentham's contribution to Utilitarianism.",
    "explanationHi": "यह अभिकथन उपयोगितावाद में जेरेमी बेंथम के योगदान को सटीक रूप से दर्शाता है।"
  },
  {
    "id": "2020-11",
    "year": "2020",
    "questionEn": "Who is the author of the famous book 'The Prince'?",
    "questionHi": "प्रसिद्ध पुस्तक 'द प्रिंस' के लेखक कौन हैं?",
    "optionsEn": [
      "Aristotle",
      "Karl Marx",
      "Joseph Schumpeter",
      "Machiavelli"
    ],
    "optionsHi": [
      "अरस्तू",
      "कार्ल मार्क्स",
      "जोसेफ शंपीटर",
      "मैकियावेली"
    ],
    "correctAnswer": 3,
    "explanationEn": "'The Prince' is a seminal work by Machiavelli.",
    "explanationHi": "'द प्रिंस' मैकियावेली की एक मौलिक कृति है।"
  },
  {
    "id": "2020-12",
    "year": "2020",
    "questionEn": "The concept of 'Radical Humanism' in Political Science is associated with:",
    "questionHi": "राजनीति विज्ञान में 'कट्टरपंथी मानववाद' की अवधारणा किससे जुड़ी है?",
    "optionsEn": [
      "Samuel P. Huntington",
      "Sandra Harding",
      "Kautilya",
      "M.N. Roy"
    ],
    "optionsHi": [
      "सैमुअल पी. हंटिंगटन",
      "सैंड्रा हार्डिंग",
      "कौटिल्य",
      "एम.एन. रॉय"
    ],
    "correctAnswer": 3,
    "explanationEn": "M.N. Roy is widely known for developing the concept of Radical Humanism.",
    "explanationHi": "एम.एन. रॉय को कट्टरपंथी मानववाद की अवधारणा विकसित करने के लिए व्यापक रूप से जाना जाता है।"
  },
  {
    "id": "2020-13",
    "year": "2020",
    "questionEn": "Which section of the Indian Constitution deals with 'Inter-State Council'?",
    "questionHi": "भारतीय संविधान का कौन सा भाग 'अंतर-राज्यीय परिषद' से संबंधित है?",
    "optionsEn": [
      "Article 226",
      "Article 263",
      "Article 352",
      "Article 14"
    ],
    "optionsHi": [
      "अनुच्छेद 226",
      "अनुच्छेद 263",
      "अनुच्छेद 352",
      "अनुच्छेद 14"
    ],
    "correctAnswer": 1,
    "explanationEn": "Article 263 of the Indian Constitution explicitly covers Inter-State Council.",
    "explanationHi": "भारतीय संविधान का अनुच्छेद 263 स्पष्ट रूप से अंतर-राज्यीय परिषद को कवर करता है।"
  },
  {
    "id": "2020-14",
    "year": "2020",
    "questionEn": "In which year did the 'Gujral Doctrine' take place?",
    "questionHi": "'गुजराल सिद्धांत' किस वर्ष हुआ था?",
    "optionsEn": [
      "2001",
      "1996",
      "1948",
      "1942"
    ],
    "optionsHi": [
      "2001",
      "1996",
      "1948",
      "1942"
    ],
    "correctAnswer": 1,
    "explanationEn": "The Gujral Doctrine is a significant event that occurred in 1996.",
    "explanationHi": "गुजराल सिद्धांत एक महत्वपूर्ण घटना है जो 1996 में हुई थी।"
  },
  {
    "id": "2020-15",
    "year": "2020",
    "questionEn": "Assertion (A): Sandra Harding is heavily associated with the political theory of Feminist Standpoint Theory.\nReason (R): This theory fundamentally shaped modern academic discourse in this sub-field.",
    "questionHi": "अभिकथन (A): सैंड्रा हार्डिंग का नारीवादी दृष्टिकोण सिद्धांत के राजनीतिक सिद्धांत से गहरा संबंध है।\nकारण (R): इस सिद्धांत ने इस उप-क्षेत्र में आधुनिक शैक्षणिक विमर्श को मौलिक रूप से आकार दिया।",
    "optionsEn": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "optionsHi": [
      "A और R दोनों सत्य हैं और R, A की सही व्याख्या है।",
      "A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं है।",
      "A सत्य है, लेकिन R असत्य है।",
      "A असत्य है, लेकिन R सत्य है।"
    ],
    "correctAnswer": 0,
    "explanationEn": "The assertion accurately reflects Sandra Harding's contribution to Feminist Standpoint Theory.",
    "explanationHi": "यह अभिकथन नारीवादी दृष्टिकोण सिद्धांत में सैंड्रा हार्डिंग के योगदान को सटीक रूप से दर्शाता है।"
  },
  {
    "id": "2020-16",
    "year": "2020",
    "questionEn": "Who is the author of the famous book 'Das Kapital'?",
    "questionHi": "प्रसिद्ध पुस्तक 'दास कैपिटल' के लेखक कौन हैं?",
    "optionsEn": [
      "Hobbes",
      "Antonio Gramsci",
      "B.R. Ambedkar",
      "Karl Marx"
    ],
    "optionsHi": [
      "हॉब्स",
      "एंटोनियो ग्राम्शी",
      "बी.आर. अंबेडकर",
      "कार्ल मार्क्स"
    ],
    "correctAnswer": 3,
    "explanationEn": "'Das Kapital' is a seminal work by Karl Marx.",
    "explanationHi": "'दास कैपिटल' कार्ल मार्क्स की एक मौलिक कृति है।"
  },
  {
    "id": "2020-17",
    "year": "2020",
    "questionEn": "The concept of 'Overlapping Consensus' in Political Science is associated with:",
    "questionHi": "राजनीति विज्ञान में 'अतिव्यापी आम सहमति' की अवधारणा किससे जुड़ी है?",
    "optionsEn": [
      "Karl Marx",
      "Keohane & Nye",
      "Joseph Nye",
      "John Rawls"
    ],
    "optionsHi": [
      "कार्ल मार्क्स",
      "केओहेन और नाई",
      "जोसेफ नाई",
      "जॉन रॉल्स"
    ],
    "correctAnswer": 3,
    "explanationEn": "John Rawls is widely known for developing the concept of Overlapping Consensus.",
    "explanationHi": "जॉन रॉल्स को अतिव्यापी आम सहमति की अवधारणा विकसित करने के लिए व्यापक रूप से जाना जाता है।"
  },
  {
    "id": "2020-18",
    "year": "2020",
    "questionEn": "Which section of the Indian Constitution deals with 'Power of High Courts to issue certain writs'?",
    "questionHi": "भारतीय संविधान का कौन सा भाग 'कुछ रिट जारी करने की उच्च न्यायालयों की शक्ति' से संबंधित है?",
    "optionsEn": [
      "Article 14",
      "Article 226",
      "Schedule 11",
      "Article 17"
    ],
    "optionsHi": [
      "अनुच्छेद 14",
      "अनुच्छेद 226",
      "अनुसूची 11",
      "अनुच्छेद 17"
    ],
    "correctAnswer": 1,
    "explanationEn": "Article 226 of the Indian Constitution explicitly covers Power of High Courts to issue certain writs.",
    "explanationHi": "भारतीय संविधान का अनुच्छेद 226 स्पष्ट रूप से कुछ रिट जारी करने की उच्च न्यायालयों की शक्ति को कवर करता है।"
  },
  {
    "id": "2020-19",
    "year": "2020",
    "questionEn": "In which year did the 'Kyoto Protocol' take place?",
    "questionHi": "'क्योटो प्रोटोकॉल' किस वर्ष हुआ था?",
    "optionsEn": [
      "1972",
      "1997",
      "2008",
      "2001"
    ],
    "optionsHi": [
      "1972",
      "1997",
      "2008",
      "2001"
    ],
    "correctAnswer": 1,
    "explanationEn": "The Kyoto Protocol is a significant event that occurred in 1997.",
    "explanationHi": "क्योटो प्रोटोकॉल एक महत्वपूर्ण घटना है जो 1997 में हुई थी।"
  },
  {
    "id": "2020-20",
    "year": "2020",
    "questionEn": "Assertion (A): Samuel P. Huntington is heavily associated with the political theory of Clash of Civilizations.\nReason (R): This theory fundamentally shaped modern academic discourse in this sub-field.",
    "questionHi": "अभिकथन (A): सैमुअल पी. हंटिंगटन का सभ्यताओं का संघर्ष के राजनीतिक सिद्धांत से गहरा संबंध है।\nकारण (R): इस सिद्धांत ने इस उप-क्षेत्र में आधुनिक शैक्षणिक विमर्श को मौलिक रूप से आकार दिया।",
    "optionsEn": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "optionsHi": [
      "A और R दोनों सत्य हैं और R, A की सही व्याख्या है।",
      "A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं है।",
      "A सत्य है, लेकिन R असत्य है।",
      "A असत्य है, लेकिन R सत्य है।"
    ],
    "correctAnswer": 0,
    "explanationEn": "The assertion accurately reflects Samuel P. Huntington's contribution to Clash of Civilizations.",
    "explanationHi": "यह अभिकथन सभ्यताओं का संघर्ष में सैमुअल पी. हंटिंगटन के योगदान को सटीक रूप से दर्शाता है।"
  },
  {
    "id": "2020-21",
    "year": "2020",
    "questionEn": "Who is the author of the famous book 'Politics'?",
    "questionHi": "प्रसिद्ध पुस्तक 'पॉलिटिक्स' के लेखक कौन हैं?",
    "optionsEn": [
      "Locke",
      "Karl Marx",
      "Aristotle",
      "Hobbes"
    ],
    "optionsHi": [
      "लॉक",
      "कार्ल मार्क्स",
      "अरस्तू",
      "हॉब्स"
    ],
    "correctAnswer": 2,
    "explanationEn": "'Politics' is a seminal work by Aristotle.",
    "explanationHi": "'पॉलिटिक्स' अरस्तू की एक मौलिक कृति है।"
  },
  {
    "id": "2020-22",
    "year": "2020",
    "questionEn": "The concept of 'Subaltern Studies' in Political Science is associated with:",
    "questionHi": "राजनीति विज्ञान में 'सबाल्टर्न स्टडीज' की अवधारणा किससे जुड़ी है?",
    "optionsEn": [
      "Hobbes, Locke, Rousseau",
      "M.N. Roy",
      "Ranajit Guha",
      "Robert Michels"
    ],
    "optionsHi": [
      "हॉब्स, लॉक, रूसो",
      "एम.एन. रॉय",
      "रणजीत गुहा",
      "रॉबर्ट मिशेल्स"
    ],
    "correctAnswer": 2,
    "explanationEn": "Ranajit Guha is widely known for developing the concept of Subaltern Studies.",
    "explanationHi": "रणजीत गुहा को सबाल्टर्न स्टडीज की अवधारणा विकसित करने के लिए व्यापक रूप से जाना जाता है।"
  },
  {
    "id": "2020-23",
    "year": "2020",
    "questionEn": "Which section of the Indian Constitution deals with 'Organization of village panchayats'?",
    "questionHi": "भारतीय संविधान का कौन सा भाग 'ग्राम पंचायतों का संगठन' से संबंधित है?",
    "optionsEn": [
      "Article 263",
      "Article 40",
      "Article 110",
      "Article 51A"
    ],
    "optionsHi": [
      "अनुच्छेद 263",
      "अनुच्छेद 40",
      "अनुच्छेद 110",
      "अनुच्छेद 51A"
    ],
    "correctAnswer": 1,
    "explanationEn": "Article 40 of the Indian Constitution explicitly covers Organization of village panchayats.",
    "explanationHi": "भारतीय संविधान का अनुच्छेद 40 स्पष्ट रूप से ग्राम पंचायतों का संगठन को कवर करता है।"
  },
  {
    "id": "2020-24",
    "year": "2020",
    "questionEn": "In which year did the 'Formation of Indian National Congress' take place?",
    "questionHi": "'भारतीय राष्ट्रीय कांग्रेस का गठन' किस वर्ष हुआ था?",
    "optionsEn": [
      "1962",
      "1885",
      "1966",
      "1909"
    ],
    "optionsHi": [
      "1962",
      "1885",
      "1966",
      "1909"
    ],
    "correctAnswer": 1,
    "explanationEn": "The Formation of Indian National Congress is a significant event that occurred in 1885.",
    "explanationHi": "भारतीय राष्ट्रीय कांग्रेस का गठन एक महत्वपूर्ण घटना है जो 1885 में हुई थी।"
  },
  {
    "id": "2020-25",
    "year": "2020",
    "questionEn": "Assertion (A): Aristotle is heavily associated with the political theory of Golden Mean.\nReason (R): This theory fundamentally shaped modern academic discourse in this sub-field.",
    "questionHi": "अभिकथन (A): अरस्तू का स्वर्णिम मध्य (Golden Mean) के राजनीतिक सिद्धांत से गहरा संबंध है।\nकारण (R): इस सिद्धांत ने इस उप-क्षेत्र में आधुनिक शैक्षणिक विमर्श को मौलिक रूप से आकार दिया।",
    "optionsEn": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "optionsHi": [
      "A और R दोनों सत्य हैं और R, A की सही व्याख्या है।",
      "A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं है।",
      "A सत्य है, लेकिन R असत्य है।",
      "A असत्य है, लेकिन R सत्य है।"
    ],
    "correctAnswer": 0,
    "explanationEn": "The assertion accurately reflects Aristotle's contribution to Golden Mean.",
    "explanationHi": "यह अभिकथन स्वर्णिम मध्य (Golden Mean) में अरस्तू के योगदान को सटीक रूप से दर्शाता है।"
  },
  {
    "id": "2020-26",
    "year": "2020",
    "questionEn": "Who is the author of the famous book 'The Republic'?",
    "questionHi": "प्रसिद्ध पुस्तक 'द रिपब्लिक' के लेखक कौन हैं?",
    "optionsEn": [
      "Simone de Beauvoir",
      "Plato",
      "Aristotle",
      "Kautilya"
    ],
    "optionsHi": [
      "सिमोन डी बोउवा",
      "प्लेटो",
      "अरस्तू",
      "कौटिल्य"
    ],
    "correctAnswer": 1,
    "explanationEn": "'The Republic' is a seminal work by Plato.",
    "explanationHi": "'द रिपब्लिक' प्लेटो की एक मौलिक कृति है।"
  },
  {
    "id": "2020-27",
    "year": "2020",
    "questionEn": "The concept of 'Structural Functionalism' in Political Science is associated with:",
    "questionHi": "राजनीति विज्ञान में 'संरचनात्मक प्रकार्यवाद' की अवधारणा किससे जुड़ी है?",
    "optionsEn": [
      "Montesquieu",
      "Antonio Gramsci",
      "Gabriel Almond",
      "Rousseau"
    ],
    "optionsHi": [
      "मोंटेस्क्यू",
      "एंटोनियो ग्राम्शी",
      "गेब्रियल अल्मंड",
      "रूसो"
    ],
    "correctAnswer": 2,
    "explanationEn": "Gabriel Almond is widely known for developing the concept of Structural Functionalism.",
    "explanationHi": "गेब्रियल अल्मंड को संरचनात्मक प्रकार्यवाद की अवधारणा विकसित करने के लिए व्यापक रूप से जाना जाता है।"
  },
  {
    "id": "2020-28",
    "year": "2020",
    "questionEn": "Which section of the Indian Constitution deals with 'President's Rule'?",
    "questionHi": "भारतीय संविधान का कौन सा भाग 'राष्ट्रपति शासन' से संबंधित है?",
    "optionsEn": [
      "Article 356",
      "Article 51",
      "Article 280",
      "Article 148"
    ],
    "optionsHi": [
      "अनुच्छेद 356",
      "अनुच्छेद 51",
      "अनुच्छेद 280",
      "अनुच्छेद 148"
    ],
    "correctAnswer": 0,
    "explanationEn": "Article 356 of the Indian Constitution explicitly covers President's Rule.",
    "explanationHi": "भारतीय संविधान का अनुच्छेद 356 स्पष्ट रूप से राष्ट्रपति शासन को कवर करता है।"
  },
  {
    "id": "2020-29",
    "year": "2020",
    "questionEn": "In which year did the 'Pokhran-II Nuclear Test' take place?",
    "questionHi": "'पोखरण-II परमाणु परीक्षण' किस वर्ष हुआ था?",
    "optionsEn": [
      "1961",
      "1998",
      "1997",
      "1954"
    ],
    "optionsHi": [
      "1961",
      "1998",
      "1997",
      "1954"
    ],
    "correctAnswer": 1,
    "explanationEn": "The Pokhran-II Nuclear Test is a significant event that occurred in 1998.",
    "explanationHi": "पोखरण-II परमाणु परीक्षण एक महत्वपूर्ण घटना है जो 1998 में हुई थी।"
  },
  {
    "id": "2020-30",
    "year": "2020",
    "questionEn": "Assertion (A): Kautilya is heavily associated with the political theory of Saptanga Theory.\nReason (R): This theory fundamentally shaped modern academic discourse in this sub-field.",
    "questionHi": "अभिकथन (A): कौटिल्य का सप्तांग सिद्धांत के राजनीतिक सिद्धांत से गहरा संबंध है।\nकारण (R): इस सिद्धांत ने इस उप-क्षेत्र में आधुनिक शैक्षणिक विमर्श को मौलिक रूप से आकार दिया।",
    "optionsEn": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "optionsHi": [
      "A और R दोनों सत्य हैं और R, A की सही व्याख्या है।",
      "A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं है।",
      "A सत्य है, लेकिन R असत्य है।",
      "A असत्य है, लेकिन R सत्य है।"
    ],
    "correctAnswer": 0,
    "explanationEn": "The assertion accurately reflects Kautilya's contribution to Saptanga Theory.",
    "explanationHi": "यह अभिकथन सप्तांग सिद्धांत में कौटिल्य के योगदान को सटीक रूप से दर्शाता है।"
  },
  {
    "id": "2020-31",
    "year": "2020",
    "questionEn": "Who is the author of the famous book 'A Theory of Justice'?",
    "questionHi": "प्रसिद्ध पुस्तक 'ए थ्योरी ऑफ जस्टिस' के लेखक कौन हैं?",
    "optionsEn": [
      "Keohane and Nye",
      "Karl Popper",
      "John Rawls",
      "Edward Said"
    ],
    "optionsHi": [
      "केओहेन और नाई",
      "कार्ल पॉपर",
      "जॉन रॉल्स",
      "एडवर्ड सईद"
    ],
    "correctAnswer": 2,
    "explanationEn": "'A Theory of Justice' is a seminal work by John Rawls.",
    "explanationHi": "'ए थ्योरी ऑफ जस्टिस' जॉन रॉल्स की एक मौलिक कृति है।"
  },
  {
    "id": "2020-32",
    "year": "2020",
    "questionEn": "The concept of 'Satyagraha' in Political Science is associated with:",
    "questionHi": "राजनीति विज्ञान में 'सत्याग्रह' की अवधारणा किससे जुड़ी है?",
    "optionsEn": [
      "John Rawls",
      "Karl Marx",
      "Mahatma Gandhi",
      "Plato"
    ],
    "optionsHi": [
      "जॉन रॉल्स",
      "कार्ल मार्क्स",
      "महात्मा गांधी",
      "प्लेटो"
    ],
    "correctAnswer": 2,
    "explanationEn": "Mahatma Gandhi is widely known for developing the concept of Satyagraha.",
    "explanationHi": "महात्मा गांधी को सत्याग्रह की अवधारणा विकसित करने के लिए व्यापक रूप से जाना जाता है।"
  },
  {
    "id": "2020-33",
    "year": "2020",
    "questionEn": "Which section of the Indian Constitution deals with 'Abolition or creation of Legislative Councils'?",
    "questionHi": "भारतीय संविधान का कौन सा भाग 'विधान परिषदों का उन्मूलन या निर्माण' से संबंधित है?",
    "optionsEn": [
      "Article 51A",
      "Article 356",
      "Article 169",
      "Article 32"
    ],
    "optionsHi": [
      "अनुच्छेद 51A",
      "अनुच्छेद 356",
      "अनुच्छेद 169",
      "अनुच्छेद 32"
    ],
    "correctAnswer": 2,
    "explanationEn": "Article 169 of the Indian Constitution explicitly covers Abolition or creation of Legislative Councils.",
    "explanationHi": "भारतीय संविधान का अनुच्छेद 169 स्पष्ट रूप से विधान परिषदों का उन्मूलन या निर्माण को कवर करता है।"
  },
  {
    "id": "2020-34",
    "year": "2020",
    "questionEn": "In which year did the 'Formation of United Nations' take place?",
    "questionHi": "'संयुक्त राष्ट्र का गठन' किस वर्ष हुआ था?",
    "optionsEn": [
      "1945",
      "1946",
      "1995",
      "1857"
    ],
    "optionsHi": [
      "1945",
      "1946",
      "1995",
      "1857"
    ],
    "correctAnswer": 0,
    "explanationEn": "The Formation of United Nations is a significant event that occurred in 1945.",
    "explanationHi": "संयुक्त राष्ट्र का गठन एक महत्वपूर्ण घटना है जो 1945 में हुई थी।"
  },
  {
    "id": "2020-35",
    "year": "2020",
    "questionEn": "Assertion (A): Antonio Gramsci is heavily associated with the political theory of Hegemony.\nReason (R): This theory fundamentally shaped modern academic discourse in this sub-field.",
    "questionHi": "अभिकथन (A): एंटोनियो ग्राम्शी का हेजेमनी (प्राधान्य) के राजनीतिक सिद्धांत से गहरा संबंध है।\nकारण (R): इस सिद्धांत ने इस उप-क्षेत्र में आधुनिक शैक्षणिक विमर्श को मौलिक रूप से आकार दिया।",
    "optionsEn": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "optionsHi": [
      "A और R दोनों सत्य हैं और R, A की सही व्याख्या है।",
      "A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं है।",
      "A सत्य है, लेकिन R असत्य है।",
      "A असत्य है, लेकिन R सत्य है।"
    ],
    "correctAnswer": 0,
    "explanationEn": "The assertion accurately reflects Antonio Gramsci's contribution to Hegemony.",
    "explanationHi": "यह अभिकथन हेजेमनी (प्राधान्य) में एंटोनियो ग्राम्शी के योगदान को सटीक रूप से दर्शाता है।"
  },
  {
    "id": "2020-36",
    "year": "2020",
    "questionEn": "Who is the author of the famous book 'Discovery of India'?",
    "questionHi": "प्रसिद्ध पुस्तक 'डिस्कवरी ऑफ इंडिया' के लेखक कौन हैं?",
    "optionsEn": [
      "Adam Smith",
      "Kautilya",
      "Jawaharlal Nehru",
      "Locke"
    ],
    "optionsHi": [
      "एडम स्मिथ",
      "कौटिल्य",
      "जवाहरलाल नेहरू",
      "लॉक"
    ],
    "correctAnswer": 2,
    "explanationEn": "'Discovery of India' is a seminal work by Jawaharlal Nehru.",
    "explanationHi": "'डिस्कवरी ऑफ इंडिया' जवाहरलाल नेहरू की एक मौलिक कृति है।"
  },
  {
    "id": "2020-37",
    "year": "2020",
    "questionEn": "The concept of 'Veil of Ignorance' in Political Science is associated with:",
    "questionHi": "राजनीति विज्ञान में 'अज्ञानता का पर्दा' की अवधारणा किससे जुड़ी है?",
    "optionsEn": [
      "Jayaprakash Narayan",
      "Mahatma Gandhi",
      "John Rawls",
      "Plato"
    ],
    "optionsHi": [
      "जयप्रकाश नारायण",
      "महात्मा गांधी",
      "जॉन रॉल्स",
      "प्लेटो"
    ],
    "correctAnswer": 2,
    "explanationEn": "John Rawls is widely known for developing the concept of Veil of Ignorance.",
    "explanationHi": "जॉन रॉल्स को अज्ञानता का पर्दा की अवधारणा विकसित करने के लिए व्यापक रूप से जाना जाता है।"
  },
  {
    "id": "2020-38",
    "year": "2020",
    "questionEn": "Which section of the Indian Constitution deals with 'Ordinance making power of President'?",
    "questionHi": "भारतीय संविधान का कौन सा भाग 'राष्ट्रपति की अध्यादेश जारी करने की शक्ति' से संबंधित है?",
    "optionsEn": [
      "Article 280",
      "Schedule 7",
      "Article 324",
      "Article 123"
    ],
    "optionsHi": [
      "अनुच्छेद 280",
      "अनुसूची 7",
      "अनुच्छेद 324",
      "अनुच्छेद 123"
    ],
    "correctAnswer": 3,
    "explanationEn": "Article 123 of the Indian Constitution explicitly covers Ordinance making power of President.",
    "explanationHi": "भारतीय संविधान का अनुच्छेद 123 स्पष्ट रूप से राष्ट्रपति की अध्यादेश जारी करने की शक्ति को कवर करता है।"
  },
  {
    "id": "2020-39",
    "year": "2020",
    "questionEn": "In which year did the 'Panchsheel Agreement' take place?",
    "questionHi": "'पंचशील समझौता' किस वर्ष हुआ था?",
    "optionsEn": [
      "2014",
      "1997",
      "1995",
      "1954"
    ],
    "optionsHi": [
      "2014",
      "1997",
      "1995",
      "1954"
    ],
    "correctAnswer": 3,
    "explanationEn": "The Panchsheel Agreement is a significant event that occurred in 1954.",
    "explanationHi": "पंचशील समझौता एक महत्वपूर्ण घटना है जो 1954 में हुई थी।"
  },
  {
    "id": "2020-40",
    "year": "2020",
    "questionEn": "Assertion (A): Montesquieu is heavily associated with the political theory of Separation of Powers.\nReason (R): This theory fundamentally shaped modern academic discourse in this sub-field.",
    "questionHi": "अभिकथन (A): मोंटेस्क्यू का शक्तियों का पृथक्करण के राजनीतिक सिद्धांत से गहरा संबंध है।\nकारण (R): इस सिद्धांत ने इस उप-क्षेत्र में आधुनिक शैक्षणिक विमर्श को मौलिक रूप से आकार दिया।",
    "optionsEn": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "optionsHi": [
      "A और R दोनों सत्य हैं और R, A की सही व्याख्या है।",
      "A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं है।",
      "A सत्य है, लेकिन R असत्य है।",
      "A असत्य है, लेकिन R सत्य है।"
    ],
    "correctAnswer": 0,
    "explanationEn": "The assertion accurately reflects Montesquieu's contribution to Separation of Powers.",
    "explanationHi": "यह अभिकथन शक्तियों का पृथक्करण में मोंटेस्क्यू के योगदान को सटीक रूप से दर्शाता है।"
  },
  {
    "id": "2020-41",
    "year": "2020",
    "questionEn": "Who is the author of the famous book 'Leviathan'?",
    "questionHi": "प्रसिद्ध पुस्तक 'लेवियाथन' के लेखक कौन हैं?",
    "optionsEn": [
      "Almond and Verba",
      "John Rawls",
      "Hobbes",
      "Rabindranath Tagore"
    ],
    "optionsHi": [
      "अल्मंड और वर्बा",
      "जॉन रॉल्स",
      "हॉब्स",
      "रवींद्रनाथ टैगोर"
    ],
    "correctAnswer": 2,
    "explanationEn": "'Leviathan' is a seminal work by Hobbes.",
    "explanationHi": "'लेवियाथन' हॉब्स की एक मौलिक कृति है।"
  },
  {
    "id": "2020-42",
    "year": "2020",
    "questionEn": "The concept of 'Philosopher King' in Political Science is associated with:",
    "questionHi": "राजनीति विज्ञान में 'दार्शनिक राजा' की अवधारणा किससे जुड़ी है?",
    "optionsEn": [
      "M.N. Roy",
      "Ram Manohar Lohia",
      "Sandra Harding",
      "Plato"
    ],
    "optionsHi": [
      "एम.एन. रॉय",
      "राम मनोहर लोहिया",
      "सैंड्रा हार्डिंग",
      "प्लेटो"
    ],
    "correctAnswer": 3,
    "explanationEn": "Plato is widely known for developing the concept of Philosopher King.",
    "explanationHi": "प्लेटो को दार्शनिक राजा की अवधारणा विकसित करने के लिए व्यापक रूप से जाना जाता है।"
  },
  {
    "id": "2020-43",
    "year": "2020",
    "questionEn": "Which section of the Indian Constitution deals with 'Finance Commission'?",
    "questionHi": "भारतीय संविधान का कौन सा भाग 'वित्त आयोग' से संबंधित है?",
    "optionsEn": [
      "Article 51",
      "Article 14",
      "Article 324",
      "Article 280"
    ],
    "optionsHi": [
      "अनुच्छेद 51",
      "अनुच्छेद 14",
      "अनुच्छेद 324",
      "अनुच्छेद 280"
    ],
    "correctAnswer": 3,
    "explanationEn": "Article 280 of the Indian Constitution explicitly covers Finance Commission.",
    "explanationHi": "भारतीय संविधान का अनुच्छेद 280 स्पष्ट रूप से वित्त आयोग को कवर करता है।"
  },
  {
    "id": "2020-44",
    "year": "2020",
    "questionEn": "In which year did the 'Pokhran-I Nuclear Test' take place?",
    "questionHi": "'पोखरण-I परमाणु परीक्षण' किस वर्ष हुआ था?",
    "optionsEn": [
      "1998",
      "1974",
      "1992",
      "1857"
    ],
    "optionsHi": [
      "1998",
      "1974",
      "1992",
      "1857"
    ],
    "correctAnswer": 1,
    "explanationEn": "The Pokhran-I Nuclear Test is a significant event that occurred in 1974.",
    "explanationHi": "पोखरण-I परमाणु परीक्षण एक महत्वपूर्ण घटना है जो 1974 में हुई थी।"
  },
  {
    "id": "2020-45",
    "year": "2020",
    "questionEn": "Assertion (A): Robert Michels is heavily associated with the political theory of Iron Law of Oligarchy.\nReason (R): This theory fundamentally shaped modern academic discourse in this sub-field.",
    "questionHi": "अभिकथन (A): रॉबर्ट मिशेल्स का अल्पतंत्र का लौह नियम के राजनीतिक सिद्धांत से गहरा संबंध है।\nकारण (R): इस सिद्धांत ने इस उप-क्षेत्र में आधुनिक शैक्षणिक विमर्श को मौलिक रूप से आकार दिया।",
    "optionsEn": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "optionsHi": [
      "A और R दोनों सत्य हैं और R, A की सही व्याख्या है।",
      "A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं है।",
      "A सत्य है, लेकिन R असत्य है।",
      "A असत्य है, लेकिन R सत्य है।"
    ],
    "correctAnswer": 0,
    "explanationEn": "The assertion accurately reflects Robert Michels's contribution to Iron Law of Oligarchy.",
    "explanationHi": "यह अभिकथन अल्पतंत्र का लौह नियम में रॉबर्ट मिशेल्स के योगदान को सटीक रूप से दर्शाता है।"
  },
  {
    "id": "2020-46",
    "year": "2020",
    "questionEn": "Who is the author of the famous book 'Arthashastra'?",
    "questionHi": "प्रसिद्ध पुस्तक 'अर्थशास्त्र' के लेखक कौन हैं?",
    "optionsEn": [
      "Mahatma Gandhi",
      "John Mearsheimer",
      "Machiavelli",
      "Kautilya"
    ],
    "optionsHi": [
      "महात्मा गांधी",
      "जॉन मियर्सहाइमर",
      "मैकियावेली",
      "कौटिल्य"
    ],
    "correctAnswer": 3,
    "explanationEn": "'Arthashastra' is a seminal work by Kautilya.",
    "explanationHi": "'अर्थशास्त्र' कौटिल्य की एक मौलिक कृति है।"
  },
  {
    "id": "2020-47",
    "year": "2020",
    "questionEn": "The concept of 'Soft Power' in Political Science is associated with:",
    "questionHi": "राजनीति विज्ञान में 'सॉफ्ट पावर' की अवधारणा किससे जुड़ी है?",
    "optionsEn": [
      "Alfred Crosby",
      "Kautilya",
      "Ram Manohar Lohia",
      "Joseph Nye"
    ],
    "optionsHi": [
      "अल्फ्रेड क्रॉस्बी",
      "कौटिल्य",
      "राम मनोहर लोहिया",
      "जोसेफ नाई"
    ],
    "correctAnswer": 3,
    "explanationEn": "Joseph Nye is widely known for developing the concept of Soft Power.",
    "explanationHi": "जोसेफ नाई को सॉफ्ट पावर की अवधारणा विकसित करने के लिए व्यापक रूप से जाना जाता है।"
  },
  {
    "id": "2020-48",
    "year": "2020",
    "questionEn": "Which section of the Indian Constitution deals with 'Right to Constitutional Remedies'?",
    "questionHi": "भारतीय संविधान का कौन सा भाग 'संवैधानिक उपचारों का अधिकार' से संबंधित है?",
    "optionsEn": [
      "Article 32",
      "Article 280",
      "Schedule 10",
      "Article 226"
    ],
    "optionsHi": [
      "अनुच्छेद 32",
      "अनुच्छेद 280",
      "अनुसूची 10",
      "अनुच्छेद 226"
    ],
    "correctAnswer": 0,
    "explanationEn": "Article 32 of the Indian Constitution explicitly covers Right to Constitutional Remedies.",
    "explanationHi": "भारतीय संविधान का अनुच्छेद 32 स्पष्ट रूप से संवैधानिक उपचारों का अधिकार को कवर करता है।"
  },
  {
    "id": "2020-49",
    "year": "2020",
    "questionEn": "In which year did the 'Shimla Agreement' take place?",
    "questionHi": "'शिमला समझौता' किस वर्ष हुआ था?",
    "optionsEn": [
      "1974",
      "1972",
      "1999",
      "1942"
    ],
    "optionsHi": [
      "1974",
      "1972",
      "1999",
      "1942"
    ],
    "correctAnswer": 1,
    "explanationEn": "The Shimla Agreement is a significant event that occurred in 1972.",
    "explanationHi": "शिमला समझौता एक महत्वपूर्ण घटना है जो 1972 में हुई थी।"
  },
  {
    "id": "2020-50",
    "year": "2020",
    "questionEn": "Assertion (A): Jayaprakash Narayan is heavily associated with the political theory of Total Revolution.\nReason (R): This theory fundamentally shaped modern academic discourse in this sub-field.",
    "questionHi": "अभिकथन (A): जयप्रकाश नारायण का संपूर्ण क्रांति के राजनीतिक सिद्धांत से गहरा संबंध है।\nकारण (R): इस सिद्धांत ने इस उप-क्षेत्र में आधुनिक शैक्षणिक विमर्श को मौलिक रूप से आकार दिया।",
    "optionsEn": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "optionsHi": [
      "A और R दोनों सत्य हैं और R, A की सही व्याख्या है।",
      "A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं है।",
      "A सत्य है, लेकिन R असत्य है।",
      "A असत्य है, लेकिन R सत्य है।"
    ],
    "correctAnswer": 0,
    "explanationEn": "The assertion accurately reflects Jayaprakash Narayan's contribution to Total Revolution.",
    "explanationHi": "यह अभिकथन संपूर्ण क्रांति में जयप्रकाश नारायण के योगदान को सटीक रूप से दर्शाता है।"
  },
  {
    "id": "2021-1",
    "year": "2021",
    "questionEn": "Who is the author of the famous book 'Tragedy of Great Power Politics'?",
    "questionHi": "प्रसिद्ध पुस्तक 'ट्रेजेडी ऑफ ग्रेट पावर पॉलिटिक्स' के लेखक कौन हैं?",
    "optionsEn": [
      "Kenneth Waltz",
      "Karl Marx",
      "Aristotle",
      "John Mearsheimer"
    ],
    "optionsHi": [
      "केनेथ वाल्ट्ज",
      "कार्ल मार्क्स",
      "अरस्तू",
      "जॉन मियर्सहाइमर"
    ],
    "correctAnswer": 3,
    "explanationEn": "'Tragedy of Great Power Politics' is a seminal work by John Mearsheimer.",
    "explanationHi": "'ट्रेजेडी ऑफ ग्रेट पावर पॉलिटिक्स' जॉन मियर्सहाइमर की एक मौलिक कृति है।"
  },
  {
    "id": "2021-2",
    "year": "2021",
    "questionEn": "The concept of 'Integral Humanism' in Political Science is associated with:",
    "questionHi": "राजनीति विज्ञान में 'एकात्म मानववाद' की अवधारणा किससे जुड़ी है?",
    "optionsEn": [
      "Keohane & Nye",
      "Kautilya",
      "Deendayal Upadhyaya",
      "Karl Marx"
    ],
    "optionsHi": [
      "केओहेन और नाई",
      "कौटिल्य",
      "दीनदयाल उपाध्याय",
      "कार्ल मार्क्स"
    ],
    "correctAnswer": 2,
    "explanationEn": "Deendayal Upadhyaya is widely known for developing the concept of Integral Humanism.",
    "explanationHi": "दीनदयाल उपाध्याय को एकात्म मानववाद की अवधारणा विकसित करने के लिए व्यापक रूप से जाना जाता है।"
  },
  {
    "id": "2021-3",
    "year": "2021",
    "questionEn": "Which section of the Indian Constitution deals with 'Amendment of the Constitution'?",
    "questionHi": "भारतीय संविधान का कौन सा भाग 'संविधान का संशोधन' से संबंधित है?",
    "optionsEn": [
      "Article 262",
      "Article 368",
      "Article 21",
      "Article 312"
    ],
    "optionsHi": [
      "अनुच्छेद 262",
      "अनुच्छेद 368",
      "अनुच्छेद 21",
      "अनुच्छेद 312"
    ],
    "correctAnswer": 1,
    "explanationEn": "Article 368 of the Indian Constitution explicitly covers Amendment of the Constitution.",
    "explanationHi": "भारतीय संविधान का अनुच्छेद 368 स्पष्ट रूप से संविधान का संशोधन को कवर करता है।"
  },
  {
    "id": "2021-4",
    "year": "2021",
    "questionEn": "In which year did the 'Cabinet Mission Plan' take place?",
    "questionHi": "'कैबिनेट मिशन योजना' किस वर्ष हुआ था?",
    "optionsEn": [
      "2001",
      "1946",
      "2014",
      "1909"
    ],
    "optionsHi": [
      "2001",
      "1946",
      "2014",
      "1909"
    ],
    "correctAnswer": 1,
    "explanationEn": "The Cabinet Mission Plan is a significant event that occurred in 1946.",
    "explanationHi": "कैबिनेट मिशन योजना एक महत्वपूर्ण घटना है जो 1946 में हुई थी।"
  },
  {
    "id": "2021-5",
    "year": "2021",
    "questionEn": "Assertion (A): Michael Doyle is heavily associated with the political theory of Democratic Peace Theory.\nReason (R): This theory fundamentally shaped modern academic discourse in this sub-field.",
    "questionHi": "अभिकथन (A): माइकल डॉयल का लोकतांत्रिक शांति सिद्धांत के राजनीतिक सिद्धांत से गहरा संबंध है।\nकारण (R): इस सिद्धांत ने इस उप-क्षेत्र में आधुनिक शैक्षणिक विमर्श को मौलिक रूप से आकार दिया।",
    "optionsEn": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "optionsHi": [
      "A और R दोनों सत्य हैं और R, A की सही व्याख्या है।",
      "A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं है।",
      "A सत्य है, लेकिन R असत्य है।",
      "A असत्य है, लेकिन R सत्य है।"
    ],
    "correctAnswer": 0,
    "explanationEn": "The assertion accurately reflects Michael Doyle's contribution to Democratic Peace Theory.",
    "explanationHi": "यह अभिकथन लोकतांत्रिक शांति सिद्धांत में माइकल डॉयल के योगदान को सटीक रूप से दर्शाता है।"
  },
  {
    "id": "2021-6",
    "year": "2021",
    "questionEn": "Who is the author of the famous book 'Two Treatises of Government'?",
    "questionHi": "प्रसिद्ध पुस्तक 'टू ट्रीटीज़ ऑफ़ गवर्नमेंट' के लेखक कौन हैं?",
    "optionsEn": [
      "Aristotle",
      "Locke",
      "Karl Popper",
      "John Mearsheimer"
    ],
    "optionsHi": [
      "अरस्तू",
      "लॉक",
      "कार्ल पॉपर",
      "जॉन मियर्सहाइमर"
    ],
    "correctAnswer": 1,
    "explanationEn": "'Two Treatises of Government' is a seminal work by Locke.",
    "explanationHi": "'टू ट्रीटीज़ ऑफ़ गवर्नमेंट' लॉक की एक मौलिक कृति है।"
  },
  {
    "id": "2021-7",
    "year": "2021",
    "questionEn": "The concept of 'Dialectical Materialism' in Political Science is associated with:",
    "questionHi": "राजनीति विज्ञान में 'द्वंद्वात्मक भौतिकवाद' की अवधारणा किससे जुड़ी है?",
    "optionsEn": [
      "Montesquieu",
      "Karl Marx",
      "Keohane & Nye",
      "Jayaprakash Narayan"
    ],
    "optionsHi": [
      "मोंटेस्क्यू",
      "कार्ल मार्क्स",
      "केओहेन और नाई",
      "जयप्रकाश नारायण"
    ],
    "correctAnswer": 1,
    "explanationEn": "Karl Marx is widely known for developing the concept of Dialectical Materialism.",
    "explanationHi": "कार्ल मार्क्स को द्वंद्वात्मक भौतिकवाद की अवधारणा विकसित करने के लिए व्यापक रूप से जाना जाता है।"
  },
  {
    "id": "2021-8",
    "year": "2021",
    "questionEn": "Which section of the Indian Constitution deals with 'Election Commission'?",
    "questionHi": "भारतीय संविधान का कौन सा भाग 'चुनाव आयोग' से संबंधित है?",
    "optionsEn": [
      "Schedule 7",
      "Article 324",
      "Article 368",
      "Article 123"
    ],
    "optionsHi": [
      "अनुसूची 7",
      "अनुच्छेद 324",
      "अनुच्छेद 368",
      "अनुच्छेद 123"
    ],
    "correctAnswer": 1,
    "explanationEn": "Article 324 of the Indian Constitution explicitly covers Election Commission.",
    "explanationHi": "भारतीय संविधान का अनुच्छेद 324 स्पष्ट रूप से चुनाव आयोग को कवर करता है।"
  },
  {
    "id": "2021-9",
    "year": "2021",
    "questionEn": "In which year did the 'Fall of the Berlin Wall' take place?",
    "questionHi": "'बर्लिन की दीवार का गिरना' किस वर्ष हुआ था?",
    "optionsEn": [
      "1935",
      "1948",
      "1989",
      "1972"
    ],
    "optionsHi": [
      "1935",
      "1948",
      "1989",
      "1972"
    ],
    "correctAnswer": 2,
    "explanationEn": "The Fall of the Berlin Wall is a significant event that occurred in 1989.",
    "explanationHi": "बर्लिन की दीवार का गिरना एक महत्वपूर्ण घटना है जो 1989 में हुई थी।"
  },
  {
    "id": "2021-10",
    "year": "2021",
    "questionEn": "Assertion (A): Francis Fukuyama is heavily associated with the political theory of End of History.\nReason (R): This theory fundamentally shaped modern academic discourse in this sub-field.",
    "questionHi": "अभिकथन (A): फ्रांसिस फुकुयामा का इतिहास का अंत के राजनीतिक सिद्धांत से गहरा संबंध है।\nकारण (R): इस सिद्धांत ने इस उप-क्षेत्र में आधुनिक शैक्षणिक विमर्श को मौलिक रूप से आकार दिया।",
    "optionsEn": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "optionsHi": [
      "A और R दोनों सत्य हैं और R, A की सही व्याख्या है।",
      "A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं है।",
      "A सत्य है, लेकिन R असत्य है।",
      "A असत्य है, लेकिन R सत्य है।"
    ],
    "correctAnswer": 0,
    "explanationEn": "The assertion accurately reflects Francis Fukuyama's contribution to End of History.",
    "explanationHi": "यह अभिकथन इतिहास का अंत में फ्रांसिस फुकुयामा के योगदान को सटीक रूप से दर्शाता है।"
  },
  {
    "id": "2021-11",
    "year": "2021",
    "questionEn": "Who is the author of the famous book 'Gitanjali'?",
    "questionHi": "प्रसिद्ध पुस्तक 'गीतांजलि' के लेखक कौन हैं?",
    "optionsEn": [
      "Simone de Beauvoir",
      "J.S. Mill",
      "Frantz Fanon",
      "Rabindranath Tagore"
    ],
    "optionsHi": [
      "सिमोन डी बोउवा",
      "जे.एस. मिल",
      "फ्रांज फैनन",
      "रवींद्रनाथ टैगोर"
    ],
    "correctAnswer": 3,
    "explanationEn": "'Gitanjali' is a seminal work by Rabindranath Tagore.",
    "explanationHi": "'गीतांजलि' रवींद्रनाथ टैगोर की एक मौलिक कृति है।"
  },
  {
    "id": "2021-12",
    "year": "2021",
    "questionEn": "The concept of 'State of Nature' in Political Science is associated with:",
    "questionHi": "राजनीति विज्ञान में 'प्राकृतिक अवस्था' की अवधारणा किससे जुड़ी है?",
    "optionsEn": [
      "Hobbes, Locke, Rousseau",
      "Robert Michels",
      "Edward Said",
      "Sandra Harding"
    ],
    "optionsHi": [
      "हॉब्स, लॉक, रूसो",
      "रॉबर्ट मिशेल्स",
      "एडवर्ड सईद",
      "सैंड्रा हार्डिंग"
    ],
    "correctAnswer": 0,
    "explanationEn": "Hobbes, Locke, Rousseau is widely known for developing the concept of State of Nature.",
    "explanationHi": "हॉब्स, लॉक, रूसो को प्राकृतिक अवस्था की अवधारणा विकसित करने के लिए व्यापक रूप से जाना जाता है।"
  },
  {
    "id": "2021-13",
    "year": "2021",
    "questionEn": "Which section of the Indian Constitution deals with 'Money Bills'?",
    "questionHi": "भारतीय संविधान का कौन सा भाग 'धन विधेयक' से संबंधित है?",
    "optionsEn": [
      "Article 51",
      "Article 110",
      "Article 360",
      "Article 143"
    ],
    "optionsHi": [
      "अनुच्छेद 51",
      "अनुच्छेद 110",
      "अनुच्छेद 360",
      "अनुच्छेद 143"
    ],
    "correctAnswer": 1,
    "explanationEn": "Article 110 of the Indian Constitution explicitly covers Money Bills.",
    "explanationHi": "भारतीय संविधान का अनुच्छेद 110 स्पष्ट रूप से धन विधेयक को कवर करता है।"
  },
  {
    "id": "2021-14",
    "year": "2021",
    "questionEn": "In which year did the 'Government of India Act' take place?",
    "questionHi": "'भारत सरकार अधिनियम' किस वर्ष हुआ था?",
    "optionsEn": [
      "1935",
      "1857",
      "1948",
      "1945"
    ],
    "optionsHi": [
      "1935",
      "1857",
      "1948",
      "1945"
    ],
    "correctAnswer": 0,
    "explanationEn": "The Government of India Act is a significant event that occurred in 1935.",
    "explanationHi": "भारत सरकार अधिनियम एक महत्वपूर्ण घटना है जो 1935 में हुई थी।"
  },
  {
    "id": "2021-15",
    "year": "2021",
    "questionEn": "Assertion (A): Keohane & Nye is heavily associated with the political theory of Complex Interdependence.\nReason (R): This theory fundamentally shaped modern academic discourse in this sub-field.",
    "questionHi": "अभिकथन (A): केओहेन और नाई का जटिल अन्योन्याश्रयता के राजनीतिक सिद्धांत से गहरा संबंध है।\nकारण (R): इस सिद्धांत ने इस उप-क्षेत्र में आधुनिक शैक्षणिक विमर्श को मौलिक रूप से आकार दिया।",
    "optionsEn": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "optionsHi": [
      "A और R दोनों सत्य हैं और R, A की सही व्याख्या है।",
      "A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं है।",
      "A सत्य है, लेकिन R असत्य है।",
      "A असत्य है, लेकिन R सत्य है।"
    ],
    "correctAnswer": 0,
    "explanationEn": "The assertion accurately reflects Keohane & Nye's contribution to Complex Interdependence.",
    "explanationHi": "यह अभिकथन जटिल अन्योन्याश्रयता में केओहेन और नाई के योगदान को सटीक रूप से दर्शाता है।"
  },
  {
    "id": "2021-16",
    "year": "2021",
    "questionEn": "Who is the author of the famous book 'Power and Interdependence'?",
    "questionHi": "प्रसिद्ध पुस्तक 'पावर एंड इंटरडिपेंडेंस' के लेखक कौन हैं?",
    "optionsEn": [
      "J.S. Mill",
      "Adam Smith",
      "Machiavelli",
      "Keohane and Nye"
    ],
    "optionsHi": [
      "जे.एस. मिल",
      "एडम स्मिथ",
      "मैकियावेली",
      "केओहेन और नाई"
    ],
    "correctAnswer": 3,
    "explanationEn": "'Power and Interdependence' is a seminal work by Keohane and Nye.",
    "explanationHi": "'पावर एंड इंटरडिपेंडेंस' केओहेन और नाई की एक मौलिक कृति है।"
  },
  {
    "id": "2021-17",
    "year": "2021",
    "questionEn": "The concept of 'Mandala Theory' in Political Science is associated with:",
    "questionHi": "राजनीति विज्ञान में 'मंडल सिद्धांत' की अवधारणा किससे जुड़ी है?",
    "optionsEn": [
      "Keohane & Nye",
      "Aristotle",
      "Kautilya",
      "Antonio Gramsci"
    ],
    "optionsHi": [
      "केओहेन और नाई",
      "अरस्तू",
      "कौटिल्य",
      "एंटोनियो ग्राम्शी"
    ],
    "correctAnswer": 2,
    "explanationEn": "Kautilya is widely known for developing the concept of Mandala Theory.",
    "explanationHi": "कौटिल्य को मंडल सिद्धांत की अवधारणा विकसित करने के लिए व्यापक रूप से जाना जाता है।"
  },
  {
    "id": "2021-18",
    "year": "2021",
    "questionEn": "Which section of the Indian Constitution deals with 'Anti-Defection Law'?",
    "questionHi": "भारतीय संविधान का कौन सा भाग 'दल-बदल विरोधी कानून' से संबंधित है?",
    "optionsEn": [
      "Schedule 11",
      "Article 143",
      "Schedule 10",
      "Article 40"
    ],
    "optionsHi": [
      "अनुसूची 11",
      "अनुच्छेद 143",
      "अनुसूची 10",
      "अनुच्छेद 40"
    ],
    "correctAnswer": 2,
    "explanationEn": "Schedule 10 of the Indian Constitution explicitly covers Anti-Defection Law.",
    "explanationHi": "भारतीय संविधान का अनुसूची 10 स्पष्ट रूप से दल-बदल विरोधी कानून को कवर करता है।"
  },
  {
    "id": "2021-19",
    "year": "2021",
    "questionEn": "In which year did the 'Universal Declaration of Human Rights' take place?",
    "questionHi": "'मानवाधिकारों की सार्वभौम घोषणा' किस वर्ष हुआ था?",
    "optionsEn": [
      "1948",
      "1966",
      "1961",
      "1857"
    ],
    "optionsHi": [
      "1948",
      "1966",
      "1961",
      "1857"
    ],
    "correctAnswer": 0,
    "explanationEn": "The Universal Declaration of Human Rights is a significant event that occurred in 1948.",
    "explanationHi": "मानवाधिकारों की सार्वभौम घोषणा एक महत्वपूर्ण घटना है जो 1948 में हुई थी।"
  },
  {
    "id": "2021-20",
    "year": "2021",
    "questionEn": "Assertion (A): Kimberlé Crenshaw is heavily associated with the political theory of Intersectionality.\nReason (R): This theory fundamentally shaped modern academic discourse in this sub-field.",
    "questionHi": "अभिकथन (A): किम्बर्ले क्रेंशॉ का प्रतिच्छेदन (Intersectionality) के राजनीतिक सिद्धांत से गहरा संबंध है।\nकारण (R): इस सिद्धांत ने इस उप-क्षेत्र में आधुनिक शैक्षणिक विमर्श को मौलिक रूप से आकार दिया।",
    "optionsEn": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "optionsHi": [
      "A और R दोनों सत्य हैं और R, A की सही व्याख्या है।",
      "A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं है।",
      "A सत्य है, लेकिन R असत्य है।",
      "A असत्य है, लेकिन R सत्य है।"
    ],
    "correctAnswer": 0,
    "explanationEn": "The assertion accurately reflects Kimberlé Crenshaw's contribution to Intersectionality.",
    "explanationHi": "यह अभिकथन प्रतिच्छेदन (Intersectionality) में किम्बर्ले क्रेंशॉ के योगदान को सटीक रूप से दर्शाता है।"
  },
  {
    "id": "2021-21",
    "year": "2021",
    "questionEn": "Who is the author of the famous book 'Annihilation of Caste'?",
    "questionHi": "प्रसिद्ध पुस्तक 'एनिहिलेशन ऑफ कास्ट' के लेखक कौन हैं?",
    "optionsEn": [
      "Adam Smith",
      "Machiavelli",
      "B.R. Ambedkar",
      "Samuel P. Huntington"
    ],
    "optionsHi": [
      "एडम स्मिथ",
      "मैकियावेली",
      "बी.आर. अंबेडकर",
      "सैमुअल पी. हंटिंगटन"
    ],
    "correctAnswer": 2,
    "explanationEn": "'Annihilation of Caste' is a seminal work by B.R. Ambedkar.",
    "explanationHi": "'एनिहिलेशन ऑफ कास्ट' बी.आर. अंबेडकर की एक मौलिक कृति है।"
  },
  {
    "id": "2021-22",
    "year": "2021",
    "questionEn": "The concept of 'Surplus Value' in Political Science is associated with:",
    "questionHi": "राजनीति विज्ञान में 'अतिरिक्त मूल्य' की अवधारणा किससे जुड़ी है?",
    "optionsEn": [
      "Karl Marx",
      "John Rawls",
      "Karl Marx",
      "M.N. Roy"
    ],
    "optionsHi": [
      "कार्ल मार्क्स",
      "जॉन रॉल्स",
      "कार्ल मार्क्स",
      "एम.एन. रॉय"
    ],
    "correctAnswer": 0,
    "explanationEn": "Karl Marx is widely known for developing the concept of Surplus Value.",
    "explanationHi": "कार्ल मार्क्स को अतिरिक्त मूल्य की अवधारणा विकसित करने के लिए व्यापक रूप से जाना जाता है।"
  },
  {
    "id": "2021-23",
    "year": "2021",
    "questionEn": "Which section of the Indian Constitution deals with 'Equality before law'?",
    "questionHi": "भारतीय संविधान का कौन सा भाग 'कानून के समक्ष समानता' से संबंधित है?",
    "optionsEn": [
      "Schedule 10",
      "Article 370",
      "Article 14",
      "Article 32"
    ],
    "optionsHi": [
      "अनुसूची 10",
      "अनुच्छेद 370",
      "अनुच्छेद 14",
      "अनुच्छेद 32"
    ],
    "correctAnswer": 2,
    "explanationEn": "Article 14 of the Indian Constitution explicitly covers Equality before law.",
    "explanationHi": "भारतीय संविधान का अनुच्छेद 14 स्पष्ट रूप से कानून के समक्ष समानता को कवर करता है।"
  },
  {
    "id": "2021-24",
    "year": "2021",
    "questionEn": "In which year did the 'SAARC Formation' take place?",
    "questionHi": "'दक्षेस (SAARC) का गठन' किस वर्ष हुआ था?",
    "optionsEn": [
      "1942",
      "1946",
      "1948",
      "1985"
    ],
    "optionsHi": [
      "1942",
      "1946",
      "1948",
      "1985"
    ],
    "correctAnswer": 3,
    "explanationEn": "The SAARC Formation is a significant event that occurred in 1985.",
    "explanationHi": "दक्षेस (SAARC) का गठन एक महत्वपूर्ण घटना है जो 1985 में हुई थी।"
  },
  {
    "id": "2021-25",
    "year": "2021",
    "questionEn": "Assertion (A): Ram Manohar Lohia is heavily associated with the political theory of Four Pillars of State.\nReason (R): This theory fundamentally shaped modern academic discourse in this sub-field.",
    "questionHi": "अभिकथन (A): राम मनोहर लोहिया का राज्य के चार स्तंभ के राजनीतिक सिद्धांत से गहरा संबंध है।\nकारण (R): इस सिद्धांत ने इस उप-क्षेत्र में आधुनिक शैक्षणिक विमर्श को मौलिक रूप से आकार दिया।",
    "optionsEn": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "optionsHi": [
      "A और R दोनों सत्य हैं और R, A की सही व्याख्या है।",
      "A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं है।",
      "A सत्य है, लेकिन R असत्य है।",
      "A असत्य है, लेकिन R सत्य है।"
    ],
    "correctAnswer": 0,
    "explanationEn": "The assertion accurately reflects Ram Manohar Lohia's contribution to Four Pillars of State.",
    "explanationHi": "यह अभिकथन राज्य के चार स्तंभ में राम मनोहर लोहिया के योगदान को सटीक रूप से दर्शाता है।"
  },
  {
    "id": "2021-26",
    "year": "2021",
    "questionEn": "Who is the author of the famous book 'The Wretched of the Earth'?",
    "questionHi": "प्रसिद्ध पुस्तक 'द रेच्ड ऑफ द अर्थ' के लेखक कौन हैं?",
    "optionsEn": [
      "Frantz Fanon",
      "Hobbes",
      "Adam Smith",
      "Jawaharlal Nehru"
    ],
    "optionsHi": [
      "फ्रांज फैनन",
      "हॉब्स",
      "एडम स्मिथ",
      "जवाहरलाल नेहरू"
    ],
    "correctAnswer": 0,
    "explanationEn": "'The Wretched of the Earth' is a seminal work by Frantz Fanon.",
    "explanationHi": "'द रेच्ड ऑफ द अर्थ' फ्रांज फैनन की एक मौलिक कृति है।"
  },
  {
    "id": "2021-27",
    "year": "2021",
    "questionEn": "The concept of 'Post-Colonialism' in Political Science is associated with:",
    "questionHi": "राजनीति विज्ञान में 'उत्तर-उपनिवेशवाद' की अवधारणा किससे जुड़ी है?",
    "optionsEn": [
      "Robert Michels",
      "Keohane & Nye",
      "Edward Said",
      "Francis Fukuyama"
    ],
    "optionsHi": [
      "रॉबर्ट मिशेल्स",
      "केओहेन और नाई",
      "एडवर्ड सईद",
      "फ्रांसिस फुकुयामा"
    ],
    "correctAnswer": 2,
    "explanationEn": "Edward Said is widely known for developing the concept of Post-Colonialism.",
    "explanationHi": "एडवर्ड सईद को उत्तर-उपनिवेशवाद की अवधारणा विकसित करने के लिए व्यापक रूप से जाना जाता है।"
  },
  {
    "id": "2021-28",
    "year": "2021",
    "questionEn": "Which section of the Indian Constitution deals with 'Promotion of international peace'?",
    "questionHi": "भारतीय संविधान का कौन सा भाग 'अंतर्राष्ट्रीय शांति को बढ़ावा देना' से संबंधित है?",
    "optionsEn": [
      "Article 72",
      "Article 51",
      "Article 17",
      "Article 324"
    ],
    "optionsHi": [
      "अनुच्छेद 72",
      "अनुच्छेद 51",
      "अनुच्छेद 17",
      "अनुच्छेद 324"
    ],
    "correctAnswer": 1,
    "explanationEn": "Article 51 of the Indian Constitution explicitly covers Promotion of international peace.",
    "explanationHi": "भारतीय संविधान का अनुच्छेद 51 स्पष्ट रूप से अंतर्राष्ट्रीय शांति को बढ़ावा देना को कवर करता है।"
  },
  {
    "id": "2021-29",
    "year": "2021",
    "questionEn": "In which year did the 'Indo-Soviet Treaty of Peace, Friendship and Cooperation' take place?",
    "questionHi": "'भारत-सोवियत शांति, मित्रता और सहयोग संधि' किस वर्ष हुआ था?",
    "optionsEn": [
      "1992",
      "1954",
      "1971",
      "1885"
    ],
    "optionsHi": [
      "1992",
      "1954",
      "1971",
      "1885"
    ],
    "correctAnswer": 2,
    "explanationEn": "The Indo-Soviet Treaty of Peace, Friendship and Cooperation is a significant event that occurred in 1971.",
    "explanationHi": "भारत-सोवियत शांति, मित्रता और सहयोग संधि एक महत्वपूर्ण घटना है जो 1971 में हुई थी।"
  },
  {
    "id": "2021-30",
    "year": "2021",
    "questionEn": "Assertion (A): Kautilya is heavily associated with the political theory of Saptanga Theory.\nReason (R): This theory fundamentally shaped modern academic discourse in this sub-field.",
    "questionHi": "अभिकथन (A): कौटिल्य का सप्तांग सिद्धांत के राजनीतिक सिद्धांत से गहरा संबंध है।\nकारण (R): इस सिद्धांत ने इस उप-क्षेत्र में आधुनिक शैक्षणिक विमर्श को मौलिक रूप से आकार दिया।",
    "optionsEn": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "optionsHi": [
      "A और R दोनों सत्य हैं और R, A की सही व्याख्या है।",
      "A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं है।",
      "A सत्य है, लेकिन R असत्य है।",
      "A असत्य है, लेकिन R सत्य है।"
    ],
    "correctAnswer": 0,
    "explanationEn": "The assertion accurately reflects Kautilya's contribution to Saptanga Theory.",
    "explanationHi": "यह अभिकथन सप्तांग सिद्धांत में कौटिल्य के योगदान को सटीक रूप से दर्शाता है।"
  },
  {
    "id": "2021-31",
    "year": "2021",
    "questionEn": "Who is the author of the famous book 'The Civic Culture'?",
    "questionHi": "प्रसिद्ध पुस्तक 'द सिविक कल्चर' के लेखक कौन हैं?",
    "optionsEn": [
      "Simone de Beauvoir",
      "Plato",
      "Francis Fukuyama",
      "Almond and Verba"
    ],
    "optionsHi": [
      "सिमोन डी बोउवा",
      "प्लेटो",
      "फ्रांसिस फुकुयामा",
      "अल्मंड और वर्बा"
    ],
    "correctAnswer": 3,
    "explanationEn": "'The Civic Culture' is a seminal work by Almond and Verba.",
    "explanationHi": "'द सिविक कल्चर' अल्मंड और वर्बा की एक मौलिक कृति है।"
  },
  {
    "id": "2021-32",
    "year": "2021",
    "questionEn": "The concept of 'Feminist Standpoint Theory' in Political Science is associated with:",
    "questionHi": "राजनीति विज्ञान में 'नारीवादी दृष्टिकोण सिद्धांत' की अवधारणा किससे जुड़ी है?",
    "optionsEn": [
      "Michael Doyle",
      "Kimberlé Crenshaw",
      "Karl Marx",
      "Sandra Harding"
    ],
    "optionsHi": [
      "माइकल डॉयल",
      "किम्बर्ले क्रेंशॉ",
      "कार्ल मार्क्स",
      "सैंड्रा हार्डिंग"
    ],
    "correctAnswer": 3,
    "explanationEn": "Sandra Harding is widely known for developing the concept of Feminist Standpoint Theory.",
    "explanationHi": "सैंड्रा हार्डिंग को नारीवादी दृष्टिकोण सिद्धांत की अवधारणा विकसित करने के लिए व्यापक रूप से जाना जाता है।"
  },
  {
    "id": "2021-33",
    "year": "2021",
    "questionEn": "Which section of the Indian Constitution deals with 'Public Service Commissions for the Union and for the States'?",
    "questionHi": "भारतीय संविधान का कौन सा भाग 'संघ और राज्यों के लिए लोक सेवा आयोग' से संबंधित है?",
    "optionsEn": [
      "Article 262",
      "Article 280",
      "Schedule 7",
      "Article 315"
    ],
    "optionsHi": [
      "अनुच्छेद 262",
      "अनुच्छेद 280",
      "अनुसूची 7",
      "अनुच्छेद 315"
    ],
    "correctAnswer": 3,
    "explanationEn": "Article 315 of the Indian Constitution explicitly covers Public Service Commissions for the Union and for the States.",
    "explanationHi": "भारतीय संविधान का अनुच्छेद 315 स्पष्ट रूप से संघ और राज्यों के लिए लोक सेवा आयोग को कवर करता है।"
  },
  {
    "id": "2021-34",
    "year": "2021",
    "questionEn": "In which year did the 'Act East Policy' take place?",
    "questionHi": "'एक्ट ईस्ट नीति' किस वर्ष हुआ था?",
    "optionsEn": [
      "1991",
      "2014",
      "1954",
      "1999"
    ],
    "optionsHi": [
      "1991",
      "2014",
      "1954",
      "1999"
    ],
    "correctAnswer": 1,
    "explanationEn": "The Act East Policy is a significant event that occurred in 2014.",
    "explanationHi": "एक्ट ईस्ट नीति एक महत्वपूर्ण घटना है जो 2014 में हुई थी।"
  },
  {
    "id": "2021-35",
    "year": "2021",
    "questionEn": "Assertion (A): Plato is heavily associated with the political theory of Philosopher King.\nReason (R): This theory fundamentally shaped modern academic discourse in this sub-field.",
    "questionHi": "अभिकथन (A): प्लेटो का दार्शनिक राजा के राजनीतिक सिद्धांत से गहरा संबंध है।\nकारण (R): इस सिद्धांत ने इस उप-क्षेत्र में आधुनिक शैक्षणिक विमर्श को मौलिक रूप से आकार दिया।",
    "optionsEn": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "optionsHi": [
      "A और R दोनों सत्य हैं और R, A की सही व्याख्या है।",
      "A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं है।",
      "A सत्य है, लेकिन R असत्य है।",
      "A असत्य है, लेकिन R सत्य है।"
    ],
    "correctAnswer": 0,
    "explanationEn": "The assertion accurately reflects Plato's contribution to Philosopher King.",
    "explanationHi": "यह अभिकथन दार्शनिक राजा में प्लेटो के योगदान को सटीक रूप से दर्शाता है।"
  },
  {
    "id": "2021-36",
    "year": "2021",
    "questionEn": "Who is the author of the famous book 'The Human Condition'?",
    "questionHi": "प्रसिद्ध पुस्तक 'द ह्यूमन कंडीशन' के लेखक कौन हैं?",
    "optionsEn": [
      "Samuel P. Huntington",
      "Hannah Arendt",
      "Edward Said",
      "John Mearsheimer"
    ],
    "optionsHi": [
      "सैमुअल पी. हंटिंगटन",
      "हन्ना आरेंड्ट",
      "एडवर्ड सईद",
      "जॉन मियर्सहाइमर"
    ],
    "correctAnswer": 1,
    "explanationEn": "'The Human Condition' is a seminal work by Hannah Arendt.",
    "explanationHi": "'द ह्यूमन कंडीशन' हन्ना आरेंड्ट की एक मौलिक कृति है।"
  },
  {
    "id": "2021-37",
    "year": "2021",
    "questionEn": "The concept of 'Intersectionality' in Political Science is associated with:",
    "questionHi": "राजनीति विज्ञान में 'प्रतिच्छेदन (Intersectionality)' की अवधारणा किससे जुड़ी है?",
    "optionsEn": [
      "Kimberlé Crenshaw",
      "Joseph Nye",
      "Ram Manohar Lohia",
      "Jayaprakash Narayan"
    ],
    "optionsHi": [
      "किम्बर्ले क्रेंशॉ",
      "जोसेफ नाई",
      "राम मनोहर लोहिया",
      "जयप्रकाश नारायण"
    ],
    "correctAnswer": 0,
    "explanationEn": "Kimberlé Crenshaw is widely known for developing the concept of Intersectionality.",
    "explanationHi": "किम्बर्ले क्रेंशॉ को प्रतिच्छेदन (Intersectionality) की अवधारणा विकसित करने के लिए व्यापक रूप से जाना जाता है।"
  },
  {
    "id": "2021-38",
    "year": "2021",
    "questionEn": "Which section of the Indian Constitution deals with 'Power of President to consult Supreme Court'?",
    "questionHi": "भारतीय संविधान का कौन सा भाग 'सर्वोच्च न्यायालय से परामर्श करने की राष्ट्रपति की शक्ति' से संबंधित है?",
    "optionsEn": [
      "Article 262",
      "Article 21",
      "Article 143",
      "Schedule 10"
    ],
    "optionsHi": [
      "अनुच्छेद 262",
      "अनुच्छेद 21",
      "अनुच्छेद 143",
      "अनुसूची 10"
    ],
    "correctAnswer": 2,
    "explanationEn": "Article 143 of the Indian Constitution explicitly covers Power of President to consult Supreme Court.",
    "explanationHi": "भारतीय संविधान का अनुच्छेद 143 स्पष्ट रूप से सर्वोच्च न्यायालय से परामर्श करने की राष्ट्रपति की शक्ति को कवर करता है।"
  },
  {
    "id": "2021-39",
    "year": "2021",
    "questionEn": "In which year did the 'Dissolution of the Soviet Union' take place?",
    "questionHi": "'सोवियत संघ का विघटन' किस वर्ष हुआ था?",
    "optionsEn": [
      "1997",
      "1961",
      "1966",
      "1991"
    ],
    "optionsHi": [
      "1997",
      "1961",
      "1966",
      "1991"
    ],
    "correctAnswer": 3,
    "explanationEn": "The Dissolution of the Soviet Union is a significant event that occurred in 1991.",
    "explanationHi": "सोवियत संघ का विघटन एक महत्वपूर्ण घटना है जो 1991 में हुई थी।"
  },
  {
    "id": "2021-40",
    "year": "2021",
    "questionEn": "Assertion (A): Aristotle is heavily associated with the political theory of Golden Mean.\nReason (R): This theory fundamentally shaped modern academic discourse in this sub-field.",
    "questionHi": "अभिकथन (A): अरस्तू का स्वर्णिम मध्य (Golden Mean) के राजनीतिक सिद्धांत से गहरा संबंध है।\nकारण (R): इस सिद्धांत ने इस उप-क्षेत्र में आधुनिक शैक्षणिक विमर्श को मौलिक रूप से आकार दिया।",
    "optionsEn": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "optionsHi": [
      "A और R दोनों सत्य हैं और R, A की सही व्याख्या है।",
      "A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं है।",
      "A सत्य है, लेकिन R असत्य है।",
      "A असत्य है, लेकिन R सत्य है।"
    ],
    "correctAnswer": 0,
    "explanationEn": "The assertion accurately reflects Aristotle's contribution to Golden Mean.",
    "explanationHi": "यह अभिकथन स्वर्णिम मध्य (Golden Mean) में अरस्तू के योगदान को सटीक रूप से दर्शाता है।"
  },
  {
    "id": "2021-41",
    "year": "2021",
    "questionEn": "Who is the author of the famous book 'Theory of International Politics'?",
    "questionHi": "प्रसिद्ध पुस्तक 'थ्योरी ऑफ इंटरनेशनल पॉलिटिक्स' के लेखक कौन हैं?",
    "optionsEn": [
      "Simone de Beauvoir",
      "Kenneth Waltz",
      "J.S. Mill",
      "Rousseau"
    ],
    "optionsHi": [
      "सिमोन डी बोउवा",
      "केनेथ वाल्ट्ज",
      "जे.एस. मिल",
      "रूसो"
    ],
    "correctAnswer": 1,
    "explanationEn": "'Theory of International Politics' is a seminal work by Kenneth Waltz.",
    "explanationHi": "'थ्योरी ऑफ इंटरनेशनल पॉलिटिक्स' केनेथ वाल्ट्ज की एक मौलिक कृति है।"
  },
  {
    "id": "2021-42",
    "year": "2021",
    "questionEn": "The concept of 'Total Revolution' in Political Science is associated with:",
    "questionHi": "राजनीति विज्ञान में 'संपूर्ण क्रांति' की अवधारणा किससे जुड़ी है?",
    "optionsEn": [
      "Deendayal Upadhyaya",
      "Jayaprakash Narayan",
      "John Rawls",
      "Jeremy Bentham"
    ],
    "optionsHi": [
      "दीनदयाल उपाध्याय",
      "जयप्रकाश नारायण",
      "जॉन रॉल्स",
      "जेरेमी बेंथम"
    ],
    "correctAnswer": 1,
    "explanationEn": "Jayaprakash Narayan is widely known for developing the concept of Total Revolution.",
    "explanationHi": "जयप्रकाश नारायण को संपूर्ण क्रांति की अवधारणा विकसित करने के लिए व्यापक रूप से जाना जाता है।"
  },
  {
    "id": "2021-43",
    "year": "2021",
    "questionEn": "Which section of the Indian Constitution deals with 'Fundamental Duties'?",
    "questionHi": "भारतीय संविधान का कौन सा भाग 'मौलिक कर्तव्य' से संबंधित है?",
    "optionsEn": [
      "Article 312",
      "Article 143",
      "Article 352",
      "Article 51A"
    ],
    "optionsHi": [
      "अनुच्छेद 312",
      "अनुच्छेद 143",
      "अनुच्छेद 352",
      "अनुच्छेद 51A"
    ],
    "correctAnswer": 3,
    "explanationEn": "Article 51A of the Indian Constitution explicitly covers Fundamental Duties.",
    "explanationHi": "भारतीय संविधान का अनुच्छेद 51A स्पष्ट रूप से मौलिक कर्तव्य को कवर करता है।"
  },
  {
    "id": "2021-44",
    "year": "2021",
    "questionEn": "In which year did the 'Look East Policy' take place?",
    "questionHi": "'लुक ईस्ट नीति' किस वर्ष हुआ था?",
    "optionsEn": [
      "1885",
      "1995",
      "1996",
      "1992"
    ],
    "optionsHi": [
      "1885",
      "1995",
      "1996",
      "1992"
    ],
    "correctAnswer": 3,
    "explanationEn": "The Look East Policy is a significant event that occurred in 1992.",
    "explanationHi": "लुक ईस्ट नीति एक महत्वपूर्ण घटना है जो 1992 में हुई थी।"
  },
  {
    "id": "2021-45",
    "year": "2021",
    "questionEn": "Assertion (A): Ranajit Guha is heavily associated with the political theory of Subaltern Studies.\nReason (R): This theory fundamentally shaped modern academic discourse in this sub-field.",
    "questionHi": "अभिकथन (A): रणजीत गुहा का सबाल्टर्न स्टडीज के राजनीतिक सिद्धांत से गहरा संबंध है।\nकारण (R): इस सिद्धांत ने इस उप-क्षेत्र में आधुनिक शैक्षणिक विमर्श को मौलिक रूप से आकार दिया।",
    "optionsEn": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "optionsHi": [
      "A और R दोनों सत्य हैं और R, A की सही व्याख्या है।",
      "A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं है।",
      "A सत्य है, लेकिन R असत्य है।",
      "A असत्य है, लेकिन R सत्य है।"
    ],
    "correctAnswer": 0,
    "explanationEn": "The assertion accurately reflects Ranajit Guha's contribution to Subaltern Studies.",
    "explanationHi": "यह अभिकथन सबाल्टर्न स्टडीज में रणजीत गुहा के योगदान को सटीक रूप से दर्शाता है।"
  },
  {
    "id": "2021-46",
    "year": "2021",
    "questionEn": "Who is the author of the famous book 'The Clash of Civilizations'?",
    "questionHi": "प्रसिद्ध पुस्तक 'द क्लैश ऑफ सिविलाइजेशन' के लेखक कौन हैं?",
    "optionsEn": [
      "John Mearsheimer",
      "Samuel P. Huntington",
      "Antonio Gramsci",
      "Locke"
    ],
    "optionsHi": [
      "जॉन मियर्सहाइमर",
      "सैमुअल पी. हंटिंगटन",
      "एंटोनियो ग्राम्शी",
      "लॉक"
    ],
    "correctAnswer": 1,
    "explanationEn": "'The Clash of Civilizations' is a seminal work by Samuel P. Huntington.",
    "explanationHi": "'द क्लैश ऑफ सिविलाइजेशन' सैमुअल पी. हंटिंगटन की एक मौलिक कृति है।"
  },
  {
    "id": "2021-47",
    "year": "2021",
    "questionEn": "The concept of 'State of Nature' in Political Science is associated with:",
    "questionHi": "राजनीति विज्ञान में 'प्राकृतिक अवस्था' की अवधारणा किससे जुड़ी है?",
    "optionsEn": [
      "Hobbes, Locke, Rousseau",
      "Karl Marx",
      "Robert Michels",
      "Keohane & Nye"
    ],
    "optionsHi": [
      "हॉब्स, लॉक, रूसो",
      "कार्ल मार्क्स",
      "रॉबर्ट मिशेल्स",
      "केओहेन और नाई"
    ],
    "correctAnswer": 0,
    "explanationEn": "Hobbes, Locke, Rousseau is widely known for developing the concept of State of Nature.",
    "explanationHi": "हॉब्स, लॉक, रूसो को प्राकृतिक अवस्था की अवधारणा विकसित करने के लिए व्यापक रूप से जाना जाता है।"
  },
  {
    "id": "2021-48",
    "year": "2021",
    "questionEn": "Which section of the Indian Constitution deals with 'National Emergency'?",
    "questionHi": "भारतीय संविधान का कौन सा भाग 'राष्ट्रीय आपातकाल' से संबंधित है?",
    "optionsEn": [
      "Article 352",
      "Schedule 7",
      "Article 40",
      "Article 17"
    ],
    "optionsHi": [
      "अनुच्छेद 352",
      "अनुसूची 7",
      "अनुच्छेद 40",
      "अनुच्छेद 17"
    ],
    "correctAnswer": 0,
    "explanationEn": "Article 352 of the Indian Constitution explicitly covers National Emergency.",
    "explanationHi": "भारतीय संविधान का अनुच्छेद 352 स्पष्ट रूप से राष्ट्रीय आपातकाल को कवर करता है।"
  },
  {
    "id": "2021-49",
    "year": "2021",
    "questionEn": "In which year did the 'Brexit Referendum' take place?",
    "questionHi": "'ब्रेक्सिट जनमत संग्रह' किस वर्ष हुआ था?",
    "optionsEn": [
      "1945",
      "1942",
      "1989",
      "2016"
    ],
    "optionsHi": [
      "1945",
      "1942",
      "1989",
      "2016"
    ],
    "correctAnswer": 3,
    "explanationEn": "The Brexit Referendum is a significant event that occurred in 2016.",
    "explanationHi": "ब्रेक्सिट जनमत संग्रह एक महत्वपूर्ण घटना है जो 2016 में हुई थी।"
  },
  {
    "id": "2021-50",
    "year": "2021",
    "questionEn": "Assertion (A): Karl Marx is heavily associated with the political theory of Dialectical Materialism.\nReason (R): This theory fundamentally shaped modern academic discourse in this sub-field.",
    "questionHi": "अभिकथन (A): कार्ल मार्क्स का द्वंद्वात्मक भौतिकवाद के राजनीतिक सिद्धांत से गहरा संबंध है।\nकारण (R): इस सिद्धांत ने इस उप-क्षेत्र में आधुनिक शैक्षणिक विमर्श को मौलिक रूप से आकार दिया।",
    "optionsEn": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "optionsHi": [
      "A और R दोनों सत्य हैं और R, A की सही व्याख्या है।",
      "A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं है।",
      "A सत्य है, लेकिन R असत्य है।",
      "A असत्य है, लेकिन R सत्य है।"
    ],
    "correctAnswer": 0,
    "explanationEn": "The assertion accurately reflects Karl Marx's contribution to Dialectical Materialism.",
    "explanationHi": "यह अभिकथन द्वंद्वात्मक भौतिकवाद में कार्ल मार्क्स के योगदान को सटीक रूप से दर्शाता है।"
  },
  {
    "id": "2022-1",
    "year": "2022",
    "questionEn": "Who is the author of the famous book 'The Open Society and Its Enemies'?",
    "questionHi": "प्रसिद्ध पुस्तक 'द ओपन सोसाइटी एंड इट्स एनिमीज' के लेखक कौन हैं?",
    "optionsEn": [
      "Jawaharlal Nehru",
      "Mahatma Gandhi",
      "Aristotle",
      "Karl Popper"
    ],
    "optionsHi": [
      "जवाहरलाल नेहरू",
      "महात्मा गांधी",
      "अरस्तू",
      "कार्ल पॉपर"
    ],
    "correctAnswer": 3,
    "explanationEn": "'The Open Society and Its Enemies' is a seminal work by Karl Popper.",
    "explanationHi": "'द ओपन सोसाइटी एंड इट्स एनिमीज' कार्ल पॉपर की एक मौलिक कृति है।"
  },
  {
    "id": "2022-2",
    "year": "2022",
    "questionEn": "The concept of 'End of History' in Political Science is associated with:",
    "questionHi": "राजनीति विज्ञान में 'इतिहास का अंत' की अवधारणा किससे जुड़ी है?",
    "optionsEn": [
      "Keohane & Nye",
      "Francis Fukuyama",
      "Deendayal Upadhyaya",
      "John Rawls"
    ],
    "optionsHi": [
      "केओहेन और नाई",
      "फ्रांसिस फुकुयामा",
      "दीनदयाल उपाध्याय",
      "जॉन रॉल्स"
    ],
    "correctAnswer": 1,
    "explanationEn": "Francis Fukuyama is widely known for developing the concept of End of History.",
    "explanationHi": "फ्रांसिस फुकुयामा को इतिहास का अंत की अवधारणा विकसित करने के लिए व्यापक रूप से जाना जाता है।"
  },
  {
    "id": "2022-3",
    "year": "2022",
    "questionEn": "Which section of the Indian Constitution deals with 'Panchayati Raj'?",
    "questionHi": "भारतीय संविधान का कौन सा भाग 'पंचायती राज' से संबंधित है?",
    "optionsEn": [
      "Article 51",
      "Schedule 11",
      "Article 370",
      "Article 315"
    ],
    "optionsHi": [
      "अनुच्छेद 51",
      "अनुसूची 11",
      "अनुच्छेद 370",
      "अनुच्छेद 315"
    ],
    "correctAnswer": 1,
    "explanationEn": "Schedule 11 of the Indian Constitution explicitly covers Panchayati Raj.",
    "explanationHi": "भारतीय संविधान का अनुसूची 11 स्पष्ट रूप से पंचायती राज को कवर करता है।"
  },
  {
    "id": "2022-4",
    "year": "2022",
    "questionEn": "In which year did the 'Quit India Movement' take place?",
    "questionHi": "'भारत छोड़ो आंदोलन' किस वर्ष हुआ था?",
    "optionsEn": [
      "1961",
      "1962",
      "1946",
      "1942"
    ],
    "optionsHi": [
      "1961",
      "1962",
      "1946",
      "1942"
    ],
    "correctAnswer": 3,
    "explanationEn": "The Quit India Movement is a significant event that occurred in 1942.",
    "explanationHi": "भारत छोड़ो आंदोलन एक महत्वपूर्ण घटना है जो 1942 में हुई थी।"
  },
  {
    "id": "2022-5",
    "year": "2022",
    "questionEn": "Assertion (A): John Rawls is heavily associated with the political theory of Overlapping Consensus.\nReason (R): This theory fundamentally shaped modern academic discourse in this sub-field.",
    "questionHi": "अभिकथन (A): जॉन रॉल्स का अतिव्यापी आम सहमति के राजनीतिक सिद्धांत से गहरा संबंध है।\nकारण (R): इस सिद्धांत ने इस उप-क्षेत्र में आधुनिक शैक्षणिक विमर्श को मौलिक रूप से आकार दिया।",
    "optionsEn": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "optionsHi": [
      "A और R दोनों सत्य हैं और R, A की सही व्याख्या है।",
      "A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं है।",
      "A सत्य है, लेकिन R असत्य है।",
      "A असत्य है, लेकिन R सत्य है।"
    ],
    "correctAnswer": 0,
    "explanationEn": "The assertion accurately reflects John Rawls's contribution to Overlapping Consensus.",
    "explanationHi": "यह अभिकथन अतिव्यापी आम सहमति में जॉन रॉल्स के योगदान को सटीक रूप से दर्शाता है।"
  },
  {
    "id": "2022-6",
    "year": "2022",
    "questionEn": "Who is the author of the famous book 'On Liberty'?",
    "questionHi": "प्रसिद्ध पुस्तक 'ऑन लिबर्टी' के लेखक कौन हैं?",
    "optionsEn": [
      "Kautilya",
      "Karl Popper",
      "J.S. Mill",
      "Adam Smith"
    ],
    "optionsHi": [
      "कौटिल्य",
      "कार्ल पॉपर",
      "जे.एस. मिल",
      "एडम स्मिथ"
    ],
    "correctAnswer": 2,
    "explanationEn": "'On Liberty' is a seminal work by J.S. Mill.",
    "explanationHi": "'ऑन लिबर्टी' जे.एस. मिल की एक मौलिक कृति है।"
  },
  {
    "id": "2022-7",
    "year": "2022",
    "questionEn": "The concept of 'Complex Interdependence' in Political Science is associated with:",
    "questionHi": "राजनीति विज्ञान में 'जटिल अन्योन्याश्रयता' की अवधारणा किससे जुड़ी है?",
    "optionsEn": [
      "Keohane & Nye",
      "Jayaprakash Narayan",
      "M.N. Roy",
      "John Rawls"
    ],
    "optionsHi": [
      "केओहेन और नाई",
      "जयप्रकाश नारायण",
      "एम.एन. रॉय",
      "जॉन रॉल्स"
    ],
    "correctAnswer": 0,
    "explanationEn": "Keohane & Nye is widely known for developing the concept of Complex Interdependence.",
    "explanationHi": "केओहेन और नाई को जटिल अन्योन्याश्रयता की अवधारणा विकसित करने के लिए व्यापक रूप से जाना जाता है।"
  },
  {
    "id": "2022-8",
    "year": "2022",
    "questionEn": "Which section of the Indian Constitution deals with 'Financial Emergency'?",
    "questionHi": "भारतीय संविधान का कौन सा भाग 'वित्तीय आपातकाल' से संबंधित है?",
    "optionsEn": [
      "Article 51A",
      "Article 368",
      "Article 360",
      "Article 315"
    ],
    "optionsHi": [
      "अनुच्छेद 51A",
      "अनुच्छेद 368",
      "अनुच्छेद 360",
      "अनुच्छेद 315"
    ],
    "correctAnswer": 2,
    "explanationEn": "Article 360 of the Indian Constitution explicitly covers Financial Emergency.",
    "explanationHi": "भारतीय संविधान का अनुच्छेद 360 स्पष्ट रूप से वित्तीय आपातकाल को कवर करता है।"
  },
  {
    "id": "2022-9",
    "year": "2022",
    "questionEn": "In which year did the 'Indo-US Civil Nuclear Agreement' take place?",
    "questionHi": "'भारत-अमेरिका असैन्य परमाणु समझौता' किस वर्ष हुआ था?",
    "optionsEn": [
      "2015",
      "1972",
      "2008",
      "1974"
    ],
    "optionsHi": [
      "2015",
      "1972",
      "2008",
      "1974"
    ],
    "correctAnswer": 2,
    "explanationEn": "The Indo-US Civil Nuclear Agreement is a significant event that occurred in 2008.",
    "explanationHi": "भारत-अमेरिका असैन्य परमाणु समझौता एक महत्वपूर्ण घटना है जो 2008 में हुई थी।"
  },
  {
    "id": "2022-10",
    "year": "2022",
    "questionEn": "Assertion (A): Ram Manohar Lohia is heavily associated with the political theory of Four Pillars of State.\nReason (R): This theory fundamentally shaped modern academic discourse in this sub-field.",
    "questionHi": "अभिकथन (A): राम मनोहर लोहिया का राज्य के चार स्तंभ के राजनीतिक सिद्धांत से गहरा संबंध है।\nकारण (R): इस सिद्धांत ने इस उप-क्षेत्र में आधुनिक शैक्षणिक विमर्श को मौलिक रूप से आकार दिया।",
    "optionsEn": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "optionsHi": [
      "A और R दोनों सत्य हैं और R, A की सही व्याख्या है।",
      "A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं है।",
      "A सत्य है, लेकिन R असत्य है।",
      "A असत्य है, लेकिन R सत्य है।"
    ],
    "correctAnswer": 0,
    "explanationEn": "The assertion accurately reflects Ram Manohar Lohia's contribution to Four Pillars of State.",
    "explanationHi": "यह अभिकथन राज्य के चार स्तंभ में राम मनोहर लोहिया के योगदान को सटीक रूप से दर्शाता है।"
  },
  {
    "id": "2022-11",
    "year": "2022",
    "questionEn": "Who is the author of the famous book 'The Second Sex'?",
    "questionHi": "प्रसिद्ध पुस्तक 'द सेकंड सेक्स' के लेखक कौन हैं?",
    "optionsEn": [
      "Almond and Verba",
      "Karl Popper",
      "Simone de Beauvoir",
      "Francis Fukuyama"
    ],
    "optionsHi": [
      "अल्मंड और वर्बा",
      "कार्ल पॉपर",
      "सिमोन डी बोउवा",
      "फ्रांसिस फुकुयामा"
    ],
    "correctAnswer": 2,
    "explanationEn": "'The Second Sex' is a seminal work by Simone de Beauvoir.",
    "explanationHi": "'द सेकंड सेक्स' सिमोन डी बोउवा की एक मौलिक कृति है।"
  },
  {
    "id": "2022-12",
    "year": "2022",
    "questionEn": "The concept of 'Soft Power' in Political Science is associated with:",
    "questionHi": "राजनीति विज्ञान में 'सॉफ्ट पावर' की अवधारणा किससे जुड़ी है?",
    "optionsEn": [
      "Joseph Nye",
      "Aristotle",
      "Kimberlé Crenshaw",
      "Kautilya"
    ],
    "optionsHi": [
      "जोसेफ नाई",
      "अरस्तू",
      "किम्बर्ले क्रेंशॉ",
      "कौटिल्य"
    ],
    "correctAnswer": 0,
    "explanationEn": "Joseph Nye is widely known for developing the concept of Soft Power.",
    "explanationHi": "जोसेफ नाई को सॉफ्ट पावर की अवधारणा विकसित करने के लिए व्यापक रूप से जाना जाता है।"
  },
  {
    "id": "2022-13",
    "year": "2022",
    "questionEn": "Which section of the Indian Constitution deals with 'Right to Property'?",
    "questionHi": "भारतीय संविधान का कौन सा भाग 'संपत्ति का अधिकार' से संबंधित है?",
    "optionsEn": [
      "Article 17",
      "Article 72",
      "Schedule 7",
      "Article 300A"
    ],
    "optionsHi": [
      "अनुच्छेद 17",
      "अनुच्छेद 72",
      "अनुसूची 7",
      "अनुच्छेद 300A"
    ],
    "correctAnswer": 3,
    "explanationEn": "Article 300A of the Indian Constitution explicitly covers Right to Property.",
    "explanationHi": "भारतीय संविधान का अनुच्छेद 300A स्पष्ट रूप से संपत्ति का अधिकार को कवर करता है।"
  },
  {
    "id": "2022-14",
    "year": "2022",
    "questionEn": "In which year did the 'Paris Climate Agreement' take place?",
    "questionHi": "'पेरिस जलवायु समझौता' किस वर्ष हुआ था?",
    "optionsEn": [
      "1919",
      "2015",
      "1948",
      "1991"
    ],
    "optionsHi": [
      "1919",
      "2015",
      "1948",
      "1991"
    ],
    "correctAnswer": 1,
    "explanationEn": "The Paris Climate Agreement is a significant event that occurred in 2015.",
    "explanationHi": "पेरिस जलवायु समझौता एक महत्वपूर्ण घटना है जो 2015 में हुई थी।"
  },
  {
    "id": "2022-15",
    "year": "2022",
    "questionEn": "Assertion (A): Mahatma Gandhi is heavily associated with the political theory of Satyagraha.\nReason (R): This theory fundamentally shaped modern academic discourse in this sub-field.",
    "questionHi": "अभिकथन (A): महात्मा गांधी का सत्याग्रह के राजनीतिक सिद्धांत से गहरा संबंध है।\nकारण (R): इस सिद्धांत ने इस उप-क्षेत्र में आधुनिक शैक्षणिक विमर्श को मौलिक रूप से आकार दिया।",
    "optionsEn": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "optionsHi": [
      "A और R दोनों सत्य हैं और R, A की सही व्याख्या है।",
      "A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं है।",
      "A सत्य है, लेकिन R असत्य है।",
      "A असत्य है, लेकिन R सत्य है।"
    ],
    "correctAnswer": 0,
    "explanationEn": "The assertion accurately reflects Mahatma Gandhi's contribution to Satyagraha.",
    "explanationHi": "यह अभिकथन सत्याग्रह में महात्मा गांधी के योगदान को सटीक रूप से दर्शाता है।"
  },
  {
    "id": "2022-16",
    "year": "2022",
    "questionEn": "Who is the author of the famous book 'The Communist Manifesto'?",
    "questionHi": "प्रसिद्ध पुस्तक 'द कम्युनिस्ट मेनिफेस्टो' के लेखक कौन हैं?",
    "optionsEn": [
      "Kenneth Waltz",
      "Machiavelli",
      "Locke",
      "Karl Marx"
    ],
    "optionsHi": [
      "केनेथ वाल्ट्ज",
      "मैकियावेली",
      "लॉक",
      "कार्ल मार्क्स"
    ],
    "correctAnswer": 3,
    "explanationEn": "'The Communist Manifesto' is a seminal work by Karl Marx.",
    "explanationHi": "'द कम्युनिस्ट मेनिफेस्टो' कार्ल मार्क्स की एक मौलिक कृति है।"
  },
  {
    "id": "2022-17",
    "year": "2022",
    "questionEn": "The concept of 'Democratic Peace Theory' in Political Science is associated with:",
    "questionHi": "राजनीति विज्ञान में 'लोकतांत्रिक शांति सिद्धांत' की अवधारणा किससे जुड़ी है?",
    "optionsEn": [
      "Plato",
      "Michael Doyle",
      "Kautilya",
      "Sandra Harding"
    ],
    "optionsHi": [
      "प्लेटो",
      "माइकल डॉयल",
      "कौटिल्य",
      "सैंड्रा हार्डिंग"
    ],
    "correctAnswer": 1,
    "explanationEn": "Michael Doyle is widely known for developing the concept of Democratic Peace Theory.",
    "explanationHi": "माइकल डॉयल को लोकतांत्रिक शांति सिद्धांत की अवधारणा विकसित करने के लिए व्यापक रूप से जाना जाता है।"
  },
  {
    "id": "2022-18",
    "year": "2022",
    "questionEn": "Which section of the Indian Constitution deals with 'Pardoning power of President'?",
    "questionHi": "भारतीय संविधान का कौन सा भाग 'राष्ट्रपति की क्षमादान शक्ति' से संबंधित है?",
    "optionsEn": [
      "Schedule 7",
      "Article 356",
      "Article 51A",
      "Article 72"
    ],
    "optionsHi": [
      "अनुसूची 7",
      "अनुच्छेद 356",
      "अनुच्छेद 51A",
      "अनुच्छेद 72"
    ],
    "correctAnswer": 3,
    "explanationEn": "Article 72 of the Indian Constitution explicitly covers Pardoning power of President.",
    "explanationHi": "भारतीय संविधान का अनुच्छेद 72 स्पष्ट रूप से राष्ट्रपति की क्षमादान शक्ति को कवर करता है।"
  },
  {
    "id": "2022-19",
    "year": "2022",
    "questionEn": "In which year did the 'Morley-Minto Reforms' take place?",
    "questionHi": "'मार्ले-मिंटो सुधार' किस वर्ष हुआ था?",
    "optionsEn": [
      "1909",
      "1992",
      "1989",
      "2014"
    ],
    "optionsHi": [
      "1909",
      "1992",
      "1989",
      "2014"
    ],
    "correctAnswer": 0,
    "explanationEn": "The Morley-Minto Reforms is a significant event that occurred in 1909.",
    "explanationHi": "मार्ले-मिंटो सुधार एक महत्वपूर्ण घटना है जो 1909 में हुई थी।"
  },
  {
    "id": "2022-20",
    "year": "2022",
    "questionEn": "Assertion (A): Jeremy Bentham is heavily associated with the political theory of Utilitarianism.\nReason (R): This theory fundamentally shaped modern academic discourse in this sub-field.",
    "questionHi": "अभिकथन (A): जेरेमी बेंथम का उपयोगितावाद के राजनीतिक सिद्धांत से गहरा संबंध है।\nकारण (R): इस सिद्धांत ने इस उप-क्षेत्र में आधुनिक शैक्षणिक विमर्श को मौलिक रूप से आकार दिया।",
    "optionsEn": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "optionsHi": [
      "A और R दोनों सत्य हैं और R, A की सही व्याख्या है।",
      "A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं है।",
      "A सत्य है, लेकिन R असत्य है।",
      "A असत्य है, लेकिन R सत्य है।"
    ],
    "correctAnswer": 0,
    "explanationEn": "The assertion accurately reflects Jeremy Bentham's contribution to Utilitarianism.",
    "explanationHi": "यह अभिकथन उपयोगितावाद में जेरेमी बेंथम के योगदान को सटीक रूप से दर्शाता है।"
  },
  {
    "id": "2022-21",
    "year": "2022",
    "questionEn": "Who is the author of the famous book 'The Wealth of Nations'?",
    "questionHi": "प्रसिद्ध पुस्तक 'द वेल्थ ऑफ नेशंस' के लेखक कौन हैं?",
    "optionsEn": [
      "Karl Marx",
      "John Mearsheimer",
      "Adam Smith",
      "Kautilya"
    ],
    "optionsHi": [
      "कार्ल मार्क्स",
      "जॉन मियर्सहाइमर",
      "एडम स्मिथ",
      "कौटिल्य"
    ],
    "correctAnswer": 2,
    "explanationEn": "'The Wealth of Nations' is a seminal work by Adam Smith.",
    "explanationHi": "'द वेल्थ ऑफ नेशंस' एडम स्मिथ की एक मौलिक कृति है।"
  },
  {
    "id": "2022-22",
    "year": "2022",
    "questionEn": "The concept of 'Iron Law of Oligarchy' in Political Science is associated with:",
    "questionHi": "राजनीति विज्ञान में 'अल्पतंत्र का लौह नियम' की अवधारणा किससे जुड़ी है?",
    "optionsEn": [
      "Jayaprakash Narayan",
      "M.N. Roy",
      "Robert Michels",
      "Aristotle"
    ],
    "optionsHi": [
      "जयप्रकाश नारायण",
      "एम.एन. रॉय",
      "रॉबर्ट मिशेल्स",
      "अरस्तू"
    ],
    "correctAnswer": 2,
    "explanationEn": "Robert Michels is widely known for developing the concept of Iron Law of Oligarchy.",
    "explanationHi": "रॉबर्ट मिशेल्स को अल्पतंत्र का लौह नियम की अवधारणा विकसित करने के लिए व्यापक रूप से जाना जाता है।"
  },
  {
    "id": "2022-23",
    "year": "2022",
    "questionEn": "Which section of the Indian Constitution deals with 'Protection of life and personal liberty'?",
    "questionHi": "भारतीय संविधान का कौन सा भाग 'प्राण और दैहिक स्वतंत्रता का संरक्षण' से संबंधित है?",
    "optionsEn": [
      "Article 368",
      "Article 370",
      "Article 169",
      "Article 21"
    ],
    "optionsHi": [
      "अनुच्छेद 368",
      "अनुच्छेद 370",
      "अनुच्छेद 169",
      "अनुच्छेद 21"
    ],
    "correctAnswer": 3,
    "explanationEn": "Article 21 of the Indian Constitution explicitly covers Protection of life and personal liberty.",
    "explanationHi": "भारतीय संविधान का अनुच्छेद 21 स्पष्ट रूप से प्राण और दैहिक स्वतंत्रता का संरक्षण को कवर करता है।"
  },
  {
    "id": "2022-24",
    "year": "2022",
    "questionEn": "In which year did the 'September 11 Attacks' take place?",
    "questionHi": "'11 सितंबर के हमले (9/11)' किस वर्ष हुआ था?",
    "optionsEn": [
      "1974",
      "2001",
      "1945",
      "1992"
    ],
    "optionsHi": [
      "1974",
      "2001",
      "1945",
      "1992"
    ],
    "correctAnswer": 1,
    "explanationEn": "The September 11 Attacks is a significant event that occurred in 2001.",
    "explanationHi": "11 सितंबर के हमले (9/11) एक महत्वपूर्ण घटना है जो 2001 में हुई थी।"
  },
  {
    "id": "2022-25",
    "year": "2022",
    "questionEn": "Assertion (A): Deendayal Upadhyaya is heavily associated with the political theory of Integral Humanism.\nReason (R): This theory fundamentally shaped modern academic discourse in this sub-field.",
    "questionHi": "अभिकथन (A): दीनदयाल उपाध्याय का एकात्म मानववाद के राजनीतिक सिद्धांत से गहरा संबंध है।\nकारण (R): इस सिद्धांत ने इस उप-क्षेत्र में आधुनिक शैक्षणिक विमर्श को मौलिक रूप से आकार दिया।",
    "optionsEn": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "optionsHi": [
      "A और R दोनों सत्य हैं और R, A की सही व्याख्या है।",
      "A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं है।",
      "A सत्य है, लेकिन R असत्य है।",
      "A असत्य है, लेकिन R सत्य है।"
    ],
    "correctAnswer": 0,
    "explanationEn": "The assertion accurately reflects Deendayal Upadhyaya's contribution to Integral Humanism.",
    "explanationHi": "यह अभिकथन एकात्म मानववाद में दीनदयाल उपाध्याय के योगदान को सटीक रूप से दर्शाता है।"
  },
  {
    "id": "2022-26",
    "year": "2022",
    "questionEn": "Who is the author of the famous book 'Social Contract'?",
    "questionHi": "प्रसिद्ध पुस्तक 'सोशल कॉन्ट्रैक्ट' के लेखक कौन हैं?",
    "optionsEn": [
      "Rousseau",
      "Hobbes",
      "Plato",
      "Robert Dahl"
    ],
    "optionsHi": [
      "रूसो",
      "हॉब्स",
      "प्लेटो",
      "रॉबर्ट डाहल"
    ],
    "correctAnswer": 0,
    "explanationEn": "'Social Contract' is a seminal work by Rousseau.",
    "explanationHi": "'सोशल कॉन्ट्रैक्ट' रूसो की एक मौलिक कृति है।"
  },
  {
    "id": "2022-27",
    "year": "2022",
    "questionEn": "The concept of 'Separation of Powers' in Political Science is associated with:",
    "questionHi": "राजनीति विज्ञान में 'शक्तियों का पृथक्करण' की अवधारणा किससे जुड़ी है?",
    "optionsEn": [
      "Michael Doyle",
      "Kautilya",
      "Montesquieu",
      "Karl Marx"
    ],
    "optionsHi": [
      "माइकल डॉयल",
      "कौटिल्य",
      "मोंटेस्क्यू",
      "कार्ल मार्क्स"
    ],
    "correctAnswer": 2,
    "explanationEn": "Montesquieu is widely known for developing the concept of Separation of Powers.",
    "explanationHi": "मोंटेस्क्यू को शक्तियों का पृथक्करण की अवधारणा विकसित करने के लिए व्यापक रूप से जाना जाता है।"
  },
  {
    "id": "2022-28",
    "year": "2022",
    "questionEn": "Which section of the Indian Constitution deals with 'Comptroller and Auditor-General of India'?",
    "questionHi": "भारतीय संविधान का कौन सा भाग 'भारत के नियंत्रक और महालेखा परीक्षक' से संबंधित है?",
    "optionsEn": [
      "Schedule 11",
      "Article 72",
      "Article 51A",
      "Article 148"
    ],
    "optionsHi": [
      "अनुसूची 11",
      "अनुच्छेद 72",
      "अनुच्छेद 51A",
      "अनुच्छेद 148"
    ],
    "correctAnswer": 3,
    "explanationEn": "Article 148 of the Indian Constitution explicitly covers Comptroller and Auditor-General of India.",
    "explanationHi": "भारतीय संविधान का अनुच्छेद 148 स्पष्ट रूप से भारत के नियंत्रक और महालेखा परीक्षक को कवर करता है।"
  },
  {
    "id": "2022-29",
    "year": "2022",
    "questionEn": "In which year did the 'First Non-Aligned Summit (Belgrade)' take place?",
    "questionHi": "'पहला गुटनिरपेक्ष शिखर सम्मेलन (बेलग्रेड)' किस वर्ष हुआ था?",
    "optionsEn": [
      "1945",
      "1962",
      "1991",
      "1961"
    ],
    "optionsHi": [
      "1945",
      "1962",
      "1991",
      "1961"
    ],
    "correctAnswer": 3,
    "explanationEn": "The First Non-Aligned Summit (Belgrade) is a significant event that occurred in 1961.",
    "explanationHi": "पहला गुटनिरपेक्ष शिखर सम्मेलन (बेलग्रेड) एक महत्वपूर्ण घटना है जो 1961 में हुई थी।"
  },
  {
    "id": "2022-30",
    "year": "2022",
    "questionEn": "Assertion (A): Karl Marx is heavily associated with the political theory of Surplus Value.\nReason (R): This theory fundamentally shaped modern academic discourse in this sub-field.",
    "questionHi": "अभिकथन (A): कार्ल मार्क्स का अतिरिक्त मूल्य के राजनीतिक सिद्धांत से गहरा संबंध है।\nकारण (R): इस सिद्धांत ने इस उप-क्षेत्र में आधुनिक शैक्षणिक विमर्श को मौलिक रूप से आकार दिया।",
    "optionsEn": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "optionsHi": [
      "A और R दोनों सत्य हैं और R, A की सही व्याख्या है।",
      "A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं है।",
      "A सत्य है, लेकिन R असत्य है।",
      "A असत्य है, लेकिन R सत्य है।"
    ],
    "correctAnswer": 0,
    "explanationEn": "The assertion accurately reflects Karl Marx's contribution to Surplus Value.",
    "explanationHi": "यह अभिकथन अतिरिक्त मूल्य में कार्ल मार्क्स के योगदान को सटीक रूप से दर्शाता है।"
  },
  {
    "id": "2022-31",
    "year": "2022",
    "questionEn": "Who is the author of the famous book 'The End of History'?",
    "questionHi": "प्रसिद्ध पुस्तक 'द एंड ऑफ हिस्ट्री' के लेखक कौन हैं?",
    "optionsEn": [
      "Antonio Gramsci",
      "B.R. Ambedkar",
      "Francis Fukuyama",
      "Jawaharlal Nehru"
    ],
    "optionsHi": [
      "एंटोनियो ग्राम्शी",
      "बी.आर. अंबेडकर",
      "फ्रांसिस फुकुयामा",
      "जवाहरलाल नेहरू"
    ],
    "correctAnswer": 2,
    "explanationEn": "'The End of History' is a seminal work by Francis Fukuyama.",
    "explanationHi": "'द एंड ऑफ हिस्ट्री' फ्रांसिस फुकुयामा की एक मौलिक कृति है।"
  },
  {
    "id": "2022-32",
    "year": "2022",
    "questionEn": "The concept of 'Ecological Imperialism' in Political Science is associated with:",
    "questionHi": "राजनीति विज्ञान में 'पारिस्थितिक साम्राज्यवाद' की अवधारणा किससे जुड़ी है?",
    "optionsEn": [
      "Mahatma Gandhi",
      "Alfred Crosby",
      "Francis Fukuyama",
      "Edward Said"
    ],
    "optionsHi": [
      "महात्मा गांधी",
      "अल्फ्रेड क्रॉस्बी",
      "फ्रांसिस फुकुयामा",
      "एडवर्ड सईद"
    ],
    "correctAnswer": 1,
    "explanationEn": "Alfred Crosby is widely known for developing the concept of Ecological Imperialism.",
    "explanationHi": "अल्फ्रेड क्रॉस्बी को पारिस्थितिक साम्राज्यवाद की अवधारणा विकसित करने के लिए व्यापक रूप से जाना जाता है।"
  },
  {
    "id": "2022-33",
    "year": "2022",
    "questionEn": "Which section of the Indian Constitution deals with 'Special status of Jammu and Kashmir'?",
    "questionHi": "भारतीय संविधान का कौन सा भाग 'जम्मू और कश्मीर का विशेष दर्जा (निरस्त)' से संबंधित है?",
    "optionsEn": [
      "Article 226",
      "Article 143",
      "Article 148",
      "Article 370"
    ],
    "optionsHi": [
      "अनुच्छेद 226",
      "अनुच्छेद 143",
      "अनुच्छेद 148",
      "अनुच्छेद 370"
    ],
    "correctAnswer": 3,
    "explanationEn": "Article 370 of the Indian Constitution explicitly covers Special status of Jammu and Kashmir.",
    "explanationHi": "भारतीय संविधान का अनुच्छेद 370 स्पष्ट रूप से जम्मू और कश्मीर का विशेष दर्जा (निरस्त) को कवर करता है।"
  },
  {
    "id": "2022-34",
    "year": "2022",
    "questionEn": "In which year did the 'Establishment of WTO' take place?",
    "questionHi": "'विश्व व्यापार संगठन (WTO) की स्थापना' किस वर्ष हुआ था?",
    "optionsEn": [
      "1989",
      "1997",
      "1954",
      "1995"
    ],
    "optionsHi": [
      "1989",
      "1997",
      "1954",
      "1995"
    ],
    "correctAnswer": 3,
    "explanationEn": "The Establishment of WTO is a significant event that occurred in 1995.",
    "explanationHi": "विश्व व्यापार संगठन (WTO) की स्थापना एक महत्वपूर्ण घटना है जो 1995 में हुई थी।"
  },
  {
    "id": "2022-35",
    "year": "2022",
    "questionEn": "Assertion (A): Samuel P. Huntington is heavily associated with the political theory of Clash of Civilizations.\nReason (R): This theory fundamentally shaped modern academic discourse in this sub-field.",
    "questionHi": "अभिकथन (A): सैमुअल पी. हंटिंगटन का सभ्यताओं का संघर्ष के राजनीतिक सिद्धांत से गहरा संबंध है।\nकारण (R): इस सिद्धांत ने इस उप-क्षेत्र में आधुनिक शैक्षणिक विमर्श को मौलिक रूप से आकार दिया।",
    "optionsEn": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "optionsHi": [
      "A और R दोनों सत्य हैं और R, A की सही व्याख्या है।",
      "A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं है।",
      "A सत्य है, लेकिन R असत्य है।",
      "A असत्य है, लेकिन R सत्य है।"
    ],
    "correctAnswer": 0,
    "explanationEn": "The assertion accurately reflects Samuel P. Huntington's contribution to Clash of Civilizations.",
    "explanationHi": "यह अभिकथन सभ्यताओं का संघर्ष में सैमुअल पी. हंटिंगटन के योगदान को सटीक रूप से दर्शाता है।"
  },
  {
    "id": "2022-36",
    "year": "2022",
    "questionEn": "Who is the author of the famous book 'Orientalism'?",
    "questionHi": "प्रसिद्ध पुस्तक 'ओरिएंटलिज़्म' के लेखक कौन हैं?",
    "optionsEn": [
      "J.S. Mill",
      "Edward Said",
      "Mahatma Gandhi",
      "Samuel P. Huntington"
    ],
    "optionsHi": [
      "जे.एस. मिल",
      "एडवर्ड सईद",
      "महात्मा गांधी",
      "सैमुअल पी. हंटिंगटन"
    ],
    "correctAnswer": 1,
    "explanationEn": "'Orientalism' is a seminal work by Edward Said.",
    "explanationHi": "'ओरिएंटलिज़्म' एडवर्ड सईद की एक मौलिक कृति है।"
  },
  {
    "id": "2022-37",
    "year": "2022",
    "questionEn": "The concept of 'Structural Functionalism' in Political Science is associated with:",
    "questionHi": "राजनीति विज्ञान में 'संरचनात्मक प्रकार्यवाद' की अवधारणा किससे जुड़ी है?",
    "optionsEn": [
      "Kautilya",
      "Jayaprakash Narayan",
      "Francis Fukuyama",
      "Gabriel Almond"
    ],
    "optionsHi": [
      "कौटिल्य",
      "जयप्रकाश नारायण",
      "फ्रांसिस फुकुयामा",
      "गेब्रियल अल्मंड"
    ],
    "correctAnswer": 3,
    "explanationEn": "Gabriel Almond is widely known for developing the concept of Structural Functionalism.",
    "explanationHi": "गेब्रियल अल्मंड को संरचनात्मक प्रकार्यवाद की अवधारणा विकसित करने के लिए व्यापक रूप से जाना जाता है।"
  },
  {
    "id": "2022-38",
    "year": "2022",
    "questionEn": "Which section of the Indian Constitution deals with 'Adjudication of disputes relating to waters of inter-State rivers'?",
    "questionHi": "भारतीय संविधान का कौन सा भाग 'अंतर-राज्यीय नदियों के जल संबंधी विवादों का न्यायनिर्णयन' से संबंधित है?",
    "optionsEn": [
      "Article 370",
      "Article 352",
      "Article 262",
      "Article 51A"
    ],
    "optionsHi": [
      "अनुच्छेद 370",
      "अनुच्छेद 352",
      "अनुच्छेद 262",
      "अनुच्छेद 51A"
    ],
    "correctAnswer": 2,
    "explanationEn": "Article 262 of the Indian Constitution explicitly covers Adjudication of disputes relating to waters of inter-State rivers.",
    "explanationHi": "भारतीय संविधान का अनुच्छेद 262 स्पष्ट रूप से अंतर-राज्यीय नदियों के जल संबंधी विवादों का न्यायनिर्णयन को कवर करता है।"
  },
  {
    "id": "2022-39",
    "year": "2022",
    "questionEn": "In which year did the 'Cuban Missile Crisis' take place?",
    "questionHi": "'क्यूबा मिसाइल संकट' किस वर्ष हुआ था?",
    "optionsEn": [
      "1974",
      "1962",
      "1966",
      "1985"
    ],
    "optionsHi": [
      "1974",
      "1962",
      "1966",
      "1985"
    ],
    "correctAnswer": 1,
    "explanationEn": "The Cuban Missile Crisis is a significant event that occurred in 1962.",
    "explanationHi": "क्यूबा मिसाइल संकट एक महत्वपूर्ण घटना है जो 1962 में हुई थी।"
  },
  {
    "id": "2022-40",
    "year": "2022",
    "questionEn": "Assertion (A): Antonio Gramsci is heavily associated with the political theory of Hegemony.\nReason (R): This theory fundamentally shaped modern academic discourse in this sub-field.",
    "questionHi": "अभिकथन (A): एंटोनियो ग्राम्शी का हेजेमनी (प्राधान्य) के राजनीतिक सिद्धांत से गहरा संबंध है।\nकारण (R): इस सिद्धांत ने इस उप-क्षेत्र में आधुनिक शैक्षणिक विमर्श को मौलिक रूप से आकार दिया।",
    "optionsEn": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "optionsHi": [
      "A और R दोनों सत्य हैं और R, A की सही व्याख्या है।",
      "A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं है।",
      "A सत्य है, लेकिन R असत्य है।",
      "A असत्य है, लेकिन R सत्य है।"
    ],
    "correctAnswer": 0,
    "explanationEn": "The assertion accurately reflects Antonio Gramsci's contribution to Hegemony.",
    "explanationHi": "यह अभिकथन हेजेमनी (प्राधान्य) में एंटोनियो ग्राम्शी के योगदान को सटीक रूप से दर्शाता है।"
  },
  {
    "id": "2022-41",
    "year": "2022",
    "questionEn": "Who is the author of the famous book 'Prison Notebooks'?",
    "questionHi": "प्रसिद्ध पुस्तक 'प्रिजन नोटबुक' के लेखक कौन हैं?",
    "optionsEn": [
      "Plato",
      "Hannah Arendt",
      "J.S. Mill",
      "Antonio Gramsci"
    ],
    "optionsHi": [
      "प्लेटो",
      "हन्ना आरेंड्ट",
      "जे.एस. मिल",
      "एंटोनियो ग्राम्शी"
    ],
    "correctAnswer": 3,
    "explanationEn": "'Prison Notebooks' is a seminal work by Antonio Gramsci.",
    "explanationHi": "'प्रिजन नोटबुक' एंटोनियो ग्राम्शी की एक मौलिक कृति है।"
  },
  {
    "id": "2022-42",
    "year": "2022",
    "questionEn": "The concept of 'Mandala Theory' in Political Science is associated with:",
    "questionHi": "राजनीति विज्ञान में 'मंडल सिद्धांत' की अवधारणा किससे जुड़ी है?",
    "optionsEn": [
      "Samuel P. Huntington",
      "Kautilya",
      "Montesquieu",
      "Francis Fukuyama"
    ],
    "optionsHi": [
      "सैमुअल पी. हंटिंगटन",
      "कौटिल्य",
      "मोंटेस्क्यू",
      "फ्रांसिस फुकुयामा"
    ],
    "correctAnswer": 1,
    "explanationEn": "Kautilya is widely known for developing the concept of Mandala Theory.",
    "explanationHi": "कौटिल्य को मंडल सिद्धांत की अवधारणा विकसित करने के लिए व्यापक रूप से जाना जाता है।"
  },
  {
    "id": "2022-43",
    "year": "2022",
    "questionEn": "Which section of the Indian Constitution deals with 'All-India Services'?",
    "questionHi": "भारतीय संविधान का कौन सा भाग 'अखिल भारतीय सेवाएं' से संबंधित है?",
    "optionsEn": [
      "Article 40",
      "Article 312",
      "Article 263",
      "Article 352"
    ],
    "optionsHi": [
      "अनुच्छेद 40",
      "अनुच्छेद 312",
      "अनुच्छेद 263",
      "अनुच्छेद 352"
    ],
    "correctAnswer": 1,
    "explanationEn": "Article 312 of the Indian Constitution explicitly covers All-India Services.",
    "explanationHi": "भारतीय संविधान का अनुच्छेद 312 स्पष्ट रूप से अखिल भारतीय सेवाएं को कवर करता है।"
  },
  {
    "id": "2022-44",
    "year": "2022",
    "questionEn": "In which year did the 'Kargil War' take place?",
    "questionHi": "'कारगिल युद्ध' किस वर्ष हुआ था?",
    "optionsEn": [
      "1857",
      "1999",
      "2001",
      "1972"
    ],
    "optionsHi": [
      "1857",
      "1999",
      "2001",
      "1972"
    ],
    "correctAnswer": 1,
    "explanationEn": "The Kargil War is a significant event that occurred in 1999.",
    "explanationHi": "कारगिल युद्ध एक महत्वपूर्ण घटना है जो 1999 में हुई थी।"
  },
  {
    "id": "2022-45",
    "year": "2022",
    "questionEn": "Assertion (A): Rousseau is heavily associated with the political theory of General Will.\nReason (R): This theory fundamentally shaped modern academic discourse in this sub-field.",
    "questionHi": "अभिकथन (A): रूसो का सामान्य इच्छा के राजनीतिक सिद्धांत से गहरा संबंध है।\nकारण (R): इस सिद्धांत ने इस उप-क्षेत्र में आधुनिक शैक्षणिक विमर्श को मौलिक रूप से आकार दिया।",
    "optionsEn": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "optionsHi": [
      "A और R दोनों सत्य हैं और R, A की सही व्याख्या है।",
      "A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं है।",
      "A सत्य है, लेकिन R असत्य है।",
      "A असत्य है, लेकिन R सत्य है।"
    ],
    "correctAnswer": 0,
    "explanationEn": "The assertion accurately reflects Rousseau's contribution to General Will.",
    "explanationHi": "यह अभिकथन सामान्य इच्छा में रूसो के योगदान को सटीक रूप से दर्शाता है।"
  },
  {
    "id": "2022-46",
    "year": "2022",
    "questionEn": "Who is the author of the famous book 'Polyarchy'?",
    "questionHi": "प्रसिद्ध पुस्तक 'पॉलीआर्की' के लेखक कौन हैं?",
    "optionsEn": [
      "Robert Dahl",
      "Joseph Schumpeter",
      "Hannah Arendt",
      "John Mearsheimer"
    ],
    "optionsHi": [
      "रॉबर्ट डाहल",
      "जोसेफ शंपीटर",
      "हन्ना आरेंड्ट",
      "जॉन मियर्सहाइमर"
    ],
    "correctAnswer": 0,
    "explanationEn": "'Polyarchy' is a seminal work by Robert Dahl.",
    "explanationHi": "'पॉलीआर्की' रॉबर्ट डाहल की एक मौलिक कृति है।"
  },
  {
    "id": "2022-47",
    "year": "2022",
    "questionEn": "The concept of 'Radical Humanism' in Political Science is associated with:",
    "questionHi": "राजनीति विज्ञान में 'कट्टरपंथी मानववाद' की अवधारणा किससे जुड़ी है?",
    "optionsEn": [
      "Kautilya",
      "Antonio Gramsci",
      "M.N. Roy",
      "Ram Manohar Lohia"
    ],
    "optionsHi": [
      "कौटिल्य",
      "एंटोनियो ग्राम्शी",
      "एम.एन. रॉय",
      "राम मनोहर लोहिया"
    ],
    "correctAnswer": 2,
    "explanationEn": "M.N. Roy is widely known for developing the concept of Radical Humanism.",
    "explanationHi": "एम.एन. रॉय को कट्टरपंथी मानववाद की अवधारणा विकसित करने के लिए व्यापक रूप से जाना जाता है।"
  },
  {
    "id": "2022-48",
    "year": "2022",
    "questionEn": "Which section of the Indian Constitution deals with 'Uniform Civil Code'?",
    "questionHi": "भारतीय संविधान का कौन सा भाग 'समान नागरिक संहिता' से संबंधित है?",
    "optionsEn": [
      "Article 44",
      "Article 169",
      "Article 40",
      "Article 148"
    ],
    "optionsHi": [
      "अनुच्छेद 44",
      "अनुच्छेद 169",
      "अनुच्छेद 40",
      "अनुच्छेद 148"
    ],
    "correctAnswer": 0,
    "explanationEn": "Article 44 of the Indian Constitution explicitly covers Uniform Civil Code.",
    "explanationHi": "भारतीय संविधान का अनुच्छेद 44 स्पष्ट रूप से समान नागरिक संहिता को कवर करता है।"
  },
  {
    "id": "2022-49",
    "year": "2022",
    "questionEn": "In which year did the 'Montagu-Chelmsford Reforms' take place?",
    "questionHi": "'मोंटेग्यू-चेम्सफोर्ड सुधार' किस वर्ष हुआ था?",
    "optionsEn": [
      "1945",
      "1989",
      "1919",
      "1999"
    ],
    "optionsHi": [
      "1945",
      "1989",
      "1919",
      "1999"
    ],
    "correctAnswer": 2,
    "explanationEn": "The Montagu-Chelmsford Reforms is a significant event that occurred in 1919.",
    "explanationHi": "मोंटेग्यू-चेम्सफोर्ड सुधार एक महत्वपूर्ण घटना है जो 1919 में हुई थी।"
  },
  {
    "id": "2022-50",
    "year": "2022",
    "questionEn": "Assertion (A): John Rawls is heavily associated with the political theory of Veil of Ignorance.\nReason (R): This theory fundamentally shaped modern academic discourse in this sub-field.",
    "questionHi": "अभिकथन (A): जॉन रॉल्स का अज्ञानता का पर्दा के राजनीतिक सिद्धांत से गहरा संबंध है।\nकारण (R): इस सिद्धांत ने इस उप-क्षेत्र में आधुनिक शैक्षणिक विमर्श को मौलिक रूप से आकार दिया।",
    "optionsEn": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "optionsHi": [
      "A और R दोनों सत्य हैं और R, A की सही व्याख्या है।",
      "A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं है।",
      "A सत्य है, लेकिन R असत्य है।",
      "A असत्य है, लेकिन R सत्य है।"
    ],
    "correctAnswer": 0,
    "explanationEn": "The assertion accurately reflects John Rawls's contribution to Veil of Ignorance.",
    "explanationHi": "यह अभिकथन अज्ञानता का पर्दा में जॉन रॉल्स के योगदान को सटीक रूप से दर्शाता है।"
  },
  {
    "id": "2023-1",
    "year": "2023",
    "questionEn": "Who is the author of the famous book 'Polyarchy'?",
    "questionHi": "प्रसिद्ध पुस्तक 'पॉलीआर्की' के लेखक कौन हैं?",
    "optionsEn": [
      "John Mearsheimer",
      "Robert Dahl",
      "Edward Said",
      "John Rawls"
    ],
    "optionsHi": [
      "जॉन मियर्सहाइमर",
      "रॉबर्ट डाहल",
      "एडवर्ड सईद",
      "जॉन रॉल्स"
    ],
    "correctAnswer": 1,
    "explanationEn": "'Polyarchy' is a seminal work by Robert Dahl.",
    "explanationHi": "'पॉलीआर्की' रॉबर्ट डाहल की एक मौलिक कृति है।"
  },
  {
    "id": "2023-2",
    "year": "2023",
    "questionEn": "The concept of 'Saptanga Theory' in Political Science is associated with:",
    "questionHi": "राजनीति विज्ञान में 'सप्तांग सिद्धांत' की अवधारणा किससे जुड़ी है?",
    "optionsEn": [
      "Ram Manohar Lohia",
      "Ranajit Guha",
      "Kautilya",
      "Karl Marx"
    ],
    "optionsHi": [
      "राम मनोहर लोहिया",
      "रणजीत गुहा",
      "कौटिल्य",
      "कार्ल मार्क्स"
    ],
    "correctAnswer": 2,
    "explanationEn": "Kautilya is widely known for developing the concept of Saptanga Theory.",
    "explanationHi": "कौटिल्य को सप्तांग सिद्धांत की अवधारणा विकसित करने के लिए व्यापक रूप से जाना जाता है।"
  },
  {
    "id": "2023-3",
    "year": "2023",
    "questionEn": "Which section of the Indian Constitution deals with 'Union, State, and Concurrent Lists'?",
    "questionHi": "भारतीय संविधान का कौन सा भाग 'संघ, राज्य और समवर्ती सूचियां' से संबंधित है?",
    "optionsEn": [
      "Article 226",
      "Schedule 7",
      "Article 370",
      "Article 148"
    ],
    "optionsHi": [
      "अनुच्छेद 226",
      "अनुसूची 7",
      "अनुच्छेद 370",
      "अनुच्छेद 148"
    ],
    "correctAnswer": 1,
    "explanationEn": "Schedule 7 of the Indian Constitution explicitly covers Union, State, and Concurrent Lists.",
    "explanationHi": "भारतीय संविधान का अनुसूची 7 स्पष्ट रूप से संघ, राज्य और समवर्ती सूचियां को कवर करता है।"
  },
  {
    "id": "2023-4",
    "year": "2023",
    "questionEn": "In which year did the 'Tashkent Agreement' take place?",
    "questionHi": "'ताशकंद समझौता' किस वर्ष हुआ था?",
    "optionsEn": [
      "1997",
      "1946",
      "1942",
      "1966"
    ],
    "optionsHi": [
      "1997",
      "1946",
      "1942",
      "1966"
    ],
    "correctAnswer": 3,
    "explanationEn": "The Tashkent Agreement is a significant event that occurred in 1966.",
    "explanationHi": "ताशकंद समझौता एक महत्वपूर्ण घटना है जो 1966 में हुई थी।"
  },
  {
    "id": "2023-5",
    "year": "2023",
    "questionEn": "Assertion (A): Sandra Harding is heavily associated with the political theory of Feminist Standpoint Theory.\nReason (R): This theory fundamentally shaped modern academic discourse in this sub-field.",
    "questionHi": "अभिकथन (A): सैंड्रा हार्डिंग का नारीवादी दृष्टिकोण सिद्धांत के राजनीतिक सिद्धांत से गहरा संबंध है।\nकारण (R): इस सिद्धांत ने इस उप-क्षेत्र में आधुनिक शैक्षणिक विमर्श को मौलिक रूप से आकार दिया।",
    "optionsEn": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "optionsHi": [
      "A और R दोनों सत्य हैं और R, A की सही व्याख्या है।",
      "A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं है।",
      "A सत्य है, लेकिन R असत्य है।",
      "A असत्य है, लेकिन R सत्य है।"
    ],
    "correctAnswer": 0,
    "explanationEn": "The assertion accurately reflects Sandra Harding's contribution to Feminist Standpoint Theory.",
    "explanationHi": "यह अभिकथन नारीवादी दृष्टिकोण सिद्धांत में सैंड्रा हार्डिंग के योगदान को सटीक रूप से दर्शाता है।"
  },
  {
    "id": "2023-6",
    "year": "2023",
    "questionEn": "Who is the author of the famous book 'The Human Condition'?",
    "questionHi": "प्रसिद्ध पुस्तक 'द ह्यूमन कंडीशन' के लेखक कौन हैं?",
    "optionsEn": [
      "Almond and Verba",
      "Hannah Arendt",
      "Karl Marx",
      "Keohane and Nye"
    ],
    "optionsHi": [
      "अल्मंड और वर्बा",
      "हन्ना आरेंड्ट",
      "कार्ल मार्क्स",
      "केओहेन और नाई"
    ],
    "correctAnswer": 1,
    "explanationEn": "'The Human Condition' is a seminal work by Hannah Arendt.",
    "explanationHi": "'द ह्यूमन कंडीशन' हन्ना आरेंड्ट की एक मौलिक कृति है।"
  },
  {
    "id": "2023-7",
    "year": "2023",
    "questionEn": "The concept of 'Separation of Powers' in Political Science is associated with:",
    "questionHi": "राजनीति विज्ञान में 'शक्तियों का पृथक्करण' की अवधारणा किससे जुड़ी है?",
    "optionsEn": [
      "Montesquieu",
      "Sandra Harding",
      "Jayaprakash Narayan",
      "Francis Fukuyama"
    ],
    "optionsHi": [
      "मोंटेस्क्यू",
      "सैंड्रा हार्डिंग",
      "जयप्रकाश नारायण",
      "फ्रांसिस फुकुयामा"
    ],
    "correctAnswer": 0,
    "explanationEn": "Montesquieu is widely known for developing the concept of Separation of Powers.",
    "explanationHi": "मोंटेस्क्यू को शक्तियों का पृथक्करण की अवधारणा विकसित करने के लिए व्यापक रूप से जाना जाता है।"
  },
  {
    "id": "2023-8",
    "year": "2023",
    "questionEn": "Which section of the Indian Constitution deals with 'Money Bills'?",
    "questionHi": "भारतीय संविधान का कौन सा भाग 'धन विधेयक' से संबंधित है?",
    "optionsEn": [
      "Article 324",
      "Article 148",
      "Article 110",
      "Article 51A"
    ],
    "optionsHi": [
      "अनुच्छेद 324",
      "अनुच्छेद 148",
      "अनुच्छेद 110",
      "अनुच्छेद 51A"
    ],
    "correctAnswer": 2,
    "explanationEn": "Article 110 of the Indian Constitution explicitly covers Money Bills.",
    "explanationHi": "भारतीय संविधान का अनुच्छेद 110 स्पष्ट रूप से धन विधेयक को कवर करता है।"
  },
  {
    "id": "2023-9",
    "year": "2023",
    "questionEn": "In which year did the 'Gujral Doctrine' take place?",
    "questionHi": "'गुजराल सिद्धांत' किस वर्ष हुआ था?",
    "optionsEn": [
      "1962",
      "1996",
      "2001",
      "1991"
    ],
    "optionsHi": [
      "1962",
      "1996",
      "2001",
      "1991"
    ],
    "correctAnswer": 1,
    "explanationEn": "The Gujral Doctrine is a significant event that occurred in 1996.",
    "explanationHi": "गुजराल सिद्धांत एक महत्वपूर्ण घटना है जो 1996 में हुई थी।"
  },
  {
    "id": "2023-10",
    "year": "2023",
    "questionEn": "Assertion (A): Rousseau is heavily associated with the political theory of General Will.\nReason (R): This theory fundamentally shaped modern academic discourse in this sub-field.",
    "questionHi": "अभिकथन (A): रूसो का सामान्य इच्छा के राजनीतिक सिद्धांत से गहरा संबंध है।\nकारण (R): इस सिद्धांत ने इस उप-क्षेत्र में आधुनिक शैक्षणिक विमर्श को मौलिक रूप से आकार दिया।",
    "optionsEn": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "optionsHi": [
      "A और R दोनों सत्य हैं और R, A की सही व्याख्या है।",
      "A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं है।",
      "A सत्य है, लेकिन R असत्य है।",
      "A असत्य है, लेकिन R सत्य है।"
    ],
    "correctAnswer": 0,
    "explanationEn": "The assertion accurately reflects Rousseau's contribution to General Will.",
    "explanationHi": "यह अभिकथन सामान्य इच्छा में रूसो के योगदान को सटीक रूप से दर्शाता है।"
  },
  {
    "id": "2023-11",
    "year": "2023",
    "questionEn": "Who is the author of the famous book 'The Open Society and Its Enemies'?",
    "questionHi": "प्रसिद्ध पुस्तक 'द ओपन सोसाइटी एंड इट्स एनिमीज' के लेखक कौन हैं?",
    "optionsEn": [
      "Almond and Verba",
      "Hannah Arendt",
      "Karl Popper",
      "Mahatma Gandhi"
    ],
    "optionsHi": [
      "अल्मंड और वर्बा",
      "हन्ना आरेंड्ट",
      "कार्ल पॉपर",
      "महात्मा गांधी"
    ],
    "correctAnswer": 2,
    "explanationEn": "'The Open Society and Its Enemies' is a seminal work by Karl Popper.",
    "explanationHi": "'द ओपन सोसाइटी एंड इट्स एनिमीज' कार्ल पॉपर की एक मौलिक कृति है।"
  },
  {
    "id": "2023-12",
    "year": "2023",
    "questionEn": "The concept of 'Integral Humanism' in Political Science is associated with:",
    "questionHi": "राजनीति विज्ञान में 'एकात्म मानववाद' की अवधारणा किससे जुड़ी है?",
    "optionsEn": [
      "Francis Fukuyama",
      "Alfred Crosby",
      "Rousseau",
      "Deendayal Upadhyaya"
    ],
    "optionsHi": [
      "फ्रांसिस फुकुयामा",
      "अल्फ्रेड क्रॉस्बी",
      "रूसो",
      "दीनदयाल उपाध्याय"
    ],
    "correctAnswer": 3,
    "explanationEn": "Deendayal Upadhyaya is widely known for developing the concept of Integral Humanism.",
    "explanationHi": "दीनदयाल उपाध्याय को एकात्म मानववाद की अवधारणा विकसित करने के लिए व्यापक रूप से जाना जाता है।"
  },
  {
    "id": "2023-13",
    "year": "2023",
    "questionEn": "Which section of the Indian Constitution deals with 'Fundamental Duties'?",
    "questionHi": "भारतीय संविधान का कौन सा भाग 'मौलिक कर्तव्य' से संबंधित है?",
    "optionsEn": [
      "Article 72",
      "Article 51A",
      "Article 110",
      "Schedule 10"
    ],
    "optionsHi": [
      "अनुच्छेद 72",
      "अनुच्छेद 51A",
      "अनुच्छेद 110",
      "अनुसूची 10"
    ],
    "correctAnswer": 1,
    "explanationEn": "Article 51A of the Indian Constitution explicitly covers Fundamental Duties.",
    "explanationHi": "भारतीय संविधान का अनुच्छेद 51A स्पष्ट रूप से मौलिक कर्तव्य को कवर करता है।"
  },
  {
    "id": "2023-14",
    "year": "2023",
    "questionEn": "In which year did the 'First Non-Aligned Summit (Belgrade)' take place?",
    "questionHi": "'पहला गुटनिरपेक्ष शिखर सम्मेलन (बेलग्रेड)' किस वर्ष हुआ था?",
    "optionsEn": [
      "1971",
      "1961",
      "1962",
      "1966"
    ],
    "optionsHi": [
      "1971",
      "1961",
      "1962",
      "1966"
    ],
    "correctAnswer": 1,
    "explanationEn": "The First Non-Aligned Summit (Belgrade) is a significant event that occurred in 1961.",
    "explanationHi": "पहला गुटनिरपेक्ष शिखर सम्मेलन (बेलग्रेड) एक महत्वपूर्ण घटना है जो 1961 में हुई थी।"
  },
  {
    "id": "2023-15",
    "year": "2023",
    "questionEn": "Assertion (A): Samuel P. Huntington is heavily associated with the political theory of Clash of Civilizations.\nReason (R): This theory fundamentally shaped modern academic discourse in this sub-field.",
    "questionHi": "अभिकथन (A): सैमुअल पी. हंटिंगटन का सभ्यताओं का संघर्ष के राजनीतिक सिद्धांत से गहरा संबंध है।\nकारण (R): इस सिद्धांत ने इस उप-क्षेत्र में आधुनिक शैक्षणिक विमर्श को मौलिक रूप से आकार दिया।",
    "optionsEn": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "optionsHi": [
      "A और R दोनों सत्य हैं और R, A की सही व्याख्या है।",
      "A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं है।",
      "A सत्य है, लेकिन R असत्य है।",
      "A असत्य है, लेकिन R सत्य है।"
    ],
    "correctAnswer": 0,
    "explanationEn": "The assertion accurately reflects Samuel P. Huntington's contribution to Clash of Civilizations.",
    "explanationHi": "यह अभिकथन सभ्यताओं का संघर्ष में सैमुअल पी. हंटिंगटन के योगदान को सटीक रूप से दर्शाता है।"
  },
  {
    "id": "2023-16",
    "year": "2023",
    "questionEn": "Who is the author of the famous book 'The Wretched of the Earth'?",
    "questionHi": "प्रसिद्ध पुस्तक 'द रेच्ड ऑफ द अर्थ' के लेखक कौन हैं?",
    "optionsEn": [
      "John Mearsheimer",
      "Frantz Fanon",
      "Francis Fukuyama",
      "Kautilya"
    ],
    "optionsHi": [
      "जॉन मियर्सहाइमर",
      "फ्रांज फैनन",
      "फ्रांसिस फुकुयामा",
      "कौटिल्य"
    ],
    "correctAnswer": 1,
    "explanationEn": "'The Wretched of the Earth' is a seminal work by Frantz Fanon.",
    "explanationHi": "'द रेच्ड ऑफ द अर्थ' फ्रांज फैनन की एक मौलिक कृति है।"
  },
  {
    "id": "2023-17",
    "year": "2023",
    "questionEn": "The concept of 'Soft Power' in Political Science is associated with:",
    "questionHi": "राजनीति विज्ञान में 'सॉफ्ट पावर' की अवधारणा किससे जुड़ी है?",
    "optionsEn": [
      "Samuel P. Huntington",
      "M.N. Roy",
      "Joseph Nye",
      "Kautilya"
    ],
    "optionsHi": [
      "सैमुअल पी. हंटिंगटन",
      "एम.एन. रॉय",
      "जोसेफ नाई",
      "कौटिल्य"
    ],
    "correctAnswer": 2,
    "explanationEn": "Joseph Nye is widely known for developing the concept of Soft Power.",
    "explanationHi": "जोसेफ नाई को सॉफ्ट पावर की अवधारणा विकसित करने के लिए व्यापक रूप से जाना जाता है।"
  },
  {
    "id": "2023-18",
    "year": "2023",
    "questionEn": "Which section of the Indian Constitution deals with 'Comptroller and Auditor-General of India'?",
    "questionHi": "भारतीय संविधान का कौन सा भाग 'भारत के नियंत्रक और महालेखा परीक्षक' से संबंधित है?",
    "optionsEn": [
      "Article 21",
      "Article 263",
      "Article 148",
      "Article 17"
    ],
    "optionsHi": [
      "अनुच्छेद 21",
      "अनुच्छेद 263",
      "अनुच्छेद 148",
      "अनुच्छेद 17"
    ],
    "correctAnswer": 2,
    "explanationEn": "Article 148 of the Indian Constitution explicitly covers Comptroller and Auditor-General of India.",
    "explanationHi": "भारतीय संविधान का अनुच्छेद 148 स्पष्ट रूप से भारत के नियंत्रक और महालेखा परीक्षक को कवर करता है।"
  },
  {
    "id": "2023-19",
    "year": "2023",
    "questionEn": "In which year did the 'Indo-US Civil Nuclear Agreement' take place?",
    "questionHi": "'भारत-अमेरिका असैन्य परमाणु समझौता' किस वर्ष हुआ था?",
    "optionsEn": [
      "1999",
      "1909",
      "2008",
      "1972"
    ],
    "optionsHi": [
      "1999",
      "1909",
      "2008",
      "1972"
    ],
    "correctAnswer": 2,
    "explanationEn": "The Indo-US Civil Nuclear Agreement is a significant event that occurred in 2008.",
    "explanationHi": "भारत-अमेरिका असैन्य परमाणु समझौता एक महत्वपूर्ण घटना है जो 2008 में हुई थी।"
  },
  {
    "id": "2023-20",
    "year": "2023",
    "questionEn": "Assertion (A): Karl Marx is heavily associated with the political theory of Surplus Value.\nReason (R): This theory fundamentally shaped modern academic discourse in this sub-field.",
    "questionHi": "अभिकथन (A): कार्ल मार्क्स का अतिरिक्त मूल्य के राजनीतिक सिद्धांत से गहरा संबंध है।\nकारण (R): इस सिद्धांत ने इस उप-क्षेत्र में आधुनिक शैक्षणिक विमर्श को मौलिक रूप से आकार दिया।",
    "optionsEn": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "optionsHi": [
      "A और R दोनों सत्य हैं और R, A की सही व्याख्या है।",
      "A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं है।",
      "A सत्य है, लेकिन R असत्य है।",
      "A असत्य है, लेकिन R सत्य है।"
    ],
    "correctAnswer": 0,
    "explanationEn": "The assertion accurately reflects Karl Marx's contribution to Surplus Value.",
    "explanationHi": "यह अभिकथन अतिरिक्त मूल्य में कार्ल मार्क्स के योगदान को सटीक रूप से दर्शाता है।"
  },
  {
    "id": "2023-21",
    "year": "2023",
    "questionEn": "Who is the author of the famous book 'Politics'?",
    "questionHi": "प्रसिद्ध पुस्तक 'पॉलिटिक्स' के लेखक कौन हैं?",
    "optionsEn": [
      "Locke",
      "Rabindranath Tagore",
      "Aristotle",
      "Mahatma Gandhi"
    ],
    "optionsHi": [
      "लॉक",
      "रवींद्रनाथ टैगोर",
      "अरस्तू",
      "महात्मा गांधी"
    ],
    "correctAnswer": 2,
    "explanationEn": "'Politics' is a seminal work by Aristotle.",
    "explanationHi": "'पॉलिटिक्स' अरस्तू की एक मौलिक कृति है।"
  },
  {
    "id": "2023-22",
    "year": "2023",
    "questionEn": "The concept of 'Ecological Imperialism' in Political Science is associated with:",
    "questionHi": "राजनीति विज्ञान में 'पारिस्थितिक साम्राज्यवाद' की अवधारणा किससे जुड़ी है?",
    "optionsEn": [
      "Kautilya",
      "Alfred Crosby",
      "Francis Fukuyama",
      "Plato"
    ],
    "optionsHi": [
      "कौटिल्य",
      "अल्फ्रेड क्रॉस्बी",
      "फ्रांसिस फुकुयामा",
      "प्लेटो"
    ],
    "correctAnswer": 1,
    "explanationEn": "Alfred Crosby is widely known for developing the concept of Ecological Imperialism.",
    "explanationHi": "अल्फ्रेड क्रॉस्बी को पारिस्थितिक साम्राज्यवाद की अवधारणा विकसित करने के लिए व्यापक रूप से जाना जाता है।"
  },
  {
    "id": "2023-23",
    "year": "2023",
    "questionEn": "Which section of the Indian Constitution deals with 'Power of High Courts to issue certain writs'?",
    "questionHi": "भारतीय संविधान का कौन सा भाग 'कुछ रिट जारी करने की उच्च न्यायालयों की शक्ति' से संबंधित है?",
    "optionsEn": [
      "Article 226",
      "Schedule 10",
      "Article 40",
      "Article 169"
    ],
    "optionsHi": [
      "अनुच्छेद 226",
      "अनुसूची 10",
      "अनुच्छेद 40",
      "अनुच्छेद 169"
    ],
    "correctAnswer": 0,
    "explanationEn": "Article 226 of the Indian Constitution explicitly covers Power of High Courts to issue certain writs.",
    "explanationHi": "भारतीय संविधान का अनुच्छेद 226 स्पष्ट रूप से कुछ रिट जारी करने की उच्च न्यायालयों की शक्ति को कवर करता है।"
  },
  {
    "id": "2023-24",
    "year": "2023",
    "questionEn": "In which year did the 'Indo-Soviet Treaty of Peace, Friendship and Cooperation' take place?",
    "questionHi": "'भारत-सोवियत शांति, मित्रता और सहयोग संधि' किस वर्ष हुआ था?",
    "optionsEn": [
      "1971",
      "1972",
      "1989",
      "1974"
    ],
    "optionsHi": [
      "1971",
      "1972",
      "1989",
      "1974"
    ],
    "correctAnswer": 0,
    "explanationEn": "The Indo-Soviet Treaty of Peace, Friendship and Cooperation is a significant event that occurred in 1971.",
    "explanationHi": "भारत-सोवियत शांति, मित्रता और सहयोग संधि एक महत्वपूर्ण घटना है जो 1971 में हुई थी।"
  },
  {
    "id": "2023-25",
    "year": "2023",
    "questionEn": "Assertion (A): Kimberlé Crenshaw is heavily associated with the political theory of Intersectionality.\nReason (R): This theory fundamentally shaped modern academic discourse in this sub-field.",
    "questionHi": "अभिकथन (A): किम्बर्ले क्रेंशॉ का प्रतिच्छेदन (Intersectionality) के राजनीतिक सिद्धांत से गहरा संबंध है।\nकारण (R): इस सिद्धांत ने इस उप-क्षेत्र में आधुनिक शैक्षणिक विमर्श को मौलिक रूप से आकार दिया।",
    "optionsEn": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "optionsHi": [
      "A और R दोनों सत्य हैं और R, A की सही व्याख्या है।",
      "A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं है।",
      "A सत्य है, लेकिन R असत्य है।",
      "A असत्य है, लेकिन R सत्य है।"
    ],
    "correctAnswer": 0,
    "explanationEn": "The assertion accurately reflects Kimberlé Crenshaw's contribution to Intersectionality.",
    "explanationHi": "यह अभिकथन प्रतिच्छेदन (Intersectionality) में किम्बर्ले क्रेंशॉ के योगदान को सटीक रूप से दर्शाता है।"
  },
  {
    "id": "2023-26",
    "year": "2023",
    "questionEn": "Who is the author of the famous book 'On Liberty'?",
    "questionHi": "प्रसिद्ध पुस्तक 'ऑन लिबर्टी' के लेखक कौन हैं?",
    "optionsEn": [
      "Robert Dahl",
      "J.S. Mill",
      "Samuel P. Huntington",
      "Frantz Fanon"
    ],
    "optionsHi": [
      "रॉबर्ट डाहल",
      "जे.एस. मिल",
      "सैमुअल पी. हंटिंगटन",
      "फ्रांज फैनन"
    ],
    "correctAnswer": 1,
    "explanationEn": "'On Liberty' is a seminal work by J.S. Mill.",
    "explanationHi": "'ऑन लिबर्टी' जे.एस. मिल की एक मौलिक कृति है।"
  },
  {
    "id": "2023-27",
    "year": "2023",
    "questionEn": "The concept of 'Mandala Theory' in Political Science is associated with:",
    "questionHi": "राजनीति विज्ञान में 'मंडल सिद्धांत' की अवधारणा किससे जुड़ी है?",
    "optionsEn": [
      "Francis Fukuyama",
      "Karl Marx",
      "Mahatma Gandhi",
      "Kautilya"
    ],
    "optionsHi": [
      "फ्रांसिस फुकुयामा",
      "कार्ल मार्क्स",
      "महात्मा गांधी",
      "कौटिल्य"
    ],
    "correctAnswer": 3,
    "explanationEn": "Kautilya is widely known for developing the concept of Mandala Theory.",
    "explanationHi": "कौटिल्य को मंडल सिद्धांत की अवधारणा विकसित करने के लिए व्यापक रूप से जाना जाता है।"
  },
  {
    "id": "2023-28",
    "year": "2023",
    "questionEn": "Which section of the Indian Constitution deals with 'Ordinance making power of President'?",
    "questionHi": "भारतीय संविधान का कौन सा भाग 'राष्ट्रपति की अध्यादेश जारी करने की शक्ति' से संबंधित है?",
    "optionsEn": [
      "Article 368",
      "Article 262",
      "Article 123",
      "Schedule 10"
    ],
    "optionsHi": [
      "अनुच्छेद 368",
      "अनुच्छेद 262",
      "अनुच्छेद 123",
      "अनुसूची 10"
    ],
    "correctAnswer": 2,
    "explanationEn": "Article 123 of the Indian Constitution explicitly covers Ordinance making power of President.",
    "explanationHi": "भारतीय संविधान का अनुच्छेद 123 स्पष्ट रूप से राष्ट्रपति की अध्यादेश जारी करने की शक्ति को कवर करता है।"
  },
  {
    "id": "2023-29",
    "year": "2023",
    "questionEn": "In which year did the 'Kargil War' take place?",
    "questionHi": "'कारगिल युद्ध' किस वर्ष हुआ था?",
    "optionsEn": [
      "1948",
      "1857",
      "1946",
      "1999"
    ],
    "optionsHi": [
      "1948",
      "1857",
      "1946",
      "1999"
    ],
    "correctAnswer": 3,
    "explanationEn": "The Kargil War is a significant event that occurred in 1999.",
    "explanationHi": "कारगिल युद्ध एक महत्वपूर्ण घटना है जो 1999 में हुई थी।"
  },
  {
    "id": "2023-30",
    "year": "2023",
    "questionEn": "Assertion (A): Gabriel Almond is heavily associated with the political theory of Structural Functionalism.\nReason (R): This theory fundamentally shaped modern academic discourse in this sub-field.",
    "questionHi": "अभिकथन (A): गेब्रियल अल्मंड का संरचनात्मक प्रकार्यवाद के राजनीतिक सिद्धांत से गहरा संबंध है।\nकारण (R): इस सिद्धांत ने इस उप-क्षेत्र में आधुनिक शैक्षणिक विमर्श को मौलिक रूप से आकार दिया।",
    "optionsEn": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "optionsHi": [
      "A और R दोनों सत्य हैं और R, A की सही व्याख्या है।",
      "A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं है।",
      "A सत्य है, लेकिन R असत्य है।",
      "A असत्य है, लेकिन R सत्य है।"
    ],
    "correctAnswer": 0,
    "explanationEn": "The assertion accurately reflects Gabriel Almond's contribution to Structural Functionalism.",
    "explanationHi": "यह अभिकथन संरचनात्मक प्रकार्यवाद में गेब्रियल अल्मंड के योगदान को सटीक रूप से दर्शाता है।"
  },
  {
    "id": "2023-31",
    "year": "2023",
    "questionEn": "Who is the author of the famous book 'Hind Swaraj'?",
    "questionHi": "प्रसिद्ध पुस्तक 'हिंद स्वराज' के लेखक कौन हैं?",
    "optionsEn": [
      "Simone de Beauvoir",
      "J.S. Mill",
      "Kautilya",
      "Mahatma Gandhi"
    ],
    "optionsHi": [
      "सिमोन डी बोउवा",
      "जे.एस. मिल",
      "कौटिल्य",
      "महात्मा गांधी"
    ],
    "correctAnswer": 3,
    "explanationEn": "'Hind Swaraj' is a seminal work by Mahatma Gandhi.",
    "explanationHi": "'हिंद स्वराज' महात्मा गांधी की एक मौलिक कृति है।"
  },
  {
    "id": "2023-32",
    "year": "2023",
    "questionEn": "The concept of 'Hegemony' in Political Science is associated with:",
    "questionHi": "राजनीति विज्ञान में 'हेजेमनी (प्राधान्य)' की अवधारणा किससे जुड़ी है?",
    "optionsEn": [
      "Francis Fukuyama",
      "Antonio Gramsci",
      "Montesquieu",
      "Keohane & Nye"
    ],
    "optionsHi": [
      "फ्रांसिस फुकुयामा",
      "एंटोनियो ग्राम्शी",
      "मोंटेस्क्यू",
      "केओहेन और नाई"
    ],
    "correctAnswer": 1,
    "explanationEn": "Antonio Gramsci is widely known for developing the concept of Hegemony.",
    "explanationHi": "एंटोनियो ग्राम्शी को हेजेमनी (प्राधान्य) की अवधारणा विकसित करने के लिए व्यापक रूप से जाना जाता है।"
  },
  {
    "id": "2023-33",
    "year": "2023",
    "questionEn": "Which section of the Indian Constitution deals with 'Abolition or creation of Legislative Councils'?",
    "questionHi": "भारतीय संविधान का कौन सा भाग 'विधान परिषदों का उन्मूलन या निर्माण' से संबंधित है?",
    "optionsEn": [
      "Article 368",
      "Article 17",
      "Article 21",
      "Article 169"
    ],
    "optionsHi": [
      "अनुच्छेद 368",
      "अनुच्छेद 17",
      "अनुच्छेद 21",
      "अनुच्छेद 169"
    ],
    "correctAnswer": 3,
    "explanationEn": "Article 169 of the Indian Constitution explicitly covers Abolition or creation of Legislative Councils.",
    "explanationHi": "भारतीय संविधान का अनुच्छेद 169 स्पष्ट रूप से विधान परिषदों का उन्मूलन या निर्माण को कवर करता है।"
  },
  {
    "id": "2023-34",
    "year": "2023",
    "questionEn": "In which year did the 'Formation of United Nations' take place?",
    "questionHi": "'संयुक्त राष्ट्र का गठन' किस वर्ष हुआ था?",
    "optionsEn": [
      "1995",
      "1945",
      "1989",
      "1972"
    ],
    "optionsHi": [
      "1995",
      "1945",
      "1989",
      "1972"
    ],
    "correctAnswer": 1,
    "explanationEn": "The Formation of United Nations is a significant event that occurred in 1945.",
    "explanationHi": "संयुक्त राष्ट्र का गठन एक महत्वपूर्ण घटना है जो 1945 में हुई थी।"
  },
  {
    "id": "2023-35",
    "year": "2023",
    "questionEn": "Assertion (A): Francis Fukuyama is heavily associated with the political theory of End of History.\nReason (R): This theory fundamentally shaped modern academic discourse in this sub-field.",
    "questionHi": "अभिकथन (A): फ्रांसिस फुकुयामा का इतिहास का अंत के राजनीतिक सिद्धांत से गहरा संबंध है।\nकारण (R): इस सिद्धांत ने इस उप-क्षेत्र में आधुनिक शैक्षणिक विमर्श को मौलिक रूप से आकार दिया।",
    "optionsEn": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "optionsHi": [
      "A और R दोनों सत्य हैं और R, A की सही व्याख्या है।",
      "A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं है।",
      "A सत्य है, लेकिन R असत्य है।",
      "A असत्य है, लेकिन R सत्य है।"
    ],
    "correctAnswer": 0,
    "explanationEn": "The assertion accurately reflects Francis Fukuyama's contribution to End of History.",
    "explanationHi": "यह अभिकथन इतिहास का अंत में फ्रांसिस फुकुयामा के योगदान को सटीक रूप से दर्शाता है।"
  },
  {
    "id": "2023-36",
    "year": "2023",
    "questionEn": "Who is the author of the famous book 'The Clash of Civilizations'?",
    "questionHi": "प्रसिद्ध पुस्तक 'द क्लैश ऑफ सिविलाइजेशन' के लेखक कौन हैं?",
    "optionsEn": [
      "Samuel P. Huntington",
      "Hannah Arendt",
      "Jawaharlal Nehru",
      "Robert Dahl"
    ],
    "optionsHi": [
      "सैमुअल पी. हंटिंगटन",
      "हन्ना आरेंड्ट",
      "जवाहरलाल नेहरू",
      "रॉबर्ट डाहल"
    ],
    "correctAnswer": 0,
    "explanationEn": "'The Clash of Civilizations' is a seminal work by Samuel P. Huntington.",
    "explanationHi": "'द क्लैश ऑफ सिविलाइजेशन' सैमुअल पी. हंटिंगटन की एक मौलिक कृति है।"
  },
  {
    "id": "2023-37",
    "year": "2023",
    "questionEn": "The concept of 'Satyagraha' in Political Science is associated with:",
    "questionHi": "राजनीति विज्ञान में 'सत्याग्रह' की अवधारणा किससे जुड़ी है?",
    "optionsEn": [
      "Mahatma Gandhi",
      "Antonio Gramsci",
      "Joseph Nye",
      "Rousseau"
    ],
    "optionsHi": [
      "महात्मा गांधी",
      "एंटोनियो ग्राम्शी",
      "जोसेफ नाई",
      "रूसो"
    ],
    "correctAnswer": 0,
    "explanationEn": "Mahatma Gandhi is widely known for developing the concept of Satyagraha.",
    "explanationHi": "महात्मा गांधी को सत्याग्रह की अवधारणा विकसित करने के लिए व्यापक रूप से जाना जाता है।"
  },
  {
    "id": "2023-38",
    "year": "2023",
    "questionEn": "Which section of the Indian Constitution deals with 'National Emergency'?",
    "questionHi": "भारतीय संविधान का कौन सा भाग 'राष्ट्रीय आपातकाल' से संबंधित है?",
    "optionsEn": [
      "Article 280",
      "Article 263",
      "Article 72",
      "Article 352"
    ],
    "optionsHi": [
      "अनुच्छेद 280",
      "अनुच्छेद 263",
      "अनुच्छेद 72",
      "अनुच्छेद 352"
    ],
    "correctAnswer": 3,
    "explanationEn": "Article 352 of the Indian Constitution explicitly covers National Emergency.",
    "explanationHi": "भारतीय संविधान का अनुच्छेद 352 स्पष्ट रूप से राष्ट्रीय आपातकाल को कवर करता है।"
  },
  {
    "id": "2023-39",
    "year": "2023",
    "questionEn": "In which year did the 'Act East Policy' take place?",
    "questionHi": "'एक्ट ईस्ट नीति' किस वर्ष हुआ था?",
    "optionsEn": [
      "1972",
      "1992",
      "1997",
      "2014"
    ],
    "optionsHi": [
      "1972",
      "1992",
      "1997",
      "2014"
    ],
    "correctAnswer": 3,
    "explanationEn": "The Act East Policy is a significant event that occurred in 2014.",
    "explanationHi": "एक्ट ईस्ट नीति एक महत्वपूर्ण घटना है जो 2014 में हुई थी।"
  },
  {
    "id": "2023-40",
    "year": "2023",
    "questionEn": "Assertion (A): Robert Michels is heavily associated with the political theory of Iron Law of Oligarchy.\nReason (R): This theory fundamentally shaped modern academic discourse in this sub-field.",
    "questionHi": "अभिकथन (A): रॉबर्ट मिशेल्स का अल्पतंत्र का लौह नियम के राजनीतिक सिद्धांत से गहरा संबंध है।\nकारण (R): इस सिद्धांत ने इस उप-क्षेत्र में आधुनिक शैक्षणिक विमर्श को मौलिक रूप से आकार दिया।",
    "optionsEn": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "optionsHi": [
      "A और R दोनों सत्य हैं और R, A की सही व्याख्या है।",
      "A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं है।",
      "A सत्य है, लेकिन R असत्य है।",
      "A असत्य है, लेकिन R सत्य है।"
    ],
    "correctAnswer": 0,
    "explanationEn": "The assertion accurately reflects Robert Michels's contribution to Iron Law of Oligarchy.",
    "explanationHi": "यह अभिकथन अल्पतंत्र का लौह नियम में रॉबर्ट मिशेल्स के योगदान को सटीक रूप से दर्शाता है।"
  },
  {
    "id": "2023-41",
    "year": "2023",
    "questionEn": "Who is the author of the famous book 'The Communist Manifesto'?",
    "questionHi": "प्रसिद्ध पुस्तक 'द कम्युनिस्ट मेनिफेस्टो' के लेखक कौन हैं?",
    "optionsEn": [
      "Karl Marx",
      "B.R. Ambedkar",
      "Hobbes",
      "Francis Fukuyama"
    ],
    "optionsHi": [
      "कार्ल मार्क्स",
      "बी.आर. अंबेडकर",
      "हॉब्स",
      "फ्रांसिस फुकुयामा"
    ],
    "correctAnswer": 0,
    "explanationEn": "'The Communist Manifesto' is a seminal work by Karl Marx.",
    "explanationHi": "'द कम्युनिस्ट मेनिफेस्टो' कार्ल मार्क्स की एक मौलिक कृति है।"
  },
  {
    "id": "2023-42",
    "year": "2023",
    "questionEn": "The concept of 'Philosopher King' in Political Science is associated with:",
    "questionHi": "राजनीति विज्ञान में 'दार्शनिक राजा' की अवधारणा किससे जुड़ी है?",
    "optionsEn": [
      "Keohane & Nye",
      "Plato",
      "Ram Manohar Lohia",
      "Alfred Crosby"
    ],
    "optionsHi": [
      "केओहेन और नाई",
      "प्लेटो",
      "राम मनोहर लोहिया",
      "अल्फ्रेड क्रॉस्बी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Plato is widely known for developing the concept of Philosopher King.",
    "explanationHi": "प्लेटो को दार्शनिक राजा की अवधारणा विकसित करने के लिए व्यापक रूप से जाना जाता है।"
  },
  {
    "id": "2023-43",
    "year": "2023",
    "questionEn": "Which section of the Indian Constitution deals with 'Amendment of the Constitution'?",
    "questionHi": "भारतीय संविधान का कौन सा भाग 'संविधान का संशोधन' से संबंधित है?",
    "optionsEn": [
      "Schedule 10",
      "Schedule 11",
      "Article 368",
      "Article 110"
    ],
    "optionsHi": [
      "अनुसूची 10",
      "अनुसूची 11",
      "अनुच्छेद 368",
      "अनुच्छेद 110"
    ],
    "correctAnswer": 2,
    "explanationEn": "Article 368 of the Indian Constitution explicitly covers Amendment of the Constitution.",
    "explanationHi": "भारतीय संविधान का अनुच्छेद 368 स्पष्ट रूप से संविधान का संशोधन को कवर करता है।"
  },
  {
    "id": "2023-44",
    "year": "2023",
    "questionEn": "In which year did the 'Pokhran-II Nuclear Test' take place?",
    "questionHi": "'पोखरण-II परमाणु परीक्षण' किस वर्ष हुआ था?",
    "optionsEn": [
      "1961",
      "1998",
      "1919",
      "1991"
    ],
    "optionsHi": [
      "1961",
      "1998",
      "1919",
      "1991"
    ],
    "correctAnswer": 1,
    "explanationEn": "The Pokhran-II Nuclear Test is a significant event that occurred in 1998.",
    "explanationHi": "पोखरण-II परमाणु परीक्षण एक महत्वपूर्ण घटना है जो 1998 में हुई थी।"
  },
  {
    "id": "2023-45",
    "year": "2023",
    "questionEn": "Assertion (A): Jeremy Bentham is heavily associated with the political theory of Utilitarianism.\nReason (R): This theory fundamentally shaped modern academic discourse in this sub-field.",
    "questionHi": "अभिकथन (A): जेरेमी बेंथम का उपयोगितावाद के राजनीतिक सिद्धांत से गहरा संबंध है।\nकारण (R): इस सिद्धांत ने इस उप-क्षेत्र में आधुनिक शैक्षणिक विमर्श को मौलिक रूप से आकार दिया।",
    "optionsEn": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "optionsHi": [
      "A और R दोनों सत्य हैं और R, A की सही व्याख्या है।",
      "A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं है।",
      "A सत्य है, लेकिन R असत्य है।",
      "A असत्य है, लेकिन R सत्य है।"
    ],
    "correctAnswer": 0,
    "explanationEn": "The assertion accurately reflects Jeremy Bentham's contribution to Utilitarianism.",
    "explanationHi": "यह अभिकथन उपयोगितावाद में जेरेमी बेंथम के योगदान को सटीक रूप से दर्शाता है।"
  },
  {
    "id": "2023-46",
    "year": "2023",
    "questionEn": "Who is the author of the famous book 'Prison Notebooks'?",
    "questionHi": "प्रसिद्ध पुस्तक 'प्रिजन नोटबुक' के लेखक कौन हैं?",
    "optionsEn": [
      "Antonio Gramsci",
      "Edward Said",
      "Mahatma Gandhi",
      "Francis Fukuyama"
    ],
    "optionsHi": [
      "एंटोनियो ग्राम्शी",
      "एडवर्ड सईद",
      "महात्मा गांधी",
      "फ्रांसिस फुकुयामा"
    ],
    "correctAnswer": 0,
    "explanationEn": "'Prison Notebooks' is a seminal work by Antonio Gramsci.",
    "explanationHi": "'प्रिजन नोटबुक' एंटोनियो ग्राम्शी की एक मौलिक कृति है।"
  },
  {
    "id": "2023-47",
    "year": "2023",
    "questionEn": "The concept of 'Veil of Ignorance' in Political Science is associated with:",
    "questionHi": "राजनीति विज्ञान में 'अज्ञानता का पर्दा' की अवधारणा किससे जुड़ी है?",
    "optionsEn": [
      "Ranajit Guha",
      "John Rawls",
      "Antonio Gramsci",
      "Robert Michels"
    ],
    "optionsHi": [
      "रणजीत गुहा",
      "जॉन रॉल्स",
      "एंटोनियो ग्राम्शी",
      "रॉबर्ट मिशेल्स"
    ],
    "correctAnswer": 1,
    "explanationEn": "John Rawls is widely known for developing the concept of Veil of Ignorance.",
    "explanationHi": "जॉन रॉल्स को अज्ञानता का पर्दा की अवधारणा विकसित करने के लिए व्यापक रूप से जाना जाता है।"
  },
  {
    "id": "2023-48",
    "year": "2023",
    "questionEn": "Which section of the Indian Constitution deals with 'Panchayati Raj'?",
    "questionHi": "भारतीय संविधान का कौन सा भाग 'पंचायती राज' से संबंधित है?",
    "optionsEn": [
      "Schedule 7",
      "Article 368",
      "Schedule 10",
      "Schedule 11"
    ],
    "optionsHi": [
      "अनुसूची 7",
      "अनुच्छेद 368",
      "अनुसूची 10",
      "अनुसूची 11"
    ],
    "correctAnswer": 3,
    "explanationEn": "Schedule 11 of the Indian Constitution explicitly covers Panchayati Raj.",
    "explanationHi": "भारतीय संविधान का अनुसूची 11 स्पष्ट रूप से पंचायती राज को कवर करता है।"
  },
  {
    "id": "2023-49",
    "year": "2023",
    "questionEn": "In which year did the 'Fall of the Berlin Wall' take place?",
    "questionHi": "'बर्लिन की दीवार का गिरना' किस वर्ष हुआ था?",
    "optionsEn": [
      "1989",
      "1945",
      "1966",
      "1992"
    ],
    "optionsHi": [
      "1989",
      "1945",
      "1966",
      "1992"
    ],
    "correctAnswer": 0,
    "explanationEn": "The Fall of the Berlin Wall is a significant event that occurred in 1989.",
    "explanationHi": "बर्लिन की दीवार का गिरना एक महत्वपूर्ण घटना है जो 1989 में हुई थी।"
  },
  {
    "id": "2023-50",
    "year": "2023",
    "questionEn": "Assertion (A): Hobbes, Locke, Rousseau is heavily associated with the political theory of State of Nature.\nReason (R): This theory fundamentally shaped modern academic discourse in this sub-field.",
    "questionHi": "अभिकथन (A): हॉब्स, लॉक, रूसो का प्राकृतिक अवस्था के राजनीतिक सिद्धांत से गहरा संबंध है।\nकारण (R): इस सिद्धांत ने इस उप-क्षेत्र में आधुनिक शैक्षणिक विमर्श को मौलिक रूप से आकार दिया।",
    "optionsEn": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "optionsHi": [
      "A और R दोनों सत्य हैं और R, A की सही व्याख्या है।",
      "A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं है।",
      "A सत्य है, लेकिन R असत्य है।",
      "A असत्य है, लेकिन R सत्य है।"
    ],
    "correctAnswer": 0,
    "explanationEn": "The assertion accurately reflects Hobbes, Locke, Rousseau's contribution to State of Nature.",
    "explanationHi": "यह अभिकथन प्राकृतिक अवस्था में हॉब्स, लॉक, रूसो के योगदान को सटीक रूप से दर्शाता है।"
  },
  {
    "id": "2024-1",
    "year": "2024",
    "questionEn": "Who is the author of the famous book 'The End of History'?",
    "questionHi": "प्रसिद्ध पुस्तक 'द एंड ऑफ हिस्ट्री' के लेखक कौन हैं?",
    "optionsEn": [
      "Francis Fukuyama",
      "Mahatma Gandhi",
      "Joseph Schumpeter",
      "Rousseau"
    ],
    "optionsHi": [
      "फ्रांसिस फुकुयामा",
      "महात्मा गांधी",
      "जोसेफ शंपीटर",
      "रूसो"
    ],
    "correctAnswer": 0,
    "explanationEn": "'The End of History' is a seminal work by Francis Fukuyama.",
    "explanationHi": "'द एंड ऑफ हिस्ट्री' फ्रांसिस फुकुयामा की एक मौलिक कृति है।"
  },
  {
    "id": "2024-2",
    "year": "2024",
    "questionEn": "The concept of 'Overlapping Consensus' in Political Science is associated with:",
    "questionHi": "राजनीति विज्ञान में 'अतिव्यापी आम सहमति' की अवधारणा किससे जुड़ी है?",
    "optionsEn": [
      "Rousseau",
      "John Rawls",
      "Gabriel Almond",
      "Ranajit Guha"
    ],
    "optionsHi": [
      "रूसो",
      "जॉन रॉल्स",
      "गेब्रियल अल्मंड",
      "रणजीत गुहा"
    ],
    "correctAnswer": 1,
    "explanationEn": "John Rawls is widely known for developing the concept of Overlapping Consensus.",
    "explanationHi": "जॉन रॉल्स को अतिव्यापी आम सहमति की अवधारणा विकसित करने के लिए व्यापक रूप से जाना जाता है।"
  },
  {
    "id": "2024-3",
    "year": "2024",
    "questionEn": "Which section of the Indian Constitution deals with 'Anti-Defection Law'?",
    "questionHi": "भारतीय संविधान का कौन सा भाग 'दल-बदल विरोधी कानून' से संबंधित है?",
    "optionsEn": [
      "Article 72",
      "Schedule 10",
      "Article 110",
      "Article 143"
    ],
    "optionsHi": [
      "अनुच्छेद 72",
      "अनुसूची 10",
      "अनुच्छेद 110",
      "अनुच्छेद 143"
    ],
    "correctAnswer": 1,
    "explanationEn": "Schedule 10 of the Indian Constitution explicitly covers Anti-Defection Law.",
    "explanationHi": "भारतीय संविधान का अनुसूची 10 स्पष्ट रूप से दल-बदल विरोधी कानून को कवर करता है।"
  },
  {
    "id": "2024-4",
    "year": "2024",
    "questionEn": "In which year did the 'First War of Indian Independence' take place?",
    "questionHi": "'भारतीय स्वतंत्रता का प्रथम संग्राम' किस वर्ष हुआ था?",
    "optionsEn": [
      "1857",
      "2014",
      "1942",
      "1991"
    ],
    "optionsHi": [
      "1857",
      "2014",
      "1942",
      "1991"
    ],
    "correctAnswer": 0,
    "explanationEn": "The First War of Indian Independence is a significant event that occurred in 1857.",
    "explanationHi": "भारतीय स्वतंत्रता का प्रथम संग्राम एक महत्वपूर्ण घटना है जो 1857 में हुई थी।"
  },
  {
    "id": "2024-5",
    "year": "2024",
    "questionEn": "Assertion (A): Karl Marx is heavily associated with the political theory of Dialectical Materialism.\nReason (R): This theory fundamentally shaped modern academic discourse in this sub-field.",
    "questionHi": "अभिकथन (A): कार्ल मार्क्स का द्वंद्वात्मक भौतिकवाद के राजनीतिक सिद्धांत से गहरा संबंध है।\nकारण (R): इस सिद्धांत ने इस उप-क्षेत्र में आधुनिक शैक्षणिक विमर्श को मौलिक रूप से आकार दिया।",
    "optionsEn": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "optionsHi": [
      "A और R दोनों सत्य हैं और R, A की सही व्याख्या है।",
      "A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं है।",
      "A सत्य है, लेकिन R असत्य है।",
      "A असत्य है, लेकिन R सत्य है।"
    ],
    "correctAnswer": 0,
    "explanationEn": "The assertion accurately reflects Karl Marx's contribution to Dialectical Materialism.",
    "explanationHi": "यह अभिकथन द्वंद्वात्मक भौतिकवाद में कार्ल मार्क्स के योगदान को सटीक रूप से दर्शाता है।"
  },
  {
    "id": "2024-6",
    "year": "2024",
    "questionEn": "Who is the author of the famous book 'Power and Interdependence'?",
    "questionHi": "प्रसिद्ध पुस्तक 'पावर एंड इंटरडिपेंडेंस' के लेखक कौन हैं?",
    "optionsEn": [
      "Jawaharlal Nehru",
      "J.S. Mill",
      "Keohane and Nye",
      "Karl Marx"
    ],
    "optionsHi": [
      "जवाहरलाल नेहरू",
      "जे.एस. मिल",
      "केओहेन और नाई",
      "कार्ल मार्क्स"
    ],
    "correctAnswer": 2,
    "explanationEn": "'Power and Interdependence' is a seminal work by Keohane and Nye.",
    "explanationHi": "'पावर एंड इंटरडिपेंडेंस' केओहेन और नाई की एक मौलिक कृति है।"
  },
  {
    "id": "2024-7",
    "year": "2024",
    "questionEn": "The concept of 'Democratic Peace Theory' in Political Science is associated with:",
    "questionHi": "राजनीति विज्ञान में 'लोकतांत्रिक शांति सिद्धांत' की अवधारणा किससे जुड़ी है?",
    "optionsEn": [
      "Michael Doyle",
      "Mahatma Gandhi",
      "M.N. Roy",
      "Joseph Nye"
    ],
    "optionsHi": [
      "माइकल डॉयल",
      "महात्मा गांधी",
      "एम.एन. रॉय",
      "जोसेफ नाई"
    ],
    "correctAnswer": 0,
    "explanationEn": "Michael Doyle is widely known for developing the concept of Democratic Peace Theory.",
    "explanationHi": "माइकल डॉयल को लोकतांत्रिक शांति सिद्धांत की अवधारणा विकसित करने के लिए व्यापक रूप से जाना जाता है।"
  },
  {
    "id": "2024-8",
    "year": "2024",
    "questionEn": "Which section of the Indian Constitution deals with 'Pardoning power of President'?",
    "questionHi": "भारतीय संविधान का कौन सा भाग 'राष्ट्रपति की क्षमादान शक्ति' से संबंधित है?",
    "optionsEn": [
      "Article 51",
      "Schedule 10",
      "Article 72",
      "Article 51A"
    ],
    "optionsHi": [
      "अनुच्छेद 51",
      "अनुसूची 10",
      "अनुच्छेद 72",
      "अनुच्छेद 51A"
    ],
    "correctAnswer": 2,
    "explanationEn": "Article 72 of the Indian Constitution explicitly covers Pardoning power of President.",
    "explanationHi": "भारतीय संविधान का अनुच्छेद 72 स्पष्ट रूप से राष्ट्रपति की क्षमादान शक्ति को कवर करता है।"
  },
  {
    "id": "2024-9",
    "year": "2024",
    "questionEn": "In which year did the 'September 11 Attacks' take place?",
    "questionHi": "'11 सितंबर के हमले (9/11)' किस वर्ष हुआ था?",
    "optionsEn": [
      "1996",
      "1989",
      "1997",
      "2001"
    ],
    "optionsHi": [
      "1996",
      "1989",
      "1997",
      "2001"
    ],
    "correctAnswer": 3,
    "explanationEn": "The September 11 Attacks is a significant event that occurred in 2001.",
    "explanationHi": "11 सितंबर के हमले (9/11) एक महत्वपूर्ण घटना है जो 2001 में हुई थी।"
  },
  {
    "id": "2024-10",
    "year": "2024",
    "questionEn": "Assertion (A): Ranajit Guha is heavily associated with the political theory of Subaltern Studies.\nReason (R): This theory fundamentally shaped modern academic discourse in this sub-field.",
    "questionHi": "अभिकथन (A): रणजीत गुहा का सबाल्टर्न स्टडीज के राजनीतिक सिद्धांत से गहरा संबंध है।\nकारण (R): इस सिद्धांत ने इस उप-क्षेत्र में आधुनिक शैक्षणिक विमर्श को मौलिक रूप से आकार दिया।",
    "optionsEn": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "optionsHi": [
      "A और R दोनों सत्य हैं और R, A की सही व्याख्या है।",
      "A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं है।",
      "A सत्य है, लेकिन R असत्य है।",
      "A असत्य है, लेकिन R सत्य है।"
    ],
    "correctAnswer": 0,
    "explanationEn": "The assertion accurately reflects Ranajit Guha's contribution to Subaltern Studies.",
    "explanationHi": "यह अभिकथन सबाल्टर्न स्टडीज में रणजीत गुहा के योगदान को सटीक रूप से दर्शाता है।"
  },
  {
    "id": "2024-11",
    "year": "2024",
    "questionEn": "Who is the author of the famous book 'Leviathan'?",
    "questionHi": "प्रसिद्ध पुस्तक 'लेवियाथन' के लेखक कौन हैं?",
    "optionsEn": [
      "Machiavelli",
      "Hobbes",
      "Karl Marx",
      "Karl Popper"
    ],
    "optionsHi": [
      "मैकियावेली",
      "हॉब्स",
      "कार्ल मार्क्स",
      "कार्ल पॉपर"
    ],
    "correctAnswer": 1,
    "explanationEn": "'Leviathan' is a seminal work by Hobbes.",
    "explanationHi": "'लेवियाथन' हॉब्स की एक मौलिक कृति है।"
  },
  {
    "id": "2024-12",
    "year": "2024",
    "questionEn": "The concept of 'Radical Humanism' in Political Science is associated with:",
    "questionHi": "राजनीति विज्ञान में 'कट्टरपंथी मानववाद' की अवधारणा किससे जुड़ी है?",
    "optionsEn": [
      "Montesquieu",
      "M.N. Roy",
      "Francis Fukuyama",
      "Antonio Gramsci"
    ],
    "optionsHi": [
      "मोंटेस्क्यू",
      "एम.एन. रॉय",
      "फ्रांसिस फुकुयामा",
      "एंटोनियो ग्राम्शी"
    ],
    "correctAnswer": 1,
    "explanationEn": "M.N. Roy is widely known for developing the concept of Radical Humanism.",
    "explanationHi": "एम.एन. रॉय को कट्टरपंथी मानववाद की अवधारणा विकसित करने के लिए व्यापक रूप से जाना जाता है।"
  },
  {
    "id": "2024-13",
    "year": "2024",
    "questionEn": "Which section of the Indian Constitution deals with 'Promotion of international peace'?",
    "questionHi": "भारतीय संविधान का कौन सा भाग 'अंतर्राष्ट्रीय शांति को बढ़ावा देना' से संबंधित है?",
    "optionsEn": [
      "Article 14",
      "Article 72",
      "Article 51",
      "Article 352"
    ],
    "optionsHi": [
      "अनुच्छेद 14",
      "अनुच्छेद 72",
      "अनुच्छेद 51",
      "अनुच्छेद 352"
    ],
    "correctAnswer": 2,
    "explanationEn": "Article 51 of the Indian Constitution explicitly covers Promotion of international peace.",
    "explanationHi": "भारतीय संविधान का अनुच्छेद 51 स्पष्ट रूप से अंतर्राष्ट्रीय शांति को बढ़ावा देना को कवर करता है।"
  },
  {
    "id": "2024-14",
    "year": "2024",
    "questionEn": "In which year did the 'Cabinet Mission Plan' take place?",
    "questionHi": "'कैबिनेट मिशन योजना' किस वर्ष हुआ था?",
    "optionsEn": [
      "1971",
      "1885",
      "1946",
      "1999"
    ],
    "optionsHi": [
      "1971",
      "1885",
      "1946",
      "1999"
    ],
    "correctAnswer": 2,
    "explanationEn": "The Cabinet Mission Plan is a significant event that occurred in 1946.",
    "explanationHi": "कैबिनेट मिशन योजना एक महत्वपूर्ण घटना है जो 1946 में हुई थी।"
  },
  {
    "id": "2024-15",
    "year": "2024",
    "questionEn": "Assertion (A): Aristotle is heavily associated with the political theory of Golden Mean.\nReason (R): This theory fundamentally shaped modern academic discourse in this sub-field.",
    "questionHi": "अभिकथन (A): अरस्तू का स्वर्णिम मध्य (Golden Mean) के राजनीतिक सिद्धांत से गहरा संबंध है।\nकारण (R): इस सिद्धांत ने इस उप-क्षेत्र में आधुनिक शैक्षणिक विमर्श को मौलिक रूप से आकार दिया।",
    "optionsEn": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "optionsHi": [
      "A और R दोनों सत्य हैं और R, A की सही व्याख्या है।",
      "A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं है।",
      "A सत्य है, लेकिन R असत्य है।",
      "A असत्य है, लेकिन R सत्य है।"
    ],
    "correctAnswer": 0,
    "explanationEn": "The assertion accurately reflects Aristotle's contribution to Golden Mean.",
    "explanationHi": "यह अभिकथन स्वर्णिम मध्य (Golden Mean) में अरस्तू के योगदान को सटीक रूप से दर्शाता है।"
  },
  {
    "id": "2024-16",
    "year": "2024",
    "questionEn": "Who is the author of the famous book 'The Prince'?",
    "questionHi": "प्रसिद्ध पुस्तक 'द प्रिंस' के लेखक कौन हैं?",
    "optionsEn": [
      "Frantz Fanon",
      "Hobbes",
      "Machiavelli",
      "Adam Smith"
    ],
    "optionsHi": [
      "फ्रांज फैनन",
      "हॉब्स",
      "मैकियावेली",
      "एडम स्मिथ"
    ],
    "correctAnswer": 2,
    "explanationEn": "'The Prince' is a seminal work by Machiavelli.",
    "explanationHi": "'द प्रिंस' मैकियावेली की एक मौलिक कृति है।"
  },
  {
    "id": "2024-17",
    "year": "2024",
    "questionEn": "The concept of 'Four Pillars of State' in Political Science is associated with:",
    "questionHi": "राजनीति विज्ञान में 'राज्य के चार स्तंभ' की अवधारणा किससे जुड़ी है?",
    "optionsEn": [
      "Hobbes, Locke, Rousseau",
      "Ram Manohar Lohia",
      "Edward Said",
      "Rousseau"
    ],
    "optionsHi": [
      "हॉब्स, लॉक, रूसो",
      "राम मनोहर लोहिया",
      "एडवर्ड सईद",
      "रूसो"
    ],
    "correctAnswer": 1,
    "explanationEn": "Ram Manohar Lohia is widely known for developing the concept of Four Pillars of State.",
    "explanationHi": "राम मनोहर लोहिया को राज्य के चार स्तंभ की अवधारणा विकसित करने के लिए व्यापक रूप से जाना जाता है।"
  },
  {
    "id": "2024-18",
    "year": "2024",
    "questionEn": "Which section of the Indian Constitution deals with 'Uniform Civil Code'?",
    "questionHi": "भारतीय संविधान का कौन सा भाग 'समान नागरिक संहिता' से संबंधित है?",
    "optionsEn": [
      "Article 44",
      "Article 370",
      "Article 51",
      "Article 368"
    ],
    "optionsHi": [
      "अनुच्छेद 44",
      "अनुच्छेद 370",
      "अनुच्छेद 51",
      "अनुच्छेद 368"
    ],
    "correctAnswer": 0,
    "explanationEn": "Article 44 of the Indian Constitution explicitly covers Uniform Civil Code.",
    "explanationHi": "भारतीय संविधान का अनुच्छेद 44 स्पष्ट रूप से समान नागरिक संहिता को कवर करता है।"
  },
  {
    "id": "2024-19",
    "year": "2024",
    "questionEn": "In which year did the 'Establishment of WTO' take place?",
    "questionHi": "'विश्व व्यापार संगठन (WTO) की स्थापना' किस वर्ष हुआ था?",
    "optionsEn": [
      "1998",
      "2014",
      "1999",
      "1995"
    ],
    "optionsHi": [
      "1998",
      "2014",
      "1999",
      "1995"
    ],
    "correctAnswer": 3,
    "explanationEn": "The Establishment of WTO is a significant event that occurred in 1995.",
    "explanationHi": "विश्व व्यापार संगठन (WTO) की स्थापना एक महत्वपूर्ण घटना है जो 1995 में हुई थी।"
  },
  {
    "id": "2024-20",
    "year": "2024",
    "questionEn": "Assertion (A): Jayaprakash Narayan is heavily associated with the political theory of Total Revolution.\nReason (R): This theory fundamentally shaped modern academic discourse in this sub-field.",
    "questionHi": "अभिकथन (A): जयप्रकाश नारायण का संपूर्ण क्रांति के राजनीतिक सिद्धांत से गहरा संबंध है।\nकारण (R): इस सिद्धांत ने इस उप-क्षेत्र में आधुनिक शैक्षणिक विमर्श को मौलिक रूप से आकार दिया।",
    "optionsEn": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "optionsHi": [
      "A और R दोनों सत्य हैं और R, A की सही व्याख्या है।",
      "A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं है।",
      "A सत्य है, लेकिन R असत्य है।",
      "A असत्य है, लेकिन R सत्य है।"
    ],
    "correctAnswer": 0,
    "explanationEn": "The assertion accurately reflects Jayaprakash Narayan's contribution to Total Revolution.",
    "explanationHi": "यह अभिकथन संपूर्ण क्रांति में जयप्रकाश नारायण के योगदान को सटीक रूप से दर्शाता है।"
  },
  {
    "id": "2024-21",
    "year": "2024",
    "questionEn": "Who is the author of the famous book 'A Theory of Justice'?",
    "questionHi": "प्रसिद्ध पुस्तक 'ए थ्योरी ऑफ जस्टिस' के लेखक कौन हैं?",
    "optionsEn": [
      "B.R. Ambedkar",
      "Mahatma Gandhi",
      "Hannah Arendt",
      "John Rawls"
    ],
    "optionsHi": [
      "बी.आर. अंबेडकर",
      "महात्मा गांधी",
      "हन्ना आरेंड्ट",
      "जॉन रॉल्स"
    ],
    "correctAnswer": 3,
    "explanationEn": "'A Theory of Justice' is a seminal work by John Rawls.",
    "explanationHi": "'ए थ्योरी ऑफ जस्टिस' जॉन रॉल्स की एक मौलिक कृति है।"
  },
  {
    "id": "2024-22",
    "year": "2024",
    "questionEn": "The concept of 'Complex Interdependence' in Political Science is associated with:",
    "questionHi": "राजनीति विज्ञान में 'जटिल अन्योन्याश्रयता' की अवधारणा किससे जुड़ी है?",
    "optionsEn": [
      "Karl Marx",
      "Jayaprakash Narayan",
      "Keohane & Nye",
      "Antonio Gramsci"
    ],
    "optionsHi": [
      "कार्ल मार्क्स",
      "जयप्रकाश नारायण",
      "केओहेन और नाई",
      "एंटोनियो ग्राम्शी"
    ],
    "correctAnswer": 2,
    "explanationEn": "Keohane & Nye is widely known for developing the concept of Complex Interdependence.",
    "explanationHi": "केओहेन और नाई को जटिल अन्योन्याश्रयता की अवधारणा विकसित करने के लिए व्यापक रूप से जाना जाता है।"
  },
  {
    "id": "2024-23",
    "year": "2024",
    "questionEn": "Which section of the Indian Constitution deals with 'Right to Constitutional Remedies'?",
    "questionHi": "भारतीय संविधान का कौन सा भाग 'संवैधानिक उपचारों का अधिकार' से संबंधित है?",
    "optionsEn": [
      "Article 32",
      "Article 356",
      "Article 312",
      "Article 143"
    ],
    "optionsHi": [
      "अनुच्छेद 32",
      "अनुच्छेद 356",
      "अनुच्छेद 312",
      "अनुच्छेद 143"
    ],
    "correctAnswer": 0,
    "explanationEn": "Article 32 of the Indian Constitution explicitly covers Right to Constitutional Remedies.",
    "explanationHi": "भारतीय संविधान का अनुच्छेद 32 स्पष्ट रूप से संवैधानिक उपचारों का अधिकार को कवर करता है।"
  },
  {
    "id": "2024-24",
    "year": "2024",
    "questionEn": "In which year did the 'Morley-Minto Reforms' take place?",
    "questionHi": "'मार्ले-मिंटो सुधार' किस वर्ष हुआ था?",
    "optionsEn": [
      "2014",
      "1909",
      "1992",
      "1966"
    ],
    "optionsHi": [
      "2014",
      "1909",
      "1992",
      "1966"
    ],
    "correctAnswer": 1,
    "explanationEn": "The Morley-Minto Reforms is a significant event that occurred in 1909.",
    "explanationHi": "मार्ले-मिंटो सुधार एक महत्वपूर्ण घटना है जो 1909 में हुई थी।"
  },
  {
    "id": "2024-25",
    "year": "2024",
    "questionEn": "Assertion (A): Edward Said is heavily associated with the political theory of Post-Colonialism.\nReason (R): This theory fundamentally shaped modern academic discourse in this sub-field.",
    "questionHi": "अभिकथन (A): एडवर्ड सईद का उत्तर-उपनिवेशवाद के राजनीतिक सिद्धांत से गहरा संबंध है।\nकारण (R): इस सिद्धांत ने इस उप-क्षेत्र में आधुनिक शैक्षणिक विमर्श को मौलिक रूप से आकार दिया।",
    "optionsEn": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "optionsHi": [
      "A और R दोनों सत्य हैं और R, A की सही व्याख्या है।",
      "A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं है।",
      "A सत्य है, लेकिन R असत्य है।",
      "A असत्य है, लेकिन R सत्य है।"
    ],
    "correctAnswer": 0,
    "explanationEn": "The assertion accurately reflects Edward Said's contribution to Post-Colonialism.",
    "explanationHi": "यह अभिकथन उत्तर-उपनिवेशवाद में एडवर्ड सईद के योगदान को सटीक रूप से दर्शाता है।"
  },
  {
    "id": "2024-26",
    "year": "2024",
    "questionEn": "Who is the author of the famous book 'Social Contract'?",
    "questionHi": "प्रसिद्ध पुस्तक 'सोशल कॉन्ट्रैक्ट' के लेखक कौन हैं?",
    "optionsEn": [
      "Joseph Schumpeter",
      "Hobbes",
      "Rousseau",
      "Kenneth Waltz"
    ],
    "optionsHi": [
      "जोसेफ शंपीटर",
      "हॉब्स",
      "रूसो",
      "केनेथ वाल्ट्ज"
    ],
    "correctAnswer": 2,
    "explanationEn": "'Social Contract' is a seminal work by Rousseau.",
    "explanationHi": "'सोशल कॉन्ट्रैक्ट' रूसो की एक मौलिक कृति है।"
  },
  {
    "id": "2024-27",
    "year": "2024",
    "questionEn": "The concept of 'Dialectical Materialism' in Political Science is associated with:",
    "questionHi": "राजनीति विज्ञान में 'द्वंद्वात्मक भौतिकवाद' की अवधारणा किससे जुड़ी है?",
    "optionsEn": [
      "Hobbes, Locke, Rousseau",
      "Karl Marx",
      "Jeremy Bentham",
      "Kautilya"
    ],
    "optionsHi": [
      "हॉब्स, लॉक, रूसो",
      "कार्ल मार्क्स",
      "जेरेमी बेंथम",
      "कौटिल्य"
    ],
    "correctAnswer": 1,
    "explanationEn": "Karl Marx is widely known for developing the concept of Dialectical Materialism.",
    "explanationHi": "कार्ल मार्क्स को द्वंद्वात्मक भौतिकवाद की अवधारणा विकसित करने के लिए व्यापक रूप से जाना जाता है।"
  },
  {
    "id": "2024-28",
    "year": "2024",
    "questionEn": "Which section of the Indian Constitution deals with 'Special status of Jammu and Kashmir'?",
    "questionHi": "भारतीय संविधान का कौन सा भाग 'जम्मू और कश्मीर का विशेष दर्जा (निरस्त)' से संबंधित है?",
    "optionsEn": [
      "Article 262",
      "Article 21",
      "Article 280",
      "Article 370"
    ],
    "optionsHi": [
      "अनुच्छेद 262",
      "अनुच्छेद 21",
      "अनुच्छेद 280",
      "अनुच्छेद 370"
    ],
    "correctAnswer": 3,
    "explanationEn": "Article 370 of the Indian Constitution explicitly covers Special status of Jammu and Kashmir.",
    "explanationHi": "भारतीय संविधान का अनुच्छेद 370 स्पष्ट रूप से जम्मू और कश्मीर का विशेष दर्जा (निरस्त) को कवर करता है।"
  },
  {
    "id": "2024-29",
    "year": "2024",
    "questionEn": "In which year did the 'Pokhran-I Nuclear Test' take place?",
    "questionHi": "'पोखरण-I परमाणु परीक्षण' किस वर्ष हुआ था?",
    "optionsEn": [
      "1996",
      "1974",
      "1991",
      "1992"
    ],
    "optionsHi": [
      "1996",
      "1974",
      "1991",
      "1992"
    ],
    "correctAnswer": 1,
    "explanationEn": "The Pokhran-I Nuclear Test is a significant event that occurred in 1974.",
    "explanationHi": "पोखरण-I परमाणु परीक्षण एक महत्वपूर्ण घटना है जो 1974 में हुई थी।"
  },
  {
    "id": "2024-30",
    "year": "2024",
    "questionEn": "Assertion (A): Plato is heavily associated with the political theory of Philosopher King.\nReason (R): This theory fundamentally shaped modern academic discourse in this sub-field.",
    "questionHi": "अभिकथन (A): प्लेटो का दार्शनिक राजा के राजनीतिक सिद्धांत से गहरा संबंध है।\nकारण (R): इस सिद्धांत ने इस उप-क्षेत्र में आधुनिक शैक्षणिक विमर्श को मौलिक रूप से आकार दिया।",
    "optionsEn": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "optionsHi": [
      "A और R दोनों सत्य हैं और R, A की सही व्याख्या है।",
      "A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं है।",
      "A सत्य है, लेकिन R असत्य है।",
      "A असत्य है, लेकिन R सत्य है।"
    ],
    "correctAnswer": 0,
    "explanationEn": "The assertion accurately reflects Plato's contribution to Philosopher King.",
    "explanationHi": "यह अभिकथन दार्शनिक राजा में प्लेटो के योगदान को सटीक रूप से दर्शाता है।"
  },
  {
    "id": "2024-31",
    "year": "2024",
    "questionEn": "Who is the author of the famous book 'The Civic Culture'?",
    "questionHi": "प्रसिद्ध पुस्तक 'द सिविक कल्चर' के लेखक कौन हैं?",
    "optionsEn": [
      "Jawaharlal Nehru",
      "Almond and Verba",
      "Joseph Schumpeter",
      "J.S. Mill"
    ],
    "optionsHi": [
      "जवाहरलाल नेहरू",
      "अल्मंड और वर्बा",
      "जोसेफ शंपीटर",
      "जे.एस. मिल"
    ],
    "correctAnswer": 1,
    "explanationEn": "'The Civic Culture' is a seminal work by Almond and Verba.",
    "explanationHi": "'द सिविक कल्चर' अल्मंड और वर्बा की एक मौलिक कृति है।"
  },
  {
    "id": "2024-32",
    "year": "2024",
    "questionEn": "The concept of 'End of History' in Political Science is associated with:",
    "questionHi": "राजनीति विज्ञान में 'इतिहास का अंत' की अवधारणा किससे जुड़ी है?",
    "optionsEn": [
      "Montesquieu",
      "Francis Fukuyama",
      "Hobbes, Locke, Rousseau",
      "Keohane & Nye"
    ],
    "optionsHi": [
      "मोंटेस्क्यू",
      "फ्रांसिस फुकुयामा",
      "हॉब्स, लॉक, रूसो",
      "केओहेन और नाई"
    ],
    "correctAnswer": 1,
    "explanationEn": "Francis Fukuyama is widely known for developing the concept of End of History.",
    "explanationHi": "फ्रांसिस फुकुयामा को इतिहास का अंत की अवधारणा विकसित करने के लिए व्यापक रूप से जाना जाता है।"
  },
  {
    "id": "2024-33",
    "year": "2024",
    "questionEn": "Which section of the Indian Constitution deals with 'Equality before law'?",
    "questionHi": "भारतीय संविधान का कौन सा भाग 'कानून के समक्ष समानता' से संबंधित है?",
    "optionsEn": [
      "Article 143",
      "Article 148",
      "Article 14",
      "Article 356"
    ],
    "optionsHi": [
      "अनुच्छेद 143",
      "अनुच्छेद 148",
      "अनुच्छेद 14",
      "अनुच्छेद 356"
    ],
    "correctAnswer": 2,
    "explanationEn": "Article 14 of the Indian Constitution explicitly covers Equality before law.",
    "explanationHi": "भारतीय संविधान का अनुच्छेद 14 स्पष्ट रूप से कानून के समक्ष समानता को कवर करता है।"
  },
  {
    "id": "2024-34",
    "year": "2024",
    "questionEn": "In which year did the 'Formation of Indian National Congress' take place?",
    "questionHi": "'भारतीय राष्ट्रीय कांग्रेस का गठन' किस वर्ष हुआ था?",
    "optionsEn": [
      "1885",
      "1974",
      "1972",
      "1919"
    ],
    "optionsHi": [
      "1885",
      "1974",
      "1972",
      "1919"
    ],
    "correctAnswer": 0,
    "explanationEn": "The Formation of Indian National Congress is a significant event that occurred in 1885.",
    "explanationHi": "भारतीय राष्ट्रीय कांग्रेस का गठन एक महत्वपूर्ण घटना है जो 1885 में हुई थी।"
  },
  {
    "id": "2024-35",
    "year": "2024",
    "questionEn": "Assertion (A): Montesquieu is heavily associated with the political theory of Separation of Powers.\nReason (R): This theory fundamentally shaped modern academic discourse in this sub-field.",
    "questionHi": "अभिकथन (A): मोंटेस्क्यू का शक्तियों का पृथक्करण के राजनीतिक सिद्धांत से गहरा संबंध है।\nकारण (R): इस सिद्धांत ने इस उप-क्षेत्र में आधुनिक शैक्षणिक विमर्श को मौलिक रूप से आकार दिया।",
    "optionsEn": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "optionsHi": [
      "A और R दोनों सत्य हैं और R, A की सही व्याख्या है।",
      "A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं है।",
      "A सत्य है, लेकिन R असत्य है।",
      "A असत्य है, लेकिन R सत्य है।"
    ],
    "correctAnswer": 0,
    "explanationEn": "The assertion accurately reflects Montesquieu's contribution to Separation of Powers.",
    "explanationHi": "यह अभिकथन शक्तियों का पृथक्करण में मोंटेस्क्यू के योगदान को सटीक रूप से दर्शाता है।"
  },
  {
    "id": "2024-36",
    "year": "2024",
    "questionEn": "Who is the author of the famous book 'Das Kapital'?",
    "questionHi": "प्रसिद्ध पुस्तक 'दास कैपिटल' के लेखक कौन हैं?",
    "optionsEn": [
      "Karl Marx",
      "J.S. Mill",
      "Rabindranath Tagore",
      "Samuel P. Huntington"
    ],
    "optionsHi": [
      "कार्ल मार्क्स",
      "जे.एस. मिल",
      "रवींद्रनाथ टैगोर",
      "सैमुअल पी. हंटिंगटन"
    ],
    "correctAnswer": 0,
    "explanationEn": "'Das Kapital' is a seminal work by Karl Marx.",
    "explanationHi": "'दास कैपिटल' कार्ल मार्क्स की एक मौलिक कृति है।"
  },
  {
    "id": "2024-37",
    "year": "2024",
    "questionEn": "The concept of 'Hegemony' in Political Science is associated with:",
    "questionHi": "राजनीति विज्ञान में 'हेजेमनी (प्राधान्य)' की अवधारणा किससे जुड़ी है?",
    "optionsEn": [
      "Aristotle",
      "Kimberlé Crenshaw",
      "Antonio Gramsci",
      "Alfred Crosby"
    ],
    "optionsHi": [
      "अरस्तू",
      "किम्बर्ले क्रेंशॉ",
      "एंटोनियो ग्राम्शी",
      "अल्फ्रेड क्रॉस्बी"
    ],
    "correctAnswer": 2,
    "explanationEn": "Antonio Gramsci is widely known for developing the concept of Hegemony.",
    "explanationHi": "एंटोनियो ग्राम्शी को हेजेमनी (प्राधान्य) की अवधारणा विकसित करने के लिए व्यापक रूप से जाना जाता है।"
  },
  {
    "id": "2024-38",
    "year": "2024",
    "questionEn": "Which section of the Indian Constitution deals with 'Election Commission'?",
    "questionHi": "भारतीय संविधान का कौन सा भाग 'चुनाव आयोग' से संबंधित है?",
    "optionsEn": [
      "Article 21",
      "Article 51A",
      "Article 315",
      "Article 324"
    ],
    "optionsHi": [
      "अनुच्छेद 21",
      "अनुच्छेद 51A",
      "अनुच्छेद 315",
      "अनुच्छेद 324"
    ],
    "correctAnswer": 3,
    "explanationEn": "Article 324 of the Indian Constitution explicitly covers Election Commission.",
    "explanationHi": "भारतीय संविधान का अनुच्छेद 324 स्पष्ट रूप से चुनाव आयोग को कवर करता है।"
  },
  {
    "id": "2024-39",
    "year": "2024",
    "questionEn": "In which year did the 'Government of India Act' take place?",
    "questionHi": "'भारत सरकार अधिनियम' किस वर्ष हुआ था?",
    "optionsEn": [
      "1935",
      "1857",
      "1971",
      "1985"
    ],
    "optionsHi": [
      "1935",
      "1857",
      "1971",
      "1985"
    ],
    "correctAnswer": 0,
    "explanationEn": "The Government of India Act is a significant event that occurred in 1935.",
    "explanationHi": "भारत सरकार अधिनियम एक महत्वपूर्ण घटना है जो 1935 में हुई थी।"
  },
  {
    "id": "2024-40",
    "year": "2024",
    "questionEn": "Assertion (A): Alfred Crosby is heavily associated with the political theory of Ecological Imperialism.\nReason (R): This theory fundamentally shaped modern academic discourse in this sub-field.",
    "questionHi": "अभिकथन (A): अल्फ्रेड क्रॉस्बी का पारिस्थितिक साम्राज्यवाद के राजनीतिक सिद्धांत से गहरा संबंध है।\nकारण (R): इस सिद्धांत ने इस उप-क्षेत्र में आधुनिक शैक्षणिक विमर्श को मौलिक रूप से आकार दिया।",
    "optionsEn": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "optionsHi": [
      "A और R दोनों सत्य हैं और R, A की सही व्याख्या है।",
      "A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं है।",
      "A सत्य है, लेकिन R असत्य है।",
      "A असत्य है, लेकिन R सत्य है।"
    ],
    "correctAnswer": 0,
    "explanationEn": "The assertion accurately reflects Alfred Crosby's contribution to Ecological Imperialism.",
    "explanationHi": "यह अभिकथन पारिस्थितिक साम्राज्यवाद में अल्फ्रेड क्रॉस्बी के योगदान को सटीक रूप से दर्शाता है।"
  },
  {
    "id": "2024-41",
    "year": "2024",
    "questionEn": "Who is the author of the famous book 'The Republic'?",
    "questionHi": "प्रसिद्ध पुस्तक 'द रिपब्लिक' के लेखक कौन हैं?",
    "optionsEn": [
      "Keohane and Nye",
      "Plato",
      "Mahatma Gandhi",
      "Aristotle"
    ],
    "optionsHi": [
      "केओहेन और नाई",
      "प्लेटो",
      "महात्मा गांधी",
      "अरस्तू"
    ],
    "correctAnswer": 1,
    "explanationEn": "'The Republic' is a seminal work by Plato.",
    "explanationHi": "'द रिपब्लिक' प्लेटो की एक मौलिक कृति है।"
  },
  {
    "id": "2024-42",
    "year": "2024",
    "questionEn": "The concept of 'General Will' in Political Science is associated with:",
    "questionHi": "राजनीति विज्ञान में 'सामान्य इच्छा' की अवधारणा किससे जुड़ी है?",
    "optionsEn": [
      "Plato",
      "Alfred Crosby",
      "Rousseau",
      "Kautilya"
    ],
    "optionsHi": [
      "प्लेटो",
      "अल्फ्रेड क्रॉस्बी",
      "रूसो",
      "कौटिल्य"
    ],
    "correctAnswer": 2,
    "explanationEn": "Rousseau is widely known for developing the concept of General Will.",
    "explanationHi": "रूसो को सामान्य इच्छा की अवधारणा विकसित करने के लिए व्यापक रूप से जाना जाता है।"
  },
  {
    "id": "2024-43",
    "year": "2024",
    "questionEn": "Which section of the Indian Constitution deals with 'Adjudication of disputes relating to waters of inter-State rivers'?",
    "questionHi": "भारतीय संविधान का कौन सा भाग 'अंतर-राज्यीय नदियों के जल संबंधी विवादों का न्यायनिर्णयन' से संबंधित है?",
    "optionsEn": [
      "Article 21",
      "Article 262",
      "Article 123",
      "Article 44"
    ],
    "optionsHi": [
      "अनुच्छेद 21",
      "अनुच्छेद 262",
      "अनुच्छेद 123",
      "अनुच्छेद 44"
    ],
    "correctAnswer": 1,
    "explanationEn": "Article 262 of the Indian Constitution explicitly covers Adjudication of disputes relating to waters of inter-State rivers.",
    "explanationHi": "भारतीय संविधान का अनुच्छेद 262 स्पष्ट रूप से अंतर-राज्यीय नदियों के जल संबंधी विवादों का न्यायनिर्णयन को कवर करता है।"
  },
  {
    "id": "2024-44",
    "year": "2024",
    "questionEn": "In which year did the 'Panchsheel Agreement' take place?",
    "questionHi": "'पंचशील समझौता' किस वर्ष हुआ था?",
    "optionsEn": [
      "1999",
      "2008",
      "2001",
      "1954"
    ],
    "optionsHi": [
      "1999",
      "2008",
      "2001",
      "1954"
    ],
    "correctAnswer": 3,
    "explanationEn": "The Panchsheel Agreement is a significant event that occurred in 1954.",
    "explanationHi": "पंचशील समझौता एक महत्वपूर्ण घटना है जो 1954 में हुई थी।"
  },
  {
    "id": "2024-45",
    "year": "2024",
    "questionEn": "Assertion (A): Mahatma Gandhi is heavily associated with the political theory of Satyagraha.\nReason (R): This theory fundamentally shaped modern academic discourse in this sub-field.",
    "questionHi": "अभिकथन (A): महात्मा गांधी का सत्याग्रह के राजनीतिक सिद्धांत से गहरा संबंध है।\nकारण (R): इस सिद्धांत ने इस उप-क्षेत्र में आधुनिक शैक्षणिक विमर्श को मौलिक रूप से आकार दिया।",
    "optionsEn": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "optionsHi": [
      "A और R दोनों सत्य हैं और R, A की सही व्याख्या है।",
      "A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं है।",
      "A सत्य है, लेकिन R असत्य है।",
      "A असत्य है, लेकिन R सत्य है।"
    ],
    "correctAnswer": 0,
    "explanationEn": "The assertion accurately reflects Mahatma Gandhi's contribution to Satyagraha.",
    "explanationHi": "यह अभिकथन सत्याग्रह में महात्मा गांधी के योगदान को सटीक रूप से दर्शाता है।"
  },
  {
    "id": "2024-46",
    "year": "2024",
    "questionEn": "Who is the author of the famous book 'Discovery of India'?",
    "questionHi": "प्रसिद्ध पुस्तक 'डिस्कवरी ऑफ इंडिया' के लेखक कौन हैं?",
    "optionsEn": [
      "John Mearsheimer",
      "John Rawls",
      "Kenneth Waltz",
      "Jawaharlal Nehru"
    ],
    "optionsHi": [
      "जॉन मियर्सहाइमर",
      "जॉन रॉल्स",
      "केनेथ वाल्ट्ज",
      "जवाहरलाल नेहरू"
    ],
    "correctAnswer": 3,
    "explanationEn": "'Discovery of India' is a seminal work by Jawaharlal Nehru.",
    "explanationHi": "'डिस्कवरी ऑफ इंडिया' जवाहरलाल नेहरू की एक मौलिक कृति है।"
  },
  {
    "id": "2024-47",
    "year": "2024",
    "questionEn": "The concept of 'Clash of Civilizations' in Political Science is associated with:",
    "questionHi": "राजनीति विज्ञान में 'सभ्यताओं का संघर्ष' की अवधारणा किससे जुड़ी है?",
    "optionsEn": [
      "Kimberlé Crenshaw",
      "Samuel P. Huntington",
      "Montesquieu",
      "Jayaprakash Narayan"
    ],
    "optionsHi": [
      "किम्बर्ले क्रेंशॉ",
      "सैमुअल पी. हंटिंगटन",
      "मोंटेस्क्यू",
      "जयप्रकाश नारायण"
    ],
    "correctAnswer": 1,
    "explanationEn": "Samuel P. Huntington is widely known for developing the concept of Clash of Civilizations.",
    "explanationHi": "सैमुअल पी. हंटिंगटन को सभ्यताओं का संघर्ष की अवधारणा विकसित करने के लिए व्यापक रूप से जाना जाता है।"
  },
  {
    "id": "2024-48",
    "year": "2024",
    "questionEn": "Which section of the Indian Constitution deals with 'Right to Property'?",
    "questionHi": "भारतीय संविधान का कौन सा भाग 'संपत्ति का अधिकार' से संबंधित है?",
    "optionsEn": [
      "Article 143",
      "Article 40",
      "Article 123",
      "Article 300A"
    ],
    "optionsHi": [
      "अनुच्छेद 143",
      "अनुच्छेद 40",
      "अनुच्छेद 123",
      "अनुच्छेद 300A"
    ],
    "correctAnswer": 3,
    "explanationEn": "Article 300A of the Indian Constitution explicitly covers Right to Property.",
    "explanationHi": "भारतीय संविधान का अनुच्छेद 300A स्पष्ट रूप से संपत्ति का अधिकार को कवर करता है।"
  },
  {
    "id": "2024-49",
    "year": "2024",
    "questionEn": "In which year did the 'Montagu-Chelmsford Reforms' take place?",
    "questionHi": "'मोंटेग्यू-चेम्सफोर्ड सुधार' किस वर्ष हुआ था?",
    "optionsEn": [
      "1991",
      "1919",
      "2016",
      "1985"
    ],
    "optionsHi": [
      "1991",
      "1919",
      "2016",
      "1985"
    ],
    "correctAnswer": 1,
    "explanationEn": "The Montagu-Chelmsford Reforms is a significant event that occurred in 1919.",
    "explanationHi": "मोंटेग्यू-चेम्सफोर्ड सुधार एक महत्वपूर्ण घटना है जो 1919 में हुई थी।"
  },
  {
    "id": "2024-50",
    "year": "2024",
    "questionEn": "Assertion (A): M.N. Roy is heavily associated with the political theory of Radical Humanism.\nReason (R): This theory fundamentally shaped modern academic discourse in this sub-field.",
    "questionHi": "अभिकथन (A): एम.एन. रॉय का कट्टरपंथी मानववाद के राजनीतिक सिद्धांत से गहरा संबंध है।\nकारण (R): इस सिद्धांत ने इस उप-क्षेत्र में आधुनिक शैक्षणिक विमर्श को मौलिक रूप से आकार दिया।",
    "optionsEn": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "optionsHi": [
      "A और R दोनों सत्य हैं और R, A की सही व्याख्या है।",
      "A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं है।",
      "A सत्य है, लेकिन R असत्य है।",
      "A असत्य है, लेकिन R सत्य है।"
    ],
    "correctAnswer": 0,
    "explanationEn": "The assertion accurately reflects M.N. Roy's contribution to Radical Humanism.",
    "explanationHi": "यह अभिकथन कट्टरपंथी मानववाद में एम.एन. रॉय के योगदान को सटीक रूप से दर्शाता है।"
  },
  {
    "id": "2025-1",
    "year": "2025",
    "questionEn": "Who is the author of the famous book 'Annihilation of Caste'?",
    "questionHi": "प्रसिद्ध पुस्तक 'एनिहिलेशन ऑफ कास्ट' के लेखक कौन हैं?",
    "optionsEn": [
      "Hannah Arendt",
      "B.R. Ambedkar",
      "J.S. Mill",
      "Karl Popper"
    ],
    "optionsHi": [
      "हन्ना आरेंड्ट",
      "बी.आर. अंबेडकर",
      "जे.एस. मिल",
      "कार्ल पॉपर"
    ],
    "correctAnswer": 1,
    "explanationEn": "'Annihilation of Caste' is a seminal work by B.R. Ambedkar.",
    "explanationHi": "'एनिहिलेशन ऑफ कास्ट' बी.आर. अंबेडकर की एक मौलिक कृति है।"
  },
  {
    "id": "2025-2",
    "year": "2025",
    "questionEn": "The concept of 'Saptanga Theory' in Political Science is associated with:",
    "questionHi": "राजनीति विज्ञान में 'सप्तांग सिद्धांत' की अवधारणा किससे जुड़ी है?",
    "optionsEn": [
      "Hobbes, Locke, Rousseau",
      "Gabriel Almond",
      "Karl Marx",
      "Kautilya"
    ],
    "optionsHi": [
      "हॉब्स, लॉक, रूसो",
      "गेब्रियल अल्मंड",
      "कार्ल मार्क्स",
      "कौटिल्य"
    ],
    "correctAnswer": 3,
    "explanationEn": "Kautilya is widely known for developing the concept of Saptanga Theory.",
    "explanationHi": "कौटिल्य को सप्तांग सिद्धांत की अवधारणा विकसित करने के लिए व्यापक रूप से जाना जाता है।"
  },
  {
    "id": "2025-3",
    "year": "2025",
    "questionEn": "Which section of the Indian Constitution deals with 'President's Rule'?",
    "questionHi": "भारतीय संविधान का कौन सा भाग 'राष्ट्रपति शासन' से संबंधित है?",
    "optionsEn": [
      "Article 72",
      "Article 14",
      "Article 356",
      "Article 370"
    ],
    "optionsHi": [
      "अनुच्छेद 72",
      "अनुच्छेद 14",
      "अनुच्छेद 356",
      "अनुच्छेद 370"
    ],
    "correctAnswer": 2,
    "explanationEn": "Article 356 of the Indian Constitution explicitly covers President's Rule.",
    "explanationHi": "भारतीय संविधान का अनुच्छेद 356 स्पष्ट रूप से राष्ट्रपति शासन को कवर करता है।"
  },
  {
    "id": "2025-4",
    "year": "2025",
    "questionEn": "In which year did the 'Kyoto Protocol' take place?",
    "questionHi": "'क्योटो प्रोटोकॉल' किस वर्ष हुआ था?",
    "optionsEn": [
      "1997",
      "1974",
      "2001",
      "2014"
    ],
    "optionsHi": [
      "1997",
      "1974",
      "2001",
      "2014"
    ],
    "correctAnswer": 0,
    "explanationEn": "The Kyoto Protocol is a significant event that occurred in 1997.",
    "explanationHi": "क्योटो प्रोटोकॉल एक महत्वपूर्ण घटना है जो 1997 में हुई थी।"
  },
  {
    "id": "2025-5",
    "year": "2025",
    "questionEn": "Assertion (A): Gabriel Almond is heavily associated with the political theory of Structural Functionalism.\nReason (R): This theory fundamentally shaped modern academic discourse in this sub-field.",
    "questionHi": "अभिकथन (A): गेब्रियल अल्मंड का संरचनात्मक प्रकार्यवाद के राजनीतिक सिद्धांत से गहरा संबंध है।\nकारण (R): इस सिद्धांत ने इस उप-क्षेत्र में आधुनिक शैक्षणिक विमर्श को मौलिक रूप से आकार दिया।",
    "optionsEn": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "optionsHi": [
      "A और R दोनों सत्य हैं और R, A की सही व्याख्या है।",
      "A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं है।",
      "A सत्य है, लेकिन R असत्य है।",
      "A असत्य है, लेकिन R सत्य है।"
    ],
    "correctAnswer": 0,
    "explanationEn": "The assertion accurately reflects Gabriel Almond's contribution to Structural Functionalism.",
    "explanationHi": "यह अभिकथन संरचनात्मक प्रकार्यवाद में गेब्रियल अल्मंड के योगदान को सटीक रूप से दर्शाता है।"
  },
  {
    "id": "2025-6",
    "year": "2025",
    "questionEn": "Who is the author of the famous book 'Gitanjali'?",
    "questionHi": "प्रसिद्ध पुस्तक 'गीतांजलि' के लेखक कौन हैं?",
    "optionsEn": [
      "Almond and Verba",
      "Aristotle",
      "Keohane and Nye",
      "Rabindranath Tagore"
    ],
    "optionsHi": [
      "अल्मंड और वर्बा",
      "अरस्तू",
      "केओहेन और नाई",
      "रवींद्रनाथ टैगोर"
    ],
    "correctAnswer": 3,
    "explanationEn": "'Gitanjali' is a seminal work by Rabindranath Tagore.",
    "explanationHi": "'गीतांजलि' रवींद्रनाथ टैगोर की एक मौलिक कृति है।"
  },
  {
    "id": "2025-7",
    "year": "2025",
    "questionEn": "The concept of 'Integral Humanism' in Political Science is associated with:",
    "questionHi": "राजनीति विज्ञान में 'एकात्म मानववाद' की अवधारणा किससे जुड़ी है?",
    "optionsEn": [
      "Montesquieu",
      "Samuel P. Huntington",
      "Deendayal Upadhyaya",
      "Antonio Gramsci"
    ],
    "optionsHi": [
      "मोंटेस्क्यू",
      "सैमुअल पी. हंटिंगटन",
      "दीनदयाल उपाध्याय",
      "एंटोनियो ग्राम्शी"
    ],
    "correctAnswer": 2,
    "explanationEn": "Deendayal Upadhyaya is widely known for developing the concept of Integral Humanism.",
    "explanationHi": "दीनदयाल उपाध्याय को एकात्म मानववाद की अवधारणा विकसित करने के लिए व्यापक रूप से जाना जाता है।"
  },
  {
    "id": "2025-8",
    "year": "2025",
    "questionEn": "Which section of the Indian Constitution deals with 'Power of President to consult Supreme Court'?",
    "questionHi": "भारतीय संविधान का कौन सा भाग 'सर्वोच्च न्यायालय से परामर्श करने की राष्ट्रपति की शक्ति' से संबंधित है?",
    "optionsEn": [
      "Article 315",
      "Article 143",
      "Article 110",
      "Article 123"
    ],
    "optionsHi": [
      "अनुच्छेद 315",
      "अनुच्छेद 143",
      "अनुच्छेद 110",
      "अनुच्छेद 123"
    ],
    "correctAnswer": 1,
    "explanationEn": "Article 143 of the Indian Constitution explicitly covers Power of President to consult Supreme Court.",
    "explanationHi": "भारतीय संविधान का अनुच्छेद 143 स्पष्ट रूप से सर्वोच्च न्यायालय से परामर्श करने की राष्ट्रपति की शक्ति को कवर करता है।"
  },
  {
    "id": "2025-9",
    "year": "2025",
    "questionEn": "In which year did the 'Dissolution of the Soviet Union' take place?",
    "questionHi": "'सोवियत संघ का विघटन' किस वर्ष हुआ था?",
    "optionsEn": [
      "1991",
      "1985",
      "1974",
      "1972"
    ],
    "optionsHi": [
      "1991",
      "1985",
      "1974",
      "1972"
    ],
    "correctAnswer": 0,
    "explanationEn": "The Dissolution of the Soviet Union is a significant event that occurred in 1991.",
    "explanationHi": "सोवियत संघ का विघटन एक महत्वपूर्ण घटना है जो 1991 में हुई थी।"
  },
  {
    "id": "2025-10",
    "year": "2025",
    "questionEn": "Assertion (A): John Rawls is heavily associated with the political theory of Veil of Ignorance.\nReason (R): This theory fundamentally shaped modern academic discourse in this sub-field.",
    "questionHi": "अभिकथन (A): जॉन रॉल्स का अज्ञानता का पर्दा के राजनीतिक सिद्धांत से गहरा संबंध है।\nकारण (R): इस सिद्धांत ने इस उप-क्षेत्र में आधुनिक शैक्षणिक विमर्श को मौलिक रूप से आकार दिया।",
    "optionsEn": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "optionsHi": [
      "A और R दोनों सत्य हैं और R, A की सही व्याख्या है।",
      "A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं है।",
      "A सत्य है, लेकिन R असत्य है।",
      "A असत्य है, लेकिन R सत्य है।"
    ],
    "correctAnswer": 0,
    "explanationEn": "The assertion accurately reflects John Rawls's contribution to Veil of Ignorance.",
    "explanationHi": "यह अभिकथन अज्ञानता का पर्दा में जॉन रॉल्स के योगदान को सटीक रूप से दर्शाता है।"
  },
  {
    "id": "2025-11",
    "year": "2025",
    "questionEn": "Who is the author of the famous book 'Tragedy of Great Power Politics'?",
    "questionHi": "प्रसिद्ध पुस्तक 'ट्रेजेडी ऑफ ग्रेट पावर पॉलिटिक्स' के लेखक कौन हैं?",
    "optionsEn": [
      "John Mearsheimer",
      "Hobbes",
      "Jawaharlal Nehru",
      "Keohane and Nye"
    ],
    "optionsHi": [
      "जॉन मियर्सहाइमर",
      "हॉब्स",
      "जवाहरलाल नेहरू",
      "केओहेन और नाई"
    ],
    "correctAnswer": 0,
    "explanationEn": "'Tragedy of Great Power Politics' is a seminal work by John Mearsheimer.",
    "explanationHi": "'ट्रेजेडी ऑफ ग्रेट पावर पॉलिटिक्स' जॉन मियर्सहाइमर की एक मौलिक कृति है।"
  },
  {
    "id": "2025-12",
    "year": "2025",
    "questionEn": "The concept of 'Post-Colonialism' in Political Science is associated with:",
    "questionHi": "राजनीति विज्ञान में 'उत्तर-उपनिवेशवाद' की अवधारणा किससे जुड़ी है?",
    "optionsEn": [
      "John Rawls",
      "Deendayal Upadhyaya",
      "Edward Said",
      "Kautilya"
    ],
    "optionsHi": [
      "जॉन रॉल्स",
      "दीनदयाल उपाध्याय",
      "एडवर्ड सईद",
      "कौटिल्य"
    ],
    "correctAnswer": 2,
    "explanationEn": "Edward Said is widely known for developing the concept of Post-Colonialism.",
    "explanationHi": "एडवर्ड सईद को उत्तर-उपनिवेशवाद की अवधारणा विकसित करने के लिए व्यापक रूप से जाना जाता है।"
  },
  {
    "id": "2025-13",
    "year": "2025",
    "questionEn": "Which section of the Indian Constitution deals with 'Protection of life and personal liberty'?",
    "questionHi": "भारतीय संविधान का कौन सा भाग 'प्राण और दैहिक स्वतंत्रता का संरक्षण' से संबंधित है?",
    "optionsEn": [
      "Article 226",
      "Article 51A",
      "Article 21",
      "Article 324"
    ],
    "optionsHi": [
      "अनुच्छेद 226",
      "अनुच्छेद 51A",
      "अनुच्छेद 21",
      "अनुच्छेद 324"
    ],
    "correctAnswer": 2,
    "explanationEn": "Article 21 of the Indian Constitution explicitly covers Protection of life and personal liberty.",
    "explanationHi": "भारतीय संविधान का अनुच्छेद 21 स्पष्ट रूप से प्राण और दैहिक स्वतंत्रता का संरक्षण को कवर करता है।"
  },
  {
    "id": "2025-14",
    "year": "2025",
    "questionEn": "In which year did the 'Cuban Missile Crisis' take place?",
    "questionHi": "'क्यूबा मिसाइल संकट' किस वर्ष हुआ था?",
    "optionsEn": [
      "1962",
      "1885",
      "2015",
      "1985"
    ],
    "optionsHi": [
      "1962",
      "1885",
      "2015",
      "1985"
    ],
    "correctAnswer": 0,
    "explanationEn": "The Cuban Missile Crisis is a significant event that occurred in 1962.",
    "explanationHi": "क्यूबा मिसाइल संकट एक महत्वपूर्ण घटना है जो 1962 में हुई थी।"
  },
  {
    "id": "2025-15",
    "year": "2025",
    "questionEn": "Assertion (A): Jayaprakash Narayan is heavily associated with the political theory of Total Revolution.\nReason (R): This theory fundamentally shaped modern academic discourse in this sub-field.",
    "questionHi": "अभिकथन (A): जयप्रकाश नारायण का संपूर्ण क्रांति के राजनीतिक सिद्धांत से गहरा संबंध है।\nकारण (R): इस सिद्धांत ने इस उप-क्षेत्र में आधुनिक शैक्षणिक विमर्श को मौलिक रूप से आकार दिया।",
    "optionsEn": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "optionsHi": [
      "A और R दोनों सत्य हैं और R, A की सही व्याख्या है।",
      "A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं है।",
      "A सत्य है, लेकिन R असत्य है।",
      "A असत्य है, लेकिन R सत्य है।"
    ],
    "correctAnswer": 0,
    "explanationEn": "The assertion accurately reflects Jayaprakash Narayan's contribution to Total Revolution.",
    "explanationHi": "यह अभिकथन संपूर्ण क्रांति में जयप्रकाश नारायण के योगदान को सटीक रूप से दर्शाता है।"
  },
  {
    "id": "2025-16",
    "year": "2025",
    "questionEn": "Who is the author of the famous book 'The Wealth of Nations'?",
    "questionHi": "प्रसिद्ध पुस्तक 'द वेल्थ ऑफ नेशंस' के लेखक कौन हैं?",
    "optionsEn": [
      "Adam Smith",
      "Samuel P. Huntington",
      "Kautilya",
      "John Mearsheimer"
    ],
    "optionsHi": [
      "एडम स्मिथ",
      "सैमुअल पी. हंटिंगटन",
      "कौटिल्य",
      "जॉन मियर्सहाइमर"
    ],
    "correctAnswer": 0,
    "explanationEn": "'The Wealth of Nations' is a seminal work by Adam Smith.",
    "explanationHi": "'द वेल्थ ऑफ नेशंस' एडम स्मिथ की एक मौलिक कृति है।"
  },
  {
    "id": "2025-17",
    "year": "2025",
    "questionEn": "The concept of 'Complex Interdependence' in Political Science is associated with:",
    "questionHi": "राजनीति विज्ञान में 'जटिल अन्योन्याश्रयता' की अवधारणा किससे जुड़ी है?",
    "optionsEn": [
      "John Rawls",
      "Deendayal Upadhyaya",
      "Karl Marx",
      "Keohane & Nye"
    ],
    "optionsHi": [
      "जॉन रॉल्स",
      "दीनदयाल उपाध्याय",
      "कार्ल मार्क्स",
      "केओहेन और नाई"
    ],
    "correctAnswer": 3,
    "explanationEn": "Keohane & Nye is widely known for developing the concept of Complex Interdependence.",
    "explanationHi": "केओहेन और नाई को जटिल अन्योन्याश्रयता की अवधारणा विकसित करने के लिए व्यापक रूप से जाना जाता है।"
  },
  {
    "id": "2025-18",
    "year": "2025",
    "questionEn": "Which section of the Indian Constitution deals with 'All-India Services'?",
    "questionHi": "भारतीय संविधान का कौन सा भाग 'अखिल भारतीय सेवाएं' से संबंधित है?",
    "optionsEn": [
      "Article 312",
      "Article 143",
      "Article 368",
      "Article 148"
    ],
    "optionsHi": [
      "अनुच्छेद 312",
      "अनुच्छेद 143",
      "अनुच्छेद 368",
      "अनुच्छेद 148"
    ],
    "correctAnswer": 0,
    "explanationEn": "Article 312 of the Indian Constitution explicitly covers All-India Services.",
    "explanationHi": "भारतीय संविधान का अनुच्छेद 312 स्पष्ट रूप से अखिल भारतीय सेवाएं को कवर करता है।"
  },
  {
    "id": "2025-19",
    "year": "2025",
    "questionEn": "In which year did the 'Paris Climate Agreement' take place?",
    "questionHi": "'पेरिस जलवायु समझौता' किस वर्ष हुआ था?",
    "optionsEn": [
      "1857",
      "1954",
      "2015",
      "1974"
    ],
    "optionsHi": [
      "1857",
      "1954",
      "2015",
      "1974"
    ],
    "correctAnswer": 2,
    "explanationEn": "The Paris Climate Agreement is a significant event that occurred in 2015.",
    "explanationHi": "पेरिस जलवायु समझौता एक महत्वपूर्ण घटना है जो 2015 में हुई थी।"
  },
  {
    "id": "2025-20",
    "year": "2025",
    "questionEn": "Assertion (A): Karl Marx is heavily associated with the political theory of Surplus Value.\nReason (R): This theory fundamentally shaped modern academic discourse in this sub-field.",
    "questionHi": "अभिकथन (A): कार्ल मार्क्स का अतिरिक्त मूल्य के राजनीतिक सिद्धांत से गहरा संबंध है।\nकारण (R): इस सिद्धांत ने इस उप-क्षेत्र में आधुनिक शैक्षणिक विमर्श को मौलिक रूप से आकार दिया।",
    "optionsEn": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "optionsHi": [
      "A और R दोनों सत्य हैं और R, A की सही व्याख्या है।",
      "A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं है।",
      "A सत्य है, लेकिन R असत्य है।",
      "A असत्य है, लेकिन R सत्य है।"
    ],
    "correctAnswer": 0,
    "explanationEn": "The assertion accurately reflects Karl Marx's contribution to Surplus Value.",
    "explanationHi": "यह अभिकथन अतिरिक्त मूल्य में कार्ल मार्क्स के योगदान को सटीक रूप से दर्शाता है।"
  },
  {
    "id": "2025-21",
    "year": "2025",
    "questionEn": "Who is the author of the famous book 'The Second Sex'?",
    "questionHi": "प्रसिद्ध पुस्तक 'द सेकंड सेक्स' के लेखक कौन हैं?",
    "optionsEn": [
      "John Rawls",
      "Keohane and Nye",
      "Simone de Beauvoir",
      "Frantz Fanon"
    ],
    "optionsHi": [
      "जॉन रॉल्स",
      "केओहेन और नाई",
      "सिमोन डी बोउवा",
      "फ्रांज फैनन"
    ],
    "correctAnswer": 2,
    "explanationEn": "'The Second Sex' is a seminal work by Simone de Beauvoir.",
    "explanationHi": "'द सेकंड सेक्स' सिमोन डी बोउवा की एक मौलिक कृति है।"
  },
  {
    "id": "2025-22",
    "year": "2025",
    "questionEn": "The concept of 'Iron Law of Oligarchy' in Political Science is associated with:",
    "questionHi": "राजनीति विज्ञान में 'अल्पतंत्र का लौह नियम' की अवधारणा किससे जुड़ी है?",
    "optionsEn": [
      "Alfred Crosby",
      "Robert Michels",
      "Kautilya",
      "Joseph Nye"
    ],
    "optionsHi": [
      "अल्फ्रेड क्रॉस्बी",
      "रॉबर्ट मिशेल्स",
      "कौटिल्य",
      "जोसेफ नाई"
    ],
    "correctAnswer": 1,
    "explanationEn": "Robert Michels is widely known for developing the concept of Iron Law of Oligarchy.",
    "explanationHi": "रॉबर्ट मिशेल्स को अल्पतंत्र का लौह नियम की अवधारणा विकसित करने के लिए व्यापक रूप से जाना जाता है।"
  },
  {
    "id": "2025-23",
    "year": "2025",
    "questionEn": "Which section of the Indian Constitution deals with 'Public Service Commissions for the Union and for the States'?",
    "questionHi": "भारतीय संविधान का कौन सा भाग 'संघ और राज्यों के लिए लोक सेवा आयोग' से संबंधित है?",
    "optionsEn": [
      "Schedule 11",
      "Article 51A",
      "Article 262",
      "Article 315"
    ],
    "optionsHi": [
      "अनुसूची 11",
      "अनुच्छेद 51A",
      "अनुच्छेद 262",
      "अनुच्छेद 315"
    ],
    "correctAnswer": 3,
    "explanationEn": "Article 315 of the Indian Constitution explicitly covers Public Service Commissions for the Union and for the States.",
    "explanationHi": "भारतीय संविधान का अनुच्छेद 315 स्पष्ट रूप से संघ और राज्यों के लिए लोक सेवा आयोग को कवर करता है।"
  },
  {
    "id": "2025-24",
    "year": "2025",
    "questionEn": "In which year did the 'Quit India Movement' take place?",
    "questionHi": "'भारत छोड़ो आंदोलन' किस वर्ष हुआ था?",
    "optionsEn": [
      "2016",
      "1998",
      "1919",
      "1942"
    ],
    "optionsHi": [
      "2016",
      "1998",
      "1919",
      "1942"
    ],
    "correctAnswer": 3,
    "explanationEn": "The Quit India Movement is a significant event that occurred in 1942.",
    "explanationHi": "भारत छोड़ो आंदोलन एक महत्वपूर्ण घटना है जो 1942 में हुई थी।"
  },
  {
    "id": "2025-25",
    "year": "2025",
    "questionEn": "Assertion (A): Kimberlé Crenshaw is heavily associated with the political theory of Intersectionality.\nReason (R): This theory fundamentally shaped modern academic discourse in this sub-field.",
    "questionHi": "अभिकथन (A): किम्बर्ले क्रेंशॉ का प्रतिच्छेदन (Intersectionality) के राजनीतिक सिद्धांत से गहरा संबंध है।\nकारण (R): इस सिद्धांत ने इस उप-क्षेत्र में आधुनिक शैक्षणिक विमर्श को मौलिक रूप से आकार दिया।",
    "optionsEn": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "optionsHi": [
      "A और R दोनों सत्य हैं और R, A की सही व्याख्या है।",
      "A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं है।",
      "A सत्य है, लेकिन R असत्य है।",
      "A असत्य है, लेकिन R सत्य है।"
    ],
    "correctAnswer": 0,
    "explanationEn": "The assertion accurately reflects Kimberlé Crenshaw's contribution to Intersectionality.",
    "explanationHi": "यह अभिकथन प्रतिच्छेदन (Intersectionality) में किम्बर्ले क्रेंशॉ के योगदान को सटीक रूप से दर्शाता है।"
  },
  {
    "id": "2025-26",
    "year": "2025",
    "questionEn": "Who is the author of the famous book 'Arthashastra'?",
    "questionHi": "प्रसिद्ध पुस्तक 'अर्थशास्त्र' के लेखक कौन हैं?",
    "optionsEn": [
      "Almond and Verba",
      "Kautilya",
      "Rabindranath Tagore",
      "Robert Dahl"
    ],
    "optionsHi": [
      "अल्मंड और वर्बा",
      "कौटिल्य",
      "रवींद्रनाथ टैगोर",
      "रॉबर्ट डाहल"
    ],
    "correctAnswer": 1,
    "explanationEn": "'Arthashastra' is a seminal work by Kautilya.",
    "explanationHi": "'अर्थशास्त्र' कौटिल्य की एक मौलिक कृति है।"
  },
  {
    "id": "2025-27",
    "year": "2025",
    "questionEn": "The concept of 'Subaltern Studies' in Political Science is associated with:",
    "questionHi": "राजनीति विज्ञान में 'सबाल्टर्न स्टडीज' की अवधारणा किससे जुड़ी है?",
    "optionsEn": [
      "Francis Fukuyama",
      "Joseph Nye",
      "Ranajit Guha",
      "John Rawls"
    ],
    "optionsHi": [
      "फ्रांसिस फुकुयामा",
      "जोसेफ नाई",
      "रणजीत गुहा",
      "जॉन रॉल्स"
    ],
    "correctAnswer": 2,
    "explanationEn": "Ranajit Guha is widely known for developing the concept of Subaltern Studies.",
    "explanationHi": "रणजीत गुहा को सबाल्टर्न स्टडीज की अवधारणा विकसित करने के लिए व्यापक रूप से जाना जाता है।"
  },
  {
    "id": "2025-28",
    "year": "2025",
    "questionEn": "Which section of the Indian Constitution deals with 'Organization of village panchayats'?",
    "questionHi": "भारतीय संविधान का कौन सा भाग 'ग्राम पंचायतों का संगठन' से संबंधित है?",
    "optionsEn": [
      "Article 40",
      "Article 312",
      "Article 360",
      "Article 148"
    ],
    "optionsHi": [
      "अनुच्छेद 40",
      "अनुच्छेद 312",
      "अनुच्छेद 360",
      "अनुच्छेद 148"
    ],
    "correctAnswer": 0,
    "explanationEn": "Article 40 of the Indian Constitution explicitly covers Organization of village panchayats.",
    "explanationHi": "भारतीय संविधान का अनुच्छेद 40 स्पष्ट रूप से ग्राम पंचायतों का संगठन को कवर करता है।"
  },
  {
    "id": "2025-29",
    "year": "2025",
    "questionEn": "In which year did the 'Look East Policy' take place?",
    "questionHi": "'लुक ईस्ट नीति' किस वर्ष हुआ था?",
    "optionsEn": [
      "1991",
      "1992",
      "1971",
      "2001"
    ],
    "optionsHi": [
      "1991",
      "1992",
      "1971",
      "2001"
    ],
    "correctAnswer": 1,
    "explanationEn": "The Look East Policy is a significant event that occurred in 1992.",
    "explanationHi": "लुक ईस्ट नीति एक महत्वपूर्ण घटना है जो 1992 में हुई थी।"
  },
  {
    "id": "2025-30",
    "year": "2025",
    "questionEn": "Assertion (A): Sandra Harding is heavily associated with the political theory of Feminist Standpoint Theory.\nReason (R): This theory fundamentally shaped modern academic discourse in this sub-field.",
    "questionHi": "अभिकथन (A): सैंड्रा हार्डिंग का नारीवादी दृष्टिकोण सिद्धांत के राजनीतिक सिद्धांत से गहरा संबंध है।\nकारण (R): इस सिद्धांत ने इस उप-क्षेत्र में आधुनिक शैक्षणिक विमर्श को मौलिक रूप से आकार दिया।",
    "optionsEn": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "optionsHi": [
      "A और R दोनों सत्य हैं और R, A की सही व्याख्या है।",
      "A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं है।",
      "A सत्य है, लेकिन R असत्य है।",
      "A असत्य है, लेकिन R सत्य है।"
    ],
    "correctAnswer": 0,
    "explanationEn": "The assertion accurately reflects Sandra Harding's contribution to Feminist Standpoint Theory.",
    "explanationHi": "यह अभिकथन नारीवादी दृष्टिकोण सिद्धांत में सैंड्रा हार्डिंग के योगदान को सटीक रूप से दर्शाता है।"
  },
  {
    "id": "2025-31",
    "year": "2025",
    "questionEn": "Who is the author of the famous book 'Two Treatises of Government'?",
    "questionHi": "प्रसिद्ध पुस्तक 'टू ट्रीटीज़ ऑफ़ गवर्नमेंट' के लेखक कौन हैं?",
    "optionsEn": [
      "Adam Smith",
      "Keohane and Nye",
      "John Mearsheimer",
      "Locke"
    ],
    "optionsHi": [
      "एडम स्मिथ",
      "केओहेन और नाई",
      "जॉन मियर्सहाइमर",
      "लॉक"
    ],
    "correctAnswer": 3,
    "explanationEn": "'Two Treatises of Government' is a seminal work by Locke.",
    "explanationHi": "'टू ट्रीटीज़ ऑफ़ गवर्नमेंट' लॉक की एक मौलिक कृति है।"
  },
  {
    "id": "2025-32",
    "year": "2025",
    "questionEn": "The concept of 'Four Pillars of State' in Political Science is associated with:",
    "questionHi": "राजनीति विज्ञान में 'राज्य के चार स्तंभ' की अवधारणा किससे जुड़ी है?",
    "optionsEn": [
      "Keohane & Nye",
      "Ram Manohar Lohia",
      "Samuel P. Huntington",
      "John Rawls"
    ],
    "optionsHi": [
      "केओहेन और नाई",
      "राम मनोहर लोहिया",
      "सैमुअल पी. हंटिंगटन",
      "जॉन रॉल्स"
    ],
    "correctAnswer": 1,
    "explanationEn": "Ram Manohar Lohia is widely known for developing the concept of Four Pillars of State.",
    "explanationHi": "राम मनोहर लोहिया को राज्य के चार स्तंभ की अवधारणा विकसित करने के लिए व्यापक रूप से जाना जाता है।"
  },
  {
    "id": "2025-33",
    "year": "2025",
    "questionEn": "Which section of the Indian Constitution deals with 'Financial Emergency'?",
    "questionHi": "भारतीय संविधान का कौन सा भाग 'वित्तीय आपातकाल' से संबंधित है?",
    "optionsEn": [
      "Article 143",
      "Article 51A",
      "Schedule 7",
      "Article 360"
    ],
    "optionsHi": [
      "अनुच्छेद 143",
      "अनुच्छेद 51A",
      "अनुसूची 7",
      "अनुच्छेद 360"
    ],
    "correctAnswer": 3,
    "explanationEn": "Article 360 of the Indian Constitution explicitly covers Financial Emergency.",
    "explanationHi": "भारतीय संविधान का अनुच्छेद 360 स्पष्ट रूप से वित्तीय आपातकाल को कवर करता है।"
  },
  {
    "id": "2025-34",
    "year": "2025",
    "questionEn": "In which year did the 'Universal Declaration of Human Rights' take place?",
    "questionHi": "'मानवाधिकारों की सार्वभौम घोषणा' किस वर्ष हुआ था?",
    "optionsEn": [
      "1946",
      "1948",
      "1962",
      "1909"
    ],
    "optionsHi": [
      "1946",
      "1948",
      "1962",
      "1909"
    ],
    "correctAnswer": 1,
    "explanationEn": "The Universal Declaration of Human Rights is a significant event that occurred in 1948.",
    "explanationHi": "मानवाधिकारों की सार्वभौम घोषणा एक महत्वपूर्ण घटना है जो 1948 में हुई थी।"
  },
  {
    "id": "2025-35",
    "year": "2025",
    "questionEn": "Assertion (A): Jeremy Bentham is heavily associated with the political theory of Utilitarianism.\nReason (R): This theory fundamentally shaped modern academic discourse in this sub-field.",
    "questionHi": "अभिकथन (A): जेरेमी बेंथम का उपयोगितावाद के राजनीतिक सिद्धांत से गहरा संबंध है।\nकारण (R): इस सिद्धांत ने इस उप-क्षेत्र में आधुनिक शैक्षणिक विमर्श को मौलिक रूप से आकार दिया।",
    "optionsEn": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "optionsHi": [
      "A और R दोनों सत्य हैं और R, A की सही व्याख्या है।",
      "A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं है।",
      "A सत्य है, लेकिन R असत्य है।",
      "A असत्य है, लेकिन R सत्य है।"
    ],
    "correctAnswer": 0,
    "explanationEn": "The assertion accurately reflects Jeremy Bentham's contribution to Utilitarianism.",
    "explanationHi": "यह अभिकथन उपयोगितावाद में जेरेमी बेंथम के योगदान को सटीक रूप से दर्शाता है।"
  },
  {
    "id": "2025-36",
    "year": "2025",
    "questionEn": "Who is the author of the famous book 'Orientalism'?",
    "questionHi": "प्रसिद्ध पुस्तक 'ओरिएंटलिज़्म' के लेखक कौन हैं?",
    "optionsEn": [
      "Samuel P. Huntington",
      "Edward Said",
      "Hannah Arendt",
      "Joseph Schumpeter"
    ],
    "optionsHi": [
      "सैमुअल पी. हंटिंगटन",
      "एडवर्ड सईद",
      "हन्ना आरेंड्ट",
      "जोसेफ शंपीटर"
    ],
    "correctAnswer": 1,
    "explanationEn": "'Orientalism' is a seminal work by Edward Said.",
    "explanationHi": "'ओरिएंटलिज़्म' एडवर्ड सईद की एक मौलिक कृति है।"
  },
  {
    "id": "2025-37",
    "year": "2025",
    "questionEn": "The concept of 'Golden Mean' in Political Science is associated with:",
    "questionHi": "राजनीति विज्ञान में 'स्वर्णिम मध्य (Golden Mean)' की अवधारणा किससे जुड़ी है?",
    "optionsEn": [
      "Francis Fukuyama",
      "Mahatma Gandhi",
      "Kautilya",
      "Aristotle"
    ],
    "optionsHi": [
      "फ्रांसिस फुकुयामा",
      "महात्मा गांधी",
      "कौटिल्य",
      "अरस्तू"
    ],
    "correctAnswer": 3,
    "explanationEn": "Aristotle is widely known for developing the concept of Golden Mean.",
    "explanationHi": "अरस्तू को स्वर्णिम मध्य (Golden Mean) की अवधारणा विकसित करने के लिए व्यापक रूप से जाना जाता है।"
  },
  {
    "id": "2025-38",
    "year": "2025",
    "questionEn": "Which section of the Indian Constitution deals with 'Inter-State Council'?",
    "questionHi": "भारतीय संविधान का कौन सा भाग 'अंतर-राज्यीय परिषद' से संबंधित है?",
    "optionsEn": [
      "Article 110",
      "Article 263",
      "Article 51",
      "Article 169"
    ],
    "optionsHi": [
      "अनुच्छेद 110",
      "अनुच्छेद 263",
      "अनुच्छेद 51",
      "अनुच्छेद 169"
    ],
    "correctAnswer": 1,
    "explanationEn": "Article 263 of the Indian Constitution explicitly covers Inter-State Council.",
    "explanationHi": "भारतीय संविधान का अनुच्छेद 263 स्पष्ट रूप से अंतर-राज्यीय परिषद को कवर करता है।"
  },
  {
    "id": "2025-39",
    "year": "2025",
    "questionEn": "In which year did the 'Shimla Agreement' take place?",
    "questionHi": "'शिमला समझौता' किस वर्ष हुआ था?",
    "optionsEn": [
      "1998",
      "1972",
      "1909",
      "1999"
    ],
    "optionsHi": [
      "1998",
      "1972",
      "1909",
      "1999"
    ],
    "correctAnswer": 1,
    "explanationEn": "The Shimla Agreement is a significant event that occurred in 1972.",
    "explanationHi": "शिमला समझौता एक महत्वपूर्ण घटना है जो 1972 में हुई थी।"
  },
  {
    "id": "2025-40",
    "year": "2025",
    "questionEn": "Assertion (A): Joseph Nye is heavily associated with the political theory of Soft Power.\nReason (R): This theory fundamentally shaped modern academic discourse in this sub-field.",
    "questionHi": "अभिकथन (A): जोसेफ नाई का सॉफ्ट पावर के राजनीतिक सिद्धांत से गहरा संबंध है।\nकारण (R): इस सिद्धांत ने इस उप-क्षेत्र में आधुनिक शैक्षणिक विमर्श को मौलिक रूप से आकार दिया।",
    "optionsEn": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "optionsHi": [
      "A और R दोनों सत्य हैं और R, A की सही व्याख्या है।",
      "A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं है।",
      "A सत्य है, लेकिन R असत्य है।",
      "A असत्य है, लेकिन R सत्य है।"
    ],
    "correctAnswer": 0,
    "explanationEn": "The assertion accurately reflects Joseph Nye's contribution to Soft Power.",
    "explanationHi": "यह अभिकथन सॉफ्ट पावर में जोसेफ नाई के योगदान को सटीक रूप से दर्शाता है।"
  },
  {
    "id": "2025-41",
    "year": "2025",
    "questionEn": "Who is the author of the famous book 'Theory of International Politics'?",
    "questionHi": "प्रसिद्ध पुस्तक 'थ्योरी ऑफ इंटरनेशनल पॉलिटिक्स' के लेखक कौन हैं?",
    "optionsEn": [
      "Kenneth Waltz",
      "Joseph Schumpeter",
      "Machiavelli",
      "Simone de Beauvoir"
    ],
    "optionsHi": [
      "केनेथ वाल्ट्ज",
      "जोसेफ शंपीटर",
      "मैकियावेली",
      "सिमोन डी बोउवा"
    ],
    "correctAnswer": 0,
    "explanationEn": "'Theory of International Politics' is a seminal work by Kenneth Waltz.",
    "explanationHi": "'थ्योरी ऑफ इंटरनेशनल पॉलिटिक्स' केनेथ वाल्ट्ज की एक मौलिक कृति है।"
  },
  {
    "id": "2025-42",
    "year": "2025",
    "questionEn": "The concept of 'Democratic Peace Theory' in Political Science is associated with:",
    "questionHi": "राजनीति विज्ञान में 'लोकतांत्रिक शांति सिद्धांत' की अवधारणा किससे जुड़ी है?",
    "optionsEn": [
      "Montesquieu",
      "Kimberlé Crenshaw",
      "Kautilya",
      "Michael Doyle"
    ],
    "optionsHi": [
      "मोंटेस्क्यू",
      "किम्बर्ले क्रेंशॉ",
      "कौटिल्य",
      "माइकल डॉयल"
    ],
    "correctAnswer": 3,
    "explanationEn": "Michael Doyle is widely known for developing the concept of Democratic Peace Theory.",
    "explanationHi": "माइकल डॉयल को लोकतांत्रिक शांति सिद्धांत की अवधारणा विकसित करने के लिए व्यापक रूप से जाना जाता है।"
  },
  {
    "id": "2025-43",
    "year": "2025",
    "questionEn": "Which section of the Indian Constitution deals with 'Finance Commission'?",
    "questionHi": "भारतीय संविधान का कौन सा भाग 'वित्त आयोग' से संबंधित है?",
    "optionsEn": [
      "Article 280",
      "Article 300A",
      "Article 72",
      "Article 368"
    ],
    "optionsHi": [
      "अनुच्छेद 280",
      "अनुच्छेद 300A",
      "अनुच्छेद 72",
      "अनुच्छेद 368"
    ],
    "correctAnswer": 0,
    "explanationEn": "Article 280 of the Indian Constitution explicitly covers Finance Commission.",
    "explanationHi": "भारतीय संविधान का अनुच्छेद 280 स्पष्ट रूप से वित्त आयोग को कवर करता है।"
  },
  {
    "id": "2025-44",
    "year": "2025",
    "questionEn": "In which year did the 'SAARC Formation' take place?",
    "questionHi": "'दक्षेस (SAARC) का गठन' किस वर्ष हुआ था?",
    "optionsEn": [
      "1971",
      "1974",
      "1997",
      "1985"
    ],
    "optionsHi": [
      "1971",
      "1974",
      "1997",
      "1985"
    ],
    "correctAnswer": 3,
    "explanationEn": "The SAARC Formation is a significant event that occurred in 1985.",
    "explanationHi": "दक्षेस (SAARC) का गठन एक महत्वपूर्ण घटना है जो 1985 में हुई थी।"
  },
  {
    "id": "2025-45",
    "year": "2025",
    "questionEn": "Assertion (A): John Rawls is heavily associated with the political theory of Overlapping Consensus.\nReason (R): This theory fundamentally shaped modern academic discourse in this sub-field.",
    "questionHi": "अभिकथन (A): जॉन रॉल्स का अतिव्यापी आम सहमति के राजनीतिक सिद्धांत से गहरा संबंध है।\nकारण (R): इस सिद्धांत ने इस उप-क्षेत्र में आधुनिक शैक्षणिक विमर्श को मौलिक रूप से आकार दिया।",
    "optionsEn": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "optionsHi": [
      "A और R दोनों सत्य हैं और R, A की सही व्याख्या है।",
      "A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं है।",
      "A सत्य है, लेकिन R असत्य है।",
      "A असत्य है, लेकिन R सत्य है।"
    ],
    "correctAnswer": 0,
    "explanationEn": "The assertion accurately reflects John Rawls's contribution to Overlapping Consensus.",
    "explanationHi": "यह अभिकथन अतिव्यापी आम सहमति में जॉन रॉल्स के योगदान को सटीक रूप से दर्शाता है।"
  },
  {
    "id": "2025-46",
    "year": "2025",
    "questionEn": "Who is the author of the famous book 'Capitalism, Socialism and Democracy'?",
    "questionHi": "प्रसिद्ध पुस्तक 'कैपिटलिज़्म, सोशलिज़्म एंड डेमोक्रेसी' के लेखक कौन हैं?",
    "optionsEn": [
      "Joseph Schumpeter",
      "Locke",
      "Rabindranath Tagore",
      "Robert Dahl"
    ],
    "optionsHi": [
      "जोसेफ शंपीटर",
      "लॉक",
      "रवींद्रनाथ टैगोर",
      "रॉबर्ट डाहल"
    ],
    "correctAnswer": 0,
    "explanationEn": "'Capitalism, Socialism and Democracy' is a seminal work by Joseph Schumpeter.",
    "explanationHi": "'कैपिटलिज़्म, सोशलिज़्म एंड डेमोक्रेसी' जोसेफ शंपीटर की एक मौलिक कृति है।"
  },
  {
    "id": "2025-47",
    "year": "2025",
    "questionEn": "The concept of 'State of Nature' in Political Science is associated with:",
    "questionHi": "राजनीति विज्ञान में 'प्राकृतिक अवस्था' की अवधारणा किससे जुड़ी है?",
    "optionsEn": [
      "Antonio Gramsci",
      "Hobbes, Locke, Rousseau",
      "Joseph Nye",
      "Mahatma Gandhi"
    ],
    "optionsHi": [
      "एंटोनियो ग्राम्शी",
      "हॉब्स, लॉक, रूसो",
      "जोसेफ नाई",
      "महात्मा गांधी"
    ],
    "correctAnswer": 1,
    "explanationEn": "Hobbes, Locke, Rousseau is widely known for developing the concept of State of Nature.",
    "explanationHi": "हॉब्स, लॉक, रूसो को प्राकृतिक अवस्था की अवधारणा विकसित करने के लिए व्यापक रूप से जाना जाता है।"
  },
  {
    "id": "2025-48",
    "year": "2025",
    "questionEn": "Which section of the Indian Constitution deals with 'Abolition of Untouchability'?",
    "questionHi": "भारतीय संविधान का कौन सा भाग 'अस्पृश्यता का अंत' से संबंधित है?",
    "optionsEn": [
      "Article 14",
      "Article 17",
      "Article 72",
      "Article 360"
    ],
    "optionsHi": [
      "अनुच्छेद 14",
      "अनुच्छेद 17",
      "अनुच्छेद 72",
      "अनुच्छेद 360"
    ],
    "correctAnswer": 1,
    "explanationEn": "Article 17 of the Indian Constitution explicitly covers Abolition of Untouchability.",
    "explanationHi": "भारतीय संविधान का अनुच्छेद 17 स्पष्ट रूप से अस्पृश्यता का अंत को कवर करता है।"
  },
  {
    "id": "2025-49",
    "year": "2025",
    "questionEn": "In which year did the 'Brexit Referendum' take place?",
    "questionHi": "'ब्रेक्सिट जनमत संग्रह' किस वर्ष हुआ था?",
    "optionsEn": [
      "1935",
      "1972",
      "2008",
      "2016"
    ],
    "optionsHi": [
      "1935",
      "1972",
      "2008",
      "2016"
    ],
    "correctAnswer": 3,
    "explanationEn": "The Brexit Referendum is a significant event that occurred in 2016.",
    "explanationHi": "ब्रेक्सिट जनमत संग्रह एक महत्वपूर्ण घटना है जो 2016 में हुई थी।"
  },
  {
    "id": "2025-50",
    "year": "2025",
    "questionEn": "Assertion (A): Kautilya is heavily associated with the political theory of Mandala Theory.\nReason (R): This theory fundamentally shaped modern academic discourse in this sub-field.",
    "questionHi": "अभिकथन (A): कौटिल्य का मंडल सिद्धांत के राजनीतिक सिद्धांत से गहरा संबंध है।\nकारण (R): इस सिद्धांत ने इस उप-क्षेत्र में आधुनिक शैक्षणिक विमर्श को मौलिक रूप से आकार दिया।",
    "optionsEn": [
      "Both A and R are true and R is the correct explanation of A.",
      "Both A and R are true but R is NOT the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    "optionsHi": [
      "A और R दोनों सत्य हैं और R, A की सही व्याख्या है।",
      "A और R दोनों सत्य हैं लेकिन R, A की सही व्याख्या नहीं है।",
      "A सत्य है, लेकिन R असत्य है।",
      "A असत्य है, लेकिन R सत्य है।"
    ],
    "correctAnswer": 0,
    "explanationEn": "The assertion accurately reflects Kautilya's contribution to Mandala Theory.",
    "explanationHi": "यह अभिकथन मंडल सिद्धांत में कौटिल्य के योगदान को सटीक रूप से दर्शाता है।"
  }
];