import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProjectCard from "./ProjectCard";
import { client } from "../client";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const cardVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  useEffect(() => {
    const query = '*[_type == "projects"]';

    client.fetch(query).then((data) => {
      setProjects(data);
    });
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start({ x: 0, opacity: 1, transition: { duration: 0.5 } });
    }
  }, [controls, inView]);
  return (
    <div ref={ref} id="project">
      <motion.h2
        className="text-2xl text-secondary-color md:text-4xl font-semibold pl-10"
        initial={{ x: -50, opacity: 0 }}
        animate={controls}
      >
        Projects
      </motion.h2>
     <div className="flex w-full flex-col md:flex-row justify-center items-center gap-10 pt-10">
        {projects &&
          projects.map((project, index) => (
            <motion.div
              key={index} // Using index as the key, assuming projects have unique indexes
              className="" // Adjusted grid classes
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
