const d = document, 
n = navigator;

export default function geolocation(btnSelector, mapLink, status){
  const $mapLink = d.getElementById(mapLink),
  $status = d.getElementById(status);

  d.addEventListener("click", ev => {
    if(ev.target.matches(`#${btnSelector}`)){
      if(!navigator.geolocation) {
        $status.textContent = 'Geolocation is not supported by your browser';
      } else {
        $status.textContent = 'Locating…';
        const options = {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0 // Clear cache of position 
        };
        n.geolocation.getCurrentPosition(success, error, options);
      }

      function success (position){  
        $status.innerHTML = `
        <mark>Latitud</mark>: ${position.coords.latitude} °<br>
        <mark>Longitud</mark>: ${position.coords.longitude} °<br>
        <mark>Precision</mark>: ${position.coords.accuracy} m <br>
        `;
        $mapLink.style.display = "inline-block";
        $mapLink.style.color = getComputedStyle(document.documentElement).getPropertyValue('black');
        $mapLink.target = "_blank"
        $mapLink.innerHTML = "Visit your location in the map";
        $mapLink.setAttribute("href", `
        https://www.openstreetmap.org/#map=18/${position.coords.latitude}/${position.coords.longitude}
        `);
      };
      function error(){
        $status.innerText = `An error ocurred, try later`
      };
    };
  });

};