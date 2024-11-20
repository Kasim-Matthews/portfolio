import React from "react";
import "../styles/homeSocials.css"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const HomeSocials = () => {
    return (
        <div className="socials">
            <div className="social">
                <a href={`mailto:${process.env.REACT_APP_EMAIL}`}>
                    <div className="social-icon">
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </div>
                </a>
            </div>

            <div className="social">
                <a href={process.env.REACT_APP_GITHUB} target="_blank" rel="noreferrer">
                    <div className="social-icon">
                        <FontAwesomeIcon icon={faGithub} className="social-icon" />
                    </div>
                </a>
            </div>

            <div className="social">
                <a href={process.env.REACT_APP_LINKEDIN} target="_blank" rel="noreferrer">
                    <div className="social-icon">
                        <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
                    </div>
                </a>
            </div>
        </div>
    )
}
export default HomeSocials;