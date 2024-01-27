import React, {useRef , useEffect, useState} from 'react'
import {init} from "ityped"
import drawing from "../Images/drawing.png"
import Button from './Button'
import { motion } from 'framer-motion';
import { urlFor, client } from '../client';



const Hero = () => {
  const [skill, setSkill] = useState()
  const textRef = useRef();

  useEffect(() => {
    const query = `*[_type == "pic"]`;

    client.fetch(query).then(data => {
      setSkill(data)
   console.log(data)
    })
  })

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: [ "Hammed Olasunkanmi"],
    });
  }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1.5 } },
      };
  return (
    <motion.div
    initial="hidden"
    animate="visible"
    variants={containerVariants}
    className='flex justify-between items-center py-20 md:pl-10'
  >
    <div className="flex-col justify-start items-start text-white p-4 md:mb-80">
    <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        className='text-lg text-[#BCBCBC] md:text-2xl pb-4 font-semibold'
      >
        I'm
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        className='text-3xl md:text-5xl font-semibold'
      >
         <span ref={textRef}></span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } }}
        className='text-lg text-[#BCBCBC] md:text-2xl md:w-[700px] font-medium py-5 md:pl-5'
      >
         Experienced frontend developer skilled in crafting responsive and visually appealing web interfaces. Proficient in HTML, CSS, JavaScript and React, with a passion for creating seamless user experiences and innovative design solutions.
      </motion.p>
        <div className="flex flex-row justify-start gap-3 items-center md:pl-5">
        {skill &&
  skill.map((image, i) => (
    image?.imgUry && (
      <img
        key={i}
        src={urlFor(image?.imgUry).url()}
        alt="img"
      />
    )
  ))}
        </div>
      <div className=" py-8">
        <Button title="Download CV" link="" />
      </div>
    </div>
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 1, delay: 1 } }}
      className="hidden md:block"
    >
      <img src={drawing} alt="" />
    </motion.div>
  </motion.div>
  )
}

export default Hero