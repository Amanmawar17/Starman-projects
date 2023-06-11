import React from 'react'
import { Outlet } from 'react-router-dom'

import Newbie from './newbie'
import Junior from './junior'
import Intermediate from './intermediate'
import Advanced from './advanced'

function Preview() {
  return (
    <div className='h-screen w-full overflow-x-hidden overflow-y-scroll scroll-smooth no-scrollbar bg-primary text-secondary'>
      <Outlet>
        <Newbie/>
        <Junior/>
        <Intermediate/>
        <Advanced/>
      </Outlet>
    </div>
  )
}

export default Preview