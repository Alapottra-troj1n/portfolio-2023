import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const ProjectsSection = () => {
  return (
    <div className=" bg-dark border-t border-gray-500 px-40 text-white">
      <div className="pt-20">
        <h2 className="text-primary font-display lg:text-8xl  hover:font-light tracking-tight">
          RECENT PROJECTS
        </h2>

        <div className="flex flex-col gap-10 py-10">
          <div className="border p-20">
            <div className="flex flex-col items-center">
              <h2 className="font-display text-[10rem] ">
                HILL VALLEY PRODUCTION
              </h2>
              <h2 className="uppercase tracking-widest">
                Fullstack website for a renowned photography agency from
                Chittagong Hill Tracts
              </h2>
              <img src="/camera.svg" alt="paint3d" className="w-[15rem]" />

              <div className="flex gap-3">
                <div className="flex items-center gap-3">
                  <p className="py-10 text-2xl">LIVE LINK</p>
                  <BsArrowUpRight className="text-2xl" />
                </div>
                <div className="flex items-center gap-3">
                  <p className="py-10 text-2xl">GITHUB</p>
                  <BsArrowUpRight className="text-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
