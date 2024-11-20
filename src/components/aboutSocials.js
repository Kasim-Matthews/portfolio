import React from "react";
import "../styles/aboutSocials.css"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const AboutSocials = () => {
    return (
        <div className="a-socials">
            <div className="a-social">
                <a href={`mailto:${process.env.REACT_APP_EMAIL}`}>
                    <div className="a-social-icon">
                        <FontAwesomeIcon icon={faEnvelope} className="a-icon"/>
                        kasim14.km@gmail.com
                    </div>
                </a>
            </div>

            <div className="a-social">
                <a href={process.env.REACT_APP_GITHUB} target="_blank" rel="noreferrer">
                    <div className="a-social-icon">
                        <FontAwesomeIcon icon={faGithub} className="a-icon" />
                        Github
                    </div>
                </a>
            </div>

            <div className="a-social">
                <a href={process.env.REACT_APP_LINKEDIN} target="_blank" rel="noreferrer">
                    <div className="a-social-icon">
                        <FontAwesomeIcon icon={faLinkedin} className="a-icon" />
                        LinkedIn
                    </div>
                </a>
            </div>
        </div>
    )
}

export default AboutSocials