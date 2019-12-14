import * as React from "react";

import { observer } from "mobx-react";

import { storeContext, StoresEnum } from "stores";

// remove from home
import BookItem from "./BookItem";
import { Table } from "shared/components";

// don't want to recreate the array for each-re-render.
// Let's use the pointer
const columns: HeadItem[] = [
  { label: "Title", field: "title" },
  { label: "Author", field: "author" },
  { label: "Date", field: "date" }
];

function Home() {
  /* here could be some hook to provide some dedicated stores instead the root store
   * but now it's redundant and I don't want to waste time for it.
   */
  const booksStore = React.useContext(storeContext)[StoresEnum.booksStore];

  React.useEffect(() => {
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

      <Table<I_Book>
        data={tableData}
        actions={{
          onRowAdd: () => alert("Add"),
          onRowEdit: (book: I_Book) => {
            booksStore.updateBookById(book.id);
          },
          onRowDelete: (book: I_Book) => {
            booksStore.deleteBookById(book.id);
          }
        }}
      />

      {/* { booksStore.books.map(o => <BookItem key={o.id} {...o} /> ) } */}
    </main>
  );
}

export default observer(Home);
