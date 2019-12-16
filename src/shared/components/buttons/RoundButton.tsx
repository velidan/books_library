import * as React from "react";

import Fab from "@material-ui/core/Fab";

import cn from "classnames";

type Props = {
  icon: JSX.Element;
  onClick: (e: React.SyntheticEvent) => void;
  className?: string;
};

export default function RoundButton({ icon, onClick, className }: Props) {
  return (
    <Fab
      className={cn("round-btn", className)}
      aria-label="edit"
      onClick={onClick}
    >
      {icon}
    </Fab>
  );
}
