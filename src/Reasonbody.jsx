

import React from 'react'
import { MdOutlineGppGood } from "react-icons/md"

function Reasonbody() {
  return (
   <>
         <div className='bg-white grid h-[70vh]'>

            <div className=' flex flex-row gap-[30px]'>
                <div className='bg-[url(./assets/des2.jpg)] bg-center bg-cover  bg-no-repeatflex mt-[45px] ml-[100px] w-[40%]'></div>

                <div className=' flex flex-col  justify-center w-[60%]'>

                        <div className=' flex h-[50px] items-center'>
                            <h3 className='font-bold text-[23px]' >Why you should start teaching on E-tutor</h3>
                        </div>
                        <div className=''>
                            <p className='text-[13px]'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi mollitia <br />
                                 architecto  explicabo eius omnis quibusdam eveniet non et dolores minima! <br />
                                  Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                        <div className=' mt-[10px] flex flex-col'>
                            <div className='flex flex-col'>
                        
                            <p className='text-[13px] font-sans flex'>
                            <MdOutlineGppGood  className='bg-white text-[20px]'/>Tech your students as you want </p>
                                <p className='text-[10px] m-[6px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, hic? Numquam non Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                            </div>
                            <div className='flex flex-col'>
                            <p className='text-[13px] font-sans flex'>
                            <MdOutlineGppGood  className='bg-white text-[20px]'/>Tech your students as you want </p>
                                <p className='text-[10px] m-[6px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, hic? Numquam non Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                            </div>
                            <div className='flex flex-col'>
                            <p className='text-[13px] font-sans flex'>
                            <MdOutlineGppGood  className='bg-white text-[20px]'/>Tech your students as you want </p>
                                <p className='text-[10px] m-[6px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, hic? Numquam non Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                            </div>
                        </div>

                </div>
            </div>

         </div>
   </>
  )
}

export default Reasonbody