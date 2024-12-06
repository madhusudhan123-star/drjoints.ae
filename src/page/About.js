import React, { useState, useEffect, useRef, useCallback } from 'react'
import translations from '../utils/translations';
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// Import required modules
import { EffectFlip, Pagination, Navigation, Autoplay } from 'swiper/modules';

// image and svg files
import first from '../assets/about_first.svg'
import two from '../assets/about_second.svg'
import three from '../assets/about_three.svg'
import four from '../assets/about_four.svg'
import doctor from '../assets/doctor.svg';
import logo from '../assets/logo.svg';
import rating from '../assets/rating.svg';
import painone from '../assets/pain_first.svg';
import painsecond from '../assets/pain_second.svg';
import painthird from '../assets/pain_three.svg';
import painfourth from '../assets/legpain.jpeg';
import { ChevronLeft, ChevronRight, ThumbsUp, Store, Users, UserCircle, Star } from 'lucide-react';



const AnimatedCounter = ({ end, duration = 2000, suffix = '' }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const counterRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime;
        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * end));

            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };

        requestAnimationFrame(step);
    }, [end, duration, isVisible]);

    return (
        <div ref={counterRef} className="text-4xl font-bold text-white">
            {count}
            {suffix}
        </div>
    );
};

const StatCard = ({ icon: Icon, value, suffix, label }) => (
    <div className="flex flex-col items-center text-center p-4">
        <Icon className="w-12 h-12 text-orange-500 mb-3" />
        <AnimatedCounter end={value} suffix={suffix} />
        <p className="mt-2 text-white">{label}</p>
    </div>
);


const About = ({ currentLang }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(3);
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
            setItemsToShow(3);
            setIsMobile(false);
        }
    }, []);

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [handleResize]);

    // Auto-slide logic
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const totalSlides = t.about.reviews.length;
                const maxIndex = totalSlides - itemsToShow;
                return prevIndex >= maxIndex ? 0 : prevIndex + 1;
            });
        }, 3000);

        return () => clearInterval(timer);
    }, [t.about.reviews.length, itemsToShow]);

    // Calculate total dots
    const totalDots = Math.max(1, Math.ceil(t.about.reviews.length / itemsToShow));
    return (
        <div className='bg-gradient-to-b from-[#0060D9] to-[#00618E]'>
            {/* First Section */}
            <div className=''>
                <div className='flex flex-col md:flex-row p-6 md:p-20'>
                    <div className='w-full md:w-1/2 flex flex-col justify-center mb-6 md:mb-0'>
                        <h1 className='text-2xl md:text-3xl mb-4'>{t.about.title}</h1>
                        <p className='text-base md:text-xl'>{t.about.sub}</p>
                    </div>
                    <div className='w-full md:w-1/2 flex justify-center items-center'>
                        <Swiper
                            effect="flip"
                            grabCursor={true}
                            autoplay={{
                                delay: 2000, // Slide every 3 seconds
                                disableOnInteraction: false,
                            }}
                            pagination={{ clickable: false }} // Hides dots
                            navigation={{}} // Keeps navigation but we'll hide it via CSS
                            modules={[EffectFlip, Pagination, Navigation, Autoplay]}
                            className="w-1/2 h-full p-12"
                        >
                            <SwiperSlide className="bg-center bg-cover">
                                <img
                                    src={first}
                                    alt="Nature 1"
                                    className="block w-full h-full object-cover"
                                />
                            </SwiperSlide>
                            <SwiperSlide className="bg-center bg-cover">
                                <img
                                    src={two}
                                    alt="Nature 2"
                                    className="block w-full h-full object-fit"
                                />
                            </SwiperSlide>
                            <SwiperSlide className="bg-center bg-cover">
                                <img
                                    src={three}
                                    alt="Nature 3"
                                    className="block w-full h-full object-fit"
                                />
                            </SwiperSlide>
                            <SwiperSlide className="bg-center bg-cover">
                                <img
                                    src={four}
                                    alt="Nature 3"
                                    className="block w-full h-full object-fit"
                                />
                            </SwiperSlide>
                        </Swiper>
                        {/* <img src={first} alt="product" className='max-w-full h-auto' /> */}
                    </div>
                </div>
            </div>

            {/* Success Numbers Section */}
            <div className='flex justify-around items-center'>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
                    {t.about.stats.map((stat, index) => (
                        <StatCard
                            key={index}
                            icon={stat.icon}
                            value={stat.value}
                            suffix={stat.suffix}
                            label={stat.label}
                        />
                    ))}
                </div>
            </div>





            {/* Doctor Section */}
            <div className='relative'>
                <img src={doctor} alt='doctor' className='w-full' />
                <div className='absolute bottom-0 w-full flex justify-center items-center'>
                    <div className='bg-[#ffffff90] w-full md:w-1/2 p-4 md:p-10 text-center'>
                        <h1 className='text-3xl md:text-6xl'>{t.product.doctor}</h1>
                        <p className='text-base md:text-2xl md:pl-5'>
                            {t.product.doctorpara}
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
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
        </div >
    )
}

export default About



//   <div className="flex flex-col md:flex-row items-center justify-center h-screen px-4 md:px-8">
//                 <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
//                     <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
//                         {t.about.secTitle}
//                     </h1>
//                     <p className="text-white-600 text-lg md:text-xl mb-6">
//                         {t.about.seccontent}
//                     </p>
//                 </div>
//                 <div className="w-full md:w-1/2">
//                     <Swiper
//                         effect="cards"
//                         grabCursor={true}
//                         modules={[EffectCards]}
//                         className="w-full max-w-xs mx-auto"
//                     >
//                         <SwiperSlide className="flex items-center justify-center bg-red-600 rounded-lg w-[300px] h-[400px]">
//                             <video
//                                 className="w-full h-auto rounded-lg"
//                                 muted
//                                 autoPlay
//                                 loop
//                             >
//                                 <source src={leg} type="video/mp4" />
//                                 Your browser does not support the video tag.
//                             </video>
//                         </SwiperSlide>
//                         <SwiperSlide className="flex items-center justify-center bg-blue-600 rounded-lg">
//                             <video
//                                 className="w-full h-auto rounded-lg"
//                                 muted
//                                 autoPlay
//                                 loop
//                             >
//                                 <source src={one} type="video/mp4" />
//                                 Your browser does not support the video tag.
//                             </video>
//                         </SwiperSlide>
//                         <SwiperSlide className="flex items-center justify-center bg-green-600 rounded-lg">
//                             <video
//                                 className="w-full h-auto rounded-lg"
//                                 muted
//                                 autoPlay
//                                 loop
//                             >
//                                 <source src={two} type="video/mp4" />
//                                 Your browser does not support the video tag.
//                             </video>
//                         </SwiperSlide>
//                         <SwiperSlide className="flex items-center justify-center bg-green-600 rounded-lg">
//                             <video
//                                 className="w-full h-auto rounded-lg"
//                                 muted
//                                 autoPlay
//                                 loop
//                             >
//                                 <source src={three} type="video/mp4" />
//                                 Your browser does not support the video tag.
//                             </video>
//                         </SwiperSlide>
//                     </Swiper>
//                 </div>
//             </div> 