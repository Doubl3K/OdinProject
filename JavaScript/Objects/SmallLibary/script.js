function Library() {
  myLibaly[i] = info + didread;
  console.log(myLibaly);
  let div = document.createElement('div');
  let book = document.createTextNode(info);
  let ed = document.createElement('button');
  let edtext = '';
  if (didread == true) {
    edtext = document.createTextNode('Read');
    ed.style.cssText = `background-color : #21ef0a;
    position: fixed;
    right: 70px;`;
  } else if (didread == false) {
    edtext = document.createTextNode('Not Read');
    ed.style.cssText = `background-color : #dade05;
    position: fixed;
    right: 70px;`;
  }

  ed.appendChild(edtext);
  div.appendChild(ed);
  div.appendChild(book);

  ed.addEventListener('click', () => {
    if (didread == true) {
      ed.removeChild(edtext);
      edtext = document.createTextNode('Not Read');
      ed.appendChild(edtext);
      ed.style.cssText = `background-color : #dade05;
      position: fixed;
      right: 70px;`;
      didread = false;
    } else {
      ed.removeChild(edtext);
      edtext = document.createTextNode('Read');
      ed.appendChild(edtext);
      ed.style.cssText = `background-color : #21ef0a;
      position: fixed;
      right: 70px;`;
      didread = true;
    }
  });
  deleteEntry(div, myLibaly);
  document.getElementById('library').appendChild(div);
  i++;

  //Styling
  div.style.cssText = `background-color: #777373;
  border: solid white 2px;
  width: 99%;`;

}

function deleteEntry(div) {
  let rem = document.createElement('button');
  let remtext = document.createTextNode('remove');
  rem.id = i;
  rem.appendChild(remtext);
  div.appendChild(rem);
  rem.addEventListener('click', () => {
    rem.parentElement.remove();
    myLibaly.splice(rem.getElementById, 1);
    i--;
  });
  rem.style.cssText = `background-color : #ff003b;
    position: fixed;
    right:5px;`;
}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  info = title + ', by ' + author + ', ' + pages + ' pages';
  didread = this.read;

}

function addBookToLibrary() {
  const confirmButton = document.getElementById('confirm');
  confirmButton.addEventListener('click', () => {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    let read = '';
    if (document.getElementById('r1y').checked) {
      read = true;
    } else {
      read = false;
    }

    const abook = new Book(title, author, pages, read);
    entryAdded();
    Library();
  });
}

function entryAdded() {
  //Text animation for new Entry
  let div = document.createElement('div');
  let text = document.createTextNode('Entry has been added!');
  div.appendChild(text);
  document.getElementById('whitespace').appendChild(div);
  div.style.cssText = `color: rgb(113, 236, 133);
    text-align:center;
    margin-top: 10px;
    `;
  setTimeout(function() {
    div.removeChild(div.firstChild);
  }, 5000);
}

let i = 0;
let myLibaly = [];
addBookToLibrary();
