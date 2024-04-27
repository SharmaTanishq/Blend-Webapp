import React, { useEffect, useState } from "react";
import Image from "next/image";
import GET_FOLLOWED_ARTIST from '@queries/getFollowedArtists.graphql'
import { useQuery } from "@apollo/client";
import { Artist } from "@/@types/artists";
import {Spinner} from "@nextui-org/spinner";

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
    loading?<div className="flex flex-col items-center m-3 shadow"><Spinner/></div>:
      <>
      {artist?.map((item,index)=>(
        <div className="flex  flex-col items-center m-3 shadow" key={index}>
          <Image
            className="rounded-full sm:w-[150px] sm:h-[150px] w-[130px] h-[130px]"
            // @ts-ignore
            src={item.images?item.images[0]?.url:'images/image404.jpg'} 
            width={300}
            
            height={300}
            
            alt="Followed Artists"       
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
