import * as React from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
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
};

export default function Dialog(props: Props) {
  const { children, actions, open, onClose } = props;

  return (
    <MaterialDialog
      open={open}
      onClose={onClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Edit book</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To edit book, please, use the form below.
        </DialogContentText>
        {children}
      </DialogContent>
      <DialogActions>{actions}</DialogActions>
    </MaterialDialog>
  );
}
