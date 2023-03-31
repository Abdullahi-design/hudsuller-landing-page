import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

const Timer = () => {
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("03/31/2023 23:59:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const day = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(day);

      const hour = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(hour);

      const minute = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(minute);

      const second = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(second);

      if (day <= 0 && hour <= 0 && minute <= 0 && second <= 0) {
        setPartyTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">

      {partyTime ? (
        <>
          <h1 className='text-left lg:text-4xl text-2xl pb-4 font-extrabold text-text-secondary'>Your Details</h1>
        </>
      ) : (
        <>
          <h1 className='text-left lg:text-4xl text-2xl pb-4 font-extrabold text-text-secondary'>This is a ⏳Limited offer</h1>
          {/* <div className="lg:flex hidden justify-evenly my-5">
            <p className='lg:text-4xl text-2xl line-through text-warning'>₦25,000</p> 
            <span className="text-xl">For</span>
            <p className='text-[#509e1f] lg:text-4xl text-2xl text-black'>₦18,999</p>
          </div> */}
          <div className="bg-warning w-full justify-center lg:text-4xl text-2xl font-extrabold text-white flex">
            <div className="px-3">
              <span>0{days}</span> <br />
              <span className=" font-light lg:text-xl text-sm">Days</span>
            </div>
            <span>:</span>
            <div className="px-3">
              <span>{hours}</span> <br />
              <span className=" font-light lg:text-xl text-sm">Hours</span>
            </div>
            <span>:</span>
            <div className="px-3">
              <span>{minutes}</span> <br />
              <span className=" font-light lg:text-xl text-sm">Minutes</span>
            </div>
            <span>:</span>
            <div className="px-3">
              <span>{seconds}</span> <br />
              <span className=" font-light lg:text-xl text-sm">Seconds</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Timer;
