import React from 'react'
import Marquee from 'react-fast-marquee'
import {LuMusic4} from 'react-icons/lu'
import {BsDisc} from 'react-icons/bs'

type Props = {
  textColor:string;
  textOne:string;
  textTwo:String
}

const index = (props: Props) => {
  return (
    <Marquee autoFill={true} className={`${props.textColor}`} >
    <div className='flex justify-evenly items-center w-96 '>
        <div className='text-3xl'>
          <BsDisc/>
        </div>
        <h2 className=' font-semibold text-[2rem] italic '> {props.textOne}</h2>
    </div>
      <div className='flex justify-evenly items-center w-96 '>
        <div className='text-3xl mr-4'>
          <LuMusic4/>
        </div>
        <h2 className=' font-semibold text-[2rem] italic '>{props.textTwo}</h2>
      
      </div>
    </Marquee>
    
  )
}

export default index