

function Start(ls){
    const {onInput,onEnd} = ls;
    return(
        <div style={{marginTop:"20%",fontSize:"24pt"}}>
            <div style={{marginLeft:"32%"}}>
                Número de pessoas:
            </div>
            <input style={{marginLeft:"34%",width:"200px"}} type="text" placeholder="Até 500" onChange={(e,str="people") => onInput(e,str)} ls={ls}></input>
            <div style={{marginLeft:"34%"}}>
                Probabilidade:
            </div>
            <input style={{marginLeft:"34%",width:"200px"}} type="text" placeholder="Em %" onChange={(e,str="prob") => onInput(e,str)} ls={ls}></input>
            <br />
            <button style={{marginLeft:"37%"}} onClick={() => onEnd()} ls={ls}>Vamo nessa</button>
        </div>
    );
}

function Ending(ls){
    const {setGameState,gameState,userProb,sysProb,people} = ls;
    return(
            <div style={{margin:"auto"}}>
                <h1>{gameState}</h1>
                <h2>Numero de pessoas: {people}</h2>
                <h2>Probabilidade simulada: {sysProb}</h2>
                <h2>Sua probabilidade: {userProb}</h2>
                <button onClick = {() => setGameState("But Why")}>Mas por que?</button>
            </div>
    )

}


function CalendarVisual(ls) {
    const {gameState} = ls;
    switch(gameState){
        case "Start":
            return(Start(ls));
        case "You win":
            return(Ending(ls));
        case "Almost there":
            return(Ending(ls));
        case "Not even close":
            return(Ending(ls));
        case "But Why":
            return(<div>On Construction </div>);
        case "Invalid input":
            return(<div>On Construction </div>);
        default:
            return(<div>On Construction </div>);
    }
}

export default CalendarVisual
