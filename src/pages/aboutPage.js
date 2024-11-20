import React from "react";

import NavBar from "../components/navBar";
import AboutContent from "../components/aboutContent";

const About = () => {
    return(
        <div>
            <NavBar active="about"/>
            <AboutContent />
        </div>
    )
}

export default About