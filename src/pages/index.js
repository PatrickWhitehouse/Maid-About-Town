import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bannerImage from '../../static/banners/home.jpg';
import React, { useEffect } from 'react';
import $ from 'jquery';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import CleaningTypes from '../components/CleaningTypes';
import Seo from '../components/Seo';



const Index = ({ location }) => {

    useEffect(() => {
        if (typeof window !== `undefined`) {
            require("slick-carousel");
            $('.examples').slick();
        }
    }, []);
    return (
        <Layout>
            <Seo prefix="Home" currentUrl={location.href} />
            <Banner title="Not enough hours in the day?" subtitle="We will take care of keeping your home clean, so you don't have to." image={bannerImage} />
            <CleaningTypes />
            <div className="container mx-auto py-8 text-center">
                <h2 className="color-mat text-4xl mb-3 font-bold">No home too big, or too small.</h2>
                <div className="examples mx-auto w-9/12 md:w-1/2">
                    <img src={'banners/banner.jpg'} />
                    <img src={'banners/cleaner.jpg'} />
                </div>
            </div>
        </Layout>
    )
}

export default Index
