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
    // loop through and show books in myLibrary

    myLibrary.forEach(element => {



        const container = document.getElementById("container")
        console.dir(container)
        const content = document.createElement("div")
        console.log(content)

        content.classList.add("content")
        content.textContent = 'This is a new div'

        // document.getElementById("container").appendChild(content)

        container.appendChild(content)


        console.log(element)

    });
}


showBooks();
