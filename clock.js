const d = document;

export function digitalClock(clock, btnStart, btnStop) {
  if(typeof btnStart !== "string") return;
  if(typeof btnStop !== "string") return;

  //Para no tener problemas con el scope, se inicializa el timing que es donde guardaremos el intervalo  afuera del event listener
  let timingInterval;

  //Esto podria hacerse con innerHTML y seria bastante mas sencillo y rendidor pero bastante inseguro, so podría inyectar html malicioso desde ahi
  d.addEventListener("click", ev => {
    if(ev.target.matches(btnStart)){
      timingInterval = setInterval(() => {
        let timeNode = d.createTextNode(`${new Date().toLocaleTimeString()}\n`);
        d.querySelector(clock).appendChild(timeNode);  
        setTimeout(() => 
        d.querySelector(clock).removeChild(timeNode)
        ,1008);     
      }, 1010);
      
      ev.target.disabled = true;
      d.querySelector(btnStop).disabled = false;
    };
    
    if(ev.target.matches(btnStop)){
      clearInterval(timingInterval);
      ev.target.disabled = true
      d.querySelector(btnStart).disabled = false;
    };
 
  });
}


//Vamos a implementar de otra manera
export function alarm(alarm,btnAlarmOn,btnAlarmOff) {
  const $alarm = d.createElement("audio");

  d.addEventListener("click", ev => {
    if(ev.target.matches(btnAlarmOn)){
      $alarm.setAttribute("src",alarm);
      $alarm.loop = true;
      console.log($alarm.loop)
      $alarm.play();
      
      ev.target.disabled = true;
      d.querySelector(btnAlarmOff).disabled = false;
    };

    if(ev.target.matches(btnAlarmOff)){
      $alarm.pause();
      $alarm.currentTime = 0;

      ev.target.disabled = true;
      d.querySelector(btnAlarmOn).disabled = false;
    };
  })
}






//Es un desastre, no te rindas, ya tienes una pista, sigue intentandolo, refactor y sigue
//Disable button to avoid overload in dom, audio tag to set alarm, use temporizer to build clock
// export default function clockControls(clock,start, stop, alarmOn, alarmOff){
//   if(typeof alarmOn !== "string") return;
//   if(typeof alarmOff !== "string") return;
  
//   const toggleBtn = (btn,toggle) => d.querySelector(btn).setAttribute("disabled",toggle);
  
//   const d = document;
  
//   d.addEventListener("click", ev => {
//     if(ev.target.matches(start)){
//       toggleBtn(start,true);
//       var startTicking = setInterval(() => {
//         let time = new Date().toLocaleTimeString();
//         d.querySelector(clock).appendChild(d.createTextNode(`${time}\n`));
//         // d.querySelector(clock).removeChild();
        
//       }, 1000);
//     };

//     if(ev.target.matches(stop)){
//       toggleBtn(start,false)
//       toggleBtn(stop,true);
//       clearInterval(startTicking);
//     };
//   });
// };
