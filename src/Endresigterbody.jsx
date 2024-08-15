 

 import React from 'react'
 
 
 function Endresigterbody() {
   return (
     <>
            <div className='bg-black h-[70vh] flex flex-row '>
                <div className=' m-[100px] w-[50%] flex flex-col justify-center gap-[10px]'>
                        <div className=' flex h-[70px]'>
                            <h2 className='font-bold text-[20px] text-white'>Start teaching with us <br />
                             and inspire others</h2>
                        </div>
                        <div className=''>
                            <p className='text-[12px] text-white'>
                                Become an instructor & start teaching with 26k certified instructors. Create a success <br />
                                 story with 67.1k students - Grow yourself with 71 countries.
                            </p>
                        </div>
                        <div className=''>
                                <button className='bg-orange-500 flex h-[40px] w-[100px] justify-center items-center text-white'>Resigter Now</button>
                        </div>
                </div>
                <div className=' flex flex-row w-[70%] mr-[50px] gap-[20px] justify-center items-center'>
                    <div className='bg-[url(./assets/ladd.jpg)] bg-left w-[35%] h-[300px] mt-[50px] '></div>
                    <div className='bg-[url(./assets/ladd.jpg)]  bg-right  w-[55%] h-[350px]'></div>
                </div>
            </div>
     
     </>
   )
 }
 
 export default Endresigterbody