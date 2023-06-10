import React from 'react'

type Props = {
  text:string
}

const index = (props: Props) => {
  return (
    <button className='max-w-sm 
    w-full 
    max-h-11 
    flex 
    justify-center 
    items-center
    bg-primary 
    h-11 
    rounded-full
    text-white
    font-semibold
    mb-4
    mt-6
    '>
      {props.text}
    </button>
  )
}

export default index