// use the separated import as we need only one Model
import Book from "models/Book";
import { dateService } from "shared/services";

function mapToClient(data: BookTypeServer[]): I_Book[] {
  return data.map(
    (book: BookTypeServer): I_Book => {
      const res = { ...book, date: dateService.formatISO(book.date) };
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
