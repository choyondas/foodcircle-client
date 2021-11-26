
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Restaurant.css"
const Restaurant = () => {
    const [restaurant, setRestaurant] = useState([])

    useEffect(() => {
        fetch('https://obscure-forest-94406.herokuapp.com/restaurant')
            .then(res => res.json())
            .then(data => setRestaurant(data))
    }, []);

    return (
        <div className="products">
            <div className="container p-5 ">
                <div className="p-5">

                    <h3 style={{ color: 'yellow' }}>
                        Most Wanted dishes
                    </h3>
                    <h1 style={{ color: 'white', fontWeight: 'bold', fontSize: '60px' }}>
                        Restaurant in Hong Kong
                    </h1>
                </div>



                <div className="row row-cols-1 row-cols-md-3 g-4">

                    {
                        restaurant.map(rest => <div id="container">

                            <div class="product-details">

                                <h1>{rest.name}</h1>
                                <span class="hint-star star">
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star-o" aria-hidden="true"></i>
                                </span>

                                <p class="information">{rest.description}</p>

                                <p style={{ color: '#DB4437' }} class="information"><i class="fas fa-map-marker-alt"></i> {rest.address}</p>



                                <div class="control">

                                    <button class="btn">
                                        <span class="price">${rest.price}</span>
                                        <span class="shopping-cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i></span>
                                        <Link to="/allproducts"><span class="buy">Get now</span></Link>
                                    </button>

                                </div>

                            </div>

                            <div class="product-image">

                                <img className="img-fluid" src={rest.img} alt="" />


                                <div class="info">
                                    <h2> Description</h2>
                                    <ul>
                                        <li><strong>Reviews: </strong>{rest.totalReview}</li>
                                        <li><i class="fas fa-laugh-beam"></i> <strong>Good Review : </strong>{rest.goodReview}</li>
                                        <li><strong>Price: </strong>{rest.price}</li>
                                        <li><strong>Categary: </strong>{rest.category}</li>
                                        <li><strong>Phone: </strong>{rest.phone}</li>

                                    </ul>
                                </div>
                            </div>

                        </div>)
                    }




                </div>

            </div>
        </div>
    );
};

export default Restaurant;