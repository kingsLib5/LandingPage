import React from 'react'
import { IoPeople } from "react-icons/io5"
import { FaBook } from "react-icons/fa"
import { GiWorld } from "react-icons/gi"
import { MdOutlineVerified } from "react-icons/md"
import { BsDatabaseFill } from "react-icons/bs"

function Staticsbody() {
  return (
    <>
      <div className="bg-orange-300 grid h-[20vh]">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-4 lg:gap-6 mx-2 sm:mx-4 lg:mx-8 font-sans items-center h-full">
          {/* Students */}
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-[18px] sm:text-[20px] lg:text-[22px] flex gap-1 sm:gap-2 items-center">
              <IoPeople className="text-orange-500 text-[18px] sm:text-[20px] lg:text-[22px]" />
              67.1k
            </h3>
            <h5 className="text-[8px] sm:text-[10px] lg:text-[12px]">Students</h5>
          </div>
          
          {/* Certified Instructor */}
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-[18px] sm:text-[20px] lg:text-[22px] flex gap-1 sm:gap-2 items-center">
              <FaBook className="text-blue-700 text-[18px] sm:text-[20px] lg:text-[22px]" />
              26k
            </h3>
            <h5 className="text-[8px] sm:text-[10px] lg:text-[12px]">Certified Instructors</h5>
          </div>
          
          {/* Country Languages */}
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-[18px] sm:text-[20px] lg:text-[22px] flex gap-1 sm:gap-2 items-center">
              <GiWorld className="text-green-600 text-[18px] sm:text-[20px] lg:text-[22px]" />
              72
            </h3>
            <h5 className="text-[8px] sm:text-[10px] lg:text-[12px]">Country Languages</h5>
          </div>
          
          {/* Success Rate */}
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-[18px] sm:text-[20px] lg:text-[22px] flex gap-1 sm:gap-2 items-center">
              <MdOutlineVerified className="text-green-600 text-[18px] sm:text-[20px] lg:text-[22px]" />
              99.9%
            </h3>
            <h5 className="text-[8px] sm:text-[10px] lg:text-[12px]">Success Rate</h5>
          </div>
          
          {/* Trusted Companies */}
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-[18px] sm:text-[20px] lg:text-[22px] flex gap-1 sm:gap-2 items-center">
              <BsDatabaseFill className="text-orange-500 text-[18px] sm:text-[20px] lg:text-[22px]" />
              57
            </h3>
            <h5 className="text-[8px] sm:text-[10px] lg:text-[12px]">Trusted Companies</h5>
          </div>
        </div>
      </div>
    </>
  )
}

export default Staticsbody
