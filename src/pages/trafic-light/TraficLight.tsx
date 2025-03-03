"use client"
import React, { useState, useEffect } from 'react'
import Header from '../../components/Header';

const TraficLight = () => {
  const [lightColor, setLightColor] = useState('green');
  const [isManual, setIsManual] = useState(false);

  useEffect(() => {
    if (isManual) return;

    const getDuration = (color: string) => {
      switch (color) {
        case 'red': return 10000;  // 10 seconds
        case 'yellow': return 5000; // 5 seconds
        case 'green': return 15000; // 15 seconds
        default: return 5000;
      }
    };

    const changeLight = () => {
      setLightColor(prevColor =>
        prevColor === 'green' ? 'yellow' :
          prevColor === 'yellow' ? 'red' :
            'green'
      );
    };

    const timeout = setTimeout(changeLight, getDuration(lightColor));

    return () => clearTimeout(timeout);
  }, [lightColor, isManual]);

  const manualClick = (color: string) => {
    setLightColor(color);
    setIsManual(true);

    setTimeout(() => {
      setIsManual(false);
    }, 5000);
  }

  return (
    <>
      <Header />
      <div className='mt-14'>
        <h1 className='sm:text-[56px] text-[32px] text-center uppercase'>Traffic Light</h1>
        <hr className='border-t-[0.5px]' />
        <div className='py-6 flex flex-col gap-4'>
          <div className={`flex gap-4 mt-2 px-2 justify-center`}>
            <button
              onClick={() => manualClick('red')}
              className={`w-32 sm:text-[20px] text-[16px] border border-solid border-[#808080] rounded-lg py-1 cursor-pointer bg-red-500 hover:bg-red-600 text-black transition duration-200`}>
              Activate Red
            </button>
            <button
              onClick={() => manualClick('yellow')}
              className={`w-32 sm:text-[20px] text-[16px] border border-solid border-[#808080] rounded-lg py-1 cursor-pointer bg-yellow-500 hover:bg-yellow-600 text-black transition duration-200`}>
              Activate Yellow
            </button>
            <button
              onClick={() => manualClick('green')}
              className={`w-32 sm:text-[20px] text-[16px] border border-solid border-[#808080] rounded-lg py-1 cursor-pointer bg-green-500 hover:bg-green-600 text-black transition duration-200`}>
              Activate Green
            </button>
          </div>

          <div className={`flex gap-4 mt-2 px-2 justify-center`}>
            <button
              onClick={() => manualClick('red')}
              className={`w-60 sm:text-[20px] text-[16px] border border-solid border-[#808080] rounded-lg py-1 cursor-pointer bg-red-500 hover:bg-red-600 text-black transition duration-200`}>
              Increase Red Timer by 5s
            </button>
            <button
              onClick={() => manualClick('yellow')}
              className={`w-60 sm:text-[20px] text-[16px] border border-solid border-[#808080] rounded-lg py-1 cursor-pointer bg-yellow-500 hover:bg-yellow-600 text-black transition duration-200`}>
              Increase Yellow Timer by 5s
            </button>
            <button
              onClick={() => manualClick('green')}
              className={`w-60 sm:text-[20px] text-[16px] border border-solid border-[#808080] rounded-lg py-1 cursor-pointer bg-green-500 hover:bg-green-600 text-black transition duration-200`}>
              Increase Green Timer by 5s
            </button>
          </div>
        </div>
        <div>
            <div className={`flex justify-center mt-6`}>
              <div className='flex sm:flex-row flex-col gap-3 border border-solid sm:px-6 px-4 sm:py-2 py-3 rounded-2xl'>
                <svg className='sm:w-[120px] w-[80px] sm:h-[120px] h-[80px]' viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="60" cy="60" r="50" fill={lightColor === 'red'? '#fb2c36' : '#808080'} />
                  <circle cx="60" cy="60" r="45" fill={lightColor === 'red'? '#fb2c36' : '#808080'} />
                </svg>

                <svg className='sm:w-[120px] w-[80px] sm:h-[120px] h-[80px]' viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="60" cy="60" r="50" fill={lightColor === 'yellow'? '#F0B100' : '#808080'} />
                  <circle cx="60" cy="60" r="45" fill={lightColor === 'yellow'? '#F0B100' : '#808080'} />
                </svg>

                <svg className='sm:w-[120px] w-[80px] sm:h-[120px] h-[80px]' viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="60" cy="60" r="50" fill={lightColor === 'green'? '#00A63E' : '#808080'} />
                  <circle cx="60" cy="60" r="45" fill={lightColor === 'green'? '#00A63E' : '#808080'} />
                </svg>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default TraficLight
