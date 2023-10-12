import React from 'react'
import Image from 'next/image'
import ImageTwo from '../../../public/sampleTwo.png'
import styles from './index.module.css'
import { Button } from '@/components'

import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,

});
type Props = {}

const responsive = {
  0:{
      items:1,
      nav:true
  },
  600:{
      items:1,
      nav:false
  },
  1200:{
      items:1,
      
    
  }
}

const index = (props: Props) => {
  return (
    <div className={styles.csContainer}  >
      <div className={styles.justBlur}>
      
      
       <OwlCarousel 
       responsive={responsive}
      loop
       autoPlay
       autoplaySpeed={1}
       className='p-0 m-0'
       dotClass= 'owl-dot'
       dotsClass= 'owl-dots'
       
       >
        <div className='flex h-[55vh] w-full justify-center items-center '>
          <div className={`${styles.msContent}   text-left px-6 pt-10 lg:px-0 lg:pt-0`}>
              <h1 className='text-[2.5rem] lg:text-[3.5rem]  leading-tight	font-bold	mb-4	'>Match based on
music you stream</h1>
              <p className='text-xl	font-normal leading-snug'>Stream music from Spotify and Apple Music and we find your perfect match for you. Find friends and community through music.


              </p>
              <Button text='Join the club'/>
            </div>
            <div className={styles.msImage}>
              <Image className={styles.msImage_img} src={ImageTwo} alt='Sample Image'></Image>
            </div>
        </div>
        <div className='flex h-[55vh] justify-center items-center '>
          <div className={`${styles.msContent}   text-left px-6 pt-10 lg:px-0 lg:pt-0`}>
              <h1 className='text-[2.5rem] lg:text-[3.5rem]  leading-tight	font-bold	mb-4	'>Break the ice <br/>
with music</h1>
              <p className='text-xl	font-normal leading-snug'>Show off your personality by highlighting your favorite songs, artists, and albums and watch the DMs roll in.
              </p>
              <Button text='Join the club'/>
            </div>
            <div className={styles.msImage}>
              <Image className={styles.msImage_img} src={ImageTwo} alt='Sample Image'></Image>
            </div>
        </div>
        <div className='flex h-[55vh] justify-center items-center '>
          <div className={`${styles.msContent}   text-left px-6 pt-10 lg:px-0 lg:pt-0`}>
              <h1 className='text-[2.5rem] lg:text-[3.5rem]  leading-tight	font-bold	mb-4	'>Discover music from
people not algorithms</h1>
              <p className='text-xl	font-normal leading-snug'>Music spreads through word of mouth not technology. Find out what people are listening to.
              </p>
              <Button text='Join the club'/>
            </div>
            <div className={styles.msImage}>
              <Image className={styles.msImage_img} src={ImageTwo} alt='Sample Image'></Image>
            </div>
        </div>
        
        <div className='flex h-[55vh] justify-center items-center '>
          <div className={`${styles.msContent}   text-left px-6 pt-10 lg:px-0 lg:pt-0`}>
              <h1 className='text-[2.5rem] lg:text-[3.5rem]  leading-tight	font-bold	mb-4	'>Bond over your <br/>
favorite tunes</h1>
              <p className='text-xl	font-normal leading-snug'>Share album releases, up-and-coming artists, and throwback jams to get to know each other. When it feels right, invite them to a show.


              </p>
              <Button text='Join the club'/>
            </div>
            <div className={styles.msImage}>
              <Image className={styles.msImage_img} src={ImageTwo} alt='Sample Image'></Image>
            </div>
        </div>
       
       
    </OwlCarousel>
    </div>
    </div>
  )
}

export default index