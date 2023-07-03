import React from 'react'

type Props = {
  text:string,
  background:string;
  minWidth:string;
  marginRight?:string;
  textColor:string;
}

const index = (props: Props) => {
  return (
    <button className={`
    ${props.minWidth}
    max-w-sm 
    w-full 
    max-h-11 
    flex 
    justify-center 
    items-center
    ${props.background}
    h-11 
    rounded-full
    ${props.textColor}
    font-semibold
    ${props.marginRight?props.marginRight:''}
    mb-4
    mt-6
    text-base
    `}>
      {props.text}
    </button>
  )
}

export default index