import React, { useRef } from "react";
import HeroSection from "../components/HeroSection";
import SecondSection from "../components/SecondSection";

const Home = () => {
    const secondSectionRef = useRef(null);
    
   
    return (
        <div className=" text-dark  font-primary w-full ">
            <div className=" lg:px-0 px-5 mx-auto ">
                <HeroSection secondSectionRef={secondSectionRef} />
          
                <SecondSection secondSectionRef={secondSectionRef} />
      
            </div>
        </div>
    );
};

export default Home;
