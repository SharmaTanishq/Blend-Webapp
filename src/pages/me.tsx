import Link from 'next/link';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { Button, MyProfileCard } from '@/components';
import Karan from '../../public/images/bdkaran.webp'
import Image from 'next/image';
const Blog = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <div className='mx-auto max-w-screen'>
      <section className='h-4/6 md:mt-20 '>
          {/* Profile Picture */}                
          <div className='flex flex-col w-full  items-center justify-center '>
              <div className='flex w-full  max-w-6xl  p-10'>
                <div className='flex justify-center flex-col w-1/2'>
                  <h1 className='text-[3.4rem] max-w-sm leading-none lg:text-[4rem] lg:max-w-none  text-white font-semibold '>Welcome, Tanishq</h1>
                  <p className='text-lg text-white  mt-2 ml-3'>Access and update your account information easily</p>
                  <Button text='Logout' ></Button>
                </div>
                <div className='flex w-1/2 justify-center pr-5 pl-5 items-center relative' >

                    <div className='relative bg-none w-[380px] h-[150px] overflow-hidden  rounded-2xl'>
                      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShwvPFNoNf9yUIj1wVeBEq-dBM4bbMKGA0PSwlkiuDW7bdmbCxJJQ4btesxzcM5HMydHM&usqp=CAU' className='w-full h-full absolute blur-xl ' ></img>
                        <div className='absolute flex p-3 w-full h-full justify-center items-center'>
                         <img className='rounded-2xl w-auto max-w-[120px] h-full drop-shadow-lg'  src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShwvPFNoNf9yUIj1wVeBEq-dBM4bbMKGA0PSwlkiuDW7bdmbCxJJQ4btesxzcM5HMydHM&usqp=CAU' alt='img'></img>
                  
                        <div className='flex rounded w-full min-w-[150px] pl-2 pr-3 justify-center items-center '>                        
                          <div className='flex flex-col  text-white bg-none text-center whitespace-nowrap text-ellipsis'>
                            <p className='font-semibold'>Chosen</p>
                            <p className='text-xs m-0'>Blxst, Ty Dolla $ign</p>
                            <span>player</span>
                        </div>

                      </div>
                    </div>
                    </div>

                   
                </div>
              </div>
              <div className='w-full p-5  max-w-6xl '>
                <div className = 'flex flex-col justify-center items-center' >
                  <h1 className='text-[3rem] mb-10 max-w-sm leading-none  lg:max-w-none  text-white font-semibold '>Artists you follow</h1>
                    <div >
                        <img className='rounded-full w-[150px] h-[150px]' src='/images/Talwinder.jpg'/>
                    </div>
                </div>
                         
            </div>
            
            <div className='w-full p-5'>
                <div className = 'flex flex-col justify-center items-center' >
                  <h1 className='text-[3rem] max-w-sm leading-none mb-4  lg:max-w-none  text-white font-semibold '>Your top songs</h1>
                  <div className='relative bg-none w-[220px] h-[300px] overflow-hidden  rounded-xl'>
                      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShwvPFNoNf9yUIj1wVeBEq-dBM4bbMKGA0PSwlkiuDW7bdmbCxJJQ4btesxzcM5HMydHM&usqp=CAU' className='w-full h-full absolute blur-xl ' ></img>
                        <div className='absolute flex flex-col p-3 w-full h-full justify-start items-center'>
                         <img className=' w-auto max-w-[170px] h-full max-h-[200px] mt-2 drop-shadow-lg'  src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShwvPFNoNf9yUIj1wVeBEq-dBM4bbMKGA0PSwlkiuDW7bdmbCxJJQ4btesxzcM5HMydHM&usqp=CAU' alt='img'></img>
                  
                        <div className='flex rounded w-auto h-full min-w-[150px] pl-2 pr-3 justify-center items-center '>                        
                          <div className='flex flex-col  text-white bg-none text-center whitespace-nowrap text-ellipsis'>
                            <p className='font-semibold'>Chosen</p>
                            <p className='text-xs m-0'>Blxst, Ty Dolla $ign</p>
                          
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                         
            </div>
            <div className='w-full p-5 max-w-3xl '>
                <div className = 'flex flex-col justify-center items-center' >
                  <h1 className='text-[3rem] max-w-sm leading-none  lg:max-w-none mb-8   text-white font-semibold '>Your playlists</h1>
                  <div className='text-white w-full flex flex-col justify-center items-start '>
                    <h1 className='mb-3'> Playlist Name</h1>
                    <table className='w-full text-left '>
                      <tr>
                        <th >#</th>
                        <th >Song</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Time</th>
                      </tr>
                     
                                            
                    </table>
                    <div className='relative  w-full h-[60px] overflow-hidden  rounded-lg mt-2 '>
                      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShwvPFNoNf9yUIj1wVeBEq-dBM4bbMKGA0PSwlkiuDW7bdmbCxJJQ4btesxzcM5HMydHM&usqp=CAU' className='w-full h-full absolute blur-xl ' ></img>
                        <div className='absolute  flex p-1 ml-2 w-full h-full '>
                         <div className='w-1/4 flex justify-center items-center'>
                            <img className=' w-auto  h-full  drop-shadow-lg rounded-lg'  src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShwvPFNoNf9yUIj1wVeBEq-dBM4bbMKGA0PSwlkiuDW7bdmbCxJJQ4btesxzcM5HMydHM&usqp=CAU' alt='img'></img>
                            <p className='font-semibold ml-2 tex-whtie'>Chosen</p>
                          </div> 
                        
                        <div className='flex rounded h-full w-1/4 justify-start items-center '>                        
                       
                            
                            <p className='text-xs m-0'>Blxst, Ty Dolla $ign</p>
                          
                       

                      </div>
                    </div>
                  </div>
                   
                  </div>
                 
                </div>
                         
            </div>
           
          </div>
         
        
       
        {/* User Name edit */}
        {/* Spotify/Apple Details */}

      </section>
       

    </div>

   
  </Main>
);

export default Blog;
