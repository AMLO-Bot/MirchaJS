const d = document;
//ARROW KEYS Codes
const keyCodes = ["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"];

export function notify(ev) {
  if(ev.code === "KeyQ" && ev.ctrlKey || ev.code === "KeyQ" && ev.altKey){
    alert("NUEVA NOTIfY")
  };
};


let x = 0,
y = 0;
export function ball (ev, ball, stage){
  const $ball = d.querySelector(ball),
  $stage = d.querySelector(stage),
  limits = $stage.getBoundingClientRect(),
  limitBall = $ball.getBoundingClientRect();
  
  //Trigger movement on arrow keys, if statement to check collision
  switch (ev.code) {
    case "ArrowUp": 
      if ( limitBall.top > limits.top){
        ev.preventDefault();
        y--;
      };
      break;
    case "ArrowDown":
      if (limitBall.bottom < limits.bottom){
        ev.preventDefault();
        y++;
      };
      break;
    case "ArrowLeft":
      if (limitBall.left > limits.left){
        ev.preventDefault();
        x--;
      };
      break;
    case "ArrowRight":
      if (limitBall.right < limits.right){
        ev.preventDefault();
        x++;
      };
    default:
      break;
  }
  
  //Apply ball transalation with css
  $ball.style.transform = `translate(${x*5}px, ${y*5}px)`;
};