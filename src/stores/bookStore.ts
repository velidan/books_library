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
      return new Promise(res => {
        this.checkIsTitleUnique(book.title);

        // make a new array to provide immutability
        this.books = [...this.books, book];
        res();
      });
    },

    updateBookById(id: number, book: I_Book) {
      return new Promise(res => {
        this.checkIsTitleUnique(book.title);
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
        res();
      });
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
    },

    checkIsTitleUnique(title: string) {
      // reject if the title already exists
      if (this.isTitleExists(title)) {
        // it should be some errors enum etc. Shouldn't be hardcoded in real case
        throw new Error("This title already exists!");
      }
    },

    isTitleExists(title: string) {
      // toLowerCase as we have getters that pipes UI to different form
      return this.books.some(o => {
        return o.title.toLowerCase() === title.toLowerCase();
      });
    }
  };

  return store;
};
