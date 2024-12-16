import React from 'react';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import rating from '../assets/rating.svg';
import translations from '../utils/translations';
import ScrollToTop from '../components/ScrollToTop';

const ShippingPolicyPage = ({ currentLang }) => {
    const t = translations[currentLang] || translations.ENGLISH;

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <ScrollToTop />
            <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-10">
                <h1 className="text-4xl font-extrabold text-center mb-4">{t.shippingPolicyContent.title}</h1>
                <p className="text-center text-gray-600 mb-10">{t.shippingPolicyContent.lastUpdated}</p>

                <div className="space-y-8">
                    {t.shippingPolicyContent.sections.map((section, index) => (
                        <div key={index} className="border-b pb-6 last:border-b-0">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800">{section.heading}</h2>
                            <p className="text-gray-600 whitespace-pre-line">{section.content}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-10 bg-blue-50 p-6 rounded-lg">
                    <p className="text-blue-800 font-medium">
                        For more information, contact us at hello@drjoints.ae.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ShippingPolicyPage;
