import React from 'react'
import { FaHeart } from "react-icons/fa"
import { FaShoppingCart } from "react-icons/fa"
import { FaMagnifyingGlass } from "react-icons/fa6"

function Front() {
  return (

    <>
              <div className='flex bg-black h-[30px]  justify-start items-center'>
                <ul className='flex gap-10 p-6  text-white  '>
                  <li>Home</li>
                  <li>Course</li>
                  <li>About</li>
                  <li>Contact</li>
                  <li>Become an Instructor</li>
                </ul>
              </div>
              <div className='grid grid-cols-2 gap-10 pl-24 min-h-[70px] bg-gray-200'>
                <div className='flex flex-row gap-4  justify-start items-center '>
                <div className=' text-black  font-bold'>E-TUTOR</div>
                  <div className=''> 
                    <select className='bg-slate-300 text-black w-[100px] h-[30px]'>
                      <option value="" className='justify-center items-center'>Browse</option>
                      <option value="">copy</option>
                      <option value="">last</option>
                    </select>
                  </div>
                  <div className='flex gap-[10px]'>
                  <FaMagnifyingGlass className='mt-[8px]' />
                    <input type="search"  placeholder=' What do you want to learn' className='w-[250px] h-[30px] bg-slate-300' />
                  </div>
                </div>
                  <div className='grid grid-cols-3 pl-24  justify-end items-center gap-3 '>
                            <div className=' flex h-[40px] w-[100px] justify-center items-center gap-[20px] ml-[60px]'>
                            <FaHeart className='text-black text-[20px]' />
                            <FaShoppingCart className='text-black text-[20px]' />
                            </div>
                            <div className='bg-gray-400 flex  h-[40px] w-[150px] cursor-pointer justify-center items-center '>
                              <h1 className='text-orange-500 '>Create Account</h1>
                            </div>
                            <div className='bg-orange-500 flex h-[40px] w-[100px] justify-center items-center'>
                              <button type="button" className='text-white'>Sign in</button>
                            </div>
                  </div>
              </div>
          
        
    </>
    
  )
}

export default Front