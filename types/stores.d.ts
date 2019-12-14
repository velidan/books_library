
interface I_BooksStore {
	books: I_Book[];

	fetchBooks: () => void;
	updateBookById: (id: number) => void;
	deleteBookById: (id: number) => void;
}