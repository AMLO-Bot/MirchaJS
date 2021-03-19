export function countdown(countdown,bdDate,bdMsg){
  //Countdown Days Hours Minutes Seconds
  //Starts as soon as dom ready
  //give a prize when count over
  const d = document,
  $countdown = d.querySelector(countdown);

  const date = new Date();
  let timeDay = 1,//date.getDay(),
  timeHr = 0,//date.getHours(),
  timeMin = 0,//date.getMinutes(),
  timeSec = 1;//date.getSeconds();
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
    
    //After check update count displayed
    $countdown.textContent = `${timeDay} días: ${timeHr} horas: ${timeMin} minutos: ${timeSec} segundos`;

    //Chack if countdown has ended
    if(timeDay < 0 ){
      clearInterval(time);
      $countdown.classList.add("countdown--ended");
      $countdown.textContent = bdMsg;
      timeDay = 0;
      timeHr = 0;
      timeMin = 0;
      timeSec = 0;
    };
    
    //Reduce 1 second to countdown
    timeSec--
    
  }, 1000);
};