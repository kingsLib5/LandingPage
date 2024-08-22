import React from 'react'
import laddImage from './assets/ladd.jpg'

function Endresigterbody() {
  return (
    <>
      <div className='bg-black max-h-[100vh] overflow-auto flex flex-col lg:flex-row'>
        
        {/* Text Section */}
        <div className='m-[50px] lg:m-[100px] w-full lg:w-[50%] flex flex-col justify-center gap-[10px]'>
          <div className='flex h-[70px]'>
            <h2 className='font-bold text-[20px] text-white'>
              Start teaching with us <br />
              and inspire others
            </h2>
          </div>
          <div>
            <p className='text-[12px] text-white'>
              Become an instructor & start teaching with 26k certified instructors. 
              Create a success story with 67.1k students - Grow yourself with 71 countries.
            </p>
          </div>
          <div>
            <button className='bg-orange-500 h-[40px] w-[100px] flex justify-center items-center text-white'>
              Register Now
            </button>
          </div>
        </div>
        
        {/* Image Section */}
        <div className='flex w-full lg:w-[50%] gap-[20px] justify-center items-center'>
          {/* Left half of the image */}
          <div
            className='w-[35%] h-[300px] lg:mt-[50px]'
            style={{
              backgroundImage: `url(${laddImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'left center',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>

          {/* Right half of the image */}
          <div
            className='w-[55%] h-[350px]'
            style={{
              backgroundImage: `url(${laddImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'right center',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
        </div>
        
      </div>
    </>
  )
}

export default Endresigterbody
