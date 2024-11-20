import React from "react";

import NavBar from "../components/navBar";
import HomeContent from "../components/homeContent";


const Home = () => {
    return(
        <div>
            <NavBar active="home" />
            <HomeContent/>
        </div>
    )
}
export default Home

