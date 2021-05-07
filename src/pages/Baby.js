import {useState} from 'react'
import SideBar from '../components/SideBar.js'
import CalendarVisual from '../visualLogic/CalendarVisual.js'

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const babiesResolve = (baby_num) =>{
    let rep = 0;
    let birthdays = [];
    let rand_number = 0;
    let check = false;
    for(let i = 0;i<1000;i++){
        birthdays = [];
        for(let j=0;j<baby_num;j++){
            rand_number = getRandomInt(1,366)
            if(birthdays.includes(rand_number) === true){
                check = true;
                break;
            }
            birthdays.push(rand_number);
        }
        if(check){
            rep++;
            check=false;
        }
    }
    return rep/10;
}


function Baby(){
    const [gameState,setGameState] = useState("Start");
    const [people,setPeople] = useState(1);
    const [userProb,setUserProb] = useState(1);
    const [sysProb,setSysProb] = useState(1);
    const ls = {
        people: people,
        setPeople: setPeople,
        userProb:userProb,
        setUserProb:setUserProb,
        sysProb:sysProb,
        setSysProb:setSysProb,
        gameState:gameState,
        setGameState:setGameState,
        onInput: (e,str) =>{
            if(str==="prob"){
                ls.setUserProb(Number(e.target.value));
            }else{
                ls.setPeople(Number(e.target.value));
            }
            ls.setSysProb(babiesResolve(people));
        },
        onEnd: () =>{
            if(-5<(ls.sysProb-ls.userProb) && (ls.sysProb-userProb)<5){
                ls.setGameState("You win");
            }else if(-10<(ls.sysProb-ls.userProb) && (ls.sysProb-ls.userProb)<10){
                ls.setGameState("Almost there");
            }else{
                ls.setGameState("Not even close");
            }
        }
    }


    return (
        <SideBar name1={"Door"} name2={"Coin"} name3={"Baby"} style={{backgroundColor:"blue"}}>
            {CalendarVisual(ls)}
        </SideBar>
    );
}


/*

const errorDiviation = (num1,num2) =>{
        if(num2===0){
            return ""
        }
        console.log(`${num1} // ${num2} // ${num1-num2}`);
        if(-5<(num1-num2) && (num1-num2)<5){
            return "You Win";
        }else if(-10<(num1-num2) && (num1-num2)<10){
            return "Almost there"
        }else{
            return "Not even close"
        }
}



const boxEndResolve = (result) => {
    const style = {
        backgroundColor:"#db9ac6",
    }
    if(result==="You Win"){
        style.backgroundColor="#95cc6a";
    }else if(result==="Almost there"){
        style.backgroundColor="#d6e324";
    }else if(result==="Not even close"){
        style.backgroundColor="#fa3232";
    }
    return style;
}
    

function Baby() {
    const [styleBC,setStyleBC] = React.useState({backgroundColor:"#cfbcc9"})
    const [path,setPath] = React.useState(<PreBaby onSent ={
        (value,inputValue,probability) => {
            const errD = errorDiviation(value,probability);
            setStyleBC(boxEndResolve(errD));
            setPath(<EndBaby value={value} inputValue={inputValue} probability={probability} result={errD}></EndBaby>);
        }}></PreBaby>)
    return (
        <div style={styleBC}>
        <SideBar name1="Door" name2="Coin" resolution="/SolveBaby" >
            {path}
        </SideBar>
        </div>
    )
}

function EndBaby({value,inputValue,probability,result}){
    return(
        <div>
            <h1 className="babyResult" style={{fontSize:"90px",color:"black"}}>{result}
                <div style={{fontSize:"30px"}}>
                Our aproximation {value}%
                </div>
                <div style={{fontSize:"30px"}}>
                Number of babies {inputValue}
                </div>
                <div style={{fontSize:"30px"}}>
                Your guess {probability}%
                </div>
            </h1>
        </div>
    )
}

function PreBaby({onSent}){
    const [inputValue,setInputValue] = React.useState(0);
    const [value,setValue] = React.useState(0);
    const [probability,setProbability] = React.useState("");
    const onChangeFunc = (e) =>{
        const aux = parseInt(e.target.value);
        setInputValue(aux);
        setValue(babies_resolve(aux));        
    }
    const onChangeProb = (e) => {
        const aux = parseInt(e.target.value)
        setProbability(aux);
    }
    const finalize = () =>{
        onSent(value,inputValue,probability);
    }
    return(
        <div className="babyResult" style={{fontSize:"60px",color:"black"}}>
            <div>Probability</div>
                <input placeholder="Guess the probability" inputValue={probability} onChange={onChangeProb}></input>
            
            <div>
                <div>Baby quantity</div>
                <input placeholder="Number of babies" inputValue={inputValue} onChange={onChangeFunc}/>
            </div>
            <button className="buttonBaby" onClick={() =>{finalize()}}>Send</button>
        </div>
    )
}

export default Baby

//TODO terminar amanha ( dividir em funçoes para o button)
*/
export default Baby