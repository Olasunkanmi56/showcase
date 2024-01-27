import React from 'react'
import Button from './Button'
import image from "../Images/3d.avif"


const About = () => {
 

  return (
    <div className='mt-14 p-4' id='about'>
    <h2 className='text-2xl text-secondary-color md:text-4xl font-semibold pl-6 mb-6'>About me</h2>
    <div className="container-fluid py-5" id="about">
  <div className="container">
    <div className="flex flex-col md:flex-row items-center gap-6">
      <div className="md:w-1/2 md:pr-4 pb-4 md:pb-0">
        <img className="rounded w-full" src={image} alt="Profile" />
      </div>
      <div className="md:w-1/2">
        <h3 className="text-2xl md:text-4xl mb-4 text-white font-medium">Hammed Olasunkanmi</h3>
        <p className="mb-4 text-lg md:text-xl md:w-[650px]  text-white font-medium">
         A experienced frontend developer with strong HTML, CSS, and JavaScript skills, specializing in dynamic web interfaces. Proficient in popular frameworks like React, focusing on detail and design aesthetics. Passionate about industry trends and technologies, collaborating team player, and problem-solving. Dedicated to creating visually appealing, efficient web applications for user engagement and satisfaction.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-3 mb-3 ">
          <div className=" py-2 text-lg md:text-xl text-white font-medium"><h6>Experience: <span className="text-white text-lg md:text-xl font-medium">2 Years</span></h6></div>
          <div className=" py-2 text-lg md:text-xl text-white font-medium"><h6>Freelance: <span className="text-white text-lg md:text-xl font-medium">Available</span></h6></div>
        </div>
        <div className="flex space-x-4 mb-4">
           <Button title="Hire me" link=""/>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default About