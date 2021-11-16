function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    let item = title + ' by ' + author + ', ' + pages + ' pages' + ', ' + read + 't read yet';
    return item;
  };
}

const abook = new Book('Harry Potter and the Philospher Stone', 'J.K.Roweling', '223', 'no');

console.log(abook.info());
