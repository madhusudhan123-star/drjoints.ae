import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Globe } from 'lucide-react';
import translations from '../utils/translations';
import languages from '../utils/languages';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination, Autoplay } from 'swiper/modules'; // Import Autoplay module
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

// Import Swiper styles

// SVG Imports
import logo from '../assets/logo.svg';
import inst from '../assets/instagram.png';
import face from '../assets/facebook.png';
import drop from '../assets/dropdown.svg';
import menuIcon from '../assets/menu-icon.svg';
import closeIcon from '../assets/close-icon.svg';

const Navbar = ({ currentLang, onLanguageChange }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const t = translations[currentLang] || translations.ENGLISH;

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            if (window.innerWidth > 768) {
                setIsMenuOpen(false);
                setIsLangMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (isLangMenuOpen) setIsLangMenuOpen(false);
    };

    // New function to close menu when a link is clicked
    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    // Desktop Navigation
    const renderDesktopNavbar = () => (
        <nav className="bg-[#fffff]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-5">
                <div className="flex justify-between items-center ">
                    {/* Instagram Logo */}
                    <div className="flex items-center flex-col gap-3">
                        <img src={inst} alt="Instagram Logo" className="w-5" />
                        <img src={face} alt="Instagram Logo" className="w-5" />
                    </div>
                    {/* Logo and Navigation Links */}
                    <div className={`relative should`}>
                        <div className="flex flex-col items-center gap-10 mb-10  ">
                            <Link to="/">
                                <Swiper
                                    effect={'cube'}
                                    grabCursor={true}
                                    cubeEffect={{
                                        shadow: true,
                                        slideShadows: true,
                                        shadowOffset: 20,
                                        shadowScale: 0.94,
                                    }}
                                    autoplay={{
                                        delay: 1000,
                                        disableOnInteraction: false,
                                    }}
                                    modules={[EffectCube, Autoplay]} // Remove Pagination module
                                    className="w-[100px] h-[100px]"
                                >
                                    <SwiperSlide>
                                        <img
                                            src={logo}
                                            alt="Logo 1"
                                            className="block w-full h-full object-fit"
                                        />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img
                                            src={logo}
                                            alt="Logo 2"
                                            className="block w-full h-full object-fit"
                                        />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img
                                            src={logo}
                                            alt="Logo 3"
                                            className="block w-full h-full object-fit"
                                        />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img
                                            src={logo}
                                            alt="Logo 4"
                                            className="block w-full h-full object-fit"
                                        />
                                    </SwiperSlide>
                                </Swiper>
                                {/* <img src={logo} alt="Dr. Joints Logo" /> */}
                            </Link>

                        </div>
                        <div className="flex space-x-6 font-medium">
                            {t.navLinks.map((link) => (
                                <Link
                                    key={link.id}
                                    to={link.path}
                                    className="text-gray-800 hover:text-blue-600 transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <select
                        value={currentLang}
                        onChange={(e) => onLanguageChange(e.target.value)}
                        className=" border rounded shadow-xl text-lg px-5 py-2"
                    >
                        {languages.map((lang) => (
                            <option key={lang.code} value={lang.code}>
                                {lang.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </nav >
    );

    // Mobile Menu
    const renderMobileMenu = () => (
        <div className={`fixed inset-0 bg-white z-50 ${isMenuOpen ? "block" : "hidden"}`}>
            <div className="flex flex-col h-full">
                <div className="flex justify-between items-center p-4 border-b">
                    <Link to="/" className="mx-auto" onClick={handleLinkClick}>
                        <img src={logo} alt="Dr. Joints Logo" className="h-10" />
                    </Link>
                    <button onClick={toggleMenu} className="absolute right-4">
                        <img src={closeIcon} alt="Close Menu" className="h-6 w-6" />
                    </button>
                </div>
                <nav className="flex flex-col flex-grow justify-center items-center space-y-4 p-4">
                    {t.navLinks.map((link) => (
                        <Link
                            key={link.id}
                            to={link.path}
                            className="text-gray-800 hover:text-blue-600 transition-colors"
                            onClick={handleLinkClick} // Add click handler to close menu
                        >
                            {link.label}
                        </Link>
                    ))}

                    {/* Mobile Language Selector */}
                    <div className="px-3 py-2 w-full">
                        <select
                            value={currentLang}
                            onChange={(e) => {
                                onLanguageChange(e.target.value);
                                // Optional: close menu after language change
                                handleLinkClick();
                            }}
                            className="p-2 border rounded w-full"
                        >
                            {languages.map((lang) => (
                                <option key={lang.code} value={lang.code}>
                                    {lang.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </nav>
            </div>
        </div>
    );

    // Mobile Menu Trigger
    const renderMobileMenuTrigger = () => (
        <button
            onClick={toggleMenu}
            className="fixed top-4 left-4 z-40 bg-white rounded-full p-2 shadow-lg"
        >
            <img src={isMenuOpen ? closeIcon : menuIcon} alt="Menu Toggle" className="h-6 w-6" />
        </button>
    );

    return (
        <>
            {isMobile ? (
                <>
                    {renderMobileMenuTrigger()}
                    {renderMobileMenu()}
                </>
            ) : (
                renderDesktopNavbar()
            )}
        </>
    );
};

export default Navbar;


// import React from 'react';


// export default function App() {
//   return (
//     <div className="h-screen bg-gray-200 flex items-center justify-center">
//       <Swiper
//         effect={'cube'}
//         grabCursor={true}
//         cubeEffect={{
//           shadow: true,
//           slideShadows: true,
//           shadowOffset: 20,
//           shadowScale: 0.94,
//         }}
//         pagination={true}
//         modules={[EffectCube, Pagination]}
//         className="w-[300px] h-[300px]"
//       >
//         <SwiperSlide>
//           <img
//             src="https://swiperjs.com/demos/images/nature-1.jpg"
//             alt="Nature 1"
//             className="block w-full h-full object-cover"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img
//             src="https://swiperjs.com/demos/images/nature-2.jpg"
//             alt="Nature 2"
//             className="block w-full h-full object-cover"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img
//             src="https://swiperjs.com/demos/images/nature-3.jpg"
//             alt="Nature 3"
//             className="block w-full h-full object-cover"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img
//             src="https://swiperjs.com/demos/images/nature-4.jpg"
//             alt="Nature 4"
//             className="block w-full h-full object-cover"
//           />
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// }
