import React from 'react'
import Image from 'next/image'
import ImageTwo from '../../../public/SampleTwo.png'
import styles from './index.module.css'
import { Button } from '@/components'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
type Props = {}

 function Slider(){
  return (
    <OwlCarousel>
      <div className={`${styles.msContent} text-left px-6 pt-8 lg:px-0 lg:pt-0`}>
          <h1 className='text-[2.5rem] lg:text-[3.5rem]  leading-tight	font-bold	mb-4	'>Meet people with similar music tastes</h1>
          <p className='text-xl	font-normal leading-snug'>Finding your new boo or bestie is hard. Especially when 
              Never miss a show. Browse recommended concerts, music festivals, and parties based on what you like, discover who else wants to go, and get tickets!
          </p>
          <Button text='Join the club'/>
        </div>
        <div className={styles.msImage}>
          <Image src={ImageTwo} alt='Sample Image'></Image>
        </div>
        <div className={`${styles.msContent} text-left px-6 pt-8 lg:px-0 lg:pt-0`}>
          <h1 className='text-[2.5rem] lg:text-[3.5rem]  leading-tight	font-bold	mb-4	'>Meet people with similar music tastes</h1>
          <p className='text-xl	font-normal leading-snug'>Finding your new boo or bestie is hard. Especially when 
              Never miss a show. Browse recommended concerts, music festivals, and parties based on what you like, discover who else wants to go, and get tickets!
          </p>
          <Button text='Join the club'/>
        </div>
        <div className={styles.msImage}>
          <Image src={ImageTwo} alt='Sample Image'></Image>
        </div>
      <div>class1</div>
    </OwlCarousel>
  )
}

const index = (props: Props) => {
  return (
    <div className={styles.csContainer} >
      <div className={styles.justBlur}>
      <div className={styles.csWrapper}>
        
      <div className={`${styles.msContent} text-left px-6 pt-8 lg:px-0 lg:pt-0`}>
          <h1 className='text-[2.5rem] lg:text-[3.5rem]  leading-tight	font-bold	mb-4	'>Meet people with similar music tastes</h1>
          <p className='text-xl	font-normal leading-snug'>Finding your new boo or bestie is hard. Especially when 
              Never miss a show. Browse recommended concerts, music festivals, and parties based on what you like, discover who else wants to go, and get tickets!
          </p>
          <Button text='Join the club'/>
        </div>
        <div className={styles.msImage}>
          <Image src={ImageTwo} alt='Sample Image'></Image>
        </div>
       
      </div>
      </div>
      
    </div>
  )
}

export default index