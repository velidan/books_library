import * as React from "react";

import Fab from "@material-ui/core/Fab";

type Props = {
  icon: JSX.Element;
  onClick: (e: React.SyntheticEvent) => void;
};

export default function RoundButton({ icon, onClick }: Props) {
  return (
    <Fab className="round-btn" aria-label="edit" onClick={onClick}>
      {icon}
    </Fab>
  );
}
