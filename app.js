let inputFields = document.querySelectorAll("form > input");
let docu = document.querySelector("html");
let submit = document.querySelector("#claim");

submit.addEventListener("click", () => {
  let firstName = inputFields[0].value,
    lastName = inputFields[1].value,
    email = inputFields[2].value,
    password = inputFields[3].value;
  validate(firstName, lastName, email, password)
});

function validate(firstName, lastName, email, password) {
  let errorMessages = document.querySelectorAll('.error-message');
  let nameRegex = new RegExp(/^[a-zA-z]+$/);///\b[^\d\W]+\b/g
  let errorImg = document.querySelectorAll('img');

  if (/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email) === false) {
    inputFields[2].classList.add('error');
    errorMessages[2].classList.remove('hide');
    errorImg[2].classList.remove('hide');
  }
  else {
    inputFields[2].classList.remove('error');
    errorMessages[2].classList.add('hide');
    errorImg[2].classList.add('hide');
  }

  console.log(nameRegex.test(firstName))
  if (!nameRegex.test(firstName)) {
    inputFields[0].classList.add('error');
    if (firstName.length !== 0) {
      errorMessages[0].textContent = 'Only letters are allowed.'
    }
    else {
      errorMessages[0].textContent = 'First Name cannot be empty.'
    }
    errorMessages[0].classList.remove('hide');
    errorImg[0].classList.remove('hide');
  }
  else {
    inputFields[0].classList.remove('error');
    errorMessages[0].classList.add('hide');
    errorImg[0].classList.add('hide');
  }

  if (!nameRegex.test(lastName)) {
    if (lastName.length !== 0) {
      errorMessages[1].textContent = 'Only letters are allowed.'
    }
    else {
      errorMessages[1].textContent = 'Last Name cannot be empty.'
    }
    inputFields[1].classList.add('error');
    errorMessages[1].classList.remove('hide');
    errorImg[1].classList.remove('hide');
  }
  else {
    inputFields[1].classList.remove('error');
    errorMessages[1].classList.add('hide');
    errorImg[1].classList.add('hide');
  }

  if (password.length <= 8) {
    errorMessages[3].textContent = 'Password must be longer than 8 characters.'
    if (password.length === 0) {
      errorMessages[3].textContent = 'Password cannot be empty.'
    }
    inputFields[3].classList.add('error');
    errorMessages[3].classList.remove('hide');
    errorImg[3].classList.remove('hide');
  }
  else {
    inputFields[3].classList.remove('error');
    errorMessages[3].classList.add('hide');
    errorImg[3].classList.add('hide');
  }
}