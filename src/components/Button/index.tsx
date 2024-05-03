import React from 'react'

type Props = {
  text:string
  onClick?:()=>void
}

const index = (props: Props) => {
  return (
    <button 
    data-aos="fade-up"
          data-aos-anchor-placement="center-center"
    type='button'
    onClick={props.onClick}
    className='max-w-sm 
    shadow-custom
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
    mt-16
    md:mt-6
    '>
      {props.text}
    </button>
  )
}

export default index