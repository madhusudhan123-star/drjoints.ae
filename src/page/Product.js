import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router';
import product from '../assets/product_one.svg';
import product2 from '../assets/product_three.svg';
import product4 from '../assets/product5.svg';
import LoadingSpinner from '../components/LoadingSpinner';

import rating from '../assets/rating.svg';
import logo from '../assets/logo.svg';
import translations from '../utils/translations';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Scroll } from 'lucide-react';
import ScrollToTop from '../components/ScrollToTop';

const Product = ({ currentLang }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ paymentMode: "" });
    const [selectedImage, setSelectedImage] = useState(0);
    const [formErrors, setFormErrors] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const t = translations[currentLang] || translations.ENGLISH;

    useEffect(() => {
        // Simulate loading delay
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        if (value) setFormErrors({}); // Clear errors on valid input
    };

    const handleCheckout = () => {
        if (!formData.paymentMode) {
            setFormErrors({ paymentMode: "Please select a payment method." });
            return;
        }

        // Extract the numeric value from the price string
        const extractNumericValue = (priceString) => {
            // Remove all non-numeric characters except decimal point
            const numericString = priceString.replace(/[^0-9.]/g, '');
            return parseFloat(numericString);
        };

        // Get base price (280 AED fixed)
        const basePrice = 280;

        // Calculate total amount
        const totalAmount = basePrice * quantity;

        navigate("/checkout", {
            state: {
                quantity,
                totalAmount: totalAmount,
                productName: t.product.name,
                unitPrice: basePrice,
                paymentMode: formData.paymentMode,
            },
        });
    };

    const productImages = [product, product2, product4];

    if (isLoading) {
        return <LoadingSpinner />;
    }

    const renderPaymentOptions = () => (
        <div className="space-y-4">
            <label
                className={`block p-4 border rounded-lg bg-white cursor-pointer transition ${formData.paymentMode === "online"
                    ? "border-green-500 bg-green-50"
                    : "border-gray-300"
                    }`}
            >
                <div className="flex justify-between font-bold items-center">
                    <div>
                        <input
                            type="radio"
                            name="paymentMode"
                            value="online"
                            checked={formData.paymentMode === "online"}
                            onChange={handleInputChange}
                            className="mr-2"
                        />
                        <span className="text-sm text-black ml-1">
                            {t.product.price2}
                        </span>
                    </div>
                    <span className="text-sm text-red-500 font-medium">
                        {t.product.off2}
                    </span>
                </div>
            </label>
        </div>
    );

    return (
        <div className='bg-gradient-to-b from-[#0060D9] to-[#00618E]'>
            <ScrollToTop />
            {/* First Section - Product Details */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Product Info Section */}
                    <div className="w-full">
                        {/* Product Name and Price */}
                        <div className="text-center md:text-left mb-6">
                            <p className="text-sm text-orange-500 font-medium">
                                {t.product.fakeqty}
                            </p>
                            <h1 className="text-3xl font-bold text-white mb-2">
                                {t.product.name}
                            </h1>
                            <div className="flex items-center justify-center md:justify-start text-lg">
                                <del className="text-gray-400 mr-2">{t.product.cutamount}</del>
                                <span className="text-white text-2xl font-bold">{t.product.amount}</span>
                            </div>
                        </div>

                        {/* Payment Options */}
                        {renderPaymentOptions()}

                        {/* Quantity Selector */}
                        <div className="flex items-center mt-4 justify-center md:justify-start">
                            <label htmlFor="quantity" className="mr-2 text-gray-700">
                                {t.product.qty}
                            </label>
                            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden shadow-sm">
                                <button
                                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                                    className="px-3 py-2 bg-white hover:bg-gray-100 border-r border-gray-300 transition-colors"
                                    aria-label="Decrease quantity"
                                >
                                    -
                                </button>

                                <input
                                    type="number"
                                    id="quantity"
                                    min="1"
                                    value={quantity}
                                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                                    className="w-12 px-2 py-2 text-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                />

                                <button
                                    onClick={() => setQuantity(prev => prev + 1)}
                                    className="px-3 py-2 bg-white hover:bg-gray-100 border-l border-gray-300 transition-colors"
                                    aria-label="Increase quantity"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Error Message */}
                        {formErrors.paymentMode && (
                            <p className="text-red-500 text-sm mt-2 text-center">
                                {formErrors.paymentMode}
                            </p>
                        )}

                        {/* Buy Now Button */}
                        <button
                            onClick={handleCheckout}
                            disabled={!formData.paymentMode}
                            className={`w-full py-3 mt-6 text-white text-lg font-medium rounded-lg ${formData.paymentMode
                                ? "bg-green-500 hover:bg-green-600"
                                : "bg-gray-300 cursor-not-allowed"
                                }`}
                        >
                            {t.product.buynow}
                        </button>
                    </div>

                    {/* Product Image Section */}
                    <div className="flex flex-col items-center w-full">
                        <Swiper
                            effect="coverflow"
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView="auto"
                            coverflowEffect={{
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: true,
                            }}
                            pagination={{ clickable: true }}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            modules={[EffectCoverflow, Pagination, Autoplay]}
                            className="w-full max-w-sm sm:max-w-md pt-6 pb-6"
                        >
                            {productImages.map((img, index) => (
                                <SwiperSlide
                                    key={index}
                                    className="bg-center bg-cover w-full h-[200px] sm:w-[300px] sm:h-[300px]"
                                >
                                    <img
                                        src={img}
                                        alt={`Product view ${index + 1}`}
                                        className="block w-full h-full rounded-lg shadow-lg"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>

            {/* About Section */}

            {/* Doctor Section */}


            {/* Rating and Footer Section */}
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
        </div >
    )
}

export default Product
