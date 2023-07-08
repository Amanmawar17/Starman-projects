import React from 'react'
import { AiFillHeart } from "react-icons/ai"

const Footer = () => {
  return (
    <footer className='bg-[#0c1221] relative'>
      <div className='flex justify-center items-center h-8 py-6'>
      <p className='text-lg mr-2'>
      &copy; copyright reserved by Aman Mawar 
        </p> 
        <AiFillHeart className='text-accentColor hover:text-hoverColor'/>
      </div>
    </footer>
  )
}

export default Footer