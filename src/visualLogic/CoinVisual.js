import React from 'react'
import Coin from '../components/CoinSvg.js'


function ParseCoin(str){
    let muchGold = []
    
    for(let i in str){
        if(str[i]==='t'){
            muchGold = [...muchGold,<Coin key ={i} settings={"Tails Golden"}/>]
        }else{
            muchGold = [...muchGold,<Coin key ={i} settings={"Heads Golden"}/>]
        }
    }
    console.log(muchGold)
    return muchGold;
}

function Start({ls}){
    return(
        <div style={{maxHeight:"100%"}}>
            <div style={{display:"flex",maxHeight:"50%",height:"300px",minHeight:"30%"}}>
                <Coin value={"h"} onClick={(e) => ls.onCoin(e)} settings={"Heads Golden"}/>
                <Coin value={"t"} onClick={(e) => ls.onCoin(e)} settings={"Tails Golden"}/>
            </div>
            <div style={{display:"flex",maxHeight:"50%",height:"300px",minHeight:"30%"}}>{ParseCoin(ls.player)}</div>
            <button onClick={() => ls.onLockSequence()}>Terminar</button>
        </div>)    
}

function Game({ls}){
    return(
        <div style={{maxHeight:"50hv",height:"300px"}}>
            <div style={{display:"flex",width:"50%"}}>
                Player: {ParseCoin(ls.player)}
            </div>
            <div style={{display:"flex",width:"50%"}}>
                Bot: {ParseCoin(ls.bot)}
            </div>
            <div style={{display:"flex",height:"300px"}}>
                Sequence: {ParseCoin(ls.random)}
            </div>
            <button onClick ={() => ls.tick()}>Start</button>
        </div>)
}

function Ending({ls}){
    return(
    <div>
        <h1>
            {ls.gameState}!
        </h1>
        <div style={{display:"flex",height:"250px"}}>
            Sequence:{ParseCoin(ls.random)}
        </div>
        <div style={{display:"flex",height:"250px"}}>
            Bot:{ParseCoin(ls.bot)}
        </div>
        <div style={{display:"flex",height:"250px"}}>
            Player:{ParseCoin(ls.player)}
        </div>    
        <button onClick={() => ls.setGameState("But Why?")}>Mas por que?</button>   
    </div>)
}


function CoinVisual(ls) {
    switch(ls.gameState){
        case "Start":
            return(<Start ls={ls}></Start>);
        case "Sequence Locked":
            return(<Game ls={ls}></Game>)
        case "Player Wins":
            return(<Ending ls={ls}/>);
        case "Bot Wins":
            return(<Ending ls={ls}/>);
        case "But Why?":
            return(<div>Explanation</div>)
        default:
            return(<div>Hmmm</div>)
    }
}

export default CoinVisual
