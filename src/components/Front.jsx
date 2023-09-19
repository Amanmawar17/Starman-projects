import React from 'react'
import Navbar from './navbar/navbar';
import Footer from './footer';

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
