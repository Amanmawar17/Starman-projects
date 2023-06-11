import React from 'react'
import { AiFillHeart } from "react-icons/ai"

const Footer = () => {
  return (
    <footer className='bg-[#0c1221] text-secondary'>
      <div className='flex justify-center items-center'>
      <p className='flex items-center text-lg p-2'>
      &copy; copyright reserved by Aman Mawar 
        </p> 
        <AiFillHeart className='text-accentColor hover:text-hoverColor'/>
      </div>
    </footer>
  )
}

export default Footer