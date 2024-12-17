import { ChevronLeft, ChevronRight, ThumbsUp, Store, Users, UserCircle, Star } from 'lucide-react';
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
            home: "PRODUCT",
            about: "ABOUT",
            contact: "CONTACT",
        },
        navLinks: [
            { id: "product", path: "/product", label: "PRODUCT" },
            { id: "about", path: "/about", label: "ABOUT" },
            { id: "contact", path: "/contact", label: "CONTACT" },
        ],
        footer: [
            { id: "HOME", path: "/", label: "HOME" },
            { id: "SHOP", path: "/product", label: "PRODUCT" },
            { id: "ABOUT", path: "/about", label: "OUR STORY" },
            { id: "CONTACT", path: "/contact", label: "CONTACT" },
            { id: "RETURN POLICY", path: "/return", label: "RETURN POLICY" },
            { id: "PRIVACY POLICY", path: "/private", label: "PRIVACY POLICY" },
            { id: "TERMS & CONDITIONS", path: "/terms", label: "TERMS & CONDITIONS" },
            { id: "SHIPPING POLICY", path: "/ship", label: "SHIPPING POLICY" },
        ],
        product: {
            name: "Dr. Joints Pain Relief Oil - Natural Healing",
            fakeqty: "23 bottles sold in the last 3 hours",
            // off2: "Flat 70% OFF on Bulk Purchase",
            buynow: "Buy Now",
            qty: "Quantity",
            cutamount: "₹ 6,672",
            amount: "₹ 6,474",
            price2: "₹ 6,474 - Express Online Delivery",
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
            continue: "Continue Shopping"


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
            contactInfo: 'For any return inquiries, please contact us at hello@drjoints.in.'
        },
        privacyPolicy: {
            heading: 'Privacy Policy',
            lastUpdated: 'Last Updated: December 2024',
            sections: [
                {
                    title: 'Information Collection',
                    content: 'We collect personal information that you provide directly to us, such as your name, billing address, shipping address, email address, and phone number. You provide this information when you contact us through a form on the Site. We also collect non-personal information, including browser type, operating system, IP address, browsing activity, and demographic details, automatically when you use the Site.'
                },
                {
                    title: 'Data Usage',
                    content: 'We use personal information to respond to your inquiries and requests. Non-personal information is used to enhance the Site, improve user experience, and support internal marketing efforts. We will not share your personal information with third parties without your consent, except as required by law.'
                },
                {
                    title: 'Cookies and Tracking',
                    content: 'We use cookies and similar tracking technologies to collect non-personal information about your usage of the Site. Cookies help us remember your preferences and improve your browsing experience. Login cookies last for two days, screen options cookies last for a year, and additional cookies used during article editing expire after one day. Selecting "Remember Me" will extend login persistence to two weeks. Logging out will remove login cookies.'
                },
                {
                    title: 'Third-Party Service Providers',
                    content: 'We may use third-party service providers to operate the Site and deliver our services. These providers may have access to non-personal information. Personal information will not be shared with third parties for their marketing purposes without your consent.'
                },
                {
                    title: 'Data Protection',
                    content: 'We take reasonable steps to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no internet transmission or website is completely secure. We encourage users to take precautions when sharing personal data online.'
                },
                {
                    title: 'Children’s Privacy',
                    content: 'The Site is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe your child has provided us with personal information, please contact us to remove it.'
                },
                {
                    title: 'Policy Updates',
                    content: 'This Privacy Policy may be updated periodically. Changes will be posted on the Site, and we encourage you to review this policy regularly to stay informed about our practices.'
                }
            ],
            contactPrivacy: 'If you have any questions about our privacy practices, please contact us at hello@drjoints.in.'
        },
        termsConditions: {
            heading: 'Terms & Conditions',
            lastUpdated: 'Last Updated: December 2024',
            sections: [
                {
                    heading: "Acceptance of Terms",
                    content: "By downloading, installing, or using the Genius-Baby ('the App'), you agree to be bound by these Terms and Conditions ('Terms'). If you do not agree to these Terms, do not use the App."
                },
                {
                    heading: "License",
                    content: "Genius-Baby grants you a limited, non-exclusive, non-transferable, and revocable license to use the App for personal, non-commercial purposes, subject to these Terms."
                },
                {
                    heading: "User Obligations",
                    content: [
                        "You must be at least 18 years old to use the App.",
                        "You agree to use the App only for lawful purposes and in accordance with these Terms.",
                        "You must not attempt to interfere with the App's operation or security."
                    ]
                },
                {
                    heading: "Intellectual Property",
                    content: "All content, features, and functionality (including but not limited to text, graphics, logos, and software) are owned by Genius-Baby or its licensors and are protected by copyright and other laws. You agree not to reproduce, duplicate, copy, sell, resell, or exploit any part of the App without our express written permission."
                },
                {
                    heading: "User-Generated Content",
                    content: "You may be able to submit, upload, or otherwise make available content (such as playlists or reviews) through the App. By doing so, you grant Genius-Baby a worldwide, royalty-free, perpetual, irrevocable, non-exclusive, and sublicensable right to use, modify, distribute, and display such content in connection with the App."
                },
                {
                    heading: "Privacy",
                    content: "Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information."
                },
                {
                    heading: "Termination",
                    content: "We reserve the right to terminate or suspend your access to the App at any time, with or without notice, for any reason, including if you breach these Terms."
                },
                {
                    heading: "Limitation of Liability",
                    content: [
                        "To the fullest extent permitted by law, Genius-Baby App and its affiliates, officers, directors, employees, agents, and licensors shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from:",
                        "- Your use or inability to use the App;",
                        "- Any unauthorized access to or use of our servers and/or any personal information stored therein;",
                        "- Any bugs, viruses, or the like that may be transmitted to or through the App by any third party;",
                        "- Any errors or omissions in any content."
                    ]
                },
                {
                    heading: "Changes to Terms",
                    content: "We may modify these Terms from time to time. We will notify you of any changes by posting the new Terms on the App. Your continued use of the App after the changes are made will constitute your acceptance of the new Terms."
                },
                {
                    heading: "Governing Law",
                    content: "These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions."
                },
                {
                    heading: "Contact Information",
                    content: "If you have any questions about these Terms, please contact us at srilogishyd@gmail.com."
                }
            ],
            disclaimer: 'We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of any changes.',
            contactTerms: 'For any questions regarding our terms, please contact hello@drjoints.in.'
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
            lastUpdated: "Last Updated: [Insert Last Update Date]",
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
            home: "المنتج",
            about: "من نحن",
            contact: "اتصل بنا",
        },
        navLinks: [
            { id: "product", path: "/product", label: "المنتج" },
            { id: "about", path: "/about", label: "من نحن" },
            { id: "contact", path: "/contact", label: "اتصل بنا" },
        ],
        footer: [
            { id: "HOME", path: "/", label: "الرئيسية" },
            { id: "SHOP", path: "/product", label: "المنتج" },
            { id: "ABOUT", path: "/about", label: "قصتنا" },
            { id: "CONTACT", path: "/contact", label: "اتصل بنا" },
            { id: "RETURN POLICY", path: "/return", label: "سياسة الإرجاع" },
            { id: "PRIVACY POLICY", path: "/private", label: "سياسة الخصوصية" },
            { id: "TERMS & CONDITIONS", path: "/terms", label: "الشروط والأحكام" },
            { id: "SHIPPING POLICY", path: "/ship", label: "سياسة الشحن" },
        ],
        product: {
            name: "زيت تخفيف آلام المفاصل من Dr. Joints - الشفاء الطبيعي",
            fakeqty: "تم بيع 23 زجاجة في آخر 3 ساعات",
            // off2: "خصم 70٪ على الشراء بالجملة",
            buynow: "اشترِ الآن",
            qty: "الكمية",
            cutamount: "288.63 ر.س",
            amount: "280 ر.س",
            price2: "280 ر.س - توصيل سريع عبر الإنترنت",
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
            continue: "مواصلة التسوق"
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
            "contactInfo": "لأي استفسارات حول الإرجاع، يرجى الاتصال بنا على hello@drjoints.in."
        },
        privacyPolicy: {
            "heading": "سياسة الخصوصية",
            "lastUpdated": "آخر تحديث: ديسمبر 2024",
            "sections": [
                {
                    "title": "جمع المعلومات",
                    "content": "نقوم بجمع المعلومات الشخصية التي تقدمها لنا مباشرة مثل اسمك، عنوان الفوترة، عنوان الشحن، عنوان البريد الإلكتروني، ورقم الهاتف. يتم تقديم هذه المعلومات عندما تتواصل معنا عبر نموذج على الموقع. كما نقوم أيضًا بجمع المعلومات غير الشخصية، مثل نوع المتصفح، ونظام التشغيل، وعنوان IP، ونشاط التصفح، والتفاصيل الديموغرافية بشكل تلقائي عند استخدام الموقع."
                },
                {
                    "title": "استخدام البيانات",
                    "content": "نستخدم المعلومات الشخصية للرد على استفساراتك وطلبك. يتم استخدام المعلومات غير الشخصية لتحسين الموقع، وتعزيز تجربة المستخدم، ودعم الجهود التسويقية الداخلية. لن نشارك معلوماتك الشخصية مع أطراف ثالثة دون موافقتك، إلا إذا كان ذلك مطلوبًا بموجب القانون."
                },
                {
                    "title": "الكوكيز والتتبع",
                    "content": "نستخدم الكوكيز وتقنيات التتبع المشابهة لجمع معلومات غير شخصية حول استخدامك للموقع. تساعدنا الكوكيز في تذكر تفضيلاتك وتحسين تجربة التصفح الخاصة بك. الكوكيز الخاصة بتسجيل الدخول تدوم لمدة يومين، وكوكيز خيارات الشاشة تدوم لمدة عام، والكوكيز الإضافية المستخدمة أثناء تحرير المقالات تنتهي صلاحيتها بعد يوم واحد. عند تحديد \"تذكرني\"، سيتم تمديد مدة تسجيل الدخول إلى أسبوعين. سيتم إزالة كوكيز تسجيل الدخول عند الخروج."
                },
                {
                    "title": "مقدمو الخدمات من أطراف ثالثة",
                    "content": "قد نستخدم مقدمي خدمات من أطراف ثالثة لتشغيل الموقع وتقديم خدماتنا. قد يكون لهؤلاء المزودين وصول إلى المعلومات غير الشخصية. لن تتم مشاركة المعلومات الشخصية مع أطراف ثالثة لأغراض التسويق دون موافقتك."
                },
                {
                    "title": "حماية البيانات",
                    "content": "نقوم باتخاذ خطوات معقولة لحماية معلوماتك من الوصول غير المصرح به أو الكشف أو التغيير أو التدمير. ومع ذلك، لا توجد أي وسيلة نقل عبر الإنترنت أو موقع ويب آمن تمامًا. نشجع المستخدمين على اتخاذ الاحتياطات عند مشاركة البيانات الشخصية عبر الإنترنت."
                },
                {
                    "title": "خصوصية الأطفال",
                    "content": "الموقع غير مخصص للأطفال دون سن 13 عامًا. نحن لا نجمع معلومات شخصية من الأطفال دون سن 13 عامًا. إذا كنت تعتقد أن طفلك قد قدم لنا معلومات شخصية، يرجى الاتصال بنا لإزالتها."
                },
                {
                    "title": "تحديثات السياسة",
                    "content": "قد يتم تحديث سياسة الخصوصية هذه بين الحين والآخر. سيتم نشر التغييرات على الموقع، ونشجعك على مراجعة هذه السياسة بانتظام للبقاء على اطلاع بممارساتنا."
                }
            ],
            "contactPrivacy": "إذا كان لديك أي أسئلة حول ممارسات الخصوصية لدينا، يرجى الاتصال بنا على hello@drjoints.in."
        },
        termsConditions: {
            "heading": "الشروط والأحكام",
            "lastUpdated": "آخر تحديث: ديسمبر 2024",
            "sections": [
                {
                    "heading": "قبول الشروط",
                    "content": "من خلال تنزيل أو تثبيت أو استخدام تطبيق Genius-Baby ('التطبيق')، فإنك توافق على الالتزام بهذه الشروط والأحكام ('الشروط'). إذا كنت لا توافق على هذه الشروط، فلا تستخدم التطبيق."
                },
                {
                    "heading": "الرخصة",
                    "content": "يمنحك تطبيق Genius-Baby ترخيصًا محدودًا وغير حصري وغير قابل للتحويل وقابلًا للإلغاء لاستخدام التطبيق لأغراض شخصية وغير تجارية، وفقًا لهذه الشروط."
                },
                {
                    "heading": "التزامات المستخدم",
                    "content": [
                        "يجب أن يكون عمرك 18 عامًا على الأقل لاستخدام التطبيق.",
                        "توافق على استخدام التطبيق فقط لأغراض قانونية ووفقًا لهذه الشروط.",
                        "يجب ألا تحاول التدخل في تشغيل التطبيق أو أمانه."
                    ]
                },
                {
                    "heading": "الملكية الفكرية",
                    "content": "جميع المحتويات والميزات والوظائف (بما في ذلك على سبيل المثال لا الحصر النصوص، الرسومات، الشعارات، والبرامج) هي ملك لـ Genius-Baby أو مرخصيها ومحميّة بموجب حقوق النشر والقوانين الأخرى. توافق على عدم إعادة إنتاج أو تكرار أو نسخ أو بيع أو إعادة بيع أو استغلال أي جزء من التطبيق دون إذن خطي مسبق منا."
                },
                {
                    "heading": "المحتوى الذي ينشئه المستخدم",
                    "content": "قد تتمكن من تقديم أو تحميل أو جعل المحتوى (مثل قوائم التشغيل أو المراجعات) متاحًا من خلال التطبيق. من خلال القيام بذلك، فإنك تمنح Genius-Baby حقًا عالميًا وغير حصري وبدون رسوم ملكية ودائمًا وقابلًا للتحويل لاستخدام هذا المحتوى وتعديله وتوزيعه وعرضه بالاتصال مع التطبيق."
                },
                {
                    "heading": "الخصوصية",
                    "content": "خصوصيتك مهمة بالنسبة لنا. يرجى مراجعة سياسة الخصوصية الخاصة بنا لفهم كيفية جمع معلوماتك واستخدامها وحمايتها."
                },
                {
                    "heading": "الإلغاء",
                    "content": "نحتفظ بالحق في إنهاء أو تعليق وصولك إلى التطبيق في أي وقت، مع أو بدون إشعار، لأي سبب كان، بما في ذلك إذا خالفت هذه الشروط."
                },
                {
                    "heading": "تحديد المسؤولية",
                    "content": [
                        "إلى أقصى حد يسمح به القانون، فإن تطبيق Genius-Baby والشركات التابعة له، والمسؤولين، والمديرين، والموظفين، والوكلاء، والمرخصين لن يتحملوا أي مسؤولية عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية أو عقابية، أو أي خسارة في الأرباح أو الإيرادات، سواء كانت ناتجة بشكل مباشر أو غير مباشر، أو أي خسارة في البيانات أو الاستخدام أو السمعة أو أي خسائر غير مادية أخرى، الناتجة عن:",
                        "- استخدامك أو عدم قدرتك على استخدام التطبيق؛",
                        "- أي وصول غير مصرح به إلى أو استخدام لخوادمنا وأي معلومات شخصية مخزنة بها؛",
                        "- أي أخطاء أو عيوب في المحتوى."
                    ]
                },
                {
                    "heading": "التغييرات في الشروط",
                    "content": "قد نقوم بتعديل هذه الشروط من وقت لآخر. سيتم إشعارك بأي تغييرات من خلال نشر الشروط الجديدة على التطبيق. يعتبر استمرارك في استخدام التطبيق بعد إجراء التغييرات موافقة منك على الشروط الجديدة."
                },
                {
                    "heading": "القانون المعمول به",
                    "content": "تخضع هذه الشروط وتُفسر وفقًا لقوانين الهند، دون مراعاة أحكام تعارض القوانين."
                },
                {
                    "heading": "معلومات الاتصال",
                    "content": "إذا كانت لديك أي أسئلة حول هذه الشروط، يرجى الاتصال بنا على srilogishyd@gmail.com."
                }
            ],
            "disclaimer": "نحتفظ بالحق في تعديل هذه الشروط في أي وقت. يعتبر الاستمرار في استخدام خدماتنا قبولًا لأي تغييرات.",
            "contactTerms": "لأي استفسارات بشأن شروطنا، يرجى الاتصال بـ hello@drjoints.in."
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
            "lastUpdated": "آخر تحديث: [أدخل تاريخ التحديث الأخير]",
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
            goproduct: "डॉ. जोइंट्स पेन रिलीफ ऑयल के साथ अपना जीवन बदलें",
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
            about: "हमारी कहानी",
            contact: "संपर्क करें",
        },
        navLinks: [
            { id: "product", path: "/product", label: "वेलनेस शॉप" },
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
        ],
        product: {
            name: "Dr. Joints पेन रिलीफ ऑयल - प्राकृतिक उपचार",
            fakeqty: "पिछले 3 घंटों में 23 बोतलें बेची गईं",
            off2: "थोक खरीद पर 70% की सीधी छूट",
            buynow: "अभी खरीदें",
            qty: "मात्रा",
            cutamount: "₹ 6,672",
            amount: "₹ 6,474",
            price2: "₹ 6,474 - तेज़ ऑनलाइन डिलीवरी",
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
            continue: "खरीदारी जारी रखें"
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
            contactInfo: 'किसी भी रिटर्न पूछताछ के लिए, कृपया hello@drjoints.in पर संपर्क करें।'
        },
        privacyPolicy: {
            heading: 'गोपनीयता नीति',
            lastUpdated: 'अंतिम अपडेट: दिसंबर 2024',
            sections: [
                {
                    title: 'जानकारी संग्रह',
                    content: 'हम व्यक्तिगत जानकारी एकत्र करते हैं जो आप हमें सीधे प्रदान करते हैं, जैसे आपका नाम, बिलिंग पता, शिपिंग पता, ईमेल पता और फोन नंबर। आप यह जानकारी साइट पर एक फॉर्म के माध्यम से संपर्क करने पर प्रदान करते हैं। हम गैर-व्यक्तिगत जानकारी भी एकत्र करते हैं, जिसमें ब्राउज़र प्रकार, ऑपरेटिंग सिस्टम, आईपी पता, ब्राउज़िंग गतिविधि और जनसांख्यिकी विवरण शामिल हैं, जो स्वचालित रूप से साइट का उपयोग करते समय एकत्रित होती है।'
                },
                {
                    title: 'डेटा उपयोग',
                    content: 'हम व्यक्तिगत जानकारी का उपयोग आपकी पूछताछ और अनुरोधों का जवाब देने के लिए करते हैं। गैर-व्यक्तिगत जानकारी का उपयोग साइट को बढ़ाने, उपयोगकर्ता अनुभव को सुधारने और आंतरिक मार्केटिंग प्रयासों का समर्थन करने के लिए किया जाता है। हम आपकी व्यक्तिगत जानकारी को आपकी सहमति के बिना तृतीय पक्षों के साथ साझा नहीं करेंगे, जब तक कि कानून द्वारा आवश्यक न हो।'
                },
                {
                    title: 'कुकीज और ट्रैकिंग',
                    content: 'हम साइट के उपयोग के बारे में गैर-व्यक्तिगत जानकारी एकत्र करने के लिए कुकीज और समान ट्रैकिंग प्रौद्योगिकियों का उपयोग करते हैं। कुकीज हमें आपकी प्राथमिकताएं याद रखने और आपके ब्राउज़िंग अनुभव को बेहतर बनाने में मदद करती हैं। लॉगिन कुकीज दो दिनों तक रहती हैं, स्क्रीन विकल्प कुकीज एक साल तक रहती हैं, और लेख संपादन के दौरान उपयोग की जाने वाली अतिरिक्त कुकीज एक दिन बाद समाप्त हो जाती हैं। "मुझे याद रखें" चुनने से लॉगिन को दो सप्ताह तक बढ़ा दिया जाएगा। लॉग आउट करने पर लॉगिन कुकीज हटा दी जाएंगी।'
                },
                {
                    title: 'तृतीय-पक्ष सेवा प्रदाता',
                    content: 'हम साइट संचालित करने और अपनी सेवाओं को वितरित करने के लिए तृतीय-पक्ष सेवा प्रदाताओं का उपयोग कर सकते हैं। इन प्रदाताओं को गैर-व्यक्तिगत जानकारी तक पहुँच हो सकती है। व्यक्तिगत जानकारी आपकी सहमति के बिना तृतीय पक्षों के साथ उनके विपणन उद्देश्यों के लिए साझा नहीं की जाएगी।'
                },
                {
                    title: 'डेटा सुरक्षा',
                    content: 'हम आपकी जानकारी को अनधिकृत पहुंच, प्रकटीकरण, परिवर्तन, या विनाश से बचाने के लिए उचित कदम उठाते हैं। हालांकि, कोई भी इंटरनेट ट्रांसमिशन या वेबसाइट पूरी तरह से सुरक्षित नहीं है। हम उपयोगकर्ताओं को ऑनलाइन व्यक्तिगत डेटा साझा करते समय सतर्क रहने के लिए प्रोत्साहित करते हैं।'
                },
                {
                    title: 'बच्चों की गोपनीयता',
                    content: 'यह साइट 13 वर्ष से कम आयु के बच्चों के लिए नहीं है। हम जानबूझकर 13 वर्ष से कम उम्र के बच्चों से व्यक्तिगत जानकारी एकत्र नहीं करते हैं। यदि आपको विश्वास है कि आपके बच्चे ने हमें व्यक्तिगत जानकारी प्रदान की है, तो कृपया इसे हटाने के लिए हमसे संपर्क करें।'
                },
                {
                    title: 'नीति अपडेट्स',
                    content: 'यह गोपनीयता नीति समय-समय पर अपडेट की जा सकती है। परिवर्तन साइट पर पोस्ट किए जाएंगे, और हम आपको अपनी प्रथाओं के बारे में सूचित रहने के लिए इस नीति की नियमित रूप से समीक्षा करने के लिए प्रोत्साहित करते हैं।'
                }
            ],
            contactPrivacy: 'यदि आपको हमारी गोपनीयता प्रथाओं के बारे में कोई प्रश्न हैं, तो कृपया hello@drjoints.in पर संपर्क करें।'
        },
        termsConditions: {
            heading: 'नियम और शर्तें',
            lastUpdated: 'अंतिम अपडेट: दिसंबर 2024',
            sections: [
                {
                    heading: "नियमों की स्वीकृति",
                    content: "Genius-Baby ('एप') डाउनलोड, इंस्टॉल या उपयोग करके, आप इन नियमों और शर्तों ('नियम') से बाध्य होने के लिए सहमत होते हैं। यदि आप इन नियमों से सहमत नहीं हैं, तो एप का उपयोग न करें।"
                },
                {
                    heading: "लाइसेंस",
                    content: "Genius-Baby आपको इन नियमों के अधीन व्यक्तिगत, गैर-व्यावसायिक उपयोग के लिए एप का सीमित, गैर-विशेष, गैर-हस्तांतरणीय और रद्द करने योग्य लाइसेंस प्रदान करता है।"
                },
                {
                    heading: "उपयोगकर्ता दायित्व",
                    content: [
                        "एप का उपयोग करने के लिए आपकी आयु कम से कम 18 वर्ष होनी चाहिए।",
                        "आप एप का उपयोग केवल वैध उद्देश्यों के लिए और इन नियमों के अनुसार करने के लिए सहमत हैं।",
                        "आप एप के संचालन या सुरक्षा में हस्तक्षेप करने का प्रयास नहीं करेंगे।"
                    ]
                },
                {
                    heading: "बौद्धिक संपदा",
                    content: "सभी सामग्री, सुविधाएँ और कार्यक्षमता (जैसे पाठ, ग्राफिक्स, लोगो और सॉफ़्टवेयर) Genius-Baby या उसके लाइसेंसधारकों के स्वामित्व में हैं और कॉपीराइट और अन्य कानूनों द्वारा संरक्षित हैं। आप हमारी स्पष्ट लिखित अनुमति के बिना एप के किसी भी भाग को पुन: उत्पन्न, डुप्लिकेट, कॉपी, बेच, या शोषण करने के लिए सहमत नहीं हैं।"
                },
                {
                    heading: "उपयोगकर्ता द्वारा निर्मित सामग्री",
                    content: "आप एप के माध्यम से सामग्री (जैसे प्लेलिस्ट या समीक्षाएं) सबमिट, अपलोड, या अन्यथा उपलब्ध कर सकते हैं। ऐसा करके, आप Genius-Baby को उस सामग्री का उपयोग, संशोधित, वितरित, और एप के संबंध में प्रदर्शन करने का अधिकार देते हैं।"
                },
                {
                    heading: "गोपनीयता",
                    content: "आपकी गोपनीयता हमारे लिए महत्वपूर्ण है। कृपया यह समझने के लिए हमारी गोपनीयता नीति की समीक्षा करें कि हम आपकी जानकारी कैसे एकत्र करते हैं, उपयोग करते हैं, और सुरक्षा करते हैं।"
                },
                {
                    heading: "समाप्ति",
                    content: "हम किसी भी समय, बिना किसी नोटिस के, आपके एप तक पहुँच को समाप्त करने या निलंबित करने का अधिकार सुरक्षित रखते हैं।"
                },
                {
                    heading: "जिम्मेदारी की सीमा",
                    content: [
                        "कानून द्वारा अनुमत सीमा तक, Genius-Baby और उसके सहयोगी किसी भी अप्रत्यक्ष, आकस्मिक, विशेष, परिणामी, या दंडात्मक नुकसान के लिए जिम्मेदार नहीं होंगे।",
                        "- एप का उपयोग या उपयोग करने में असमर्थता से उत्पन्न होने वाले नुकसान।",
                        "- हमारे सर्वर तक अनधिकृत पहुंच से होने वाले नुकसान।",
                        "- किसी तीसरे पक्ष द्वारा एप के माध्यम से प्रसारित किसी भी वायरस।",
                        "- किसी भी सामग्री में त्रुटियां या चूक।"
                    ]
                },
                {
                    heading: "नियमों में परिवर्तन",
                    content: "हम समय-समय पर इन नियमों को संशोधित कर सकते हैं। एप पर नए नियम पोस्ट करके आपको सूचित किया जाएगा। एप का निरंतर उपयोग संशोधनों की स्वीकृति माना जाएगा।"
                },
                {
                    heading: "शासन कानून",
                    content: "ये नियम भारतीय कानूनों के अधीन और उनके अनुसार व्याख्यायित होंगे।"
                },
                {
                    heading: "संपर्क जानकारी",
                    content: "यदि आपके पास इन नियमों के बारे में कोई प्रश्न हैं, तो कृपया srilogishyd@gmail.com पर संपर्क करें।"
                }
            ],
            disclaimer: 'हम इन नियमों को कभी भी संशोधित करने का अधिकार सुरक्षित रखते हैं। हमारी सेवाओं का निरंतर उपयोग किसी भी परिवर्तन की स्वीकृति माना जाएगा।',
            contactTerms: 'किसी भी प्रश्न के लिए, कृपया hello@drjoints.in पर संपर्क करें।'
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
            lastUpdated: "अंतिम अद्यतन: [अंतिम अद्यतन की तारीख डालें]",
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

    },
    cutamount: "₹ 6,674",
    amount: "₹ 6,474",
};


export default translations; 