import React from 'react'
import { useState, useEffect } from 'react'
import CalcButton from './Calculator/CalcButton';

const Calculator = () => {
  const [theme, setTheme] = useState();
  useEffect(()=>{

  })
  return (
    <section className='h-screen bg-[#3a4764] grid place-content-center gap-5'>
      <div className=''>
        <h1>calc</h1>
        <div>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
          <div>
            <h3>Theme</h3>
          <input type="range" min={1} max={3} className='' onChange={e => setTheme(e.target.value)} />
          </div>
        </div>
      </div>
      <form className='bg-[#182034] w-40 h-20'>

      </form>
      <div className='bg-[#232c43] grid grid-cols-4 p-4'>
        <CalcButton />
        <CalcButton />
        <CalcButton />
        <CalcButton />
        <CalcButton />
        <CalcButton />
      </div>
    </section>
  )
}

export default Calculator