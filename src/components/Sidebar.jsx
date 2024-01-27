import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IoIosCloseCircleOutline } from "react-icons/io";

const Sidebar = ({isOpen, handleToggle }) => {
  return (
    <AnimatePresence>
     {isOpen && (
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        exit={{ x: '-100%' }}
        transition={{ duration: 0.3 }}
        className="block md:hidden fixed inset-y-0 left-0 w-64 bg-primary_color bg-opacity-75 overflow-y-auto z-50"
      > 
        <div className="flex justify-end items-center p-4">
            <button className='border-none' onClick={handleToggle}><IoIosCloseCircleOutline size={25} color='white' /></button>
        </div>
        <div className="p-4 space-y-4 space-x-5 flex flex-col justify-center items-center">
   <a
            className="text-xl text-secondary-color cursor-pointer"
            href="#project"
          >
            Projects
          </a>
          <a
            className="text-xl text-secondary-color cursor-pointer"
            href="#tech"
          >
            Technologies
          </a>
          <a
            className="text-xl text-secondary-color cursor-pointer"
            href="#about"
          >
            About me
          </a>
    </div>

      </motion.div>
    )}
  </AnimatePresence>
  )
}

export default Sidebar