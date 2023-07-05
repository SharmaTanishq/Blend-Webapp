import React from 'react'
import Marquee from 'react-fast-marquee'
import {LuMusic4} from 'react-icons/lu'
import {BsDisc} from 'react-icons/bs'

type Props = {}

const index = (props: Props) => {
  return (
    <Marquee autoFill={true} >
    <div className='flex justify-evenly items-center w-96 text-white'>
        <div className='text-3xl'>
          <BsDisc/>
        </div>
        <h2 className=' font-semibold text-[2rem] italic text-white'> Music lovers only</h2>

        </div>
      <div className='flex justify-evenly items-center w-96 text-white'>
        <div className='text-3xl mr-4'>
          <LuMusic4/>
        </div>
        <h2 className=' font-semibold text-[2rem] italic text-white'> Music lovers only</h2>
      
      </div>
    </Marquee>
    
  )
}

export default index