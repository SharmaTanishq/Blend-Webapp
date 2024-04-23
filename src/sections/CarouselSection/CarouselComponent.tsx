import React from 'react'
import styles from './index.module.css'
import { Button } from '@/components'
import Image from 'next/image'

type Props = {
  images:any;
  heading:string;
  para:string;
}

const CarouselComponent = (props: Props) => {
  return (
    <div className='flex h-[75vh] w-full justify-center items-center '>
    <div className={`${styles.msContent}   text-left px-6 pt-10 lg:px-0 lg:pt-0`}>
        <h1 className='text-[2.5rem] lg:text-[3.5rem]  leading-tight	font-bold	mb-4	'>{props.heading}</h1>
        <p className='text-xl	font-normal leading-snug'>{props.para}
        </p>
        <Button text='Join the club'/>
      </div>
      <div className={styles.msImage}>
        <Image className={styles.msImage_img} src={props.images} alt='Sample Image'></Image>
      </div>
  </div>
  )
}

export default CarouselComponent