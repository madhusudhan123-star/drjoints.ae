import React, { useState, useEffect, useRef } from "react";
import translations from '../utils/translations';
import head from "../assets/header.svg";
import leftImage from "../assets/second.svg";
import rightImage from "../assets/second_one.svg";
import productImage from '../assets/third.svg';
import one from '../assets/t_one.svg';
import two from '../assets/t_two.svg';
import three from '../assets/t_three.svg';
import four from '../assets/t_four.svg';
import left from '../assets/right.svg';
import right from '../assets/left.svg';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';


const App = ({ currentLang }) => {

    const t = translations[currentLang] || translations.ENGLISH;
    return (
        <div className="overflow-hidden bg-gradient-to-b from-[#B1F3FC] to-[#737373]">
            {/* Hero Section */}
            <div className="h-full">
                <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-center md:justify-between py-16">
                    {/* Right Section (Mobile First) */}
                    <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-blue-900 leading-tight">
                            {t.home.title}
                        </h1>
                        <button className="px-4 py-2 sm:px-8 sm:py-3 md:px-7 md:py-5 text-xl sm:text-xl md:text-2xl bg-[#6DB5AE] text-black rounded-2xl shadow-lg hover:bg-green-500 hover:text-white transition duration-300">
                            <a className="/product">
                                {t.home.button}

                            </a>
                        </button>
                    </div>
                    {/* Left Section */}
                    <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
                        <img src={head} alt="Person Holding Product" className="max-w-full h-auto" />
                    </div>

                </div>
            </div>

            {/* Why Choose Section */}
            <div className=" w-full min-h-screen flex flex-col items-center pb-10 px-0 md:px-20 sm:px-20">
                <div className="flex flex-col md:flex-row gap-20 h-full md:h-[100vh] sm:h-full">
                    {/* Left Section */}
                    <div className="w-full md:w-1/2 flex flex-col">
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-900 text-center mb-5">
                            {t.home.question}
                        </h1>
                        <div className="flex justify-center mb-6">
                            <img
                                src={leftImage}
                                alt="Person Holding Leg"
                                className="rounded-lg object-cover "
                            />
                        </div>

                        <div className="text-center md:text-left text-gray-700">
                            <p className="text-base md:text-lg leading-relaxed">
                                {t.home.answer}
                            </p>
                            <p className="text-base md:text-lg leading-relaxed mt-2">
                                {t.home.answertwo}
                            </p>
                            <div className="mt-4 flex justify-center md:justify-start">
                                <button className="bg-[#6DB5AE] text-black text-lg md:text-xl px-8 py-4 rounded-full shadow-md hover:bg-green-500 hover:text-white transition duration-300">
                                    <a href="/product">
                                        {t.home.button}
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="w-full md:w-1/2 flex md:h-[95vh] sm:h-full justify-center">
                        <img
                            src={rightImage}
                            alt="Knee Pain Illustration"
                            className="rounded-lg  object-cover w-full"
                        />
                    </div>
                </div>
            </div>

            {/* Product Display Section */}
            <div className=" py-16">
                <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4">
                    {/* Right Section: Text (Mobile First) */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            src={productImage}
                            alt="Product Display"
                            className="max-w-full h-auto"
                        />
                    </div>

                    {/* Left Section: Image */}
                    <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0 md:pl-12">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                            {t.home.title2}
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600">
                            {t.home.sub2}
                        </p>
                    </div>
                </div>
                <div className="container mx-auto px-4 mt-32">
                    <h1 className="text-[#ffffff] text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center md:text-left">
                        {t.home.trust}
                    </h1>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center items-center">
                        <img src={one} alt="Trusted Brand 1" className="max-w-full h-auto" />
                        <img src={two} alt="Trusted Brand 2" className="max-w-full h-auto" />
                        <img src={three} alt="Trusted Brand 3" className="max-w-full h-auto" />
                        <img src={four} alt="Trusted Brand 4" className="max-w-full h-auto" />
                    </div>
                </div>
                <div className="container mx-auto px-4 pt-32">
                    <div className="w-full h-[1px] bg-black mb-10"></div>

                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
                            <img src={logo} alt="Dr. Joints Logo" className="w-48 mb-6" />
                            <button className="bg-[#6DB5AE] text-black text-lg md:text-xl px-8 py-4 rounded-full shadow-md hover:bg-green-500 hover:text-white transition duration-300"><a href="/product">{t.home.button}</a></button>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-1 gap-4 text-center md:text-right text-xl cursor-pointer">
                            {t.footer.map((link) => (
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
                </div>
            </div>
        </div>
    );
};

export default App;