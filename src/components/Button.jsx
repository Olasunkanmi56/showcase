import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({title, link}) => {
  return (
   <Link to={link}><button className='text-base text-white font-semibold bg-gradient-to-r from-[#945DD6] via-[#6978D1] to-[#13ADC7] border-none py-3 px-10 rounded-full'>{title}</button></Link>
  )
}

export default Button