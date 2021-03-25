export function responsiveJS(id, mobileItem, deskItem,mQuery){
  const d = document,
  w = window;
  let breakpoint = w.matchMedia(mQuery),
  $parent = d.getElementById(id);

  const loadMobileItem = () => {
    $parent.innerHTML = Object.values(mobileItem);
  }; 
  const loadDeskItem = () => {
    $parent.innerHTML = Object.values(deskItem);
  };
  
  const loadLayout = (ev) => {
    if (ev.matches) { //Check wich display is being used in order to resposively pick which elements are going to be loaded up
      loadMobileItem()
    }else{
      loadDeskItem();
    }; 
  };
  
  //We may add an event listener to MediQueryList Object aka matchMedia(mQuery), to trigger when the mQuery changes state.
  breakpoint.addEventListener("change", (ev) => {
    loadLayout(ev);
  });
  loadLayout(breakpoint); //Load the multimedia elements in the page
  
  
  
};
