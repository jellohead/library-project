// library.js
// initial data
let myLibrary = [{
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
const $form = document.querySelector('#bookForm').addEventListener("submit", (e) => {
    e.preventDefault();
    addBookToLibrary();
    render();
    clearForm();
});

// constructor
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary() {
    console.log('adding a book to myLibrary')
    const newBook = new Book($title.value, $author.value, $pages.value, $read.value);
    myLibrary.push(newBook);
    console.log("added a new book");
    console.log(myLibrary.length);
    console.dir(myLibrary);
    updateMyBooks();
}

// write function to loop through the books and display them on a page
function showBooks() {
    myLibrary.forEach(function element(value, index) {
        const container = document.querySelector('#bookRow');
        const contentRow = document.createElement('tr');
        contentRow.classList.add('contentRow' + (index));
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

function updateMyBooks() {
    const recordNumber = myLibrary.length - 1;
    console.log(recordNumber);
    const bookToAdd = myLibrary.slice(-1);
    console.dir(bookToAdd);

    const container = document.querySelector('#bookRow');
    const contentRow = document.createElement('tr');
    contentRow.classList.add('contentRow' + recordNumber);
    container.appendChild(contentRow)

    const rowContainer = document.querySelector('.contentRow' + (recordNumber))

    contentTD = document.createElement('td');
    contentTD.textContent = $title.value;
    rowContainer.appendChild(contentTD)

    contentTD = document.createElement('td');
    contentTD.textContent = $author.value;
    rowContainer.appendChild(contentTD)

    contentTD = document.createElement('td');
    contentTD.textContent = $pages.value;
    rowContainer.appendChild(contentTD)

    contentTD = document.createElement('td');
    contentTD.textContent = $read.value;
    rowContainer.appendChild(contentTD)
};

function render() {
}

function clearForm() {
    $title.value = "";
    $author.value = "";
    $pages.value = "";
    $read.value = "";
}

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    // populate table with default data
    showBooks();
});