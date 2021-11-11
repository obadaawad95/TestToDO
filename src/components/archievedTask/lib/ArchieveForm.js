import React from "react";
import { Typography, Modal, Button, Box } from "@mui/material";
const ArchieveForm = ({
  archivedTask,
  handleClose,
  open,
  _handleUnArchiveTask,
  show,
  setShow,
}) => {
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
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        {archivedTask?.map((task, index) => {
          return (
            <div
              style={{
                justifyContent: "space-between",
                display: "flex",
                flexDirection: "row",
              }}
              onMouseEnter={() => setShow(index)}
              onMouseLeave={() => setShow()}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginY: 2,
                }}
              >
                <Typography variant="h5">{task?.title}</Typography>

                <Typography
                  sx={{
                    color: "#1D1D1D",
                    fontFamily: "sans-serif",
                    fontSize: 11,
                  }}
                >
                  {task?.desc}
                </Typography>
              </Box>

              {show === index ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                  }}
                >
                  <Button
                    sx={{ color: "#39f" }}
                    variant="text"
                    onClick={() => _handleUnArchiveTask(task)}
                  >
                    UnArchive
                  </Button>
                </div>
              ) : null}
            </div>
          );
        })}
      </Box>
    </Modal>
  );
};

export default ArchieveForm;
