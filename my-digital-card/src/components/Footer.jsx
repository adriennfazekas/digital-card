import React from "react";
import githubIcon from "../images/githubIcon.png"
import instagramIcon from "../images/instagramIcon.png"
import facebookIcon from "../images/FacebookIcon.png"

export default function Footer() {
    return (
        <div className="footer">
            <a href="https://github.com/adriennfazekas" target="_blank"><img src={githubIcon}></img></a>
            <a href="https://www.instagram.com/dinnyeslany/" target="_blank"><img src={instagramIcon}></img></a>
            <a href="https://www.facebook.com/adrienn.fazekas.17/" target="_blank"><img src={facebookIcon}></img></a>
        </div>
    )
}