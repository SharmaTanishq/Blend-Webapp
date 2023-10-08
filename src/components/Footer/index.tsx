import { AppConfig } from '@/utils/AppConfig'
import React from 'react'
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaSpotify
} from 'react-icons/fa'
import { Subscribe } from '..'

type Props = {}

const index = (props: Props) => {
  return (
    <>
    <footer className=" flex justify-center items-center w-full py-8 text-center text-sm  p-5 h-auto">
        <div className='flex flex-col lg:flex-row  max-w-7xl max-h-80 h-full min-h-[324px] justify-between items-center min-w-[60%]'>
          <div className='text-white text-4xl'>Blend</div>
          <div><Subscribe/></div>
          <div className='flex text-white text-3xl'>
            <FaInstagram className='mr-5'/>
            <FaFacebookF className='mr-5'/>
            <FaTwitter className='mr-5'/>
            <FaYoutube className='mr-5'/>
            <FaSpotify/>
          </div>
        </div>
      </footer>
    </>
  )
}

export default index