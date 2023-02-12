import React from 'react';
import { BsLinkedin, BsGithub, BsFacebook, BsChevronDoubleDown } from "react-icons/bs";
import cursorChange from '../utils/cursorChange';

const HeroSection = ({SkillSectionRef}) => {

    const scrolltoSecond = () => {
        SkillSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      };

    return (
        <div onMouseEnter={() => cursorChange("40, 41, 31")} className="bg-secondary pt-[5rem] lg:pt-0">
            <div className="lg:h-screen flex flex-col  justify-center container mx-auto px-5" >
                <div className=" grid lg:grid-cols-2 grid-cols-1 " >
                    <div className="flex flex-col justify-center order-2 lg:order-1" >
                        <h1 className="font-display mt-5 lg:mt-0 text-7xl lg:text-9xl tracking-tight" >Hello, I'm Ala</h1>
                        <p className="text-sm lg:text-lg text-gray-600 font-medium tracking-wide lg:w-[70%] lg:leading-8 leading-7" >I am a full-stack developer with 2+ years of experience in creating valuable solutions for clients. I have a blend of freelance and professional experience, and I am dedicated to delivering high-quality results. I take pride in understanding my client's needs and translating them into effective and impactful products. </p>
                    </div>
                    <div className="flex justify-end order-1 lg:order-2" >
                        <img src="/alapottra.jpg" className="lg:w-[35rem]" alt="alapottra" />
                    </div>
                </div>
                <div className='py-10 lg:py-0' >
                    <div className="flex gap-4" >
                        <a href=""><BsLinkedin className="lg:text-2xl text-3xl hover:text-orange" /></a>
                        <a href=""><BsGithub className="lg:text-2xl text-3xl hover:text-orange" /></a>
                        <a href=""><BsFacebook className="lg:text-2xl text-3xl hover:text-orange" /></a>

                    </div>
                    <div className="mt-5 text-2xl click text-orange hover:text-dark flex">
                        <button onClick={scrolltoSecond} className="underline font-black transition-all hover:font-medium" >CHECK MY SKILLSET</button>
                        <BsChevronDoubleDown className="mt-[5px] ml-2" />
                    </div>
                </div>
            </div>
          
        </div>
        
    );
};

export default HeroSection;