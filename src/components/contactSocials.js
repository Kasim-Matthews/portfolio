import React from "react";
import "../styles/contactSocials.css"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const ContactSocials = () => {
    return (
        <div className="c-socials">
            <div className="c-social">
                <a href={`mailto:${process.env.REACT_APP_EMAIL}`}>
                    <div className="c-social-icon">
                        <FontAwesomeIcon icon={faEnvelope} className="c-icon"/>
                        kasim14.km@gmail.com
                    </div>
                </a>
            </div>

            <div className="c-social">
                <a href={process.env.REACT_APP_GITHUB} target="_blank" rel="noreferrer">
                    <div className="c-social-icon">
                        <FontAwesomeIcon icon={faGithub} className="c-icon" />
                        Github
                    </div>
                </a>
            </div>

            <div className="c-social">
                <a href={process.env.REACT_APP_LINKEDIN} target="_blank" rel="noreferrer">
                    <div className="c-social-icon">
                        <FontAwesomeIcon icon={faLinkedin} className="c-icon" />
                        LinkedIn
                    </div>
                </a>
            </div>
        </div>
    )
}

export default ContactSocials