// import './App.css';
// import Home from './page/Home';
// import Navbar from './components/Navbar';
// import { BrowserRouter, Routes, Route } from 'react-router';
// import { useState, useEffect } from 'react';
// import Product from './page/Product';
// import About from './page/About';
// import ContactPage from './page/Contact';

// const languages = [
//   { code: 'ar', name: 'العربية' },
//   { code: 'ENGLISH', name: 'ENGLISH' },
//   { code: 'hi', name: "HINDI" },
// ];

// const translations = {
//   ENGLISH: {
//     navbar: {
//       home: "Shop",
//     },
//     home: {
//       title: "Best Pain Relief Oil <br/> For Muscles",

//     }
//   },
//   ar: {
//     navbar: {
//       home: "الصفحة الرئيسية",
//     },
//   },
//   hi: {
//     navbar: {
//       home: "मुखपृष्ठ",
//     },
//   },
// };
// function App() {
//   const [currentLang, setCurrentLang] = useState(() => {
//     return localStorage.getItem('preferredLanguage') || 'ENGLISH';
//   });

//   const handleLanguageChange = (langCode) => {
//     setCurrentLang(langCode);
//     localStorage.setItem('preferredLanguage', langCode);
//   };

//   // Effect to ensure language persists on page reload
//   useEffect(() => {
//     // Update localStorage whenever language changes
//     localStorage.setItem('preferredLanguage', currentLang);

//     // Optional: Set document dir attribute for RTL support
//     document.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

//     // Optional: Set lang attribute on html element
//     document.documentElement.lang = currentLang;
//   }, [currentLang]);

//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Navbar
//           currentLang={currentLang}
//           setCurrentLang={setCurrentLang}
//           translations={translations}
//           languages={languages}
//         />
//         <Routes>
//           <Route path="/" element={<Home currentLang={currentLang} setCurrentLang={setCurrentLang} translations={translations} languages={languages} />} />
//           <Route path="/product" element={<Product />} />
//           <Route path='/about' element={<About />} />
//           <Route path='/contact' element={<ContactPage />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }
// export default App;


// // 9848123003

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './page/Home';
// import About from './page/About';
// import ContactPage from './page/Contact';
// import Product from './page/Product';
// import translations from './utils/translations';
// import languages from './utils/languages';

// function App() {
//   // const [currentLang, setCurrentLang] = useState('en');
//   // Initialize language from localStorage or default to 'en'
//   const [currentLang, setCurrentLang] = useState(() => {
//     return localStorage.getItem('preferredLanguage') || 'ar';
//   });

//   // Custom language setter that also updates localStorage
//   const handleLanguageChange = (langCode) => {
//     setCurrentLang(langCode);
//     localStorage.setItem('preferredLanguage', langCode);
//   };

//   // Effect to ensure language persists on page reload
//   useEffect(() => {
//     // Update localStorage whenever language changes
//     localStorage.setItem('preferredLanguage', currentLang);

//     // // Optional: Set document dir attribute for RTL support
//     document.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

//     // Optional: Set lang attribute on html element
//     document.documentElement.lang = currentLang;
//   }, [currentLang]);

//   return (
//     <BrowserRouter>
//       <Navbar currentLang={currentLang} setCurrentLang={setCurrentLang} translations={translations} languages={languages} />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/product" element={<Product />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<ContactPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './page/Home';
import About from './page/About';
import ContactPage from './page/Contact';
import Product from './page/Product';
import translations from './utils/translations';
import Checkout from './page/Checkout';
import PrivacyPolicyPage from './page/PrivacyPolicyPage';
import ReturnPolicyPage from './page/ReturnPolicyPage';
import TermsConditionsPage from './page/TermsConditionsPage';

function App() {
  // Ensure the language exists in translations, fallback to 'ENGLISH'
  const getValidLanguage = (lang) => {
    return translations[lang] ? lang : 'ENGLISH';
  };

  // Initialize language from localStorage or default to 'ENGLISH'
  const [currentLang, setCurrentLang] = useState(() => {
    const storedLang = localStorage.getItem('preferredLanguage');
    return getValidLanguage(storedLang || 'ENGLISH');
  });

  // Custom language setter that also updates localStorage
  const handleLanguageChange = (langCode) => {
    const validLang = getValidLanguage(langCode);
    setCurrentLang(validLang);
    localStorage.setItem('preferredLanguage', validLang);
  };

  // Effect to ensure language persists on page reload
  useEffect(() => {
    // Update localStorage whenever language changes
    localStorage.setItem('preferredLanguage', currentLang);

    // Optional: Set document dir attribute for RTL support
    document.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

    // Optional: Set lang attribute on html element
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  return (
    <BrowserRouter>
      <div className={`app ${currentLang === 'ar' ? 'rtl' : 'ltr'}`}>
        <Navbar
          currentLang={currentLang}
          onLanguageChange={handleLanguageChange}
        />
        <Routes>
          <Route path="/" element={<Home currentLang={currentLang} />} />
          <Route path="/about" element={<About currentLang={currentLang} />} />
          <Route path="/contact" element={<ContactPage currentLang={currentLang} />} />
          <Route path="/product" element={<Product currentLang={currentLang} />} />
          <Route path='/checkout' element={<Checkout currentLang={currentLang} />} />
          <Route path='/private' element={<PrivacyPolicyPage currentLang={currentLang} />} />
          <Route path='/return' element={<ReturnPolicyPage currentLang={currentLang} />} />
          <Route path='/terms' element={<TermsConditionsPage currentLang={currentLang} />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;