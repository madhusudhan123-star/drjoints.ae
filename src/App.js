import './App.css';
import Home from './page/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router';
import { useState, useEffect } from 'react';
import Product from './page/Product';
import About from './page/About';
import ContactPage from './page/Contact';

const languages = [
  { code: 'ar', name: 'العربية' },
  { code: 'ENGLISH', name: 'ENGLISH' },
  { code: 'hi', name: "HINDI" },
];

const translations = {
  ENGLISH: {
    navbar: {
      home: "Shop",
    },
  },
  ar: {
    navbar: {
      home: "الصفحة الرئيسية",
    },
  },
  hi: {
    navbar: {
      home: "मुखपृष्ठ",
    },
  },
};
function App() {
  const [currentLang, setCurrentLang] = useState(() => {
    return localStorage.getItem('preferredLanguage') || 'ENGLISH';
  });

  const handleLanguageChange = (langCode) => {
    setCurrentLang(langCode);
    localStorage.setItem('preferredLanguage', langCode);
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
    <div className="App">
      <BrowserRouter>
        <Navbar
          currentLang={currentLang}
          setCurrentLang={setCurrentLang}
          translations={translations}
          languages={languages}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;


// 9848123003