import React, { useEffect } from 'react';
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import bannerImage from '../../static/banners/banner.jpg';
import CleaningTypes from '../components/CleaningTypes';



const Index = () => {

    useEffect(() => {
        if (typeof window !== `undefined`) {
            require("slick-carousel");
            $('.examples').slick();
        }
    }, []);
    return (
        <Layout>
            <Banner title="Not enough hours in the day?" subtitle="We will take care of keeping your home clean, so you don't have to." image={bannerImage} />
            <CleaningTypes />
            <div className="examples w-full">
                <img src={'banners/banner.jpg'} />
                <img src={'banners/cleaner.jpg'} />
            </div>
        </Layout>
    )
}

export default Index
