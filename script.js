const middle = document.querySelector('#middle');
const clear = document.querySelector('#clear');
const currSize = document.querySelector('#currSize');
const slider = document.querySelector('.slider');

function createGrid(dimensions) {
    const size = 600/dimensions;
    for (let i = 0; i < dimensions * dimensions; i++) {
        const gridBox = document.createElement('div');
        gridBox.setAttribute('class', 'gridBox');
        gridBox.setAttribute("style", `background-color: white; width: ${size}px; height: ${size}px; border: 0.04px solid #F0F0F0; box-sizing: border-box;`);
        gridBox.setAttribute('id', `a${i}`)
        gridBox.setAttribute('onmouseover', `draw(${i})`)
        middle.appendChild(gridBox);
    };
};

function draw(id) {
    const curr = document.querySelector(`#a${id}`);
    curr.style.backgroundColor = 'black'
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

slider.oninput = function () {
    currSize.innerHTML = `${this.value} x ${this.value}`;
    middle.textContent = '';
    createGrid(this.value);
}