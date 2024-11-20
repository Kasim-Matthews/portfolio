import React from "react";
import NavBar from "../components/navBar";
import PortfolioContent from "../components/portfolioContent";


const Portfolio = () => {
    return(
        <div>
            <NavBar active="portfolio"/>
            <PortfolioContent />
        </div>
    )
}

export default Portfolio