import React, { useState, useEffect, useCallback } from "react";
import translations from '../utils/translations';
import head from "../assets/header.svg";
import leftImage from "../assets/second.svg";
import rightImage from "../assets/second_one.svg";
import productImage from '../assets/third.svg';
import one from '../assets/t_one.svg';
import two from '../assets/t_two.svg';
import three from '../assets/t_three.svg';
import four from '../assets/t_four.svg';
import head2 from '../assets/head2.svg';
import left from '../assets/right.svg';
import right from '../assets/left.svg';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';



const App = ({ currentLang }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(5);
    const [isMobile, setIsMobile] = useState(false);
    const t = translations[currentLang] || translations.ENGLISH;



    // Handle window resize and set items to show
    const handleResize = useCallback(() => {
        const width = window.innerWidth;
        if (width < 640) {
            setItemsToShow(1);
            setIsMobile(true);
        } else if (width < 768) {
            setItemsToShow(2);
            setIsMobile(true);
        } else if (width < 1024) {
            setItemsToShow(3);
            setIsMobile(false);
        } else {
            setItemsToShow(5);
            setIsMobile(false);
        }
    }, []);

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [handleResize]);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const maxIndex = t.home.reviews.length - itemsToShow;
                return prevIndex >= maxIndex ? 0 : prevIndex + 1;
            });
        }, 3000);

        return () => clearInterval(timer);
    }, [t.home.reviews.length, itemsToShow]);

    const renderStars = (count) =>
        Array.from({ length: count }, (_, i) => (
            <span key={i} className="text-yellow-500 text-lg">★</span>
        ));
    return (
        <div className="overflow-hidden bg-gradient-to-b from-[#0060D9] to-[#00618E]">
            {/* Hero Section */}
            <div className="h-full w-screen">
                {/* <div className="w-screen flex  md:flex-row justify-center items-center py-20">
                    <div className="w-full md:w-1/2 space-y-6 flex ">
                        <img src={head} alt="Person Holding Product" className="" />
                        <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-white  ">
                            {t.home.title}
                        </h1>
                    </div>
                    <div className="w-full md:w-1/2 space-y-6 flex items-end justify-end">
                        <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-white mb-20">
                            {t.home.titlesec}
                        </h1>
                        <img src={head2} alt="Person Holding Product" className="" />
                    </div>
                </div> */}
                <div className="w-screen flex flex-col md:flex-row justify-center items-center py-20 space-y-6 md:space-y-0">
                    <div className="w-full md:w-1/2 space-y-6 flex flex-col md:flex-row items-center md:items-start">
                        <img src={head} alt="Person Holding Product" className="w-full md:w-auto" />
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-white text-center md:text-left">
                            {t.home.title}
                        </h1>
                    </div>
                    <div className="w-full md:w-1/2 space-y-6 flex flex-col md:flex-row items-center md:items-end justify-center md:justify-end">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-white text-center md:text-right mb-4 md:mb-20">
                            {t.home.titlesec}
                        </h1>
                        <img src={head2} alt="Person Holding Product" className="w-full md:w-auto" />
                    </div>
                </div>
            </div>

            {/* Why Choose Section */}
            <div className=" w-full min-h-screen flex flex-col items-center pb-10 px-0 md:px-20 sm:px-20">
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white text-center mb-5">
                    {t.home.question}
                </h1>
                <div className="flex flex-col md:flex-row gap-10">
                    {/* Left Section */}
                    <div className="w-full md:w-1/2 flex flex-col">
                        <div className="flex justify-center mb-6">
                            <img
                                src={leftImage}
                                alt="Person Holding Leg"
                                className="rounded-lg object-cover "
                            />
                        </div>

                        <div className="text-center md:text-left text-white">
                            <p className="text-base md:text-lg leading-relaxed mt-2">
                                {t.home.answertwo}
                            </p>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="w-full md:w-1/2 flex flex-col">
                        <div className="flex justify-center mb-6">
                            <img
                                src={rightImage}
                                alt="Person Holding Leg"
                                className="rounded-lg object-cover w-[70%]"
                            />
                        </div>

                        <div className="text-center md:text-left text-white">
                            <p className="text-base md:text-lg leading-relaxed">
                                {t.home.answer}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-4 flex justify-center md:justify-start">
                    <button className="bg-green-500 text-white text-lg md:text-xl px-8 py-4 rounded-full shadow-md hover:bg-[#6DB5AE] hover:text-black transition duration-300">
                        <a href="/product">
                            {t.home.button}
                        </a>
                    </button>
                </div>
                <div className="container mx-auto px-4 mt-32 bg-white">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center items-center">
                        <img src={one} alt="Trusted Brand 1" className="max-w-full h-auto" />
                        <img src={two} alt="Trusted Brand 2" className="max-w-full h-auto" />
                        <img src={three} alt="Trusted Brand 3" className="max-w-full h-auto" />
                        <img src={four} alt="Trusted Brand 4" className="max-w-full h-auto" />
                    </div>
                </div>
            </div>

            {/* Product Display Section */}
            <div className="">

                <div className="mx-auto w-screen h-screen flex flex-col items-center justify-between px-4 gap-5">
                    <iframe
                        src="https://www.youtube.com/embed/xFQblbvIjwU?autoplay=1&loop=1&playlist=xFQblbvIjwU"
                        className="rounded-lg shadow-lg w-screen h-screen"
                        allow="autoplay; encrypted-media"
                        title="YouTube Video"
                    ></iframe>

                    <div className="mt-4 md:mt-0 flex justify-center ">
                        <button className="bg-blue-500 text-white text-lg px-6 py-3 rounded-full shadow-md hover:bg-blue-600 transition duration-300">
                            <a href="/product">{t.home.goproduct}</a>
                        </button>
                    </div>
                </div>
                <div id="reviews" className="w-full py-16 text-black relative z-10">
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12 text-white">{t.home.client}</h2>

                        <div className="relative overflow-hidden touch-pan-y">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{
                                    transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
                                }}
                            >
                                {t.home.reviews.map((review) => (
                                    <div
                                        key={review.id}
                                        className={`flex-shrink-0 px-4 flex items-center justify-center ${isMobile ? "w-full" : `w-1/${itemsToShow}`
                                            }`}
                                        style={{
                                            flex: `0 0 ${100 / itemsToShow}%`,
                                        }}
                                    >
                                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-[300px] h-[250px]">
                                            <h3 className="text-lg font-bold mb-2">{review.name}</h3>
                                            <p className="text-gray-600 mb-3">{review.review}</p>
                                            <div className="flex justify-center">{renderStars(review.stars)}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Dots */}
                        <div className="flex justify-center mt-8 gap-2">
                            {[...Array(Math.max(1, t.home.reviews.length - itemsToShow + 1))].map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentIndex === index ? "bg-blue-600" : "bg-gray-300"
                                        }`}
                                    onClick={() => setCurrentIndex(index)}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                {/* footer */}
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
        </div >
    );
};

export default App;