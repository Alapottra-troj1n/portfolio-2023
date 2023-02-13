import { BsChevronDoubleDown } from "react-icons/bs";
import { Tooltip } from "react-tooltip";
import cursorChange from "../utils/cursorChange";

const SkillSection = ({ SkillSectionRef,projectSection }) => {

  const scrolltoProjects = () => {
    projectSection.current.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <div
      ref={SkillSectionRef}
      onMouseEnter={() => cursorChange("207, 237, 113")}
      className="bg-dark text-primary px-5 lg:px-5 xl:px-40 "
    >
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="xl:h-screen flex flex-col justify-between lg:pt-20 lg:pb-20 py-10">
          <h2 className="text-primary font-display lg:text-7xl xl:text-8xl text-center lg:text-left text-5xl  hover:font-light tracking-tight">
            THESE ARE MY SKILLS
          </h2>
        

          <div className="lg:flex flex-col hidden ">
         
            <div className="flex items-center text-white gap-3 ">
              <button onClick={scrolltoProjects} className="xl:text-4xl lg:text-2xl hover:font-black transition-all">
                CHECK WHAT I'VE BUILT
              </button>
              <BsChevronDoubleDown className="xl:text-4xl lg:text-2xl" />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 py-10 lg:pt-20 lg:pb-20 ">
          <div className="p-5 rounded-sm bg-slate-200/20 flex flex-col gap-5 lg:gap-4 xl:gap-0 justify-between">
            <div>
              <h2 className="font-primary font-black text-3xl text-white tracking-wide hover:font-light transition-all">
                Expertise
              </h2>

              <p className="text-gray-300 text-sm font-bold tracking-wide leading-7 mt-4">
                These are the technologies I excel at. Let me bring my best
                efforts to your project and work towards delivering exceptional
                results.
              </p>
            </div>

            <div className="flex gap-2 flex-wrap">
              <div>
                <Tooltip anchorId="js" />
                <img
                  src="https://skillicons.dev/icons?i=js"
                  id="js"
                  
                  data-tooltip-content="Javascript"
                />
              </div>
              <div>
                <Tooltip anchorId="react" />
                <img
                  src="https://skillicons.dev/icons?i=react"
                  id="react"
                  data-tooltip-content="React.js"
                />
              </div>
              <div>
                <Tooltip anchorId="tailwind" />
                <img
                  src="https://skillicons.dev/icons?i=tailwind"
                  id="tailwind"
                  data-tooltip-content="Tailwind CSS"
                />
              </div>
              <div>
                <Tooltip anchorId="redux" />
                <img
                  src="https://skillicons.dev/icons?i=redux"
                  id="redux"
                  data-tooltip-content="Redux & Redux-Toolkit"
                />
              </div>
              <div>
                <Tooltip anchorId="nextjs" />
                <img
                  src="https://skillicons.dev/icons?i=nextjs"
                  id="nextjs"
                  data-tooltip-content="Next.js"
                />
              </div>
              <div>
                <Tooltip anchorId="express" />
                <img
                  src="https://skillicons.dev/icons?i=express"
                  id="express"
                  data-tooltip-content="Node & Express.js"
                />
              </div>
              <div>
                <Tooltip anchorId="mongodb" />
                <img
                  src="https://skillicons.dev/icons?i=mongodb"
                  id="mongodb"
                  data-tooltip-content="Node & Express.js"
                />
              </div>
              <div>
                <Tooltip anchorId="firebase" />
                <img
                  src="https://skillicons.dev/icons?i=firebase"
                  id="firebase"
                  data-tooltip-content="Firebase"
                />
              </div>
            </div>
          </div>
          <div className="p-5 rounded-sm bg-slate-200/20 flex flex-col gap-5  lg:gap-4 xl:gap-0 justify-between">
            <div>
              <h2 className="font-primary font-black text-3xl text-white tracking-wide hover:font-light transition-all">
                Comfortable
              </h2>

              <p className="text-gray-300 text-sm leading-7 font-bold tracking-wide mt-4">
                I am also proficient in other technologies. My ability to learn
                and adapt quickly allows me to effectively contribute to new
                projects.
              </p>
            </div>
            <div className="flex gap-2 flex-wrap">
              <div>
                <Tooltip anchorId="vuejs" />
                <img
                  src="https://skillicons.dev/icons?i=vuejs"
                  id="vuejs"
                  data-tooltip-content="Vue.js"
                />
              </div>
              <div>
                <Tooltip anchorId="nuxtjs" />
                <img
                  src="https://skillicons.dev/icons?i=nuxtjs"
                  id="nuxtjs"
                  data-tooltip-content="Nuxt.js"
                />
              </div>

              <div>
                <Tooltip anchorId="sass" />
                <img
                  src="https://skillicons.dev/icons?i=sass"
                  id="sass"
                  data-tooltip-content="SASS"
                />
              </div>
              <div>
                <Tooltip anchorId="bootstrap" />
                <img
                  src="https://skillicons.dev/icons?i=bootstrap"
                  id="bootstrap"
                  data-tooltip-content="Bootstrap"
                />
              </div>
              <div>
                <Tooltip anchorId="wordpress" />
                <img
                  src="https://skillicons.dev/icons?i=wordpress"
                  id="wordpress"
                  data-tooltip-content="WordPress"
                />
              </div>

              <div>
                <Tooltip anchorId="material" />
                <img
                  src="https://skillicons.dev/icons?i=materialui"
                  id="material"
                  data-tooltip-content="Material UI"
                />
              </div>
            </div>
          </div>
          <div className="p-5 rounded-sm bg-slate-200/20 flex flex-col gap-5 lg:gap-4 xl:gap-0 justify-between">
            <div className="flex gap-2 flex-wrap">
              <h2 className="font-primary font-black text-3xl  text-white tracking-wide hover:font-light transition-all">
                Familiar
              </h2>

              <p className="text-gray-300 text-sm leading-7 font-bold tracking-wide mt-4">
                I am eager to continue learning and expanding my skill set, and
                am confident that my familiarity with these technologies will be
                an asset to your team.
              </p>
            </div>

            <div className="flex gap-2 flex-wrap">
              <div>
                <Tooltip anchorId="python" />
                <img
                  src="https://skillicons.dev/icons?i=python"
                  id="python"
                  data-tooltip-content="Python"
                />
              </div>
              <div>
                <Tooltip anchorId="typescript" />
                <img
                  src="https://skillicons.dev/icons?i=typescript"
                  id="typescript"
                  data-tooltip-content="Typescript"
                />
              </div>
              <div>
                <Tooltip anchorId="graphql" />
                <img
                  src="https://skillicons.dev/icons?i=graphql"
                  id="graphql"
                  data-tooltip-content="GraphQL"
                />
              </div>
              <div>
                <Tooltip anchorId="webflow" />
                <img
                  src="https://skillicons.dev/icons?i=webflow"
                  id="webflow"
                  data-tooltip-content="Webflow"
                />
              </div>
            </div>
          </div>
          <div className="p-5 rounded-sm bg-slate-200/20 flex flex-col gap-5 lg:gap-4 xl:gap-0 justify-between">
            <div className="flex gap-2 flex-wrap">
              <h2 className="font-primary font-black text-3xl text-white tracking-wide hover:font-light transition-all">
                Tools
              </h2>

              <p className="text-gray-300 text-sm font-bold tracking-wide  leading-7 mt-4">
                Comfortable with various tools, able to navigate and use
                effectively. Continuously improving knowledge. This adds value
                to projects and team.
              </p>
            </div>

            <div className="flex gap-2 flex-wrap">
              <div>
                <Tooltip anchorId="netlify" />
                <img
                  src="https://skillicons.dev/icons?i=netlify"
                  id="netlify"
                  data-tooltip-content="Netlify"
                />
              </div>
              <div>
                <Tooltip anchorId="vercel" />
                <img
                  src="https://skillicons.dev/icons?i=vercel"
                  id="vercel"
                  data-tooltip-content="Vercel"
                />
              </div>
              <div>
                <Tooltip anchorId="figma" />
                <img
                  src="https://skillicons.dev/icons?i=figma"
                  id="figma"
                  data-tooltip-content="Figma"
                />
              </div>
              <div>
                <Tooltip anchorId="photoshop" />
                <img
                  src="https://skillicons.dev/icons?i=photoshop"
                  id="photoshop"
                  data-tooltip-content="Adobe Photoshop"
                />
              </div>
              <div>
                <Tooltip anchorId="adobeai" />
                <img
                  src="https://skillicons.dev/icons?i=ai"
                  id="adobeai"
                  data-tooltip-content="Adobe Illustrator"
                />
              </div>
              <div>
                <Tooltip anchorId="github" />
                <img
                  src="https://skillicons.dev/icons?i=github"
                  id="github"
                  data-tooltip-content="Github"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
