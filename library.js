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

    const form = document.querySelector('#bookForm')
    form.addEventListener("submit", function (event) {
        console.log("event is ")
        console.dir(event)
        addBookToLibrary(event)
    })

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

    Object.values(bookToAdd).forEach((value, key) => {
        console.log(value[key]);
        const rowContainer = document.querySelector('.contentRow' + (recordNumber))
        const contentTD = document.createElement('td');
        contentTD.textContent = val[key];
        rowContainer.appendChild(contentTD)



    });
    // Object.values(myLibrary.slice(-1)).forEach(value => console.log(value));

    // Object.entries(bookToAdd).forEach(([key, value]) => {
    //     console.log(`${key} -> ${value}`)
    // })

    // Object.values(bookToAdd).forEach(item => console.log(item));
    // for (let key in bookToAdd) {
    //     console.log(bookToAdd[key])
    // }

    // bookToAdd.forEach(function element(value) {
    //     const rowContainer = document.querySelector('.contentRow' + (recordNumber))
    //     const contentTD = document.createElement('td');
    //     contentTD.textContent = value
    //     rowContainer.appendChild(contentTD)

    // })

    // for (let key in bookToAdd.value) {
    //     //         //add data from each book to the row
    //     const rowContainer = document.querySelector('.contentRow' + (recordNumber))
    //     const contentTD = document.createElement('td');
    //     contentTD.textContent = value[key]
    //     rowContainer.appendChild(contentTD)
    // }
};


window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    showBooks();
    console.log("set event listener for submit button")
    const form = document.querySelector('#bookForm')
    console.log(form)
    const btn = document.getElementById('submitButton');
    btn.addEventListener("click", function (event) {
        console.log('clicked the submit button');
        console.log("event is ")
        console.dir(event)
        addBookToLibrary()
    })
    // const btn = document.querySelector('#submitButton');
});