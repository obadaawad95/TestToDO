import * as React from "react";
import { Box, Modal } from "@mui/material";
import { EditForm } from "./lib/EditForm";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "#ECF0F1",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};
export const EditTask = ({
  open,
  handleClose,
  title,
  setDesc,
  setTitle,
  _handleEdit,
  desc,
}) => {
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <EditForm
            title={title}
            setDesc={setDesc}
            setTitle={setTitle}
            _handleEdit={_handleEdit}
            desc={desc}
          />
        </Box>
      </Modal>
    </div>
  );
};
