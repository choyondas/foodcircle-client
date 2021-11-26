import React from 'react';
import "./Footer.css"
const Footer = () => {
    return (
        <div className="footer ">
            <div className="container">

                <div className="row">
                    <div className="col-lg-3 col-md-12">
                        <div className="footer-logo">
                            <img width="20%" src="https://i.ibb.co/Wv6DhG7/logofood.png" alt="" />
                            <h1>FoodCircle</h1>
                        </div>
                        <p>Discover how to find the best food and enjoy Your meal with others</p>
                    </div>
                    <div className="col-lg-3 col-md-4 col-12">
                        <h3>COMPANY</h3>
                        <ul>
                            <li>About Us</li>
                            <li>Team</li>
                            <li>Services</li>
                            <li>Process</li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-4 col-12">
                        <h3>HELP</h3>
                        <ul>
                            <li>Search</li>
                            <li>Information</li>
                            <li>Privacy Policy</li>
                            <li>Shipping Details</li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-4 col-12">
                        <h3>REACH US AT</h3>
                        <ul>
                            <li><i class="fas fa-map-marker-alt"></i> LONDON:34 Rd.Wellborn London. England, 04954</li>
                            <li><i class="fas fa-map-marker-alt"></i>  CHINA: Kunming City, Yunnan</li>
                            <li><i class="fas fa-phone-alt"></i> +86-13085375070</li>
                            <li><i class="far fa-envelope-open"></i> choyondas08@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;



// const products = [
//     {

//         name: "Mamaday",
//         img: 'https://static7.orstatic.com/userphoto2/photo/X/QIW/058MGYB4724B334BC4E9A3px.jpg',
//         description: `You can find different funny quotes in this upstairs coffee shop. The names of dishes offered are also very humorous, and the ingredients are very unique. 

//         `,
//         address: '1/F, Perfect commercial Building, 28 Sharp Street West, Causeway Bay',
//         rating: '4',
//         price: '101-200',
//         category: 'International/All Day BreakFast',

//         totalReview: '1117',
//         goodReview: '926',
//         badReview: '4',
//         phone: '214556885'


//     },
//     {

//         name: "Yadllie Plate",
//         img: 'https://static6.orstatic.com/userphoto2/photo/1C/11ZX/07I7ILFC69820133E08416px.jpg',
//         description: `It is famous for its fried chicken, which is imported from Korea directly. And the sauce is made by the Jeju vegetables and twenty types of natural ingredients. 

//         `,
//         address: '11/F, CTMA Centre, 1 Sai Yeung Choi Street, Mong Kok',
//         rating: '4',
//         price: '101-200',
//         category: ' Korean Korean Fried Chicken',

//         totalReview: '1434',
//         goodReview: '1232',
//         badReview: '12',
//         phone: '13085375070'


//     },
//     {

//         name: "Towada Sushi",
//         img: 'https://static6.orstatic.com/userphoto2/photo/1M/1A6M/094F0HA0D6564F3D498462px.jpg',
//         description: `The Japanese restaurant provides fresh ingredients which shipped from Japan every day. The Japanese chef has over 20 years of experience in making Japanese food.

//         `,
//         address: 'G/F, Chinachem Cameron Centre, 42 Cameron Road, Tsim Sha Tsui',
//         rating: '4',
//         price: '201-400',
//         category: ' Japanese Sushi/Sashimi',

//         totalReview: '1145',
//         goodReview: '9657',
//         badReview: '5',
//         phone: '214556885'


//     },
//     {

//         name: "OMG Mamaday Mamaday",
//         img: 'https://static6.orstatic.com/userphoto2/photo/1M/1A4K/0940JT1B774679E5488192px.jpg',
//         description: `You can find different funny quotes in this upstairs coffee shop. The name of dishes offered are also very humorous, and the ingredients are very unique

//         `,
//         address: '2/F, Southgate Commercial Centre, 29 Granville Road, Tsim Sha Tsui',
//         rating: '4',
//         price: '101-200',
//         category: 'International/All Day BreakFast',

//         totalReview: '1117',
//         goodReview: '926',
//         badReview: '4',
//         phone: '265476187'


//     },
//     {

//         name: "Tearapy",
//         img: 'https://static5.orstatic.com/userphoto2/photo/1A/112R/07BNMO5F13A33956B35E3Dpx.jpg',
//         description: `The decor is novel and its decoration is IG-able. With the theme of "tea", the restaurant offers various types of tea, such as pure tea, fruit tea, and cheese tea. 

//         `,
//         address: '1/F, 189 Portland Street, Mong Kok',
//         rating: '4',
//         price: '101-200',
//         category: 'International Hamburger',

//         totalReview: '1117',
//         goodReview: '926',
//         badReview: '4',
//         phone: '214556885'


//     },
//     {

//         name: "Dodam Chicken",
//         img: 'https://static6.orstatic.com/userphoto/photo/I/EUR/02XMQ1A9BFEEB6BC824F33px.jpg',
//         description: `Dodam Chicken has been working hard to create a place full of happiness and to make a place where you can experience Korean culture such as K-Pop, K-Drama & K-Food.
//         Dodam Chicken has been leading the trend in Korean premium fried chicken since 2016. 

//         `,
//         address: '18/F., Shop A, Lee Theatre Plaza, 99 Percival Street, Causeway Bay',
//         rating: '5',
//         price: '201-350',
//         category: `Korean/
// Korean Fried Chicken`,

//         totalReview: '1117',
//         goodReview: '926',
//         badReview: '4',
//         phone: '214556885'


//     },
//     {

//         name: "Outdark",
//         img: 'https://static6.orstatic.com/userphoto2/photo/1B/11LP/07FEFDF57A0B72CFFBCBEDpx.jpg',
//         description: `Originated from Korea, Outdark is the first branch outside of Korea and is famous for their Korean fried chicken. Apart from fried chicken, Outdark also has good Seafood Pancakes and Dukbokki.

//         `,
//         address: '2/F, Fee Tat Commercial Centre, 613 Nathan Road, Mong Kok, Mong Kok',
//         rating: '4',
//         price: '201-350',
//         category: ' Korean',

//         totalReview: '1117',
//         goodReview: '926',
//         badReview: '4',
//         phone: '214556885'


//     },
//     {

//         name: "LAB EAT Restaurant & Bar",
//         img: 'https://static5.orstatic.com/userphoto2/photo/18/ZEG/06ZQVC380B5B7846E5DFF9px.jpg',
//         description: `The theme of this restaurant is “lab”, so that they keep trying different possibility of food pairing. The presentation of the food is remarkable. It also provides a variety of homemade cocktails.

//         `,
//         address: 'Shop 1-2, G/F, Kiu Fung Mansion, 83-89 Kimberley Road, Tsim Sha Tsui',
//         rating: '4',
//         price: '201-350',
//         category: '  Western Seafood',

//         totalReview: '2117',
//         goodReview: '1926',
//         badReview: '7',
//         phone: '165987956'


//     },

// ]