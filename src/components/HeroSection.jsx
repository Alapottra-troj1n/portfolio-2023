import React from 'react';
import { BsLinkedin, BsGithub, BsFacebook, BsChevronDoubleDown } from "react-icons/bs";
import Navbar from '../layout/Navbar';

const HeroSection = ({secondSectionRef}) => {

    const scrolltoSecond = () => {
        secondSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      };

    return (
        <div className="bg-secondary">
            <Navbar />
            <div className="h-screen flex flex-col justify-center container mx-auto" >
                <div className=" grid grid-cols-2" >
                    <div className="flex flex-col justify-center" >
                        <h1 className="font-display text-9xl tracking-wide" >Hello, I'm Ala</h1>
                        <p className="text-lg text-gray-600 font-medium tracking-wide w-[85%] leading-8" >I am a full-stack developer with 2+ years of experience in creating valuable solutions for clients. I have a blend of freelance and professional experience, and I am dedicated to delivering high-quality results. I take pride in understanding my client's needs and translating them into effective and impactful products. </p>
                    </div>
                    <div className="flex justify-end" >
                        <img src="/alapottra.jpg" className="w-[35rem]" alt="alapottra" />
                    </div>
                </div>
                <div>
                    <div className="flex gap-4" >
                        <a href=""><BsLinkedin className="text-2xl hover:text-orange" /></a>
                        <a href=""><BsGithub className="text-2xl hover:text-orange" /></a>
                        <a href=""><BsFacebook className="text-2xl hover:text-orange" /></a>

                    </div>
                    <div className="mt-5 text-2xl click hover:text-orange flex">
                        <button onClick={scrolltoSecond} className="underline hover:font-black transition-all" >WHAT I DO</button>
                        <BsChevronDoubleDown className="mt-[5px] ml-2" />
                    </div>
                </div>
            </div>
          
        </div>
        
    );
};

export default HeroSection;