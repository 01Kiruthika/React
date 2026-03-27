import React, { useRef } from "react";
import avatar from "./video/finallvideo.mp4";

const AssistantVideo = () => {
  const videoRef = useRef(null);

  const speakText = (message) => {
    const speech = new SpeechSynthesisUtterance(message);

    speech.lang = "en-US";

    // ▶️ play video when speaking
    speech.onstart = () => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    };

    // ⏸ pause video after speaking
    speech.onend = () => {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };

    window.speechSynthesis.speak(speech);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>👩 AI Assistant</h2>

      <video
        ref={videoRef}
        src={avatar}
        width="300"
        muted
      />

      <br /><br />

      <button onClick={() => speakText("Hello Kiruthika, I am your AI assistant")}>
        🔊 Speak
      </button>
    </div>
  );
};

export default AssistantVideo;