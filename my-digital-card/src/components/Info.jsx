import React from "react";
import avatar from "../avatar.png"


export default function Info() {
    return (
        <div className="info">
            <div className="img-cont">
                <img src={avatar} className="avatar"></img>
            </div>            
            <h2>Fazekas Adrienn</h2>
            <p>Junior Frontend Developer</p>
            <button className="email-btn">Email</button>
            <a href="https://www.linkedin.com/in/fazekasadrienn/" target="_blank"><button className="linkedin-btn" formTarget="_blank">LinkedIn</button></a>     
        </div>
    )
}