import React from 'react'
import { Link, NavLink } from "react-router-dom";
import { assets } from '../assets/frontend_assets/assets'

const Hero = () => { 
  return (
    <div className='w-full border border-gray-400 flex justify-center items-center'>
      <img className='w-full h-auto object-cover' src={assets.banner} alt="Banner" />
    </div>
  )
}

export default Hero