import React from 'react';
import "./Home.css"
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
// import ApointmentBanner from '../ApointmentBanner/ApointmentBanner';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
// import Brands from './Brands/Brands';
import Designer from './Designer/Designer';
import PromoVideo from './PromoVideo/PromoVideo';
import ShowReview from './ShowReview/ShowReview';
import Subscribe from './Subscribe/Subscribe';
import Restaurant from './Restaurant/Restaurant';

const Home = () => {
    return (
        <div>

            <Navigation></Navigation>
            <Banner></Banner>
            {/* <Brands></Brands> */}
            <Restaurant></Restaurant>
            <Services></Services>
            <PromoVideo></PromoVideo>


            <Designer></Designer>
            <ShowReview></ShowReview>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Home;