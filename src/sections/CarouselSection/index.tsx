import React from 'react'
import Image from 'next/image'
import ImageTwo from '../../../public/sample.png'
import styles from './index.module.css'
import { Button } from '@/components'

type Props = {}

const index = (props: Props) => {
  return (
    <div className={styles.csContainer} >
      <div className={styles.justBlur}>
      <div className={styles.csWrapper}>
        
       
        <div className={styles.msContent}>
          <h1 className='text-[3.5rem] leading-tight font-bold	mb-4	'>Meet people with similar music tastes</h1>
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