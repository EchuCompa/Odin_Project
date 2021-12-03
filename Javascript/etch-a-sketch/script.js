let grid_size = 16;
const canvas = document.querySelector("#grid");
let mode = "black";

//Create grid
createGrid();

const clear_but = document.querySelector("#clear");
clear_but.addEventListener("click", clearGrid);

const black_but = document.querySelector("#black");
black_but.addEventListener("click", () => mode = "black");

const random_but = document.querySelector("#random");
random_but.addEventListener("click", () => mode = "random");

const input_size = document.querySelector("#size")
input_size.addEventListener("input", (e) => {
    grid_size = e.target.value;
    resizeGrid();
})

function createGrid() {
    canvas.innerHTML= "";
    for (let i =0; i< grid_size**2;i++) {
        createGridItem(canvas)
    }
}

function createGridItem(parent) {
    const grid_item = document.createElement("div");
    grid_item.classList.add("grid-item");
    grid_item.addEventListener("mouseenter", changeColor);
    parent.appendChild(grid_item);
}

function changeColor(e) {
    if (mode == "black") {
        this.style.background = "black";
    }
    else if (mode == "random") {
        this.style.background = randomRGBColor();
    }
    
}

function randomRGBColor() {
    return `rgb( ${ Math.round(Math.random()*255) } , \
     ${ Math.round(Math.random()*255) } , \
     ${ Math.round(Math.random()*255) } )`
}

function resizeGrid() {
    /*grid_size =  +prompt("Enter a new grid size, max size is 100");
    while (  !((1 < grid_size) && (grid_size <= 100)) ) {
        grid_size =  +prompt("That´s not a valid input, enter another");
    }
    Code with no input range
    */ 
    canvas.style.gridTemplateRows = `repeat( ${grid_size}, 1fr)`;
    canvas.style.gridTemplateColumns = `repeat( ${grid_size}, 1fr)`;
    createGrid();
}

function clearGrid() {
    let childs = Array.from(canvas.childNodes);
    for (let i =1;i< childs.length;i++) {
        childs[i].style.background="white";
    }
    resizeGrid();
}