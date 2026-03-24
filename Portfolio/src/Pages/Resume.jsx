import React from "react";
import "./Resume.css";

const Resume = () => {
    return (
        <>
            <div className="title">
                <h3>Resume</h3>
            </div>
            <div className="resume-container">
                {/* <h3>Resume</h3> */}


                <div className="resume-left">

                    <div className="card profile-card">
                        <h2>Kiruthika Sundaram</h2>
                        <h4 className="role">
                            B.Sc Computer Science | Aspiring Full Stack Developer
                        </h4>

                        <p>Karur, Tamil Nadu</p>
                        <p>kiruthikasundaram2004@gmail.com</p>
                        <p>9159620313</p>
                    </div>

                    <div className="card summary-card">
                        <h3>Professional Summary</h3>
                        <p>
                            Passionate Computer Science student with strong interest in
                            MERN Stack Development. Skilled in building responsive web
                            applications and eager to explore modern technologies.
                        </p>
                    </div>

                </div>


                <div className="resume-right">

                    <div className="card education-card">
                        <h3>Education</h3>

                        <div className="edu-item">
                            <h4>B.Sc Computer Science</h4>
                            <p>Bishop Heber College</p>
                            <span>2022 - 2025</span>
                        </div>

                        <div className="edu-item">
                            <h4>HSC</h4>
                            <p>C.S.I Methodist Girls Hr Sec School</p>
                            <span>2021 - 2022</span>
                        </div>

                        <div className="edu-item">
                            <h4>SSLC</h4>
                            <p>C.S.I Methodist Girls Hr Sec School</p>
                            <span>2019 - 2020</span>
                        </div>
                    </div>

                    <div className="card project-card">
                        <h3>Projects</h3>

                        <ul>
                            <li>Smart Hospital Management System (React)</li>
                            <li>Ambulance Detection using Computer Vision</li>
                            <li>Late Payment Prediction (Machine Learning)</li>
                        </ul>
                    </div>

                </div>

                <div className="timeline"></div>

            </div>
        </>
    );
};

export default Resume;