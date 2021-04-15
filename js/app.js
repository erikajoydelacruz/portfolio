console.log("hi");

const overlay = document.querySelector(".overlay");
const modalContainer = document.querySelector(".modal-content");
const modalClose = document.querySelector(".modal-close");
const work = document.getElementById("work");

/*
const menuBtn = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-link");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
        nav.style.display="block";
    console.log("hey");
    
    } else {
        menuBtn.classList.remove("open");
        menuOpen = false;
        console.log("yo");
        nav.style.display="";
    }
}); */

const hamburger = document.querySelector(".hamburger");
const navUL = document.getElementById("nav");

hamburger.addEventListener("click", () => {
    navUL.classList.toggle("show");
});