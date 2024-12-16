import React from 'react';
import translations from '../utils/translations';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import rating from '../assets/rating.svg';
import ScrollToTop from '../components/ScrollToTop';

const PrivacyPolicyPage = ({ currentLang }) => {
    const t = translations[currentLang] || translations.ENGLISH;

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <ScrollToTop />
            <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-10">
                <h1 className="text-4xl font-extrabold text-center mb-4">{t.privacyPolicy.title}</h1>
                <p className="text-center text-gray-600 mb-10">
                    {t.privacyPolicy.lastUpdated}
                </p>

                <div className="space-y-8">
                    {t.privacyPolicy.sections.map((section, index) => (
                        <div key={index} className="border-b pb-6 last:border-b-0">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                                {section.heading}
                            </h2>
                            <p className="text-gray-600">
                                {section.content}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-10 bg-blue-50 p-6 rounded-lg">
                    <p className="text-blue-800 font-medium">
                        {t.privacyPolicy.contactPrivacy}
                    </p>
                </div>
            </div>
            <div className="">
                {/* Rating */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 p-4">
                    <h1 className='text-xl md:text-3xl'>{t.product.rating}</h1>
                    <img src={rating} alt="review" className="w-32 md:w-auto" />
                    <h1 className='text-xl md:text-3xl'>{t.product.rating2}</h1>
                </div>
                <div className="bg-white">
                    <div className="container mx-auto px-4 pt-32">
                        <div className="w-full h-[1px] bg-black mb-10"></div>

                        <div className="flex flex-col md:flex-row justify-between">
                            <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
                                <img src={logo} alt="Dr. Joints Logo" className="w-48 mb-6" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left text-xl">
                                <div className="flex flex-col space-y-4">
                                    {t.footer.slice(0, 3).map((link) => (
                                        <Link
                                            key={link.id}
                                            to={link.path}
                                            className="text-black hover:text-blue-600 hover:underline underline-offset-4 transition-colors duration-300"
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>

                                <div className="flex flex-col space-y-4">
                                    {t.footer.slice(3, 6).map((link) => (
                                        <Link
                                            key={link.id}
                                            to={link.path}
                                            className="text-black hover:text-blue-600 hover:underline underline-offset-4 transition-colors duration-300"
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>

                                <div className="flex flex-col space-y-4">
                                    {t.footer.slice(6, 9).map((link) => (
                                        <Link
                                            key={link.id}
                                            to={link.path}
                                            className="text-black hover:text-blue-600 hover:underline underline-offset-4 transition-colors duration-300"
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;