import React from 'react'
import styles from  './index.module.css'
import {FaRegHeart} from 'react-icons/fa'
import {BiPlus} from 'react-icons/bi'
import {BsBookmark} from 'react-icons/bs'
import {VscSend} from 'react-icons/vsc'
type Props = {
  backgroundImage:string;
  logoVisible:Boolean;
  logoIcon:number;
  logoBackground:string;
  isSongVisible:Boolean;
  songName:string;
  songArtistName:string;
  songArtistImage:string;
  isGenreVisible:Boolean;
  genre:string;
  isArtistTopVisible:Boolean;
  isArtistBottomVisible:Boolean;
  artistImage:string;
  isFestVisible:Boolean;
  festTag:string;
  festImage:string;
}


const index = (props: Props) => {
  const icon =(selection:number) =>{
    if(selection === 1){
      return (<>
        <FaRegHeart/>
      </>)
    } if(selection === 2){
      return (<>
        <BiPlus/>
      </>)
    }
    if(selection === 3){
      return (<>
        <BsBookmark/>
      </>)
    }
    return (
    <div className='mb-1 ml-1'>
      <VscSend className='-rotate-45 	'/>
    </div>
    )
  }
  return (
    <div className={styles.heroCard}>
      <img className={styles.heroCardImg} src={props.backgroundImage}></img>

      {/* Toggle for enable/disable the corner logo */}
      { props.logoVisible? 
      <div className={styles.topRightLogo}>
        <div className={styles.iconHolder} style={{background:props.logoBackground}}>
          <div className='icon text-2xl justify-center items-center flex h-full w-full'>
            {icon(props.logoIcon)}
          </div>
        </div>
      </div>:null}

     {/* Toggle to enable/disable the song */}
     { props.isSongVisible? 
        <div className={styles.bottomRightPlayer}>
        <div className={`${styles.playerContainer} rounded pl-2 pr-3 pt-1 pb-1` }>
          <img className={`${styles.playerImg} mr-3`} src={props.songArtistImage}></img>
          <div className={`${styles.infoContainer} flex flex-col justify-center`}>
            <h6 className='mb-1'>Chosen</h6>
            <h6>Blxst, Ty Dolla $ign</h6>
          </div>
        </div>
      </div>
      :null
     }
      
        {/* Toggle to enable/disable the Genre */}
      {props.isGenreVisible?
        <div className={styles.genreContainer}>
        <div className={` rounded-full ${styles.playerContainer} pl-3 pr-3 pt-1 pb-1 ` }>
            <div className={` ${styles.infoContainer} flex flex-col justify-center `}>
              Pop-Up Party
            </div>
        </div>
      </div>:null
      }

      {/* Toggle to enable/disable the Artist Top Container */}

      {props.isArtistBottomVisible?
        <div className={styles.artistContainerTop}>
          <div className={` rounded-full flex bg-white justify-center items-center	pl-2 pr-3 pt-1 pb-1 ` }>
            <img className={`${styles.artistImg} mr-2`} src='https://www.beatmatch.app/static/media/highlights-kaytranada-2.a9f5a105a7868bcdc036.jpeg' height={30} width={30}></img>
            <span className='font-medium'>Doja Cat</span>
          </div>
        </div>:null
       }
      

       {/* Toggle to enable/disable the Artist Bottom Container */}
       {props.isArtistBottomVisible?
        <div className={styles.artistContainer}>
          <div className={` rounded-full flex bg-white justify-center items-center	 pl-2 pr-3 pt-1 pb-1 ` }>
            <img className={`${styles.artistImg} mr-2`} src='https://www.beatmatch.app/static/media/highlights-kaytranada-2.a9f5a105a7868bcdc036.jpeg' height={30} width={30}></img>
            <span>KAYTRANADA</span>
          </div>
        </div>:null
       }


       {/* Toggle to enable/disable the Fest Container */}

       {props.isFestVisible?
        <div className={styles.artistContainer}>
          <div className={` ${styles.festContainer} flex bg-white justify-center items-center	 pl-1 pr-3 pt-1 pb-1 ` }>
            <img className={`${styles.festImage} mr-2`} src='https://www.beatmatch.app/static/media/highlights-kaytranada-2.a9f5a105a7868bcdc036.jpeg' height={25} width={25}></img>
            <span className={`font-semibold`}>Festival</span>
          </div>
        </div>:null
      }
      

    </div>
  )
}

export default index