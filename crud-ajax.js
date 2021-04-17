const d = document;
const $table = d.querySelector(".crud-table"),
$template = d.getElementById("crud-template").content,
$form = d.querySelector(".crud-form"),
$title = d.querySelector(".crud-title"),
$fragment = d.createDocumentFragment();

//Request all the data to fill the table
const printData = function() {
  const xhrHandler = function() {
    if (xhr.readyState !== 4) return;
    if (xhr.status > 199 && xhr.status < 300){
      let json = JSON.parse(xhr.response);
      console.log(json);
      
      json.forEach(knigth => { 
        $template.querySelector(".name").textContent = knigth.name;
        $template.querySelector(".constellation").textContent = knigth.constellation;
        $template.querySelector(".metal").textContent = knigth.metal;
        const $newKnigth = d.importNode($template, true);
        $table.querySelector("tbody").appendChild($newKnigth)
      });
    };
  }
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "http://127.0.0.1:5000/knigths");
  xhr.addEventListener("readystatechange", xhrHandler, true);
  xhr.send();
};
// Printing all data in db.json at startup
printData();


// POST Method
// Delegating click event to form buttton to perform a POST method
// $form.addEventListener("submit", ev => {
//   ev.preventDefault();
  
//   const name = $form.querySelector(`input[name="name"]`).value,
//   constellation = $form.querySelector(`input[name="constellation"]`).value,
//   metal = $form.querySelector(`input[name="metal"]`).value;
  
//   const newKnigth = new FormData();
//   newKnigth.append("name", name);
//   newKnigth.append("constellation", constellation);
//   newKnigth.append("metal", metal)
  
//   const xhr = new XMLHttpRequest();
//   xhr.open("POST", "http://127.0.0.1:5000/knigths");
//   xhr.addEventListener("readystatechange", () => {
//     if (xhr.readyState !== 4) return;
//     if (xhr.status === 201){
//       printData();
//     }else{
//       return console.error("An error Ocurred, Couldn't fulfilled request")
//     }
//   })
//   xhr.send(newKnigth);
  
//   console.log("SUBMITTED")
// });




