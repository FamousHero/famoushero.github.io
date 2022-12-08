/* ------------- Variable -------*/

var height = 16;
var width = 16;
var body = document.querySelector("body");
var root = document.documentElement;
var resetButton = document.getElementById("reset-button");
var dimensionsButton = document.getElementById("enter-button");
var widthInput = document.getElementById('user-width');
var heightInput = document.getElementById('user-height');

/* Page Setup */
window.addEventListener('load', createGrid);

widthInput.addEventListener('click', ()=>{
    widthInput.select();
})

heightInput.addEventListener('click', ()=>{
    heightInput.select();
})

resetButton.addEventListener('click',resetGrid);
dimensionsButton.addEventListener('click', ()=>{
    let board = document.querySelector('.board');
    console.log(board);
    board.remove();
    setGridDimensions(widthInput.value, heightInput.value);
});


/* Functions */
function createGrid(){
    let board = document.createElement('div');
    board.classList.add('board');
    body.appendChild(board);  
    for(var i = 0; i < height; ++i)
    {
        let row = document.createElement("div");
        row.classList.add("row");
        board.appendChild(row);
        for(var j = 0; j < width; ++j)
        {
            let block = document.createElement("div");
            block.classList.add("block");
            block.addEventListener('mouseover', function(){
                block.classList.toggle("hovered");
            })
            row.appendChild(block);
        }
    }
}

function resetGrid(){
    let blocks = document.querySelectorAll(".block");
    blocks.forEach(block => {
        block.classList.remove('hovered');
    })
}

function setGridDimensions(width, height)
{
    width = (width < 1)? 1: (width > 100)? 100: width;
    height = (height < 1)? 1: (height > 100)? 100: height;


    this.width = width;
    this.height = height;
    root.style.setProperty('--grid-width', width);
    root.style.setProperty('--grid-height', height);
    createGrid();
}

