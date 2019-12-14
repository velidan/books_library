import * as React from "react";
import MaterialButton from "@material-ui/core/Button";

type Props = {
  onClick: () => void;
  children: React.ReactNode;
};

export default function Button(props: Props) {
  const { onClick, children } = props;

  return (
    <MaterialButton onClick={onClick} color="primary">
      {children}
    </MaterialButton>
  );
}
