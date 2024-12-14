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
import Carousel from './page/Carousel';
import ShippingPolicyPage from './page/Shipping';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

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
      <div className={`app overflow-hidden ${currentLang === 'ar' ? 'rtl' : 'ltr'}`}>
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
          <Route path='/ship' element={<ShippingPolicyPage currentLang={currentLang} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;