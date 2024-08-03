let number = 16*16;
let size = 16;

let container = document.querySelector("#container");
let sizeButton = document.querySelector(".size");
let body = document.querySelector("body");
let sizeText = document.querySelector(".size-text");
let clearButton = document.querySelector(".clear");
let mouseDown = false;

const containerSize = 500;

setUp(size, number);

sizeButton.addEventListener("click", () => {
    size = Number(prompt("Enter Grid Size (Max: 100)"));
    while (size <= 0 || size > 100) {
        size = Number(prompt("Invalid Size!\nEnter Grid Size (Max: 100)"));
    }

    sizeText.textContent = "Current Grid Size: " + size + " x " + size;

    container.remove();
    container = document.createElement("div");
    container.setAttribute("id", "container");
    body.appendChild(container);
    number = size*size;

    setUp(size, number);
})

clearButton.addEventListener("click", () => {
    let allSquares = document.querySelectorAll(".square");
    for (square of allSquares) {
        square.style.backgroundColor = "white";
    }
});

body.addEventListener("mousedown", function() {
    mouseDown = true;
});
body.addEventListener("mouseup", function() {
    mouseDown = false;
});

function setUp(size, number) {
    for (let i = 0; i < number; i++) {
        let square = document.createElement("div");
        square.style.border = "solid";
        square.style.borderWidth = "1px";   
        square.style.width = containerSize/size-2 + "px";
        square.style.height = containerSize/size-2 + "px";
        square.classList.add("square");
        square.onmouseenter = function() {
            if (mouseDown) {
                this.style.backgroundColor = "black";
            }
        }
        square.onmousedown = function() {
            this.style.backgroundColor = "black";
        }
        container.appendChild(square);
    }
}

