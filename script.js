const form = document.querySelector('.signup-form');
const inputs = document.querySelectorAll('input');
const feedback = document.querySelector('.error');
const button = document.querySelector('#button');
const popup = document.querySelector('.popup-wrapper');
const popupMssg = document.querySelector('.popup-message');
const close = document.querySelector('.popup-close');

//Reguler expressions for the testing
const patterns = {
  firstName: /^([a-zA-Z]+)(-[a-zA-Z]+)?$/,
  lastName: /^([a-zA-Z]+)(-[a-zA-Z]+)?$/,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  password: /^[\w@-]+$/
};

//Validation function
function validate(field, regex){
  if (regex.test(field.value)) {
    field.className = 'valid';
  } else if (field.value === "") {
    field.className = null;
    inputs[2].setAttribute('placeholder', 'Email Address');
  } else {
    field.className = 'invalid';
  }
}
// Only allows form to submit when all values are valid
form.addEventListener('submit', e => {
    e.preventDefault();//Prevent page from refreshing by default after submiting
    for (let i = 0; i < inputs.length-1; i++) {
    if (inputs[i].value === "") {
        inputs[i].className = 'invalid';
        popup.style.display= 'none';
        inputs[2].setAttribute('placeholder', 'email@domain/com');
      } else if(inputs[i].value !== "" && patterns[inputs[i].attributes.name.value].test(inputs[i].value)) {
        inputs[i].className = 'valid';
        popup.style.display= 'flex';
        popupMssg.textContent = `Form submitted Successfully, Please check your email: ${inputs[2].value}`;
        inputs[2].setAttribute('placeholder', 'Email Address');
      } else {
        inputs[i].className = 'invalid';
        popup.style.display= 'none';
      }
    };
});
//Match each input field against a particular pattern
inputs.forEach(input => {
  input.addEventListener('keyup', e => {
    validate(e.target,patterns[e.target.attributes.name.value]);
  });
});
//popup close
close.addEventListener('click', () => {
    popup.style.display= 'none';
    inputs.forEach(input => {
      input.value = null;
      input.className = null;
    });
    inputs[4].value = 'Claim Your Free Trial';
  });
popup.addEventListener('click', () => {
    popup.style.display= 'none';
    inputs.forEach(input => {
      input.value = null;
      input.className = null;
    });
    inputs[4].value = 'Claim Your Free Trial';
});