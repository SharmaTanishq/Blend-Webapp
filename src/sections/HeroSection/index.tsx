import React from 'react'
import { HeroCard, Intro } from '../../components';
import carousel from '../../../public/carousel.json'

type Props = {}

const index = (props: Props) => {
  const carouselOne = carousel;
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
      <div className='flex p-8 h-full' >
         {/* @ts-ignore */}
        {carousel.map((item,index) =>
          <HeroCard {...item} key={index} />
          )}
      
      </div>

        
    </div>
  )
}

export default index