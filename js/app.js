//MOBILE MENU
const hamburger = document.querySelector(".hamburger");
const navUL = document.getElementById("nav");

hamburger.addEventListener("click", () => {
    navUL.classList.toggle("show");
});
