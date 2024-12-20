import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '@formspree/react';
import translations from '../utils/translations';
import LoadingSpinner from '../components/LoadingSpinner';

const UAE_CURRENCY = {
    currency: 'AED',
    symbol: 'د.إ',
};

// Fixed conversion rate (1 USD = 3.67 AED)
const USD_TO_AED_RATE = 3.67;
const SHIPPING_CHARGE = 40; // 40 AED shipping charge

const Checkout = ({ currentLang }) => {
    const paypalRef = useRef(null);
    const t = translations[currentLang] || translations.ENGLISH;
    const location = useLocation();
    const navigate = useNavigate();
    const [orderDetails, setOrderDetails] = useState(null);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [state, handleFormspreeSubmit] = useForm("xjkvpbyr");
    const [orderNumber, setOrderNumber] = useState(1);
    const [pageLoading, setPageLoading] = useState(true);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        country: 'United Arab Emirates',
        streetAddress: '',
        apartment: '',
        townCity: '',
        phone: '',
        email: '',
    });
    const [totalAED, setTotalAED] = useState(0);
    const [totalUSD, setTotalUSD] = useState(0);
    const [emailStatus, setEmailStatus] = useState('');

    // Convert AED to USD for PayPal
    const convertToUSD = (aedAmount) => {
        const usdAmount = (parseFloat(aedAmount) / USD_TO_AED_RATE);
        return Number(usdAmount.toFixed(2));
    };

    // Convert USD to AED
    const convertToAED = (usdAmount) => {
        const aedAmount = (parseFloat(usdAmount) * USD_TO_AED_RATE);
        return Number(aedAmount.toFixed(2));
    };

    useEffect(() => {
        if (!location.state) {
            navigate('/product');
            return;
        }
        setOrderDetails(location.state);

        const latestOrderNumber = localStorage.getItem("orderNumber") || 1;
        setOrderNumber(parseInt(latestOrderNumber, 10));

        // Load PayPal Script with USD (PayPal requirement)
        const addPayPalScript = async () => {
            if (window.paypal) return;

            const script = document.createElement('script');
            script.src = "https://www.paypal.com/sdk/js?client-id=AXFjMm6NYC81sxF96VKhLqOVNgR7xz3xDBUd2cx0lO4uuKIo4SVoPRctuYI733LUHwlqErZEuk0AFXcl&currency=USD";
            script.async = true;
            document.body.appendChild(script);

            script.onload = () => {
                if (paypalRef.current) {
                    const totalInAED = Number(orderDetails?.total || 0) + SHIPPING_CHARGE;
                    const totalInUSD = convertToUSD(totalInAED);

                    window.paypal.Buttons({
                        createOrder: (data, actions) => {
                            return actions.order.create({
                                purchase_units: [{
                                    amount: {
                                        currency_code: "USD",
                                        value: totalInUSD
                                    }
                                }]
                            });
                        },
                        onApprove: async (data, actions) => {
                            // Handle payment success
                            setPaymentSuccess(true);
                            // ... rest of your payment success logic
                        }
                    }).render(paypalRef.current);
                }
            };

            return () => {
                document.body.removeChild(script);
            };
        };

        addPayPalScript();
    }, [location.state, navigate]);

    const validateForm = () => {
        const errors = {};
        if (!formData.firstName.trim()) errors.firstName = 'First name is required';
        if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
        if (!formData.country.trim()) errors.country = 'Country is required';
        if (!formData.streetAddress.trim()) errors.streetAddress = 'Street address is required';
        if (!formData.townCity.trim()) errors.townCity = 'Town/City is required';

        if (!formData.phone.trim()) {
            errors.phone = 'Phone number is required';
        } else if (!/^\d{10}$/.test(formData.phone)) {
            errors.phone = 'Phone number must be exactly 10 digits';
        }

        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Email is invalid';
        }
        return errors;
    };

    const incrementOrderNumber = () => {
        const nextOrderNumber = orderNumber + 1;
        setOrderNumber(nextOrderNumber);
        localStorage.setItem("orderNumber", nextOrderNumber);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validateForm();
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            setIsSubmitting(true);

            // Initialize PayPal buttons after form validation
            if (window.paypal) {
                window.paypal.Buttons({
                    createOrder: (data, actions) => {
                        const totalInAED = orderDetails.totalAmount + SHIPPING_CHARGE;
                        const totalInUSD = convertToUSD(totalInAED);
                        return actions.order.create({
                            purchase_units: [{
                                amount: {
                                    value: totalInUSD.toFixed(2),
                                    currency_code: 'USD'
                                },
                                description: `Order for ${orderDetails.productName}`
                            }]
                        });
                    },
                    onApprove: async (data, actions) => {
                        return actions.order.capture().then(async (orderData) => {
                            try {
                                const formSubmitData = {
                                    customerDetails: {
                                        firstName: formData.firstName,
                                        lastName: formData.lastName,
                                        email: formData.email,
                                        phone: formData.phone,
                                        address: formData.streetAddress,
                                        apartment: formData.apartment,
                                        city: formData.townCity,
                                        country: formData.country,
                                    },
                                    orderDetails: {
                                        orderNumber,
                                        productName: orderDetails.productName,
                                        quantity: orderDetails.quantity,
                                        totalAmount: convertToAED(orderData.purchase_units[0].amount.value),
                                        currency: 'AED',
                                        paymentMethod: "PayPal",
                                        paymentId: orderData.id,
                                        orderStatus: "Paid",
                                    },
                                };

                                // Add retry mechanism for failed email submissions
                                const MAX_RETRIES = 3;
                                let retryCount = 0;
                                while (retryCount < MAX_RETRIES) {
                                    try {
                                        const formResponse = await handleFormspreeSubmit(formSubmitData);
                                        if (formResponse && !formResponse.error) {
                                            incrementOrderNumber();
                                            setPaymentSuccess(true);
                                            // Add explicit success message for email
                                            setEmailStatus('Email sent successfully');
                                            break;
                                        }
                                        retryCount++;
                                    } catch (error) {
                                        if (retryCount === MAX_RETRIES) {
                                            console.error("Failed to send email after multiple attempts:", error);
                                            // Handle final failure
                                            setFormErrors(prev => ({
                                                ...prev,
                                                submit: "Order completed but confirmation email failed. Please contact support."
                                            }));
                                        }
                                        await new Promise(resolve => setTimeout(resolve, 1000 * retryCount));
                                    }
                                }
                            } catch (error) {
                                console.error("Order submission error:", error);
                                setFormErrors(prev => ({
                                    ...prev,
                                    submit: "Payment successful but failed to send order details. Please contact support."
                                }));
                            }
                            setIsSubmitting(false);
                        });
                    },
                    onError: (err) => {
                        console.error('PayPal error:', err);
                        setFormErrors(prev => ({
                            ...prev,
                            submit: "Payment failed. Please try again."
                        }));
                        setIsSubmitting(false);
                    }
                }).render(paypalRef.current);
            }
        }
    };

    const renderFormField = (name, label, type = "text", required = true) => (
        <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 rounded-lg border ${formErrors[name] ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {formErrors[name] && (
                <p className="text-red-500 text-sm mt-1">{formErrors[name]}</p>
            )}
        </div>
    );


    const renderOrderSummary = () => (
        <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {translations[currentLang].checkout.order}
            </h2>
            <div className="space-y-4">
                <div className="flex justify-between py-4 border-t border-gray-200">
                    <span className="text-lg font-bold text-gray-800">
                        {translations[currentLang].checkout.total}
                    </span>
                    <span className="text-lg font-bold text-gray-800">
                        {UAE_CURRENCY.symbol} {orderDetails?.totalAmount + SHIPPING_CHARGE}
                    </span>
                </div>
            </div>
            <div className="space-y-4">
                <div className="flex justify-between font-medium pb-4 border-b border-gray-200">
                    <span className="text-gray-600">{translations[currentLang].checkout.product}</span>
                    <span className="text-gray-600">{translations[currentLang].checkout.subtotal}</span>
                </div>

                <div className="flex justify-between py-2">
                    <span className="text-gray-700">{orderDetails?.productName} x {orderDetails?.quantity}</span>
                    <span className="text-gray-700">{UAE_CURRENCY.symbol} {orderDetails?.totalAmount}</span>
                </div>

                <div className="flex justify-between py-2 border-t border-gray-200">
                    <span className="font-medium text-gray-700">{translations[currentLang].checkout.subtotal}</span>
                    <span className="text-gray-700">{UAE_CURRENCY.symbol} {orderDetails?.totalAmount}</span>
                </div>

                <div className="flex justify-between py-2 border-t border-gray-200">
                    <span className="font-medium text-gray-700">{translations[currentLang].checkout.shipping}</span>
                    <span className="text-gray-700">{UAE_CURRENCY.symbol} {SHIPPING_CHARGE}</span>
                    <div className="text-sm text-gray-500 mt-1">
                        (Delivery within 5-7 business days)
                    </div>
                </div>

                <div className="flex justify-between py-4 border-t border-gray-200">
                    <span className="text-lg font-bold text-gray-800">{translations[currentLang].checkout.total}</span>
                    <span className="text-lg font-bold text-gray-800">
                        {UAE_CURRENCY.symbol} {orderDetails?.totalAmount + SHIPPING_CHARGE}
                    </span>
                </div>
            </div>


            {/* Replace the submit button with PayPal container */}
            <div className="mt-6">
                <button
                    type="submit"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg
                        transition-all duration-200 transform hover:scale-105
                        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 mb-4"
                >
                    {isSubmitting ? (
                        <div className="flex items-center justify-center">
                            <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            {translations[currentLang].checkout.processing}
                        </div>
                    ) : (
                        translations[currentLang].checkout.order
                    )}
                </button>
                <div ref={paypalRef}></div>
            </div>
        </div>
    );
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (formErrors[name]) {
            setFormErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    useEffect(() => {
        if (!orderDetails) {
            return;
        }

        // Simulate loading delay
        const timer = setTimeout(() => {
            setPageLoading(false);
        }, 800);

        return () => clearTimeout(timer);
    }, [orderDetails]);

    if (pageLoading || !orderDetails) {
        return <LoadingSpinner />;
    }

    if (!orderDetails) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    if (paymentSuccess || state.succeeded) {
        return (
            <div className="max-w-2xl mx-auto px-4 py-16 text-center">
                <div className="bg-green-50 rounded-lg p-8 border border-green-200">
                    <h2 className="text-3xl font-bold text-green-600 mb-4">
                        {translations[currentLang].checkout.successfully}
                    </h2>
                    <p className="text-gray-600 mb-2">
                        {translations[currentLang].checkout.orderNumber}: {orderNumber}
                    </p>
                    <p className="text-gray-600 mb-6">
                        {translations[currentLang].checkout.thank}
                    </p>
                    <button
                        onClick={() => navigate('/')}
                        className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                    >
                        {translations[currentLang].checkout.continue}
                    </button>
                </div>
            </div>
        );
    }
    return (
        <div className='bg-gradient-to-b from-[#B1F3FC] to-[#737373]'>
            <div className="max-w-7xl mx-auto px-4 py-12 ">
                <h1 className="text-3xl font-bold text-center text-gray-900 mb-12">
                    {translations[currentLang].checkout.title}
                </h1>

                {formErrors.submit && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg mb-8">
                        {formErrors.submit}
                    </div>
                )}

                <div className="grid lg:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">
                                {translations[currentLang].checkout.sectitle}
                            </h2>

                            <div className="space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    {renderFormField("firstName", translations[currentLang].checkout.firstname)}
                                    {renderFormField("lastName", translations[currentLang].checkout.lastname)}
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700">
                                        {translations[currentLang].checkout.country}<span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="country"
                                        value={formData.country}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="United Arab Emirates">United Arab Emirates (AED)</option>
                                    </select>
                                </div>

                                {renderFormField("streetAddress", translations[currentLang].checkout.address)}
                                {renderFormField("apartment", translations[currentLang].checkout.clientaddress, "text", false)}
                                {renderFormField("townCity", translations[currentLang].checkout.city)}
                                {renderFormField("phone", translations[currentLang].checkout.phone, "tel")}
                                {renderFormField("email", translations[currentLang].checkout.email, "email")}
                            </div>
                        </div>
                    </div>

                    <div>
                        {renderOrderSummary()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;





