import React from 'react';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import bannerImage from '../../static/banners/banner.jpg';

const Index = () => {
    return (
        <Layout>
            <Banner title="Not enough hours in the day?" subtitle="We will take care of keeping your home clean, so you don't have to." image={bannerImage} />
        </Layout>
    )
}

export default Index
