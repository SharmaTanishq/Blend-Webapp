import React from 'react'

type Props = {
  text:string,
  background:string;
  minWidth:string;
  marginRight?:string;
  marginBottom?:string;
  marginTop?:string;
  textColor:string;
}

const index = (props: Props) => {
  return (
    <button className={`
    ${props.minWidth} 
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
    ${props.marginBottom?props.marginBottom:'mb-4'}
    ${props.marginTop?props.marginTop:' mt-6'}
    text-base
    `}>
      {props.text}
    </button>
  )
}

export default index