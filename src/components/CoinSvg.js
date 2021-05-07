/*
const decider = (settings) =>{
  const style = {}
  switch(settings){
    case "Tails Gold":
      style.fill="#e99e00";
      style.stroke="#ffd000";
      break;
    case "Heads Gold":
      style.fill="#e99e00";
      style.stroke="#ffd000";
      break;
    case "Heads Silver":
      style.fill="#343f40",
      style.stroke="#5f7373";
      break;
  }
  return style; 
};
const prefix__cls_3 = {
  fill:"none",
  stroke:"#ffd000",
  strokeLinecap:"round",
  strokeLinejoin:"round",
  strokeWidth:"2px"
};
const style = {
  fill:"",
  stroke:""
};
*/

import Handler from "../visualLogic/CoinSvgHandler"
function CoinSvg({value,onClick,settings}) {
  console.log(value)
  let click = () => {} 
  if(typeof onClick === "function")
    click = onClick;
  const [style,d] = Handler(settings);
  return (
        <svg
          id="prefix__Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          onClick={(e) => click(e)}
        >
          <defs>
          </defs>
          <circle
            cx={12}
            cy={12}
            r={9}
            stroke={style.stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            fill={style.fill}
          />
          
          <path
                style={style}
                d={d}
            />
        </svg>
  );
}

export default CoinSvg
