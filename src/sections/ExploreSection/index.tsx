import React from 'react'

type Props = {}

const index = (props: Props) => {
  return (
    <div className='min-h-section-height flex flex-col justify-center items-center'>
      <div className='text-white text-center mb-4 pt-5 '>
        <h1 className='text-[3.5rem] font-semibold'>
          Hate saying
          <i> "we met on an app" ?</i>
        </h1>
        <h4 >Meet IRL at curated concerts, parties and music festival </h4>
      </div>
      <div className='flex flex-col justify-center items-center relative h-[600px] max-w-7xl w-full ml-auto mr-auto'>
        <img className='rounded-3xl object-cover h-[600px]' src='https://www.beatmatch.app/static/media/events-party.cd1193dc2322b22e8b46.gif' width={'100%'}  ></img>
        <div className='absolute left-[-5rem] top-[10px] h-full'>
          <h1>Explore</h1>
          <h1>events</h1>
          <h1></h1>
        </div>
      </div>
      <div>
        <h4>Discover the best events in your city, all in one place!</h4>
        <h4>Join for members only access and perks.</h4>
      </div>
      <div>

      </div>

    </div>
  )
}

export default index