import React from "react";

import "../styles/contactContent.css"
import ContactSocials from "./contactSocials";

const ContactContent = () => {
    return (
        <div className="contact-container">
            <div className="contact-texts">
                <div className="contact-introduction">
                    Let's get to work: Ways to
                    Contact me
                </div>

                <div className="contact-more">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>

            </div>
            <div>
                <ContactSocials/>
            </div>
        </div>
    )
}
export default ContactContent