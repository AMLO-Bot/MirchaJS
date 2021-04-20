const d = document;
const $table = d.querySelector(".crud-table"),
$template = d.getElementById("crud-template").content,
$form = d.querySelector(".crud-form"),
$title = d.querySelector(".crud-title"),
$fragment = d.createDocumentFragment();

// Use it only as a utility
const ajax = (options) => {
  let {url, method = "GET", successCb, errorCb, data = "null"} = options;
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);
  xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
  xhr.addEventListener("readystatechange", ev => {
    if (xhr.readyState !== 4) return;
    if (xhr.status > 199 && xhr.status < 300){
      let json = JSON.parse(xhr.response);
      successCb(json);
    }else{
      let msg = xhr.statusText || "An unexpected error ocurred";
      errorCb(`An error ocurred \n ${xhr.status}: ${msg} `);
    }
  });
  xhr.send(JSON.stringify(data));
};

const getAllKnigths = () => {  
  ajax({
    url:"http://127.0.0.1:8000/knigths",
    method: "GET",
    successCb: res => {
      res.forEach(knigth => { 
        $template.querySelector(".name").textContent = knigth.name;
        $template.querySelector(".constellation").textContent = knigth.constellation;
        $template.querySelector(".metal").textContent = knigth.metal;
        // Add data attributes to edit and delete button to access retrieve data from knigth easily
        $template.querySelector(".edit").dataset.id = knigth.id;
        $template.querySelector(".edit").dataset.name = knigth.name;
        $template.querySelector(".edit").dataset.constellation = knigth.constellation;
        $template.querySelector(".edit").dataset.metal = knigth.metal;

        $template.querySelector(".delete").dataset.id = knigth.id;

        let $clone = d.importNode($template, true);
        $fragment.appendChild($clone);
      });
      $table.querySelector("tbody").appendChild($fragment);
    },
    errorCb: error => {
      console.warn(error);
      $table.insertAdjacentHTML("afterend", `<p><b>${error}</b></p>`)
    },
    data: null
  }); 
};


//Entry Point Entry Point MAIN MAIN
  //Get all information to display in the tables
d.addEventListener("DOMContentLoaded", getAllKnigths);

//Post a new Knigth when submitted the form
d.addEventListener("submit", ev => {
  if (ev.target === $form) {
    ev.preventDefault();

    if (!ev.target.id.value) {
      //POST
      ajax({
        url: "http://127.0.0.1:8000/knigths",
        method: "POST",
        successCb: (res) => location.reload(),
        errorCb: (err) => $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`),
        data: {
          name: ev.target.name.value,
          constellation: ev.target.constellation.value,
          metal: ev.target.metal.value
        }
      });
       
    }else{
      // UPDATE
      ajax({
        url: `http://127.0.0.1:8000/knigths/${ev.target.id.value}`,
        method: "PUT",
        successCb: location.reload(),
        errorCb: (err) => $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`),
        data: {
          name: ev.target.name.value,
          constellation: ev.target.constellation.value,
          metal: ev.target.metal.value
        }
      });
      // $form.id.value = "";
    };
  };
});


  
d.addEventListener("click", (ev) => {

  if (ev.target.matches(".edit")){
    $title.textContent = "Edit Knigth"
    $form.name.value = ev.target.dataset.name
    $form.constellation.value = ev.target.dataset.constellation
    $form.metal.value = ev.target.dataset.metal
    $form.id.value = ev.target.dataset.id
  }
  if (ev.target.matches(".delete")) {
    let isDelete = confirm(`¿Estás seguro de eliminar el id ${ev.target.dataset.id}?`);

    if (isDelete) {
      //Delete - DELETE
      ajax({
        url: `http://localhost:8000/knigths/${ev.target.dataset.id}`,
        method: "DELETE",
        successCb: (res) => location.reload(),
        errorCb: (err) => alert(err),
        data: null
      });
    };
  };
});