const d = document;
export function notify(ev) {
  console.log(ev.code);
  if(ev.code === "KeyQ" && ev.ctrlKey || ev.code === "KeyQ" && ev.altKey){
    alert("NUEVA NOTIfY")
  };
};

export function ball (ball){
  const d = document;
  const $ball = d.querySelector(ball);
  let x,y;
  console.log($ball)
  //ARROW KEYS Codes
  const keyCodes = ["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"];

  d.addEventListener("keydown",ev => {
    //Stop scrolling with up and down
    if(keyCodes.indexOf(ev.code) > -1) {
      ev.preventDefault();
    }
  
    if(ev.code === "ArrowUp"){
      alert($ball.style.top)
      console.log(ev)
      console.log($ball.style.top)
    };

  });
};