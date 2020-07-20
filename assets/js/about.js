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
