import * as React from "react";
import Snackbar from "@material-ui/core/Snackbar";

type Props = {
  open: boolean;
  onClose: () => void;
  config: I_ToastConf;
};

export default function Toast(props: Props) {
  const { open, onClose, config } = props;

  const registryKeys = ["info", "error", "success"];

  if (!registryKeys.includes(config.type)) {
    console.warn(`Can't find snack with the passed type. Passed type -> ${config.type}.
    Existed types:`);
    console.warn(registryKeys);
    return null;
  }

  return (
    <div>
      <Snackbar open={open} onClose={onClose} {...config} />
    </div>
  );
}
