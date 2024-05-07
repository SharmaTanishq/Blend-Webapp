import React, { useEffect } from "react";
import styles from "./index.module.css";
import { FaRegHeart } from "react-icons/fa";
import { BiPlus } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";
import { VscSend } from "react-icons/vsc";

// type Props = {
//   backgroundImage:string;
//   logoVisible:Boolean;
//   logoIcon:number;
//   logoColor?:string|null;
//   logoBackground:string;
//   isSongVisible:Boolean;
//   songName:string;
//   songArtistName:string;
//   songArtistImage:string;
//   isGenreVisible:Boolean;
//   genre:string;
//   isArtistTopVisible:Boolean;
//   isArtistBottomVisible:Boolean;
//   artistImage:string;
//   isFestVisible:Boolean;
//   festTag:string;
//   festImage:string;
// }

const index = (props: any) => {
 

  const icon = (selection: number) => {
    if (selection === 1) {
      return (
        <>
          <FaRegHeart
            className={`${props.data.imageData?.logoColor ? props.data.imageData.logoColor : "text-white"}`}
          />
        </>
      );
    }
    if (selection === 2) {
      return (
        <>
          <BiPlus
            className={`${props.data.imageData?.logoColor ? props.data.imageData.logoColor : "text-white"}`}
          />
        </>
      );
    }
    if (selection === 3) {
      return (
        <>
          <BsBookmark
            className={`${props.data.imageData.logoColor ? props.data.imageData.logoColor : "text-white"}`}
          />
        </>
      );
    }
    return (
      <div className="mb-1 ml-1">
        <VscSend
          className={`${
            props.data.imageData.logoColor ? props.data.imageData.logoColor : "text-white"
          } -rotate-45`}
        />
      </div>
    );
  };
  return (
    <div className={styles.heroCard}>
      <img
        className={styles.heroCardImg}
        src={
          props.data.backgroundImage
            ? props.data.backgroundImage?.data.attributes?.url
            : "images/image404.jpg"
        }
        alt={
          props.data.backgroundImage
            ? props.data.backgroundImage?.data.attributes?.alternativeText
            : "alt text"
        }
      ></img>

      {/* Toggle for enable/disable the corner logo */}
      {props.data.imageData?.logoVisible ? (
        <div className={styles.topRightLogo}>
          <div
            className={styles.iconHolder}
            style={{ background: props.data.imageData?.logoBackground }}
          >
            <div className="icon text-2xl justify-center items-center flex h-full w-full">
              {icon(props.data.imageData?.logoIcon)}
            </div>
          </div>
        </div>
      ) : null}

      {/* Toggle to enable/disable the song */}
      {props.data.imageData?.isSongVisible ? (
        <div className={styles.bottomRightPlayer}>
          <div
            className={`${styles.playerContainer} rounded pl-2 pr-3 pt-1 pb-1`}
          >
            <img
              className={`${styles.playerImg} mr-3`}
              src={
                props.data.songArtistImage
                  ? props.data.songArtistImage?.data.attributes?.url
                  : "images/image404.jpg"
              }
              alt={
                props.data.songArtistImage
                  ? props.data.songArtistImage?.data.attributes?.alternativeText
                  : "alt text"
              }
            ></img>
            <div
              className={`${styles.infoContainer} flex flex-col justify-center`}
            >
              <h6 className="mb-1">{props.data.imageData?.songName}</h6>
              <h6>{props.data.imageData?.songArtistName}</h6>
            </div>
          </div>
        </div>
      ) : null}

      {/* Toggle to enable/disable the Genre */}
      {props.data.imageData?.isGenreVisible ? (
        <div className={styles.genreContainer}>
          <div
            className={` rounded-full ${styles.playerContainer} pl-3 pr-3 pt-1 pb-1 `}
          >
            <div
              className={` ${styles.infoContainer} flex flex-col justify-center `}
            >
              {props.data.imageData?.genre}
            </div>
          </div>
        </div>
      ) : null}

      {/* Toggle to enable/disable the Artist Top Container */}

      {props.data.imageData?.isArtistTopVisible ? (
        <div className={styles.artistContainerTop}>
          <div
            className={` rounded-full flex bg-white justify-center items-center	pl-2 pr-3 pt-1 pb-1 `}
          >
            <img
              className={`${styles.artistImg} mr-2`}
              src={
                props.data.artistImage
                  ? props.data.artistImage?.data?.attributes?.url
                  : "images/image404.jpg"
              }
              alt={
                props.data.artistImage
                  ? props.data.artistImage?.data?.attributes?.alternativeText
                  : "alt text"
              }
              height={30}
              width={30}
            ></img>
            <span className="font-medium">{props.data.imageData?.songArtistName}</span>
          </div>
        </div>
      ) : null}

      {/* Toggle to enable/disable the Artist Bottom Container */}
      {props.data.imageData?.isArtistBottomVisible ? (
        <div className={styles.artistContainer}>
          <div
            className={` rounded-full flex bg-white justify-center items-center	 pl-2 pr-3 pt-1 pb-1 `}
          >
            <img
              className={`${styles.artistImg} mr-2`}
              src={
                props.data.artistImage
                  ? props.data.artistImage?.data?.attributes?.url
                  : "images/image404.jpg"
              }
              alt={
                props.data.artistImage
                  ? props.data.artistImage?.data?.attributes?.alternativeText
                  : "alt text"
              }
              height={30}
              width={30}
            ></img>
            <span>{props.data.imageData?.songArtistName}</span>
          </div>
        </div>
      ) : null}

      {/* Toggle to enable/disable the Fest Container */}

      {props.data.imageData?.isFestVisible ? (
        <div className={styles.artistContainer}>
          <div
            className={` ${styles.festContainer} flex bg-white justify-center items-center	 pl-1 pr-3 pt-1 pb-1 `}
          >
            <img
              className={`${styles.festImage} mr-2`}
              src={
                props.data.festImage
                  ? props.data.festImage?.data.attributes?.url
                  : "images/image404.jpg"
              }
              alt={
                props.data.festImage
                  ? props.data.festImage?.data.attributes?.alternativeText
                  : "alt text"
              }
              height={25}
              width={25}
            ></img>
            <span className={`font-semibold`}>{props.data.imageData?.festTag}</span>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default index;
