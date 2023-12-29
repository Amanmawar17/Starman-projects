import React, { useEffect, useState } from 'react'

import AgeInput from './AgeInput';


export default function AgeCalculator () {
  
  // States for the results
  const [days, setDays] = useState('--');
  const [months, setMonths] = useState('--');
  const [years, setYears] = useState('--');
  const [daysNum, setDaysNum] = useState('days');
  const [monthsNum, setMonthsNum] = useState('months');
  const [yearsNum, setYearsNum] = useState('years');

  useEffect(()=>{
    if(days === 1){
      setDaysNum("day")
    } else {
      setDaysNum("days")
    }
  }, [days]);
  useEffect(()=>{
    if(months === 1){
      setMonthsNum("month")
    } else {
      setMonthsNum("months")
    }
  }, [months]);
  useEffect(()=>{
    if(years === 1){
      setYearsNum("year")
    } else {
      setYearsNum("years")
    }
  }, [years]);

  function calculateRealAge(year, month, day, monthArr) {
    const actualDate = new Date();
    let d = actualDate.getDate();
    let m = actualDate.getMonth()+1;
    console.log(m);
    let y = actualDate.getFullYear();
      
    if (d < day) {
      m--;
      let actualDays = d + (monthArr[m+1]);
      let realDays = actualDays - day;
      setDays(realDays);
    } else {
      let realDays = d - day;
      setDays(realDays);
    }

    if (m < month) {
      y--;
      m += 12;
      let realMonths = m - month;
      setMonths(realMonths);
    } else {
      let realMonths = (m - month);
      setMonths(realMonths);
    }
  
    setYears(y-year);
  };
  
  return (
    <section className='grid place-content-center h-screen bg-[#dbdbdb]'>
      <div className='bg-[#fff] max-w-3xl rounded-ee-[140px] p-4 sm:p-14'>
        <AgeInput calculate={calculateRealAge}/>
        <div className='grid gap-5 font-bold'>
          <h3 className='text-4xl sm:text-6xl'><span className='text-[#854dff]'>{years}</span> {yearsNum}</h3>
          <h3 className='text-4xl sm:text-6xl'><span className='text-[#854dff]'>{months}</span> {monthsNum}</h3>
          <h3 className='text-4xl sm:text-6xl'><span className='text-[#854dff]'>{days}</span> {daysNum}</h3>
        </div>
      </div>
    </section>
  )
}

