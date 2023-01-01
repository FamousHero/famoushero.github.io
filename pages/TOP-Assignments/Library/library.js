//APPARENTLYYYY you can access DOM elements that have an id with just their name
// i.e I can use popup without setting it to doc.getElementByID if they dont have
//special characters (no space or hyphens)
const popup = document.getElementById('popup');
popup.addEventListener('click', ()=>{
    popup.classList.add('hidden');
})

const newBookButton = document.getElementById('new-book');
newBookButton.addEventListener('click', ()=>popup.classList.remove('hidden'));

const addBookButton = document.getElementById('add-book');
addBookButton.addEventListener('click', (e)=>createBookElement(e));

const form = document.getElementById('form');
let myLibrary = [];

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

function addBookToLibrary({title, author, pages, read}){
    myLibrary.push(Book(title, author, pages, read));
}

const myBook = Book("Titanic", "Mary Jane", 297, true);
addBookToLibrary(myBook)
console.log(myBook.info());

function createBookElement(e){
    e.preventDefault();
    let book = Book(form.title.value, form.author.value, form.pages.value, form.read.value);
    const tableLibrary = document.getElementById('library');
    const tableRow = document.createElement('tr');
    const titleCell = document.createElement('td');
    const authorCell = document.createElement('td');
    const pagesCell = document.createElement('td');
    const readCell = document.createElement('td');
    titleCell.innerText = book.title;
    authorCell.innerText = book.author;
    pagesCell.innerText = book.pages;
    readCell.innerText = book.read;
    tableRow.append(titleCell, authorCell, pagesCell, readCell);
    tableLibrary.firstChild.nextSibling.appendChild(tableRow);
}



const bookInfo = document.getElementById('book-info');
bookInfo.addEventListener('click', (e)=>{
    if(e.target.tagName === 'SPAN'){
        document.getElementById('pages-input').focus();
    }
    e.stopPropagation();
});


