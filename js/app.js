//MOBILE MENU
const hamburger = document.querySelector(".hamburger");
const navUL = document.getElementById("nav");

hamburger.addEventListener("click", () => {
    navUL.classList.toggle("show");
});

//MODAL
const overlay = document.querySelector(".overlay");
const modalContainer = document.querySelector(".modal-content");
const modalClose = document.querySelector(".modal-close");
const work = document.querySelectorAll(".img-thumbnail");

/*
function displayModal() {
    overlay.classList.remove("hidden");
    modalContainer.innerHTML = modalHTML;  
} */

const form = document.getElementById("form");
const overlayForm = document.getElementById("form-overlay");

form.addEventListener("click", () => {
    overlayForm.classList.remove("hidden")
    console.log("hey");
})

/*
for (let i=0; i<work.length; i++) {
    work[i].addEventListener("click", function () {
        console.log("yo");
        displayModal();
    });
}; */

