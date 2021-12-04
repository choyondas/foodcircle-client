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
                            <li><i class="fas fa-phone-alt"></i> +86-23498743999</li>
                            <li><i class="far fa-envelope-open"></i> ynuuniversity08@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;



