import React from "react";

import NavBar from "../components/navBar";
import SkillsContent from "../components/skillsContent";

const Skills = () => {
    return(
        <div>
            <NavBar active="skills"/>
            <SkillsContent/>
        </div>
    )
}

export default Skills