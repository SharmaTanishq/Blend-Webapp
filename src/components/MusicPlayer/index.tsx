import React from 'react'
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import PlayIcon from "@/utils/Icons/Play";
import PauseIcon from "@/utils/Icons/Pause";
type Props = {
  previewUrl:string|undefined,
}

const index = (props: Props) => {
  return (
    
      <AudioPlayer
                  autoPlay={false}
                  autoPlayAfterSrcChange={false}
                  layout="stacked-reverse"
                  src={props.previewUrl}
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
    
  )
}

export default index