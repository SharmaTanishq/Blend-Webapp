import React from 'react'
import { HeroCard, Intro } from '../../components';
import {
  carousel,
  carouselOne,
  carouselTwo,
  carousel_two
} from '../../../public/carousel'
import Marquee from 'react-fast-marquee'
import styles from './index.module.css'

type Props = {}

const index = (props: Props) => {
  
  return (
    <div className='bg-background 
    min-h-screen 
    flex 
    flex-col
    justify-center 
    items-center pt-[12vh] md:mt-9 pb-5'>
      <div className='infoHolder max-w-7xl mb-7'>
        <Intro />        
      </div>     
      <div className='flex mt-8 h-full w-full' >
       
        <Marquee 
        speed={5}
        gradient={true}
        gradientColor={[0, 0, 1]}
        gradientWidth={50}
        className='pt-2 max-w-full overflow-hidden'>
          
            {carousel.map((item,index) =>
              <HeroCard {...item} key={index}  />
            )}
             {carouselOne.map((item,index) =>
              <HeroCard {...item} key={index} />
            )}
        </Marquee>
      
      </div>
      <div className='flex h-full w-full' >
        
        <Marquee
        speed={5}
        direction='right'
        gradient={true}
        gradientColor={[0, 0, 1]}
        gradientWidth={50}
         className='pt-2 mt-4 max-w-full overflow-hidden'>
            {carouselTwo.map((item,index) =>
            <HeroCard {...item} key={index} />
            )}
            {carousel_two.map((item,index) =>
            <HeroCard {...item} key={index} />
            )}
        </Marquee>
      
      </div>

        
    </div>
  )
}

export default index