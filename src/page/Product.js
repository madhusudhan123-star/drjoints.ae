import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import product from '../assets/product_one.svg';
import product1 from '../assets/product_two.svg';
import product2 from '../assets/product_three.svg';
import product3 from '../assets/product_about.svg';
import doctor from '../assets/doctor.svg';
import rating from '../assets/rating.svg';
import logo from '../assets/logo.svg';
import translations from '../utils/translations';
import { Link } from 'react-router-dom';


const Product = ({ currentLang }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ paymentMode: "" });
    const [selectedImage, setSelectedImage] = useState(0);
    const [formErrors, setFormErrors] = useState({});
    const [quantity, setQuantity] = useState(1);
    const t = translations[currentLang] || translations.ENGLISH; 
    const basePrice = 6990; // Original price
    const codPrice = 3495; // Price for COD
    const onlinePrice = 3145; // Price for Online Payment

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

        const selectedPrice =
            formData.paymentMode === "online" ? onlinePrice : codPrice;

        navigate("/checkout", {
            state: {
                quantity,
                totalAmount: selectedPrice * quantity,
                productName: "Pain Relief Oil For Muscles",
                unitPrice: selectedPrice,
                paymentMode: formData.paymentMode,
            },
        });
    };

    const productImages = [product, product1, product2];

    return (
        <div className='bg-gradient-to-b from-[#B1F3FC] to-[#737373]'>
            {/* First Section - Product Details */}
            <div className=''>
                <div className="max-w-7xl mx-auto px-4 py-12">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
                        {/* Product Info Section */}
                        <div className="space-y-8">
                            <h1 className="text-3xl font-bold text-center mb-12">
                                {t.product.name}
                            </h1>

                            {/* Product Images for Mobile View */}
                            <div className="md:hidden space-y-4 mb-8">
                                {/* Main Image */}
                                <div className="bg-gray-100 rounded-lg overflow-hidden">
                                    <img
                                        src={productImages[selectedImage]}
                                        alt="DR. Joints Pain Relief Oil"
                                        className="w-full h-auto object-contain"
                                    />
                                </div>

                                {/* Thumbnail Gallery */}
                                <div className="grid grid-cols-4 gap-2">
                                    {productImages.map((img, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setSelectedImage(index)}
                                            className={`border-2 rounded-lg overflow-hidden ${selectedImage === index ? 'border-blue-500' : 'border-gray-200'}`}
                                        >
                                            <img
                                                src={img}
                                                alt={`Product view ${index + 1}`}
                                                className="w-full h-auto object-contain"
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Quantity and Buy Section */}
                            <div className="max-w-md mx-auto px-4">
                                {/* Sold and Price Info */}
                                <div className="mb-6">
                                    <p className="text-sm text-red-500 font-medium">
                                        {t.product.fakeqty}
                                    </p>
                                    <h1 className="text-2xl font-bold text-gray-800">Your Price:</h1>
                                    <div className="flex items-center text-lg mt-2">
                                        <del className="text-gray-400 mr-2">USD 6990</del>
                                        <span className="text-green-600 text-2xl font-bold">USD 3495</span>
                                    </div>
                                </div>

                                {/* Payment Options */}
                                <div className="space-y-4">
                                    {/* COD Option */}
                                    <label
                                        className={`block p-4 border rounded-lg cursor-pointer ${formData.paymentMode === "cod"
                                            ? "border-green-500 bg-green-50"
                                            : "border-gray-300"
                                            }`}
                                    >
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <input
                                                    type="radio"
                                                    name="paymentMode"
                                                    value="cod"
                                                    checked={formData.paymentMode === "cod"}
                                                    onChange={handleInputChange}
                                                    className="mr-2"
                                                />
                                                <span className="font-medium text-gray-800">{codPrice}</span>{" "}
                                                <span className="text-sm text-gray-500">{t.product.price}</span>
                                            </div>
                                            <span className="text-sm text-red-500 font-medium">
                                                {t.product.off}
                                            </span>
                                        </div>
                                    </label>

                                    {/* Online Payment Option */}
                                    <label
                                        className={`block p-4 border rounded-lg cursor-pointer ${formData.paymentMode === "online"
                                            ? "border-green-500 bg-green-50"
                                            : "border-gray-300"
                                            }`}
                                    >
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <input
                                                    type="radio"
                                                    name="paymentMode"
                                                    value="online"
                                                    checked={formData.paymentMode === "online"}
                                                    onChange={handleInputChange}
                                                    className="mr-2"
                                                />
                                                <span className="font-medium text-gray-800">₹{onlinePrice}</span>{" "}
                                                <span className="text-sm text-gray-500">{t.product.price2}</span>
                                            </div>
                                            <span className="text-sm text-red-500 font-medium">
                                                {t.product.off2}
                                            </span>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1">
                                            <a href='/checkout'>
                                                {t.product.buynow}
                                            </a>
                                        </p>
                                    </label>
                                </div>

                                {/* Quantity Selector */}
                                <div className="flex items-center mt-4 justify-center">
                                    <label htmlFor="quantity" className="mr-2 text-gray-700">
                                        {t.product.qty}
                                    </label>
                                    <input
                                        type="number"
                                        id="quantity"
                                        min="1"
                                        value={quantity}
                                        onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                                        className="w-16 px-3 py-2 border border-gray-300 rounded-md"
                                    />
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
                        </div>

                        {/* Product Images Section - Hidden on Mobile */}
                        <div className="space-y-4 hidden md:block">
                            {/* Main Image */}
                            <div className="bg-gray-100 rounded-lg overflow-hidden">
                                <img
                                    src={productImages[selectedImage]}
                                    alt="DR. Joints Pain Relief Oil"
                                    className="w-full h-auto object-contain"
                                />
                            </div>

                            {/* Thumbnail Gallery */}
                            <div className="grid grid-cols-4 gap-2">
                                {productImages.map((img, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(index)}
                                        className={`border-2 rounded-lg overflow-hidden ${selectedImage === index ? 'border-blue-500' : 'border-gray-200'}`}
                                    >
                                        <img
                                            src={img}
                                            alt={`Product view ${index + 1}`}
                                            className="w-full h-auto object-contain"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div className=''>
                <div className='flex flex-col md:flex-row gap-16'>
                    <div className='w-full md:w-1/2'>
                        <img src={product3} alt="Product" className="w-full h-auto" />
                    </div>
                    <div className='w-full md:w-1/2 p-4 md:p-0'>
                        <p className='md:pt-32 md:w-4/5 text-xl md:text-2xl pb-10 text-center md:text-left'>
                            {t.product.para}
                        </p>
                    </div>
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

            {/* Rating and Footer Section */}
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

export default Product