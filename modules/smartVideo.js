const d = document;

export function smartVideo() {
  //Fetch all smartVideos with querySelector instead of ClassName to be able to apply .forEach
  const $videos = d.querySelectorAll("video[data-videoSmart]");
  const options = {threshold: 0.7};
  const observer = new IntersectionObserver(videosHandler, options);
  $videos.forEach(video => observer.observe(video));

  function videosHandler(entries, observer){
    entries.forEach(entry => {
      if(entry.isIntersecting) entry.target.play();
      if(!entry.isIntersecting) entry.target.pause();
    });
  }

  function handleVisibilityChange() {
    if (d.hidden) $videos.forEach(video => video.pause());
    if (!d.hidden) $videos.forEach(video => video.play());
  }
  d.addEventListener("visibilitychange", handleVisibilityChange);
}