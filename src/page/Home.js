import React, { useState, useEffect, useCallback } from "react";
import translations from '../utils/translations';
import head from "../assets/header.svg";
import leftImage from "../assets/musllim_joint.png";
import rightImage from "../assets/muslim_joint2.jpeg";
import productImage from '../assets/third.svg';
import one from '../assets/t_one.svg';
import two from '../assets/t_two.svg';
import three from '../assets/t_three.svg';
import four from '../assets/t_four.svg';
import five from '../assets/hala.png';
import head2 from '../assets/head2.svg';
import left from '../assets/right.svg';
import right from '../assets/left.svg';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from '../assets/slide1.svg';
import slider2 from '../assets/slider2.svg';
import slider3 from '../assets/slider3.svg';
import slider4 from '../assets/slider4.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import pain1 from '../assets/home1.jpg';
import pain2 from '../assets/home2.jpg';
import pain3 from '../assets/home3.jpg';
import ScrollToTop from "../components/ScrollToTop";
import SmokeEffect from '../components/SmokeEffect';
import CanvasBackground from '../components/CanvasBackground';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

const App = ({ currentLang }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(5);
    const [isMobile, setIsMobile] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
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

    // Add scroll handler
    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true
        });
    }, []);

    const renderStars = (count) =>
        Array.from({ length: count }, (_, i) => (
            <span key={i} className="text-yellow-500 text-lg">★</span>
        ));
    return (
        <div className="overflow-hidden relative">
            <CanvasBackground />
            <SmokeEffect />
            <ScrollToTop />
            <div className="h-full w-full relative px-4 md:px-0">
                <div className="text-black font-sans">
                    <div
                        className="flex text-white flex-col items-center justify-center font-libre-franklin font-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-5 md:mt-10 transition-all duration-300 px-4 text-center"
                        style={{
                            transform: `translateY(${scrollPosition * 0.5}px) scale(${1 + scrollPosition * 0.001})`,
                            opacity: Math.max(0, 1 - scrollPosition / 300)
                        }}
                    >
                        <h1 className="mb-2">{t.home.title}</h1>
                        <h1>{t.home.titlesec}</h1>
                    </div>

                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }}
                        modules={[Pagination, Autoplay]}
                        className="w-full mt-24 px-4 md:px-8 lg:px-12 should"
                    >
                        <SwiperSlide className="flex justify-center items-center rounded-md overflow-hidden h-[200px] sm:h-[300px] md:h-[400px]">
                            <img
                                src={slide1}
                                className="rounded-md transition-transform duration-300 hover:scale-110 w-full h-full object-cover"
                                alt="Slider Image 1"
                            />
                        </SwiperSlide>
                        <SwiperSlide className="flex justify-center items-center rounded-md overflow-hidden h-[200px] sm:h-[300px] md:h-[400px]">
                            <img
                                src={slider2}
                                className="rounded-md rounded-tl-[10rem] transition-transform duration-300 hover:scale-110 w-full h-full object-cover"
                                alt="Slider Image 2"
                            />
                        </SwiperSlide>
                        <SwiperSlide className="flex justify-center items-center rounded-md overflow-hidden h-[200px] sm:h-[300px] md:h-[400px]">
                            <img
                                src={slider3}
                                className="rounded-md transition-transform duration-300 hover:scale-110 w-full h-full object-cover"
                                alt="Slider Image 3"
                            />
                        </SwiperSlide>
                        <SwiperSlide className="flex justify-center items-center rounded-md overflow-hidden h-[200px] sm:h-[300px] md:h-[400px]">
                            <img
                                src={slider4}
                                className="rounded-md rounded-tl-[10rem] transition-transform duration-300 hover:scale-110 w-full h-full object-cover"
                                alt="Slider Image 4"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

            {/* Why Choose Section */}
            <div className="w-full flex flex-col items-center px-4 sm:px-8 md:px-20 py-10 md:py-20">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl pb-6 font-bold text-white text-center">
                    {t.home.question}
                </h1>
                <div className="flex flex-col md:flex-row gap-6 md:gap-10 w-full">
                    {/* Left Section */}
                    <div className="w-full md:w-1/2">
                        <div data-aos="fade-right" className="text-white">
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-Poppins font-medium">
                                {t.home.answer}
                            </p>
                            <button className="bg-white mt-10 text-black text-base md:text-2xl px-6 py-3 rounded-full shadow-md hover:bg-blue-500 transition duration-300">
                                <a href="/product">{t.home.goproduct}</a>
                            </button>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div data-aos="fade-left" className="w-full md:w-1/2">
                        <div className="flex justify-center">
                            <img
                                src={rightImage}
                                alt="Person Holding Leg"
                                className="rounded-lg object-cover w-full md:w-[70%] h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Trusted Brands Section */}
            <div className="w-full px-4 sm:px-8 py-8 md:py-12 bg-white">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center items-center mx-auto">
                    <div data-aos="fade-right" data-aos-delay="0">
                        <img src={one} alt="Trusted Brand 1" className="max-w-full h-auto" />
                    </div>
                    <div data-aos="fade-right" data-aos-delay="200">
                        <img src={two} alt="Trusted Brand 2" className="max-w-full h-auto" />
                    </div>
                    <div data-aos="fade-right" data-aos-delay="400">
                        <img src={three} alt="Trusted Brand 3" className="max-w-full h-auto" />
                    </div>
                    <div data-aos="fade-right" data-aos-delay="600">
                        <img src={four} alt="Trusted Brand 4" className="max-w-full h-auto" />
                    </div>
                    <div data-aos="fade-right" data-aos-delay="800">
                        <img src={five} alt="Trusted Brand 5" className="max-w-full h-auto" />
                    </div>
                </div>
            </div>

            {/* Detail of pain Section */}
            <div className="w-full min-h-screen bg-[#0060B9]  grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* Top Left Section - Text */}
                <div data-aos="fade-right" className="flex justify-center items-center p-8 ">
                    <div>
                        <p className="text-white font-serif text-3xl md:text-4xl text-center">
                            {t.home.homec1}
                        </p>
                    </div>
                </div>

                {/* Top Right Section - Image */}
                <div data-aos="fade-left" className="relative h-[50vh] md:h-full">
                    <img
                        src={pain2}
                        alt="Herbs and Flowers"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>

                {/* Bottom Left Section - Image */}
                <div data-aos="fade-right" className="relative h-[50vh] md:h-full">
                    <img
                        src={pain1}
                        alt="White Flowers"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>

                {/* Bottom Right Section - Text */}
                <div data-aos="fade-left" className="flex justify-center items-center p-8">
                    <div>
                        <p className="text-white font-serif text-3xl md:text-4xl text-center">
                            {t.home.homec2}
                        </p>
                    </div>
                </div>
            </div>

            {/* YouTube Section */}
            {/* <div className="w-full py-10 md:py-20">
                <div className="aspect-video w-full mx-auto px-4">
                    <iframe
                        src={`https://www.youtube.com/embed/${t.home.Youtube}?autoplay=1&loop=1&playlist=${t.home.Youtube}`}
                        className="rounded-lg shadow-lg w-full h-full"
                        allow="autoplay; encrypted-media"
                        title="YouTube Video"
                    ></iframe>
                </div>
                <div className="mt-6 md:mt-8 flex justify-center">
                    <button className="bg-blue-500 text-white text-base md:text-lg px-6 py-3 rounded-full shadow-md hover:bg-blue-600 transition duration-300">
                        <a href="/product">{t.home.goproduct}</a>
                    </button>
                </div>
            </div> */}
            <div className="w-full py-10 md:py-20">
                <div className="aspect-video w-full mx-auto px-4">
                    <iframe
                        src={`https://www.youtube.com/embed/${t.home.Youtube}?autoplay=1&loop=1&playlist=${t.home.Youtube}&rel=0`}
                        className="rounded-lg shadow-lg w-full h-full"
                        allow="autoplay; encrypted-media"
                        title="YouTube Video"
                    ></iframe>
                </div>
                <div className="mt-6 md:mt-8 flex justify-center">
                    <button className="bg-blue-500 text-white text-base md:text-lg px-6 py-3 rounded-full shadow-md hover:bg-blue-600 transition duration-300">
                        <a href="/product">{t.home.goproduct}</a>
                    </button>
                </div>
            </div>


            <div className="w-full py-10 md:py-20 ">
                <img src={pain3} className="w-screen md: lg:h-[50vh] sm:h-full " />
                <h1 className="text-center text-4xl mt-3 text-white">{t.home.bannerimg}</h1>
            </div>

            {/* Reviews Section */}
            <div id="reviews" className="w-full py-10 md:py-16 relative z-10">
                <div className=" mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-12 font-libre-franklin text-white">
                        {t.home.client}
                    </h2>

                    <div className="relative should overflow-hidden touch-pan-y">
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
                <div className="container mx-auto px-4 py-12 md:pt-32">
                    <div className="w-full h-[1px] bg-black mb-8 md:mb-10"></div>
                    <div className="flex flex-col md:flex-row justify-between gap-8">
                        <div className="flex flex-col items-center md:items-start">
                            <img src={logo} alt="Dr. Joints Logo" className="w-32 md:w-48 mb-6" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left text-base md:text-xl w-full max-w-3xl">
                            {t.footer.slice(0, 3).map((link) => (
                                <Link
                                    key={link.id}
                                    to={link.path}
                                    className="text-black hover:text-blue-600 hover:underline underline-offset-4 transition-colors duration-300"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            {t.footer.slice(3, 6).map((link) => (
                                <Link
                                    key={link.id}
                                    to={link.path}
                                    className="text-black hover:text-blue-600 hover:underline underline-offset-4 transition-colors duration-300"
                                >
                                    {link.label}
                                </Link>
                            ))}
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
    );
};

export default App;





