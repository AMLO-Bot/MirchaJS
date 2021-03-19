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
  $stage = d.querySelector(stage);
  const stageStyles = window.getComputedStyle($stage);

  //Stop scrolling with up and down
  if(keyCodes.indexOf(ev.code) > -1) {
    ev.preventDefault();
  };
  
  //Trigger movement on arrow keys
  switch (ev.code) {
    case "ArrowUp": 
      y--
      break;
    case "ArrowDown":
      // move("down");
      y++
      break;
    case "ArrowLeft":
      // move("left");
      x--
      break;
    case "ArrowRight":
      // move("right");
      x++
      break;
    default:
      break;
  }
  //Apply movement with css
  // stageStyles.getPropertyValue
  $ball.style.transform = `translate(${x*5}px, ${y*5}px)`;
};