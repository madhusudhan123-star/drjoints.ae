import { ChevronLeft, ChevronRight, ThumbsUp, Store, Users, UserCircle, Star, Currency } from 'lucide-react';
import painone from '../assets/pain_first.svg';
import painsecond from '../assets/pain_second.svg';
import painthird from '../assets/pain_three.svg';
import painfourth from '../assets/legpain.jpeg';
const translations = {
    ENGLISH: {
        home: {
            title: "Pain Relief at Your Fingertips",
            titlesec: "Dr. Joints Does It Right!",
            button: "Buy Now",
            question: "What Makes Dr. Joints Pain Relief Oil the Best Choice",
            answer: "Experience the ultimate in natural pain relief with Dr. Joints Pain Relief Oil. Expertly crafted with a blend of 100% natural and Ayurvedic ingredients, our oil is designed to address the root causes of joint and muscle discomfort, not just mask the symptoms. Backed by modern science and enriched with the healing power of ancient herbal wisdom, Dr. Joints Pain Relief Oil offers fast-acting, long-lasting relief. We prioritize your overall well-being and aim to restore mobility, comfort, and quality of life so you can live pain-free and to the fullest.",
            title2: "Your Natural Path to Pain-Free Living",
            sub2: "Empowering you to move freely with premium Ayurvedic healing",
            trust: "Trusted By Leading Healthcare Professionals",
            follow: "Join Our Journey to Natural Wellness",
            client: "Life-Changing Stories from Dr. Joints Users",
            goproduct: "Buy Now",
            reviews: [
                { id: 1, name: "Ahmed Al Mansoori", review: "As a construction site manager, knee pain was hampering my work. Dr. Joints gave me back my mobility and professional edge!", stars: 5 },
                { id: 2, name: "Fatima Hassan", review: "A yoga instructor's dream! Professional, natural, and incredibly effective for my joint flexibility.", stars: 4 },
                { id: 3, name: "Sultan Al Suwaidi", review: "Living with arthritis in Dubai's climate is challenging. This oil is a game-changer for my daily comfort.", stars: 5 },
                { id: 4, name: "Layla Bin Drai", review: "As a fitness enthusiast, quick recovery is crucial. Exceptional quality and fast relief!", stars: 4 },
                { id: 5, name: "Khalid Mohamed", review: "Working long hours in air-conditioned offices can cause joint stiffness. Dr. Joints exceeded all my expectations!", stars: 5 },
                { id: 6, name: "Mariam Al Maktoum", review: "A healthcare professional's honest recommendation. Supportive product that truly delivers!", stars: 4 },
                { id: 7, name: "Omar Abdullah", review: "As a runner dealing with persistent knee pain, this is my life-changing solution!", stars: 5 },
                { id: 8, name: "Sara Al Fahim", review: "Perfect for active professionals in Dubai. Natural remedy that provides instant relief!", stars: 5 },
                { id: 9, name: "Ahmed Al Mansoori", review: "As a construction site manager, knee pain was hampering my work. Dr. Joints gave me back my mobility and professional edge!", stars: 5 },
                { id: 10, name: "Fatima Hassan", review: "A yoga instructor's dream! Professional, natural, and incredibly effective for my joint flexibility.", stars: 4 },
                { id: 11, name: "Sultan Al Suwaidi", review: "Living with arthritis in Dubai's climate is challenging. This oil is a game-changer for my daily comfort.", stars: 5 },
                { id: 12, name: "Layla Bin Drai", review: "As a fitness enthusiast, quick recovery is crucial. Exceptional quality and fast relief!", stars: 4 },
                { id: 13, name: "Khalid Mohamed", review: "Working long hours in air-conditioned offices can cause joint stiffness. Dr. Joints exceeded all my expectations!", stars: 5 },
                { id: 14, name: "Mariam Al Maktoum", review: "A healthcare professional's honest recommendation. Supportive product that truly delivers!", stars: 4 },
                { id: 15, name: "Omar Abdullah", review: "As a runner dealing with persistent knee pain, this is my life-changing solution!", stars: 5 },
                { id: 16, name: "Sara Al Fahim", review: "Perfect for active professionals in Dubai. Natural remedy that provides instant relief!", stars: 5 }

            ],
            Youtube: "nNl670iiZxo",
            joint1: "Elbow Pain",
            joint2: "Knee Pain",
            homec1: "Relieve Joint, Muscle, and Body Pain Naturally – Feel Better, Move Freely.",
            homec2: "Organic oils made from natural herbs and ingredients",
            bannerimg: "Say Goodbye to Pain – Discover Natural Solutions for Lasting Relief.",
            whatsapp: "9030202444",
        },
        navbar: {
            home: "ORDER NOW",
            about: "ABOUT",
            contact: "CONTACT",
        },
        navLinks: [
            { id: "Home", path: "/", label: "HOME" },
            { id: "product", path: "/product", label: "ORDER NOW" },
            { id: "about", path: "/about", label: "ABOUT" },
            { id: "contact", path: "/contact", label: "CONTACT" },
        ],
        footer: [
            { id: "HOME", path: "/", label: "HOME" },
            { id: "SHOP", path: "/product", label: "ORDER NOW" },
            { id: "ABOUT", path: "/about", label: "OUR STORY" },
            { id: "CONTACT", path: "/contact", label: "CONTACT" },
            { id: "RETURN POLICY", path: "/return", label: "RETURN POLICY" },
            { id: "PRIVACY POLICY", path: "/private", label: "PRIVACY POLICY" },
            { id: "TERMS & CONDITIONS", path: "/terms", label: "TERMS & CONDITIONS" },
            { id: "SHIPPING POLICY", path: "/ship", label: "SHIPPING POLICY" },
            { id: "CANCELLATION POLICY", path: "/cancel", label: "CANCELLATION POLICY" },

        ],
        product: {
            name: "Dr. Joints Pain Relief Oil - Natural Healing",
            fakeqty: "23 bottles sold in the last 3 hours",
            // off2: "Flat 70% OFF on Bulk Purchase",
            buynow: "Buy Now",
            qty: "Quantity",
            cutamount: "د.إ 360", // Updated from ₹ 6,672
            amount: "د.إ 280", // Updated from ₹ 6,474
            price2: "د.إ 280 - Express Online Delivery",
            para: `Unleash the power of natural healing with Dr. Joints Pain Relief Oil. Our revolutionary Ayurvedic formula is meticulously crafted to provide instant relief and long-term healing. Packed with potent herbal ingredients, our oil penetrates deep to address joint and muscle pain at its source. We're not just offering a product – we're providing a holistic path to wellness, empowering you to reclaim your mobility and live life to the fullest.`,
            doctor: "Endorsed by Healthcare Professionals",
            docpara: "Trusted solution for natural, effective joint pain relief by medical experts.",
            rating: "Average Customer Rating",
            rating2: "18,300+ Verified Reviews",
            Currency: "India"
        },
        about: {
            title: "The Dr. Joints Healing",
            sub: "Dr. Joints Oil is a premium herbal formulation designed to alleviate joint discomfort and support mobility. Combining the wisdom of traditional Ayurveda with modern scientific techniques, this therapeutic oil provides fast-acting relief for joint and muscle pain. Its carefully selected natural ingredients penetrate deep into the skin to reduce inflammation, improve blood circulation, and promote overall joint health.",
            titlesec: "Our Impact in Numbers",
            successData: [
                { id: "SUCCESSFUL_CONSULTATIONS", value: "1,523,654", label: "Lives Transformed" },
                { id: "CUSTOMER_SATISFACTION", value: "97%", label: "Happiness Guarantee" },
                { id: "GLOBAL_REACH", value: "85", label: "Countries Served" },
                { id: "EXPERTISE_YEARS", value: "20+", label: "Years of Healing Expertise" }
            ],
            relief: "Your Path to Pain-Free Living",
            pain1: "- Complete Joint Pain Solution",
            paint2: "- Muscle Discomfort Relief",
            paint3: "- Arthritis Management",
            stats: [
                { icon: ThumbsUp, value: 5, suffix: '+', label: 'Years of Healing' },
                { icon: Users, value: 103000, suffix: '+', label: 'Satisfied Individuals' },
                { icon: UserCircle, value: 125, suffix: '', label: 'Wellness Experts' },
                { icon: Star, value: 4.9, suffix: '', label: 'Customer Trust' }
            ],
            reviews: [
                { review: "Elbow Joint Transformation", image: painone },
                { review: "Conquering Arthritis Pain", image: painsecond },
                { review: "Shoulder Mobility Restored", image: painthird },
                { review: "Ankle Joint Freedom", image: painfourth },
                { review: "Incredible Support System", image: painsecond },
                { review: "Life-Changing Wellness Journey", image: painthird }
            ],
            seccontent: "Dr. Joints Oil is a premium herbal formulation designed to alleviate joint discomfort and support mobility. Combining the wisdom of traditional Ayurveda with modern scientific techniques, this therapeutic oil provides fast-acting relief for joint and muscle pain. Its carefully selected natural ingredients penetrate deep into the skin to reduce inflammation, improve blood circulation, and promote overall joint health.",
            secTitle: "Manage Your Joint Pain",
        },
        checkout: {
            title: "Checkout",
            sectitle: "Billing Details",
            firstname: 'First Name ',
            lastname: 'Last Name ',
            country: 'Country/ Region ',
            address: 'Street Address ',
            city: 'Town/ City ',
            countrytitle: "Country ",
            phone: "Phone ",
            email: "Email Address ",
            order: "Your Order",
            clientaddress: "Apartment/Suite",
            mode: "Payment Mode",
            total: "Total",
            shipping: "Shipping",
            subtotal: "Subtotal",
            product: "Product",
            order: "Place Order",
            processing: "Processing...",
            successfully: "Order Placed Successfully!",
            thank: "Thank you for your purchase. You will receive a confirmation email shortly.",
            continue: "Continue Shopping",
            Currency: "AED"
        },
        returnPolicy: {
            title: 'Return Policy',
            sections: [
                {
                    title: 'Eligibility for Returns',
                    content: 'Your purchase is eligible for a return if it meets the following criteria: the product must be returned in its original packaging (used or unused), reach the specified address listed on our website, and arrive within 15 days of the purchase date. Damaged products will not be accepted.'
                },
                {
                    title: 'Refund Process',
                    content: 'To process a refund, customers must initiate the return process and send the product to the specified address. Once the product is received and inspected, refunds will be credited to the original payment method within 10 business days, excluding shipping costs.'
                },
                {
                    title: 'Shipping Returns',
                    content: 'The return process is customer-initiated, and customers are responsible for ensuring the product is shipped to the specified address. Return shipping costs are not covered unless the return is due to a manufacturing defect or error.'
                }
            ],
            contactInfo: 'For any return inquiries, please contact us athello@drjoints.ae.'
        },
        privacyPolicy: {
            heading: 'Privacy Policy',
            lastUpdated: 'Last Updated: December 2024',
            sections: [
                {
                    title: 'Information We Collect',
                    content: 'This Privacy Policy describes how Dr.Joints Fat and Weight Loss Oil collects, uses, and discloses your information when you use our website https://drjoints.ae//\n\nPersonal Information: This includes information that can be used to identify you, such as your name, billing address, shipping address, email address, and phone number. You only provide this information when you contact us through a form on the Site.\n\nNon-Personal Information: This includes information that cannot be used to identify you, such as your browser type, operating system, IP address, browsing activity on the Site, and demographic information (e.g., age, gender). This information is collected automatically when you visit the Site.'
                },
                {
                    title: 'How We Use Your Information',
                    content: 'Personal Information: We will only use your personal information to respond to inquiries and requests. We will not share your personal information with any third parties without your consent, except as required by law.\n\nNon-Personal Information: We use non-personal information to improve the Site and understand how users interact. We may also use non-personal information for internal marketing and promotional purposes.'
                },
                {
                    title: 'Cookies and Tracking Technologies',
                    content: 'We may use cookies and other tracking technologies to collect non-personal information about your use of the Site. Cookies are small data files that are stored on your device when you visit a website. They allow the website to remember your actions and preferences over time.\n\nIf you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.\n\nWhen you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.\n\nIf you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.'
                },
                {
                    title: 'Third-Party Service Providers',
                    content: 'We may use third-party service providers to help us operate the Site and deliver our services. These service providers may have access to your non-personal information. We will not share your personal information with any third-party service providers for their marketing purposes without your consent.'
                },
                {
                    title: 'Security',
                    content: 'We take reasonable steps to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no website or internet transmission is completely secure.'
                },
                {
                    title: 'Children’s Privacy',
                    content: 'The Site is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and you believe that your child has provided us with personal information, please contact us. We will take steps to remove the information from our records.'
                },
                {
                    title: 'Changes to this Privacy Policy',
                    content: 'We may update this Privacy Policy from time to time. We will post any changes on the Site. We encourage you to review this Privacy Policy periodically for the latest information on our privacy practices.'
                }
            ],
            contactPrivacy: 'If you have any questions about this Privacy Policy, please get in touch with us athello@drjoints.ae.'
        },
        termsConditions: {
            heading: 'Terms & Conditions',
            lastUpdated: 'Last Updated: December 2024',
            sections: [
                {
                    heading: "Welcome to Dr.Joints!",
                    content: "These terms and conditions outline the rules and regulations for the use of Dr.Joints Website, located at https://drjoints.ae/, A product of Pain Relief Oil. By accessing this website we assume you accept these terms and conditions. Do not continue to use Dr.Joints if you do not agree to take all of the terms and conditions stated on this page."
                },
                {
                    heading: "Terminology",
                    content: "The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice, and all Agreements: \"Client\", \"You\" and \"Your\" refers to you, the person who logs on to this website and is compliant with the Company’s terms and conditions. \"The Company\", \"Ourselves\", \"We\", \"Our\" and \"Us\", refers to our Company. \"Party\", \"Parties\", or \"Us\", refers to both the Client and ourselves. All terms refer to the offer, acceptance, and consideration of payment necessary to undertake the process of our assistance to the Client most appropriately for the express purpose of meeting the Client’s needs in respect of the provision of the Company’s stated services, by and subject to, prevailing law of in. Any use of the above terminology or other words in the singular, plural, capitalization, and/or he/she or they, are taken as interchangeable and therefore as referring to the same."
                },
                {
                    heading: "Cookies",
                    content: "We employ the use of cookies. By accessing Dr.Joints, you agree to use cookies in agreement with Dr.Joints’s Privacy Policy. Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies."
                },
                {
                    heading: "Intellectual Property Rights",
                    content: "Unless otherwise stated, Dr.Joints and/or its licensors own the intellectual property rights for all material on Dr.Joints. All intellectual property rights are reserved. You may access this from Dr.Joints for your personal use subject to restrictions set in these terms and conditions."
                },
                {
                    heading: "You Must Not:",
                    content: [
                        "Republish material from Dr.Joints",
                        "Sell, rent, or sub-license material from Dr.Joints",
                        "Reproduce, duplicate, or copy material from Dr.Joints",
                        "Redistribute content from Dr.Joints"
                    ]
                },
                {
                    heading: "User Comments",
                    content: "Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Dr.Joints does not filter, edit, publish, or review Comments before their presence on the website. Comments do not reflect the views and opinions of Dr.Joints, its agents, and/or affiliates. Comments reflect the views and opinions of the person who posts their views and opinions. To the extent permitted by applicable laws, Dr.Joints shall not be liable for the Comments or any liability, damages, or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website."
                },
                {
                    heading: "External Links",
                    content: "We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that are arising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third-party rights."
                }
            ]
        },
        contact: {
            title: 'Contact Us',
            address: 'Begumpet, Hyderabad, Telangana, India 500016',
            phone: '+91 9030202444',
            email: 'hello@drjoints.ae',
            info: "information",
            det: "Details",
            pagetitle: 'Need your help?',
            pagesectitle: 'You can contact us today ',
            pageinname: "Your Name",
            pageinemail: "Your Email",
            pageinphone: "Your Phone",
            pageinsubject: "Subject",
            pageinmessage: "Write you present condition...",
            pagesubbutton: "Send Message",
        },
        shippingPolicyContent: {
            title: "Shipping Policy",
            lastUpdated: "Last Updated: December 2024",
            sections: [
                {
                    heading: "1. Shipping Coverage",
                    content: `**Domestic Shipping**: We deliver to all major cities and towns across India. Pin code verification is available at checkout. Remote locations may require additional delivery time. Certain restricted areas may not be serviceable.\n\n**International Shipping**: We are happy to offer international shipping to customers worldwide. Our goal is to deliver your order as quickly and efficiently as possible, no matter where you are.`,
                },
                {
                    heading: "2. Shipping Methods",
                    content: `**Standard Delivery**: Delivery within 5–7 business days. Available across all serviceable locations.`,
                },
                {
                    heading: "3. Shipping Partners",
                    content: `We work with reputed courier partners, including:\n- Aramex\n- DHL\n- Blue Dart\n- DTDC`,
                },
                {
                    heading: "4. Order Processing",
                    content: `**Processing Time**: Orders are processed within 24 hours of placement. Order confirmation is sent via email. Bulk orders may require additional processing time.\n\n**Order Tracking**: A tracking number is provided via email. Customer service assistance is available for tracking queries.`,
                },
                {
                    heading: "5. Delivery Guidelines",
                    content: `**Delivery Attempts**: A maximum of 3 delivery attempts will be made. Delivery reattempts are scheduled within 24 hours. Customers will be notified before each delivery attempt. Orders returned to the seller after 3 failed attempts may incur reshipping fees. Refunds will be processed for the product price, excluding initial shipping charges.\n\n**Delivery Verification**: Valid ID proof may be required for specific items. Digital signature capture is required at delivery. Unattended delivery is not permitted.`,
                },
                {
                    heading: "6. Special Cases",
                    content: `**Bulk Orders**: Special shipping arrangements are available for bulk orders. Custom delivery timelines can be discussed with our team. Additional handling charges may apply.`,
                },
                {
                    heading: "7. Shipping Restrictions",
                    content: `**Weather Conditions**: Delivery times may be affected during severe weather conditions, natural disasters, or local disturbances. In such cases, orders will be rescheduled, and customers will be notified with updated timelines.`,
                },
                {
                    heading: "8. Lost or Damaged Shipments",
                    content: `**Lost Packages**: Investigations are initiated within 24 hours of receiving a complaint. Regular updates will be provided to the customer. Refunds or resolutions are provided within 15 business days for eligible cases, including the full product and shipping cost.\n\n**Damaged Packages**: Refuse delivery if external damage is visible. Report damage within 24 hours of delivery with photo documentation. Replacement or refunds are processed after an investigation.`,
                },
                {
                    heading: "9. Holiday Shipping",
                    content: `**Peak Seasons**: Processing times may be extended during festivals and peak seasons. We recommend additional delivery buffer time during these periods. Customers will be notified of any delays.\n\n**Business Hours**: Order processing: Monday to Sunday, 9 AM to 6 PM IST. Customer service is available: Monday to Saturday, 9 AM to 8 PM IST.`,
                },
                {
                    heading: "10. Environmental Commitment",
                    content: `**Packaging**: We use eco-friendly packaging materials with minimal plastic usage. Packaging materials are made from recycled sources where possible. We ensure right-sized packaging to reduce waste.`,
                },
                {
                    heading: "11. Communication",
                    content: `**Shipping Updates**: Customers receive:\n- Order confirmation emails\n- Shipping confirmations with tracking details\n- Delivery attempt notifications\n- Delivery completion confirmations`,
                },
                {
                    heading: "12. Customer Support",
                    content: `**Email**: hello@drjoints.ae\n\n**Phone**: 9392277389\n\n**Response time**: Within 4 business hours during operational hours.`,
                },
                {
                    heading: "13. Policy Updates",
                    content: `This policy is subject to change. Updates will be posted on our website. Customers will be notified via email for significant changes at least 7 days in advance. Continued use of our services implies acceptance of the updated policy.`,
                },
            ],
        },
        cancelPolicy: {
            title: 'Cancellation Policy',
            lastUpdated: 'Last Updated: October 2023',
            sections: [
                {
                    heading: '1. Cancellation Period',
                    content: '• Orders can be canceled within 24 hours of placing the order.\n• After 24 hours, we begin processing and shipping your order, and cancellations will not be possible.'
                },
                {
                    heading: '2. How to Cancel Your Order',
                    content: 'To cancel your order, please follow these steps:\n1. Contact Us Immediately: Reach out to our customer support team at +919392277389 within 24 hours of your order.\n2. Provide Order Details: Include your order number and reason for cancellation in your message to help us process your request faster.'
                },
                {
                    heading: '3. Cancellations Post-Shipping',
                    content: '• If your order has already been shipped, we will not be able to cancel it. In this case, you may return the product after receiving it.\n• To initiate a return, please refer to our Return Policy for further instructions.'
                },
                {
                    heading: '4. Refund Process',
                    content: '• Full Refunds: If your cancellation request is processed before the product is shipped, you will receive a full refund.\n• Partial Refunds: If you cancel the order after the product has been shipped, the cost of the product will be refunded with less shipping charges, once we receive the returned item in its original condition.'
                },
                {
                    heading: '5. Non-Cancellable Conditions',
                    content: '• Opened/Used Products: Once the product has been opened or used, cancellations will not be accepted. Please check the product carefully upon delivery.\n• Special Promotions or Offers: Orders placed under special promotions or discounts may be subject to different cancellation terms, which will be specified during the purchase process.'
                }
            ],
            disclaimer: 'We aim to provide a seamless experience, and our customer service team is here to assist you with any issues you may encounter.',
            contactCancel: 'Thank you for choosing Dr. Joints Pain Relief Oil. We appreciate your understanding and support!'
        },
    },
    ar: {
        home: {
            title: "اشعر بتحسن",
            titlesec: "تحرك بشكل أفضل",
            button: "اشتري الآن",
            question: "ما الذي يجعل زيت تخفيف آلام المفاصل من Dr. Joints الخيار الأفضل؟",
            answer: "اكتشف الحل الأمثل لتخفيف الآلام الطبيعية مع زيت تخفيف آلام المفاصل من Dr. Joints. صُنع بعناية من مزيج من المكونات الطبيعية والأيورفيدا 100٪، حيث تم تصميمه لمعالجة الأسباب الجذرية لآلام المفاصل والعضلات وليس فقط إخفاء الأعراض. مدعومًا بالعلوم الحديثة وغنيًا بقوة الأعشاب القديمة العلاجية، يوفر زيت Dr. Joints تخفيفًا سريعًا وطويل الأمد للآلام. نحن نركز على رفاهيتك الشاملة ونسعى لاستعادة الحركة والراحة وجودة الحياة لتعيش بدون ألم وبأقصى طاقة.",
            title2: "طريقك الطبيعي للعيش دون ألم",
            sub2: "تمكينك من التحرك بحرية باستخدام الشفاء الأيورفيدي الممتاز",
            trust: "موثوق به من قبل كبار محترفي الرعاية الصحية",
            follow: "انضم إلى رحلتنا نحو العافية الطبيعية",
            client: "قصص تغيّر الحياة من مستخدمي Dr. Joints",
            goproduct: "اشتري الآن",
            reviews: [
                { id: 1, name: "أحمد المنصوري", review: "بصفتي مدير موقع بناء، كانت آلام الركبة تعيق عملي. أعاد لي Dr. Joints حركتي وكفاءتي المهنية!", stars: 5 },
                { id: 2, name: "فاطمة حسن", review: "حلم كل مدرب يوجا! منتج احترافي وطبيعي وفعال للغاية لتحسين مرونة مفاصلي.", stars: 4 },
                { id: 3, name: "سلطان السويدي", review: "العيش مع التهاب المفاصل في مناخ دبي يمثل تحديًا. هذا الزيت غيّر حياتي اليومية.", stars: 5 },
                { id: 4, name: "ليلى بن دراي", review: "كمتحمسة للياقة البدنية، التعافي السريع أمر بالغ الأهمية. جودة استثنائية وراحة سريعة!", stars: 4 },
                { id: 5, name: "خالد محمد", review: "العمل لساعات طويلة في مكاتب مكيفة يمكن أن يسبب تصلب المفاصل. تجاوز Dr. Joints كل توقعاتي!", stars: 5 },
                { id: 6, name: "مريم المكتوم", review: "توصية صادقة من محترف رعاية صحية. منتج داعم يوفر نتائج حقيقية!", stars: 4 },
                { id: 7, name: "عمر عبد الله", review: "بصفتي عدّاء يعاني من آلام مستمرة في الركبة، هذا الحل غير حياتي!", stars: 5 },
                { id: 8, name: "سارة الفهيم", review: "مثالي للمحترفين النشطين في دبي. علاج طبيعي يوفر راحة فورية!", stars: 5 },
                // Add additional reviews as needed
            ],
            Youtube: "yKJAZhNLD9U",
            bannerimg: "قل وداعًا للألم – اكتشف حلولًا طبيعية للراحة الدائمة.",
            homec1: "خفف آلام المفاصل والعضلات والجسم بشكل طبيعي – اشعر بتحسن وتحرك بحرية.",
            homec2: "زيوت عضوية مصنوعة من الأعشاب والمكونات الطبيعية.",
            joint1: "ألم الكوع", // Elbow Pain in Arabic
            joint2: "ألم الركبة",
            whatsapp: "9030652444",
        },
        navbar: {
            home: "اطلب الآن",
            about: "من نحن",
            contact: "اتصل بنا",
        },
        navLinks: [
            { id: "Home", path: "/", label: "الصفحة الرئيسية" },
            { id: "product", path: "/product", label: "اطلب الآن" },
            { id: "about", path: "/about", label: "من نحن" },
            { id: "contact", path: "/contact", label: "اتصل بنا" },
        ],
        footer: [
            { id: "HOME", path: "/", label: "الرئيسية" },
            { id: "SHOP", path: "/product", label: "اطلب الآن" },
            { id: "ABOUT", path: "/about", label: "قصتنا" },
            { id: "CONTACT", path: "/contact", label: "اتصل بنا" },
            { id: "RETURN POLICY", path: "/return", label: "سياسة الإرجاع" },
            { id: "PRIVACY POLICY", path: "/private", label: "سياسة الخصوصية" },
            { id: "TERMS & CONDITIONS", path: "/terms", label: "الشروط والأحكام" },
            { id: "SHIPPING POLICY", path: "/ship", label: "سياسة الشحن" },
            { id: "CANCELLATION POLICY", path: "/cancel", label: "سياسة الإلغاء" }
        ],
        product: {
            name: "زيت تخفيف آلام المفاصل من Dr. Joints - الشفاء الطبيعي",
            fakeqty: "تم بيع 23 زجاجة في آخر 3 ساعات",
            // off2: "خصم 70٪ على الشراء بالجملة",
            buynow: "اشترِ الآن",
            qty: "الكمية",
            cutamount: "د.إ 360",
            amount: "د.إ 280",
            price2: "د.إ 280 - توصيل سريع عبر الإنترنت",
            para: "اكتشف قوة الشفاء الطبيعي مع زيت تخفيف آلام المفاصل من Dr. Joints. صيغتنا الأيورفيدا الثورية مُعدّة بعناية لتوفير تخفيف فوري للألم وشفاء طويل الأمد. محملة بمكونات عشبية فعّالة، يخترق الزيت بعمق لمعالجة آلام المفاصل والعضلات من المصدر. نحن لا نقدم منتجًا فحسب - بل نوفر مسارًا شاملاً للصحة والعافية، مما يمنحك القوة لاستعادة حركتك والعيش بكامل طاقتك.",
            doctor: "موصى به من قبل خبراء الرعاية الصحية",
            docpara: "حل موثوق به وطبيعي لتخفيف آلام المفاصل بشكل فعال من قبل خبراء طبيين.",
            rating: "متوسط تقييم العملاء",
            rating2: "18,300+ تقييم موثق",
            Currency: "السعودية"

        },
        about: {
            title: "علاج Dr. Joints",
            sub: "زيت Dr. Joints هو تركيبة عشبية مميزة مصممة لتخفيف انزعاج المفاصل ودعم الحركة. من خلال دمج الحكمة التقليدية للأيورفيدا مع التقنيات العلمية الحديثة، يوفر هذا الزيت العلاجي راحة سريعة لآلام المفاصل والعضلات. تتغلغل مكوناته الطبيعية المختارة بعناية بعمق في الجلد لتقليل الالتهاب، وتحسين الدورة الدموية، وتعزيز صحة المفاصل بشكل عام.",
            titlesec: "تأثيرنا بالأرقام",
            successData: [
                { id: "SUCCESSFUL_CONSULTATIONS", value: "1,523,654", label: "حيوات تحولت" },
                { id: "CUSTOMER_SATISFACTION", value: "97%", label: "ضمان السعادة" },
                { id: "GLOBAL_REACH", value: "85", label: "بلدان تم خدمتها" },
                { id: "EXPERTISE_YEARS", value: "20+", label: "سنوات من الخبرة العلاجية" }
            ],
            relief: "طريقك للحياة بدون ألم",
            pain1: "- حل كامل لآلام المفاصل",
            paint2: "- تخفيف انزعاج العضلات",
            paint3: "- إدارة التهاب المفاصل",
            stats: [
                { icon: ThumbsUp, value: 5, suffix: '+', label: 'سنوات من العلاج' },
                { icon: Users, value: 103000, suffix: '+', label: 'أفراد راضون' },
                { icon: UserCircle, value: 125, suffix: '', label: 'خبراء العافية' },
                { icon: Star, value: 4.9, suffix: '', label: 'ثقة العملاء' }
            ],
            reviews: [
                { review: "تحول في مفصل الكوع", image: painone },
                { review: "التغلب على آلام التهاب المفاصل", image: painsecond },
                { review: "استعادة حركة الكتف", image: painthird },
                { review: "حرية في مفصل الكاحل", image: painfourth },
                { review: "نظام دعم مذهل", image: painsecond },
                { review: "رحلة عافية غيرت الحياة", image: painthird }
            ],
            seccontent: "زيت Dr. Joints هو تركيبة عشبية مميزة مصممة لتخفيف انزعاج المفاصل ودعم الحركة. من خلال دمج الحكمة التقليدية للأيورفيدا مع التقنيات العلمية الحديثة، يوفر هذا الزيت العلاجي راحة سريعة لآلام المفاصل والعضلات. تتغلغل مكوناته الطبيعية المختارة بعناية بعمق في الجلد لتقليل الالتهاب، وتحسين الدورة الدموية، وتعزيز صحة المفاصل بشكل عام.",
            secTitle: "تحكم في آلام مفاصلك",
        },
        checkout: {
            title: "الدفع",
            sectitle: "تفاصيل الفاتورة",
            firstname: "الاسم الأول",
            lastname: "اسم العائلة",
            country: "البلد/المنطقة",
            address: "عنوان الشارع",
            city: "المدينة/البلدة",
            countrytitle: "البلد",
            phone: "الهاتف",
            email: "عنوان البريد الإلكتروني",
            order: "طلبك",
            clientaddress: "شقة/جناح",
            mode: "طريقة الدفع",
            total: "الإجمالي",
            shipping: "الشحن",
            subtotal: "الإجمالي الفرعي",
            product: "المنتج",
            order: "إتمام الطلب",
            processing: "جارٍ المعالجة...",
            successfully: "تم الطلب بنجاح!",
            thank: "شكرًا لشرائك. ستتلقى رسالة تأكيد بالبريد الإلكتروني قريبًا.",
            continue: "مواصلة التسوق",
            Currency: "د.إ"
        },
        returnPolicy: {
            "title": "سياسة الإرجاع",
            "sections": [
                {
                    "title": "أهلية الإرجاع",
                    "content": "يحق لك إرجاع المنتج إذا كان يستوفي المعايير التالية: يجب أن يُعاد المنتج في تغليفه الأصلي (مستخدم أو غير مستخدم)، الوصول إلى العنوان المحدد على موقعنا، والوصول خلال 15 يومًا من تاريخ الشراء. لن يتم قبول المنتجات التالفة."
                },
                {
                    "title": "عملية الاسترداد",
                    "content": "لإتمام عملية الاسترداد، يجب على العملاء بدء عملية الإرجاع وإرسال المنتج إلى العنوان المحدد. بمجرد استلام المنتج وفحصه، سيتم إرجاع المبالغ المدفوعة إلى طريقة الدفع الأصلية خلال 10 أيام عمل، باستثناء تكاليف الشحن."
                },
                {
                    "title": "إرجاع الشحنات",
                    "content": "عملية الإرجاع يتم البدء بها من العميل، وهم مسؤولون عن ضمان شحن المنتج إلى العنوان المحدد. تكاليف شحن الإرجاع غير مغطاة ما لم يكن الإرجاع بسبب عيب في التصنيع أو خطأ."
                }
            ],
            "contactInfo": "لأي استفسارات حول الإرجاع، يرجى الاتصال بنا علىhello@drjoints.ae."
        },
        privacyPolicy: {
            heading: 'سياسة الخصوصية',
            lastUpdated: 'آخر تحديث: ديسمبر 2024',
            sections: [
                {
                    title: 'المعلومات التي نجمعها',
                    content: 'تصف سياسة الخصوصية هذه كيفية جمع واستخدام والكشف عن معلوماتك عندما تستخدم موقعنا الإلكتروني https://drjoints.ae//\n\nالمعلومات الشخصية: تشمل المعلومات التي يمكن استخدامها لتحديد هويتك، مثل اسمك، وعنوان الفوترة، وعنوان الشحن، وعنوان بريدك الإلكتروني، ورقم هاتفك. تقوم بتقديم هذه المعلومات فقط عندما تتواصل معنا من خلال نموذج على الموقع.\n\nالمعلومات غير الشخصية: تشمل المعلومات التي لا يمكن استخدامها لتحديد هويتك، مثل نوع المتصفح، ونظام التشغيل، وعنوان الـ IP، ونشاط التصفح على الموقع، والمعلومات الديموغرافية (مثل العمر والجنس). يتم جمع هذه المعلومات تلقائيًا عند زيارتك للموقع.'
                },
                {
                    title: 'كيفية استخدامنا لمعلوماتك',
                    content: 'المعلومات الشخصية: سنستخدم معلوماتك الشخصية فقط للرد على الاستفسارات والطلبات. لن نشارك معلوماتك الشخصية مع أطراف ثالثة بدون موافقتك، إلا إذا كان ذلك مطلوبًا بموجب القانون.\n\nالمعلومات غير الشخصية: نستخدم المعلومات غير الشخصية لتحسين الموقع وفهم كيفية تفاعل المستخدمين. قد نستخدم أيضًا المعلومات غير الشخصية لأغراض التسويق الداخلي والترويج.'
                },
                {
                    title: 'ملفات تعريف الارتباط وتقنيات التتبع',
                    content: 'قد نستخدم ملفات تعريف الارتباط وتقنيات تتبع أخرى لجمع معلومات غير شخصية عن استخدامك للموقع. ملفات تعريف الارتباط هي ملفات بيانات صغيرة يتم تخزينها على جهازك عند زيارة موقع ويب. إنها تسمح للموقع بتذكر أفعالك وتفضيلاتك مع مرور الوقت.\n\nإذا قمت بزيارة صفحة تسجيل الدخول لدينا، سنقوم بتعيين ملف تعريف ارتباط مؤقت للتحقق مما إذا كان متصفحك يقبل ملفات تعريف الارتباط. يحتوي هذا الملف على بيانات غير شخصية ويتم التخلص منه عند إغلاق متصفحك.\n\nعند تسجيل الدخول، سنقوم أيضًا بإعداد عدة ملفات تعريف ارتباط لحفظ معلومات تسجيل الدخول الخاصة بك وتفضيلات عرض الشاشة الخاصة بك. تستمر ملفات تعريف الارتباط الخاصة بتسجيل الدخول لمدة يومين، وملفات تعريف الارتباط الخاصة بتفضيلات الشاشة تستمر لمدة عام. إذا اخترت "تذكرني"، سيستمر تسجيل الدخول لمدة أسبوعين. إذا قمت بتسجيل الخروج من حسابك، سيتم إزالة ملفات تعريف الارتباط الخاصة بتسجيل الدخول.\n\nإذا قمت بتحرير أو نشر مقال، سيتم حفظ ملف تعريف ارتباط إضافي في متصفحك. يتضمن هذا الملف بيانات غير شخصية ويشير ببساطة إلى معرف المقالة التي قمت بتحريرها للتو. ينتهي صلاحيته بعد يوم واحد.'
                },
                {
                    title: 'مزودي الخدمة من الأطراف الثالثة',
                    content: 'قد نستخدم مزودي خدمة من الأطراف الثالثة لمساعدتنا في تشغيل الموقع وتقديم خدماتنا. قد يكون لدى مزودي الخدمة هؤلاء إمكانية الوصول إلى معلوماتك غير الشخصية. لن نشارك معلوماتك الشخصية مع أي مزودي خدمة من الأطراف الثالثة لأغراض تسويقية دون موافقتك.'
                },
                {
                    title: 'الأمان',
                    content: 'نقوم باتخاذ خطوات معقولة لحماية معلوماتك من الوصول غير المصرح به أو الكشف أو التعديل أو التدمير. ومع ذلك، لا يوجد موقع ويب أو انتقال عبر الإنترنت آمن تمامًا.'
                },
                {
                    title: 'خصوصية الأطفال',
                    content: 'الموقع غير موجه للأطفال تحت سن 13 عامًا. نحن لا نجمع معلومات شخصية عن الأطفال دون سن 13 عامًا عن علم. إذا كنت والدًا أو وصيًا وكنت تعتقد أن طفلك قد قدم لنا معلومات شخصية، يرجى الاتصال بنا. سنتخذ خطوات لإزالة المعلومات من سجلاتنا.'
                },
                {
                    title: 'التغييرات في سياسة الخصوصية هذه',
                    content: 'قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سنقوم بنشر أي تغييرات على الموقع. نشجعك على مراجعة سياسة الخصوصية هذه بشكل دوري للحصول على أحدث المعلومات حول ممارساتنا في الخصوصية.'
                }
            ],
            contactPrivacy: 'إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا عبر البريد الإلكترونيhello@drjoints.ae.'
        },
        termsConditions: {
            heading: "الشروط والأحكام",
            lastUpdated: "آخر تحديث: ديسمبر 2024",
            sections: [
                {
                    heading: "مرحبًا بكم في Dr.Joints!",
                    content: "تحدد هذه الشروط والأحكام القواعد واللوائح الخاصة باستخدام موقع Dr.Joints، الموجود على https://drjoints.ae/، وهو منتج من زيت تخفيف الألم. من خلال الوصول إلى هذا الموقع، نفترض أنك توافق على هذه الشروط والأحكام. يرجى عدم الاستمرار في استخدام Dr.Joints إذا كنت لا توافق على جميع الشروط والأحكام الموضحة في هذه الصفحة."
                },
                {
                    heading: "المصطلحات المستخدمة",
                    content: "تنطبق المصطلحات التالية على هذه الشروط والأحكام، وسياسة الخصوصية، وإشعار إخلاء المسؤولية، وجميع الاتفاقيات: 'العميل'، 'أنت' و'خاصتك' تشير إليك، الشخص الذي يقوم بتسجيل الدخول إلى هذا الموقع ويتوافق مع شروط وأحكام الشركة. 'الشركة'، 'نحن'، 'لدينا' و'خاصتنا' تشير إلى شركتنا. يشير 'الطرف'، 'الأطراف' أو 'نحن' إلى كل من العميل ونحن. تشير جميع المصطلحات إلى العرض، القبول، ومقابل الدفع اللازم للشروع في عملية مساعدتنا للعميل بالشكل الأنسب لتحقيق احتياجات العميل في تقديم الخدمات المعلنة من الشركة، بموجب القانون السائد. يتم استخدام أي من المصطلحات المذكورة أعلاه أو الكلمات الأخرى بصيغة المفرد، الجمع، الأحرف الكبيرة، وأي ضمير شخصي كبديل للإشارة إلى نفس المعنى."
                },
                {
                    heading: "استخدام ملفات تعريف الارتباط (Cookies)",
                    content: "نحن نستخدم ملفات تعريف الارتباط. من خلال الوصول إلى Dr.Joints، فإنك توافق على استخدام ملفات تعريف الارتباط بما يتماشى مع سياسة الخصوصية الخاصة بـ Dr.Joints. تستخدم معظم المواقع التفاعلية ملفات تعريف الارتباط لاسترجاع تفاصيل المستخدمين لكل زيارة. تُستخدم ملفات تعريف الارتباط على موقعنا لتمكين بعض الوظائف لتسهيل تجربة الزوار. قد يستخدم بعض شركائنا في الإعلانات/التسويق ملفات تعريف الارتباط أيضًا."
                },
                {
                    heading: "حقوق الملكية الفكرية",
                    content: "ما لم يُذكر خلاف ذلك، فإن Dr.Joints و/أو المرخصين التابعين له يمتلكون حقوق الملكية الفكرية لجميع المواد الموجودة على Dr.Joints. جميع حقوق الملكية الفكرية محفوظة. يمكنك الوصول إلى هذا الموقع لاستخدامك الشخصي فقط، وفقًا للقيود الموضحة في هذه الشروط والأحكام."
                },
                {
                    heading: "قيود الاستخدام",
                    content: [
                        "إعادة نشر المواد من Dr.Joints",
                        "بيع أو تأجير أو ترخيص المواد من Dr.Joints",
                        "إعادة إنتاج أو نسخ المواد من Dr.Joints",
                        "إعادة توزيع المحتوى من Dr.Joints"
                    ]
                },
                {
                    heading: "التعليقات والمحتوى المنشور",
                    content: "تتيح أجزاء من هذا الموقع للمستخدمين نشر وتبادل الآراء والمعلومات في مناطق معينة من الموقع. Dr.Joints لا يقوم بتصفية أو تعديل أو نشر أو مراجعة التعليقات قبل ظهورها على الموقع. التعليقات لا تعكس وجهات نظر وآراء Dr.Joints، ووكلائه، و/أو الشركات التابعة له. التعليقات تعبر فقط عن وجهات نظر وآراء الشخص الذي نشرها. بالقدر الذي يسمح به القانون المعمول به، لن يكون Dr.Joints مسؤولاً عن التعليقات أو أي أضرار أو تكاليف ناجمة عنها."
                },
                {
                    heading: "إخلاء المسؤولية عن الروابط",
                    content: "لن نكون مسؤولين عن أي محتوى يظهر على موقعك. أنت توافق على حماية والدفاع عنّا ضد جميع المطالبات التي تنشأ عن موقعك. يجب ألا يظهر أي رابط على أي موقع يمكن تفسيره على أنه تشهيري أو فاحش أو إجرامي، أو ينتهك، أو يروج لانتهاك حقوق أي طرف ثالث."
                }
            ],
            disclaimer: "نحتفظ بالحق في تعديل هذه الشروط في أي وقت. استمرارك في استخدام خدماتنا يشكل قبولًا لأي تغييرات.",
            contactTerms: "لأي استفسارات حول شروطنا، يرجى التواصل عبرhello@drjoints.ae."
        },
        contact: {
            "title": "اتصل بنا",
            "address": "بيجومبت، حيدر آباد، تلانجانا، الهند 500016",
            "phone": "+91 9030 652 444",
            "email": "hello@drjoints.ae",
            "info": "المعلومات",
            "det": "التفاصيل",
            "pagetitle": "هل تحتاج إلى مساعدتنا؟",
            "pagesectitle": "يمكنك الاتصال بنا اليوم",
            "pageinname": "اسمك",
            "pageinemail": "بريدك الإلكتروني",
            "pageinphone": "هاتفك",
            "pageinsubject": "الموضوع",
            "pageinmessage": "اكتب حالتك الحالية...",
            "pagesubbutton": "إرسال رسالة"
        },
        shippingPolicyContent: {
            "title": "سياسة الشحن",
            "lastUpdated": "آخر تحديث: ديسمبر 2024",
            "sections": [
                {
                    "heading": "1. تغطية الشحن",
                    "content": "**الشحن المحلي**: نحن نقوم بالتوصيل إلى جميع المدن الكبرى والبلدات عبر الهند. التحقق من الرمز البريدي متاح عند الدفع. قد تتطلب المواقع البعيدة وقت تسليم إضافي. قد تكون بعض المناطق المحظورة غير قابلة للخدمة.\n\n**الشحن الدولي**: نحن نقدم الشحن الدولي للعملاء في جميع أنحاء العالم. هدفنا هو تسليم طلبك بسرعة وكفاءة بغض النظر عن مكانك."
                },
                {
                    "heading": "2. طرق الشحن",
                    "content": "**التوصيل القياسي**: التسليم في غضون 5-7 أيام عمل. متاح في جميع المواقع التي يمكن خدمتها."
                },
                {
                    "heading": "3. شركاء الشحن",
                    "content": "نحن نعمل مع شركاء الشحن المعروفين، مثل:\n- أرامكس\n- دي إتش إل\n- بلو دارت\n- دي تي دي سي"
                },
                {
                    "heading": "4. معالجة الطلب",
                    "content": "**وقت المعالجة**: تتم معالجة الطلبات في غضون 24 ساعة من تقديمها. يتم إرسال تأكيد الطلب عبر البريد الإلكتروني. قد تتطلب الطلبات الكبيرة وقت معالجة إضافي.\n\n**تتبع الطلب**: يتم تقديم رقم تتبع عبر البريد الإلكتروني. تتوفر مساعدة خدمة العملاء لاستفسارات التتبع."
                },
                {
                    "heading": "5. إرشادات التسليم",
                    "content": "**محاولات التسليم**: سيتم إجراء 3 محاولات لتسليم الطلب. يتم تحديد محاولات إعادة التسليم في غضون 24 ساعة. سيتم إخطار العملاء قبل كل محاولة تسليم. قد يتم فرض رسوم إعادة الشحن على الطلبات التي تم إرجاعها للبائع بعد 3 محاولات فاشلة للتسليم. سيتم معالجة المبالغ المستردة لسعر المنتج فقط، باستثناء تكاليف الشحن الأولية.\n\n**التحقق من التسليم**: قد يكون من الضروري تقديم إثبات هوية صالح لبعض العناصر. يتعين التقاط توقيع رقمي عند التسليم. لا يسمح بالتسليم دون شخص."
                },
                {
                    "heading": "6. الحالات الخاصة",
                    "content": "**الطلبات الكبيرة**: تتوفر ترتيبات شحن خاصة للطلبات الكبيرة. يمكن مناقشة جداول التسليم المخصصة مع فريقنا. قد تنطبق رسوم إضافية للمعالجة."
                },
                {
                    "heading": "7. قيود الشحن",
                    "content": "**ظروف الطقس**: قد تتأثر أوقات التسليم في الظروف الجوية السيئة، والكوارث الطبيعية، أو الاضطرابات المحلية. في هذه الحالات، سيتم إعادة جدولة الطلبات، وسيتم إخطار العملاء بالجداول الزمنية المحدّثة."
                },
                {
                    "heading": "8. الشحنات المفقودة أو التالفة",
                    "content": "**الطرود المفقودة**: يتم بدء التحقيقات في غضون 24 ساعة من استلام الشكوى. سيتم تزويد العميل بتحديثات منتظمة. سيتم توفير استرداد أو حلول خلال 15 يوم عمل للحالات المؤهلة، بما في ذلك تكلفة المنتج بالكامل وتكاليف الشحن.\n\n**الطرود التالفة**: يرجى رفض التسليم إذا كانت هناك أضرار ظاهرة. يجب الإبلاغ عن الأضرار في غضون 24 ساعة من التسليم مع وثائق فوتوغرافية. تتم معالجة الاستبدال أو الاسترداد بعد التحقيق."
                },
                {
                    "heading": "9. الشحن خلال العطلات",
                    "content": "**المواسم المزدحمة**: قد يتم تمديد أوقات المعالجة خلال العطلات والمواسم المزدحمة. نوصي بترك وقت إضافي للتسليم خلال هذه الفترات. سيتم إخطار العملاء بأي تأخير.\n\n**ساعات العمل**: معالجة الطلبات: من الإثنين إلى الأحد، من الساعة 9 صباحًا حتى 6 مساءً بتوقيت الهند. خدمة العملاء متاحة: من الإثنين إلى السبت، من الساعة 9 صباحًا حتى 8 مساءً بتوقيت الهند."
                },
                {
                    "heading": "10. الالتزام البيئي",
                    "content": "**التغليف**: نحن نستخدم مواد تعبئة صديقة للبيئة مع الحد الأدنى من استخدام البلاستيك. يتم تصنيع مواد التعبئة من مصادر معاد تدويرها حيثما أمكن. نحن نحرص على استخدام التعبئة بحجم مناسب لتقليل النفايات."
                },
                {
                    "heading": "11. التواصل",
                    "content": "**تحديثات الشحن**: يتلقى العملاء:\n- رسائل تأكيد الطلب\n- رسائل تأكيد الشحن مع تفاصيل التتبع\n- إشعارات محاولات التسليم\n- إشعارات إتمام التسليم"
                },
                {
                    "heading": "12. دعم العملاء",
                    "content": "**البريد الإلكتروني**: hello@drjoints.ae\n\n**الهاتف**: 9392277389  \n\n**وقت الاستجابة**: خلال 4 ساعات عمل خلال ساعات العمل."
                },
                {
                    "heading": "13. تحديثات السياسة",
                    "content": "قد تخضع هذه السياسة للتغيير. سيتم نشر التحديثات على موقعنا. سيتم إشعار العملاء عبر البريد الإلكتروني لأي تغييرات هامة قبل 7 أيام على الأقل. يعتبر الاستمرار في استخدام خدماتنا قبولًا للسياسة المحدثة."
                }
            ]

        },
        cancelPolicy: {
            title: 'سياسة الإلغاء',
            lastUpdated: 'آخر تحديث: أكتوبر 2023',
            sections: [
                {
                    heading: '١. فترة الإلغاء',
                    content: '• يمكن إلغاء الطلبات خلال 24 ساعة من تقديم الطلب.\n• بعد 24 ساعة، نبدأ في معالجة وشحن طلبك، ولن يكون الإلغاء ممكناً.'
                },
                {
                    heading: '٢. كيفية إلغاء طلبك',
                    content: 'لإلغاء طلبك، يرجى اتباع هذه الخطوات:\n1. اتصل بنا فوراً: تواصل مع فريق دعم العملاء على +919392277389 خلال 24 ساعة من طلبك.\n2. قدم تفاصيل الطلب: قم بتضمين رقم طلبك وسبب الإلغاء في رسالتك لمساعدتنا في معالجة طلبك بشكل أسرع.'
                },
                {
                    heading: '٣. الإلغاء بعد الشحن',
                    content: '• إذا تم شحن طلبك بالفعل، فلن نتمكن من إلغائه. في هذه الحالة، يمكنك إرجاع المنتج بعد استلامه.\n• لبدء عملية الإرجاع، يرجى الرجوع إلى سياسة الإرجاع لمزيد من التعليمات.'
                },
                {
                    heading: '٤. عملية استرداد الأموال',
                    content: '• استرداد كامل: إذا تمت معالجة طلب الإلغاء الخاص بك قبل شحن المنتج، فستحصل على استرداد كامل.\n• استرداد جزئي: إذا قمت بإلغاء الطلب بعد شحن المنتج، سيتم استرداد تكلفة المنتج مع خصم رسوم الشحن، بمجرد استلامنا للمنتج المرتجع في حالته الأصلية.'
                },
                {
                    heading: '٥. حالات عدم إمكانية الإلغاء',
                    content: '• المنتجات المفتوحة/المستخدمة: بمجرد فتح المنتج أو استخدامه، لن يتم قبول الإلغاء. يرجى فحص المنتج بعناية عند التسليم.\n• العروض الترويجية الخاصة: قد تخضع الطلبات المقدمة ضمن العروض الترويجية أو الخصومات الخاصة لشروط إلغاء مختلفة، والتي سيتم تحديدها أثناء عملية الشراء.'
                }
            ],
            disclaimer: 'نهدف إلى تقديم تجربة سلسة، وفريق خدمة العملاء لدينا متواجد لمساعدتك في أي مشكلات قد تواجهها.',
            contactCancel: 'شكراً لاختيارك زيت د. جوينتس لتخفيف الألم. نقدر تفهمك ودعمك!'
        }

    },
    hi: {
        home: {
            title: "बेहतर महसूस करें",
            titlesec: "बेहतर चलें",
            button: "अभी खरीदें",
            question: "Dr. Joints पेन रिलीफ ऑयल को सबसे अच्छा विकल्प क्यों माना जाता है?",
            answer: "Dr. Joints पेन रिलीफ ऑयल के साथ प्राकृतिक दर्द निवारण का सबसे बेहतरीन अनुभव करें। यह तेल 100% प्राकृतिक और आयुर्वेदिक सामग्रियों के मिश्रण से विशेषज्ञता से तैयार किया गया है, जो केवल लक्षणों को छिपाने के बजाय जोड़ों और मांसपेशियों के दर्द के मूल कारणों को संबोधित करने के लिए डिज़ाइन किया गया है। आधुनिक विज्ञान द्वारा समर्थित और प्राचीन हर्बल ज्ञान की हीलिंग शक्ति से समृद्ध, Dr. Joints पेन रिलीफ ऑयल तेज़ और दीर्घकालिक राहत प्रदान करता है। हम आपकी समग्र भलाई को प्राथमिकता देते हैं और आपके मूवमेंट, आराम और जीवन की गुणवत्ता को बहाल करने का लक्ष्य रखते हैं ताकि आप दर्द-मुक्त और पूर्ण जीवन जी सकें।",
            title2: "दर्द-मुक्त जीवन के लिए आपका प्राकृतिक मार्ग",
            sub2: "प्रीमियम आयुर्वेदिक उपचार के साथ आपको स्वतंत्र रूप से चलने में सक्षम बनाना",
            trust: "प्रमुख स्वास्थ्य देखभाल पेशेवरों द्वारा भरोसेमंद",
            follow: "प्राकृतिक स्वास्थ्य यात्रा में हमारे साथ शामिल हों",
            client: "डॉ. जोइंट्स उपयोगकर्ताओं की जीवन बदलने वाली कहानियां",
            goproduct: "अभी खरीदें",
            reviews: [
                { id: 1, name: "अहमद अल मंसूरी", review: "एक निर्माण साइट प्रबंधक के रूप में, घुटने का दर्द मेरे काम में बाधा डाल रहा था। डॉ. जोइंट्स ने मेरी गतिशीलता और पेशेवर क्षमता को वापस लाया!", stars: 5 },
                { id: 2, name: "फातिमा हसन", review: "योग प्रशिक्षक के लिए आदर्श! पेशेवर, प्राकृतिक और मेरे जोड़ों की लचीलेपन के लिए बेहद प्रभावी।", stars: 4 },
                { id: 3, name: "सुल्तान अल सुवैदी", review: "दुबई की जलवायु में गठिया के साथ जीना चुनौतीपूर्ण है। यह तेल मेरे दैनिक आराम के लिए एक गेम-चेंजर है।", stars: 5 },
                { id: 4, name: "लैला बिन ड्राई", review: "एक फिटनेस उत्साही के रूप में, त्वरित रिकवरी महत्वपूर्ण है। असाधारण गुणवत्ता और तेज़ राहत!", stars: 4 },
                { id: 5, name: "खालिद मोहम्मद", review: "एयर-कंडीशन वाले कार्यालयों में लंबे समय तक काम करना जोड़ों में अकड़न पैदा कर सकता है। डॉ. जोइंट्स ने मेरी सभी अपेक्षाओं को पार कर दिया!", stars: 5 },
                { id: 6, name: "मरियम अल मकतूम", review: "एक स्वास्थ्य पेशेवर की ईमानदार सिफारिश। सहायक उत्पाद जो वास्तव में काम करता है!", stars: 4 },
                { id: 7, name: "ओमर अब्दुल्ला", review: "एक धावक के रूप में जो लगातार घुटने के दर्द से जूझ रहा था, यह मेरे लिए जीवन बदलने वाला समाधान है!", stars: 5 },
                { id: 8, name: "सारा अल फहीम", review: "दुबई में सक्रिय पेशेवरों के लिए परफेक्ट। एक प्राकृतिक उपाय जो तुरंत राहत प्रदान करता है!", stars: 5 },
                { id: 9, name: "अहमद अल मंसूरी", review: "एक निर्माण साइट प्रबंधक के रूप में, घुटने का दर्द मेरे काम में बाधा डाल रहा था। डॉ. जोइंट्स ने मेरी गतिशीलता और पेशेवर क्षमता को वापस लाया!", stars: 5 },
                { id: 10, name: "फातिमा हसन", review: "योग प्रशिक्षक के लिए आदर्श! पेशेवर, प्राकृतिक और मेरे जोड़ों की लचीलेपन के लिए बेहद प्रभावी।", stars: 4 },
                { id: 11, name: "सुल्तान अल सुवैदी", review: "दुबई की जलवायु में गठिया के साथ जीना चुनौतीपूर्ण है। यह तेल मेरे दैनिक आराम के लिए एक गेम-चेंजर है।", stars: 5 },
                { id: 12, name: "लैला बिन ड्राई", review: "एक फिटनेस उत्साही के रूप में, त्वरित रिकवरी महत्वपूर्ण है। असाधारण गुणवत्ता और तेज़ राहत!", stars: 4 },
                { id: 13, name: "खालिद मोहम्मद", review: "एयर-कंडीशन वाले कार्यालयों में लंबे समय तक काम करना जोड़ों में अकड़न पैदा कर सकता है। डॉ. जोइंट्स ने मेरी सभी अपेक्षाओं को पार कर दिया!", stars: 5 },
                { id: 14, name: "मरियम अल मकतूम", review: "एक स्वास्थ्य पेशेवर की ईमानदार सिफारिश। सहायक उत्पाद जो वास्तव में काम करता है!", stars: 4 },
                { id: 15, name: "ओमर अब्दुल्ला", review: "एक धावक के रूप में जो लगातार घुटने के दर्द से जूझ रहा था, यह मेरे लिए जीवन बदलने वाला समाधान है!", stars: 5 },
                { id: 16, name: "सारा अल फहीम", review: "दुबई में सक्रिय पेशेवरों के लिए परफेक्ट। एक प्राकृतिक उपाय जो तुरंत राहत प्रदान करता है!", stars: 5 }
            ],
            Youtube: "nNl670iiZxo",
            bannerimg: "दर्द को कहें अलविदा – लंबे समय तक राहत के लिए प्राकृतिक समाधान खोजें।",
            homec1: "जोड़ों, मांसपेशियों और शरीर के दर्द को प्राकृतिक रूप से दूर करें – बेहतर महसूस करें और स्वतंत्र रूप से चलें।",
            homec2: "प्राकृतिक जड़ी-बूटियों और सामग्री से बने ऑर्गेनिक तेल।",
            joint1: "कोहनी का दर्द", // Elbow Pain in Hindi
            joint2: "घुटने का दर्द", // Knee Pain in Hindi
            whatsapp: "9030202444",
        },
        navbar: {
            home: "वेलनेस शॉप",
            about: "अभी ऑर्डर करें",
            contact: "संपर्क करें",
        },
        navLinks: [
            { id: "Home", path: "/", label: "मुख्य पृष्ठ" },
            { id: "product", path: "/product", label: "अभी ऑर्डर करें" },
            { id: "about", path: "/about", label: "हमारी कहानी" },
            { id: "contact", path: "/contact", label: "संपर्क करें" },
        ],
        footer: [
            { id: "HOME", path: "/", label: "मुख्य पृष्ठ" },
            { id: "SHOP", path: "/product", label: "वेलनेस शॉप" },
            { id: "ABOUT", path: "/about", label: "हमारी कहानी" },
            { id: "CONTACT", path: "/contact", label: "संपर्क करें" },
            { id: "RETURN POLICY", path: "/return", label: "वापसी नीति" },
            { id: "PRIVACY POLICY", path: "/private", label: "गोपनीयता नीति" },
            { id: "TERMS & CONDITIONS", path: "/terms", label: "नियम और शर्तें" },
            { id: "CANCELLATION POLICY", path: "/cancel", label: "रद्द करने की नीति" },
        ],
        product: {
            name: "Dr. Joints पेन रिलीफ ऑयल - प्राकृतिक उपचार",
            fakeqty: "पिछले 3 घंटों में 23 बोतलें बेची गईं",
            off2: "थोक खरीद पर 70% की सीधी छूट",
            buynow: "अभी खरीदें",
            qty: "मात्रा",
            cutamount: "د.إ 360",
            amount: "د.إ 280",
            price2: "د.إ 280 - एक्सप्रेस ऑनलाइन डिलीवरी",
            para: "Dr. Joints पेन रिलीफ ऑयल के साथ प्राकृतिक उपचार की शक्ति का अनुभव करें। हमारा क्रांतिकारी आयुर्वेदिक फॉर्मूला त्वरित राहत और दीर्घकालिक उपचार प्रदान करने के लिए सावधानीपूर्वक तैयार किया गया है। शक्तिशाली जड़ी-बूटियों से भरपूर, यह तेल दर्द के स्रोत तक गहराई से पहुँचता है और जोड़ों और मांसपेशियों के दर्द को दूर करता है। हम केवल एक उत्पाद की पेशकश नहीं कर रहे हैं - बल्कि एक संपूर्ण स्वास्थ्य और कल्याण का मार्ग प्रदान कर रहे हैं, जिससे आप अपनी गतिशीलता वापस पा सकें और जीवन को पूर्णता के साथ जी सकें।",
            doctor: "स्वास्थ्य विशेषज्ञों द्वारा अनुशंसित",
            docpara: "चिकित्सा विशेषज्ञों द्वारा प्राकृतिक और प्रभावी जोड़ों के दर्द से राहत का भरोसेमंद समाधान।",
            rating: "ग्राहकों की औसत रेटिंग",
            rating2: "18,300+ सत्यापित समीक्षाएँ",
            Currency: "भारत"
        },
        about: {
            title: "डॉ. जोइंट्स का उपचार यात्रा",
            sub: "सिर्फ एक दर्द निवारण तेल नहीं – यह एक स्वास्थ्य आंदोलन है जो प्राचीन आयुर्वेदिक ज्ञान और आधुनिक वैज्ञानिक अनुसंधान में जड़ें जमा चुका है। हमारा मिशन है प्राकृतिक, समग्र समाधान प्रदान करके दर्द को उसकी जड़ से ठीक करना और जीवन बदलना।",
            titlesec: "हमारे प्रभाव के आंकड़े",
            successData: [
                { id: "SUCCESSFUL_CONSULTATIONS", value: "1,523,654", label: "बदली हुई ज़िंदगियाँ" },
                { id: "CUSTOMER_SATISFACTION", value: "97%", label: "खुशी की गारंटी" },
                { id: "GLOBAL_REACH", value: "85", label: "सेवा प्राप्त देश" },
                { id: "EXPERTISE_YEARS", value: "20+", label: "वर्षों का उपचार अनुभव" }
            ],
            relief: "दर्द-मुक्त जीवन की ओर आपका मार्ग",
            pain1: "- पूर्ण जोड़ों के दर्द का समाधान",
            paint2: "- मांसपेशियों की असुविधा से राहत",
            paint3: "- गठिया प्रबंधन",
            stats: [
                { icon: ThumbsUp, value: 5, suffix: '+', label: 'वर्षों का उपचार अनुभव' },
                { icon: Users, value: 103000, suffix: '+', label: 'संतुष्ट व्यक्ति' },
                { icon: UserCircle, value: 125, suffix: '', label: 'स्वास्थ्य विशेषज्ञ' },
                { icon: Star, value: 4.9, suffix: '', label: 'ग्राहक विश्वास' }
            ],
            reviews: [
                { review: "कोहनी के जोड़ों का परिवर्तन", image: painone },
                { review: "गठिया के दर्द पर विजय", image: painsecond },
                { review: "कंधे की गतिशीलता बहाल", image: painthird },
                { review: "टखने के जोड़ों की स्वतंत्रता", image: painfourth },
                { review: "अविश्वसनीय समर्थन प्रणाली", image: painsecond },
                { review: "जीवन बदलने वाली स्वास्थ्य यात्रा", image: painthird }
            ]
        },
        checkout: {
            title: "चेकआउट",
            sectitle: "बिलिंग विवरण",
            firstname: 'पहला नाम',
            lastname: 'अंतिम नाम',
            country: 'देश / क्षेत्र',
            address: 'सड़क का पता',
            city: 'शहर / कस्बा',
            countrytitle: "देश",
            phone: "फ़ोन",
            email: "ईमेल पता",
            order: "आपका ऑर्डर",
            clientaddress: "अपार्टमेंट/सुइट",
            mode: "भुगतान का तरीका",
            total: "कुल",
            shipping: "शिपिंग",
            subtotal: "उप-योग",
            product: "उत्पाद",
            order: "ऑर्डर प्लेस करें",
            processing: "प्रोसेसिंग...",
            successfully: "ऑर्डर सफलतापूर्वक प्लेस हुआ!",
            thank: "आपकी खरीदारी के लिए धन्यवाद। आपको जल्द ही एक पुष्टि ईमेल प्राप्त होगा।",
            continue: "खरीदारी जारी रखें",
            Currency: "AED"
        },
        returnPolicy: {
            title: 'रिटर्न पॉलिसी',
            sections: [
                {
                    title: 'रिटर्न के लिए पात्रता',
                    content: 'आपकी खरीदारी निम्नलिखित मापदंडों को पूरा करती है तो ही रिटर्न के लिए पात्र होगी: उत्पाद को इसकी मूल पैकेजिंग (प्रयुक्त या अप्रयुक्त) में लौटाना होगा, इसे हमारी वेबसाइट पर दिए गए निर्दिष्ट पते पर भेजा जाना चाहिए और खरीद की तारीख के 15 दिनों के भीतर पहुँचना चाहिए। क्षतिग्रस्त उत्पाद स्वीकार नहीं किए जाएंगे।'
                },
                {
                    title: 'रिफंड प्रक्रिया',
                    content: 'रिफंड प्रोसेस करने के लिए, ग्राहक को रिटर्न प्रक्रिया शुरू करनी होगी और उत्पाद को निर्दिष्ट पते पर भेजना होगा। उत्पाद प्राप्त और जांच होने के बाद, रिफंड 10 व्यावसायिक दिनों के भीतर मूल भुगतान विधि में क्रेडिट कर दिया जाएगा, जिसमें शिपिंग लागत शामिल नहीं होगी।'
                },
                {
                    title: 'शिपिंग रिटर्न्स',
                    content: 'रिटर्न प्रक्रिया ग्राहक द्वारा शुरू की जाती है, और ग्राहक को यह सुनिश्चित करना होगा कि उत्पाद निर्दिष्ट पते पर भेजा जाए। रिटर्न शिपिंग की लागत ग्राहक को वहन करनी होगी, जब तक कि रिटर्न किसी निर्माण दोष या त्रुटि के कारण न हो।'
                }
            ],
            contactInfo: 'किसी भी रिटर्न पूछताछ के लिए, कृपयाhello@drjoints.ae पर संपर्क करें।'
        },
        privacyPolicy: {
            heading: 'गोपनीयता नीति',
            lastUpdated: 'अंतिम अपडेट: दिसंबर 2024',
            sections: [
                {
                    title: 'हम कौन सी जानकारी इकट्ठा करते हैं',
                    content: 'यह गोपनीयता नीति बताती है कि Dr.Joints Fat and Weight Loss Oil कैसे आपकी जानकारी इकट्ठा करता है, उपयोग करता है और उसे प्रकट करता है जब आप हमारी वेबसाइट https://drjoints.ae// का उपयोग करते हैं।\n\nव्यक्तिगत जानकारी: इसमें वह जानकारी शामिल है जिसका उपयोग आपकी पहचान करने के लिए किया जा सकता है, जैसे आपका नाम, बिलिंग पता, शिपिंग पता, ईमेल पता, और फोन नंबर। आप यह जानकारी केवल तभी प्रदान करते हैं जब आप साइट पर एक फॉर्म के माध्यम से हमसे संपर्क करते हैं।\n\nगैर-व्यक्तिगत जानकारी: इसमें वह जानकारी शामिल है जिसका उपयोग आपकी पहचान करने के लिए नहीं किया जा सकता, जैसे आपका ब्राउज़र प्रकार, ऑपरेटिंग सिस्टम, आईपी पता, साइट पर ब्राउज़िंग गतिविधि, और जनसांख्यिकीय जानकारी (जैसे उम्र, लिंग)। यह जानकारी स्वचालित रूप से एकत्र की जाती है जब आप साइट पर जाते हैं।'
                },
                {
                    title: 'हम आपकी जानकारी का उपयोग कैसे करते हैं',
                    content: 'व्यक्तिगत जानकारी: हम आपकी व्यक्तिगत जानकारी का उपयोग केवल आपकी पूछताछ और अनुरोधों का उत्तर देने के लिए करेंगे। हम बिना आपकी सहमति के आपकी व्यक्तिगत जानकारी किसी तीसरे पक्ष के साथ साझा नहीं करेंगे, सिवाय इसके कि जब कानून के तहत यह आवश्यक हो।\n\nगैर-व्यक्तिगत जानकारी: हम साइट को बेहतर बनाने और यह समझने के लिए गैर-व्यक्तिगत जानकारी का उपयोग करते हैं कि उपयोगकर्ता किस प्रकार साइट के साथ इंटरैक्ट करते हैं। हम आंतरिक विपणन और प्रचार उद्देश्यों के लिए भी गैर-व्यक्तिगत जानकारी का उपयोग कर सकते हैं।'
                },
                {
                    title: 'कुकीज़ और ट्रैकिंग प्रौद्योगिकियाँ',
                    content: 'हम कुकीज़ और अन्य ट्रैकिंग प्रौद्योगिकियों का उपयोग करके साइट पर आपके उपयोग के बारे में गैर-व्यक्तिगत जानकारी एकत्र कर सकते हैं। कुकीज़ छोटे डेटा फ़ाइलें हैं जो आपकी डिवाइस पर तब संग्रहीत होती हैं जब आप किसी वेबसाइट पर जाते हैं। वे वेबसाइट को समय के साथ आपकी क्रियाओं और प्राथमिकताओं को याद रखने की अनुमति देती हैं।\n\nयदि आप हमारे लॉगिन पृष्ठ पर जाते हैं, तो हम एक अस्थायी कुकी सेट करेंगे ताकि यह जांचा जा सके कि आपका ब्राउज़र कुकीज़ स्वीकार करता है या नहीं। इस कुकी में कोई व्यक्तिगत डेटा नहीं होता है और यह तब हटा दी जाती है जब आप अपना ब्राउज़र बंद कर देते हैं।\n\nजब आप लॉगिन करते हैं, तो हम आपकी लॉगिन जानकारी और स्क्रीन डिस्प्ले विकल्पों को सहेजने के लिए कई कुकीज़ सेट करेंगे। लॉगिन कुकीज़ दो दिन तक चलती हैं, और स्क्रीन विकल्प कुकीज़ एक वर्ष तक चलती हैं। यदि आप "मुझे याद रखें" चुनते हैं, तो आपका लॉगिन दो सप्ताह तक बना रहेगा। यदि आप लॉग आउट करते हैं, तो लॉगिन कुकीज़ हटा दी जाती हैं।\n\nयदि आप एक लेख संपादित या प्रकाशित करते हैं, तो एक अतिरिक्त कुकी आपके ब्राउज़र में सहेजी जाएगी। इस कुकी में कोई व्यक्तिगत डेटा नहीं होता है और यह बस उस लेख के पोस्ट आईडी को सूचित करती है जिसे आपने अभी संपादित किया है। यह कुकी 1 दिन के बाद समाप्त हो जाती है।'
                },
                {
                    title: 'तीसरे पक्ष के सेवा प्रदाता',
                    content: 'हम साइट संचालित करने और हमारी सेवाएं प्रदान करने में सहायता करने के लिए तीसरे पक्ष के सेवा प्रदाताओं का उपयोग कर सकते हैं। इन सेवा प्रदाताओं के पास आपकी गैर-व्यक्तिगत जानकारी तक पहुंच हो सकती है। हम आपकी व्यक्तिगत जानकारी को किसी तीसरे पक्ष के सेवा प्रदाताओं के साथ उनकी विपणन उद्देश्यों के लिए आपकी सहमति के बिना साझा नहीं करेंगे।'
                },
                {
                    title: 'सुरक्षा',
                    content: 'हम आपकी जानकारी को अनधिकृत पहुंच, खुलासा, परिवर्तन या विनाश से बचाने के लिए उचित कदम उठाते हैं। हालांकि, कोई भी वेबसाइट या इंटरनेट ट्रांसमिशन पूरी तरह से सुरक्षित नहीं है।'
                },
                {
                    title: 'बच्चों की गोपनीयता',
                    content: 'साइट 13 वर्ष से कम आयु के बच्चों के लिए लक्षित नहीं है। हम 13 वर्ष से कम उम्र के बच्चों से व्यक्तिगत जानकारी जानबूझकर नहीं एकत्र करते हैं। यदि आप एक माता-पिता या अभिभावक हैं और आपको लगता है कि आपके बच्चे ने हमें व्यक्तिगत जानकारी दी है, तो कृपया हमसे संपर्क करें। हम उस जानकारी को अपने रिकॉर्ड से हटाने के लिए कदम उठाएंगे।'
                },
                {
                    title: 'इस गोपनीयता नीति में परिवर्तन',
                    content: 'हम समय-समय पर इस गोपनीयता नीति को अपडेट कर सकते हैं। हम किसी भी परिवर्तन को साइट पर पोस्ट करेंगे। हम आपको नियमित रूप से इस गोपनीयता नीति की समीक्षा करने के लिए प्रेरित करते हैं ताकि आप हमारी गोपनीयता प्रथाओं के बारे में नवीनतम जानकारी प्राप्त कर सकें।'
                }
            ],
            contactPrivacy: 'यदि आपको इस गोपनीयता नीति के बारे में कोई प्रश्न है, तो कृपया हमसे संपर्क करें:hello@drjoints.ae'
        },
        termsConditions: {
            heading: "नियम और शर्तें",
            lastUpdated: "अंतिम अपडेट: दिसंबर 2024",
            sections: [
                {
                    heading: "Dr.Joints में आपका स्वागत है!",
                    content: "ये नियम और शर्तें Dr.Joints वेबसाइट के उपयोग के लिए नियम और विनियम निर्धारित करती हैं, जो https://drjoints.ae/ पर उपलब्ध है। यह एक दर्द निवारक तेल का उत्पाद है। इस वेबसाइट तक पहुँच करके, हम मान लेते हैं कि आप इन नियमों और शर्तों से सहमत हैं। कृपया Dr.Joints का उपयोग जारी न रखें यदि आप इस पृष्ठ पर दिए गए सभी नियमों और शर्तों से सहमत नहीं हैं।"
                },
                {
                    heading: "उपयोग की जाने वाली परिभाषाएँ",
                    content: "ये नियम और शर्तें, गोपनीयता नीति, अस्वीकरण सूचना, और सभी समझौतों में निम्नलिखित परिभाषाएँ लागू होती हैं: 'ग्राहक', 'आप', और 'आपका' उस व्यक्ति को संदर्भित करते हैं, जो इस वेबसाइट पर लॉग इन करता है और कंपनी की नियम और शर्तों का पालन करता है। 'कंपनी', 'हम', 'हमारा', और 'हमें' हमारी कंपनी को संदर्भित करते हैं। 'पक्ष', 'पक्षकार', या 'हम' ग्राहक और हमें दोनों को संदर्भित करते हैं। सभी परिभाषाएँ उस प्रस्ताव, स्वीकृति, और भुगतान को संदर्भित करती हैं जो ग्राहक को हमारी सेवाओं को प्रदान करने के लिए आवश्यक है, जो लागू कानून के अनुसार है। उपर्युक्त परिभाषाओं या अन्य शब्दों को एकवचन, बहुवचन, और किसी भी व्याकरणिक बदलाव में समान अर्थ माना जाएगा।"
                },
                {
                    heading: "कुकीज़ का उपयोग",
                    content: "हम कुकीज़ का उपयोग करते हैं। Dr.Joints तक पहुँच करके, आप Dr.Joints की गोपनीयता नीति के अनुसार कुकीज़ का उपयोग करने के लिए सहमति देते हैं। अधिकांश इंटरैक्टिव वेबसाइटें प्रत्येक विज़िट पर उपयोगकर्ताओं के विवरण पुनः प्राप्त करने के लिए कुकीज़ का उपयोग करती हैं। हमारी वेबसाइट पर कुकीज़ का उपयोग कुछ कार्यक्षमताओं को सक्षम करने के लिए किया जाता है, जिससे आगंतुकों का अनुभव बेहतर हो सके। हमारे कुछ विज्ञापन/मार्केटिंग पार्टनर भी कुकीज़ का उपयोग कर सकते हैं।"
                },
                {
                    heading: "बौद्धिक संपत्ति के अधिकार",
                    content: "जब तक अन्यथा उल्लेख न किया गया हो, Dr.Joints और/या इसके लाइसेंसधारकों के पास Dr.Joints पर सभी सामग्री की बौद्धिक संपत्ति के अधिकार हैं। सभी बौद्धिक संपत्ति अधिकार सुरक्षित हैं। आप इस वेबसाइट तक केवल व्यक्तिगत उपयोग के लिए पहुँच सकते हैं, जो इन नियमों और शर्तों में वर्णित प्रतिबंधों के अधीन है।"
                },
                {
                    heading: "उपयोग के प्रतिबंध",
                    content: [
                        "Dr.Joints से सामग्री को पुनः प्रकाशित करना",
                        "Dr.Joints से सामग्री बेचना, किराए पर देना, या लाइसेंस करना",
                        "Dr.Joints से सामग्री को पुनः उत्पादित या कॉपी करना",
                        "Dr.Joints से सामग्री का पुनर्वितरण"
                    ]
                },
                {
                    heading: "टिप्पणियाँ और पोस्ट की गई सामग्री",
                    content: "इस वेबसाइट के कुछ भाग उपयोगकर्ताओं को टिप्पणियाँ पोस्ट करने और जानकारी साझा करने की अनुमति देते हैं। Dr.Joints टिप्पणियाँ पोस्ट करने से पहले उनकी समीक्षा, संपादन, या प्रकाशन नहीं करता है। टिप्पणियाँ Dr.Joints, उसके एजेंटों, या उसकी संबद्ध कंपनियों के विचारों और राय को प्रतिबिंबित नहीं करती हैं। वे केवल उस व्यक्ति के विचारों और राय को दर्शाती हैं जिसने उन्हें पोस्ट किया है। लागू कानून के तहत, Dr.Joints टिप्पणियों के लिए या किसी भी नुकसान या व्यय के लिए ज़िम्मेदार नहीं होगा जो टिप्पणियों के कारण हुआ हो।"
                },
                {
                    heading: "लिंक के लिए अस्वीकरण",
                    content: "हम आपकी वेबसाइट पर दिखने वाले किसी भी सामग्री के लिए ज़िम्मेदार नहीं होंगे। आप हमारी वेबसाइट से उत्पन्न किसी भी दावे से हमें सुरक्षा प्रदान करने और बचाव करने के लिए सहमत हैं। आपकी वेबसाइट पर कोई भी लिंक ऐसा नहीं होना चाहिए जो मानहानिकारक, अश्लील, आपराधिक हो, या किसी तीसरे पक्ष के अधिकारों का उल्लंघन करता हो।"
                }
            ],
            disclaimer: "हम किसी भी समय इन नियमों और शर्तों में संशोधन करने का अधिकार सुरक्षित रखते हैं। हमारी सेवाओं का आपका लगातार उपयोग किसी भी संशोधन की स्वीकृति माना जाएगा।",
            contactTerms: "हमारे नियमों के बारे में किसी भी प्रश्न के लिए, कृपयाhello@drjoints.ae पर संपर्क करें।"
        },
        contact: {
            title: 'हमसे संपर्क करें',
            address: 'बेगमपेट, हैदराबाद, तेलंगाना, भारत 500016',
            phone: '+91 9030202444',
            email: 'hello@drjoints.ae',
            info: "जानकारी",
            det: "विवरण",
            pagetitle: 'आपकी सहायता चाहिए?',
            pagesectitle: 'आज ही हमसे संपर्क करें',
            pageinname: "आपका नाम",
            pageinemail: "आपका ईमेल",
            pageinphone: "आपका फोन",
            pageinsubject: "विषय",
            pageinmessage: "अपनी वर्तमान स्थिति लिखें...",
            pagesubbutton: "संदेश भेजें",
        },
        shippingPolicyContent: {
            title: "शिपिंग नीति",
            lastUpdated: "अंतिम अद्यतन: अंतिम अपडेट: दिसंबर 2024",
            sections: [
                {
                    heading: "1. शिपिंग कवरेज",
                    content: `**घरेलू शिपिंग**: हम भारत के सभी प्रमुख शहरों और कस्बों में डिलीवरी करते हैं। चेकआउट पर पिन कोड सत्यापन उपलब्ध है। दूरदराज स्थानों में अतिरिक्त डिलीवरी समय लग सकता है। कुछ प्रतिबंधित क्षेत्रों में सेवा उपलब्ध नहीं हो सकती है।\n\n**अंतर्राष्ट्रीय शिपिंग**: हम दुनिया भर में ग्राहकों को अंतर्राष्ट्रीय शिपिंग की सुविधा प्रदान करते हैं। हमारा उद्देश्य आपके ऑर्डर को जितनी जल्दी और कुशलता से हो सके, वहां तक पहुँचाना है।`,
                },
                {
                    heading: "2. शिपिंग विधियाँ",
                    content: `**मानक डिलीवरी**: 5-7 कार्यदिवसों में डिलीवरी। सभी सेवा योग्य स्थानों पर उपलब्ध।`,
                },
                {
                    heading: "3. शिपिंग साझेदार",
                    content: `हम प्रतिष्ठित कूरियर भागीदारों के साथ काम करते हैं, जिनमें शामिल हैं:\n- अरामेक्स\n- डिएचएल\n- ब्लू डार्ट\n- डीडीटीसी`,
                },
                {
                    heading: "4. ऑर्डर प्रोसेसिंग",
                    content: `**प्रोसेसिंग समय**: ऑर्डर को 24 घंटे के भीतर प्रोसेस किया जाता है। ऑर्डर की पुष्टि ईमेल के माध्यम से भेजी जाती है। बड़े ऑर्डर में अतिरिक्त प्रोसेसिंग समय लग सकता है।\n\n**ऑर्डर ट्रैकिंग**: एक ट्रैकिंग नंबर ईमेल के माध्यम से भेजा जाता है। ट्रैकिंग संबंधी किसी भी सहायता के लिए ग्राहक सेवा उपलब्ध है।`,
                },
                {
                    heading: "5. डिलीवरी दिशा-निर्देश",
                    content: `**डिलीवरी प्रयास**: अधिकतम 3 डिलीवरी प्रयास किए जाएंगे। डिलीवरी पुनः प्रयास 24 घंटों के भीतर निर्धारित किए जाएंगे। प्रत्येक डिलीवरी प्रयास से पहले ग्राहकों को सूचित किया जाएगा। 3 असफल प्रयासों के बाद लौटाए गए ऑर्डर पर पुनः शिपिंग शुल्क लिया जा सकता है। केवल उत्पाद की कीमत के लिए रिफंड किया जाएगा, प्रारंभिक शिपिंग शुल्क को छोड़कर।\n\n**डिलीवरी सत्यापन**: कुछ आइटमों के लिए वैध पहचान पत्र की आवश्यकता हो सकती है। डिलीवरी पर डिजिटल सिग्नेचर की आवश्यकता है। बिना किसी के डिलीवरी की अनुमति नहीं है।`,
                },
                {
                    heading: "6. विशेष मामले",
                    content: `**बड़े ऑर्डर**: बड़े ऑर्डरों के लिए विशेष शिपिंग व्यवस्थाएँ उपलब्ध हैं। कस्टम डिलीवरी समयरेखाएँ हमारी टीम से चर्चा की जा सकती हैं। अतिरिक्त हैंडलिंग शुल्क लागू हो सकते हैं।`,
                },
                {
                    heading: "7. शिपिंग प्रतिबंध",
                    content: `**मौसम की स्थितियाँ**: गंभीर मौसम स्थितियों, प्राकृतिक आपदाओं या स्थानीय विघटन के दौरान डिलीवरी समय पर प्रभाव पड़ सकता है। ऐसी परिस्थितियों में ऑर्डरों को फिर से शेड्यूल किया जाएगा और ग्राहकों को अपडेटेड समयरेखा से सूचित किया जाएगा।`,
                },
                {
                    heading: "8. खोई हुई या क्षतिग्रस्त शिपमेंट",
                    content: `**खोई हुई पैकेज**: शिकायत प्राप्त होने के 24 घंटे के भीतर जांच शुरू की जाती है। ग्राहक को नियमित अपडेट प्रदान किए जाते हैं। पात्र मामलों में रिफंड या समाधान 15 कार्यदिवसों के भीतर प्रदान किया जाता है, जिसमें पूरा उत्पाद और शिपिंग शुल्क शामिल है।\n\n**क्षतिग्रस्त पैकेज**: यदि बाहरी क्षति दिखाई दे, तो डिलीवरी को अस्वीकार करें। डिलीवरी के 24 घंटों के भीतर फोटो दस्तावेज़ीकरण के साथ क्षति की रिपोर्ट करें। जांच के बाद प्रतिस्थापन या रिफंड प्रक्रिया की जाती है।`,
                },
                {
                    heading: "9. छुट्टियों में शिपिंग",
                    content: `**ピーक सीज़न**: त्योहारों और उच्च सीज़न के दौरान प्रोसेसिंग समय बढ़ सकता है। इन अवधियों में अतिरिक्त डिलीवरी बफर समय की सिफारिश की जाती है। ग्राहकों को किसी भी देरी के बारे में सूचित किया जाएगा।\n\n**व्यवसायिक घंटे**: ऑर्डर प्रोसेसिंग: सोमवार से रविवार, 9 AM से 6 PM IST। ग्राहक सेवा उपलब्ध है: सोमवार से शनिवार, 9 AM से 8 PM IST।`,
                },
                {
                    heading: "10. पर्यावरण प्रतिबद्धता",
                    content: `**पैकेजिंग**: हम पर्यावरण-मित्र पैकेजिंग सामग्री का उपयोग करते हैं, जिसमें न्यूनतम प्लास्टिक का उपयोग किया गया है। पैकेजिंग सामग्री जहाँ संभव हो, पुनर्नवीनीकरण स्रोतों से बनाई जाती है। हम अपव्यय को कम करने के लिए सही आकार की पैकेजिंग सुनिश्चित करते हैं।`,
                },
                {
                    heading: "11. संचार",
                    content: `**शिपिंग अपडेट**: ग्राहकों को निम्नलिखित प्राप्त होते हैं:\n- ऑर्डर पुष्टि ईमेल\n- शिपिंग पुष्टि और ट्रैकिंग विवरण\n- डिलीवरी प्रयासों की सूचनाएँ\n- डिलीवरी पूर्णता पुष्टि`,
                },
                {
                    heading: "12. ग्राहक समर्थन",
                    content: `**ईमेल**: hello@drjoints.ae\n\n**फोन**: 9392277389\n\n**प्रतिक्रिया समय**: ऑपरेशनल घंटों के दौरान 4 कार्यदिवसों के भीतर।`,
                },
                {
                    heading: "13. नीति अपडेट",
                    content: `यह नीति परिवर्तन के अधीन है। अपडेट हमारी वेबसाइट पर पोस्ट किए जाएंगे। महत्वपूर्ण परिवर्तनों के लिए ग्राहकों को कम से कम 7 दिन पहले ईमेल के माध्यम से सूचित किया जाएगा। हमारी सेवाओं का निरंतर उपयोग अद्यतन नीति को स्वीकार करने के रूप में माना जाएगा।`,
                },
            ],
        },
        cancelPolicy: {
            title: 'रद्द करने की नीति',
            lastUpdated: 'अंतिम अपडेट: अक्टूबर 2023',
            sections: [
                {
                    heading: '1. रद्द करने की अवधि',
                    content: '• आर्डर को आर्डर करने के 24 घंटे के भीतर रद्द किया जा सकता है।\n• 24 घंटे के बाद, हम आपके आर्डर को प्रोसेस और शिप करना शुरू कर देते हैं, और रद्द करना संभव नहीं होगा।'
                },
                {
                    heading: '2. अपना आर्डर कैसे रद्द करें',
                    content: 'अपना आर्डर रद्द करने के लिए, कृपया इन चरणों का पालन करें:\n1. तुरंत हमसे संपर्क करें: अपने आर्डर के 24 घंटे के भीतर हमारी ग्राहक सहायता टीम से +919392277389 पर संपर्क करें।\n2. आर्डर विवरण प्रदान करें: अपने संदेश में आर्डर नंबर और रद्द करने का कारण शामिल करें ताकि हम आपके अनुरोध को जल्दी से प्रोसेस कर सकें।'
                },
                {
                    heading: '3. शिपिंग के बाद रद्द करना',
                    content: '• यदि आपका आर्डर पहले ही शिप कर दिया गया है, तो हम इसे रद्द नहीं कर पाएंगे। इस स्थिति में, आप प्रोडक्ट प्राप्त करने के बाद इसे वापस कर सकते हैं।\n• वापसी शुरू करने के लिए, कृपया आगे के निर्देशों के लिए हमारी रिटर्न पॉलिसी देखें।'
                },
                {
                    heading: '4. रिफंड प्रक्रिया',
                    content: '• पूर्ण रिफंड: यदि प्रोडक्ट शिप होने से पहले आपका रद्द करने का अनुरोध प्रोसेस हो जाता है, तो आपको पूरा रिफंड मिलेगा।\n• आंशिक रिफंड: यदि आप प्रोडक्ट शिप होने के बाद आर्डर रद्द करते हैं, तो जब हमें वापस किया गया आइटम उसकी मूल स्थिति में प्राप्त होगा, तब प्रोडक्ट की लागत शिपिंग चार्ज घटाकर रिफंड की जाएगी।'
                },
                {
                    heading: '5. गैर-रद्द करने योग्य स्थितियां',
                    content: '• खोले/इस्तेमाल किए गए प्रोडक्ट: एक बार प्रोडक्ट खोल लिया या इस्तेमाल कर लिया जाता है, तो रद्द करना स्वीकार नहीं किया जाएगा। कृपया डिलीवरी के समय प्रोडक्ट को ध्यान से जांचें।\n• विशेष प्रमोशन या ऑफर: विशेष प्रमोशन या छूट के तहत किए गए आर्डर अलग रद्द करने की शर्तों के अधीन हो सकते हैं, जो खरीद प्रक्रिया के दौरान निर्दिष्ट किए जाएंगे।'
                }
            ],
            disclaimer: 'हम एक सहज अनुभव प्रदान करने का लक्ष्य रखते हैं, और हमारी ग्राहक सेवा टीम आपको किसी भी समस्या में सहायता करने के लिए उपलब्ध है।',
            contactCancel: 'डॉ. जॉइंट्स पेन रिलीफ ऑयल चुनने के लिए धन्यवाद। हम आपकी समझ और समर्थन की सराहना करते हैं!'
        }
    },
    cutamount: "₹ 6,674",
    amount: "₹ 6,474",
};


export default translations;