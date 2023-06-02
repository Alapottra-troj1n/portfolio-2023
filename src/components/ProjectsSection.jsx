import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import cursorChange from "../utils/cursorChange";

const ProjectsSection = ({ projectSection }) => {
  return (
    <div
      onMouseEnter={() => cursorChange("207, 237, 113")}
      ref={projectSection}
      className=" bg-dark border-t border-gray-500 px-7 lg:px-16 2xl:px-5 pb-20 text-white"
    >
      <div className="pt-20">
        <h2 className="text-primary font-display text-5xl lg:text-6xl xl:text-8xl hover:font-light text-center tracking-tight">
          SIDE PROJECTS
        </h2>

        <div
          onMouseEnter={() => cursorChange("40, 41, 31")}
          onMouseLeave={() => cursorChange("207, 237, 113")}
          className="flex rounded-lg flex-col gap-10 mt-10 bg-white text-dark lg:bg-dark lg:text-white lg:hover:bg-white lg:hover:text-dark transition"
        >
          <div className="rounded-lg border p-8 lg:p-20">
            <div className="flex flex-col items-center">
              <h2 className="font-display text-center text-[2.3rem]  lg:text-[4rem] xl:text-[6rem] 2xl:text-[10rem]">
                HILL VALLEY PRODUCTION
              </h2>
              <h2 className="leading-6 lg:leading-0 lg:uppercase  text-xs lg:text-base mt-2 lg:mt-0 text-left lg:text-center 2xl:text-md lg:text-[.6rem] tracking-widest font-semibold pb-5">
                Fullstack website for a renowned photography agency from
                Chittagong Hill Tracts
              </h2>
              <img
                src="/camera.svg"
                alt="paint3d"
                className="w-32 lg:w-[15rem]"
              />

              <div className="flex gap-3">
                <a
                  href="https://www.hillvalleyproduction.com/"
                  referrerPolicy="no-referrer"
                  className="hover:font-black hover:text-orange transition-all"
                  target="_blank"
                >
                  <div className="flex items-center gap-3">
                    <p className="py-10 lg:text-2xl">LIVE LINK</p>
                    <BsArrowUpRight className="lg:text-2xl" />
                  </div>
                </a>
                <a
                  href="https://github.com/Alapottra-troj1n/hill-valley-production"
                  referrerPolicy="no-referrer"
                  className="hover:font-black hover:text-orange transition-all"
                  target="_blank"
                >
                  <div className="flex items-center gap-3">
                    <p className="py-10 lg:text-2xl">GITHUB</p>
                    <BsArrowUpRight className="lg:text-2xl" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col rounded-lg gap-10 mt-10 bg-orange text-white lg:bg-dark lg:text-white lg:hover:bg-orange lg:hover:text-white transition">
          <div className=" border rounded-lg border-orange lg:border-white p-8 lg:p-20">
            <div className="flex flex-col items-center">
              <h2 className="font-display text-center text-[2.3rem]  lg:text-[4rem] xl:text-[6rem] 2xl:text-[10rem]">
                GEEK HIVE
              </h2>
              <h2 className="leading-6 lg:leading-0 lg:uppercase text-xs lg:text-base mt-2 lg:mt-0 text-left lg:text-center 2xl:text-md lg:text-[.6rem] tracking-widest font-semibold pb-5">
                Fullstack one-stop tech blog, bringing you the freshest geeky
                news and ideas with a friendly touch.
              </h2>
              <img src="/pc.svg" alt="paint3d" className="w-32 lg:w-[15rem]" />

              <div className="flex gap-3">
                <a
                  href="https://geek-hive-next-js.vercel.app/"
                  referrerPolicy="no-referrer"
                  className="hover:font-black hover:text-primary transition-all"
                  target="_blank"
                >
                  <div className="flex items-center gap-3">
                    <p className="py-10 lg:text-2xl">LIVE LINK</p>
                    <BsArrowUpRight className="lg:text-2xl" />
                  </div>
                </a>
                <a
                  href="https://github.com/Alapottra-troj1n/geek-hive-next.js"
                  referrerPolicy="no-referrer"
                  className="hover:font-black hover:text-primary transition-all"
                  target="_blank"
                >
                  <div className="flex items-center gap-3">
                    <p className="py-10 lg:text-2xl">GITHUB</p>
                    <BsArrowUpRight className="lg:text-2xl" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          onMouseEnter={() => cursorChange("40, 41, 31")}
          onMouseLeave={() => cursorChange("207, 237, 113")}
          className="flex  rounded-lg flex-col gap-10 mt-10 bg-primary text-dark lg:bg-dark lg:text-white lg:hover:bg-primary lg:hover:text-dark transition"
        >
          <div className=" border rounded-lg border-primary lg:border-white p-8 lg:p-20">
            <div className="flex flex-col items-center">
              <h2 className="font-display text-center text-[2.3rem]  lg:text-[4rem] xl:text-[6rem] 2xl:text-[10rem]">
                IGNITION
              </h2>
              <h2 className="leading-6 lg:leading-0 lg:uppercase  text-xs lg:text-base mt-2 lg:mt-0 text-left lg:text-center 2xl:text-md lg:text-[.6rem] tracking-widest font-semibold pb-5">
                Fullstack inventory management for tools and hardware
                with admin dashboard and payment gateway
              </h2>
              <img
                src="/tools.svg"
                alt="paint3d"
                className="w-32 lg:w-[15rem]"
              />

              <div className="flex gap-3">
                <a
                   href="https://ignition-6cdd3.web.app/"
                  referrerPolicy="no-referrer"
                  className="hover:font-black hover:text-orange transition-all"
                  target="_blank"
                >
                  <div className="flex items-center gap-3">
                    <p className="py-10 lg:text-2xl">LIVE LINK</p>
                    <BsArrowUpRight className="lg:text-2xl" />
                  </div>
                </a>
                <a
                 href="https://github.com/Alapottra-troj1n/ignition-client"
                  referrerPolicy="no-referrer"
                  className="hover:font-black hover:text-orange transition-all"
                  target="_blank"
                >
                  <div className="flex items-center gap-3">
                    <p className="py-10 lg:text-2xl">GITHUB</p>
                    <BsArrowUpRight className="lg:text-2xl" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

   

        <div className="flex justify-center lg:justify-start items-center gap-3 click">
          <p className="py-10 text-2xl  lg:text-4xl transition-all font-black hover:font-medium">
            MORE PROJECTS
          </p>
          <BsArrowUpRight className="text-2xl lg:text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
