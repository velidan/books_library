import * as React from "react";

import { observer } from "mobx-react";
import { useEffect, useState } from "react";

import { storeContext } from "stores";
import { Table } from "shared/components";
import BookEdit, { EditMode } from "./BookEdit";

// don't want to recreate the array for each-re-render.
// Let's use the pointer
const columns: HeadItem[] = [
  { label: "Title", field: "title" },
  { label: "Author", field: "author" },
  { label: "Date", field: "date" }
];

type BookEditState = {
  open: boolean;
  book?: I_Book | undefined;
};

function Home() {
  /* here could be some hook to provide some dedicated stores instead the root store
   * but now it's redundant and I don't want to waste time for it.
   */
  const { booksStore, toastStore } = React.useContext(storeContext);

  const [bookEditState, setbookEditState] = useState<BookEditState>({
    open: false,
    book: undefined
  });

  // fetch only once at the start
  useEffect(() => {
    booksStore.fetchBooks();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // TODO: add types
  const tableData = {
    columns: columns,
    rows: booksStore.books
  };

  // as we use 2 modes for the same component in the edit mode we need to pass edited form
  // in case of create - the new one will be create in EditBook component
  const closeEditBook = () => {
    setbookEditState({ open: false, book: undefined });
  };

  // could be created some shorthand notification service to simplify config
  const handleCRUDError = (err: Error) => {
    toastStore
      .setRenderConf({
        type: "error",
        message: err.message || "Something went wrong"
      })
      .show();
  };

  const editBook = (book: I_Book) => {
    booksStore
      .updateBookById(book.id, book)
      .then(() => {
        // could be created some shorthand notification service to simplify config
        toastStore
          .setRenderConf({
            type: "success",
            message: "Updated successfully"
          })
          .show();
        closeEditBook();
      })
      .catch(handleCRUDError);
  };

  const createBook = (book: I_Book) => {
    booksStore
      .create(book)
      .then(() => {
        toastStore
          .setRenderConf({
            type: "success",
            message: "Created successfully"
          })
          .show();
        closeEditBook();
      })
      .catch(handleCRUDError);
  };

  const deleteBook = (book: I_Book) => {
    booksStore
      .delete(book)
      .then(() => {
        toastStore
          .setRenderConf({
            type: "success",
            message: "Deleted successfully"
          })
          .show();
      })
      .catch(handleCRUDError);
  };

  const handleSubmit = (book: I_Book, mode: EditMode) => {
    const resultOperation = mode === EditMode.edit ? editBook : createBook;
    resultOperation(book);
  };

  return (
    <main className="main-wrapper books-library">
      <h1 className="primary-title">Book Library</h1>

      <Table<I_Book>
        className="book-table"
        data={tableData}
        actions={{
          onRowAdd: () => {
            setbookEditState({ open: true });
          },
          onRowEdit: (book: I_Book) => {
            setbookEditState({ open: true, book });
          },
          onRowDelete: deleteBook
        }}
      />

      {/* as we use the same component for Edit/Create. 
    Need to re-create it on each mode to fill the correct Model. 
    React.useState hook triggers only 1 time thus we'll have non updated model
    */}
      {bookEditState.open && (
        <BookEdit
          onSubmit={handleSubmit}
          book={bookEditState.book}
          open={bookEditState.open}
          onClose={closeEditBook}
        />
      )}
    </main>
  );
}

export default observer(Home);
