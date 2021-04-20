
const d = document;
  const $table = d.querySelector(".crud-table"),
  $template = d.getElementById("crud-template").content,
  $form = d.querySelector(".crud-form"),
  $title = d.querySelector(".crud-title"),
  $fragment = d.createDocumentFragment();

const getKnigths = async () => {
  try {
    const response = await axios("http://127.0.0.1:8000/knigths");
    console.log(response)
    if (!response.ok) throw {status: response.status, statusText: response.statusText}

    json.forEach(knigth => {
      $template.querySelector(".name").textContent = knigth.name;
      $template.querySelector(".constellation").textContent = knigth.constellation;
      // Add data attributes to edit and delete button to access retrieve data from knigth easily
      $template.querySelector(".edit").dataset.id = knigth.id;
      $template.querySelector(".edit").dataset.name = knigth.name;
      $template.querySelector(".edit").dataset.constellation = knigth.constellation;
      $template.querySelector(".delete").dataset.id = knigth.id;
  
      let $clone = d.importNode($template, true);
      $fragment.appendChild($clone);
    });
    $table.querySelector("tbody").appendChild($fragment);

  } catch (error) {
    console.warn(error.statusText);
    let msg = error.statusText || "An unexpected error ocurred";
    $table.insertAdjacentHTML("afterend", `<p><b>${error.status}:${msg}</b></p>`)
  }
}

const deleteKnigth = async (id) => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/knigths/${id}`,
      { method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    if (!response.ok) throw {status: response.status, statusText: response.statusText}
    location.reload()
    
  } catch (error) {
    console.warn(error.statusText);
    let msg = error.statusText || "An unexpected error ocurred";
    $table.insertAdjacentHTML("afterend", `<p><b>${error.status}:${msg}</b></p>`)
  }
}


const createKnigth = async () => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/knigths`,
    { 
      method: 'POST',
      body:JSON.stringify({
        name: $form.name.value,
        constellation: $form.constellation.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    }
    );
    if (!response.ok) throw {status: response.status, statusText: response.statusText}
    location.reload()
    
  } catch (error) {
    console.warn(error.statusText);
    let msg = error.statusText || "An unexpected error ocurred";
    $table.insertAdjacentHTML("afterend", `<p><b>${error.status}:${msg}</b></p>`)
  }
};

const updateKnigth = async () => {
  try {
    const response = await fetch(`http://127.0.0.1:8000/knigths/${$form.id.value}`,
    { 
      method: 'PUT',
      body:JSON.stringify({
        name: $form.name.value,
        constellation: $form.constellation.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    }
    );
    if (!response.ok) throw {status: response.status, statusText: response.statusText}
    location.reload()
    
  } catch (error) {
    let msg = response.statusText || "An unexpected error ocurred";
    console.warn(msg);
    $table.insertAdjacentHTML("afterend", `<p><b>${msg}</b></p>`)
  }
};

d.addEventListener("DOMContentLoaded", getKnigths);
d.addEventListener('submit', ev => {
  if (ev.target === $form) {
    ev.preventDefault()
    console.log($form.id.value)
    if (!$form.id.value) {
      // POST
      createKnigth();
      
    } else {
      // PUT
      updateKnigth();
    }
  }
})

d.addEventListener('click', (ev) => {
  if (ev.target.matches('.edit')) {
    $title.textContent = "Edit Knigth"
    $form.name.value = ev.target.dataset.name
    $form.constellation.value = ev.target.dataset.constellation
    $form.id.value = ev.target.dataset.id //set input hidden name id of form to check later if PUT or POST when submit form
  }
  if (ev.target.matches('.delete')) {
    let id = ev.target.dataset.id
    let isConfirmed = confirm(`Estas seguro de eliminar el caballero ${ev.target.dataset.id} ?`);
    if (isConfirmed) {
      deleteKnigth(id)
    };  
  };
})