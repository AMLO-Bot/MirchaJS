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
  
  //Trigger movement on arrow keys
  switch (ev.code) {
    case "ArrowUp": 
      if ( limitBall.y > limits.y) y--;
      break;
    case "ArrowDown":
      y++
      break;
    case "ArrowLeft":
      x--
      break;
    case "ArrowRight":
      x++
      break;
    default:
      break;
  }
          
  //Detect collision with stage limits
   //Top limit
  if (limits.y + limits.height < limitBall.y + limitBall.height){y--}; //bottom limit
  if (limits.x > limitBall.x){x++}; //left limit
  if (limits.x + limits.width < limitBall.x + limitBall.width){x--}; //right limit
  
  //Apply ball transalation with css
  $ball.style.transform = `translate(${x*5}px, ${y*5}px)`;
};