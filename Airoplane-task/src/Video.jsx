import React, { useRef, useState } from "react";
import './App.css'
import Playvideo from './Playvideo/20541921-uhd_2160_3840_30fps.mp4'

function Video() {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div>
            <video
                ref={videoRef}
                width="400"
                src={Playvideo}
            />
           
            <br />

            <button onClick={handlePlayPause}>
                {isPlaying ? "Pause" : "Play"}
            </button>
        </div>
    );
}

export default Video;