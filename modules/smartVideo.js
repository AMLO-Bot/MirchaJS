const d = document;

export function smartVideo(videoClass) {
  //Fetch all smartVideos
  const $videos = d.getElementsByClassName(videoClass);
  //Initialize intersection observer and observe every video in $videos
  const options = {threshold: 0.7};
  const observer = new IntersectionObserver(videosHandler, options);
  for (const video of $videos) {
    observer.observe(video);
  }

  
  function videosHandler(entries, observer){
    entries.forEach(entry => {
      if(entry.isIntersecting) entry.target.play();
      if(!entry.isIntersecting) entry.target.pause();
    });
  }

  //Add pause/play to videos on tab changing
  //Convert HTMLCollection to array in order to use map
  const videos = [...$videos];
  function handleVisibilityChange() {
    if (d.hidden) videos.map(video => video.pause());
    if (!d.hidden) videos.map(video => video.play());
  }
  d.addEventListener("visibilitychange", handleVisibilityChange)
}