import React from 'react'
import { Outlet } from 'react-router-dom'


function Preview() {
  return (
    <div className='w-full overflow-x-hidden overflow-y-scroll scroll-smooth no-scrollbar h-[85vh]'>
      <Outlet/></div>
  )
}

export default Preview