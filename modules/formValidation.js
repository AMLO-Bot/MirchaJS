const d = document;
// const emailPattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
//No es necesario estar pasando el selector del elemento a cada rato, en foundation o bootstrap lo que se hace es dar por entendido el marcado de los componentes y trabajar con eso.

export default function formValidation(){
  const $inputs = d.getElementById("comments").querySelectorAll(`.comments [required]`);

  $inputs.forEach(input => {
    const $span = d.createElement("span");
    $span.id = input.name;
    $span.textContent = input.dataset.invalidmsg;
    $span.classList.add("input-rejected", "none");
    input.insertAdjacentElement("afterend", $span);
  })

  d.addEventListener("keyup", ev => {
    if(ev.target.matches(".comments [required]")){
      let $input = ev.target,
      pattern = $input.pattern || $input.dataset.pattern;
      
      if (pattern && $input.value !== "") {
        let regex = new RegExp(pattern);
        return regex.exec($input.value)
        ? d.getElementById($input.name).classList.remove("input-rejected--active")
        : d.getElementById($input.name).classList.add("input-rejected--active");
      }

      if(!pattern){
        console.warn(`El input ${ev.target} no tiene pattern válido`)
      }
    }
  })
};

