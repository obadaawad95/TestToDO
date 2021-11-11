import React from "react";
import { Box, TextField, Button } from "@mui/material";

export const EditForm = ({ title, setTitle, setDesc, desc, _handleEdit }) => {
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
        label="Title"
        variant="outlined"
        value={title}
        onChange={setTitle}
      />
      <TextField
        label="Description"
        variant="outlined"
        value={desc}
        onChange={setDesc}
      />

      <Button sx={{ ml: 20 }} variant="text" onClick={_handleEdit}>
        Edit Task
      </Button>
    </Box>
  );
};
