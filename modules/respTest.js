const d = document,
w = window;

export function respTest(closeBtnClass){
  let winOpenedByForm;
  d.addEventListener("submit", (ev) => {
    
    if(ev.target.matches("#respTest")){
      ev.preventDefault(); //prevent reload browser tab
      let url = d.getElementById("url").value,
      width = d.getElementById("width").value,
      height = d.getElementById("height").value;
      winOpenedByForm = w.open(url, "windowOpenedByForm", `resizable, scrollbar,status,innerWidth=${width},innerHeight=${height}`)    
    }
  });

  d.addEventListener("click", ev => {
    if (ev.target.matches(closeBtnClass)) {
      if(winOpenedByForm){
        winOpenedByForm.close();
      };
    }
  });

};