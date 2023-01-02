//APPARENTLYYYY you can access DOM elements that have an id with just their name
// i.e I can use popup without setting it to doc.getElementByID if they dont have
//special characters (no space or hyphens)

/******** Button Setup *********/


const newBookButton = document.getElementById('new-book');
newBookButton.addEventListener('click', ()=>{
    popup.style.display = 'block';
    addBookButton.disabled = false;
    //if both are done in same poll then animation is skipped
    setTimeout(()=>popup.classList.remove('hidden'), 1);
});

const addBookButton = document.getElementById('add-book');
addBookButton.addEventListener('click', addBookToLibrary);

function hidePopup(){
    popup.classList.add('hidden');
    addBookButton.disabled = true;
    setTimeout(()=>popup.style.display = 'none', 500);
}
const popup = document.getElementById('popup');
popup.addEventListener('click', hidePopup);

const bookInfo = document.getElementById('book-info');
bookInfo.addEventListener('click', (e)=>{
    if(e.target.tagName === 'SPAN'){
        document.getElementById('pages-input').focus();
    }
    e.stopPropagation();
});


/******** Global Variables *********/
let myLibrary = [];
let readButtons = [];
const bookProto = {
    info(){
        let info = this.title + " by " + this.author + ", " +
            this.pages + " pages, ";
        if(this.read){
            info += "read.";
        }
        else{
            info += "not read yet. "
        }
        return info;
    },
}

/******** Factory Functions *********/

function Book(title, author, pages, read){
    return Object.assign(Object.create(bookProto), {title, author, pages, read});
    //Object.create is an empty object with __proto__ = proto making info() inherited.
    //Object.assign takes iterables such as an object, iterates through them, and
    //adds their key: value to the first argument.
    //Visual:
    // { __proto__: {info: function().... } } is first
    // then this.title = title, this.author = author, ... are added to that object
    // resulting in { title: title, author: author, ... , __proto__: {info: function()}}
    // now this in info refers to calling object which is an instance of outer object.
}


/******** Button Functions *********/


function addBookToLibrary(e){
    const form = document.getElementById('form');
    //Even though we have pattern checks and required in the html, the form will get sent.
    //so check values match pattern on backend as well
    if(form.title.value === '' || form.author.value === '' || !/^[0-9]+$/.test(form.pages.value))
        return;
    let newBook = Book(form.title.value, form.author.value, form.pages.value, form.read.checked);
    myLibrary.push(newBook);
    updateDisplay();
    //form.reset();
    hidePopup();
    
}

//function for read checkbox. named to allow removeEventListener
function UpdateRead(){
    this.book.read = !this.book.read;
    updateDisplay();
}


/******** Functions *********/

//cant use for...in since we need to ignore the header row
//TODO: use classes on the elements to improve readability 
function updateDisplay(){
    const tableLibrary = document.getElementById('library').firstChild.nextSibling;
    //childNodes is live so get the starting length
    const startLen = tableLibrary.childNodes.length
    for(let i = 2; i < startLen; ++i)
    {
        //remove the event listener to allow garbage collection
        readButtons[i-2].removeEventListener('click', UpdateRead);
        //since its live, every remove moves the next node down so index is constant
        tableLibrary.childNodes[2].remove();
        
    }
    for(let i = 0; i < myLibrary.length; ++i){
        createBookElement(myLibrary[i]);
    }

}
function createBookElement(book){
    
    const tableLibrary = document.getElementById('library');
    const tableRow = document.createElement('tr');
    const titleCell = document.createElement('td');
    const authorCell = document.createElement('td');
    const pagesCell = document.createElement('td');
    const readCell = document.createElement('td');

    const readCellCheckbox = document.createElement('input');
    readCell.classList.add('read-cell');
    readCellCheckbox.setAttribute('type', 'checkbox');

    //give the elem a ref to book so it can update the value without creating a 
    //new object
    readCellCheckbox.book = book;
    
    titleCell.innerText = book.title;
    authorCell.innerText = book.author;
    pagesCell.innerText = book.pages;
    readCellCheckbox.checked = book.read;
    readCellCheckbox.addEventListener('click', UpdateRead);
    readButtons.push(readCellCheckbox);

    readCell.append(readCellCheckbox);
    tableRow.append(titleCell, authorCell, pagesCell, readCell);
    tableLibrary.firstChild.nextSibling.appendChild(tableRow);
}



