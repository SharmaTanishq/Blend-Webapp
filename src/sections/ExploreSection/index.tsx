import React from 'react'
import TypeIt from 'typeit-react';
import styles from './Explore.module.css'
import { ButtonSecondary } from '@/components';
type Props = {}

const index = (props: Props) => {
  return (
    <div className='min-h-section-height flex flex-col justify-center items-center'>
      <div className='text-white text-center mb-4  '>
        <h1 className='text-[3.5rem] font-semibold'>
          Hate saying
          <i> "we met on an app" ?</i>
        </h1>
        <h4 >Meet IRL at curated concerts, parties and music festival </h4>
      </div>
      <div className='flex flex-col justify-center items-center mb-5 relative h-[600px] max-w-7xl w-full ml-auto mr-auto'>
        <img className='rounded-3xl object-cover h-[600px] mb-4' src='https://www.beatmatch.app/static/media/events-party.cd1193dc2322b22e8b46.gif' width={'100%'}  ></img>
        <div className='absolute text-white text-left flex flex-col justify-center left-[-5rem] top-[10px] h-full'>
          <h1 className='text-8xl font-semibold'>Explore</h1>
          <h1 className='text-8xl font-semibold'>events</h1>
          <h1 className={`${styles.exploreStrokeText} text-8xl font-semibold`}>
          <TypeIt
              options={{
                loop:true
              }}
               getBeforeInit={(instance) => {
                instance
                  .type("online")
                  .pause(750)
                  .delete(8)
                  .pause(500)
                  .type("offline")
        
                // Remember to return it!
                return instance;
              }}
            />
          </h1>
        </div>
      </div>
      <div className='text-white text-center mb5 text-xl'>
        <h4 className='font-semibold'>Discover the best events in your city, all in one place!</h4>
        <h4 className='font-semibold'>Join for members only access and perks.</h4>
      </div>
      <div className='flex flex-row justify-center'>
          <ButtonSecondary 
          text='Discover Events' 
          background='bg-primaryWhite' 
          minWidth='min-w-[250px]'
          marginRight='mr-4'
          textColor='text-[#4b4b4b]'
          ></ButtonSecondary>
          <ButtonSecondary 
          text='Become a member' 
          textColor='text-white'
          background='bg-primary' 
          minWidth='min-w-[250px]
          '></ButtonSecondary>
      </div>

    </div>
  )
}

export default index