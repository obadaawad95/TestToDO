import * as React from "react";
import { Button, AppBar, Box, Toolbar, Typography, Badge } from "@mui/material";
import ArchiveIcon from "@mui/icons-material/Archive";
import AddCircleIcon from "@material-ui/icons/AddCircle";

export const Header = (props) => {
  return (
    <Box sx={{ flexGrow: 1, display: "flex", flexWrap: "wrap" }}>
      <AppBar position="static" style={{ background: "#DB4C3F" }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Obada Awad
          </Typography>
          <Badge
            badgeContent={props.archived}
            color="info"
            onClick={props.showArchModel}
          >
            <ArchiveIcon color="#fff" />
          </Badge>
          <Typography
            variant="h6"
            noWrap
            component="div"
            marginLeft="500px"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            My Todo App
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex", sm: "block" } }}>
            <Button
              onClick={props.showModal}
              variant="ghost"
              startIcon={<AddCircleIcon />}
            >
              Add Task
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
