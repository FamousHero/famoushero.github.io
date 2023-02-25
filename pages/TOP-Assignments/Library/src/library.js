//APPARENTLYYYY you can access DOM elements that have an id with just their name
// i.e I can use popup without setting it to doc.getElementByID if they dont have
//special characters (no space or hyphens)

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, 
    orderBy, query, deleteDoc, doc, updateDoc
 } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
//I know apiKey should be secret but only way to do that is 
//with a backend and .env files (from what ive seen)
//currently, github pages does not support backend/non-static files
//so "it is what it is"
  apiKey: "AIzaSyABjXFVfrq7fZDq7ckTeTZxWjga3RTX5O8",
  authDomain: "library-app-6dbd5.firebaseapp.com",
  projectId: "library-app-6dbd5",
  storageBucket: "library-app-6dbd5.appspot.com",
  messagingSenderId: "975674829844",
  appId: "1:975674829844:web:3491175ac793e8811fcb01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const collRef = collection(db, 'books');
const q  = query(collRef, orderBy("title"));
getDocs(q).then((snapshot) => {
    snapshot.docs.forEach((doc)=>{
        let data = doc.data();
        myLibrary.push(Book(data.title, data.author, data.pages, data.read, doc.id));
    })
    updateDisplay();
})
.catch(err => {
    console.log(err.message);
});

/******** Button Setup *********/


const newBookButton = document.getElementById('new-book');
newBookButton.addEventListener('click', ()=>{
    addBookButton.disabled = false;
    //if both are done in same poll then animation is skipped
    popups[1].style.display = 'block';
    setTimeout(()=>popups[1].classList.remove('hidden'), 1);
});

const addBookButton = document.getElementById('add-book');
addBookButton.addEventListener('click', addBookToLibrary);

function hidePopup(popup){
    popup.classList.add('hidden');
    addBookButton.disabled = true;
    setTimeout(()=>popup.style.display = 'none', 500);
}
const popups = document.querySelectorAll('.popup');
popups[1].addEventListener('click', (e) => hidePopup(e.target));

const inputForms = document.querySelectorAll('.inputs');
inputForms.forEach(form => {
    form.addEventListener('click', (e)=>{
        e.stopPropagation();
    })
});
const userForm = inputForms[0];
userForm.addEventListener('submit', e=>{
    e.preventDefault();
    hidePopup(popups[0]);
    console.log('signed in');
})

const clearLibraryButton = document.getElementById('clear-library');
clearLibraryButton.addEventListener('click', clearData);

/******** Global Variables *********/

let myLibrary = [];
let readButtons = [];
/******** Factory Functions *********/

function Book(title, author, pages, read, id){
    return Object.assign({}, {title, author, pages, read, id});
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
    setData(newBook);
    updateDisplay();
    form.reset();
    hidePopup(popups[1]); //the addbook popup
    
}

//function for read checkbox. named to allow removeEventListener
function UpdateRead(){
    this.book.read = !this.book.read;
    updateData(this.book);
    updateDisplay();
}

/************Firebase Setup******************/

/******** Functions *********/

//cant use for...in since we need to ignore the header row
//TODO: use classes on the elements to improve readability 
function updateDisplay(){
    const tableLibrary = document.getElementById('library').firstChild;
    //childNodes is live so get the starting length
    const startLen = tableLibrary?tableLibrary.childNodes.length: 0;
    for(let i = 2; i < startLen; ++i)
    {
        //remove the event listener to allow garbage collection
        readButtons[i-2].removeEventListener('click', UpdateRead);
        //since its live, every remove moves the next node down so index is constant
        tableLibrary.childNodes[2].remove();
        
    }
    myLibrary.sort((a, b)=>{
        return a.title >= b.title? 1: -1;
    })
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
    tableLibrary.firstChild.appendChild(tableRow);
}


function clearData(){
    myLibrary = [];
    getDocs(collRef).then((snapshot)=>{
        snapshot.docs.forEach(doc =>{
            deleteDoc(doc.ref);
        })
    }).catch((err)=>{
        console.log(err.message);
    });
    updateDisplay();
}

function setData(book){
    addDoc(collRef, {
        title: book.title,
        author: book.author,
        pages: book.pages,
        read: book.read, 
    }).then(docRef => {
        let i = myLibrary.indexOf(book)
        myLibrary[i].id = docRef.id;
    });
}

function updateData(book){
    updateDoc(doc(db, `books/${book.id}`), {
        read: book.read,
    })
}