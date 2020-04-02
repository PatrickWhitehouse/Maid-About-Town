import React from 'react';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import logo from '../images/banner.jpg'

const Index = () => {
    return (
        <Layout>
            <Banner title="Not enough hours in the day?" subtitle="We will take care of keeping your home clean, so you don't have to." image={logo} />
        </Layout>
    )
}

export default Index
