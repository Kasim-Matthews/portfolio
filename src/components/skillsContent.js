import React from "react";

import "../styles/skills.css"

import spring from "../img/springio-icon.svg"


const SkillsContent = () => {
    return (
        <div className="skills-container">
            <h3 className="header">Skills</h3>

            <div className="skills-categories">

                <div className="category">
                    <h4>Languages & Databases</h4>
                    <img src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png" alt="javascript" className="logos" />
                    <img src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png" alt="htlm" className="logos" />
                    <img src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/java/java.png" alt="java" className="logos" />
                    <img src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/css/css.png" alt="css" className="logos" />
                    <img src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png" alt="python" className="logos" />
                    <img src="https://img.logo.dev/postgresql.org?token=pk_Z0gdWFuYSjG-oNkxSc5XWw" alt="postgresql" className="logos" />
                    <img src="https://img.logo.dev/mysql.com?token=pk_Z0gdWFuYSjG-oNkxSc5XWw" alt="mySQL" className="logos" />
                </div>

                <div className="category">
                    <h4>Frameworks & Technology</h4>
                    <img src="https://img.logo.dev/reactnative.dev?token=pk_Z0gdWFuYSjG-oNkxSc5XWw" alt="react" className="logos" />
                    <img src="https://img.logo.dev/nodejs.org?token=pk_Z0gdWFuYSjG-oNkxSc5XWw" alt="node" className="logos" />
                    <img src="https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000" alt="express" className="logos" />
                    <img src={spring} alt="spring" className="logos" />
                    
                </div>

                <div className="category">
                    <h4>Tools & Platforms</h4>
                    <img src="https://img.logo.dev/github.com?token=pk_Z0gdWFuYSjG-oNkxSc5XWw" alt="github" className="logos" />
                    <img src="https://img.logo.dev/git-scm.com?token=pk_Z0gdWFuYSjG-oNkxSc5XWw" alt="git" className="logos" />
                    <img src="https://img.logo.dev/adobexdelements.com?token=pk_Z0gdWFuYSjG-oNkxSc5XWw" alt="adobeXd" className="logos" />
                    <img src="https://img.logo.dev/figma.com?token=pk_Z0gdWFuYSjG-oNkxSc5XWw" alt="figma" className="logos" />
                    <img src="https://cdn.sanity.io/images/34ent8ly/production/ec37a3660704e1fa2b4246c9a01ab34e145194ad-824x824.png" alt="figma" className="logos" />
                </div>
            </div>

        </div>
    )
}

export default SkillsContent