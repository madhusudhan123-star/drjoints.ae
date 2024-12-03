// import React, { useState } from 'react'
// import first from '../assets/about_first.svg'
// import painone from '../assets/pain_first.svg';
// import painsecond from '../assets/pain_second.svg';
// import painthird from '../assets/pain_three.svg';
// import painfourth from '../assets/pain_four.svg';
// import logo from '../assets/logo.svg';
// import rating from '../assets/rating.svg';


// const About = () => {
//     const card = Array(5).fill(null);
//     return (
//         <div>
//             <div className='bg-gradient-to-br from-[#B1F3FC] to-[#B6EFF6]'>
//                 <div className='flex flex-row flex-wrap p-20'>
//                     <div className='w-1/2 flex flex-col justify-center'>
//                         <h1 className='text-3xl'>All About Product</h1>
//                         <p className='text-xl'>Some other benefits of this menu? Way less prep—instead of days of chopping and prepping, these recipes can be cooked from start to finish in a matter of a couple hours, which means less time in the kitchen and more time for you to relax. And, there's no turkey to thaw out! For all of us out there who have had that memorable experience of forgetting to take the turkey out of the freezer for it to be fully cooked in time, this is a relief.</p>
//                     </div>
//                     <div className='w-1/2 flex justify-center items-center'>
//                         <img src={first} alt="product" />
//                     </div>
//                 </div>
//             </div>
//             <div>
//                 <div className='p-20'>
//                     <h1 className='text-5xl text-center pb-32'>Our Success in Numbers!</h1>
//                     <div className='flex flex-wrap justify-center'>
//                         {card.map(() => {
//                             return (
//                                 <div className='w-1/4'>
//                                     <div className='p-10 rounded-xl '>
//                                         <div className='bg-[#008DC7] rounded-xl'>
//                                             <div className='bg-[#B2EBF2] rounded-t-xl p-10 text-center'>
//                                                 <h1 className='text-5xl'>1,523,654</h1>
//                                                 <p className='text-base'>Successful Consultations</p>
//                                             </div>
//                                             <p className='p-10'>We are the world's leading experts on Ayurveda treatment with 1.5 million successful consultations and counting</p>
//                                         </div>
//                                     </div>

//                                 </div>
//                             )
//                         })}
//                     </div>
//                 </div>
//             </div>
//             <div>
//                 <div>
//                     <h1 className='text-5xl py-10'>Get Relief for this pain</h1>
//                     <div className='flex'>
//                         <div className='w-2/3 flex flex-wrap'>
//                             <div>
//                                 <div className='w-1/2'>
//                                     <img src={painone} alt="product" />
//                                 </div>
//                                 <div className='flex flex-row justify-center items-center'>
//                                     <div className='w-1/2'>
//                                         <h1 className='text-5xl'>Our Story</h1>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div>
//                                 <div className='w-1/2'>
//                                     <img src={painsecond} alt="product" />
//                                 </div>
//                                 <div className='flex flex-row justify-center items-center'>
//                                     <div className='w-1/2'>
//                                         <h1 className='text-5xl'>Our Story</h1>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div>
//                                 <div className='w-1/2'>
//                                     <img src={painthird} alt="product" />
//                                 </div>
//                                 <div className='flex flex-row justify-center items-center'>
//                                     <div className='w-1/2'>
//                                         <h1 className='text-5xl'>Our Story</h1>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className='w-1/3'>
//                             <img src={painfourth} />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="bg-gradient-to-br from-[#ADD8E6] to-[#607880]">
//                 <div>
//                     <div className='flex items-center justify-center gap-10'>
//                         <h1 className='text-3xl'>Average Store Rating</h1>
//                         <img src={rating} alt="review" />
//                         <h1 className='text-3xl'>18.3K Customer Reviews</h1>
//                     </div>
//                 </div>
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
//     )
// }

// export default About

import React from 'react'
import first from '../assets/about_first.svg'
import painone from '../assets/pain_first.svg';
import painsecond from '../assets/pain_second.svg';
import painthird from '../assets/pain_three.svg';
import painfourth from '../assets/pain_four.svg';
import logo from '../assets/logo.svg';
import rating from '../assets/rating.svg';

const About = () => {
    const card = Array(5).fill(null);
    return (
        <div>
            {/* First Section */}
            <div className='bg-gradient-to-br from-[#B1F3FC] to-[#B6EFF6]'>
                <div className='flex flex-col md:flex-row p-6 md:p-20'>
                    <div className='w-full md:w-1/2 flex flex-col justify-center mb-6 md:mb-0'>
                        <h1 className='text-2xl md:text-3xl mb-4'>All About Product</h1>
                        <p className='text-base md:text-xl'>Some other benefits of this menu? Way less prep—instead of days of chopping and prepping, these recipes can be cooked from start to finish in a matter of a couple hours, which means less time in the kitchen and more time for you to relax. And, there's no turkey to thaw out! For all of us out there who have had that memorable experience of forgetting to take the turkey out of the freezer for it to be fully cooked in time, this is a relief.</p>
                    </div>
                    <div className='w-full md:w-1/2 flex justify-center items-center'>
                        <img src={first} alt="product" className='max-w-full h-auto' />
                    </div>
                </div>
            </div>

            {/* Success Numbers Section */}
            <div className='bg-gradient-to-br from-[#B4F0F8] to-[#E0F7FA]'>
                <div className='p-6 md:p-20'>
                    <h1 className='text-3xl md:text-5xl text-center pb-10 md:pb-32'>Our Success in Numbers!</h1>
                    <div className='flex flex-wrap justify-center'>
                        {card.map((_, index) => (
                            <div key={index} className='w-full sm:w-1/2 md:w-1/4 p-2'>
                                <div className='p-4 md:p-10 rounded-xl'>
                                    <div className='bg-[#008DC7] rounded-xl'>
                                        <div className='bg-[#B2EBF2] rounded-t-xl p-6 md:p-10 text-center'>
                                            <h1 className='text-3xl md:text-5xl'>1,523,654</h1>
                                            <p className='text-sm md:text-base'>Successful Consultations</p>
                                        </div>
                                        <p className='p-4 md:p-10'>We are the world's leading experts on Ayurveda treatment with 1.5 million successful consultations and counting</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Pain Relief Section */}
            <div className='bg-gradient-to-br from-[#E0F7FA] to-[#B2EBF2]'>
                <h1 className='text-2xl md:text-5xl text-center py-6 md:py-10'>Get Relief for this pain</h1>
                <div className='flex flex-col md:flex-row'>
                    <div className='w-full md:w-2/3 flex flex-wrap justify-center'>
                        <div className='w-full md:w-1/2 p-2'>
                            <div>
                                <img src={painone} alt="product" className='w-full' />
                            </div>
                            <div className='flex justify-center items-center'>
                                <h1 className='text-2xl md:text-5xl'>Our Story</h1>
                            </div>
                        </div>
                        <div className='w-full md:w-1/2 p-2'>
                            <div>
                                <img src={painsecond} alt="product" className='w-full' />
                            </div>
                            <div className='flex justify-center items-center'>
                                <h1 className='text-2xl md:text-5xl'>Our Story</h1>
                            </div>
                        </div>
                        <div className='w-full md:w-1/2 p-2'>
                            <div>
                                <img src={painthird} alt="product" className='w-full' />
                            </div>
                            <div className='flex justify-center items-center'>
                                <h1 className='text-2xl md:text-5xl'>Our Story</h1>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-1/3 p-2'>
                        <img src={painfourth} alt="pain fourth" className='w-full' />
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <div className="bg-gradient-to-br from-[#ADD8E6] to-[#607880]">
                <div className='flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 py-6 text-center'>
                    <h1 className='text-xl md:text-3xl'>Average Store Rating</h1>
                    <img src={rating} alt="review" className='max-w-full h-auto' />
                    <h1 className='text-xl md:text-3xl'>18.3K Customer Reviews</h1>
                </div>

                <div className="w-full py-10 md:py-32 flex justify-center">
                    <div className="w-[90%] h-[1px] bg-black"></div>
                </div>

                <div className="flex flex-col md:flex-row justify-between">
                    <div className="flex flex-col my-6 md:my-10 px-6 md:px-10">
                        <img src={logo} className="w-40 md:w-60 self-center md:self-start" alt="logo" />
                        <p className="text-xl md:text-2xl pt-6 text-center md:text-left">Follow for more</p>
                    </div>
                    <div className="grid grid-cols-2 md:flex md:flex-row gap-4 p-6 md:p-20 text-base md:text-2xl text-center md:text-left">
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
    )
}

export default About