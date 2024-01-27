import React, {useState} from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from "../Images/logo.png"
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { MdOutlineAttachEmail } from "react-icons/md";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { RiMenu4Fill } from "react-icons/ri";
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './Sidebar';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
 
    
    const handleToggle = () => {
        setIsOpen(!isOpen)
    }
    
   

  return (
    <>
           {isOpen && (
               <Sidebar isOpen={isOpen} handleToggle={handleToggle} />
           )}
    <nav className='flex justify-between items-center'>
        <div className="flex justify-start items-center gap-3 p-4">
             <img src={Logo} alt="" className='block md:hidden w-[43px] h-[43px]'/>
             <img src={Logo} alt="" className='hidden md:block w-[48px] h-[48px]'/>
             <p className='block md:hidden text-lg text-secondary-color'></p>
             <p className='hidden md:block text-xl text-secondary-color'></p>
        </div>
        <div className="hidden md:flex justify-between items-center gap-20 mr-32  ">
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
        <div className="hidden md:flex justify-between items-center gap-4 p-4">
            <Link to="https://github.com/Olasunkanmi56"><FaGithub size={30} color='white' /></Link>
            <Link><CiLinkedin size={30} color='white' /></Link>
            <Link to="https://twitter.com/HammedO90118295"><CiTwitter size={30} color='white' /></Link>
            <a href="tel:+234 7045964130"><MdOutlineWifiCalling3 size={30} color='white' /></a>
            <a href="mailto:hammedolasunkanmi001@gmail.com"><MdOutlineAttachEmail size={30} color='white' /></a>

            
        </div>
        <div className="flex md:hidden justify-between items-center gap-4 p-3">
            <Link to="https://github.com/Olasunkanmi56"><FaGithub size={25} color='white' /></Link>
            <Link><CiLinkedin size={25} color='white' /></Link>
            <Link to="https://twitter.com/HammedO90118295"><CiTwitter size={30} color='white' /></Link>
            <a href="tel:+234 7045964130"><MdOutlineWifiCalling3 size={25} color='white' /></a>
            <a href="mailto:hammedolasunkanmi001@gmail.com"><MdOutlineAttachEmail size={25} color='white' /></a>
        </div>
        <div className="flex md:hidden p-3">
          <button className='border-none' onClick={handleToggle}><RiMenu4Fill size={25} color='white' /></button>
        </div>
    </nav>
    </>
  )
}

export default NavBar