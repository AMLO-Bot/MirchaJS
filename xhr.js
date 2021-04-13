(
  () => {
  const d = document;
  const xhr = new XMLHttpRequest();
  const $list = d.getElementById("ajax-list");
  const $fragment = d.createDocumentFragment();

  xhr.addEventListener("readystatechange", (ev) => {
    if (xhr.readyState !== 4) return;
    
    if (xhr.status > 199 && xhr.status < 300) {
      console.log("TODO OK")
      const json = JSON.parse(xhr.responseText);
      json.forEach(el => {
        let $li = d.createElement("li");
        $li.textContent = `User: ${el.userId}  -- Title: ${el.title}`;
        $fragment.appendChild($li);
      });
      $list.appendChild($fragment);
    }else{
      console.log("ERROR")
      let msg = xhr.responseText || "Unexpected Error Ocurred"
      console.warn(`${xhr.status}: ${msg}`)
    };
  });
  
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
  xhr.send()
})();
