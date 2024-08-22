import React from 'react'
import { FaFacebookSquare } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa6"
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaYoutube } from "react-icons/fa"

function Footer() {
  return (
    <>
      <div className='bg-black max-h-[100vh] h-[50vh] overflow-auto grid'>
        
        {/* Footer Content */}
        <div className='flex flex-col lg:flex-row m-4 lg:m-[50px] gap-[20px] border-b-2 pb-4 lg:pb-8'>

          {/* Logo and Social Media Section */}
          <div className='flex flex-col w-full lg:w-[20%] justify-center gap-[10px]'>
            <div>
              <h1 className='text-[25px] text-white font-bold'>E-tutor</h1>
            </div>
            <div>
              <p className='text-[12px] text-white'>
                Lorem ipsum, dolor sit amet <br />
                consectetur adipisicing elit.
              </p>
            </div>
            <div className='flex gap-[10px]'>
              <FaFacebookSquare className='text-[20px] text-white' />
              <FaInstagram className='text-[20px] text-white' />
              <FaLinkedin className='text-[20px] text-white' />
              <FaSquareXTwitter className='text-[20px] text-white' />
              <FaYoutube className='text-[20px] text-white' />
            </div>
          </div>

          {/* Top 4 Categories Section */}
          <div className='flex flex-col w-full lg:w-[20%] justify-center gap-[15px]'>
            <div>
              <h1 className='text-[20px] text-white font-bold'>TOP 4 CATEGORIES</h1>
            </div>
            <ul className='list-none text-white text-[12px]'>
              <li>Development</li>
              <li>Finance & Accounting</li>
              <li>Design</li>
              <li>Business</li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className='flex flex-col w-full lg:w-[20%] justify-center gap-[15px]'>
            <div>
              <h1 className='text-[20px] text-white font-bold'>QUICK LINKS</h1>
            </div>
            <ul className='list-none text-white text-[12px]'>
              <li>About</li>
              <li>Become an Instructor</li>
              <li>Contact</li>
              <li>Career</li>
            </ul>
          </div>

          {/* Support Section */}
          <div className='flex flex-col w-full lg:w-[20%] justify-center gap-[15px]'>
            <div>
              <h1 className='text-[20px] text-white font-bold'>SUPPORT</h1>
            </div>
            <ul className='list-none text-white text-[12px]'>
              <li>Help center</li>
              <li>FAQ</li>
              <li>Terms & Condition</li>
              <li>Privacy</li>
            </ul>
          </div>

          {/* Download App Section */}
          <div className='flex flex-col w-full lg:w-[20%] justify-center gap-[15px]'>
            <div>
              <h1 className='text-[20px] text-white font-bold'>DOWNLOAD OUR APP</h1>
            </div>
            <div>
              <p className='text-white text-[14px]'>App store</p>
            </div>
            <div>
              <p className='text-white text-[14px]'>Play store</p>
            </div>
          </div>
          
        </div>
        
      </div>
    </>
  )
}

export default Footer
