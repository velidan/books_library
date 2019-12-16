import * as React from "react";
import MaterialButton from "@material-ui/core/Button";
import cn from "classnames";

type Props = {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  [index: string]: any; // any material ui prop
};

export default function Button(props: Props) {
  const { onClick, children, className, ...others } = props;

  return (
    <MaterialButton
      {...others}
      className={cn("action-button save", className)}
      onClick={onClick}
      color="primary"
    >
      {children}
    </MaterialButton>
  );
}
