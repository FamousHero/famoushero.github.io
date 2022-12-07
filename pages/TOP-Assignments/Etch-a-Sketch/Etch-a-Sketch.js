/* ------------- Variable -------*/

var width = 16;
var height = 16;
var body = document.querySelector("body");
var root = document.documentElement;
var resetButton = document.querySelector("button");

resetButton.addEventListener('click',resetGrid);


function createGrid(){
        
    for(var i = 0; i < width; ++i)
    {
        let row = document.createElement("div");
        row.classList.add("row");
        body.appendChild(row);
        for(var j = 0; j < height; ++j)
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
    this.width = width;
    this.height = height;
    root.style.setProperty('--grid-width', width);
    root.style.setProperty('--grid-height', height);
}

setGridDimensions(width, height);
createGrid();