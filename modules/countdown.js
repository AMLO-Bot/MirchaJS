export function countdown(count){
  //Countdown Days Hours Minutes Seconds
  //Starts as soon as dom ready
  //give a prize when count over
  const d = document,
  $count = d.querySelector(count);

  const date = new Date();
  let timeDay = date.getDay(),
  timeHr = date.getHours(),
  timeMin = date.getMinutes(),
  timeSec = date.getSeconds();
  console.log(date)
  const time = setInterval(() => {
    
    //Check time and reset Sec,Min,Hr,Days if needed
    if(timeSec < 0){
      timeMin--;
      timeSec = 1;
    };

    if(timeMin < 0){
      timeHr--
      timeMin = 1;
    };

    if(timeHr < 0){
      timeDay--
      timeHr = 1;
    };
    //Chack if countdown has ended
    if(timeDay < 0 ){
      clearInterval(time);
      alert("Hooray");
      timeDay = 0;
      timeHr = 0;
      timeMin = 0;
      timeSec = 0;
    };
    
    //Print countdown
    $count.textContent = `${timeDay} días: ${timeHr} horas: ${timeMin} minutos: ${timeSec} segundos`;
    //Reduce 1 second to countdown
    timeSec--
  }, 1000);
};