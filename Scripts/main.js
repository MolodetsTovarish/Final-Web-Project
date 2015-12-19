// Variable Declarations
var toggleButton = document.getElementById("menu-button");
var toggleButton = document.getElementById("menu-button");
var eventType = "click";
var navBar = document.getElementById("nav-bar");


// add an event listener to the toggle button
var mainHeading = document.getElementById("main-heading");

// toggle button event listener to the toggle button
toggleButton.addEventListener(eventType, toggleButtonClicked);

function toggleButtonClicked() {
	mainHeading.innerHTML = "Toggle button was clicked";
	mainHeading.style.color = "red";
}