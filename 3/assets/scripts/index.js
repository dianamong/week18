function sendComment() {
  addComment();
}

function addComment() {
  let avatar = document.querySelector("#avatar").value;
  let userName = document.querySelector("#userName").value;
  localStorage.setItem("name", userName);
  localStorage.setItem("avatar", avatar);
  document.querySelector(".container").innerHTML += `<div><img class="avatar" width=40px height=40px src="${avatar}" alt="avatar"><span class='userName'>${userName}: </span><span class='comment'>${checkSpam()}</span><br></div>`;
  document.querySelector("#comment").value = "";
}

document.addEventListener("DOMContentLoaded", function () {
  let name = localStorage.getItem("name");
  let avatar = localStorage.getItem("avatar");
  if (name !== null && avatar !== null) {
    document.getElementById("userName").value = name;
    document.getElementById("avatar").value = avatar;
  }
  //addComment();
});

function checkSpam() {
  let spam = document.querySelector("#comment").value;
  spam = spam.replace(/viagra/gi, "***").replace(/XXX/gi, "***");
  return spam;
}

function clearFields() {
  document.querySelector("#avatar").value = "";
  userName = document.querySelector("#userName").value = "";
  document.querySelector("#comment").value = "";
}
