import Link from 'next/link'
import React from 'react'
import {FaInstagram , FaFacebook} from 'react-icons/fa'
import { ButtonSecondary } from '..'

type Props = {}

const index = (props: Props) => {
  return (
    <div className='max-w-full flex justify-center'>
     <header className="bg-background max-w-screen-lg w-full	">
        <nav className='flex w-full justify-between	 max-h-16	 p-4'>
          <div className="hover:border-b-4 hover:border-b-white text-xl">
          <Link
                href="/"
                className="border-none text-white"
              >
                Blend
              </Link>
          </div>
          <div>
          <ul className="flex  flex-wrap text-xl">
            <li className="mr-6 hover:border-b-4 hover:border-b-white">
              <Link
                href="/"
                className="border-none text-white"
              >
                The app
              </Link>
            </li>
            <li className="mr-6 hover:border-b-4 hover:border-b-white">
              <Link
                href="/about/"
                className="border-none text-white"
              >
                What's Poppin?
              </Link>
            </li>
            <li className="mr-6 hover:border-b-4 hover:border-b-white">
              <a
                className="text-white"
                href="https://github.com/ixartz/Next-js-Boilerplate"
              >
                Tastemakers
              </a>
            </li>
            <li className="mr-6 hover:border-b-4 hover:border-b-white ">
              <Link
                href="/blog/"
                className="no-underline text-white"
              >
                Blog
              </Link>
            </li>
            <li className="mr-6 hover:border-b-4 hover:border-b-white ">
              <Link
                href="/blog/"
                className="no-underline text-white text-3xl"
              >
                <FaInstagram/>
              </Link>
            </li>
            <li className="mr-6 hover:border-b-4 hover:border-b-white ">
              <Link
                href="/blog/"
                className="no-underline text-white text-3xl"
               >
                  <FaFacebook/>
              </Link>
            </li>
            <div>
               <ButtonSecondary 
               marginBottom='mb-0'
               marginTop='mt-0'
               text="Join The Club"
               textColor='text-[#9966ff]'
               background='bg-primaryWhite'
               minWidth='min-w-[150px]'
               ></ButtonSecondary>
            </div>
          </ul>
         
          </div>
        </nav>
      </header>
    </div>
  )
}

export default index