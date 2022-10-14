// library.js

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

function Book() {
    // the constructor
}

function addBookToLibrary() {
    // add a book
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
        contentRow.classList.add('contentRow' + (index + 1));
        contentRow.textContent = 'This is a new table row';
        container.appendChild(contentRow)
        //add data from each book to the row
        const rowContainer = document.querySelector('.contentRow' + (index + 1))
        const contentTD = document.createElement('td');
        rowContainer.appendChild(contentTD)




    });
}


window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    showBooks();
});