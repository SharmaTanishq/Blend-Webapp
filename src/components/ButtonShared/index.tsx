import React from 'react'

type Props = {
  text:string,
  background:string;
  minWidth:string;
  marginRight?:string;
  marginBottom?:string;
  marginTop?:string;
  textColor:string;
  onClick?:()=>any
}

const index = (props: Props) => {
  return (
    <button 
    onClick={props.onClick}
    className={`
    ${props.minWidth} 
    w-full 
    max-h-14 
    flex 
    justify-center 
    items-center
    ${props.background}
    h-14 
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