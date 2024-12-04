import React from 'react'
import first from '../assets/about_first.svg'
import painone from '../assets/pain_first.svg';
import painsecond from '../assets/pain_second.svg';
import painthird from '../assets/pain_three.svg';
import painfourth from '../assets/pain_four.svg';
import logo from '../assets/logo.svg';
import rating from '../assets/rating.svg';
import { Link } from 'react-router-dom'
import translations from '../utils/translations';


const About = ({ currentLang }) => {
    const t = translations[currentLang] || translations.ENGLISH;
    const card = Array(5).fill(null);
    return (
        <div className='bg-gradient-to-b from-[#B1F3FC] to-[#737373]'>
            {/* First Section */}
            <div className=''>
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
            <div className=''>
                <div className='p-6 md:p-20'>
                    <h1 className='text-3xl md:text-5xl text-center pb-10 md:pb-16'>Our Success in Numbers!</h1>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8'>
                        {t.about.successData.map((data, index) => (
                            <div key={index} className='flex justify-center'>
                                <div className='w-full max-w-[300px] rounded-xl overflow-hidden shadow-lg'>
                                    <div className='bg-[#008DC7] rounded-xl'>
                                        <div className='bg-[#B2EBF2] rounded-t-xl p-6 md:p-10 text-center'>
                                            <h1 className='text-3xl md:text-5xl font-bold'>{data.value}</h1>
                                            <p className='text-sm md:text-base'>{data.id}</p>
                                        </div>
                                        <p className='p-4 md:p-6 text-white text-center'>{data.label}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Pain Relief Section */}
            <div className=''>
                <h1 className='text-2xl md:text-5xl text-center py-6 md:py-10'>{t.about.relief}</h1>
                <div className='flex flex-col md:flex-row'>
                    <div className='w-full md:w-2/3 flex flex-wrap justify-center'>
                        <div className='w-full md:w-1/2 p-2'>
                            <div>
                                <img src={painone} alt="product" className='w-full' />
                            </div>
                            <div className='flex justify-center items-center'>
                                <h1 className='text-2xl md:text-5xl'>{t.about.pain1}</h1>
                            </div>
                        </div>
                        <div className='w-full md:w-1/2 p-2'>
                            <div>
                                <img src={painsecond} alt="product" className='w-full' />
                            </div>
                            <div className='flex justify-center items-center'>
                                <h1 className='text-2xl md:text-5xl'>{t.about.pain1}</h1>
                            </div>
                        </div>
                        <div className='w-full md:w-1/2 p-2'>
                            <div>
                                <img src={painthird} alt="product" className='w-full' />
                            </div>
                            <div className='flex justify-center items-center'>
                                <h1 className='text-2xl md:text-5xl'>{t.about.pain1}</h1>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-1/3 p-2'>
                        <img src={painfourth} alt="pain fourth" className='w-full' />
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <div className="">
                {/* Rating */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 p-4">
                    <h1 className='text-xl md:text-3xl'>{t.product.rating}</h1>
                    <img src={rating} alt="review" className="w-32 md:w-auto" />
                    <h1 className='text-xl md:text-3xl'>{t.product.rating2}</h1>
                </div>
                <div className="container mx-auto px-4 pt-32">
                    <div className="w-full h-[1px] bg-black mb-10"></div>

                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
                            <img src={logo} alt="Dr. Joints Logo" className="w-48 mb-6" />
                            <button className="bg-[#6DB5AE] text-black text-lg md:text-xl px-8 py-4 rounded-full shadow-md hover:bg-green-500 hover:text-white transition duration-300">Shop Now</button>
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
    )
}

export default About