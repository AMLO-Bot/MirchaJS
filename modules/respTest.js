const d = document,
w = window;

export function respTest(closeBtnClass){
  let winOpenedByForm;
  d.addEventListener("submit", (ev) => {
    ev.preventDefault(); //prevent reload browser tab
    let url = d.getElementById("url").value,
    width = d.getElementById("width").value,
    height = d.getElementById("height").value;
    winOpenedByForm = w.open(url, "windowOpenedByForm", `resizable, scrollbar,status,innerWidth=${width},innerHeight=${height}`)    
  });

  d.addEventListener("click", ev => {
    console.log(ev.target)
    if (ev.target.matches(closeBtnClass)) {
      if(winOpenedByForm){
        winOpenedByForm.close();
      };
    }
  });

};