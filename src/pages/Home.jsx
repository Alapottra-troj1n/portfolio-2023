import React, { useRef } from "react";
import HeroSection from "../components/HeroSection";
import SkillSection from "../components/SkillSection";
import ThirdSection from "../components/ProjectsSection";

const Home = () => {
  const SkillSectionRef = useRef(null);

  return (
    <div className=" text-dark  font-primary ">
      <div className=" lg:px-0 mx-auto ">
        <HeroSection SkillSectionRef={SkillSectionRef} />
        <SkillSection SkillSectionRef={SkillSectionRef} />
        <ThirdSection/>
      </div>
    </div>
  );
};

export default Home;
