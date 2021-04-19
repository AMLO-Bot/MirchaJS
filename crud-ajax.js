const d = document;
const $table = d.querySelector(".crud-table"),
$template = d.getElementById("crud-template").content,
$form = d.querySelector(".crud-form"),
$title = d.querySelector(".crud-title"),
$fragment = d.createDocumentFragment();

const ajax = (options) => {
  let {url, method = "GET", successCb, errorCb, data = "null"} = options;
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);
  xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8")
  xhr.addEventListener("readystatechange", ev => {
    if (xhr.readyState !== 4) return;
    if (xhr.status > 199 && xhr.status < 300){
      let json = JSON.parse(xhr.response);
      successCb(json);
    }else{}
      let msg = xhr.statusText || "An unexpected error ocurred"
      errorCb(`An error ocurred /n ${xhr.status}: ${msg} `)
  })
  xhr.send(JSON.stringify(data));
}

function errorCb(error){
  return new Error(error);
}

function printKnigths (json) {  
  console.log(json);
  json.forEach(knigth => { 
    $template.querySelector(".name").textContent = knigth.name;
    $template.querySelector(".constellation").textContent = knigth.constellation;
    $template.querySelector(".metal").textContent = knigth.metal;
    const $newKnigth = d.importNode($template, true);
    $table.querySelector("tbody").appendChild($newKnigth)
  });
};

//Get all information to display in the tables
ajax({
  url:"http://127.0.0.1:8000/knigths",
  method: "GET",
  successCb: printKnigths,
  errorCb: errorCb,
  data: null
});

//Post a new Knigth when submitted the form
$form.addEventListener("submit", ev => {
  ev.preventDefault();
  
  ajax({
    url:"http://127.0.0.1:8000/knigths",
    method: "POST",
    successCb: null,
    errorCb: errorCb,
    data: {
      "name": $form.querySelector(`input[name="name"]`).value,
      "constellation": $form.querySelector(`input[name="constellation"]`).value,
      "metal": $form.querySelector(`input[name="metal"]`).value
    }
  });
  ajax({
    url:"http://127.0.0.1:8000/knigths",
    method: "GET",
    successCb: printKnigths,
    errorCb: errorCb,
    data: null
  });
});