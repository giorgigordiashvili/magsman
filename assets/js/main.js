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

var whatwedotoggler = document.querySelector(".whatwedotoggler");
var whowearetoggler = document.querySelector(".whowearetoggler");
var howwedotoggler = document.querySelector(".howwedotoggler");
var usptoggler = document.querySelector(".usptoggler");

var whowearetext = document.querySelector(".whowearetext");
var whatwedotext = document.querySelector(".whatwedotext");
var howwedotext = document.querySelector(".howwedotext");
var usptext = document.querySelector(".usptext");

whowearetoggler.addEventListener("click", () => {
  whowearetext.classList.toggle("active");
  whowearetoggler.classList.toggle("active");
});
whatwedotoggler.addEventListener("click", () => {
  whatwedotext.classList.toggle("active");
  whatwedotoggler.classList.toggle("active");
});
howwedotoggler.addEventListener("click", () => {
  howwedotext.classList.toggle("active");
  howwedotoggler.classList.toggle("active");
});
usptoggler.addEventListener("click", () => {
  usptext.classList.toggle("active");
  usptoggler.classList.toggle("active");
});
