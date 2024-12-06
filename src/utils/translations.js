import { ChevronLeft, ChevronRight, ThumbsUp, Store, Users, UserCircle, Star } from 'lucide-react';
import painone from '../assets/pain_first.svg';
import painsecond from '../assets/pain_second.svg';
import painthird from '../assets/pain_three.svg';
import painfourth from '../assets/legpain.jpeg';
const translations = {
    ENGLISH: {
        // home: {
        //     title: "Feel Better ",
        //     titlesec: "Move Better",
        //     button: "Shop Now",
        //     question: "Why Choose Dr. Joints Pain Relief Oil?",
        //     answer: `Our Dr. Joints Pain Relief Oil is a natural, effective solution for joint pain. Our mission is to provide natural, effective solutions for those struggling with joint pain, helping you regain flexibility and comfort. We offer premium Ayurvedic oils, formulated using traditional herbs and ingredients, to help alleviate joint discomfort and promote recovery.`,
        //     answertwo: `At Dr. Joints, we believe in the power of nature and holistic wellness. Our commitment to quality and authenticity ensures that each product is crafted to deliver lasting relief.`,
        //     title2: "Natural, Effective Solutions for Joint Pain",
        //     sub2: "Helping you regain flexibility and comfort with premium Ayurvedic oils",
        //     trust: "Trusted By Healthcare Professionals",
        //     follow: "Follow Us for Updates on Natural Pain Relief",
        //     client: "What Our Clients Say about Dr. Joints Pain Relief Oil",
        //     goproduct: "Start Buying Dr. Joints Pain Relief Oil",
        //     reviews: [
        //         { id: 1, name: "John Doe", review: "This service is fantastic!", stars: 5 },
        //         { id: 2, name: "Jane Smith", review: "Highly professional and reliable.", stars: 4 },
        //         { id: 3, name: "Alice Johnson", review: "Amazing experience overall!", stars: 5 },
        //         { id: 4, name: "Robert Brown", review: "Good quality and fast delivery.", stars: 4 },
        //         { id: 5, name: "Emily Davis", review: "Exceeded all expectations!", stars: 5 },
        //         { id: 6, name: "Michael Wilson", review: "Very efficient and supportive.", stars: 4 },
        //         { id: 7, name: "Sarah Lee", review: "Great experience with the team!", stars: 5 },
        //         { id: 8, name: "Chris Martin", review: "Outstanding service quality.", stars: 5 }
        //     ],
        // },
        // navbar: {
        //     home: "SHOP",
        //     about: "ABOUT",
        //     contact: "CONTACT",
        // },
        // navLinks: [
        //     { id: "product", path: "/product", label: "SHOP" },
        //     { id: "about", path: "/about", label: "ABOUT" },
        //     { id: "contact", path: "/contact", label: "CONTACT" },
        // ],
        // footer: [
        //     { id: "HOME", path: "/", label: "HOME" },
        //     { id: "SHOP", path: "/product", label: "SHOP" },
        //     { id: "ABOUT", path: "/about", label: "ABOUT" },
        //     { id: "CONTACT", path: "/contact", label: "CONTACT" },
        //     { id: "RETURN POLICY", path: "/return", label: "RETURN POLICY" },
        //     { id: "PRIVACY POLICY", path: "/private", label: "PRIVACY POLICY" },
        //     { id: "TERMS & CONDITIONS", path: "/terms", label: "TERMS & CONDITIONS" },
        // ],
        // product: {
        //     name: "Dr. Joints Pain Relief Oil",
        //     fakeqty: "23 sold in the last 3 hours",
        //     off: "Flat 50% OFF",
        //     off2: "Flat 70% OFF",
        //     buynow: "Buy Now",
        //     qty: "Qty",
        //     price: "₹ 3495 - COD",
        //     price2: "₹ 3145 - Online Delivery",
        //     para: `Our Dr. Joints Pain Relief Oil is a natural and effective solution for joint pain. Our mission is to provide natural, effective solutions for those struggling with joint pain, helping you regain flexibility and comfort. We offer premium Ayurvedic oils, formulated using traditional herbs and ingredients, to help alleviate joint discomfort and promote recovery. At Dr. Joints, we believe in the power of nature and holistic wellness. Our commitment to quality and authenticity ensures that each product is crafted to deliver lasting relief.`,
        //     doctor: "Trusted By the Doctor",
        //     docpara: "Trusted by healthcare professionals for natural and effective joint pain relief.",
        //     rating: "Average Store Rating",
        //     rating2: "18.3K Customer Reviews"
        // },

        // about: {
        //     title: "All About Dr. Joints Pain Relief Oil",
        //     sub: "Our Dr. Joints Pain Relief Oil is a natural and effective solution for joint pain, formulated using traditional herbs and ingredients to help alleviate joint discomfort and promote recovery. Our commitment to quality and authenticity ensures that each product is crafted to deliver lasting relief.",
        //     titlesec: "Our Success in Numbers!",
        //     successData: [
        //         { id: "SUCCESSFUL_CONSULTATIONS", value: "1,523,654", label: "Successful Consultations" },
        //         { id: "CUSTOMER_SATISFACTION", value: "97%", label: "Customer Satisfaction Rate" },
        //         { id: "GLOBAL_REACH", value: "85", label: "Countries with Consultations" },
        //         { id: "EXPERTISE_YEARS", value: "20+", label: "Years of Expertise in Ayurveda Treatments" }
        //     ],
        //     relief: "Get Relief with Dr. Joints Pain Relief Oil",
        //     pain1: "- Joint Pain Relief",
        //     paint2: "- Muscle Pain Relief",
        //     paint3: "- Arthritis Pain Relief",
        //     stats: [
        //         { icon: ThumbsUp, value: 5, suffix: '+', label: 'Years of Operations' },
        //         { icon: Users, value: 103000, suffix: '+', label: 'Happy Members' },
        //         { icon: UserCircle, value: 125, suffix: '', label: 'Team Members' },
        //         { icon: Star, value: 4.9, suffix: '', label: 'Google Rating' }
        //     ],
        //     reviews: [
        //         { review: "Elbow Joint Pain", image: painone },
        //         { review: "Arthritis Pain", image: painsecond },
        //         { review: "Shoulder Pain", image: painthird },
        //         { review: "Footer and Ankle joint Pain", image: painfourth },
        //         { review: "Very efficient and supportive.", image: painsecond },
        //         { review: "Great experience with the team!", image: painthird }
        //     ]
        // },
        home: {
            title: "Feel Better",
            titlesec: "Move Better",
            button: "Heal Now",
            question: "Why Choose Dr. Joints Pain Relief Oil?",
            answer: `Discover a breakthrough in natural pain relief. Our Dr. Joints Pain Relief Oil is a scientifically formulated, 100% natural solution designed to liberate you from joint and muscle discomfort. We don't just mask pain – we target its root cause with the healing power of premium Ayurvedic herbs.`,
            answertwo: `At Dr. Joints, we blend ancient wisdom with modern research to deliver transformative wellness. Our commitment goes beyond temporary relief – we're dedicated to your long-term healing and quality of life.`,
            title2: "Your Natural Path to Pain-Free Living",
            sub2: "Empowering you to move freely with premium Ayurvedic healing",
            trust: "Trusted By Leading Healthcare Professionals",
            follow: "Join Our Journey to Natural Wellness",
            client: "Life-Changing Stories from Dr. Joints Users",
            goproduct: "Transform Your Life with Dr. Joints Pain Relief Oil",
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
        },
        navbar: {
            home: "WELLNESS SHOP",
            about: "OUR STORY",
            contact: "CONNECT",
        },
        navLinks: [
            { id: "product", path: "/product", label: "WELLNESS SHOP" },
            { id: "about", path: "/about", label: "OUR STORY" },
            { id: "contact", path: "/contact", label: "CONNECT" },
        ],
        footer: [
            { id: "HOME", path: "/", label: "HOME" },
            { id: "SHOP", path: "/product", label: "WELLNESS SHOP" },
            { id: "ABOUT", path: "/about", label: "OUR STORY" },
            { id: "CONTACT", path: "/contact", label: "CONNECT" },
            { id: "RETURN POLICY", path: "/return", label: "RETURN POLICY" },
            { id: "PRIVACY POLICY", path: "/private", label: "PRIVACY POLICY" },
            { id: "TERMS & CONDITIONS", path: "/terms", label: "TERMS & CONDITIONS" },
        ],
        product: {
            name: "Dr. Joints Pain Relief Oil - Natural Healing Elixir",
            fakeqty: "23 bottles sold in the last 3 hours",
            off: "Flat 50% OFF - Limited Time Offer",
            off2: "Flat 70% OFF on Bulk Purchase",
            buynow: "Heal Now",
            qty: "Quantity",
            price: "₹ 3,495 - Cash on Delivery",
            price2: "₹ 3,145 - Express Online Delivery",
            para: `Unleash the power of natural healing with Dr. Joints Pain Relief Oil. Our revolutionary Ayurvedic formula is meticulously crafted to provide instant relief and long-term healing. Packed with potent herbal ingredients, our oil penetrates deep to address joint and muscle pain at its source. We're not just offering a product – we're providing a holistic path to wellness, empowering you to reclaim your mobility and live life to the fullest.`,
            doctor: "Endorsed by Healthcare Professionals",
            docpara: "Trusted solution for natural, effective joint pain relief by medical experts.",
            rating: "Average Customer Rating",
            rating2: "18,300+ Verified Reviews"
        },
        about: {
            title: "The Dr. Joints Healing Journey",
            sub: "More than a pain relief oil – we're a wellness movement rooted in ancient Ayurvedic wisdom and modern scientific research. Our mission is to transform lives by providing natural, holistic solutions that address pain at its core.",
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
            ]
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
            phone: '+91 9908 016 333',
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
    },
    ar: {
        home: {
            title: "اشعر بتحسن",
            titlesec: "تحرك بشكل أفضل",
            button: "ابدأ الشفاء الآن",
            question: "لماذا تختار زيت تخفيف آلام المفاصل د. جويتس؟",
            answer: `اكتشف ابتكارًا جديدًا في تخفيف الألم الطبيعي. زيت تخفيف آلام المفاصل د. جويتس هو حل طبيعي 100% مصمم علميًا لتحريرك من آلام المفاصل والعضلات. نحن لا نخفي الألم فقط – بل نستهدف جذوره باستخدام قوة الشفاء للأعشاب الأيورفيدا الممتازة.`,
            answertwo: `في د. جويتس، نمزج الحكمة القديمة مع الأبحاث الحديثة لتقديم تجربة صحية تحولية. التزامنا يتجاوز التخفيف المؤقت – نحن مكرسون لشفائك على المدى الطويل وتحسين جودة حياتك.`,
            title2: "طريقك الطبيعي لحياة خالية من الألم",
            sub2: "تمكينك من التحرك بحرية مع شفاء أيورفيدا الممتاز",
            trust: "موثوق به من قبل أبرز المهنيين الصحيين",
            follow: "انضم إلى رحلتنا نحو العافية الطبيعية",
            client: "قصص غيرت الحياة من مستخدمي زيت د. جويتس",
            goproduct: "غير حياتك مع زيت تخفيف آلام المفاصل د. جويتس",
            reviews: [
                { id: 1, name: "أحمد المنصوري", review: "كمدير موقع بناء، كانت آلام الركبة تعيق عملي. أعاد لي د. جويتس حركتي وكفاءتي المهنية!", stars: 5 },
                { id: 2, name: "فاطمة حسن", review: "حلم مدرب اليوغا! احترافي، طبيعي، وفعال بشكل لا يصدق لتحسين مرونة مفاصلي.", stars: 4 },
                { id: 3, name: "سلطان السويدي", review: "العيش مع التهاب المفاصل في مناخ دبي تحدٍ حقيقي. هذا الزيت هو الحل المثالي لراحتي اليومية.", stars: 5 },
                { id: 4, name: "ليلى بن دراي", review: "كمتحمسة للياقة البدنية، يعد التعافي السريع أمرًا ضروريًا. جودة استثنائية وراحة سريعة!", stars: 4 },
                { id: 5, name: "خالد محمد", review: "العمل لساعات طويلة في مكاتب مكيفة يمكن أن يسبب تصلب المفاصل. د. جويتس تجاوز كل توقعاتي!", stars: 5 },
                { id: 6, name: "مريم المكتوم", review: "توصية صادقة من محترف في مجال الصحة. منتج داعم يقدم نتائج حقيقية!", stars: 4 },
                { id: 7, name: "عمر عبد الله", review: "كعداء يعاني من آلام الركبة المستمرة، هذا هو حلي الذي غير حياتي!", stars: 5 },
                { id: 8, name: "سارة الفهيم", review: "مثالي للمحترفين النشطين في دبي. علاج طبيعي يوفر راحة فورية!", stars: 5 },
                { id: 9, name: "أحمد المنصوري", review: "كمدير موقع بناء، كانت آلام الركبة تعيق عملي. أعاد لي د. جويتس حركتي وكفاءتي المهنية!", stars: 5 },
                { id: 10, name: "فاطمة حسن", review: "حلم مدرب اليوغا! احترافي، طبيعي، وفعال بشكل لا يصدق لتحسين مرونة مفاصلي.", stars: 4 },
                { id: 11, name: "سلطان السويدي", review: "العيش مع التهاب المفاصل في مناخ دبي تحدٍ حقيقي. هذا الزيت هو الحل المثالي لراحتي اليومية.", stars: 5 },
                { id: 12, name: "ليلى بن دراي", review: "كمتحمسة للياقة البدنية، يعد التعافي السريع أمرًا ضروريًا. جودة استثنائية وراحة سريعة!", stars: 4 },
                { id: 13, name: "خالد محمد", review: "العمل لساعات طويلة في مكاتب مكيفة يمكن أن يسبب تصلب المفاصل. د. جويتس تجاوز كل توقعاتي!", stars: 5 },
                { id: 14, name: "مريم المكتوم", review: "توصية صادقة من محترف في مجال الصحة. منتج داعم يقدم نتائج حقيقية!", stars: 4 },
                { id: 15, name: "عمر عبد الله", review: "كعداء يعاني من آلام الركبة المستمرة، هذا هو حلي الذي غير حياتي!", stars: 5 },
                { id: 16, name: "سارة الفهيم", review: "مثالي للمحترفين النشطين في دبي. علاج طبيعي يوفر راحة فورية!", stars: 5 }

            ],
        },
        navbar: {
            home: "متجر الصحة",
            about: "قصتنا",
            contact: "تواصل معنا",
        },
        navLinks: [
            { id: "product", path: "/product", label: "متجر الصحة" },
            { id: "about", path: "/about", label: "قصتنا" },
            { id: "contact", path: "/contact", label: "تواصل معنا" },
        ],
        footer: [
            { id: "HOME", path: "/", label: "الرئيسية" },
            { id: "SHOP", path: "/product", label: "متجر الصحة" },
            { id: "ABOUT", path: "/about", label: "قصتنا" },
            { id: "CONTACT", path: "/contact", label: "تواصل معنا" },
            { id: "RETURN POLICY", path: "/return", label: "سياسة الإرجاع" },
            { id: "PRIVACY POLICY", path: "/private", label: "سياسة الخصوصية" },
            { id: "TERMS & CONDITIONS", path: "/terms", label: "الشروط والأحكام" },
        ],
        product: {
            name: "زيت تخفيف آلام المفاصل د. جويتس - إكسير الشفاء الطبيعي",
            fakeqty: "تم بيع 23 زجاجة في آخر 3 ساعات",
            off: "خصم 50% - عرض لفترة محدودة",
            off2: "خصم 70% على الشراء بالجملة",
            buynow: "ابدأ الشفاء الآن",
            qty: "الكمية",
            price: "₹ 3,495 - الدفع عند الاستلام",
            price2: "₹ 3,145 - توصيل سريع عبر الإنترنت",
            para: `أطلق العنان لقوة الشفاء الطبيعي مع زيت تخفيف آلام المفاصل د. جويتس. تركيبتنا الأيورفيدا الثورية مصممة بعناية لتقديم راحة فورية وشفاء طويل الأمد. مليء بمكونات عشبية قوية، يخترق زيتنا بعمق لمعالجة آلام المفاصل والعضلات من جذورها. نحن لا نقدم منتجًا فقط – نحن نوفر طريقًا شاملًا للعافية، يمكّنك من استعادة حركتك والعيش بأقصى إمكانياتك.`,
            doctor: "موصى به من قبل المهنيين الصحيين",
            docpara: "حل موثوق وطبيعي وفعال لتخفيف آلام المفاصل معتمد من الخبراء الطبيين.",
            rating: "متوسط تقييم العملاء",
            rating2: "18,300+ تقييم موثوق"
        },
        about: {
            title: "رحلة الشفاء مع د. جويتس",
            sub: "أكثر من مجرد زيت لتخفيف الآلام – نحن حركة للصحة والعافية متجذرة في حكمة الأيورفيدا القديمة والبحث العلمي الحديث. مهمتنا هي تغيير الحياة من خلال تقديم حلول طبيعية شاملة تعالج الألم من جذوره.",
            titlesec: "تأثيرنا بالأرقام",
            successData: [
                { id: "SUCCESSFUL_CONSULTATIONS", value: "1,523,654", label: "حيوات تم تغييرها" },
                { id: "CUSTOMER_SATISFACTION", value: "97%", label: "ضمان السعادة" },
                { id: "GLOBAL_REACH", value: "85", label: "بلدان خدمناها" },
                { id: "EXPERTISE_YEARS", value: "20+", label: "سنوات من خبرة الشفاء" }
            ],
            relief: "طريقك إلى حياة خالية من الألم",
            pain1: "- حل كامل لآلام المفاصل",
            paint2: "- تخفيف انزعاج العضلات",
            paint3: "- إدارة التهاب المفاصل",
            stats: [
                { icon: ThumbsUp, value: 5, suffix: '+', label: 'سنوات من الشفاء' },
                { icon: Users, value: 103000, suffix: '+', label: 'أفراد راضون' },
                { icon: UserCircle, value: 125, suffix: '', label: 'خبراء صحة وعافية' },
                { icon: Star, value: 4.9, suffix: '', label: 'ثقة العملاء' }
            ],
            reviews: [
                { review: "تحول مفصل الكوع", image: painone },
                { review: "التغلب على آلام التهاب المفاصل", image: painsecond },
                { review: "استعادة حركة الكتف", image: painthird },
                { review: "حرية مفصل الكاحل", image: painfourth },
                { review: "نظام دعم مذهل", image: painsecond },
                { review: "رحلة صحة وحيوية غيرت الحياة", image: painthird }
            ]
        },
        checkout: {
            title: "الدفع",
            sectitle: "تفاصيل الفاتورة",
            firstname: 'الاسم الأول',
            lastname: 'اسم العائلة',
            country: 'الدولة/المنطقة',
            address: 'عنوان الشارع',
            city: 'المدينة/البلدة',
            countrytitle: "الدولة",
            phone: "رقم الهاتف",
            email: "عنوان البريد الإلكتروني",
            order: "طلبك",
            clientaddress: "الشقة/الجناح",
            mode: "طريقة الدفع",
            total: "الإجمالي",
            shipping: "الشحن",
            subtotal: "الإجمالي الفرعي",
            product: "المنتج",
            order: "إتمام الطلب",
            processing: "جارٍ المعالجة...",
            successfully: "تم تقديم الطلب بنجاح!",
            thank: "شكرًا لشرائك. ستتلقى رسالة تأكيد بالبريد الإلكتروني قريبًا.",
            continue: "متابعة التسوق"
        },
        returnPolicy: {
            title: 'سياسة الإرجاع',
            sections: [
                {
                    title: 'الأهلية للإرجاع',
                    content: 'شراءك مؤهل للإرجاع إذا استوفى الشروط التالية: يجب إعادة المنتج في عبوته الأصلية (سواء كان مستخدمًا أو غير مستخدم)، إلى العنوان المحدد المذكور على موقعنا الإلكتروني، وأن يصل خلال 15 يومًا من تاريخ الشراء. لن يتم قبول المنتجات التالفة.'
                },
                {
                    title: 'عملية استرداد الأموال',
                    content: 'لإتمام عملية استرداد الأموال، يجب على العملاء بدء عملية الإرجاع وإرسال المنتج إلى العنوان المحدد. بمجرد استلام المنتج وفحصه، سيتم رد الأموال إلى طريقة الدفع الأصلية خلال 10 أيام عمل، باستثناء تكاليف الشحن.'
                },
                {
                    title: 'شحن المرتجعات',
                    content: 'عملية الإرجاع تتم بمبادرة العميل، ويتحمل العملاء مسؤولية التأكد من شحن المنتج إلى العنوان المحدد. لا تغطي تكاليف شحن المرتجعات إلا إذا كان الإرجاع بسبب عيب في التصنيع أو خطأ.'
                }
            ],
            contactInfo: 'للاستفسارات المتعلقة بالإرجاع، يرجى الاتصال بنا على hello@drjoints.in.'
        },
        privacyPolicy: {
            heading: 'سياسة الخصوصية',
            lastUpdated: 'آخر تحديث: ديسمبر 2024',
            sections: [
                {
                    title: 'جمع المعلومات',
                    content: 'نحن نجمع المعلومات الشخصية التي تقدمها لنا مباشرة، مثل اسمك، عنوان الفواتير، عنوان الشحن، عنوان البريد الإلكتروني، ورقم الهاتف. يتم تقديم هذه المعلومات عند الاتصال بنا من خلال نموذج على الموقع. كما نقوم بجمع معلومات غير شخصية تلقائيًا عند استخدامك للموقع، بما في ذلك نوع المتصفح، نظام التشغيل، عنوان IP، نشاط التصفح، والتفاصيل الديموغرافية.'
                },
                {
                    title: 'استخدام البيانات',
                    content: 'نستخدم المعلومات الشخصية للرد على استفساراتك وطلباتك. تُستخدم المعلومات غير الشخصية لتحسين الموقع، وتعزيز تجربة المستخدم، ودعم جهود التسويق الداخلي. لن نشارك معلوماتك الشخصية مع أطراف ثالثة دون موافقتك، إلا إذا كان ذلك مطلوبًا بموجب القانون.'
                },
                {
                    title: 'الكوكيز والتتبع',
                    content: 'نستخدم الكوكيز وتقنيات التتبع المشابهة لجمع معلومات غير شخصية حول استخدامك للموقع. تساعدنا الكوكيز في تذكر تفضيلاتك وتحسين تجربتك في التصفح. تستمر الكوكيز لتسجيل الدخول لمدة يومين، وتستمر خيارات الشاشة لمدة عام، بينما تنتهي الكوكيز الإضافية المستخدمة أثناء تحرير المقالات بعد يوم. تحديد "تذكرني" يمدد تسجيل الدخول إلى أسبوعين. تسجيل الخروج سيزيل كوكيز تسجيل الدخول.'
                },
                {
                    title: 'مزودي الخدمة الخارجيين',
                    content: 'قد نستخدم مزودي خدمة خارجيين لتشغيل الموقع وتقديم خدماتنا. قد يكون لدى هؤلاء المزودين إمكانية الوصول إلى المعلومات غير الشخصية. لن يتم مشاركة المعلومات الشخصية مع أطراف ثالثة لأغراض تسويقية دون موافقتك.'
                },
                {
                    title: 'حماية البيانات',
                    content: 'نتخذ خطوات معقولة لحماية معلوماتك من الوصول غير المصرح به أو الكشف أو التغيير أو التدمير. ومع ذلك، فإن أي نقل عبر الإنترنت أو موقع إلكتروني لا يكون آمنًا بالكامل. نشجع المستخدمين على اتخاذ الاحتياطات عند مشاركة البيانات الشخصية عبر الإنترنت.'
                },
                {
                    title: 'خصوصية الأطفال',
                    content: 'الموقع غير مخصص للأطفال تحت سن 13 عامًا. نحن لا نجمع معلومات شخصية عن قصد من الأطفال تحت 13 عامًا. إذا كنت تعتقد أن طفلك قد زودنا بمعلومات شخصية، يرجى الاتصال بنا لإزالتها.'
                },
                {
                    title: 'تحديثات السياسة',
                    content: 'قد يتم تحديث سياسة الخصوصية هذه بشكل دوري. سيتم نشر التغييرات على الموقع، ونشجعك على مراجعة هذه السياسة بانتظام لمعرفة ممارساتنا.'
                }
            ],
            contactPrivacy: 'إذا كان لديك أي أسئلة حول ممارسات الخصوصية لدينا، يرجى الاتصال بنا على hello@drjoints.in.'
        },
        termsConditions: {
            heading: 'الشروط والأحكام',
            lastUpdated: 'آخر تحديث: ديسمبر 2024',
            sections: [
                {
                    heading: "قبول الشروط",
                    content: "بتنزيل أو تثبيت أو استخدام تطبيق Genius-Baby ('التطبيق')، فإنك توافق على الالتزام بهذه الشروط والأحكام ('الشروط'). إذا كنت لا توافق على هذه الشروط، فلا تستخدم التطبيق."
                },
                {
                    heading: "الرخصة",
                    content: "تمنحك Genius-Baby رخصة محدودة وغير حصرية وغير قابلة للتحويل وقابلة للإلغاء لاستخدام التطبيق لأغراض شخصية وغير تجارية، وفقًا لهذه الشروط."
                },
                {
                    heading: "التزامات المستخدم",
                    content: [
                        "يجب أن يكون عمرك 18 عامًا على الأقل لاستخدام التطبيق.",
                        "توافق على استخدام التطبيق فقط للأغراض القانونية ووفقًا لهذه الشروط.",
                        "يجب ألا تحاول التدخل في تشغيل التطبيق أو أمانه."
                    ]
                },
                {
                    heading: "الملكية الفكرية",
                    content: "جميع المحتويات والميزات والوظائف (بما في ذلك على سبيل المثال لا الحصر النصوص والرسومات والشعارات والبرامج) مملوكة لـ Genius-Baby أو مرخصيها وتحميها قوانين حقوق النشر وغيرها من القوانين. توافق على عدم نسخ أو بيع أو استغلال أي جزء من التطبيق بدون إذن كتابي صريح."
                },
                {
                    heading: "المحتوى المقدم من المستخدم",
                    content: "قد تتمكن من تقديم أو تحميل أو إتاحة محتوى (مثل القوائم أو المراجعات) عبر التطبيق. من خلال القيام بذلك، تمنح Genius-Baby حقًا عالميًا وخاليًا من الإتاوات ودائمًا وغير قابل للإلغاء وغير حصري وقابل للترخيص لاستخدام وتعديل وتوزيع وعرض هذا المحتوى فيما يتعلق بالتطبيق."
                },
                {
                    heading: "الخصوصية",
                    content: "خصوصيتك تهمنا. يرجى مراجعة سياسة الخصوصية لدينا لفهم كيفية جمع واستخدام وحماية معلوماتك."
                },
                {
                    heading: "الإنهاء",
                    content: "نحتفظ بالحق في إنهاء أو تعليق وصولك إلى التطبيق في أي وقت، مع أو بدون إشعار، لأي سبب، بما في ذلك إذا انتهكت هذه الشروط."
                },
                {
                    heading: "تحديد المسؤولية",
                    content: [
                        "إلى أقصى حد يسمح به القانون، لا تتحمل Genius-Baby وتابعيها وموظفيها ووكلائها ومرخصيها أي مسؤولية عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية أو عقابية، أو أي خسارة للأرباح أو الإيرادات، سواء تم تكبدها مباشرة أو غير مباشرة، أو أي فقدان للبيانات أو الاستخدام أو حسن النية أو الخسائر غير الملموسة الأخرى، الناتجة عن:",
                        "- استخدامك أو عدم قدرتك على استخدام التطبيق؛",
                        "- أي وصول غير مصرح به إلى خوادمنا أو أي معلومات شخصية مخزنة فيها؛",
                        "- أي أخطاء أو فيروسات قد تنتقل إلى التطبيق بواسطة طرف ثالث؛",
                        "- أي أخطاء أو إغفالات في أي محتوى."
                    ]
                },
                {
                    heading: "التغييرات في الشروط",
                    content: "قد نقوم بتعديل هذه الشروط من وقت لآخر. سنخطرك بأي تغييرات من خلال نشر الشروط الجديدة على التطبيق. استمرار استخدامك للتطبيق بعد إجراء التغييرات يشكل قبولًا للشروط الجديدة."
                },
                {
                    heading: "القانون الحاكم",
                    content: "تخضع هذه الشروط وتفسر وفقًا لقوانين الهند، دون اعتبار لتعارضها مع أحكام القوانين."
                },
                {
                    heading: "معلومات الاتصال",
                    content: "إذا كانت لديك أي أسئلة حول هذه الشروط، يرجى الاتصال بنا على srilogishyd@gmail.com."
                }
            ],
            disclaimer: 'نحتفظ بالحق في تعديل هذه الشروط في أي وقت. استمرار استخدام خدماتنا يشكل قبولًا لأي تغييرات.',
            contactTerms: 'لأي أسئلة تتعلق بشروطنا، يرجى الاتصال بنا على hello@drjoints.in.'
        },
        contact: {
            title: 'اتصل بنا',
            address: 'بيجومبيت، حيدر أباد، تيلانجانا، الهند 500016',
            phone: '+91 9908 016 333',
            email: 'hello@drjoints.ae',
            info: "معلومات",
            det: "تفاصيل",
            pagetitle: 'تحتاج إلى مساعدتنا؟',
            pagesectitle: 'يمكنك الاتصال بنا اليوم',
            pageinname: "اسمك",
            pageinemail: "بريدك الإلكتروني",
            pageinphone: "رقم هاتفك",
            pageinsubject: "الموضوع",
            pageinmessage: "اكتب حالتك الحالية...",
            pagesubbutton: "إرسال الرسالة",
        },

    },
    hi: {
        home: {
            title: "बेहतर महसूस करें",
            titlesec: "बेहतर चलें",
            button: "अब हील करें",
            question: "डॉ. जोइंट्स पेन रिलीफ ऑयल क्यों चुनें?",
            answer: `प्राकृतिक दर्द राहत में एक क्रांति की खोज करें। हमारा डॉ. जोइंट्स पेन रिलीफ ऑयल एक वैज्ञानिक रूप से तैयार, 100% प्राकृतिक समाधान है, जिसे आपके जोड़ों और मांसपेशियों की असुविधा से आपको आजाद करने के लिए डिज़ाइन किया गया है। हम केवल दर्द को छुपाते नहीं हैं – हम इसे जड़ से ठीक करने के लिए प्रीमियम आयुर्वेदिक जड़ी-बूटियों की उपचार शक्ति का उपयोग करते हैं।`,
            answertwo: `डॉ. जोइंट्स में, हम प्राचीन ज्ञान और आधुनिक शोध को मिलाकर आपका स्वास्थ्य बदलने के लिए समर्पित हैं। हमारा समर्पण अस्थायी राहत तक सीमित नहीं है – हम आपके दीर्घकालिक उपचार और जीवन की गुणवत्ता के प्रति प्रतिबद्ध हैं।`,
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
            name: "डॉ. जोइंट्स पेन रिलीफ ऑयल - प्राकृतिक उपचार का अमृत",
            fakeqty: "पिछले 3 घंटों में 23 बोतलें बिकीं",
            off: "सीधा 50% छूट - सीमित समय की पेशकश",
            off2: "थोक खरीद पर सीधा 70% छूट",
            buynow: "अभी हील करें",
            qty: "मात्रा",
            price: "₹ 3,495 - कैश ऑन डिलीवरी",
            price2: "₹ 3,145 - एक्सप्रेस ऑनलाइन डिलीवरी",
            para: `डॉ. जोइंट्स पेन रिलीफ ऑयल के साथ प्राकृतिक उपचार की शक्ति को अनलॉक करें। हमारा क्रांतिकारी आयुर्वेदिक फॉर्मूला तुरंत राहत और दीर्घकालिक उपचार प्रदान करने के लिए सावधानीपूर्वक तैयार किया गया है। शक्तिशाली हर्बल तत्वों से भरपूर, हमारा तेल गहराई तक प्रवेश करता है और जोड़ों और मांसपेशियों के दर्द को उसकी जड़ से ठीक करता है। हम केवल एक उत्पाद नहीं दे रहे हैं – हम एक समग्र स्वास्थ्य पथ प्रदान कर रहे हैं, जिससे आप अपनी गतिशीलता पुनः प्राप्त कर सकें और जीवन को पूरी तरह से जी सकें।`,
            doctor: "स्वास्थ्य देखभाल पेशेवरों द्वारा स्वीकृत",
            docpara: "प्राकृतिक, प्रभावी जोड़ों के दर्द से राहत के लिए विशेषज्ञों द्वारा भरोसेमंद समाधान।",
            rating: "औसत ग्राहक रेटिंग",
            rating2: "18,300+ सत्यापित समीक्षाएँ"
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
            phone: '+91 9908 016 333',
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
        }
    },
};

export default translations; 