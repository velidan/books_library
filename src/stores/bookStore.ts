// TODO: implement some DI
import { bookMapper } from "mappers";
import { getBooks } from "core/api/books.api";

// I'd like to use repository & storage pattern here
export const createStore = () => {
  // you can add getters as well but at my opinion it's redundant in this case
  const store: I_BooksStore = {
    books: [],

    fetchBooks() {
      return getBooks().then(res => {
        this.books = bookMapper.mapToClient(res);
        return res;
      });
    },

    create(book: I_Book) {
      console.log("book =>> ", book);
      // make a new array to provide immutability
      this.books = [...this.books, book];
      console.log("book", book, this.books);
      return Promise.resolve();
    },

    updateBookById(id: number, book: I_Book) {
      /*
        it's a very simple server updating simulation.

        In the real use case there should be used a server
        update request. Should return 200 and updated request.
      */
      const oldBook = this.findBookById(id);
      if (oldBook) {
        this.books[this.books.indexOf(oldBook)] = book;
      } else {
        // TODO: some nice use case handling
        alert("Can't find a book");
      }

      return Promise.resolve();
    },

    delete(book: I_Book) {
      /* should a server api call that returns 204 status. */
      this.books.splice(this.books.indexOf(book), 1);

      // make a new array to provide immutability
      this.books = [...this.books];

      return Promise.resolve();
    },

    findBookById(id: number) {
      return this.books.find(o => o.id === id);
    }
  };

  return store;
};
