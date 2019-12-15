import * as React from "react";

import { Dialog, Button, TextInput } from "shared/components";
import { validatorService } from "shared/services";
import { Book } from "models";

const { createRequiredValidate, dateValidate } = validatorService;

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

  const resBook = propsBook || new Book();
  const [book, setBook] = React.useState(resBook);

  React.useEffect(() => {
    setBook(resBook);
  }, [mode]);

  const generateOnChange = (fieldName: string) => (val: string) => {
    console.log("book", book);
    const res = {
      ...book,
      title: book.title, // avoid a getter issue in use State
      [fieldName]: val
    };
    console.log("res =>", res);

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
      <TextInput
        autoFocus
        margin="dense"
        id="author"
        label="Author"
        type="text"
        value={book.author}
        onChange={generateOnChange("author")}
        fullWidth
        validators={[createRequiredValidate()]}
      />
      <TextInput
        autoFocus
        margin="dense"
        id="title"
        label="Title"
        type="text"
        value={book.title}
        onChange={generateOnChange("title")}
        fullWidth
        validators={[createRequiredValidate()]}
      />
      <TextInput
        autoFocus
        margin="dense"
        id="date"
        label="Date"
        type="date"
        value={book.date}
        onChange={generateOnChange("date")}
        fullWidth
        validators={[createRequiredValidate(), dateValidate]}
      />
    </Dialog>
  );
}
