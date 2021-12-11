let books = document.querySelector("#books-display");

let book1= new Book(" \"Pirates of the web\" ", "Ben Simmons", 23, false);
let book2= new Book(" \"Mafalda (2002)\"", "Quino", 89, true);

addBookToLibrary(book1);
addBookToLibrary(book2);

const data_to_read = ["name", "author", "pages", "read"];

const submit_btn = document.querySelector("#submit");
submit_btn.addEventListener("click", submitBook);

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}


function entryFromBook(book){
    const entry = document.createElement("div");
    entry.classList.add("book");
    for (const prop in book) {
        if (prop != "read") {
            const book_data = document.createElement("div");
            book_data.textContent = book[prop] + (prop === "pages" ? " pages" : "");
            entry.appendChild(book_data);
        }
    }
    const read = document.createElement("button");
    read.classList.add( book.read ? "read" : "not-read" );
    read.innerText =  "Read";
    read.addEventListener("click", readBook);
    entry.appendChild(read);

    const remove = document.createElement("button");
    remove.classList.add( "remove");
    remove.innerText =  "Remove";
    remove.addEventListener("click", () => removeBook(book.name) );
    entry.appendChild(remove);

    return entry;
}

function readBook(e) {
    if (e.target.classList.contains("read") ) {
      e.target.classList.replace("read", "not-read");
    }
    else {
      e.target.classList.replace( "not-read", "read");
    };
}

function removeBook(title) {
  for (let book of books.childNodes) {
      if (book.childNodes[0] !== undefined && book.childNodes[0].textContent === title)
        books.removeChild(book);
  }
  
}

function submitBook() {
  let new_book = new Book();
  for (const data of data_to_read) {
    const info = document.querySelector(`#${data}`);
      new_book[data] =  data !== "read" ? info.value : info.checked;
      info.value = null;
  }
  addBookToLibrary(new_book);
}


function addBookToLibrary(book) {
  books.appendChild(entryFromBook(book));
}





