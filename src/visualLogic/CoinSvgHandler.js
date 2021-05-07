function CoinSvgHandler(settings) {
    const style = {
        fill:"none",
        stroke:"#ffd000",
        strokeLinecap:"round",
        strokeLinejoin:"round",
        strokeWidth:"2px" ,
        type:"h"
    }
    let d;

    switch(settings){
        case "Heads Golden":
            style.fill="#e99e00"
            style.stroke="#ffd000"
            d="M14.8 9A2 2 0 0013 8h-2a2 2 0 000 4h2a2 2 0 010 4h-2a2 2 0 01-1.8-1M12 6v2m0 8v2"
            style.type="h";
            break;
        case "Tails Golden":
            style.fill="#e99e00"
            style.stroke="#ffd000"
            d="M12 8.5l2.69 3.5 3.36-2.33-1.34 5.83H7.29L6 9.67 9.31 12z"
            style.type="t";
            break;
            
        case "Heads Silver":
            style.fill="#343F40"
            style.stroke="#5f7373"
            d="M14.8 9A2 2 0 0013 8h-2a2 2 0 000 4h2a2 2 0 010 4h-2a2 2 0 01-1.8-1M12 6v2m0 8v2"
            style.type="h";
            break;
        default:
            style.fill="#e99e00"
            style.stroke="#ffd000"
            d="M14.8 9A2 2 0 0013 8h-2a2 2 0 000 4h2a2 2 0 010 4h-2a2 2 0 01-1.8-1M12 6v2m0 8v2"
            style.type="h";
            break;
            
    }
    return [style,d];
}

export default CoinSvgHandler
