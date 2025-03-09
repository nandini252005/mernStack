// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

// const Room = () => {
//     const { roomId } = useParams();

//     function randomID(len) {
//         let result = '';
//         if (result) return result;
//         var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
//             maxPos = chars.length,
//             i;
//         len = len || 5;
//         for (i = 0; i < len; i++) {
//             result += chars.charAt(Math.floor(Math.random() * maxPos));
//         }
//         return result;
//     }

//     let myMeeting = async (element) => {
//         const appID = '7946855';
//         const serverSecret = "b9395d24d25d5099801f35180509566e";
//         const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, randomID(5), randomID(5));
//         const zp = ZegoUIKitPrebuilt.create(kitToken);
//         zp.joinRoom({
//             container: element,
//             scenario: {
//                 mode: ZegoUIKitPrebuilt.LiveStreaming,
//                 // config: {
//                 //     role,
//                 // },
//             },
//             sharedLinks: [{
//                 name: "Copy link",
//                 url: `http://localhost:5173/room/${roomId}`
//             }],
//         });
//     };

//     return (
//         <section>
//             <div ref={myMeeting}></div>
//         </section>
//     );
// };

// export default Room;


import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room = () => {
    const { roomId } = useParams();
    const meetingRef = useRef();

    // Function to generate a random ID of a given length
    function generateRandomID(length = 5) {
        let result = '';
        const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const maxIndex = characters.length;

        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * maxIndex));
        }
        return result;
    }

    const initializeMeeting = async (element) => {
        const appID = 7946855;
        const serverSecret = "b9395d24d25d5099801f35180509566e";
        
        // Generate a token for authentication
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID, 
            serverSecret, 
            roomId, 
            generateRandomID(), 
            generateRandomID()
        );

        // Create the meeting instance
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        
        // Configure and join the room
        zp.joinRoom({
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.LiveStreaming,
            },
            sharedLinks: [{
                name: "Copy link",
                url: `http://localhost:5173/room/${roomId}`
            }],
        });
    };

    useEffect(() => {
        initializeMeeting(meetingRef.current);
    }, []); // Runs only once when the component mounts

    return (
        <section>
            <div ref={meetingRef}></div>
        </section>
    );
};

export default Room;
