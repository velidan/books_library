import * as React from "react";
import MaterialDialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

type Props = {
  children: React.ReactNode;
  actions: React.ReactNode;
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
};

export default function Dialog(props: Props) {
  const { children, actions, open, onClose, title, description } = props;

  return (
    <MaterialDialog
      open={open}
      onClose={onClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">{title}</DialogTitle>

      <DialogContent>
        <DialogContentText>{description}</DialogContentText>
        {children}
      </DialogContent>
      <DialogActions>{actions}</DialogActions>
    </MaterialDialog>
  );
}
