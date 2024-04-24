import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import GET_TOP_SONGS from '@queries/getTopSongs.graphql'
import { Song } from "@/@types/songs";

import Marquee from "react-fast-marquee";
import { Player } from "..";

type Props = {};

const index = (props: Props) => {
  const {data,error,loading} = useQuery(GET_TOP_SONGS)
  const [songs,setSongs] = useState<Song[]>([])
  useEffect(()=>{
    if(loading === false){
      setSongs(data.getTopSongs)    
      console.log(songs[0])  
    }
    
  },[loading])

  if(error){<>Not Able to Fetch top songs</>}

  return loading && data?<>Loading...</>:(
    <div className="flex">
    {songs.map(item=><>
      <div className="m-4 relative bg-none w-[250px] h-[350px] overflow-hidden  rounded-xl ">
      <img
        //@ts-ignore
        src={item.images?item.images[0]?.url:'/public/image404jpg'}
        className="w-full h-full absolute blur-xl "
      ></img>
      <div className="absolute flex flex-col p-3 w-full h-full justify-start items-center">
        <img
          className=" w-auto max-w-[170px] h-full max-h-[200px] mt-2 drop-shadow-lg"
          //@ts-ignore
          //@ts-ignore
          src={item.images?item.images[0]?.url:'/public/image404jpg'}
          alt="img"
        ></img>

        <div className="flex rounded w-auto h-full min-w-[150px] pl-2 pr-3 justify-center items-center ">
          <div className="flex flex-col  text-white bg-none text-center whitespace-nowrap text-ellipsis">
            <Marquee  speed={20} style={{maxWidth:120}}>
            <p className="font-semibold">{item.songName}</p>
            </Marquee>
            {/* @ts-ignore */}
            <p className="text-xs m-0">{item.artist[0].name}</p>
          </div>
        </div>
        <div className="w-full">
          <Player  previewUrl={item.previewUrl}/>
        </div>
      </div>
    </div>
    </>)}
    
    </div>
  );
};

export default index;
