import {useState} from 'react'
import SideBar from '../components/SideBar.js'
import CoinVisual from '../visualLogic/CoinVisual.js'

const coinInverse = (coin) =>{
    if(coin==="t")
        return "h"
    else
        return "t"
}
const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



function Coin(){
    const [bot,setBot] = useState("hhh");
    const [player,setPlayer] = useState("hhh");
    const [random,setRandom] = useState("");
    const [gameState,setGameState] = useState("Start")
    const ls = { // Logic State
        bot:bot,
        player:player,
        setBot:setBot,
        setPlayer:setPlayer,
        random:random,
        setRandom:setRandom,
        gameState:gameState,
        setGameState:setGameState,
        onCoin: (e) => {
            let side = e.target.style.type;
            if(side===undefined)
                side = "h"
           ls.setPlayer(ls.player[1]+ls.player[2]+side);
        },
        onLockSequence: () => {
            ls.setBot(coinInverse(ls.player[2])+ls.player[0]+ls.player[1]);
            ls.setGameState("Sequence Locked")
        },
        tick:async function tick(){
            let sequence = ls.random;
            let counter = 0;
            while(counter<300){
                sequence = sequence + (getRandomInt(0,1) ? "h" : "t");
                ls.setRandom(sequence);
                if(sequence.includes(ls.player)){
                    ls.setGameState("Player Wins")
                    return;
                }else if(sequence.includes(ls.bot)){
                    ls.setGameState("Bot Wins");
                    return;
                }
                await timeout(1500);
                counter++;
            }
        }
    }

    return(
        <SideBar  name1={"Door"} name2={"Baby"} name3={"Coin"} style={{ backgroundColor:"gray"}}>
            {CoinVisual(ls)}
        </SideBar>
        )
}
















/*
function Coin() {
    const [path,setPath] = React.useState(<CoinChooser setEnd={
        (coin) => {
            setPath(<CoinEnding coinMatch={coin}></CoinEnding>)
        }
    }></CoinChooser>);
    return (
        <SideBar name1="Baby" name2="Door" resolution="/SolveCoin">
            {path}
        </SideBar>
       
    )
}

const CoinEnding = ({coinMatch}) =>{
    const coinInverse = (coin) =>{
        if(coin==="Tails")
            return "Heads"
        else
            return "Tails"
    }
    const botCoin = (coins) =>{
        return[coinInverse(coins[2]),coins[0],coins[1]]
    }
    const lastResult = () => {
        if(coinResult.length<3){
            return []
        }else{
            return [coinResult[coinResult.length-3],coinResult[coinResult.length-2],coinResult[coinResult.length-1]];
        }
    }
    const [gameEnd,setGameEnd] = React.useState("")
    const [coinResult,setCoinResult] = React.useState([])
    const genCoin = () =>{
        const resultCoin = [...coinResult,(Math.floor(Math.random()*10) % 2) ? "Tails" : "Heads"]
        console.clear()
        console.log(coinMatch)
        console.log(botCoin(coinMatch))
        console.log(resultCoin)
        if(resultCoin.toString().includes(botCoin(coinMatch).toString()))
            setGameEnd("Bot Wins")
        else if(resultCoin.toString().includes(coinMatch.toString()))
            setGameEnd("You win")
        else
            setCoinResult(resultCoin);
    }

    return(
        <>
            <div>
                {coinMatch}
            </div>
            <div>
            <br></br>
                {botCoin(coinMatch)}
            </div>
            <br></br>
            <button onClick={() => genCoin()}>
                Next Coin
            </button>
            <div>
                {coinResult}
            </div>
            <div>
                {gameEnd}
            </div>

        </>
        )
}

const CoinChooser = ({setEnd}) =>{
    const [coin,setCoin] = React.useState(["Heads","Heads","Heads"]);
    const coinFlip = (state) =>{
        coin.shift();
        setCoin([...coin,state]);
    };

    const finalize = (coinS) =>{
        setEnd(coinS)
    }

    return(
        <>
        <div className="grid-container2">
                <div>
                    <button onClick={() => finalize(coin)}>Ready</button>
                </div>
                <div>
                    {coin}
                </div>
            </div>
            <div className="grid-container2">
                <button className="grid-container" style={{backgroundImage:"url(https://lh3.google.com/u/0/d/1V8XgkiVn6zlv7MqPRpRtI8_q0OrpqaSI=w1128-h937-iv1)"}} onClick={() => coinFlip("Tails") }>
                    <img src="https://lh3.google.com/u/0/d/1V8XgkiVn6zlv7MqPRpRtI8_q0OrpqaSI=w1128-h937-iv1"></img>
                </button>
                <button className="grid-container" style={{backgroundImage:"url(https://lh3.google.com/u/0/d/1qL4jBiKgSs0gPOy7ci6nMRCyIy5y5OTP=w1128-h937-iv1)"}} onClick={() => coinFlip("Heads")}>

                </button>
            </div>
        </>
    )

}

*/
export default Coin
