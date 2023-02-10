import React from 'react';
import HeroSection from '../components/HeroSection';

const Home = () => {
    return (
        <div className="bg-secondary text-dark  font-primary w-full" >
               <div className="lg:container lg:px-0 px-5 mx-auto" >
               <HeroSection/>
               </div>
        </div>
    );
};

export default Home;