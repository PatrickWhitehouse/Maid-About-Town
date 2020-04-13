import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bannerImage from '../../static/banners/home.jpg';
import React, { useEffect } from 'react';
import $ from 'jquery';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import CleaningTypes from '../components/CleaningTypes';
import Seo from '../components/Seo';

// TODO: Refactor import order - slick CSS currently loading after


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
            <div className="container py-8 mx-auto text-center">
                <h2 className="mb-3 text-4xl font-bold color-mat">No home too big, or too small.</h2>
                <div className="w-9/12 mx-auto examples md:w-1/2">
                    <img src={'banners/banner.jpg'} />
                    <img src={'banners/cleaner.jpg'} />
                </div>
            </div>
        </Layout>
    )
}

export default Index
