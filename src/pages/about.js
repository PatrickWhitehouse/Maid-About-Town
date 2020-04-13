import bannerImage from '../../static/banners/banner.jpg';
import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Banner from '../components/Banner';

const About = ({ location }) => (
    <Layout>
        <Seo prefix="About" currentUrl={location.url} />
        <Banner title="About Us" subtitle="Discover our background and who forms Maid About Town" image={bannerImage} />
        <div className="container mx-auto">
            <h2>Where we started</h2>
            <p>Maid About Town was founded in 2013. The current business owner, Claire Wood, decided to go her separate ways from her partner of their previous cleaning business. She decided to launch her very own domestic and commerical cleaning company, Maid About Town, offering various services around Cheshire.</p>
            <p>Claire is a hardworking mother of two and wife. But before Claire became part of the cleaning industry, she was a childminder for children in Lymm for many years. Being a childminder, it was second nature for her to keep her house clean, tidy and presentable. She loved her job as a childminder, but juggling between her personal life and her job, was becoming a bit of a task. So she decided to take to something else she loved doing, cleaning. Being very proud of her own home space, she decided to take her passion for cleaning and use it to help other people, encouraging her to create her very first cleaning business, The Cleaning Fairies, in which she had a partnered ownership.</p>
            <p>But once she got a taste for having a shared business, she aspired to start up her own. Which is when Maid About Town was born. The majority of the workers from her previous company decided to join her on her new exciting journey, and have helped Maid About Town blossom. With hard work and determination, she has managed to offer her services to various customers all over Cheshire. These destinations include Lymm, Oughtrington, Timperley, Orford, Partington and many more.</p>
            <p>We offer our services in a team of two, with our fantastic quality of teamwork we give you twice the effort in half the time. We always make sure our work is done to the very best of our ability, providing picture perfect results. Although we do have a price list, these are our average prices. We do mainly go off a quote basis, giving you the opportunity to meet our business owner, Claire Wood, and giving us the opportunity to view your property and meet you before we start.</p>
        </div>
    </Layout>
)

export default About;