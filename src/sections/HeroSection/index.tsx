import React, { useRef } from "react";
import { HeroCard, Intro } from "../../components";
import {
  carousel,
  carouselOne,
  carouselTwo,
  carousel_two,
} from "../../../public/carousel";
import Marquee from "react-fast-marquee";
import styles from "./index.module.css";
import { useParallax } from "react-scroll-parallax";

type Props = {};

const index = (props: Props) => {
  const target = useRef(null);

  const train = useParallax({
    speed: 230,
    translateY: ["-70px", "100px"],
    targetElement: target.current!,
  });

  const marqueeRef = useRef(null);

  const down = useParallax({
    translateY: ["0", "100"],
    scale: [1, 1.15],
    speed: 500,
    easing: "easeInQuad",
  });

  return (
    <div
      className="bg-background 
    min-h-screen 
    flex 
    flex-col
    justify-center 
    items-center pt-[12vh] md:mt-9 pb-5"
      ref={target}
    >
      <div
        className="infoHolder max-w-7xl mb-7"
        ref={train.ref as React.RefObject<HTMLDivElement>}
      >
        <Intro />
      </div>
      <div ref={marqueeRef} className="flex flex-col mt-8 h-full w-full" data-aos="fade-up" 
     >
        <div
          
          
          ref={down.ref as React.RefObject<HTMLDivElement>}
        >
          <Marquee
            speed={5}
            gradient={true}
            gradientColor={[0, 0, 1]}
            gradientWidth={50}
            className="pt-2 max-w-full overflow-hidden"
          >
            {carousel.map((item, index) => (
              <HeroCard {...item} key={index} />
            ))}
            {carouselOne.map((item, index) => (
              <HeroCard {...item} key={index} />
            ))}
          </Marquee>

          <Marquee
            speed={5}
            direction="right"
            gradient={true}
            gradientColor={[0, 0, 1]}
            gradientWidth={50}
            className="pt-2 mt-4 max-w-full overflow-hidden"
          >
            {carouselTwo.map((item, index) => (
              <HeroCard {...item} key={index} />
            ))}
            {carousel_two.map((item, index) => (
              <HeroCard {...item} key={index} />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default index;
