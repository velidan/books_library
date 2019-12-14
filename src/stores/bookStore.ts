// TODO: implement some DI

import { bookMapper } from "mappers";

const mockData = [
  {
    id: 0,
    author: "John Smith",
    title: "Policenauts",
    date: "1996-10-15T02:35:32.000Z"
  },
  {
    id: 1,
    author: "Rei Kinshima",
    title: "The land of violence",
    date: "2001-05-12T05:21:37.000Z"
  },
  {
    id: 2,
    author: "Nicolas Rawenclaw",
    title: "Happy moments",
    date: "2007-02-03T02:43:37.000Z"
  },
  {
    id: 3,
    author: "Alatiel Vestra",
    title: "The metal incognito",
    date: "2010-11-04T01:43:37.000Z"
  }
];

export const createStore = () => {
  // you can add getters as well but at my opinion it's redundant in this case
  const store: I_BooksStore = {
    books: [],

    fetchBooks() {
      this.books = bookMapper.mapToClient(mockData);
    },

    updateBookById(id: number) {},
    deleteBookById(id: number) {}
  };

  return store;
};
