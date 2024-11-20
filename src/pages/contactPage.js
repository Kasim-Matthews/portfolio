import React from "react";

import NavBar from "../components/navBar";
import ContactContent from "../components/contactContent";

const Contact = () => {
    return(
        <div>
            <NavBar active="contact"/>
            <ContactContent/>
        </div>
    )
}

export default Contact