const middle = document.querySelector('#middle');
const clear = document.querySelector('#clear');
const currSize = document.querySelector('#currSize');
const slider = document.querySelector('#slider');

let color = 'black';
let mouseDown = false;

function colorSelect(node) {
    document.querySelector(`#${color}`).classList.toggle("selected");
    color = node.id;
    document.querySelector(`#${color}`).classList.toggle("selected");
};

function createGrid(dimensions) {
    const size = 600/dimensions;
    const gridBox = document.createElement('div');
    const row = document.createElement('div');
    gridBox.setAttribute('class', 'gridBox');
    gridBox.setAttribute("style", `background-color: white; width: ${size}px; height: ${size}px; border: 0.03px solid #F0F0F0; box-sizing: border-box;`);
    gridBox.setAttribute('onmouseover', `draw(this)`);
    for (let i = 0; i < dimensions; i++) {
        const currBox = gridBox.cloneNode(true);
        row.appendChild(currBox);
    };
    for (let i = 0; i < dimensions; i++) {
        const currRow = row.cloneNode(true);
        middle.appendChild(currRow);
    };
};

document.body.onmousedown = function() { 
    mouseDown = true;
}
document.body.onmouseup = function() {
    mouseDown = false;
}

function draw(node) {
    if (mouseDown) {
        node.style.backgroundColor = color;
        node.style.border = 0;
    }
};

clear.addEventListener('click', whiten);

function makeWhite(node) {
    node.style.backgroundColor = 'white';
    node.style.border = '0.03px solid #F0F0F0'
};

function whiten() {
    const grid = document.querySelectorAll('.gridBox');
    grid.forEach(makeWhite);
}
createGrid(10); 

slider.onchange = function () {
    middle.innerHTML = '';
    createGrid(this.value);
}

slider.oninput = function () {
    currSize.innerHTML = `${this.value} x ${this.value}`;
}