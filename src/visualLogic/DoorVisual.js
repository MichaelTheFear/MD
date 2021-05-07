import DoorImg from "../components/DoorSvg.js"

function PortArray(ls,divIndex){
    
    const ports=[<button style={{height:"900px",maxHeight:'100%',backgroundColor:"#732240",border:"0"}} key={0} value={0} onClick = {(e) => ls.onClickStart(e)} ls={ls}><DoorImg></DoorImg></button>,
    <button style={{height:"900px",maxHeight:'100%',backgroundColor:"#F22E52",border:"0"}} key={1} value={1} onClick = {(e) => ls.onClickStart(e)} ls={ls}><DoorImg></DoorImg></button>,
    <button style={{height:"900px",maxHeight:'100%',backgroundColor:"#730220",border:"0"}} key={2} value={2} onClick = {(e) => ls.onClickStart(e)} ls={ls}><DoorImg></DoorImg></button>];
    if(divIndex!==-1){
        ports[divIndex] = (<div style={{width:"33%",height:"300px",maxHeight:"50%",margin:"auto",paddingTop:"50%"}}>
            Porta Errada<br />
            Deseja Trocar de porta?
            <button style={{align:"center"}} value={true} onClick={(e) => ls.onClickChoice(e)}>Sim</button>
            <button style={{margin:"center"}} value={false} onClick={(e) => ls.onClickChoice(e)}>Não</button>
        </div>)
    }
    return ports
}

function Ending(message,ls){
    return(<div>{message}</div>)
}

function DoorVisual(ls){
    switch(ls.gameState){
        case "Start":
            return (PortArray(ls,-1));
        case "First Door Lose":
            return(Ending("Você perdeu na primeira porta",ls))
        case "Choose":
            return(PortArray(ls,ls.doorToOpen))
        case "Changed Win":
            return (Ending("Ganhou mudando de porta",ls));
        case "Win":
            return (Ending("Ganhou sem mudar de porta",ls))
        case "Changed Lose":
            return (Ending("Perdeu trocando de porta",ls))
        case "Lose":
            return (Ending("Perdeu sem trocar de porta"))
        case "But Why?": 
            return(<div>Explanation</div>)
        default:
            return(<div>Hmmm</div>)
    }
}

export default DoorVisual
