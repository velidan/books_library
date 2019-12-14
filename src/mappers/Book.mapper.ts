// use the separated import as we need only one Model
import Book from "models/Book";

function mapToClient(data: BookTypeServer[]): I_Book[] {
  return data.map(
    (book: BookTypeServer): I_Book => {
      // TODO: some date service
      const res = { ...book, date: new Date(book.date).toString() };
      return new Book(res);
    }
  );
}

function mapToServer(data: BookTypeClient[]): BookTypeServer[] {
  return data.map(book => ({ ...book, date: book.date.toString() }));
}

export default {
  mapToClient,
  mapToServer
};
