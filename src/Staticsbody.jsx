

import React from 'react'
import { IoPeople } from "react-icons/io5"
import { FaBook } from "react-icons/fa"
import { GiWorld } from "react-icons/gi"
import { MdOutlineVerified } from "react-icons/md"
import { BsDatabaseFill } from "react-icons/bs"

function Staticsbody() {
  return (
   <>
              <div className='bg-orange-300 grid  h-[20vh]'>
                  <div className='grid grid-cols-5 m-[50px] ml-[150px] mr-[100px] gap-10 font-sans '>

                    <div className=' flex flex-col h-[55px] w-[150px] justify-center'>
                      <h3 className='font-bold text-[25px] flex gap-[10px]'><IoPeople className='flex mt-[10px] text-orange-500 text-[25px]' />67.1k</h3>
                      <h5 className='text-[10px] flex ml-[35px]'>Students</h5>
                    </div>
                    <div className=' flex flex-col h-[55px] w-[150px] justify-center'>
                        <h3 className='font-bold text-[25px] flex gap-[10px]'><FaBook className='flex mt-[10px] text-blue-700 text-[25px]'/>26k</h3>
                        <h5 className='text-[10px] flex ml-[35px]'>Certified Instructor</h5>
                    </div>
                    <div className=' flex flex-col h-[55px] w-[150px] justify-center'>
                          <h3 className='font-bold text-[25px] flex gap-[10px]'><GiWorld className='flex mt-[10px] text-green-600 text-[25px]' />72</h3>
                          <h5 className='text-[10px] flex ml-[35px]'>Country Langugaes</h5>
                    </div>
                    <div className=' flex flex-col h-[55px] w-[150px] justify-center'>
                          <h3 className='font-bold text-[25px] flex gap-[10px]'><MdOutlineVerified className='flex mt-[10px] text-green-600 text-[25px]' />
                          99.9%</h3>
                          <h5 className='text-[10px] flex ml-[35px]'>Success Rate</h5>
                    </div>
                    <div className=' flex flex-col h-[55px] w-[150px] justify-center'>
                          <h3 className='font-bold text-[25px] flex gap-[10px]'><BsDatabaseFill className='flex mt-[10px] text-orange-500 text-[25px]' />57</h3>
                          <h5 className='text-[10px] flex ml-[35px]'>Trusted companies</h5>
                    </div>
                  </div>
                </div>
   </>
  )
}

export default Staticsbody