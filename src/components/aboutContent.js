import React from "react";
import "../styles/about.css"
import pfp from "../img/pfp.jpg"
import AboutSocials from "./aboutSocials";

const AboutContent = () => {
    return (
        <div className="about-container">
            <div className="about-texts">
                <div className="about-introduction">
                    Hi, I'm Kasim. I live in
                    /*Enter place of living*/,
                    where I improve on my web
                    developing skills.
                </div>
                <div className="about-more">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </div>

            <div>
                <img className="about-myself" src={pfp} alt="pfp" />
                <AboutSocials />
            </div>
        </div>

    )
}

export default AboutContent