import React from "react";
import Image from "../Images/proj.png";
import Line from "./Line";
import Button from "./Button";
import { motion } from "framer-motion";
import { urlFor } from "../client";

const ProjectCard = ({ project }) => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="rounded-tl-[2.7rem] rounded-br-[2.7rem] shadow-2xl w-[330px] shadow-white z-50"
    >
      <motion.div
        variants={textVariants}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col justify-center items-center p-4"
      >
        <motion.div
          variants={textVariants}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-4"
        >
          {project.imgUrl && (
            <motion.img
              variants={textVariants}
              transition={{ duration: 0.6, delay: 0.6 }}
              src={urlFor(project.imgUrl).url()}
              alt=""
              className="py-2 w-[250px] md:w-[300px] h-[266]"
            />
          )}
          <motion.h3
            variants={textVariants}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="pt-2 text-xl text-white text-center font-semibold uppercase"
          >
            {project.title}
          </motion.h3>
        </motion.div>
        <motion.div
          variants={textVariants}
          transition={{ duration: 0.6, delay: 1 }}
          className="w-[200px]"
        >
          <Line />
        </motion.div>
        <motion.div
          variants={textVariants}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col justify-start"
        >
          <motion.div
            variants={textVariants}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="mb-4 text-center"
          >
            <p className="py-4 text-left md:w-[300px] text-white">
              {project.description}
            </p>
          </motion.div>
          <motion.div
            variants={textVariants}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            <Button title="Look it up" link={project.projectLink} />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
