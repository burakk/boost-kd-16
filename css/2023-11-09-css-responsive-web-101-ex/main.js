const hamburgerBtnToggleEl = document.querySelector(
  ".nav-hamburger .btn-toggle"
);

const hamburgerNavEl = document.querySelector(".nav-hamburger");

hamburgerBtnToggleEl.addEventListener("click", handleToggleNav);

function handleToggleNav(e) {
  hamburgerNavEl.classList.toggle("state-expanded");
}
