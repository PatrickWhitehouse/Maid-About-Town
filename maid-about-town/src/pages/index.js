import React from 'react';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import logo from '../images/banner.jpg'

const Index = () => {
    return (
        <Layout>
            <Banner title="Patrick" subtitle="Whitehouse" image={logo} />
        </Layout>
    )
}

export default Index
