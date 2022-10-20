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


// constructor
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(event) {
    console.log(event)
    // add a book
    // create a form to enter book data
    // call constructor by clicking a button
    // add book to myLibrary and append to table
}

function sendData(data) {
    console.log('Sending data')
    const XHR = new XMLHttpRequest()
    const urlEncodedDataPairs = []
    for (const [name, value] of Object.entries(data)) {
        urlEncodedDataPairs.push(`${encodeURIComponent(name)}=${encodeURIComponent(value)}`)
    }

    const urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+')
    XHR.addEventListener('load', (event) => {
        alert('Yeah! Data sent and response loaded')
    })

    XHR.addEventListener('error', (event) => {
        alert('Oops! Something went wrong.')
    })

    XHR.open('POST', 't')
}

// write function to loop through the books and display them on a page
function showBooks() {

    // const form = document.querySelector('#bookForm')
    // form.addEventListener("submit", function (event) {
    //     console.log("event is ")
    //     console.dir(event)
    //     addBookToLibrary(event)
    // })

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

async function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const url = form.action;

    try {
        const formData = new FormData(form);
        const responseData = await postFormDataAsJson({ url, formData });
        console.log({ responseData });
    } catch (error) {
        console.error(error);
    }
}

async function postFormDataAsJson({ url, formData }) {
    const plainFormData = Object.fromEntries(formData.entries());
    const formDataJsonString = JSON.stringify(plainFormData);

    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: formDataJsonString,
    };
    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
    }
    return response.json()
}


window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    showBooks();

    // get form data
    console.log("set event listener for submit button")
    const form = document.querySelector('#bookForm')
    console.log(...form);
    form.addEventListener("submit", handleFormSubmit);


});