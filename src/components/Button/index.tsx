import React from 'react'

type Props = {
  text:string,
  animate?:boolean,
  onClick?:()=>void
}

const index = (props: Props) => {
  return (
    <button 
    {...props}
    data-aos="fade-up"
    data-aos-anchor-placement={`${props.animate?"top-center":""}`}
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