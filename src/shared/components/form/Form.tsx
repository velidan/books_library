import * as React from "react";

type Props = {
  onSubmit?: (e: React.FormEvent) => void;
  children: React.ReactNode;
  withRef: React.Ref<HTMLFormElement>;
};

export default function Form(props: Props) {
  const { children, onSubmit, withRef } = props;
  return (
    <form className="book-edit-form" ref={withRef} onSubmit={onSubmit}>
      {children}
      {/* Quick support for the Enter hit to form submit  */}
      <input
        style={{ height: 0, width: 0, visibility: "hidden" }}
        type="submit"
      />
    </form>
  );
}
