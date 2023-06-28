import { AppConfig } from '@/utils/AppConfig'
import React from 'react'

type Props = {}

const index = (props: Props) => {
  return (
    <>
    <footer className=" w-full py-8 text-center text-sm bg-[#211735]">
        © Copyright {new Date().getFullYear()} {AppConfig.title}. Made for{' '}
        <a href="https://www.blend.com">Blend</a>.
        {/*
         * PLEASE READ THIS SECTION
         * I'm an indie maker with limited resources and funds, I'll really appreciate if you could have a link to my website.
         * The link doesn't need to appear on every pages, one link on one page is enough.
         * For example, in the `About` page. Thank you for your support, it'll mean a lot to me.
         */}
      </footer>
    </>
  )
}

export default index