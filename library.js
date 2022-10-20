// library.js
// initial data
let myLibrary;
const DEFAULT_DATA = [{
    title: "book1",
    author: "author1",
    pages: "pages1",
    read: "yes"
},
{
    title: "book2",
    author: "author2",
    pages: "pages2",
    read: "no"
},
{
    title: "book3",
    author: "author",
    pages: "pages3",
    read: "yes"
}
];

const $title = document.querySelector('#title');
const $author = document.querySelector('#author');
const $pages = document.querySelector('#pages');
const $read = document.querySelector('#read');
const $form = document.querySelector('#bookForm').addEventListener('submit', (e) => {
    e.preventDefault();
    addBookToLibrary();
})


// constructor
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(event) {
    console.log(event)
    const newBook = new Book($title.title, $author.author, $pages.pages, $read.read);
    myLibrary.push(newBook);
    updateLocalStorage();
}

function updateLocalStorage() {
    if (localStorage.getItem('myLibrary')) {
        myLibrary = JSON.parse(localStorage.getItem('myLibrary'));
    } else {
        myLibrary = DEFAULT_DATA;
    }
}



// write function to loop through the books and display them on a page
function showBooks() {
    myLibrary.forEach(function element(value, index) {
        console.log("index is " + index);
        console.log("value is ");
        console.dir(value)
        //add a row for myLibrary record
        const container = document.querySelector('#bookRow');
        const contentRow = document.createElement('tr');
        contentRow.classList.add('contentRow' + (index));
        // contentRow.textContent = 'This is a new table row';
        container.appendChild(contentRow)

        for (let key in value) {
            //add data from each book to the row
            const rowContainer = document.querySelector('.contentRow' + (index))
            const contentTD = document.createElement('td');
            contentTD.textContent = value[key]
            rowContainer.appendChild(contentTD)
        }
    });
}

function render() {
    checkLocalStorage();
}


window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    showBooks();

    // get form data
    console.log("set event listener for submit button")
    const form = document.querySelector('#bookForm')
    console.log(form);
    form.addEventListener("submit", handleFormSubmit);


});