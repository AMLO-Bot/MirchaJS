const d = document;
export default function(ev, searchList, id, searchItemClass, noneDisplay){
  if (ev.target.matches(`#${id}`)) {
    const $input = d.getElementById(id); 
    const $searchItems  = d.getElementsByClassName(searchItemClass); //Fetch all searchables items
    // const $searchList = d.querySelector(searchList);
    
    for(let item of $searchItems){  
      const searchString = $input.value.toLowerCase();
      const searchTag = item.textContent.trim().toLowerCase(); //case insensitive

      //Display item or not if the tag is included inside the string the user introduced
      !(searchTag.includes(searchString))
        ? item.classList.add(noneDisplay)
        : item.classList.remove(noneDisplay);
      };
      // console.log($searchList.innerText)
      // const $noneDisplayItems = d.getElementsByClassName(noneDisplay),
      // msgText = d.createElement("p");
      // ($noneDisplayItems.length === $searchItems.length)
      //   ? $searchList.appendChild(msgText)
      //   : $searchList.removeChild(msgText);
    };
};