// import React, { useState, useEffect, useRef } from "react";

// import head from "../assets/header.svg";
// import leftImage from "../assets/second.svg"; // Replace with your actual left image path
// import rightImage from "../assets/second_one.svg"; // Replace with your actual right image pat
// import productImage from '../assets/third.svg';
// import one from '../assets/t_one.svg';
// import two from '../assets/t_two.svg';
// import three from '../assets/t_three.svg';
// import four from '../assets/t_four.svg';
// import left from '../assets/right.svg';
// import right from '../assets/left.svg';
// import logo from '../assets/logo.svg';


// const App = () => {
//     const reviews = [
//         {
//             name: "Omar",
//             rating: 5,
//             occupation: "Marathon Runner",
//             feedback:
//                 "Running marathons comes with its share of joint strain, but this product has been a lifesaver. The quick absorption and natural ingredients ensure that I can recover faster and keep training without disruptions.",
//         },
//         {
//             name: "Sophia",
//             rating: 4,
//             occupation: "Yoga Instructor",
//             feedback:
//                 "This product has helped me maintain flexibility and recover faster after intense sessions. Highly recommend it!",
//         },
//         {
//             name: "Liam",
//             rating: 5,
//             occupation: "Professional Athlete",
//             feedback:
//                 "A must-have for anyone serious about their fitness journey. Quick relief and great results!",
//         },
//         {
//             name: "Omar",
//             rating: 5,
//             occupation: "Marathon Runner",
//             feedback:
//                 "Running marathons comes with its share of joint strain, but this product has been a lifesaver. The quick absorption and natural ingredients ensure that I can recover faster and keep training without disruptions.",
//         },
//         {
//             name: "Sophia",
//             rating: 4,
//             occupation: "Yoga Instructor",
//             feedback:
//                 "This product has helped me maintain flexibility and recover faster after intense sessions. Highly recommend it!",
//         },
//         {
//             name: "Liam",
//             rating: 5,
//             occupation: "Professional Athlete",
//             feedback:
//                 "A must-have for anyone serious about their fitness journey. Quick relief and great results!",
//         },
//     ];
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const carouselRef = useRef(null);

//     const handlePrev = () => {
//         const newIndex = (currentIndex - 1 + reviews.length) % reviews.length;
//         carouselRef.current.scrollTo({
//             left: (newIndex / reviews.length) * carouselRef.current.scrollWidth,
//             behavior: 'smooth',
//         });
//         setCurrentIndex(newIndex);
//     };

//     const handleNext = () => {
//         const newIndex = (currentIndex + 1) % reviews.length;
//         carouselRef.current.scrollTo({
//             left: (newIndex / reviews.length) * carouselRef.current.scrollWidth,
//             behavior: 'smooth',
//         });
//         setCurrentIndex(newIndex);
//     };

//     useEffect(() => {
//         const carousel = carouselRef.current;
//         const handleResize = () => {
//             carousel.scrollLeft =
//                 (currentIndex / reviews.length) * carousel.scrollWidth;
//         };
//         window.addEventListener('resize', handleResize);
//         return () => window.removeEventListener('resize', handleResize);
//     }, [currentIndex, reviews.length]);
//     return (
//         <div className="overflow-hidden">
//             <div className="bg-gradient-to-br from-[#B1F3FC] to-[#B6EFF6] min-h-screen">
//                 <div className="flex flex-col md:flex-row items-center justify-center md:justify-between px-8 md:px-16 py-16">
//                     {/* Left Section */}
//                     <div className="space-y-6 text-center md:text-left">
//                         <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold text-blue-900">
//                             Best Pain <br /> Relief Oil <br /> For <br /> Muscles
//                         </h1>
//                         <button className="px-6 py-4 sm:px-8 sm:py-5 md:px-10 md:py-6 text-2xl sm:text-3xl md:text-4xl bg-[#6DB5AE] text-black rounded-2xl shadow-lg hover:bg-green-500 hover:text-white">
//                             Shop Now
//                         </button>
//                     </div>

//                     {/* Right Section */}
//                     <div className="">
//                         <img src={head} alt="Person Holding Product" className="max-w-full h-auto" />
//                     </div>
//                 </div>
//             </div>
//             <div className="bg-gradient-to-b from-[#B1F3FC] to-[#B6EFF6] w-full min-h-screen flex flex-col items-center md:px-16 pb-10">
//                 {/* Title */}

//                 {/* Content Section */}
//                 <div className="flex gap-5">
//                     <div className="flex flex-col">
//                         <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 text-center mb-10">
//                             Why Choose Our Muscle Pain Relief Oil?
//                         </h1>
//                         {/* Left Image */}
//                         <div className="flex justify-center">
//                             <img
//                                 src={leftImage}
//                                 alt="Person Holding Leg"
//                                 className="rounded-lg w-full  object-cover"
//                             />
//                         </div>

//                         {/* Right Image */}
//                         {/* Text Section */}
//                         <div className="mt-10 w-full max-w-4xl text-end text-gray-700">
//                             <p className="text-lg md:text-xl leading-relaxed">
//                                 Our Mission..., is to provide natural, effective solutions for those
//                                 struggling with joint pain, helping you regain flexibility and
//                                 comfort. We offer premium Ayurvedic oils, formulated using traditional
//                                 herbs and ingredients, to help alleviate joint discomfort and promote
//                                 recovery. These oils not only relieve pain but also work to
//                                 strengthen your joints, muscles, and bones, ensuring long-term health
//                                 benefits.
//                             </p>
//                             <p className="text-lg md:text-xl leading-relaxed mt-4">
//                                 At Dr. Joints, we believe in the power of nature and holistic
//                                 wellness. Our commitment to quality and authenticity ensures that
//                                 each product is crafted to deliver lasting relief, allowing you to
//                                 embrace life with ease and confidence.
//                             </p>
//                             <div className="mt-8 ">
//                                 <button className="bg-[#6DB5AE] text-black text-lg md:text-xl px-8 py-4 rounded-full shadow-md hover:bg-green-500 hover:text-white transition duration-300">
//                                     Read More
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="flex">
//                         <img
//                             src={rightImage}
//                             alt="Knee Pain Illustration"
//                             className="rounded-lg  max-w-sm md:max-w-md object-cover"
//                         />
//                     </div>
//                 </div>

//             </div>
//             <div className="bg-gradient-to-br from-[#5F6166] to-[#ADD8E6]">
//                 <div className="flex flex-col md:flex-row items-center max-w-7xl justify-between">
//                     {/* Left Section: Image */}
//                     <div className=" w-1/2">
//                         <img
//                             src={productImage}
//                             alt="Product Display"
//                             className="w-screen"
//                         />
//                     </div>

//                     {/* Right Section: Text */}
//                     <div className="text-left mt-10 md:mt-0 md:pl-12 w-1/2 ">
//                         <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 w-full">
//                             natural, effective solutions for those struggling
//                         </h1>
//                         <p className="text-lg md:text-xl text-gray-600">
//                             natural, effective solutions for those struggling with joint pain,
//                             helping
//                         </p>
//                     </div>
//                 </div>
//             </div>
//             <div>
//                 <div className="flex flex-col  bg-gradient-to-br from-[#ADD8E6] to-[#5F6166] gap-10">
//                     <h1 className="text-[#01579B] text-4xl md:text-5xl lg:text-6xl font-bold pt-10 pl-10 pb-10">Trusted By</h1>
//                     <div className="flex  flex-wrap w-screen justify-around items-center">
//                         <div>
//                             <img src={one} alt="" />
//                         </div>
//                         <div>
//                             <img src={two} alt="" />
//                         </div>
//                         <div>
//                             <img src={three} alt="" />
//                         </div>
//                         <div>
//                             <img src={four} alt="" />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* <div className="bg-gradient-to-br from-[#ADD8E6] to-[#607880]">
//                 <div className="flex ">
//                     <div className="w-1/2">
//                         <h1 className="text-[#01579B] text-4xl md:text-5xl lg:text-6xl font-bold">Some of the review of the clients</h1>
//                     </div>
//                     <div className="w-1/2 flex flex-col items-center py-10">
//                         <div className="relative flex items-center justify-center w-full">

//                             <button
//                                 className="absolute left-4 bg-gray-300 hover:bg-gray-400 rounded-full w-8 h-8 flex items-center justify-center shadow-md"
//                                 onClick={handlePrev}
//                             >
//                                 <img src={left} alt="Left Arrow" />
//                             </button>


//                             <div
//                                 ref={carouselRef}
//                                 className="flex space-x-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
//                             >
//                                 {reviews.map((review, index) => (
//                                     <div
//                                         key={index}
//                                         className={`bg-white shadow-lg rounded-lg p-6 w- transition-transform duration-300 snap-center ${index === currentIndex ? 'scale-105' : ''
//                                             }`}
//                                     >
//                                         <h3 className="text-lg font-bold flex items-center">
//                                             {review.name}
//                                             <span className="ml-2 text-yellow-500">
//                                                 {'★'.repeat(review.rating)}
//                                                 {'☆'.repeat(5 - review.rating)}
//                                             </span>
//                                         </h3>
//                                         <p className="text-sm font-medium text-gray-600">{review.occupation}</p>
//                                         <p className="mt-4 text-gray-700">{review.feedback}</p>
//                                     </div>
//                                 ))}
//                             </div>

//                             <button
//                                 className="absolute right-4 bg-gray-300 hover:bg-gray-400 rounded-full w-8 h-8 flex items-center justify-center shadow-md"
//                                 onClick={handleNext}
//                             >
//                                 <img src={right} alt="Right Arrow" />
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div> */}
//             <div className="bg-gradient-to-br from-[#ADD8E6] to-[#607880]">
//                 <div className="w-screen py-32 flex justify-center ">
//                     <div className="w-[90vw] h-[1px] bg-black">

//                     </div>
//                 </div>
//                 <div className="flex justify-between">
//                     <div className="flex flex-col my-10 px-10">
//                         <img src={logo} className="w-60" />
//                         <p className="text-2xl pt-10">Follow for more</p>
//                     </div>
//                     <div className="flex-row  p-20 text-2xl">
//                         <p>Home</p>
//                         <p>Shop</p>
//                         <p>About</p>
//                         <p>Contact</p>
//                         <p>Return Policy</p>
//                         <p>Privacy Policy</p>
//                         <p>Terms & Conditions</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default App;

import React, { useState, useEffect, useRef } from "react";

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

const App = () => {

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-[#B1F3FC] to-[#B6EFF6] min-h-screen">
                <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-center md:justify-between py-16">
                    {/* Right Section (Mobile First) */}
                    <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-9xl font-bold text-blue-900 leading-tight">
                            Best Pain <br /> Relief Oil <br /> For <br /> Muscles
                        </h1>
                        <button className="px-6 py-4 sm:px-8 sm:py-5 md:px-10 md:py-6 text-xl sm:text-2xl md:text-3xl bg-[#6DB5AE] text-black rounded-2xl shadow-lg hover:bg-green-500 hover:text-white transition duration-300">
                            Shop Now
                        </button>
                    </div>
                    {/* Left Section */}
                    <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
                        <img src={head} alt="Person Holding Product" className="max-w-full h-auto" />
                    </div>

                </div>
            </div>

            {/* Why Choose Section */}
            <div className="bg-gradient-to-b from-[#B1F3FC] to-[#B6EFF6] w-full min-h-screen flex flex-col items-center px-4 md:px-16 pb-10">

                <div className="flex flex-col md:flex-row gap-10 items-center">
                    {/* Left Section */}
                    <div className="w-full md:w-1/2 flex flex-col">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 text-center mb-10">
                            Why Choose Our Muscle Pain Relief Oil?
                        </h1>
                        <div className="flex justify-center mb-6">
                            <img
                                src={leftImage}
                                alt="Person Holding Leg"
                                className="rounded-lg w-full max-w-md object-cover"
                            />
                        </div>

                        <div className="text-center md:text-right text-gray-700">
                            <p className="text-lg md:text-xl leading-relaxed">
                                Our Mission..., is to provide natural, effective solutions for those
                                struggling with joint pain, helping you regain flexibility and
                                comfort. We offer premium Ayurvedic oils, formulated using traditional
                                herbs and ingredients, to help alleviate joint discomfort and promote
                                recovery.
                            </p>
                            <p className="text-lg md:text-xl leading-relaxed mt-4">
                                At Dr. Joints, we believe in the power of nature and holistic
                                wellness. Our commitment to quality and authenticity ensures that
                                each product is crafted to deliver lasting relief.
                            </p>
                            <div className="mt-8 flex justify-center md:justify-end">
                                <button className="bg-[#6DB5AE] text-black text-lg md:text-xl px-8 py-4 rounded-full shadow-md hover:bg-green-500 hover:text-white transition duration-300">
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            src={rightImage}
                            alt="Knee Pain Illustration"
                            className="rounded-lg max-w-full md:max-w-md object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Product Display Section */}
            <div className="bg-gradient-to-br from-[#B5EFF6] to-[#5F6166] py-16">
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
                            Natural, Effective Solutions for Joint Pain
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600">
                            Helping you regain flexibility and comfort with premium Ayurvedic oils
                        </p>
                    </div>
                </div>
                <div className="container mx-auto px-4 mt-32">
                    <h1 className="text-[#01579B] text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center md:text-left">
                        Trusted By
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
                            <p className="text-xl">Follow for more</p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-1 gap-4 text-center md:text-right text-xl">
                            <p>Home</p>
                            <p>Shop</p>
                            <p>About</p>
                            <p>Contact</p>
                            <p>Return Policy</p>
                            <p>Privacy Policy</p>
                            <p>Terms & Conditions</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;