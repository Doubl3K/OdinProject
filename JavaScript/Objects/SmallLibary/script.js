const abook = new Book('Harry Poa', 'JayKey', '2222', true);
let myLibaly = [];
let i = 0;
myLibaly[i] = Book.info;
i++;
console.log(myLibaly);
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    let item = title + ' by ' + author + ', ' + pages + ' pages' + ', ' + read;
    return item;
  };

  // new entry function
}

function addBookToLibrary() {
  const confirmButton = document.getElementById('confirm');
  confirmButton.addEventListener('click', ()=> {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    let read = true;
    if (document.getElementById('r1y').checked) {
      read = true;
    }else {
      read = false;
    }

    const abook = new Book(title, author, pages, read);

    //Styling Output to User
    let div = document.createElement('div');
    let text = document.createTextNode('Entry has been added!');
    div.appendChild(text);
    document.getElementById('whitespace').appendChild(div);
    div.style.cssText = `color: rgb(113, 236, 133);
      text-align:center;
      margin-top: 10px;
      `;
    setTimeout(function () {
        div.removeChild(div.firstChild);
      }, 5000);
  });
}

addBookToLibrary();
