import findDoor from './mathUtil.js'
import getRandomInt from './mathUtil.js'
import Port from '../components/Port.js'

const secondPathFind = (state) =>{
    switch(state){
        case "Changed Win":
            return (<div>
                Mestre da Probabilidade
            </div>);
            break;
        case "Win":
            return (<div>
                Extremamente sortudo
            </div>)
            break;
        case "Changed Lose":
            return (<div>
                Perdeu, mas fez o certo
            </div>)
            break;
        case "Lose":
            return (<div>
                Esperado
            </div>)
            break;
        default:
            return (<div>
                Error
            </div>)
            
    }
}
const onClick = (doorObj,index,changed) => {
    let state =""
    if(changed){
        state = "Changed "
        index= findDoor(index,doorObj.firstChoice)[0]
    }
    if(index===doorObj.rightDoor){
        state = doorObj.state + "Win"
    }else{
        state = doorObj.state + "Lose"
    }
    doorObj.setRender(secondPathFind(state));
}

const genDiv = (index,doorObj) => {
    return(<div index={index} key={index}>
        Deseja trocar de porta?
        <button onClick={() => onClick(doorObj,index,true)}>Sim</button>
        <button onClick={() => onClick(doorObj,index,false)}>Não</button>
    </div>);
}

const genPort = (index) => {
    return(<Port index={index} key ={index} onClick={()=>{console.log("Hello There")}}></Port>)
}

const genNewArray = (div,setRender) =>{
    let array = [];
    for(let index = 0;index<2;index++){
        if(div===index){
            array[index] = [...array,genDiv(index,setRender)];
        }else{
            array[index] = [...array,genPort(index,setRender)];
        }
    }
    return array;
}

const setTagOn = (doorObj,indexDiv) =>{
    doorObj.setRender(genNewArray(indexDiv),doorObj);
}

export default (setRender,index) =>{
    console.log("test")
    const rightDoor = getRandomInt(0,2);//useState
    const doorToOpen = findDoor([1,2,3],[index])[getRandomInt(0,1)];//useState
    // porta que o utilizador quer 
    // os estados do jogo

    if(doorToOpen===rightDoor){
        setRender(<div>Triste</div>)
    }else{
        setTagOn({
            setRender:setRender,
            rightDoor:rightDoor,
            firstChoice:index
        },doorToOpen);
    }
}

