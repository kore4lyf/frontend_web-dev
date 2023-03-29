//navigation menu button
let navMenuBtn = document.querySelector(".nav-menu-btn");
// Nav Menu
let navMenu = document.querySelector("nav");
// Close Nav Menu Button n
let closeMenuBtn = document.querySelector(".close-btn");
// Header 
let header = document.querySelector('header');
// Overlay
let overlay = document.querySelector(".overlay");


// Show navigation menu when navigation button is pressed
navMenuBtn.addEventListener("click", () => {
    // Set Header display to block
    header.style.display = "block";
    // Hide Navigation Menu Button
    navMenuBtn.style.display = "none";
    // Show Navigation Menu
    navMenu.style.display = "block";
    // Hide close Navigation Button
    closeMenuBtn.style.display = "block";
    // Show overlay
    overlay.style.display = "block";
    //Prevent document from scrolling
    document.body.style.overflow = "hidden";
});


// Hide navigation menu when navigation button is pressed
closeMenuBtn.addEventListener("click", (e) => {
    // Set Header display to flex
    header.style.display = "flex";
    // Show Navigation Menu Button
    navMenuBtn.style.display = "block";
    // Show Navigation Menu
    navMenu.style.display = "none";
    // Hide close Navigation Button
    closeMenuBtn.style.display = "none";
    // Hide overlay
    overlay.classList.toggle = "hide";
    // Show overlay
    overlay.style.display = "none";
    //Prevent document from scrolling
    document.body.style.overflow = "auto";
});


/* Highlight Search Outer border on focus */

// Search input
let search = document.querySelector(".search-input");

let searchInput = document.querySelector("#search");

// Highlight Search Input
search.addEventListener("focus", () => {
    searchInput.style.border = "1px solid #f59e0b";
})

// De-highlight Search Input
search.addEventListener("focusout", () => {
    searchInput.style.border = "1px solid #e2e5ec";
})


/* Highlight Subscribe Outer border on focus */

// Search input
let subscribe = document.querySelector("#subscribe-inner");

let subscribeInput = document.querySelector("#subscribe-outter");

// Highlight Search Input
subscribe.addEventListener("focus", () => {
    subscribeInput.style.border = "1px solid #f59e0b";
})

// De-highlight Search Input
subscribe.addEventListener("focusout", () => {
    subscribeInput.style.border = "1px solid #e2e5ec";
})

