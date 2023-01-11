import { mergeSort } from "./mergeSort";
/********Global Variables********/
var toSort = [3,2,14,5,45,23,23,445626,1234,4,52,546,2,3,32,3,345,345,213];
var tempArr = [];

let listContainer = document.getElementById('listContainer');
var mergeSortButton = document.getElementById('merge-sort');
var popup = document.getElementById('list-popup');
var newListButton = document.getElementById('new-list');
var addButton = document.getElementById('add');
var finishButton = document.getElementById('finish');
var cancelButton = document.getElementById('cancel');

/*********Page Setup***********/
mergeSortButton.addEventListener('click', ()=>{
    mergeSort(toSort, 0, toSort.length-1);
    sortDisplayList(0);
});
newListButton.addEventListener('click', ()=>{
    popup.style.display = 'inherit';
});
addButton.addEventListener('click', ()=>{
    addNumber();
});
finishButton.addEventListener('click', ()=>{
    let valueElem = document.getElementById('number');
    if(valueElem.value)
    addNumber();
    toSort = [...tempArr];
    tempArr = [];
    popup.style.display = 'none';
    displayList();
});
cancelButton.addEventListener('click', ()=>{
    popup.style.display = 'none';
});

displayList();

/********Functions***********/
function displayList(){
    while(listContainer.firstChild){
        listContainer.removeChild(listContainer.firstChild);
    }
    for(let i =0; i < toSort.length; ++i){
        let div = document.createElement('div');
        div.style.width = '100px';
        div.style.height = '100px';
        div.style.backgroundColor = 'red';
        div.style.textAlign = 'center';
        div.style.lineHeight = '100px';

        div.innerText = toSort[i];
        listContainer.appendChild(div);
    }
}
function sortDisplayList(index){
    if(index == toSort.length)
    {
        for(let i = 0; i <listContainer.childNodes.length; ++i){
            listContainer.childNodes[i].style.backgroundColor = 'blue';
            listContainer.childNodes[i].style.color = 'white';

        }
        return;
    }
    let currDiv =listContainer.childNodes[index];
    currDiv.innerText = toSort[index];
    currDiv.style.backgroundColor = 'green';
    setTimeout(sortDisplayList, 300, index+1);

}
function addNumber(){
    let valueElem = document.getElementById('number');
    let errorMsg = document.getElementById('error-msg');
    if(/^(-)?[0-9]+$/.test(valueElem.value)){
        errorMsg.style.display = 'none';
        tempArr.push(Number(valueElem.value));
    }
    else{
        errorMsg.style.display = 'inherit';
    }
    valueElem.value = '';
}