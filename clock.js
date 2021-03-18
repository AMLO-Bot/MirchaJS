export default function digitalClock(clock, btnStart, btnStop) {
  if(typeof btnStart !== "string") return;
  if(typeof btnStop !== "string") return;
}

export default function alarm(btnAlarm) {
  console.log("alarm")
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
