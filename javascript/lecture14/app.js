
// ...existing code...
// Selectors
const button = document.querySelector("#myBtn");
const heading = document.querySelector("#heading");
const box = document.querySelector("#box");

// Click handler
function handleClickButton(e) {
    const clickedElement = e.target;
    heading.textContent = "Button Clicked !";
    heading.style.color = "red";
    console.log("User clicked button", clickedElement);
}

button.addEventListener("click", handleClickButton);

// ...existing code...
// Mouse event listeners (enabled)
button.addEventListener("dblclick", function (e) {
    console.log("Double click:", e.target);
});

box.addEventListener("mousedown", function (e) {
    console.log("Mouse down on box:", e.button);
});

box.addEventListener("mouseup", function (e) {
    console.log("Mouse up on box:", e.button);
});

box.addEventListener("mousemove", function (e) {
    console.log("Mouse move:", e.clientX, e.clientY);
});

box.addEventListener("mouseenter", function () {
    console.log("Mouse enter");
});

box.addEventListener("mouseleave", function () {
    console.log("Mouse leave");
});

box.addEventListener("mouseover", function (e) {
    console.log("Mouse over", e.target);
});

box.addEventListener("mouseout", function (e) {
    console.log("Mouse out", e.target);
});

box.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    console.log("Context menu (right click) on box");
});