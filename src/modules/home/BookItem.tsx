import * as React from "react";

export default function BookItem(book: I_Book) {
  return (
    <div>
      title: <h1>{book.title}</h1>
      author: <p>{book.author}</p>
      date: <p>{book.date}</p>
    </div>
  );
}
