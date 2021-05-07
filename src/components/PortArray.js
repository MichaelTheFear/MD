function PortArray(logicState,divIndex){
    const ports=[<Port key={0} onClick = {logicState.onClickStart} logicState={logicState}></Port>,
    <Port key={1} onClick = {logicState.onClickStart} logicState={logicState}></Port>,
    <Port key={2} onClick = {logicState.onClickStart} logicState={logicState}></Port>]
    if(divIndex!==-1){
        ports[divIndex] === (<div>
            Deseja Trocar de porta?
            <button choice={true} onClick={}>Sim</button>
            <button choice={false} onClick={}>Não</button>
        </div>)
    }
    return ports
}