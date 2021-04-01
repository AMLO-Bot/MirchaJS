const d = document;
export default function giveaway(prizeListClass, startBtnId){
  const $prizeList = d.querySelector(prizeListClass),
  $prizes = $prizeList.querySelectorAll("li");
  
  d.addEventListener("click", ev => {
    if(ev.target.matches(`#${startBtnId}`)){
      //Number between 0 and the length of the $prizeList
      let random = Math.floor($prizes.length*Math.random()); 
      alert(`FELICIDADES U just win a\n
      \\||  ${$prizes[random].innerText}  ||//\n 
      come and click your prize\n`);
      $prizes[random].querySelector("a").style.pointerEvents = "visible";
    };
  });
};