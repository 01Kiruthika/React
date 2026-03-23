import React, { useState } from "react";

const VoiceInput = () => {
    const [text, setText] = useState("");
    const [listening, setListening] = useState(false);

    let recognition = {};

    if ("webkitSpeechRecognition" in window) {
        recognition = new window.webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = "en-IN"; 

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            setText(transcript);
            setListening(false);
        };

        recognition.onerror = (event) => {
            console.log(event.error);
            setListening(false);
        };
    } else {
        alert("Your browser does not support Speech Recognition");
    }

    const startListening = () => {
        setListening(true);
        recognition.start();
    };

    const stopListening = () => {
        recognition.stop();
        setListening(false);
    };

    return (
        <div className="box">
            <h2> Voice to Text Converter</h2>
            <button onClick={startListening} disabled={listening}>
                Start Listening
            </button>
            <button onClick={stopListening} disabled={!listening}>
                Stop
            </button>
            <h3>Output:</h3>
            <p>{text}</p>
        </div>
    );
};

export default VoiceInput;