import * as React from "react";

import TextField from "@material-ui/core/TextField";

import { Dialog, Button } from "shared/components";
import { Book } from "models";

type Props = {
  book: I_Book | undefined;
  open: boolean;
  onClose: () => void;
};

enum EditMode {
  edit,
  create
}

export default function EditBook(props: Props) {
  const { book: propsBook, open, onClose } = props;
  const mode = propsBook ? EditMode.edit : EditMode.create;

  const [book, setBook] = React.useState(propsBook || new Book());
  console.log("Book", book);

  const generateOnChange = (fieldName: string) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const res = {
      ...book,
      [fieldName]: e.target.value
    };

    setBook(res);
  };

  // TODO: temporary
  const actions = [
    <Button onClick={onClose}>Cancel</Button>,
    <Button onClick={onClose}>
      Save {mode === EditMode.edit ? "Edit" : "Create"}
    </Button>
  ];

  return (
    <Dialog open={open} onClose={onClose} actions={actions}>
      <TextField
        autoFocus
        margin="dense"
        id="author"
        label="Author"
        type="text"
        value={book.author}
        onChange={generateOnChange("author")}
        fullWidth
      />
      <TextField
        autoFocus
        margin="dense"
        id="title"
        label="Title"
        type="text"
        value={book.title}
        onChange={generateOnChange("title")}
        fullWidth
      />
      <TextField
        autoFocus
        margin="dense"
        id="date"
        label="Date"
        type="date"
        value={book.date}
        onChange={generateOnChange("date")}
        fullWidth
      />
    </Dialog>
  );
}
