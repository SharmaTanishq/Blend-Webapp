import React from 'react'

type Props = {}

const index = (props: Props) => {
  return (
    <div>
        <form>
            <div >
                <div className='relative flex text-[16px] min-h-[50px]'>
                    <input className=' 
                    border border-[#c7abff] focus:outline-none placeholder-[#4b4b4b] rounded-l-[20px] font-semibold pl-7'
                     placeholder='Enter email address '></input>
                    <div>
                        <button className='h-full bg-primary text-white rounded-r-[20px] font-semibold pl-4 pr-3 -ml-1 '>
                            Join the club</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}

export default index