import * as React from "react";
import { Box, Modal } from "@mui/material";
import InputForm from "./lib/InputForm";
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
export const AddTask = ({
  open,
  handleClose,
  title,
  setTitle,
  desc,
  setDesc,
  addNewTask,
}) => {
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <InputForm
            name={title}
            setName={setTitle}
            desc={desc}
            setDesc={setDesc}
            addNewTask={addNewTask}
          />
        </Box>
      </Modal>
    </div>
  );
};
