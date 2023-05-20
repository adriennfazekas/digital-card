import React from "react";
import avatar from "../avatar.png"

export default function Info() {
    return (
        <div className="info">
            <img src={avatar} className="avatar"></img>
            <h1>Fazekas Adrienn</h1>
            <p>Junior Frontend Developer</p>
            <button className="email-btn">Email</button>
            <button className="linkedin-btn">LinkedIn</button>        
        </div>
    )
}