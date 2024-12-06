// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-cards';

// // import required modules
// import { EffectCards } from 'swiper/modules';

// export default function Carousel() {
//     return (
//         <>
//             <Swiper
//                 effect={'cards'}
//                 grabCursor={true}
//                 modules={[EffectCards]}
//                 className="mySwiper"
//             >
//                 <SwiperSlide>Slide 1</SwiperSlide>
//                 <SwiperSlide>Slide 2</SwiperSlide>
//                 <SwiperSlide>Slide 3</SwiperSlide>
//                 <SwiperSlide>Slide 4</SwiperSlide>
//                 <SwiperSlide>Slide 5</SwiperSlide>
//                 <SwiperSlide>Slide 6</SwiperSlide>
//                 <SwiperSlide>Slide 7</SwiperSlide>
//                 <SwiperSlide>Slide 8</SwiperSlide>
//                 <SwiperSlide>Slide 9</SwiperSlide>
//             </Swiper>
//         </>
//     );
// }


import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

const Carousel = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <Swiper
                effect="cards"
                grabCursor={true}
                modules={[EffectCards]}
                className="w-60 h-80"
            >
                <SwiperSlide className="flex items-center justify-center bg-red-600 rounded-lg">
                    <img
                        src="https://via.placeholder.com/240x320?text=Joint+Pain+1"
                        alt="Joint Pain 1"
                        className="rounded-lg object-cover w-full h-full"
                    />
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center bg-blue-600 rounded-lg">
                    <img
                        src="https://via.placeholder.com/240x320?text=Joint+Pain+2"
                        alt="Joint Pain 2"
                        className="rounded-lg object-cover w-full h-full"
                    />
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center bg-green-600 rounded-lg">
                    <img
                        src="https://via.placeholder.com/240x320?text=Joint+Pain+3"
                        alt="Joint Pain 3"
                        className="rounded-lg object-cover w-full h-full"
                    />
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center bg-orange-600 rounded-lg">
                    <img
                        src="https://via.placeholder.com/240x320?text=Joint+Pain+4"
                        alt="Joint Pain 4"
                        className="rounded-lg object-cover w-full h-full"
                    />
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center bg-yellow-600 rounded-lg">
                    <img
                        src="https://via.placeholder.com/240x320?text=Joint+Pain+5"
                        alt="Joint Pain 5"
                        className="rounded-lg object-cover w-full h-full"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Carousel;
