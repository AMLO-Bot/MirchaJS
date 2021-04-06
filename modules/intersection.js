const d = document;
export function intersection(sectionsClass, menuItemsSelector,activeClass) {
  const $sectionsList = d.querySelectorAll(sectionsClass),
  $menuItems = d.querySelectorAll(menuItemsSelector);
  const options = {
    root:null,
    rootMargin: "-300px 0px",
    // thresholds: 0.8,
  };
  const observer = new IntersectionObserver(intersectionHandler, options);
  $sectionsList.forEach(sectionTitle => {
    observer.observe(sectionTitle);
  });

  function intersectionHandler(entries, observer) {
    entries.forEach(entry => {
      console.log(entry)
      console.log(entry.target)
      console.log(entry.isIntersecting)
      console.log(entry.target.id)
      if(entry.isIntersecting){
        d.querySelector(`a[href="#${entry.target.id}"]`).classList.add(activeClass);
      }
      else{
        d.querySelector(`a[href="#${entry.target.id}"]`).classList.remove(activeClass);
      }
      
    });
  }
}
