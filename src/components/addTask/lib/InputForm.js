import * as React from "react";
import { Box, TextField, Button } from "@mui/material";

const InputForm = ({ name, setName, desc, setDesc, addNewTask }) => {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 2.5, width: "40ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="out1-basic"
        label="Title"
        variant="outlined"
        value={name}
        onChange={setName}
      />
      <TextField
        id="out2-basic"
        label="Description"
        variant="outlined"
        value={desc}
        onChange={setDesc}
      />

      <Button sx={{ ml: 20 }} variant="text" onClick={addNewTask}>
        Add Task
      </Button>
    </Box>
  );
};

export default InputForm;
