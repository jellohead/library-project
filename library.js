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
    //loop through and show books in myLibrary

    const divBookContainer = document.getElementById("containerId")
    const bookListItem = document.createElement("div")
    const divText = document.createTextNode("new node")
    bookListItem.appendChild(divText)
    divBookContainer.appendChild(bookListItem)
    myLibrary.forEach(element => {


        console.log(element)


    });

}

showBooks();
