import React from 'react';
import { motion } from 'framer-motion';


const ProgressBar = ({ tech }) => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {tech?.map((th, i) => (
        <motion.div
          key={i}
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto w-[80%] md:w-[400px] py-2"
        >
          <div className="flex flex-row justify-between items-center mb-1 text-lg font-medium dark:text-white px-8">
            
            <p className='text-lg font-medium text-white mb-2 md:mb-0'>{th.skill}</p>
            <p className='text-base font-thin text-[#BCBCBC]'>{th.rate}</p>
          </div>
          <motion.div
            className="w-full h-2 mb-4 bg-gray-200 rounded-full dark:bg-[#162950]"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: th.width || '75%', transition: { duration: 1, ease: 'easeInOut' } }}
              className="h-2 bg-gradient-to-r from-[#945DD6] via-[#6978D1] to-[#13ADC7] rounded-full"
            ></motion.div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProgressBar;
