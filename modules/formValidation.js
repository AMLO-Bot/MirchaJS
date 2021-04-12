const d = document;
const emailPattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

export default function formValidation(ev, formId){
  const $inputs = d.getElementById(formId).querySelectorAll(`.${formId} > *`);
  const [name, email, subject, text, submit] = $inputs
  $inputs.forEach(input => input.setAttribute("required", true));

  if(ev.target.matches(`.${formId} > .${email.classList[0]}`)){
    if (email.value.match(emailPattern)){
      email.classList.add("validated");
      email.classList.remove("rejected");
      console.log(email.classList)
    }else{
      email.classList.add("rejected");
      email.classList.remove("validated");
      con
    };
  };
    
    
  
  
  
};

function validation(formId, $inputs, email, text) {
  if (ev.target.matches(`#${formId}`)) {
    $inputs.forEach(input => {
      if(input.value.length < 1){
        return
      }
    })
  
    
    
    if (text.value.length > 255) {
      alert("Excediste la longitud de 255 caracteres");
    }
      
    
  }
  
}