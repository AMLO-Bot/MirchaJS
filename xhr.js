const d = document;
(() => {
  const xhr = new XMLHttpRequest();
  const $list = d.getElementById("ajax-list");
  const $fragment = d.createDocumentFragment();

  xhr.addEventListener("readystatechange", (ev) => {
    if (xhr.readyState !== 4) return;

    if (xhr.status > 199 && xhr.status < 300) {
      const json = JSON.parse(xhr.responseText);
      json.forEach(el => {
        let $li = d.createElement("li");
        $li.textContent = `User: ${el.userId}   Title: ${el.title}`;
        $fragment.appendChild($li);
      });
      $list.appendChild($fragment);
    }else{
      let msg = xhr.responseText || "Unexpected Error Ocurred"
      console.warn(`${xhr.status}: ${msg}`)
    };
  });
  
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
  xhr.send()
})();

(()=>{
  const $fetch = d.getElementById("fetch");
  const $fragment = d.createDocumentFragment();
  //Tambien funciona si le pasas un *.json local
  fetch("./users.json")
    //Instead of checkin for status like in XHR the Fetch API give us a boolen "ok" to see if the request is good to go
    .then(res => res.ok? res.json() : Promise.reject()) 
    .then(json => {
      json.forEach(el => {
        let $li = d.createElement("li");
        $li.textContent = `Name: ${el.name}   email: ${el.email}`;
        $fragment.appendChild($li);
      })
      $fetch.appendChild($fragment)
    })
    .catch(err => {
      $fetch.textContent = `${err}: A Bad Thing Happened`;
    })
    .finally(
      console.log("I dont care what happened Im going to show anyway")
    );
})();

(() => {
  const $async = d.getElementById("async");
  const $fragment = d.createDocumentFragment();

  async function getData(){
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/users");
      let json =  await res.json();
      
      if (!res.ok) throw {status: res.status, statusText: res.statusText};
      console.log(json)
      json.forEach(el => {
        let $li = d.createElement("li");
        $li.textContent = `Name: ${el.username}   email: ${el.email}`;
        $fragment.appendChild($li);
      })
      $async.appendChild($fragment)
  
    } catch (err) {
      let msg = err.statusText || "Something Happened"
      $async.textContent = `Error ${err.status}: ${msg} \n Better Luck Next Time Cowboy !!!`
    };
  };
  getData();
})();
