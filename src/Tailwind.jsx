import React from 'react'
import Tail from './Tail'

function Tailwind() {
  return (


    <>

    <div className='h-32 bg-orange-600 w-[400px]' > Welcome to Tailweind <Tail/></div>
    <h1 className='font-bold text=[2rem] font-mono'> Hello</h1>
        <main className="h-[300px] grid grid-cols-2 gap=2">
            <div className='bg-blue-600'></div>
            <div className='bg-red-700'></div>
        </main>
        <Tail/>
    </>

  )
}

export default Tailwind