var lang = document.querySelector(".lang");

lang.addEventListener("click", () => {
  lang.classList.toggle("active");
});

//nav

var navToggler = document.querySelector(".nav-toggler");
var header = document.querySelector(".header");
var nav = document.querySelector(".nav");
var socialToggler = document.querySelector(".social-toggler");
navToggler.addEventListener("click", () => {
  header.classList.toggle("active");
  nav.classList.toggle("active");
  navToggler.classList.toggle("active");
  socialToggler.classList.toggle("active");
});
