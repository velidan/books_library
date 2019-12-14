import * as React from "react";

import { observer } from "mobx-react";
import { useEffect, useState } from "react";

import { Book } from "models";

import { storeContext } from "stores";
import { Table } from "shared/components";
import BookEdit from "./BookEdit";

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

  useEffect(() => {
    booksStore.fetchBooks();
  }, []);

  // TODO: add info about it
  const tableData = {
    columns: columns,
    rows: booksStore.books
  };

  return (
    <main className="main-wrapper">
      <h1>Home</h1>
      <button
        onClick={() => {
          toastStore
            .setRenderConf({
              type: "success",
              message: "Success Toast"
            })
            .show();
        }}
      >
        Show Snack
      </button>

      <Table<I_Book>
        data={tableData}
        actions={{
          onRowAdd: () => {
            setbookEditState({ open: true });
          },
          onRowEdit: (book: I_Book) => {
            setbookEditState({ open: true, book });
          },
          onRowDelete: (book: I_Book) => {
            alert("Delete Book");
            console.log(book);
          }
        }}
      />

      <BookEdit
        book={bookEditState.book}
        open={bookEditState.open}
        onClose={() => {
          setbookEditState({ open: false, book: undefined });
        }}
      />
    </main>
  );
}

export default observer(Home);
