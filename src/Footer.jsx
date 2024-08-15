


import React from 'react'
import { FaFacebookSquare } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa6"
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaYoutube } from "react-icons/fa"

function Footer() {
  return (
        <>
                <div className='bg-black h-[50vh] grid '>
                      <div className=' flex flex-row m-[50px] ml-[100px] mr-[100px] gap-[20px] border-b-2'>

                          <div className=' flex flex-col w-[20%] justify-center gap-[10px]'>

                                <div className=''>
                                  <h1 className='text-[25px] text-white font-bold'>E-tutor</h1>
                                </div>
                                <div className=''>
                                  <p className='text-[12px] text-white'>Lorem ipsum, dolor sit amet <br />
                                   consectetur adipisicing elit.</p>
                                </div>
                                <div className=' flex gap-[10px]'>
                                <FaFacebookSquare className='text-[20px] text-white' />
                                <FaInstagram className='text-[20px] text-white' />
                                <FaLinkedin className='text-[20px] text-white' />
                                <FaSquareXTwitter className='text-[20px] text-white' />
                                <FaYoutube className='text-[20px] text-white' />
                                </div>

                          </div>
                          <div className=' flex flex-col w-[20%] justify-center gap-[15px] '>

                                    <div>
                                     <h1 className='text-[20px] text-white font-bold' >TOP 4 CATEGORIES</h1>
                                    </div>
                                    <ul className='list-none text-white text-[12px] '>
                                      <li>Development</li>
                                      <li>Finance & Accounting</li>
                                      <li>Design</li>
                                      <li>Business</li>
                                    </ul>

                          </div>
                          <div className=' flex flex-col w-[20%] justify-center gap-[15px]'>

                          <div>
                                          <h1 className='text-[20px] text-white font-bold' >QUICK LINKS</h1>
                                         </div>
                                          <ul className='list-none text-white text-[12px] '>
                                            <li>About</li>
                                            <li>Become an Instructor</li>
                                            <li>Contact</li>
                                            <li>Career</li>
                                          </ul>


                                </div>
                          <div className=' flex flex-col w-[20%] justify-center gap-[15px]'>


                                        <div>
                                          <h1 className='text-[20px] text-white font-bold' >SUPPORT</h1>
                                         </div>
                                          <ul className='list-none text-white text-[12px] '>
                                            <li>Help center</li>
                                            <li>FAQ</li>
                                            <li>Terms & Condition</li>
                                            <li>Privacy</li>
                                          </ul>

                          </div>
                          <div className=' flex flex-col w-[20%] justify-center gap-[15px]'>

                                        <div>
                                          <h1 className='text-[20px] text-white font-bold' >DOWNLOAD OUR APP</h1>
                                         </div>
                                          <div>
                                            <p  className='text-white text-[20px]'>App store</p>
                                          </div>
                                          <div>
                                            <p className='text-white text-[20px]'>Play store</p>
                                          </div>

                          </div>

                      </div>


                </div>
        
        </>
  )
}

export default Footer