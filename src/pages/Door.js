import {useState} from 'react'
import SideBar from '../components/SideBar.js'
import DoorVisual from '../visualLogic/DoorVisual.js'
const getRandomInt = (min, max) => {
    if(min>max){
        const aux = min;
        max = min;
        min = aux; 
    }
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const removeElement = (array, elem) => {
    let index = array.indexOf(elem);
    if (index > -1) {
        array.splice(index, 1);
    }
    return array;
}
const findDoor = (allDoors,door_we_dont_want) =>{
    let arr = [];
    for(let x of door_we_dont_want) {
        arr = removeElement(allDoors,parseInt(x))
    }
    return arr;
}



//rename to logicDoor.js

function Door() {
    const [gameState,setGameState] = useState("Start");
    const [winningDoor,__] = useState(getRandomInt(0,2));
    const [doorToOpen,setDoorToOpen] = useState(-1);
    const [userDoor,setUserDoor] = useState(-1);
    const ls ={ //logicState
        gameState: gameState,
        setGameState:setGameState,
        winningDoor:winningDoor,
        doorToOpen:doorToOpen,
        setDoorToOpen:setDoorToOpen,
        userDoor:userDoor,
        setUserDoor:setUserDoor,
        onClickStart: (e) =>{
            const preUserDoor = e.target.value;
            const doorOpenned = findDoor([0,1,2],[preUserDoor])[getRandomInt(0,1)]; 
            if(doorOpenned===winningDoor){
                ls.setGameState("First Door Lose");
            }else{
                ls.setUserDoor(preUserDoor);
                ls.setDoorToOpen(doorOpenned);
                ls.setGameState("Choose");
            }
            return;
        },
        onClickChoice: (e) =>{
            const changed = e.target.value;
            let door = ls.userDoor;
            let state = "";
            if(changed === 'true'){
                state = "Changed ";
                door = findDoor([0,1,2],[ls.userDoor,ls.doorToOpen])[0]
            }
            setGameState(state+((findDoor([0,1,2],[ls.doorToOpen,door])[0]===ls.winningDoor ? "Lose" : "Win")));
            return;
        }
    };
    return (
        <SideBar  name1={"Baby"} name2={"Coin"} name3={"Door"} style={{ backgroundColor:"green"}}>
            <div style={{display: "grid",gridTemplateColumns:"1fr 1fr 1fr"}}>
                {DoorVisual(ls)}
            </div>
        </SideBar>);
    
}





//TODO refazer a logica 


export default Door
