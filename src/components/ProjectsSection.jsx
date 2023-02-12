import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const ProjectsSection = () => {
  return (
    <div className=" bg-dark border-t border-gray-500 px-40 pb-20 text-white">
      <div className="pt-20">
        <h2 className="text-primary font-display lg:text-8xl  hover:font-light tracking-tight">
          RECENT PROJECTS
        </h2>

        <div className="flex flex-col gap-10 mt-10 hover:bg-white hover:text-dark transition">
          <div className="border p-20">
            <div className="flex flex-col items-center">
              <h2 className="font-display text-[10rem] ">
                HILL VALLEY PRODUCTION
              </h2>
              <h2 className="uppercase tracking-widest font-semibold pb-5">
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

        <div className="flex flex-col gap-10 mt-10  hover:bg-orange  hover:text-white transition">
          <div className="hover:border-orange border p-20">
            <div className="flex flex-col items-center">
              <h2 className="font-display text-[10rem] ">GEEK HIVE</h2>
              <h2 className="uppercase tracking-widest font-semibold pb-5">
                Fullstack one-stop tech blog, bringing you the freshest geeky
                news and ideas with a friendly touch.
              </h2>
              <img src="/pc.svg" alt="paint3d" className="w-[15rem]" />

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

        <div className="flex flex-col gap-10 mt-10  hover:bg-primary  hover:text-dark transition">
          <div className="hover:border-primary border p-20">
            <div className="flex flex-col items-center">
              <h2 className="font-display text-[10rem] ">IGNITION</h2>
              <h2 className="uppercase tracking-widest font-semibold pb-5">
                A FULLSTACK INVENTORY MANAGEMENT WEBSITE for tools and hardware WITH ADMIN DASHBOARD & PAYMENT GATEWAY
              </h2>
              <img src="/tools.svg" alt="paint3d" className="w-[15rem]" />

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
