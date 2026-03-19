import React from 'react'
import './App.css'
import { useRef } from 'react';

const Slide = () => {
    const bottomRef = useRef()

    const scrollToBottom = () => {
        bottomRef.current.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div className='slide-conatiner'>

            <div className="box box1">box1</div>
            <div className="box box2">box2</div>
            <div className="box box3">box3</div>
            <div className="box box4">box4</div>
            <div className="box box5">box5</div>




        </div>
    )
}

export default Slide
