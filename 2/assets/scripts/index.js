const form = document.querySelector(".form");
let email = document.getElementById("email");
let sex = document.querySelector("#sex");
let checkbox = document.getElementById("checkbox");

let errors = [];

function checkValidity(input) {
  let validity = input.validity;
  if (validity.valueMissing) {
    errors.push("Поле " + input.placeholder + " не заполнено");
  }
  if (validity.patternMismatch) {
    errors.push("Неверный формат заполнения поля " + input.placeholder);
  }
}

function validateEmail(email) {
  let mailFormat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
  if (email.value.match(mailFormat)) {
    return true;
  } else {
    errors.push("Ваш адрес электронной почты введен неверно!");
    return false;
  }
}

function validatePassword() {
  let password = document.getElementById("password");
  let password2 = document.getElementById("password2");
  if (password.value !== password2.value) {
    errors.push("Пароли должны совпадать");
  }
}

form.addEventListener("submit", function checkAll(e) {
  errors = [];
  let inputs = document.querySelectorAll("input");
  for (let input of inputs) {
    checkValidity(input);
  }
  validateEmail(email);
  validatePassword(password);
  if (checkbox.checked == false) {
    errors.push("Вы должны принять условия Пользовательского соглашения");
  }
  document.querySelector("#errorMessage").innerHTML = errors.join(". <br>");
  e.preventDefault();
});
