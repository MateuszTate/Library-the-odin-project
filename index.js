let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.returnInfo = function () {
        let isRead = "not read yet";
        if (read === "read") isRead = "already read";
        return title + " by " + author + ", " + pages + " pages, " + isRead;
    };
}

function addBookToLibrary() {
    const bookNameValue = document.getElementById("bookName").value;
    const authorNameValue = document.getElementById("authorName").value;
    const howManyPages = document.getElementById("pagesNumber").value;
    const isReadValue = document.getElementById("isRead").value;

    const newBook = new Book(
        bookNameValue,
        authorNameValue,
        howManyPages,
        isReadValue
    );
    myLibrary.push(newBook);
}

// form validation

function validate() {
    const bookNameValue = document.getElementById("bookName").value;
    const authorNameValue = document.getElementById("authorName").value;
    const howManyPages = document.getElementById("pagesNumber").value;

    const submitButton = document.getElementById("submitButton");

    if (
        bookNameValue.length < 1 ||
        authorNameValue.length < 1 ||
        howManyPages < 10
    ) {
        submitButton.disabled = true;
    } else {
        submitButton.disabled = false;
    }
}

validate();

document.getElementById("bookName").addEventListener("input", validate);
document.getElementById("authorName").addEventListener("input", validate);
document.getElementById("pagesNumber").addEventListener("input", validate);

i = 0;

const result = document.querySelector(".result");
function displayBooks() {
    result.innerHTML = "";

    myLibrary.forEach((book, index) => {
        const bookInfo = book.returnInfo();
        const bookContainer = document.createElement("div");
        bookContainer.classList.add("book-container");

        const titleDiv = document.createElement("div");
        titleDiv.classList.add("book-title");
        titleDiv.textContent = book.title;

        const authorDiv = document.createElement("div");
        authorDiv.classList.add("book-author");
        authorDiv.textContent = book.author;

        const pagesDiv = document.createElement("div");
        pagesDiv.classList.add("book-pages");
        pagesDiv.textContent = book.pages + " pages";

        const readDiv = document.createElement("div");
        readDiv.classList.add("book-read");

        const readButton = document.createElement("button");
        readButton.classList.add("readButton");
        readButton.textContent = book.read === "read" ? "Already read" : "Not read yet";

        readButton.addEventListener("click", function () {
            book.read = book.read === "read" ? "not read yet" : "read";
            readButton.textContent = book.read === "read" ? "Already read" : "Not read yet";
        });

        const delButtonDiv = document.createElement("div");
        delButtonDiv.classList.add("delButtonDiv");

        const delButton = document.createElement("button");
        delButton.textContent = "DELETE";
        delButton.classList.add("deleteButton");

        delButton.id = "delID" + index;

        delButtonDiv.appendChild(delButton);

        readDiv.appendChild(readButton);

        bookContainer.appendChild(titleDiv);
        bookContainer.appendChild(authorDiv);
        bookContainer.appendChild(pagesDiv);
        bookContainer.appendChild(readDiv);

        bookContainer.appendChild(delButtonDiv);

        result.appendChild(bookContainer);

        delButton.addEventListener("click", function () {
            let buttonId = this.id;
            let index = parseInt(buttonId.replace("delID", ""), 10);

            myLibrary.splice(index, 1);
            displayBooks();
        });

        
    });
    i++;
}

const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", function () {
    addBookToLibrary();
    console.log(myLibrary);
    displayBooks();
});

let deleteButtonsList = document.querySelectorAll(".deleteButton");
console.log(deleteButtonsList);

deleteButtonsList.forEach(function (button) {
    console.log(2137);
    button.addEventListener("click", function () {
        let buttonId = button.id;

        myLibrary.splice(buttonId, 1);
        i--;
    });
});

