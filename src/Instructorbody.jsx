 import React from 'react'
 import { MdOutlineIntegrationInstructions } from "react-icons/md"
 import { FaRegIdCard } from "react-icons/fa"
 import { FaPlayCircle } from "react-icons/fa"
 import { FaHandshakeSimple } from "react-icons/fa6"
 
 function Instructorbody() {
   return (
    <>
        <div className='bg-white flex flex-col h-[50vh] justify-center items-center'>

            <div className=' flex h-[40px] w-[40%] justify-center items-center'>
                <h2 className='text-[20px] font-bold '>How you'll become successful instructor </h2>
            </div>
            <div className='  flex flex-row h-[200px] w-[90%]'>
                    <div className='bg-slate-100 flex flex-col justify-center items-center m-[25px] w-[25%]'>

                        <div className='bg-gray-200 flex h-[45px] w-[50px] mb-[10px] items-center justify-center'><MdOutlineIntegrationInstructions className='text-blue-500 text-[20px]' /></div>
                        <div className=''>
                            <h3 className='text-[15px] font-bold'>
                                1. Apply to become instructor.
                            </h3>
                        </div>
                        <div className=' h-[45px] flex justify-center items-center'>
                            <p className='text-[10px]'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing <br />
                                <p className='text-[10px] flex justify-center'> elit. Ullam, temporibus!</p>
                            </p>
                        </div>

                    </div>
                <div className='bg-slate-100 flex flex-col justify-center items-center m-[25px] w-[25%]'>

                        <div className='bg-gray-200 flex h-[45px] w-[50px] mb-[10px] items-center justify-center'><FaRegIdCard className='text-[20px] text-orange-500' /></div>
                        <div className=''>
                                    <h3 className='text-[15px] font-bold'>
                                        2. Setup & edit your profile.
                                    </h3>
                                </div>
                                <div className=' h-[45px] flex justify-center items-center'>
                                    <p className='text-[10px]'>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing <br />
                                        <p className='text-[10px] flex justify-center'> elit. Ullam, temporibus!</p>
                                    </p>
                                </div>
                </div>
                <div className='bg-slate-100 flex flex-col justify-center items-center m-[25px] w-[25%]'>

                        <div className='bg-gray-200 flex h-[45px] w-[50px] mb-[10px] items-center justify-center'><FaPlayCircle className='text-orange-500 text-[20px]' /></div>
                        <div className=''>
                                    <h3 className='text-[15px] font-bold'>
                                        3. Create your new course.
                                    </h3>
                                </div>
                                <div className=' h-[45px] flex justify-center items-center'>
                                    <p className='text-[10px]'>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing <br />
                                        <p className='text-[10px] flex justify-center'> elit. Ullam, temporibus!</p>
                                    </p>
                                </div>

                </div>
                <div className='bg-slate-100 flex flex-col justify-center items-center m-[25px] w-[25%]'>

                        <div className='bg-gray-200 flex h-[45px] w-[50px] mb-[10px] items-center justify-center'><FaHandshakeSimple className='text-green-500 text-[20px]' /></div>
                        <div className=''>
                                    <h3 className='text-[15px] font-bold'>
                                        4. Start teaching & earning.
                                    </h3>
                                </div>
                                <div className=' h-[45px] flex justify-center items-center'>
                                    <p className='text-[10px]'>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing <br />
                                        <p className='text-[10px] flex justify-center'> elit. Ullam, temporibus!</p>
                                    </p>
                                </div>

                </div>
            </div>
        </div>
    
    </>
   )
 }
 
 export default Instructorbody