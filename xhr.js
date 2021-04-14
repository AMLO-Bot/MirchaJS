const d = document;
//XHR
(() => {
  const xhr = new XMLHttpRequest();
  const $list = d.getElementById("xhr");
  const $fragment = d.createDocumentFragment();
  
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  xhr.addEventListener("readystatechange", (ev) => {
    if (xhr.readyState !== 4) return;

    if (xhr.status > 199 && xhr.status < 300) {
      const json = JSON.parse(xhr.responseText);
      json.forEach(el => {
        let $li = d.createElement("li");
        $li.textContent = `User: ${el.name} --- email: ${el.email}`;
        $fragment.appendChild($li);
      });
      $list.appendChild($fragment);
    }else{
      let msg = xhr.responseText || "Unexpected Error Ocurred"
      console.warn(`${xhr.status}: ${msg}`)
    };
  });
  xhr.send()
  
})();
//FETCH Promises
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
        $li.textContent = `Name: ${el.name} --- email: ${el.email}`;
        $fragment.appendChild($li);
      })
      $fetch.appendChild($fragment)
    })
    .catch(err => {
      $fetch.textContent = `${err}: A Bad Thing Happened`;
    })
})();
// FETCH Async-Await
(() => {
  const $async = d.getElementById("async");
  const $fragment = d.createDocumentFragment();

  async function getData(){
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/users");
      let json =  await res.json();
      
      if (!res.ok) throw {status: res.status, statusText: res.statusText};
      json.forEach(el => {
        let $li = d.createElement("li");
        $li.textContent = `Name: ${el.username} --- email: ${el.email}`;
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
//AXIOS simplifies .then's, handles status code in the back (error handling), data is already parsed in json or plain text, the promises return a custom object response instead of builtin Response Object
//Axios Promises
(() => {
  const $axios = d.getElementById("axios-promise")
  const $fragment = d.createDocumentFragment();

  axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => {
      let json = res.data;
      json.forEach(el => {
        let $li = d.createElement("li");
        $li.textContent = `Name: ${el.username} --- email: ${el.email}`;
        $fragment.appendChild($li);
      })
      $axios.appendChild($fragment)
    })
    .catch(err => {
      let msg = err.response.statusText || "Yo, Where is it?";
      $axios.textContent = `Error ${err.response.status}: ${msg}`
    })
})();
//Axios Async-Await
(() => {
  const $axiosAsync = d.getElementById("axios-async")
  const $fragment = d.createDocumentFragment();
  
  async function getData() {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users")
      const json = response.data;
      json.forEach(el => {
        let $li = d.createElement("li");
        $li.textContent = `Name: ${el.username} --- email: ${el.email}`;
        $fragment.appendChild($li);
      })
      $axiosAsync.appendChild($fragment) 
      
    } catch (error) {
      let msg = error.response.statusText || "Yo, Where is it?";
      $axiosAsync.textContent = `Error ${error.response.status}: ${msg}`
    }
  }
  getData();
})();