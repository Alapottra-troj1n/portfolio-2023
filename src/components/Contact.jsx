import React from "react";
import cursorChange from "../utils/cursorChange";

import { BsArrowUpRight } from "react-icons/bs";
const Contact = () => {
  return (
    <div
      onMouseEnter={() => cursorChange("40, 41, 31")}
      className="h-screen bg-secondary px-40 py-20 text-dark"
    >
      <div>
        <div className="flex flex-col gap-3 ">
          <div className="flex items-center gap-3">
            <h2 className="font-black lg:text-6xl  hover:font-light transition-all tracking-tight">
              LINKDIN
            </h2>
            <BsArrowUpRight className="text-5xl font-bold" />
          </div>
          <div className="flex items-center gap-3">
            <h2 className="font-black lg:text-6xl  hover:font-light transition-all tracking-tight">
              GITHUB
            </h2>
            <BsArrowUpRight className="text-5xl font-bold" />
          </div>
          <div className="flex items-center gap-3">
            <h2 className="font-black lg:text-6xl  hover:font-light transition-all tracking-tight">
              FACEBOOK
            </h2>
            <BsArrowUpRight className="text-5xl font-bold" />
          </div>
        </div>

        <div className="flex flex-col items-center mt-10 relative">
            <h2 className="text-[18rem] font-display text-orange border " >LET'S CONNECT.</h2>
            <h6 className="text-2xl font-semibold absolute text-gray-600 bottom-[7rem]">I'm on the lookout for exciting opportunities to offer my development skills and bring value to innovative startups.</h6>
            <a className="uppercase font-black text-3xl text-orange hover:font-medium transition-all mt-5" href="mailto:alapottratrojon@gmail.com">alapottratrojon@gmail.com</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
