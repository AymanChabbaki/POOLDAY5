const books = require("./books.json");

function priceOfBook(bookName) {
  let price = 0;
  for (let i = 0; i < books.length; i++) {
    if (books[i].title === bookName) {
      price = books[i].price;
    }
  }
  return price; 
}

function affordableBooks(budget) {
  const result = [];
  for (let i = 0; i < books.length; i++) {
    if (books[i].price <= budget) {
      result.push(books[i]);
    }
  }
  return result;
}

function findBookByGenre(genre) {
  const result = [];
  for (let i = 0; i < books.length; i++) {
    for (let j = 0; j < books[i].genres.length; j++) {
      if (books[i].genres[j] === genre) {
        result.push(books[i]);
        break;
      }
    }
  }
  return result;
}

function groupByGenre() {
  const library = {};
  for (let i = 0; i < books.length; i++) {
    for (let j = 0; j < books[i].genres.length; j++) {
      const genre = books[i].genres[j];
      if (!library[genre]) {
        library[genre] = [];
      }
      library[genre].push(books[i]);
    }
  }
  return library;
}

function sortBooksByPrice() {
  const sortedBooks = books.slice();
  for (let i = 0; i < sortedBooks.length - 1; i++) {
    for (let j = 0; j < sortedBooks.length - i - 1; j++) {
      if (sortedBooks[j].price > sortedBooks[j + 1].price) {
        const temp = sortedBooks[j];
        sortedBooks[j] = sortedBooks[j + 1];
        sortedBooks[j + 1] = temp;
      }
    }
  }
  return sortedBooks;
}

(function main() {
  try {
    if (priceOfBook("The Alchemist") !== 9.49) {
      throw new Error("priceOfBook is not working properly.");
    }
    if (affordableBooks(10).length !== 6) {
      throw new Error("affordableBooks is not working properly.");
    }
    if (findBookByGenre("Fiction").length !== 7) {
      throw new Error("findBookByGenre is not working properly.");
    }
    if (Object.keys(groupByGenre()).length !== 30) {
      throw new Error("groupByGenre is not working properly.");
    }
    if (sortBooksByPrice()[0].price !== 5.99) {
      throw new Error("sortBooksByPrice is not working properly.");
    }
    console.log("All tests passed successfully.");
  } catch (error) {
    console.log(error);
  }
})();

var num = 123542;
function length(num) {
    let count = 0;
    while (num > 0) {
        count++;
        num = Math.floor(num / 10);
    }
    return count;
}
console.log(length(num));