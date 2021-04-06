const d = document;
export function smartVideo(videoId) {
  const $smartVideo = d.getElementById(videoId);
  const options = {treshold: 0.7};
  const observer = new IntersectionObserver(videoHandler, options);
  observer.observe($smartVideo);
  
  function videoHandler(entry, observer){
    console.log(entry.target)
  }
}