import React from "react";
import MediaCard from "./card"
import data from "../data/cardData"

const CardGrid = () => {
    return (
        <div style={{ display: "grid", marginLeft: "224px", gridTemplateColumns: "repeat(3, 470px)", gap: "50px", gridAutoRows: "minmax(100px, auto)" }}>
            {data.map((obj) => {
                return (
                    <MediaCard title={obj.Title} body={obj.body} img={obj.img} />
                )
            })}
        </div>
    )
}

export default CardGrid

