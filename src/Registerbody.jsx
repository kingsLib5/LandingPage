

import React from 'react'

function Registerbody() {
  return (
    <>
    <div className='bg-white grid grid-cols-2 h-[75vh]'>
                <div className=' flex flex-col gap-[10px] justify-center items-center m-[120px]'>
                  <div className=' flex font-bold min-w-[400px] h-[30px] ml-4 justify-start items-center '>
                    <h4 className='text-xl'>Become an Instructor</h4>
                  </div>
                  <div className=' flex min-w-[250px] h-[90px] justify-start items-center '>
                    <h6 className='text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
                     Fugit in magni sint corporis consequatur temporibus aperiam <br />
                    </h6>
                  </div>
                  <div className=' flex justify-start items-center min-w-[400px] ml-4' >
                    <button className='bg-orange-500 flex h-[40px] w-[100px] justify-center items-center text-white'>Get started</button>
                  </div>
                </div>
                <div className='bg-white grid '>
                    <div className='bg-[url(./assets/lad.jpg)] bg-cover bg-center bg-no-repeat border-none mr-[150px] mt-[30px]'></div>
                </div>
          </div>
    </>
  )
}

export default Registerbody