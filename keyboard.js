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

  //Stop scrolling with up and down
  if(keyCodes.indexOf(ev.code) > -1) {
    ev.preventDefault();
  };
  
  //Trigger movement on arrow keys, if statement to check collision
  switch (ev.code) {
    case "ArrowUp": 
      if ( limitBall.top > limits.top) y--;
      break;
    case "ArrowDown":
      if (limitBall.bottom < limits.bottom) y++;
      break;
    case "ArrowLeft":
      if (limitBall.left > limits.left) x--;
      break;
    case "ArrowRight":
      if (limitBall.right < limits.right) x++;
      break;
    default:
      break;
  }
  
  //Apply ball transalation with css
  $ball.style.transform = `translate(${x*5}px, ${y*5}px)`;
};