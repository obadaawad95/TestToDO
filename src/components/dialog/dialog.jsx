import React from "react";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export const DialogComponent = ({
  open,
  title,
  desc,
  handleClose,
  Delete,
  Archive,
  ArchiveAt,
  FinishedAt,
  createdAt,
}) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Description : {desc}
        </DialogContentText>
        <DialogContentText id="alert-dialog-slide-descriptions">
          Created at : {createdAt}
        </DialogContentText>
        <DialogContentText id="alert-dialog-slide-descriptionss">
          Finished at : {FinishedAt}
        </DialogContentText>
        <DialogContentText id="alert-dialog-slide-descriptionssss">
          Archieved at : {ArchiveAt}
        </DialogContentText>
      </DialogContent>
      {/* <DialogActions>
        <Button onClick={Delete}>Delete</Button>
        <Button onClick={Archive}>Archive</Button>
      </DialogActions> */}
    </Dialog>
  );
};
