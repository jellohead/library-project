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

function addBookToLibrary(event) {
    console.div(event)
    // add a book
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


window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    showBooks();
    console.log("set event listener for submit button")
    const form = document.querySelector('#bookForm')
    console.dir(form)
    form.addEventListener("submit", function (event) {
        console.log("event is ")
        console.dir(event)
        addBookToLibrary(event)
    })

});