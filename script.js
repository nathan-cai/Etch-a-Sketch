const middle = document.querySelector('#middle');
const clear = document.querySelector('#clear');
const currSize = document.querySelector('#currSize');
const slider = document.querySelector('.slider');
let color = 'black';

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
    gridBox.setAttribute("style", `background-color: white; width: ${size}px; height: ${size}px; border: 0.04px solid #F0F0F0; box-sizing: border-box;`);
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

function draw(node) {
    node.style.backgroundColor = color;
}

clear.addEventListener('click', whiten);

function makeWhite(node) {
    node.style.backgroundColor = 'white'
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