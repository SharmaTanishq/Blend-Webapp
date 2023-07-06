import React from 'react'
import TypeIt from 'typeit-react';
import Button  from '../Button'

type Props = {}

const index = (props: Props) => {
  return (
    <div className='flex flex-col justify-center items-center text-center'>
    <h1 className='text-[3.5rem] max-w-sm leading-tight lg:text-[5.5rem] lg:max-w-none  text-white font-semibold '>Play music. Find
    <TypeIt
              options={{
                loop:true
              }}
               getBeforeInit={(instance) => {
                instance
                  .type(" friends.")
                  .pause(750)
                  .delete(8)
                  .pause(500)
                  .type("love.")
                  .pause(750)
                  .delete(5)
                  .pause(500)
                  .type("tracks.")
                  .pause(750)
                  .delete(7)
                  .pause(500)
                  .type("shows.");
                  
        
                // Remember to return it!
                return instance;
              }}
            />
    </h1>
    <h3 className='text-[2rem] text-white font-semibold mb-2'>
        Ready to find your Ride or Die?
    </h3>
    <Button text='Join the club'/>
    
    </div>
  )
}

export default index