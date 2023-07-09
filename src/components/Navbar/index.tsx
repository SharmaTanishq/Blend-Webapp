import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {FaInstagram , FaFacebook} from 'react-icons/fa'
import {FaBars,FaTimes} from "react-icons/fa"

import { ButtonSecondary } from '..'
import { navLinks } from '@/constants'
import menu from '../../../public/menu.svg'

type Props = {}

const index = (props: Props) => {
  let Links =[
    {name:"The App",link:"/"},
    {name:"What's Poppin?",link:"/"},
    {name:"Ambassadors",link:"/"},
    {name:"Blog's",link:"/"}
    
  ];
  const [scroll,setScroll] = useState(false);
  
  useEffect(()=>{
    if(window.scrollY >=80){
      setScroll(true);
    } else{
        setScroll(false);
    }
    console.log("Scroll",scroll)
  },[])

  
  let [open,setOpen]=useState(false);

  return (
    <nav className={`shadow-md  w-full fixed top-0 left-0 z-[999]`}>
      <div className={`md:flex max-w-7xl mx-auto items-center justify-between ${open?'bg-white':'bg-none'} py-4 md:px-10 px-7 transition-all duration-500 ease-in `}>
        <div className='font-bold text-2xl cursor-pointer flex items-center
        text-gray-800'>
          <span className='text-3xl text-white font-semibold mr-1 pt-2'>
          
          Blend
          </span>
        
        </div>
    
    <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
     {/* <ion-icon name={open ? 'close':'menu'}></ion-icon> */}
     {open ? <div className='text-primary'><FaTimes/></div>:<div className='text-white'><FaBars/></div>}
    </div>

    <ul className={` md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-50 left-0 w-full justify-end md:pl-0  transition-all duration-500 ease-in ${open ? 'top-20 bg-white':'top-[-490px] '}`}>
      {
        Links.map((link)=>(
          <li key={link.name} style={{textDecoration:'none'}} className='md:ml-8 text-xl md:my-0 my-7 '>
            <Link style={{textDecoration:'none'}}  href={link.link} className={`${open?'text-gray-800 text-center':'text-white'}  cursor-pointer hover:text-[#96f]  duration-500`}><h1>{link.name}</h1></Link>
          </li>
        ))
      }
        <div className={`flex flex-row ${open?'justify-evenly px-32':''} `}>
          <li className="md:ml-8 text-4xl md:my-0 my-7 ">
              <Link
                href="/blog/"
                className={`${open?'text-gray-800':'text-white'} cursor-pointer hover:text-[#96f]  duration-500`}
              >
                <FaInstagram/>
              </Link>
          </li>
          <li className="md:ml-8 md:my-0 my-7 text-4xl mr-4">
              <Link
                href="/blog/"
                className={`${open?'text-gray-800 text-center':'text-white'}  cursor-pointer hover:text-[#96f]  duration-500`}
               >
                  <FaFacebook/>
              </Link>
           </li>
           </div>
              <ButtonSecondary 
               marginBottom='mb-0'
               marginTop='mt-0'
               text="Join The Club"
               textColor={`${open?'text-white':'text-[#9966ff]'}`}
               background={`${open?'bg-primary':'bg-primaryWhite'}`}
               minWidth={`${open?'max-w-[280px] ml-12 ':'max-w-[150px]'}`}
               ></ButtonSecondary>
      </ul>
    </div>
  </nav>
  )
}

export default index