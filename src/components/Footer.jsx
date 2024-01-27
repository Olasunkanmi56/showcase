import React from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom"
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { MdOutlineAttachEmail } from "react-icons/md";
import { MdOutlineWifiCalling3 } from "react-icons/md";

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      animate="visible"
      className="text-white py-4 text-center"
    >
      <div className="container mx-auto">
        <p className="text-sm mt-2">&copy; {new Date().getFullYear()} Designed with React and Tailwind</p>
        <div className="hidden md:flex justify-center items-center gap-3 p-3 md:p-4">
            <Link to="https://github.com/Olasunkanmi56"><FaGithub size={30} color='white' /></Link>
            <Link><CiLinkedin size={30} color='white' /></Link>
            <Link to="https://twitter.com/HammedO90118295"><CiTwitter size={30} color='white' /></Link>
            <a href="tel:+234 7045964130"><MdOutlineWifiCalling3 size={30} color='white' /></a>
            <a href="mailto:hammedolasunkanmi001@gmail.com"><MdOutlineAttachEmail size={30} color='white' /></a>       
            </div>
            <div className="flex md:hidden justify-center items-center gap-3 p-3 md:p-4">
            <Link to="https://github.com/Olasunkanmi56"><FaGithub size={25} color='white' /></Link>
            <Link><CiLinkedin size={25} color='white' /></Link>
            <Link to="https://twitter.com/HammedO90118295"><CiTwitter size={25} color='white' /></Link>
            <a href="tel:+234 7045964130"><MdOutlineWifiCalling3 size={25} color='white' /></a>
            <a href="mailto:hammedolasunkanmi001@gmail.com"><MdOutlineAttachEmail size={25} color='white' /></a>       
            </div>
      </div>
    </motion.footer>
  );
};

export default Footer;