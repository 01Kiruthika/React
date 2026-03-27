import React, { useState, useEffect, useRef } from "react";
import { speakTamil } from "./api/tts.jsx";

const VoiceInput = () => {
    const [displayText, setDisplayText] = useState("");
    const [listening, setListening] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [language, setLanguage] = useState("en"); 
    const typingRef = useRef(null);

    const recognitionRef = useRef(null);

    useEffect(() => {
        if ("webkitSpeechRecognition" in window) {
            const recognition = new window.webkitSpeechRecognition();

            recognition.continuous = false;
            recognition.interimResults = false;
            recognition.lang = language === "ta" ? "ta-IN" : "en-IN";

            recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;

                setListening(false);
                typeText(transcript);

                setTimeout(() => {
                    const reply =
                        language === "ta"
                            ? transcript
                            : transcript;

                    speakText(reply);
                }, 500);
            };

            recognition.onerror = () => {
                setListening(false);
            };

            recognitionRef.current = recognition;
        }
    }, [language]);

    const startListening = () => {
        if (!recognitionRef.current) return;

        //  Clear previous text
        setDisplayText("");

        // Stop previous typing
        if (typingRef.current) {
            clearInterval(typingRef.current);
        }

        // Stop previous speech
        window.speechSynthesis.cancel();

        recognitionRef.current.start();
        setListening(true);
    };

    const stopAll = () => {
        // Stop mic
        if (recognitionRef.current) {
            recognitionRef.current.stop();
        }

        // Stop speech
        window.speechSynthesis.cancel();

        // Stop typing animation
        if (typingRef.current) {
            clearInterval(typingRef.current);
        }

        setListening(false);
        setIsSpeaking(false);
    };

    const speakText = (text) => {
        if (language === "ta") {
            speakTamil(text); 
        } else {
            const speech = new SpeechSynthesisUtterance(text);
            speech.lang = "en-US";
            window.speechSynthesis.speak(speech);
        }
    };


    const typeText = (text) => {
        let i = 0;
        setDisplayText("");

        // clear old interval
        if (typingRef.current) {
            clearInterval(typingRef.current);
        }

        typingRef.current = setInterval(() => {
            setDisplayText((prev) => prev + text.charAt(i));
            i++;

            if (i === text.length) {
                clearInterval(typingRef.current);
            }
        }, 40);
    };

    return (
        <div className="container">
            <h2>voice to Text converter</h2>

         
            <div
                className={`circle ${listening ? "listening" : isSpeaking ? "speaking" : ""
                    }`}
            ></div>

            {/* Status */}
            <h3>
                {listening
                    ? "Listening..."
                    : isSpeaking
                        ? "Speaking..."
                        : "Ready"}
            </h3>

            {/* Text */}
            <div className="textBox">{displayText}</div>

            {/* Buttons */}
            <div className="buttons">
                <button onClick={startListening} disabled={listening}>
                    Start
                </button>

                <button onClick={stopAll}>
                    Stop
                </button>

                <button onClick={() => setLanguage(language === "en" ? "ta" : "en")}>
                    {language === "en" ? "Turn on Tamil" : "Turn on English"}
                </button>
            </div>
        </div>
    );
};

export default VoiceInput;