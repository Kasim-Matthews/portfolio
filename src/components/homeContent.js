import React from "react";
import "../styles/homeContent.css"
import HomeSocials from './homeSocials';
import pfp from"../img/pfp.jpg"
import { ReactTyped } from "react-typed"


const HomeContent = () => {
    return (
        <div className="home-container">
            <div className="home-texts">
                <div className="home-introduction">
                    I'm <span className="my-name">Kasim</span> <br/>
                    <ReactTyped strings={["Full-stack web app developer", "Software Developer", "Front-end developer", "Back-end developer"]} 
                    typeSpeed={100} loop backSpeed={50} backDelay={20}/>
                </div>
                <div className="home-more">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <HomeSocials />
            </div>
            <img className="myself" src={pfp} alt="pfp"/>
        </div>
    )
}
export default HomeContent