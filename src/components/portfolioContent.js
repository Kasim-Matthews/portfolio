import React from "react";

import CardGrid from "./cardGrid";
import "../styles/portfolio.css"

const PortfolioContent = () => {
    return (
        <div>
            <div className="container">
                <div className="heading">
                    Things I have created and currently
                    working on
                </div>
                <div className="subtext">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                </div>
            </div>
            <CardGrid/>
        </div>
    )
}

export default PortfolioContent