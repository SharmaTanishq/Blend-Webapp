import React, { useEffect, useState } from "react";
import GET_FOLLOWED_ARTIST from '@queries/getFollowedArtists.graphql'
import { useQuery } from "@apollo/client";
import { Artist } from "@/@types/artists";

import img404 from '../../../public/image404.jpeg'
type Props = {};

const index = (props: Props) => {
  const {data,loading,error} = useQuery(GET_FOLLOWED_ARTIST)
  const [artist,setArtist] = useState<Artist[]>()
  useEffect(()=>{
    if(loading === false){
      setArtist(data.getFollowedArtist)      
    }
   
  },[,loading])

  if(error){<div className="text-white">No followed Artist</div>}
  return (
    loading?<>loading...</>:
      <>
      {artist?.map(item=>(
        <div className="flex flex-col items-center m-3 shadow">
          <img
            className="rounded-full w-[150px] h-[150px]"
            //@ts-ignore
            src={item.images?item.images[0]?.url:img404}        
          />
         <div className="mt-7 justify-center items-center w-full">
          <p className="text-white font-semibold text-center">{item.artistName}</p>
          <p className="text-white  text-sm text-center">{item.followers.total} Followers</p>
         </div>
       </div>
      ))}
     
    </>
  );
};

export default index;
