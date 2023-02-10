import React from 'react';
import { BsLinkedin,BsGithub,BsFacebook,BsChevronDoubleDown } from "react-icons/bs";

const HeroSection = () => {
    return (
        <div className="h-screen flex flex-col justify-center" >
            <div className=" flex justify-between items-center flex-wrap" >
                <div>
                    <h1 className="font-display text-9xl tracking-wide" >Hello, I'm Ala</h1>
                    <p className="text-xl font-medium tracking-wide" >I love to develop <span className="font-bold" >modern</span> and <span className="font-bold" >robust</span> websites and applications</p>
                </div>
                <div>
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
                    <h2 className="underline" >WANT TO KNOW MORE ABOUT ME </h2>
                    <BsChevronDoubleDown className="mt-[5px] ml-2"/>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;