import React from 'react'
import { MdOutlineGppGood } from "react-icons/md"

function Reasonbody() {
  return (
    <>
      <div className='bg-white grid max-h-[100vh] overflow-auto px-4 sm:px-8 lg:px-16 py-8'>
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-12'>
          
          {/* Image Section */}
          <div className='bg-[url(./assets/des2.jpg)] bg-center bg-cover bg-no-repeat h-[200px] sm:h-[300px] lg:h-auto lg:w-[40%]'>
          </div>
          
          {/* Text Content */}
          <div className='flex flex-col justify-center lg:w-[60%]'>
            
            {/* Title */}
            <div className='mb-4'>
              <h3 className='font-bold text-[20px] sm:text-[23px]'>
                Why you should start teaching on E-tutor
              </h3>
            </div>
            
            {/* Description */}
            <div className='mb-4'>
              <p className='text-[12px] sm:text-[13px] leading-relaxed'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi mollitia 
                architecto explicabo eius omnis quibusdam eveniet non et dolores minima!
                Lorem ipsum dolor sit amet.
              </p>
            </div>
            
            {/* Reasons List */}
            <div className='flex flex-col gap-4'>
              
              <div className='flex flex-col'>
                <p className='text-[12px] sm:text-[13px] flex items-center'>
                  <MdOutlineGppGood className='text-[18px] sm:text-[20px] mr-2' /> 
                  Teach your students as you want
                </p>
                <p className='text-[10px] sm:text-[11px] ml-6'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, hic? 
                  Numquam non Lorem ipsum, dolor sit amet consectetur adipisicing.
                </p>
              </div>
              
              <div className='flex flex-col'>
                <p className='text-[12px] sm:text-[13px] flex items-center'>
                  <MdOutlineGppGood className='text-[18px] sm:text-[20px] mr-2' /> 
                  Flexibility in teaching
                </p>
                <p className='text-[10px] sm:text-[11px] ml-6'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, hic? 
                  Numquam non Lorem ipsum, dolor sit amet consectetur adipisicing.
                </p>
              </div>
              
              <div className='flex flex-col'>
                <p className='text-[12px] sm:text-[13px] flex items-center'>
                  <MdOutlineGppGood className='text-[18px] sm:text-[20px] mr-2' /> 
                  High student engagement
                </p>
                <p className='text-[10px] sm:text-[11px] ml-6'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, hic? 
                  Numquam non Lorem ipsum, dolor sit amet consectetur adipisicing.
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Reasonbody
