console.log("hi");

const overlay = document.querySelector(".overlay");
const modalContainer = document.querySelector(".modal-content");
const modalClose = document.querySelector(".modal-close");
const work = document.getElementById("work");


const menuBtn = document.querySelector(".hamburger");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
    console.log("hey");
    } else {
        menuBtn.classList.remove("open");
        menuOpen = false;
    }
});