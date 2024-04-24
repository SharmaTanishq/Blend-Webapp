import React, { useEffect, useState } from "react";
import Get_RECENTLY_PLAYED from "@queries/getRecentlyPlayed.graphql";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import { Song } from "@/@types/songs";

import "./player.module.css";

import { Player } from "..";

type Props = {};

const index = (props: Props) => {
  const { data, loading, error } = useQuery(Get_RECENTLY_PLAYED, {
    variables: {
      limit: 1,
    },
  });
  const [song, setSong] = useState<Song>();

  useEffect(() => {
    if (loading === false) {
      setSong(data.getRecentlyPlayed[0]);
    }
    console.log(song?.previewUrl);
  }, [, loading]);

  if (error) <></>;

  return loading && data ? (
    <>loading...</>
  ) : (
    <div className="flex w-1/2 justify-center pr-5 pl-5 items-center relative">
      <div className="relative bg-none w-[380px] h-[150px] overflow-hidden  rounded-2xl">
        <Image
          //@ts-ignore
          src={song?.images ? song.images[0]?.url! : '/public/image404jpg'}
          alt="Recently Played"
          className="w-full h-full absolute blur-xl "
        ></Image>
        <div className="absolute flex p-3 w-full h-full justify-center items-center">
          <Image
            className="rounded-2xl w-auto max-w-[120px] h-full drop-shadow-lg"
            //@ts-ignore
            src={song?.images ? song.images[0]?.url! : '/public/image404jpg'}
            alt="img"
          ></Image>

          <div className="flex-col rounded w-full min-w-[150px] pl-2  justify-center items-center ">
            <div className="flex flex-col  text-white bg-none text-center whitespace-nowrap text-ellipsis">
              <p className="font-bold text-3xl">{song?.songName}</p>
              <p className="text-lg m-0">{song?.artist[0]?.name}</p>
             
            </div>
            <div className="w-[250px]">
                <Player previewUrl={song?.previewUrl} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
