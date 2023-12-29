import React from 'react'
import Navbar from './Navbar/Navbar';
import Footer from './Footer';

export default function Front() {
  return (
    <>
    <div className='bg-primary text-secondary'>
        <Navbar/>
    </div>
        <Footer/>
    </>
  );
}
