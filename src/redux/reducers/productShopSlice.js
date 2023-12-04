// wishlistSlice.js
import { createSlice } from '@reduxjs/toolkit';
import Book1 from '../../assets/images/book-1.jpg';
// Define the initial state based on the provided JSON data
const initialState = {
    allBooks: [
        {
            id: 1,
            title: 'ডোপামিন ডিটক্স',
            author: 'থিবো মেরিস',
            translate: 'প্রিতম মুজতাহিদ',
            description:
                'আপনি কি গুরুত্বপূর্ণ কাজগুলো করার ক্ষেত্রে গড়িমসি ভাব করেন? প্রায়শই অস্থির বোধ করেন? হাতের কাজে মনোযোগ দিতে পারেন না? যেসব গুরুত্বপূর্ণ বিষয় জীবনকে উন্নত করতে পারে, সেগুলো কি আপনার ভেতরে কোনো উত্তেজনা সৃষ্টি করে না? </br>যদি ব্যাপারটা এমনই হয়, তাহলে সম্ভবতঃ আপনার ডোপামিন ডিটক্সের প্রয়োজন।</br>বর্তমান বিশ্বে আমাদেরকে বিক্ষিপ্ত করতে পারে এমন উপাদানের অভাব নেই। এগুলোকে এড়িয়ে গিয়ে আমাদের মূল লক্ষ্যে ফোকাস করা খুব কঠিন। এগুলো অবিরত আমাদেরকে প্রভাবিত করে, অস্থির করে তুলে। কেন এমনটা হয়- তা আমরা নিজেরাও জানি না। মূল লক্ষ্যে পৌঁছাতে আমাদের যখন কাজে মনোযোগ দেওয়া প্রয়োজন, তখন দেখা যায় আমাদের মনোযোগ অন্য বাজে কাজের দিকে সরে যাচ্ছে। লক্ষ্যে পৌঁছার জন্য যা করার কথা, আমরা তা করতে পারছি না। বরং বেড়াতে বের হয়ে যাচ্ছি, কফি সপে আড্ডায় মেতে ওঠছি বা তখনই ইমেইলগুলো খুলে দেখার কথা মনে পড়ে যাচ্ছে। চারপাশের সবকিছু তখন আমাদের কাছে দারুণ ভালো লাগার ব্যাপার হয়ে দাঁড়ায়। শুধু কর্তব্য কাজটার কথাই মনে থাকে না।',
            image: Book1,
            published: '৩ দিন আগে',
            category: 'thriller',
            tag: 'featured',
            preference: 'borrow',
            area: 'Mohammadpur',
            price: '',
        },
        {
            id: 2,
            title: 'উপন্যাস সমগ্র -২য়',
            author: 'সঞ্জীব চট্টোপাধ্যায়',
            description:
                'সুদক্ষ লেখক সঞ্জীব চট্টোপাধ্যায় বাংলা সাহিত্যে এক ও অদ্বিতীয়। তাঁর বিপুল সৃষ্টির মধ্যে মণিমাণিক্যের মতো ছড়িয়ে আছে ছোট বড় বিচিত্রস্বাদের একরাশ উপন্যাস। খন্ডে খন্ডে প্রকাশিতব্য উপনাস সমগ্র-র এই দ্বিতীয় খন্ডে অন্তর্ভুক্ত হয়েছে-ফিরে ফিরে আসি,একে একে, দীনজনে (অখন্ড), মসনদ, তনয়, হাতের প্যাঁচ, গৃহসুখ, অবশেষে, কেস জন্ডিস, দেবী| লেখকের স্বনির্বাচিত মোট দশটি নানারঙের উপনাস।',
            image: 'https://images-na.ssl-images-amazon.com/images/I/91JZtTIJlnL.jpg',
            published: 'August 22, 2022',
            category: 'novel',
            preference: 'borrow',
            area: 'Dhanmondi',
            price: '',
        },
        {
            id: 3,
            title: 'গোয়েন্দা গার্গী',
            author: 'তপন বন্দোপাধ্যায়',
            description:
                'গার্গী মুখার্জি। কলেজের তৃতীয় বর্ষের অঙ্কে অনার্সের ছাত্রী। আর পাঁচজন সমবয়সি মেয়েদের থেকে আলাদা স্বভাবের। ছেলেবেলা থেকে গােয়েন্দা গল্পের পোকা গার্গী সবসময় যে-কোনও সমস্যার ভিতরে ঢুকে পড়তে চায়। তীক্ষ্ণ বুদ্ধি দিয়ে বিচার করে নানান দৃষ্টিকোণ থেকে। এবং উন্মোচিত হয় একের পর এক আশ্চর্য সব রহস্য। গোয়েন্দা গার্গী বইয়ে এইরকম দশদশটি রহস্য একত্রে পরিবেশিত হয়েছে কিশোর-কিশোরী পড়ুয়াদের জন্য। গার্গীর বৈশিষ্ট্য, সে যে-কোনও জটিল সমস্যা-সঙ্কটে মাথা ঠান্ডা রাখে, খুবই সাদামাটাভঙ্গিতে বিষয়ের গভীরে প্রবেশ করে। আর যেসব রহস্য নিয়ে তার গোয়েন্দাগিরি, তার অধিকাংশই কোনও সাজানো ঘটনা নয়, দৈনন্দিন জীবনে প্রায়শই এদের মুখোমুখি হতে হয়। পরবর্তীকালে গার্গী বড় হয়ে পুরোপুরি এই গোয়েন্দা পেশায় মনোনিবেশ করেছে। পাঠকদের পরিচিত সেই গোয়েন্দা মেয়ে গার্গী শুরুর সময়ে কেমন ছিল, তারই আভাস রয়েছে "গোয়েন্দা গার্গী" বইয়ে। স্বাদু-টানটান রহস্য কাহিনি—শুরু করলে শেষ করতেই হবে।</br>এই বইতে গোয়েন্দা গার্গীর যে দশটি গল্প রয়েছে, সেগুলি হল- মুক্তোর মালায় দুটো হিরের টুকরো, কিংকর হত্যা, রহস্য, ধূমকেতু-রহস্য, গ্রহান্তরের প্রাণী, অপরাধী সনাক্তকরণ হিরের আংটি, দন্ত অন্তর্ধান রহস্য, ম্যাকবেথ অন্তর্ধান রহস্য, নেপথ্যে এক আততায়ী, পাহাড়খনির হিরে রহস্য',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlPAKAw8LGLEr1gw_yFIzDbmKcfar5_mkA36TVv8ojgZU2IUgOKGM2Y2v_9QWhm7OltYo&usqp=CAU',
            published: 'August 22, 2022',
            category: 'goyenda',
            tag: 'featured',
            preference: 'lend',
            area: 'Mohammadpur',
            price: '',
        },
        {
            id: 4,
            title: 'রূপসী বাংলা',
            author: 'জীবনানন্দ দাস',
            description:
                'তাকে বলা হয় রূপসী বাংলার কবি, বলা হয় নির্জনতার কবি, বাংলা সাহিত্যের শুদ্ধতম কবিও বলা হয়। তবে রূপসী বাংলার কবি নামেই তিনি বেশি পরিচিত। জীবনানন্দ দাশ , যিনি কবিতায় পঙক্তিতে উঠিয়ে এনেছেন বাংলার রূপকে। বলেছিলেন উপমাই কবিত্ব। বহুমুখী উপমায় বাংলার চিরায়ত রূপকে কে আঁকতে পেরেছে তারচেয়ে বেশি?</br>জীবনানন্দ দাশের (১৮ ফেব্রুয়ারি ১৯৯৯ দ্র. কবির স্ত্রী লাবণ্য দাশ এর মতে কবির জন্মসাল ১৮৯৮-২২ অক্টোবর ১৯৫৪) জীবদ্দশায় মাত্র সাতটি কাব্যগ্রন্থ প্রকাশিত হয়েছিল। পরবর্তীতে দেখা যায় কবির আরো বহু কবিতা অপ্রকাশিত। কবির মৃত্যুর পর আরো বেশ কিছু কাব্যগ্রন্থ প্রকাশিত হয়। প্রকাশিত হয় কবির লেখা প্রবন্ধ, ছোটগল্প, উপন্যাস।</br>‘রূপসী বাংলা’ কাব্যগ্রন্থটি প্রকাশিত হয় কবির মৃত্যুর পর। প্রকাশসময় ১৯৫৭ এর আগষ্ট। কবিভ্রাতা অশোকানন্দ দাশের সরাসরি তত্ত্বাবধানে কাব্যগ্রন্থটি প্রকাশিত হয়। রূপসী বাংলা’র রচনাকাল ১৯৩২। জীবনানন্দ দাশ রূপসী বাংলা’র কবিতাগুলো ছিল শিরোনামহীন। লক্ষ্য করলে দেখা যাবে কাব্যগ্রন্থটির প্রতিটি কবিতার শিরোনাম প্রথম পঙক্তির প্রথমাংশ থেকে থেকে। ধারনা করা হয় রূপসী বাংলা কাব্যগ্রন্থের নামকরণ এবং উৎসর্গ অশোকানন্দের।',
            image: 'https://images-na.ssl-images-amazon.com/images/I/51KspIil-GL._SX317_BO1,204,203,200_.jpg',
            published: '২২ শে অক্টোবর, ২০০৯',
            category: 'travel',
            preference: 'exchange',
            area: 'Uttora, Dhaka',
            price: '',
        },
        {
            id: 5,
            title: 'রূপসী বাংলা',
            author: 'জীবনানন্দ দাস',
            description:
                'তাকে বলা হয় রূপসী বাংলার কবি, বলা হয় নির্জনতার কবি, বাংলা সাহিত্যের শুদ্ধতম কবিও বলা হয়। তবে রূপসী বাংলার কবি নামেই তিনি বেশি পরিচিত। জীবনানন্দ দাশ , যিনি কবিতায় পঙক্তিতে উঠিয়ে এনেছেন বাংলার রূপকে। বলেছিলেন উপমাই কবিত্ব। বহুমুখী উপমায় বাংলার চিরায়ত রূপকে কে আঁকতে পেরেছে তারচেয়ে বেশি?</br>জীবনানন্দ দাশের (১৮ ফেব্রুয়ারি ১৯৯৯ দ্র. কবির স্ত্রী লাবণ্য দাশ এর মতে কবির জন্মসাল ১৮৯৮-২২ অক্টোবর ১৯৫৪) জীবদ্দশায় মাত্র সাতটি কাব্যগ্রন্থ প্রকাশিত হয়েছিল। পরবর্তীতে দেখা যায় কবির আরো বহু কবিতা অপ্রকাশিত। কবির মৃত্যুর পর আরো বেশ কিছু কাব্যগ্রন্থ প্রকাশিত হয়। প্রকাশিত হয় কবির লেখা প্রবন্ধ, ছোটগল্প, উপন্যাস।</br>‘রূপসী বাংলা’ কাব্যগ্রন্থটি প্রকাশিত হয় কবির মৃত্যুর পর। প্রকাশসময় ১৯৫৭ এর আগষ্ট। কবিভ্রাতা অশোকানন্দ দাশের সরাসরি তত্ত্বাবধানে কাব্যগ্রন্থটি প্রকাশিত হয়। রূপসী বাংলা’র রচনাকাল ১৯৩২। জীবনানন্দ দাশ রূপসী বাংলা’র কবিতাগুলো ছিল শিরোনামহীন। লক্ষ্য করলে দেখা যাবে কাব্যগ্রন্থটির প্রতিটি কবিতার শিরোনাম প্রথম পঙক্তির প্রথমাংশ থেকে থেকে। ধারনা করা হয় রূপসী বাংলা কাব্যগ্রন্থের নামকরণ এবং উৎসর্গ অশোকানন্দের।',
            image: 'https://images-na.ssl-images-amazon.com/images/I/51KspIil-GL._SX317_BO1,204,203,200_.jpg',
            published: '২২ শে অক্টোবর, ২০০৯',
            category: 'travel',
            preference: 'exchange',
            area: 'Badda, Dhaka',
            price: '',
        },
        {
            id: 6,
            title: 'গোয়েন্দা গার্গী',
            author: 'তপন বন্দোপাধ্যায়',
            description:
                'গার্গী মুখার্জি। কলেজের তৃতীয় বর্ষের অঙ্কে অনার্সের ছাত্রী। আর পাঁচজন সমবয়সি মেয়েদের থেকে আলাদা স্বভাবের। ছেলেবেলা থেকে গােয়েন্দা গল্পের পোকা গার্গী সবসময় যে-কোনও সমস্যার ভিতরে ঢুকে পড়তে চায়। তীক্ষ্ণ বুদ্ধি দিয়ে বিচার করে নানান দৃষ্টিকোণ থেকে। এবং উন্মোচিত হয় একের পর এক আশ্চর্য সব রহস্য। গোয়েন্দা গার্গী বইয়ে এইরকম দশদশটি রহস্য একত্রে পরিবেশিত হয়েছে কিশোর-কিশোরী পড়ুয়াদের জন্য। গার্গীর বৈশিষ্ট্য, সে যে-কোনও জটিল সমস্যা-সঙ্কটে মাথা ঠান্ডা রাখে, খুবই সাদামাটাভঙ্গিতে বিষয়ের গভীরে প্রবেশ করে। আর যেসব রহস্য নিয়ে তার গোয়েন্দাগিরি, তার অধিকাংশই কোনও সাজানো ঘটনা নয়, দৈনন্দিন জীবনে প্রায়শই এদের মুখোমুখি হতে হয়। পরবর্তীকালে গার্গী বড় হয়ে পুরোপুরি এই গোয়েন্দা পেশায় মনোনিবেশ করেছে। পাঠকদের পরিচিত সেই গোয়েন্দা মেয়ে গার্গী শুরুর সময়ে কেমন ছিল, তারই আভাস রয়েছে "গোয়েন্দা গার্গী" বইয়ে। স্বাদু-টানটান রহস্য কাহিনি—শুরু করলে শেষ করতেই হবে।</br>এই বইতে গোয়েন্দা গার্গীর যে দশটি গল্প রয়েছে, সেগুলি হল- মুক্তোর মালায় দুটো হিরের টুকরো, কিংকর হত্যা, রহস্য, ধূমকেতু-রহস্য, গ্রহান্তরের প্রাণী, অপরাধী সনাক্তকরণ হিরের আংটি, দন্ত অন্তর্ধান রহস্য, ম্যাকবেথ অন্তর্ধান রহস্য, নেপথ্যে এক আততায়ী, পাহাড়খনির হিরে রহস্য',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlPAKAw8LGLEr1gw_yFIzDbmKcfar5_mkA36TVv8ojgZU2IUgOKGM2Y2v_9QWhm7OltYo&usqp=CAU',
            published: 'August 22, 2022',
            preference: 'buy&sell',
            category: 'goyenda',
            area: 'Basundhora',
            price: '20',
        },
        {
            id: 7,
            title: 'ডোপামিন ডিটক্স',
            author: 'থিবো মেরিস',
            translate: 'প্রিতম মুজতাহিদ',
            description:
                'আপনি কি গুরুত্বপূর্ণ কাজগুলো করার ক্ষেত্রে গড়িমসি ভাব করেন? প্রায়শই অস্থির বোধ করেন? হাতের কাজে মনোযোগ দিতে পারেন না? যেসব গুরুত্বপূর্ণ বিষয় জীবনকে উন্নত করতে পারে, সেগুলো কি আপনার ভেতরে কোনো উত্তেজনা সৃষ্টি করে না? </br>যদি ব্যাপারটা এমনই হয়, তাহলে সম্ভবতঃ আপনার ডোপামিন ডিটক্সের প্রয়োজন।</br>বর্তমান বিশ্বে আমাদেরকে বিক্ষিপ্ত করতে পারে এমন উপাদানের অভাব নেই। এগুলোকে এড়িয়ে গিয়ে আমাদের মূল লক্ষ্যে ফোকাস করা খুব কঠিন। এগুলো অবিরত আমাদেরকে প্রভাবিত করে, অস্থির করে তুলে। কেন এমনটা হয়- তা আমরা নিজেরাও জানি না। মূল লক্ষ্যে পৌঁছাতে আমাদের যখন কাজে মনোযোগ দেওয়া প্রয়োজন, তখন দেখা যায় আমাদের মনোযোগ অন্য বাজে কাজের দিকে সরে যাচ্ছে। লক্ষ্যে পৌঁছার জন্য যা করার কথা, আমরা তা করতে পারছি না। বরং বেড়াতে বের হয়ে যাচ্ছি, কফি সপে আড্ডায় মেতে ওঠছি বা তখনই ইমেইলগুলো খুলে দেখার কথা মনে পড়ে যাচ্ছে। চারপাশের সবকিছু তখন আমাদের কাছে দারুণ ভালো লাগার ব্যাপার হয়ে দাঁড়ায়। শুধু কর্তব্য কাজটার কথাই মনে থাকে না।',
            image: Book1,
            preference: 'buy&sell',
            published: '৩ দিন আগে',
            category: 'thriller',
            tag: 'featured',
            area: 'Savar',
            price: '10',
        },
    ],
    products: {
        id: 1,
        name: 'Zip Tote Basket',
        color: 'White and black',
        href: '#',
        imageSrc:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ0NSx3OvVpnA61GB2FNDpgA-IOf1BLqtlmWUO4Va2EP1r1jHa8E0RAJyudeWDtr1XOgg&usqp=CAU',
        imageAlt:
            'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
        price: '৳140',
    },
    area: [],
    categories: [
        { value: 'novel' },
        {
            value: 'thriller',
        },
        {
            value: 'travel',
        },
        {
            value: 'cook-book',
        },
        {
            value: 'megazine',
        },
    ],
    preferences: [
        { value: 'Indoor' },
        { value: 'Outdoor' },
        { value: 'Aquatics' },
    ],
    data: [
        {
            id: '1',
            title: 'Poha',
            category: 'Breakfast',
            price: '$1',
            img: 'https://c.ndtvimg.com/2021-08/loudr2go_aloo-poha_625x300_05_August_21.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350',
            desc: ' Poha. Light, filling and easy to make, poha is one famous breakfast that is eaten almost everywhere in the country. And the best part is- it can be made in a number of ways. Kanda poha, soya poha, Indori poha, Nagpur Tari Poha are a few examples',
        },
        {
            id: '2',
            title: 'Upma',
            category: 'Breakfast',
            price: '$1',
            img: 'https://c.ndtvimg.com/2021-04/37hi8sl_rava-upma_625x300_17_April_21.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350',
            desc: ' A quintessential South Indian Breakfast! Made with protein-packed urad dal and semolina followed by crunchy veggies and curd, this recipe makes for a hearty morning meal. With some grated coconut on top, it gives a beautiful south-Indian flavour.',
        },
        {
            id: '3',
            title: 'Cheela',
            category: 'Breakfast',
            price: '$1',
            img: 'https://c.ndtvimg.com/2019-05/1afu8vt8_weight-loss-friendly-breakfast-paneer-besan-chilla_625x300_25_May_19.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350',
            desc: 'A staple across Indian households, moong dal is widely used in a number of Indian delicacies. One such delicacy is moong dal cheela. You can also add paneer to this recipe to amp up the nutritional value and make it, even more, protein-dense',
        },
        {
            id: '4',
            title: 'Channa Kulcha',
            category: 'Lunch',
            price: '$1',
            img: 'https://i.ndtvimg.com/i/2015-04/chana-kulcha_625x350_41429707001.jpg',
            desc: 'A classic dish that never goes out of style. The quintessential chana kulcha  needs only a few ingredients - cumin powder, ginger, coriander powder, carom powder, and some mango powder, which is what gives the chana its sour and tangy taste.',
        },
        {
            id: '5',
            title: 'Egg Curry',
            category: 'Lunch',
            price: '$1',
            img: 'https://i.ndtvimg.com/i/2017-11/goan-egg-curry_620x350_41511515276.jpg',
            desc: 'Eggs are a versatile food that can be cooked for any meal of the day. From breakfast to dinner, it can be a go-to food. Here is a mildly-spiced egg curry made with garlic, onions, a whole lot of kasuri methi, fresh cream, yogurt, and fresh coriander.',
        },
        {
            id: '6',
            title: 'Paneer Aachari',
            category: 'Lunch',
            price: '$1',
            img: 'https://i.ndtvimg.com/i/2015-04/paneer_625x350_61429707960.jpg',
            desc: "Don't get intimidated by the list of ingredients because not only are already in your kitchen cabinet, but also because all they'll need is 20 minutes of your time. Chunks of cotpreferencee cheese cooked in some exciting spices, yogurt and a pinch of sugar.",
        },
        {
            id: '7',
            title: 'Fish Fry',
            category: 'Dinner',
            price: '$1',
            img: 'https://i.ndtvimg.com/i/2015-06/indian-dinner_625x350_41434360207.jpg',
            desc: 'Get your daily dose of perfect protein. Pieces of surmai fish marinated in garlic, cumin, fennel, curry leaves, and tomatoes are pan-fried in refined oil and served hot. This fish fry recipe has a host of delectable spices used for marination giving it a unique touch.',
        },
        {
            id: '8',
            title: 'Dum Alloo',
            category: 'Dinner',
            price: '$1',
            img: 'https://i.ndtvimg.com/i/2015-06/indian-dinner_625x350_51434362664.jpg',
            desc: 'Your family will thank you for this fantastic bowl of dum aloo cooked Lakhnawi style. Take some potatoes, crumbled paneer, kasuri methi, butter, onions, and some ghee.',
        },
        {
            id: '9',
            title: 'Malai Kofta',
            category: 'Dinner',
            price: '$1',
            img: 'https://i.ndtvimg.com/i/2017-10/makhmali-kofte_620x350_51508918483.jpg',
            desc: 'A rich gravy made of khus khus, coconut and milk that tastes best with koftas made from khoya. This velvety and creamy recipe will leave you licking your fingers. Makhmali kofte can be your go-to dish for dinner parties as this is quite different from other kofta recipes and extremely delicious.',
        },
        {
            id: '10',
            title: 'Malai Kofta',
            category: 'Snaks',
            price: '$1',
            img: 'https://i.ndtvimg.com/i/2017-10/makhmali-kofte_620x350_51508918483.jpg',
            desc: 'A rich gravy made of khus khus, coconut and milk that tastes best with koftas made from khoya. This velvety and creamy recipe will leave you licking your fingers. Makhmali kofte can be your go-to dish for dinner parties as this is quite different from other kofta recipes and extremely delicious.',
        },
    ],
    selectedProduct: null,
};

const productShopSlice = createSlice({
    name: 'productShop',
    initialState,
    reducers: {
        updateProductShop(state, action) {
            // Merge the action payload with the current state to update specific properties
            return {
                ...state,
                ...action.payload,
            };
            // Extract category values from all books in 'allBooks' array
        },
        getProductShop(state, action) {
            // Merge the action payload with the current state to update specific properties
            return action.payload;
        },
        setProductDetails: (state, action) => {
            state.selectedProduct = action.payload;
        },
    },
});
export const selectProductShop = (state) => state.productShop;

// Export the reducer and actions
export const { setProductDetails, updateProductShop, getProductShop } =
    productShopSlice.actions;

export default productShopSlice.reducer;
