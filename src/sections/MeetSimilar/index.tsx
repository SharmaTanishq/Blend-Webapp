import React from 'react'
import Image from 'next/image'
import ImageTwo from '../../../public/Artist.png'
import styles from './meetsimilar.module.css'
import { Button } from '@/components'
type Props = {}

const index = (props: Props) => {
  return (
    <div className={`${styles.msContainer}  backdrop-blur-[100px] bg-[rgba(55, 55, 55)]/[0.6]	rounded-3xl `} >
      <div className={`${styles.msWrapper} `}>
        <div className={styles.msImage}>
          <Image src={ImageTwo} alt='Sample Image'></Image>
        </div>
        <div className={`${styles.msContent} text-center px-2.5	lg:px-0`}>
          <h1 className='text-[2.5rem] lg:text-[3.5rem]  leading-tight	font-bold	mb-4 text-left	'>Meet people with similar music tastes</h1>
          <p className='text-xl	font-normal leading-snug text-left'>Finding your new boo or bestie is hard. Especially when 
            <b>"bad" music taste</b>
            "is a"
            <a>
              <b>deal breaker</b>
            </a>
            . With Blend, we do the work for you. You play music; we find your match.
          </p>
          <Button text="Let's Play"/>
        </div>
      </div>
    </div>
  )
}

export default index