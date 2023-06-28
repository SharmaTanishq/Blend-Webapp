import React from 'react'
import { HeroCard, Intro } from '../../components';
import carousel from '../../../public/carousel.json'
import Marquee from 'react-fast-marquee'

type Props = {}

const index = (props: Props) => {
  
  return (
    <div className='bg-background 
    min-h-screen 
    flex 
    flex-col
    justify-center 
    items-center pt-[18vh] mt-[-75px] pb-5'>
      <div className='infoHolder max-w-7xl mb-7'>
        <Intro />        
      </div>     
      <div className='flex mt-8 h-full w-full' >
         {/* @ts-ignore */}
        <Marquee 
        speed={5}
        className='pt-2 max-w-full'>
            {carousel.map((item,index) =>
            <HeroCard {...item} key={index} />
            )}
        </Marquee>
      
      </div>
      <div className='flex h-full w-full' >
         {/* @ts-ignore */}
        <Marquee
        speed={5}
        direction='right'
         className='pt-2 mt-4 max-w-full'>
            {carousel.map((item,index) =>
            <HeroCard {...item} key={index} />
            )}
        </Marquee>
      
      </div>

        
    </div>
  )
}

export default index