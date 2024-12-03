// import React, { useState } from 'react'
// import { useNavigate } from 'react-router';
// import logo from '../assets/logo.svg';
// import product from '../assets/product_one.svg';
// import product1 from '../assets/product_two.svg';
// import product2 from '../assets/product_three.svg';
// import product3 from '../assets/product_about.svg';
// import doctor from '../assets/doctor.svg';
// import rating from '../assets/rating.svg';

// const Product = () => {
//     const navigate = useNavigate();
//     const [formData, setFormData] = useState({ paymentMode: "" });
//     const [selectedImage, setSelectedImage] = useState(0);

//     const [formErrors, setFormErrors] = useState({});
//     const [quantity, setQuantity] = useState(1);

//     const basePrice = 6990; // Original price
//     const codPrice = 3495; // Price for COD
//     const onlinePrice = 3145; // Price for Online Payment

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({
//             ...prev,
//             [name]: value,
//         }));
//         if (value) setFormErrors({}); // Clear errors on valid input
//     };

//     const handleCheckout = () => {
//         if (!formData.paymentMode) {
//             setFormErrors({ paymentMode: "Please select a payment method." });
//             return;
//         }

//         const selectedPrice =
//             formData.paymentMode === "online" ? onlinePrice : codPrice;

//         navigate("/checkout", {
//             state: {
//                 quantity,
//                 totalAmount: selectedPrice * quantity,
//                 productName: "Pain Relief Oil For Muscles",
//                 unitPrice: selectedPrice,
//                 paymentMode: formData.paymentMode,
//             },
//         });
//     };

//     const productImages = [product, product1, product2];

//     return (
//         <div>
//             <div className='bg-gradient-to-br from-[#B1F3FC] to-[#B6EFF6]'>
//                 <div className="max-w-7xl mx-auto px-4 py-12">
//                     <div className="grid md:grid-cols-2 gap-12">
//                         {/* Product Info Section */}
//                         <div className="space-y-8">
//                             <h1 className="text-3xl font-bold text-center mb-12">
//                                 Name of the Product
//                             </h1>
//                             {/* Quantity and Buy Button */}
//                             <div className="flex items-center gap-4">

//                                 <div className="max-w-md mx-auto px-4 py-12">
//                                     {/* Header */}
//                                     <div className="mb-6">
//                                         <p className="text-sm text-red-500 font-medium">
//                                             23 sold on last 3 hours
//                                         </p>
//                                         <h1 className="text-2xl font-bold text-gray-800">Your Price:</h1>
//                                         <div className="flex items-center text-lg mt-2">
//                                             <del className="text-gray-400 mr-2">USD 6990</del>
//                                             <span className="text-green-600 text-2xl font-bold">USD 3495</span>
//                                         </div>
//                                     </div>

//                                     {/* Payment Options */}
//                                     <div className="space-y-4">
//                                         {/* COD Option */}
//                                         <label
//                                             className={`block p-4 border rounded-lg cursor-pointer ${formData.paymentMode === "cod"
//                                                 ? "border-green-500 bg-green-50"
//                                                 : "border-gray-300"
//                                                 }`}
//                                         >
//                                             <div className="flex justify-between items-center">
//                                                 <div>
//                                                     <input
//                                                         type="radio"
//                                                         name="paymentMode"
//                                                         value="cod"
//                                                         checked={formData.paymentMode === "cod"}
//                                                         onChange={handleInputChange}
//                                                         className="mr-2"
//                                                     />
//                                                     <span className="font-medium text-gray-800">₹{codPrice}</span>{" "}
//                                                     <span className="text-sm text-gray-500">USD 3495-COD</span>
//                                                 </div>
//                                                 <span className="text-sm text-red-500 font-medium">
//                                                     Flat 50% OFF
//                                                 </span>
//                                             </div>
//                                         </label>

//                                         {/* Online Payment Option */}
//                                         <label
//                                             className={`block p-4 border rounded-lg cursor-pointer ${formData.paymentMode === "online"
//                                                 ? "border-green-500 bg-green-50"
//                                                 : "border-gray-300"
//                                                 }`}
//                                         >
//                                             <div className="flex justify-between items-center">
//                                                 <div>
//                                                     <input
//                                                         type="radio"
//                                                         name="paymentMode"
//                                                         value="online"
//                                                         checked={formData.paymentMode === "online"}
//                                                         onChange={handleInputChange}
//                                                         className="mr-2"
//                                                     />
//                                                     <span className="font-medium text-gray-800">₹{onlinePrice}</span>{" "}
//                                                     <span className="text-sm text-gray-500">USD 3145-Online Delivery</span>
//                                                 </div>
//                                                 <span className="text-sm text-red-500 font-medium">
//                                                     Flat 70% OFF
//                                                 </span>
//                                             </div>
//                                             <p className="text-xs text-gray-500 mt-1">
//                                                 Buy Now
//                                             </p>
//                                         </label>
//                                     </div>

//                                     {/* Error Message */}
//                                     {formErrors.paymentMode && (
//                                         <p className="text-red-500 text-sm mt-2">
//                                             {formErrors.paymentMode}
//                                         </p>
//                                     )}

//                                     {/* Buy Now Button */}
//                                     <button
//                                         onClick={handleCheckout}
//                                         disabled={!formData.paymentMode}
//                                         className={`w-full py-3 mt-6 text-white text-lg font-medium rounded-lg ${formData.paymentMode
//                                             ? "bg-green-500 hover:bg-green-600"
//                                             : "bg-gray-300 cursor-not-allowed"
//                                             }`}
//                                     >
//                                         Buy Now
//                                     </button>
//                                 </div>
//                                 <div className="flex items-center">
//                                     <label htmlFor="quantity" className="mr-2 text-gray-700">
//                                         Qty
//                                     </label>
//                                     <input
//                                         type="number"
//                                         id="quantity"
//                                         min="1"
//                                         value={quantity}
//                                         onChange={(e) => setQuantity(parseInt(e.target.value))}
//                                         className="w-16 px-3 py-2 border border-gray-300 rounded-md"
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                         {/* Product Images Section */}
//                         <div className="space-y-4">
//                             {/* Main Image */}
//                             <div className="bg-gray-100 rounded-lg overflow-hidden">
//                                 <img
//                                     src={productImages[selectedImage]}
//                                     alt="DR. Joints Pain Relief Oil"
//                                     className="w-full h-auto object-contain"
//                                 />
//                             </div>

//                             {/* Thumbnail Gallery */}
//                             <div className="grid grid-cols-4 gap-2">
//                                 {productImages.map((img, index) => (
//                                     <button
//                                         key={index}
//                                         onClick={() => setSelectedImage(index)}
//                                         className={`border-2 rounded-lg overflow-hidden ${selectedImage === index ? 'border-blue-500' : 'border-gray-200'
//                                             }`}
//                                     >
//                                         <img
//                                             src={img}
//                                             alt={`Product view ${index + 1}`}
//                                             className="w-full h-auto object-contain"
//                                         />
//                                     </button>
//                                 ))}
//                             </div>
//                         </div>


//                     </div>

//                 </div>
//             </div>
//             <div className='bg-gradient-to-br from-[#ADD8E6] to-[#607880]'>
//                 <div className='flex'>
//                     <div className='w-1/2'>
//                         <img src={product3} />
//                     </div>
//                     <div className='w-1/2'>
//                         <p className='pt-32 w-4/5 text-2xl pb-10'>
//                             Sometimes—even knowing that you are required to avoid addressing personal information and that your response to “Tell Me About Yourself” or similar open-ended questions are required to be carefully planned—it can be hard to get started. To keep you on track, here are few questions to ask as you brainstorm ways to respond and structure your answer:
//                         </p>
//                         <button className='bg-[#00B5FF] py-6 px-8 text-2xl rounded-3xl'>
//                             About Actor
//                         </button>
//                     </div>
//                 </div>
//             </div>
//             <div className='flex relative'>
//                 <img src={doctor} alt='doctor' className='w-full' />
//                 <div className='absolute  bottom-0 w-full flex justify-center items-center'>
//                     <div className='bg-[#ffffff90] w-1/2 p-10'>
//                         <h1 className='text-6xl'>Trusted By the Doctor</h1>
//                         <p className='text-2xl pl-5'>Sometimes—even knowing that you are required to avoid addressing personal information and that your response to “Tell Me About Yourself” or similar open-ended questions are required to be carefully planned—it can be hard to get started. To keep you on track, here are few questions to ask as you brainstorm ways to respond and structure your answer:
//                         </p>
//                     </div>
//                 </div>
//             </div>
//             <div className="bg-gradient-to-br from-[#ADD8E6] to-[#607880]">\
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

// export default Product


import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import logo from '../assets/logo.svg';
import product from '../assets/product_one.svg';
import product1 from '../assets/product_two.svg';
import product2 from '../assets/product_three.svg';
import product3 from '../assets/product_about.svg';
import doctor from '../assets/doctor.svg';
import rating from '../assets/rating.svg';

const Product = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ paymentMode: "" });
    const [selectedImage, setSelectedImage] = useState(0);

    const [formErrors, setFormErrors] = useState({});
    const [quantity, setQuantity] = useState(1);

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
        <div>
            {/* First Section - Product Details */}
            <div className='bg-gradient-to-br from-[#B1F3FC] to-[#B6EFF6]'>
                <div className="max-w-7xl mx-auto px-4 py-12">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
                        {/* Product Info Section */}
                        <div className="space-y-8">
                            <h1 className="text-3xl font-bold text-center mb-12">
                                Name of the Product
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
                                        23 sold on last 3 hours
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
                                                <span className="font-medium text-gray-800">₹{codPrice}</span>{" "}
                                                <span className="text-sm text-gray-500">USD 3495-COD</span>
                                            </div>
                                            <span className="text-sm text-red-500 font-medium">
                                                Flat 50% OFF
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
                                                <span className="text-sm text-gray-500">USD 3145-Online Delivery</span>
                                            </div>
                                            <span className="text-sm text-red-500 font-medium">
                                                Flat 70% OFF
                                            </span>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1">
                                            Buy Now
                                        </p>
                                    </label>
                                </div>

                                {/* Quantity Selector */}
                                <div className="flex items-center mt-4 justify-center">
                                    <label htmlFor="quantity" className="mr-2 text-gray-700">
                                        Qty
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
                                    Buy Now
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
            <div className='bg-gradient-to-br from-[#ADD8E6] to-[#607880]'>
                <div className='flex flex-col md:flex-row'>
                    <div className='w-full md:w-1/2'>
                        <img src={product3} alt="Product" className="w-full h-auto" />
                    </div>
                    <div className='w-full md:w-1/2 p-4 md:p-0'>
                        <p className='md:pt-32 md:w-4/5 text-xl md:text-2xl pb-10 text-center md:text-left'>
                            Sometimes—even knowing that you are required to avoid addressing personal information and that your response to "Tell Me About Yourself" or similar open-ended questions are required to be carefully planned—it can be hard to get started. To keep you on track, here are few questions to ask as you brainstorm ways to respond and structure your answer:
                        </p>
                        <div className="flex justify-center md:block">
                            <button className='bg-[#00B5FF] py-4 md:py-6 px-6 md:px-8 text-xl md:text-2xl rounded-3xl'>
                                About Actor
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Doctor Section */}
            <div className='relative'>
                <img src={doctor} alt='doctor' className='w-full' />
                <div className='absolute bottom-0 w-full flex justify-center items-center'>
                    <div className='bg-[#ffffff90] w-full md:w-1/2 p-4 md:p-10 text-center'>
                        <h1 className='text-3xl md:text-6xl'>Trusted By the Doctor</h1>
                        <p className='text-base md:text-2xl md:pl-5'>
                            Sometimes—even knowing that you are required to avoid addressing personal information and that your response to "Tell Me About Yourself" or similar open-ended questions are required to be carefully planned—it can be hard to get started. To keep you on track, here are few questions to ask as you brainstorm ways to respond and structure your answer:
                        </p>
                    </div>
                </div>
            </div>

            {/* Rating and Footer Section */}
            <div className="bg-gradient-to-br from-[#ADD8E6] to-[#607880]">
                {/* Rating */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 p-4">
                    <h1 className='text-xl md:text-3xl'>Average Store Rating</h1>
                    <img src={rating} alt="review" className="w-32 md:w-auto" />
                    <h1 className='text-xl md:text-3xl'>18.3K Customer Reviews</h1>
                </div>

                {/* Divider */}
                <div className="w-full py-8 md:py-32 flex justify-center">
                    <div className="w-[90%] h-[1px] bg-black"></div>
                </div>

                {/* Footer */}
                <div className="flex flex-col md:flex-row justify-between p-4 md:p-0">
                    <div className="flex flex-col my-4 md:my-10 md:px-10 items-center md:items-start">
                        <img src={logo} className="w-40 md:w-60" alt="Logo" />
                        <p className="text-xl md:text-2xl pt-4 md:pt-10">Follow for more</p>
                    </div>
                    <div className="grid grid-cols-3 md:flex-row md:flex gap-4 p-4 md:p-20 text-base md:text-2xl text-center">
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

export default Product