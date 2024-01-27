/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import arrow from '/age-arrow.svg'

function AgeInput({calculate}) {
  // States for the inputs form
  const dayRef = useRef(null);
  const monthRef = useRef(null);
  const yearRef = useRef(null);
  const [day, setDay] = useState(undefined);
  const [month, setMonth] = useState(undefined);
  const [year, setYear] = useState(undefined);
  const [validDay, setValidDay] = useState(true);
  const [validMonth, setValidMonth] = useState(true);
  const [validYear, setValidYear] = useState(true);
  const [requiredDay, setRequiredDay] = useState(false);
  const [requiredMonth, setRequiredMonth] = useState(false);
  const [requiredYear, setRequiredYear] = useState(false);
  const [daysInMonth, setDaysInMonth] = useState([
    31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
  ]);
  const [validDate, setValidDate] = useState(true);
  const states = [day, month, year];

  useEffect(() => {
    if (day > daysInMonth[month - 1]) {
      setValidDate(false);
    } else {
      setValidDate(true);
    }
  }, states);

  useEffect(() => {
    setRequiredDay(false);
  }, [day]);

  useEffect(() => {
    setRequiredMonth(false);
  }, [month]);

  useEffect(() => {
    setRequiredYear(false);
  }, [year]);

  // Tackling Leap Year here ...
  useEffect(() => {
    if ((0 === year % 4 && 0 !== year % 100) || 0 !== year % 400) {
      setDaysInMonth((previousDayInMonth) => {
        const updatedDayInMonth = [...previousDayInMonth];
        updatedDayInMonth[1] = 29;
        return updatedDayInMonth;
      });
    } else {
      setDaysInMonth((previousDayInMonth) => {
        const updatedDayInMonth = [...previousDayInMonth];
        updatedDayInMonth[1] = 28;
        return updatedDayInMonth;
      });
    }
  }, [year]);

  useEffect(() => {
    if (day > daysInMonth[month - 1]) {
      setValidDay(false);
    } else {
      setValidDay(true);
    }
  }, [daysInMonth]);

  useEffect(() => {
    if (day > daysInMonth[month - 1]) {
      setValidDay(false);
    } else {
      setValidDay(true);
    }
  }, [month]);

  function handleChangeDay(e) {
    setRequiredDay(false);
    const day = e.target.value;
    console.log(day)
    setDay(day);
    if (1 <= day <= 31) {
      setValidDay(true);
    } else {
      setValidDay(false);
    }
  }
  function handleChangeMonth(e) {
    setRequiredMonth(false);
    const month = e.target.value;
    console.log(month)
    setMonth(month);
    if (1 <= month <= 12) {
      setValidMonth(true);
    } else {
      setValidMonth(false);
    }
  }
  function handleChangeYear(e) {
    setRequiredYear(false);
    const year = e.target.value;
    console.log(year);
    setYear(year);
    const actualDAte = new Date();
    if (0 <= year <= actualDAte.getFullYear()) {
      setValidYear(true);
    } else {
      setValidYear(false);
    }
    
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (day === undefined && month === undefined && year === undefined) {
      setRequiredDay(true);
      setValidDay(true);

      setRequiredMonth(true);
      setValidMonth(true);

      setRequiredYear(true);
      setValidYear(true);
      return;
    }

    if (day === undefined && month === undefined) {
      setRequiredDay(true);
      setValidDay(true);

      setRequiredMonth(true);
      setValidMonth(true);
      return;
    }

    if (day === undefined && year === undefined) {
      setRequiredDay(true);
      setValidDay(true);

      setRequiredYear(true);
      setValidYear(true);
      return;
    }

    if (month === undefined && year === undefined) {
      setRequiredMonth(true);
      setValidMonth(true);

      setRequiredYear(true);
      setValidYear(true);
      return;
    }
    if (month === undefined) {
      setRequiredMonth(true);
      setValidMonth(true);
      return;
    }

    if (year === undefined) {
      setRequiredYear(true);
      setValidYear(true);
      return;
    }

    if (day === undefined) {
      setRequiredDay(true);
      setValidDay(true);
      return;
    }
    if (
      validDay &&
      validMonth &&
      validYear &&
      !requiredDay &&
      !requiredMonth &&
      !requiredYear
    ) {
      calculate(year, month, day, daysInMonth);
      console.log(day, month, year)
    }
  }
  

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-2 ">
      <label htmlFor="day" className={`${validDay ? "text-[#716f6f]" : "text-[#ff5757]"} ${requiredDay ? "text-[#ff5757]" : "text-[#716f6f]"} text-sm font-bold`}>DAY</label>
      <label htmlFor="month" className={`${validMonth ? "text-[#716f6f]" : "text-[#ff5757]"} ${requiredMonth ? "text-[#ff5757]" : "text-[#716f6f]"} text-sm font-bold`}>MONTH</label>
      <label htmlFor="year" className={`${validYear ? "text-[#716f6f]" : "text-[#ff5757]"} ${requiredYear ? "text-[#ff5757]" : "text-[#716f6f]"} text-sm font-bold`}>YEAR</label>
      <input
        type="number"
        min={1}
        max={31}
        ref={dayRef}
        name="day"
        id="day"
        placeholder="DD"
        onChange={handleChangeDay}
        className={`${validDay ? "outline-[#716f6f]" : "text-[#ff5757] outline-[#ff5757]"} ${requiredDay ? "text-[#ff5757] outline-[#ff5757]": "outline-[#716f6f]"} focus:outline-[#854dff] focus:outline-dashed outline-1 outline text-3xl font-bold w-20 sm:w-32`}
      />
      <input
        type="number"
        min={1}
        max={12}
        ref={monthRef}
        name="month"
        id="month"
        placeholder="MM"
        onChange={handleChangeMonth}
        className={`${validMonth ? "outline-[#716f6f]" : "text-[#ff5757] outline-[#ff5757]"} ${requiredMonth ? "text-[#ff5757] outline-[#ff5757]": "outline-[#716f6f]"} focus:outline-[#854dff] focus:outline-dashed outline-1 outline text-3xl font-bold w-20 sm:w-32`}
      />
      <input
        type="number"
        min={0}
        max={new Date().getFullYear()}
        ref={yearRef}
        name="year"
        id="year"
        placeholder="YYYY"
        onChange={handleChangeYear}
        className={`${validYear ? "outline-[#716f6f]" : "text-[#ff5757] outline-[#ff5757]"} ${requiredYear ? "text-[#ff5757] outline-[#ff5757]" : "outline-[#716f6f]"} focus:outline-[#854dff] focus:outline-dashed outline-1 outline text-3xl font-bold w-20 sm:w-32`}
      />

      {validDate ? (
        ""
      ) : (
        <div className="text-[8px] text-[#ff5757] col-span-3 place-self-center">Must be a valid date</div>
      )}
      {validDay ? "" : <div className="text-[8px] text-[#ff5757]">Must be a valid day</div>}
      {requiredDay ? (
        <div className="text-[8px] text-[#ff5757]">This Day field is required</div>
      ) : (
        <div></div>
      )}
      {validMonth ? "" : <div className="text-[8px] text-[#ff5757]">Must be a valid month</div>}
      {requiredMonth ? (
        <div className="text-[8px] text-[#ff5757]">This Month field is required</div>
      ) : (
        <div></div>
      )}
      {validYear ? (
        ""
      ) : (
        <div className="text-[8px] text-[#ff5757]">Must be in the past</div>
      )}
      {requiredYear ? (
        <div className="text-[8px] text-[#ff5757]">This Year field is required</div>
      ) : (
        <div></div>
      )}

      <div className='my-8 relative col-span-3'>
          <hr className='border-t-2 text-[#716f6f]' />
          <button type="submit" className='absolute -top-8 right-0 rounded-full h-14 w-14 bg-[#854dff] shadow hover:bg-[#141414] text-[#ffffff] hover:shadow-[#141414] hover:shadow-2xl'>
            <img src={arrow} className='m-auto w-8' alt=""/>
          </button>
      </div>
    </form>
  );
}

export default AgeInput;
