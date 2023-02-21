import React from "react";
import { BsChevronDoubleDown } from "react-icons/bs";
import cursorChange from "../utils/cursorChange";

const HeroSection = ({ SkillSectionRef }) => {
  const scrolltoSecond = () => {
    SkillSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      onMouseEnter={() => cursorChange("40, 41, 31")}
      className="bg-secondary pt-[5rem] xl:pt-0"
    >
      <div className="lg:h-screen flex flex-col  justify-center container mx-auto px-5">
        <div className=" grid lg:grid-cols-2 grid-cols-1 ">
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <h1 className="font-display text-center lg:text-left mt-5 lg:mt-0 text-7xl lg:text-8xl xl:text-9xl tracking-tight">
              Hello, I'm Ala
            </h1>
            <p className="text-sm mt-4 text-left lg:text-lg text-gray-600 font-bold tracking-wide lg:w-[85%] xl:w-[75%] lg:leading-8 leading-7">
              I am a full-stack developer with 2+ years of experience in
              creating valuable solutions for clients. I have a blend of
              freelance and professional experience, and I am dedicated to
              delivering high-quality results. I take pride in understanding my
              client's needs and translating them into effective and impactful
              products.
            </p>
            <div className="mt-3 flex flex-col gap-3 text-xs lg:text-base">
                <div className="flex items-center gap-3 font-bold  text-gray-600">
                  <img src="/creeper.svg" className='w-8' alt="creeper" />
                  <p>Crafting Solutions <a href="https://connekt.studio/" target="_blank" referrerPolicy="no-referrer"><span className="hover:text-orange text-gray-900">@CONNECKT STUDIO</span></a></p>
                </div>
                <div className="flex items-center gap-3 font-bold  text-gray-600">
                  <img src="/book.svg" className='w-8' alt="creeper" />
                  <p>Pursuing CS Degree <a href="https://www.uopeople.edu/" target="_blank" referrerPolicy="no-referrer"><span className="hover:text-orange text-gray-900">@University of the People</span></a></p>
                </div>
            </div>
          </div>
          
          <div className="flex justify-end items-center order-1 lg:order-2">
            <img
              src="/alapottra.jpg"
              className="lg:w-[35rem]"
              alt="alapottra"
            />
          </div>
        </div>
        <div className="pb-10 lg:py-0">
          <div className="mt-10 text-2xl click hover:text-dark flex flex-col items-center gap-3 ">
            <div>
              <img
                src="/fire.svg"
                className="lg:w-16 w-12 mt-2"
                alt="fireminecrat creeper"
              />
            </div>
            <button
              onClick={scrolltoSecond}
              className=" lg:text-4xl text-sm font-black hover:font-medium transition-all"
            >
              CHECK MY SKILLSET
            </button>
            <BsChevronDoubleDown onClick={scrolltoSecond} className="text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
