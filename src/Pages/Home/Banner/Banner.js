import React from 'react';
import { Link } from 'react-router-dom';

import "./Banner.css"



const Banner = () => {
    return (
        <div>
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://i.ibb.co/jLr9pwB/Background-13.png" class="d-block w-100" alt="..." />


                        <div class="carousel-caption d-none d-md-block">
                            <Link style={{ textDecoration: 'none' }} to="/allproducts">
                                <button className="button-29" role="button">Explore More</button>
                            </Link>
                        </div>



                    </div>
                    <div class="carousel-item">
                        <img src="https://i.ibb.co/WFP3MpV/Background-17.png" class="d-block w-100" alt="..." />


                        <div class="carousel-caption d-none d-md-block">
                            <Link style={{ textDecoration: 'none' }} to="/allproducts">
                                <button className="button-29" role="button">Explore More</button>
                            </Link>
                        </div>


                    </div>
                    <div class="carousel-item">
                        <img src="https://i.ibb.co/4TXzWVg/Background-18.png" class="d-block w-100" alt="..." />


                        <div class="carousel-caption d-none d-md-block">
                            <Link style={{ textDecoration: 'none' }} to="/allproducts">
                                <button className="button-29" role="button">Explore More</button>
                            </Link>
                        </div>




                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;