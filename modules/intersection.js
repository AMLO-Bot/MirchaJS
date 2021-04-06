const d = document;
export function intersection(sectionsClass,activeClass) {
  const $sectionsList = d.querySelectorAll(sectionsClass)
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
      if(entry.isIntersecting){
        d.querySelector(`a[href="#${entry.target.id}"]`).classList.add(activeClass);
      }
      else{
        d.querySelector(`a[href="#${entry.target.id}"]`).classList.remove(activeClass);
      }  
    });
  }
}
