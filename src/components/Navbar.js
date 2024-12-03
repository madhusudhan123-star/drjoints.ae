// import React, { useState } from "react";
// import logo from '../assets/logo.svg';
// import inst from '../assets/instagram.svg';
// import drop from '../assets/dropdown.svg';



// const Navbar = ({ currentLang, setCurrentLang, translations, languages }) => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//         if (isLangMenuOpen) setIsLangMenuOpen(false);
//     };

//     const toggleLangMenu = () => {
//         setIsLangMenuOpen(!isLangMenuOpen);
//     };

//     const handleLangSelect = (langCode) => {
//         setCurrentLang(langCode);
//         setIsLangMenuOpen(false);
//         setIsMenuOpen(false);
//     };

//     // Use fallback translations if currentLang is invalid
//     const currentTranslations =
//         translations[currentLang] || translations['ENGLISH'];

//     return (
//         <div className="flex justify-between items-center bg-gradient-to-br from-[#B1F3FC] to-[#B1F3FC] px-4 py-4">
//             <div className="flex items-center space-x-4">
//                 <img src={inst} alt="Dr. Joints Logo" className="h-10" />
//             </div>
//             <div className="flex flex-col gap-10 relative left-10">
//                 <a href="/">
//                     <img src={logo} alt="Dr. Joints Logo" className="" />
//                 </a>
//                 <div className="flex space-x-6 font-medium">
//                     <a href="/product" className="text-gray-700 hover:text-gray-900">
//                         {currentTranslations.navbar.home}
//                     </a>
//                     <a href="/about" className="text-gray-700 hover:text-gray-900">
//                         About
//                     </a>
//                     <a href="/contact" className="text-gray-700 hover:text-gray-900">
//                         Contact
//                     </a>
//                 </div>
//             </div>
//             <div className="relative inline-block shadow-xl rounded bg-[#d9d9d975]">
//                 <button
//                     className=" text-gray-800 font-medium py-2 px-4 rounded focus:outline-none flex gap-5"
//                     onClick={toggleLangMenu}
//                 >
//                     {currentLang}
//                     <img
//                         src={drop}
//                         className={`${isLangMenuOpen ? "transition ease-in-out delay-50 duration-500 rotate-180" : " transition ease-in-out delay-150 duration-300  rotate-0"}`}
//                         alt="Dropdown Icon"
//                     />
//                 </button>

//                 {isLangMenuOpen && (
//                     <div className="absolute w-full  border bg-[#d9d9d975]  shadow-lg rounded w-32">
//                         {languages.map((lang) => (
//                             <button
//                                 key={lang.code}
//                                 className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                                 onClick={() => handleLangSelect(lang.code)}
//                             >
//                                 {lang.name}
//                             </button>
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Navbar;


import React, { useState, useEffect } from "react";
import { Link } from "react-router";

// SVG Imports (ensure these are available in your project)
import logo from '../assets/logo.svg';
import inst from '../assets/instagram.svg';
import drop from '../assets/dropdown.svg';
import menuIcon from '../assets/menu-icon.svg';
import closeIcon from '../assets/close-icon.svg';

// Dynamic navigation configuration
const NAV_LINKS = [
    {
        id: 'SHOP',
        path: '/product',
        translationKey: 'SHOP'
    },
    {
        id: 'ABOUT',
        path: '/about',
        translationKey: 'About'
    },
    {
        id: 'CONTACT',
        path: '/contact',
        translationKey: 'contact'
    }
];

const Navbar = ({
    currentLang,
    setCurrentLang,
    translations,
    languages
}) => {
    // State management
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    // Responsive handling
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            // Close menus on larger screens
            if (window.innerWidth > 768) {
                setIsMenuOpen(false);
                setIsLangMenuOpen(false);
            }
        };

        // Add resize listener
        window.addEventListener('resize', handleResize);

        // Initial check
        handleResize();

        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Toggle mobile menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        // Close language menu when mobile menu is opened
        if (isLangMenuOpen) setIsLangMenuOpen(false);
    };

    // Toggle language selection menu
    const toggleLangMenu = () => {
        setIsLangMenuOpen(!isLangMenuOpen);
        // Close mobile menu when language menu is opened
        if (isMenuOpen) setIsMenuOpen(false);
    };

    // Language selection handler
    const handleLangSelect = (langCode) => {
        setCurrentLang(langCode);
        setIsLangMenuOpen(false);
        setIsMenuOpen(false);
    };

    // Use fallback translations if currentLang is invalid
    const currentTranslations = translations[currentLang] || translations['ENGLISH'];

    // Render navigation links
    const renderNavLinks = () => (
        <>
            {NAV_LINKS.map((link) => (
                <Link
                    key={link.id}
                    to={link.path}
                    className={`
                        text-gray-700 hover:text-gray-900 
                        ${isMobile ? 'block py-2 text-center' : ''}
                    `}
                >
                    {currentTranslations.navbar[link.translationKey] || link.id}
                </Link>
            ))}
        </>
    );

    // Mobile menu
    const renderMobileMenu = () => (
        <div className={`
            fixed inset-0 bg-white z-50 
            ${isMenuOpen ? 'block' : 'hidden'}
        `}>
            <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex justify-between items-center p-4 border-b">
                    <Link to="/" className="mx-auto">
                        <img src={logo} alt="Dr. Joints Logo" className="h-10" />
                    </Link>
                    <button onClick={toggleMenu} className="absolute right-4">
                        <img src={closeIcon} alt="Close Menu" className="h-6 w-6" />
                    </button>

                </div>

                {/* Mobile Navigation Links */}
                <nav className="flex flex-col flex-grow justify-center items-center space-y-4 p-4">
                    {renderNavLinks()}
                </nav>

                {/* Mobile Language Selector */}
            </div>
        </div>
    );

    // Desktop Navbar
    const renderDesktopNavbar = () => (
        <div className="flex justify-between items-center bg-gradient-to-br from-[#B1F3FC] to-[#B1F3FC] px-4 py-4">
            <div className="flex items-center space-x-4">
                <img src={inst} alt="Dr. Joints Logo" className="h-10" />
            </div>
            <div className="flex flex-col gap-10 relative left-10">
                <Link to="/">
                    <img src={logo} alt="Dr. Joints Logo" className="" />
                </Link>
                <div className="flex space-x-6 font-medium">
                    {renderNavLinks()}
                </div>
            </div>
            <div className="relative inline-block shadow-xl rounded bg-[#d9d9d975]">
                <button
                    className="text-gray-800 font-medium py-2 px-4 rounded focus:outline-none flex gap-5"
                    onClick={toggleLangMenu}
                >
                    {currentLang}
                    <img
                        src={drop}
                        className={`
                            ${isLangMenuOpen ? "rotate-180" : "rotate-0"} 
                            transition ease-in-out duration-300
                        `}
                        alt="Dropdown Icon"
                    />
                </button>

                {isLangMenuOpen && (
                    <div className="absolute w-full border bg-[#d9d9d975] shadow-lg rounded w-32">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                onClick={() => handleLangSelect(lang.code)}
                            >
                                {lang.name}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );

    // Mobile Menu Trigger Button
    const renderMobileMenuTrigger = () => (
        <button
            onClick={toggleMenu}
            className="fixed top-4 left-4 z-40 bg-white rounded-full p-2 shadow-lg"
        >
            <img
                src={isMenuOpen ? closeIcon : menuIcon}
                alt="Menu Toggle"
                className="h-6 w-6"
            />
        </button>
    );

    // Main Render
    return (
        <>
            {/* Conditional Rendering based on screen size */}
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

// Note: This component assumes you're using React Router for navigation
// Make sure to install and set up react-router-dom in your project
// Also, ensure you have the necessary SVG assets for menu icons