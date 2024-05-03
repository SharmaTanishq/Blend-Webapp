import React, { useEffect, useRef } from "react";
import Image from "next/image";

import styles from "./index.module.css";
import { Button, MarqueeBanner } from "@/components";


import { useParallax } from "react-scroll-parallax";

type Props = {};

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

const index = (props: Props) => {
  
  const [isMobile,setIsMobile] = React.useState(false)
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(()=>{
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    
    console.log(isMobile)
    // just trigger this so that the initial state 
    // is updated as soon as the component is mounted
    // related: https://stackoverflow.com/a/63408216
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  },[])
  useEffect(()=>{
    const isMobile = screen.width < 500;
    setIsMobile(isMobile)
  },[])



  const mobileScreenRef = useRef(null);

  const leftToRight = useParallax({
    translateX: ["-200", "0"],
    translateY: ["200", "0"],
    
    startScroll:1545,
    endScroll:isMobile?2300:3000,
    
    easing: "easeOutQuad",
    shouldAlwaysCompleteAnimation:true,
  });
  return (
    <div className={`${styles.csContainer} relative `} ref={mobileScreenRef}>
      <div className="absolute top-4 left-3 md:left-20 md:top-3/3"   data-aos="fade-in" data-aos-anchor-placement="top-center"  data-aos-duration="2000">
      
      <Image
          className="rounded-3xl relative left-6 -top-2s md:top-10 md:bottom-10 max-w-[120px] h-full  object-cover md:max-w-none "
          width={150}
          height={150}
          
          src={"images/Shinda.JPG"}
          alt="prophec"
        ></Image>
        <Image
          className="rounded-3xl left-10 top-2 md:right-10 md:top-16 md:bottom-20 relative max-w-[100px] md:max-w-none"
          width={150}
          height={150}
          src={"images/Obsessed.jpg"}
          alt="prophec"
        ></Image>
         <Image
          className="rounded-3xl left-2 top-5 md:left-16 md:top-20 md:bottom-20 relative max-w-[100px] md:max-w-none"
          width={150}
          height={150}
          src={"images/Gurinder.jpeg"}
          alt="prophec"
        ></Image>
        
      </div>
      <div className="flex flex-col-reverse md:flex md:flex-row-reverse h-[75vh] w-full justify-center items-center text-white backdrop-blur-sm">
        <div
          className={`flex flex-col md:w-1/2 max-w-xl  text-left px-6 pt-10 lg:px-0 lg:pt-0`}
        >
          <h1
            data-aos="fade-up"
            data-aos-anchor-placement="center-center"
            className="text-[1.5rem] md:text-[2.5rem] lg:text-[3.5rem]  leading-tight	font-bold	mb-4	"
          >
           Break the ice  with music
          </h1>
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="center-center"
            className="text-xl	font-normal leading-snug"
          >
            Show off your personality by highlighting your favorite songs, artists, and albums and watch the DMs roll in.
          </p>
          <Button text="Join the club" />
        </div>
        <div
          className="flex w-1/2 justify-center items-center"
         
        >
          <Image
            ref={leftToRight.ref as React.RefObject<HTMLImageElement>}
            src={"/images/mockUpTwo.png"}
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
