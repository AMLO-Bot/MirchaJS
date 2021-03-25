const d = document,
n = navigator;
//La magia ocurre en los constraints qu pasamos como parametro a la promesa de getUsersMedia, ahi setteamos muchos parámetros
export function webCam(videoId, constraints) {
  const $video = d.getElementById(videoId);
  n.mediaDevices.getUserMedia(constraints)
    .then((videoStream) => {
      $video.srcObject = videoStream;
    })
    .catch(() => {
      alert("Mmes no quiere que lo espíen")
    });
};





