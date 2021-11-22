import React from 'react';
import "./Designer.css"
const Designer = () => {
    return (
        <div className="designer">
            <div className="container">
                <div className="row design">
                    <div className="col-lg-6">
                        <img className="img-fluid" src="https://www.siestaindia.com/wp-content/uploads/2020/01/shef.jpg" alt="" />
                    </div>
                    <div className="pt-5 col-lg-6 ">
                        <p style={{ color: "yellow" }}>People Behind Product</p>
                        <h1 style={{ fontSize: "50px" }}>Our Special Shef</h1>
                        <p>I was born and raised in Tehran, Iran, where I began learning traditional recipes from my grandmother. I'm honored to share our family recipes at your kitchen table, and I hope they'll fill you with a feeling of home.</p>
                        <img className="img-fluid w-25" src="https://i.ibb.co/KzsC4tB/Background-6.png" alt="" />
                        <h4>Anthony Malia</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Designer;
