"use script";

const menuButton = document.querySelector(".mobile-nav-button");

menuButton.addEventListener("click", showMenu);

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
