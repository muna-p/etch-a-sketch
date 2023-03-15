const container = document.querySelector('#container');
const containerTwo = document.querySelector('#containerTwo');


function colorGenerator() {
    let rgb1 = Math.floor(Math.random() * 256);
    let rgb2 = Math.floor(Math.random() * 256);
    let rgb3 = Math.floor(Math.random() * 256);
    return "rgb(" + rgb1 + "," + rgb2 + "," + rgb3 + ")";
}


let rainbowButton = document.createElement('button');
rainbowButton.className = 'rainbow';
rainbowButton.textContent = 'Rainbow';
containerTwo.appendChild(rainbowButton);

let plainButton = document.createElement('button');
plainButton.className = 'plain';
plainButton.textContent = 'Plain';
containerTwo.appendChild(plainButton);

let clearButton = document.createElement('button');
clearButton.className = 'clear';
clearButton.textContent = 'Clear';
containerTwo.appendChild(clearButton);

let gridButton = document.createElement('button');
gridButton.className = 'grid';
gridButton.textContent = 'Grid';
containerTwo.appendChild(gridButton);

let sliderGrid = document.createElement('INPUT');
sliderGrid.className = 'sliderGrid';
sliderGrid.setAttribute('id', 'sliderInput');
sliderGrid.setAttribute('type', 'range');
sliderGrid.setAttribute('min', '2');
sliderGrid.setAttribute('max', '50');
sliderGrid.setAttribute('value', '16');
sliderGrid.setAttribute('oninput', 'sliderValue.textContent = this.value') ;
containerTwo.appendChild(sliderGrid);

let sliderValue = document.createElement('div');
sliderValue.className = 'sliderValue';
sliderValue.setAttribute('id', 'sliderValue');
sliderValue.textContent = '16';
containerTwo.appendChild(sliderValue);

document.getElementById('sliderInput').addEventListener('change', () => {
    squareGenerate(+(document.getElementById('sliderInput').value));
});

function squareGenerate(amount){
    container.replaceChildren();

    for (let i = 1; i <= (amount**2); i++) {
        let square = document.createElement('div');
        square.className = 'square';

        perc = 100/amount

        square.style.height = perc+"%";
        square.style.width = perc+"%";

        container.appendChild(square);
    };

    if (rainbowValue == true && plainValue == false) {
        rainbowButton.click();}
    
    if (plainValue == true && rainbowValue == false) {
        plainButton.click();}

    if (gridValue == true) {
        for(let i=0; i< squares.length; i++){
            squares[i].style.border = '1px solid black';
        } }
}

let squares = document.getElementsByClassName('square');

clearButton.addEventListener('click', () => {
    for(let i=0; i< squares.length; i++){
        squares[i].style.background = 'white'; 
    }
});

let rainbowValue = false;
let plainValue = false;

rainbowButton.addEventListener('click', () => {
    rainbowValue = true;
    plainValue = false;
    for(let i=0; i< squares.length; i++){
        squares[i].addEventListener(
            "mouseover", function () {
                squares[i].style.background = colorGenerator();
            }
        )
    }
});

plainButton.addEventListener('click', () => {
    plainValue = true;
    rainbowValue = false;
    for(let i=0; i< squares.length; i++){
        squares[i].addEventListener(
            "mouseover", function () {
                squares[i].style.background = 'black';
            }
        )
    }
});


let initialGrid = true;
let gridValue = false;

gridButton.addEventListener('click', () => {
    initialGrid ? gridOn() : gridOff();
    initialGrid =! initialGrid;
    
    function gridOn() {
        gridValue = true;
        for(let i=0; i< squares.length; i++){
            squares[i].style.border = '1px solid black';
        }
    };

    function gridOff() {
        gridValue = false;
        for(let i=0; i< squares.length; i++){
            squares[i].style.border = 'none';
        }
    };
});

squareGenerate(16);


