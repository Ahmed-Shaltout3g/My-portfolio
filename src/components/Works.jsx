import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { live } from "../assets";

import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ name, description, tags, image, source_code_link, Demo_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring")} initial="hidden" animate="show">
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-fill  rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end space-x-2 m-3 card-img_hover ">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-7 h-7 rounded-full flex justify-center items-center cursor-pointer  "
            >
              <img src={github} alt="source code" className=" object-contain bg-gray-800 rounded-full " />
            </div>
            <div
              onClick={() => window.open(Demo_link, "_blank")}
              className="black-gradient w-7 h-7 rounded-full flex justify-center items-center cursor-pointer bg-white   "
            >
              <img src={live} alt="source code" className=" object-contain  rounded-full " />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()} initial="hidden" animate="show">
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p variants={fadeIn("up", "spring", 0.1)} initial="hidden" animate="show" className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcase my skills and experience through examples
          of my work. Each project is briefly described with links to code
          repositories in it.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
