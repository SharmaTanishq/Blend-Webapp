
import Link from 'next/link';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { Button, FollowedArtist, MyPlaylists, MyProfileCard, RecentlyPlayed, TopSongs } from '@/components';

import Marquee from 'react-fast-marquee';
import { useContext, useEffect } from 'react';
import { AppContext } from '@/context';
const Blog = () => {




  return(
  <Main meta={<Meta title="Me" description="Me" />}>
    <div className='mx-auto max-w-screen'>
      <section className='h-4/6 md:mt-28 '>
          {/* Profile Picture */}                
          <div className='flex flex-col w-full  items-center justify-center mt-14 sm:mt-28 '>
              <div className='flex flex-col sm:flex-row w-full  max-w-6xl p-4  sm:p-10'>
                
                <RecentlyPlayed/>
              </div>
              <div className='w-full p-5  '>
                <div className = 'flex flex-col justify-center items-center' >
                  <h1 className='text-[2.5rem] sm:text-[3rem] mb-10 max-w-sm leading-none  lg:max-w-none  text-white font-semibold '>Artists you follow</h1>
                  <div className='sm:flex sm:justify-center sm:items-center grid w-full grid-cols-2	'>
                   <FollowedArtist/>
                  </div>
                </div>
                         
            </div>
            
            <div className='w-full p-5 '>
                <div className = 'flex flex-col justify-center items-center' >
                  <h1 className='text-[3rem] max-w-sm leading-none mb-4  lg:max-w-none  text-white font-semibold '>Your top songs</h1>
                  <Marquee
                    speed={5}
                    direction='right'
                    gradient={true}
                    gradientColor={[0, 0, 1]}
                    gradientWidth={50}
                  >
                    <div className='flex overflow-auto '>
                      <TopSongs/>
                    </div>
                    </Marquee>
                </div>
                         
            </div>
            <div className='w-full p-5 max-w-3xl '>
                <div className = 'flex flex-col justify-center items-center' >
                  <h1 className='text-[3rem] max-w-sm leading-none  lg:max-w-none mb-8   text-white font-semibold '>Your playlists</h1>
                  <div className='text-white w-full flex flex-col justify-center items-start '>
                    <h1 className='mb-3'> Playlist Name</h1>
                    {/* <table className='w-full text-left '>
                      <tr>
                        <th >#</th>
                        <th >Song</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Time</th>
                      </tr>
                     
                                            
                    </table> */}
                    <MyPlaylists/>
                   
                  </div>
                 
                </div>
                         
            </div>
           
          </div>
         
        
       
        {/* User Name edit */}
        {/* Spotify/Apple Details */}

      </section>
       

    </div>

   
  </Main>)
};

export default Blog;
