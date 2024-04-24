import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import GET_MY_PLAYLIST from '@queries/getPlaylists.graphql'
import Image from "next/image";
type Props = {};

const index = (props: Props) => {
  const {data,error,loading} = useQuery(GET_MY_PLAYLIST)
  const [playlists,setPlaylists] = useState([])
  if(error){return <>Can't return playlist</>}
  useEffect(()=>{
    if(loading === false){
      setPlaylists(data.getUserPlaylists)  
    }    
    console.log(playlists)
  },[loading])
  return loading?<>loading...</>: (
    <>
    {playlists.map((item:any)=>(
      <div className="relative  w-full h-[90px] overflow-hidden  rounded-lg mt-2 ">
      <Image
         //@ts-ignore
        src={item.images?item.images[0].url:'/public/image404jpg'}
        alt="Playlist"
        className="w-full h-full absolute blur-xl "
      ></Image>
      <div className="absolute  flex p-1 ml-2 w-full h-full ">
        <div className="w-1/4 flex justify-center items-center">
          <Image
            className=" w-auto  h-[60px]  drop-shadow-lg rounded-lg"
             //@ts-ignore
            src={item.images?item.images[0].url:'/public/image404jpg'}            
            alt="img"
          ></Image>
          <p className="font-semibold text-sm ml-2 tex-whtie">{item.name}</p>
        </div>

        <div className="flex rounded h-full w-1/4 justify-start items-center ">
          <p className="text-xs m-0">{item.description}</p>
        </div>
      </div>
    </div>)
    )}
    
    </>
  );
};

export default index;
