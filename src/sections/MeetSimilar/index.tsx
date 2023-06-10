import React from 'react'
import Image from 'next/image'
import ImageTwo from '../../../public/sample.png'
import styles from './meetsimilar.module.css'
import { Button } from '@/components'
type Props = {}

const index = (props: Props) => {
  return (
    <div className={styles.msContainer} >
      <div className={styles.msWrapper}>
        <div className={styles.msImage}>
          <Image src={ImageTwo} alt='Sample Image'></Image>
        </div>
        <div className={styles.msContent}>
          <h1 className='text-[3.5rem] leading-tight	 font-bold	mb-4	'>Meet people with similar music tastes</h1>
          <p className='text-xl	font-normal leading-snug'>Finding your new boo or bestie is hard. Especially when 
            <b>"bad" music taste</b>
            "is a"
            <a>
              <b>deal breaker</b>
            </a>
            . With Beatmatch, we do the work for you. You play music; we find your match.
          </p>
          <Button text="Let's Play"/>
        </div>
      </div>
    </div>
  )
}

export default index