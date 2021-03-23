export function responsiveJS(links, iframes,mobileWidth = 400){
  //constants
  const d = document,
  $seccion4 = d.querySelector("#seccion4");
  
  //Multimedia ELements
  const mobileMultimedia = () => {
    console.log("TABLET");
    let iframesDiv = d.createElement("div");
    for (const iframeHTML in iframes) {
      iframesDiv.innerHTML += iframes[iframeHTML]
    };
    $seccion4.append(iframesDiv);
  };

  const tabletMultimedia = () => {
    console.log("MOBILE");
    for (const domain in links) {
      let aEl = d.createElement("a");
      aEl.setAttribute("href", links[domain]);
      aEl.setAttribute("target","_blank")
      aEl.textContent = `Ver ${domain} en página de origen`;
      // aEl.style.display = "block"
      // aEl.style.color = "red"
      console.log(aEl)
      $seccion4.appendChild(aEl);
    }; 
  };

  //Pick when DOMCOntentLoaded which element will be loaded depending of display size => computing power of device
  const pickLayout = () => {;
    if (window.matchMedia(`(min-width: ${mobileWidth}px)`).matches) {
      mobileMultimedia();
    } else { 
      tabletMultimedia();
    };
  }
  pickLayout();

  //
  // window.addEventListener("resize", (ev) => {
  //   console.log(ev.target.innerWidth)
  //   pickLayout();
  // });



};
