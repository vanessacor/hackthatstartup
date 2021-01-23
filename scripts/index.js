"use script";

const menuButton = document.querySelector(".mobile-nav-button");
const signUpButton = document.querySelector(".sign-up-button");
const closeButton = document.querySelector(".close-form");

menuButton.addEventListener("click", showMenu);
signUpButton.addEventListener("click", showForm);
closeButton.addEventListener("click", hideForm);

let isShowingMenu = false;

function showMenu() {
  const menu = document.querySelector(".mobile-menu");
  if (isShowingMenu) {
    menu.style.display = "none";
    isShowingMenu = false;
    return;
  } else menu.style.display = "block";
  isShowingMenu = true;
}

function showForm() {
  const form = document.querySelector("#form-display");
  return form.className = "show-contact-form";
}
function hideForm() {
  const form = document.querySelector("#form-display");
  form.className = "contact-form";
}
