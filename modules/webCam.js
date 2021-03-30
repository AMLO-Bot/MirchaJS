const d = document,
n = navigator,
w = window;
//La magia ocurre en los constraints qu pasamos como parametro a la promesa de getUsersMedia, ahi setteamos muchos parámetros
export function webCam(videoId, constraints) {
  const $video = d.getElementById(videoId);

  if (n.mediaDevices.getUserMedia) {
    n.mediaDevices.getUserMedia(constraints)
      .then((videoStream) => {
        $video.setAttribute("controls", true)
        $video.srcObject = videoStream;
        $video.play();
      })
      .catch(() => {
        $video.insertAdjacentText("beforebegin","WebCam Error, use of webcam might not be permitted by your browser")
        alert("Mmes no quiere que lo espíen")
      });
  };
};




