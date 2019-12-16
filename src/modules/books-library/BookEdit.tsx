import * as React from "react";

import useForm from "react-hook-form";

import _get from "lodash/get";

import { Dialog, Button, Form, FormInput } from "shared/components";
import { validatorService } from "shared/services";
import { shallowClone } from "shared/utils";
import { Book } from "models";

const { createRequiredValidate, dateValidate } = validatorService;

export enum EditMode {
  edit,
  create
}

type Props = {
  book: I_Book | undefined;
  open: boolean;
  onSubmit: (fieldsData: I_Book, mode: EditMode) => void;
  onClose: () => void;
};

export default function EditBook(props: Props) {
  const { book: propsBook, open, onClose, onSubmit: propsOnSubmit } = props;
  const mode = propsBook ? EditMode.edit : EditMode.create;

  const resBook = propsBook || new Book();
  const [book, setBook] = React.useState(resBook);
  const formRef: React.Ref<HTMLFormElement> = React.createRef();

  /* could be set default values instead local state but it requires 
   * more complicated configurations and more time. I don't have it unfortunatelly.

   Btw. I don't like the 3rd forms because their integration 
   could take a lot time and be tricky (like this one)
   In my projects I prefer to use own solution.

   In this case 3rd form had been used for validation functionality only to save time.
   */
  const { register, setValue, handleSubmit, errors } = useForm();

  const onSubmit = (_: any, e: React.FormEvent) => {
    e.preventDefault();
    propsOnSubmit(book, mode);
  };

  const generateOnChange = (fieldName: "author" | "title" | "date") => (
    val: string
  ) => {
    // as it model need to save getters/setters.
    // To increase performance would be nice to use debounce
    // + It's possible to avoid this React-way and work with model till the save
    const res = shallowClone(book, { [fieldName]: val });

    setValue(fieldName, val, true);
    setBook(res);
  };

  const actions = [
    <Button key="cancel-btn" onClick={onClose}>
      Cancel
    </Button>,
    <Button
      key="save-btn"
      onClick={() => {
        if (formRef.current) {
          formRef.current.dispatchEvent(
            new Event("submit", { cancelable: true })
          );
        }
      }}
    >
      Save
    </Button>
  ];
  const dialogTitle = mode === EditMode.edit ? "Edit Book" : "Create Book";

  return (
    <Dialog
      open={open}
      onClose={onClose}
      actions={actions}
      title={dialogTitle}
      description="Some description text. Eg. To work with the Book data, please, use the Form"
    >
      <Form withRef={formRef} onSubmit={handleSubmit(onSubmit as any)}>
        <FormInput
          inputRef={register({
            validate: {
              // custom error message
              required: createRequiredValidate("Please, fill the field")
            }
          })}
          id="author"
          label={"Author"}
          error={_get(errors, "author.message", "") as string}
          value={book.author}
          onChange={generateOnChange("author")}
          /* TODO: Some kind of issue with the MUI Autofocus */
          autoFocus
        />
        <FormInput
          inputRef={register({
            validate: {
              // default error message
              required: createRequiredValidate()
            }
          })}
          id="title"
          label={"Title"}
          error={_get(errors, "title.message", "") as string}
          value={book.title}
          onChange={generateOnChange("title")}
        />
        <FormInput
          inputRef={register({
            validate: {
              // default error message
              required: createRequiredValidate(),
              format: dateValidate
            }
          })}
          id="date"
          label={"date"}
          error={_get(errors, "date.message", "") as string}
          value={book.date}
          onChange={generateOnChange("date")}
        />
      </Form>
    </Dialog>
  );
}
