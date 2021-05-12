const books = [
  {
    title: 'Book',
    author: 'Name',
  },
  {
    title: 'Book2',
    author: 'Name2',
  },
];

const getTheTitles = function (books) {
  let result = books.map(function (book) {
    return book.title;
  });
  return result;
};
console.log(getTheTitles(books));
