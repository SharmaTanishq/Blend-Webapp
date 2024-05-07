import React, { useEffect, useRef } from "react";
import Image from "next/image";

import styles from "./index.module.css";
import { Button, MarqueeBanner } from "@/components";


import { useParallax } from "react-scroll-parallax";



const responsive = {
  0: {
    items: 1,
    nav: true,
  },
  600: {
    items: 1,
    nav: false,
  },
  1200: {
    items: 1,
  },
};

const index = (data: any) => {
  
  

  const mobileScreenRef = useRef(null);
  const leftToRight = useParallax({
    translateX: ["80", "0"],
    speed: 1,
    startScroll:680,
    endScroll:2000,
    
    easing: "easeOutQuad",

    shouldAlwaysCompleteAnimation:true,
  });
  return (
    <div className={`${styles.csContainer} relative`} ref={mobileScreenRef}>
      <div className="absolute top-4 left-3 md:left-1/2 md:top-1/4 "   data-aos="fade-in" data-aos-anchor-placement="center-center"  data-aos-duration="2000">
      
        <Image
          className="rounded-3xl relative left-6 -top-2s md:top-10 md:bottom-10 max-w-[100px] md:max-w-none "
          width={150}
          height={150}
          
          src={"https://i.scdn.co/image/ab67616d0000b273bb25239324c4e16ae01fda36"}
          alt="prophec"
        ></Image>
        <Image
          className="rounded-3xl left-10 top-2 md:right-10 md:top-10 md:bottom-20 relative max-w-[100px] md:max-w-none"
          width={150}
          height={150}
          src={"https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/53/fc/12/53fc12dd-e441-88b0-b539-b5e4728bb5c9/198391098505.jpg/1200x1200bf-60.jpg"}
          alt="prophec"
        ></Image>
         <Image
          className="rounded-3xl left-2 top-5 md:right-5 md:top-20 md:bottom-20 relative max-w-[100px] md:max-w-none"
          width={150}
          height={150}
          src={"https://m.media-amazon.com/images/I/51HG9xnTdaL._UXNaN_FMjpg_QL85_.jpg"}
          alt="prophec"
        ></Image>
        
      </div>
      <div className="flex flex-col-reverse md:flex md:flex-row h-[75vh] w-full justify-center items-center text-white backdrop-blur-sm ">
        <div
          className={`flex flex-col md:w-1/2 max-w-xl  text-left px-6 pt-10 lg:px-0 lg:pt-0`}
        >
          <h1
            data-aos="fade-up"
            data-aos-anchor-placement="center-center"
            className="text-[1.5rem] md:text-[2.5rem] lg:text-[3.5rem]  leading-tight	font-bold	mb-4	"
          >
           {data.data.heading}
          </h1>
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="center-center"
            className="text-xl	font-normal leading-snug"
          >
             {data.data.sub_heading}
          </p>
          <Button text="Join the club" />
        </div>
        <div
          className="flex w-1/2 justify-center items-center"
         
        >
          <Image
            ref={leftToRight.ref as React.RefObject<HTMLImageElement>}
            src={data.data.main_image.data.attributes.url}
            height={400}
            width={400}
            alt="Image"
          ></Image>
        </div>
      </div>

      
    </div>
  );
};

export default index;
