import React from 'react'
 
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

function Room() {
    const {roomId}=useParams();

    const myMeeting=async(element )=>{
        const appID = 1646624451;
        const serverSecret = "8edb8c6af9cc40298ca6d574755aed5e";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(
          appID,
          serverSecret,
          roomId,
          Date.now().toString(),
          "Animesh"
        );
        const zp = ZegoUIKitPrebuilt.create(kitToken);

        zp.joinRoom({
            container: element,
            
            scenario: {
             mode: ZegoUIKitPrebuilt.VideoConference,
            },
       });
    };

  return (
    <div className="room">
        <div ref={myMeeting}/>
    </div>
  )
}

export default Room