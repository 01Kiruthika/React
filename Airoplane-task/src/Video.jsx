import React, { useRef, useState } from "react";

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
        src="https://www.w3schools.com/html/mov_bbb.mp4"
      />

      <br />

      <button onClick={handlePlayPause}>
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
}

export default Video;