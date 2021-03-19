const d = document;
//ARROW KEYS Codes
const keyCodes = ["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"];

export function notify(ev) {
  if(ev.code === "KeyQ" && ev.ctrlKey || ev.code === "KeyQ" && ev.altKey){
    alert("NUEVA NOTIfY")
  };
};

export function ball (ev, ball){
  const $ball = d.querySelector(ball);
  let x = 0,
  y = 0;
  console.log(ev.keyCode)
  //Stop scrolling with up and down
  if(keyCodes.indexOf(ev.code) > -1) {
    ev.preventDefault();
  };
  
  switch (ev.keyCode) {
    case value:
      
      break;
  
    default:
      break;
  }
  
  if(ev.code === "ArrowUp"){
    y+=1;
    console.log(y)
    $ball.style.top = `${y}%`
  };

  
};