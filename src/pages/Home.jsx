import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import ProductCarousel from '../components/ProductCarousel';
import Footer from '../components/Footer';

const Home = () => (
    <>
        <Header />
        <Navbar />
        <Banner />
        <ProductCarousel />
        <Footer />
    </>
);

export default Home;
