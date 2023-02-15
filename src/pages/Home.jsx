import React, { useRef } from "react";
import HeroSection from "../components/HeroSection";
import SkillSection from "../components/SkillSection";
import ProjectsSection from "../components/ProjectsSection";
import Contact from "../components/Contact";

const Home = () => {
  const SkillSectionRef = useRef(null);
  const projectSection = useRef(null);

  return (
    <div className=" text-dark  font-primary ">
      <div className=" lg:px-0 mx-auto ">

        <HeroSection SkillSectionRef={SkillSectionRef} />
        <SkillSection
          projectSection={projectSection}
          SkillSectionRef={SkillSectionRef}
        />
        <ProjectsSection projectSection={projectSection} />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
