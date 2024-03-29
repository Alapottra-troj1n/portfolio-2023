import React from "react";
import cursorChange from "../utils/cursorChange";

import { BsArrowUpRight } from "react-icons/bs";
const Contact = () => {
  return (
    <div
      onMouseEnter={() => cursorChange("40, 41, 31")}
      className="2xl:h-screen bg-secondary lg:px-40 px-5 py-24 text-dark"
    >
      <div>
        <div className="flex flex-col gap-3 ">
          <a target="_blank" referrerPolicy="no-referrer" href="https://www.linkedin.com/in/alapottra/" className="flex items-center gap-3">
            <h2 className="font-black text-2xl lg:text-4xl 2xl:text-6xl  hover:font-light transition-all tracking-tight">
              LINKDIN
            </h2>
            <BsArrowUpRight className="lg:text-3xl 2xl:text-5xl font-bold" />
          </a>
          <a target="_blank" referrerPolicy="no-referrer" href="https://github.com/Alapottra-troj1n" className="flex items-center gap-3">
            <h2 className="font-black text-2xl lg:text-4xl 2xl:text-6xl  hover:font-light transition-all tracking-tight">
              GITHUB
            </h2>
            <BsArrowUpRight className="lg:text-3xl 2xl:text-5xl font-bold" />
          </a>
          <a target="_blank" referrerPolicy="no-referrer" href="https://www.facebook.com/Alapottra" className="flex items-center gap-3">
            <h2 className="font-black text-2xl lg:text-4xl 2xl:text-6xl  hover:font-light transition-all tracking-tight">
              FACEBOOK
            </h2>
            <BsArrowUpRight className="text-2xl lg:text-3xl 2xl:text-5xl font-bold" />
          </a>
        </div>

        <div className="flex flex-col items-center mt-10 relative">
            <h2 className="text-[4.5rem] md:text-[8rem] lg:text-[5rem] xl:text-[7rem] 2xl:text-[18rem] font-display text-orange border " >LET'S CONNECT.</h2>
            <h6 className=" text-sm lg:text-md 2xl:text-2xl font-semibold 2xl:absolute text-gray-600 2xl:bottom-[7rem]">I'm on the lookout for exciting opportunities to offer my development skills and bring value to innovative startups.</h6>
            <a className="uppercase font-black text-md lg:text-md underline 2xl:text-3xl text-orange hover:font-medium transition-all mt-5" href="mailto:alapottratrojon@gmail.com">alapottratrojon@gmail.com</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
