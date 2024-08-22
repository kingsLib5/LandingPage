import React from 'react'
import { MdOutlineIntegrationInstructions } from "react-icons/md"
import { FaRegIdCard, FaPlayCircle } from "react-icons/fa"
import { FaHandshakeSimple } from "react-icons/fa6"

function Instructorbody() {
  return (
    <>
      <div className='bg-white flex flex-col justify-center items-center py-8 sm:py-12 max-h-[100vh] overflow-auto'>
        
        {/* Title Section */}
        <div className='text-center mb-8'>
          <h2 className='text-[18px] sm:text-[20px] font-bold'>
            How you'll become a successful instructor
          </h2>
        </div>
        
        {/* Steps Section */}
        <div className='flex flex-wrap justify-center gap-6 sm:gap-8 w-full px-4'>
          
          {/* Step 1 */}
          <div className='bg-slate-100 flex flex-col justify-center items-center p-4 w-[80%] sm:w-[45%] lg:w-[22%] rounded-lg'>
            <div className='bg-gray-200 flex items-center justify-center h-[45px] w-[50px] mb-4 rounded-full'>
              <MdOutlineIntegrationInstructions className='text-blue-500 text-[20px]' />
            </div>
            <h3 className='text-[14px] sm:text-[15px] font-bold text-center'>
              1. Apply to become an instructor
            </h3>
            <p className='text-[10px] sm:text-[11px] text-center mt-2'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, temporibus!
            </p>
          </div>
          
          {/* Step 2 */}
          <div className='bg-slate-100 flex flex-col justify-center items-center p-4 w-[80%] sm:w-[45%] lg:w-[22%] rounded-lg'>
            <div className='bg-gray-200 flex items-center justify-center h-[45px] w-[50px] mb-4 rounded-full'>
              <FaRegIdCard className='text-orange-500 text-[20px]' />
            </div>
            <h3 className='text-[14px] sm:text-[15px] font-bold text-center'>
              2. Setup & edit your profile
            </h3>
            <p className='text-[10px] sm:text-[11px] text-center mt-2'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, temporibus!
            </p>
          </div>
          
          {/* Step 3 */}
          <div className='bg-slate-100 flex flex-col justify-center items-center p-4 w-[80%] sm:w-[45%] lg:w-[22%] rounded-lg'>
            <div className='bg-gray-200 flex items-center justify-center h-[45px] w-[50px] mb-4 rounded-full'>
              <FaPlayCircle className='text-orange-500 text-[20px]' />
            </div>
            <h3 className='text-[14px] sm:text-[15px] font-bold text-center'>
              3. Create your new course
            </h3>
            <p className='text-[10px] sm:text-[11px] text-center mt-2'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, temporibus!
            </p>
          </div>
          
          {/* Step 4 */}
          <div className='bg-slate-100 flex flex-col justify-center items-center p-4 w-[80%] sm:w-[45%] lg:w-[22%] rounded-lg'>
            <div className='bg-gray-200 flex items-center justify-center h-[45px] w-[50px] mb-4 rounded-full'>
              <FaHandshakeSimple className='text-green-500 text-[20px]' />
            </div>
            <h3 className='text-[14px] sm:text-[15px] font-bold text-center'>
              4. Start teaching & earning
            </h3>
            <p className='text-[10px] sm:text-[11px] text-center mt-2'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, temporibus!
            </p>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Instructorbody
