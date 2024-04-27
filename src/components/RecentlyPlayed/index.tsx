'use client';
import React, { useContext, useEffect, useState } from "react";
import Get_RECENTLY_PLAYED from "@queries/getRecentlyPlayed.graphql";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import { Song } from "@/@types/songs";
import { Spinner } from "@nextui-org/spinner";
import "./player.module.css";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import PlayIcon from "@/utils/Icons/Play";
import PauseIcon from "@/utils/Icons/Pause";
import { Player } from "..";
import Marquee from "react-fast-marquee";
import { Button } from '..';
import { AppContext } from "@/context";
type Props = {};

const index = (props: Props) => {
  const { data, loading, error } = useQuery(Get_RECENTLY_PLAYED, {
    variables: {
      limit: 1,
    },
  });
  const { state } = useContext(AppContext);

  const user = state.user;

  const [song, setSong] = useState<Song>();

  useEffect(() => {
    if (loading === false) {
      setSong(data.getRecentlyPlayed[0]);
    }
    
  }, [, loading]);

  const handleLogout=()=>{
    
    localStorage.removeItem('logged_in_user')
  }

  if (error){ return(<>Cannot load data.</>)};

  return (
    <>
      <div className="mt-11 flex justify-center flex-col w-full sm:w-1/2 sm:mt-0 ">
        
        <h1 className="text-[2.5rem] sm:text-[3.4rem] max-w-[2rem] leading-none lg:text-[4rem] lg:max-w-none  text-white font-semibold ">
          Welcome,{user.name?user.name:""}
        </h1>
        <p className="text-sm sm:text-lg text-white  mt-2 sm:ml-3">
          Access and update your account information easily
        </p>
        <Button text='Logout' onClick={handleLogout} ></Button>
      </div>

      {loading ? (
        <div className="flex pr-5 pl-5 w-[380px] justify-center items-center">
          <Spinner />
          
        </div>
      ) : (
        <div className="flex w-full mt-10 sm:mt-0 sm:w-1/2 justify-center sm:px-5 items-center relative">
          <div className="relative w-full sm:w-[380px] h-[170px] overflow-hidden  rounded-2xl ">
            <Image
              //@ts-ignore
              src={song?.images ? song.images[0]?.url! : "/images/image404.jpg"}
              //@ts-ignore
              width={800}
              //@ts-ignore
              height={800}
              alt="Recently Played"
              className="w-full h-full absolute blur-xl "
            ></Image>
            <div className="absolute flex p-3 w-full h-full justify-center items-center bg-gradient-to-r from-stone-700/20 to-neutral-900/70">
              <Image
                className="rounded-2xl w-auto max-w-[120px] max-h-[130px] h-full drop-shadow-lg"
                //@ts-ignore
                src={
                  song?.images ? song.images[0]?.url! : "/images/image404.jpg"
                }
                width={800}
                height={800}
                alt="img"
              ></Image>

              <div className="flex-col rounded w-full min-w-[150px] pl-2  justify-center items-center ">
                <div className="flex flex-col  text-white bg-none text-center whitespace-nowrap text-ellipsis">
                  <Marquee speed={6}>
                    <p className="font-bold text-2xl">{song?.songName}</p>
                  </Marquee>

                  <p className="text-lg m-0">{song?.artist[0]?.name}</p>
                </div>
                <div className="w-[250px]">
                <AudioPlayer
                  autoPlay={false}
                  autoPlayAfterSrcChange={false}
                  layout="stacked-reverse"
                  src={song?.previewUrl}
                  hasDefaultKeyBindings={false}
                  style={{ background: "none", boxShadow: "none",padding:10 }}
                  showJumpControls={false}
                  showFilledVolume={false}
                  customVolumeControls={[<></>]}
                  customProgressBarSection={[<></>, RHAP_UI.PROGRESS_BAR, <></>]}
                  customIcons={{                    
                    play: <PlayIcon />,
                    pause: <PauseIcon/>,
                  }}
                  customAdditionalControls={[]} 
                 
                  // other props here
                />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default index;
