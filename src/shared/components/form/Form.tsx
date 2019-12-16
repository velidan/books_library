import * as React from "react";

type Props = {
  onSubmit?: (e: React.FormEvent) => void;
  children: React.ReactNode;
  withRef: React.Ref<HTMLFormElement>;
};

// Could be added a hidden field to submit the form on Enter
export default function Form(props: Props) {
  const { children, onSubmit, withRef } = props;
  return (
    <form className="book-edit-form" ref={withRef} onSubmit={onSubmit}>
      {children}
    </form>
  );
}
