import React from 'react'
import "../App.css"
import Calendar from "../components/CalendarSvg.js"
import Door from "../components/DoorSvg.js"
import Coin from "../components/CoinSvg.js"

function Home(){
    return (
        <div className="grid-container">
            <a className="fit" style={{backgroundColor:"white"}} href="#/Door">
            <div style={{paddingTop:"100px"}}>
                <Door value={true}></Door>
            </div>
            </a>
            <a className="fit" style={{backgroundColor:"#5F7373"}} href="#/Baby">
            <div style={{paddingTop:"150px",maxWidth:"80%",paddingLeft:"10%"}}>
                <Calendar></Calendar>
            </div>
            </a>
            <a className="fit" style={{backgroundColor:"#343F40"}} href="#/Coin">
                <div style={{paddingTop:"150px",paddingLeft:"8%",maxWidth:"85%"}}>
                    <Coin settings={"Heads Silver"}></Coin>
                </div>
            </a>
        </div>
    )
}

export default Home
