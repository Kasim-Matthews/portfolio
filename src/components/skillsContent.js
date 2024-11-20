import React from "react";

import "../styles/skills.css"

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
                    <img src="https://img.logo.dev/mysql.com?token=pk_Z0gdWFuYSjG-oNkxSc5XWw" alt="postgresql" className="logos" />
                </div>

                <div className="category">
                    <h4>Frameworks & Technology</h4>
                    <img src="https://img.logo.dev/reactnative.dev?token=pk_Z0gdWFuYSjG-oNkxSc5XWw" alt="react" className="logos" />
                    <img src="https://img.logo.dev/nodejs.org?token=pk_Z0gdWFuYSjG-oNkxSc5XWw" alt="node" className="logos" />
                    <img src="https://img.logo.dev/expressjs.com?token=pk_Z0gdWFuYSjG-oNkxSc5XWw" alt="express" className="logos" />
                </div>

                <div className="category">
                    <h4>Tools & Platforms</h4>
                    <img src="https://img.logo.dev/github.com?token=pk_Z0gdWFuYSjG-oNkxSc5XWw" alt="github" className="logos" />
                    <img src="https://img.logo.dev/git-scm.com?token=pk_Z0gdWFuYSjG-oNkxSc5XWw" alt="git" className="logos" />
                    <img src="https://img.logo.dev/adobexdelements.com?token=pk_Z0gdWFuYSjG-oNkxSc5XWw" alt="xd" className="logos" />
                    <img src="https://img.logo.dev/figma.com?token=pk_Z0gdWFuYSjG-oNkxSc5XWw" alt="figma" className="logos" />
                </div>
            </div>

        </div>
    )
}

export default SkillsContent