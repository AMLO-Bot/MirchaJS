export function countdown(countdown,bdDate,bdMsg){
  //Countdown Days Hours Minutes Seconds
  //Starts as soon as dom ready
  //give a prize when count over
  const d = document,
  $countdown = d.querySelector(countdown),
  actualTime = new Date(),
  bdTime = new Date(bdDate);
  const totalTime =actualTime.getTime() - bdTime.getTime();
  //THIS IS BS
  let timeMonth = Math.abs(actualTime.getMonth() - bdTime.getMonth()),
  timeDay = Math.abs(actualTime.getDate() - bdTime.getDate()) + timeMonth*31,
  timeHr = 0,//Math.abs(actualTime.getHours() - bdTime.getHours()),
  timeMin = Math.abs(actualTime.getMinutes() - bdTime.getMinutes()),
  timeSec = 1//Math.abs(actualTime.getSeconds() - bdTime.getSeconds());
 

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