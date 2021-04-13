const d = document;
const xhr = new XMLHttpRequest();

d.addEventListener("readystatechange", (ev) => {
  console.log(ev)
})
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
xhr.send();
