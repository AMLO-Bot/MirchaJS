const d = document;
const emailPattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

function validateInput(input, logicCondition){
  setTimeout(() => {
    if (logicCondition) {
      input.classList.add("validated");
      input.classList.remove("rejected");
      
    }else{
      input.classList.add("rejected");
      input.classList.remove("validated");
    };
  }, 1000);
}

export default function formValidation(ev, formId){
  const $inputs = d.getElementById(formId).querySelectorAll(`.${formId} .input`);
  const [name, email, subject, text, submit] = $inputs
  $inputs.forEach(input => input.setAttribute("required", true));
  
  d.addEventListener("keyup", ev => {
    if(ev.target.matches(`.${formId} > .${name.classList[0]}`)){
      validateInput(name, !name.value.match(/[0-9]/));
    }; 
    
    if(ev.target.matches(`.${formId} > .${email.classList[0]}`)){
      validateInput(email, email.value.match(emailPattern));
    };

    if(ev.target.matches(`.${formId} > .${subject.classList[0]}`)){
      validateInput(subject, subject.value.length < 30);
    };
  
    if(ev.target.matches(`.${formId} > .${text.classList[0]}`)){
      validateInput(text, text.value.length < 255);
    };
  })
};

