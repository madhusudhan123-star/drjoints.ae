import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Globe } from 'lucide-react';
import translations from '../utils/translations';
import languages from '../utils/languages';

// SVG Imports
import logo from '../assets/logo.svg';
import inst from '../assets/instagram.svg';
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
        <nav className="bg-gradient-to-br from-[#B0F1FA] to-[#B0F1F9]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center ">
                    {/* Instagram Logo */}
                    <div className="flex items-center space-x-4">
                        <img src={inst} alt="Instagram Logo" className="" />
                    </div>
                    {/* Logo and Navigation Links */}
                    <div className="flex flex-col items-center gap-10 relative left-12 ">
                        <Link to="/">
                            <img src={logo} alt="Dr. Joints Logo" />
                        </Link>
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
                        className="p-2 border rounded"
                    >
                        {languages.map((lang) => (
                            <option key={lang.code} value={lang.code}>
                                {lang.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </nav>
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