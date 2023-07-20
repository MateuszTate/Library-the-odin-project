let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.returnInfo = function() {
        let isRead = "not read yet";
        if(read==='read') isRead = "already read";
        return(title+" by "+author+", "+pages+" pages, "+isRead);
    }
}


function addBookToLibrary() {
    const bookNameValue = document.getElementById('bookName').value;
    const authorNameValue = document.getElementById('authorName').value;
    const howManyPages = document.getElementById('pagesNumber').value;
    const isReadValue = document.getElementById('isRead').value;

    const newBook = new Book(bookNameValue, authorNameValue, howManyPages, isReadValue);
    myLibrary.push(newBook);
}



const result = document.querySelector('.result');
function displayBooks () {
    result.innerHTML = '';

    myLibrary.forEach(book => {
        const bookInfo = book.returnInfo()
         const bookContainer = document.createElement('div');
         bookContainer.classList.add('book-container');
 
         const titleDiv = document.createElement('div');
         titleDiv.classList.add('book-title');
         titleDiv.textContent = book.title;
 
         const authorDiv = document.createElement('div');
         authorDiv.classList.add('book-author');
         authorDiv.textContent = book.author;
 
         const pagesDiv = document.createElement('div');
         pagesDiv.classList.add('book-pages');
         pagesDiv.textContent = book.pages + " pages";
 
         const readDiv = document.createElement('div');
         readDiv.classList.add('book-read');
         readDiv.textContent = book.read === 'read' ? 'Already read' : 'Not read yet';
 
         bookContainer.appendChild(titleDiv);
         bookContainer.appendChild(authorDiv);
         bookContainer.appendChild(pagesDiv);
         bookContainer.appendChild(readDiv);
 
         result.appendChild(bookContainer);
       });
}

const submitButton = document.getElementById('submitButton');


submitButton.addEventListener("click", function(){
    addBookToLibrary();
    console.log(myLibrary);
    displayBooks();
});

