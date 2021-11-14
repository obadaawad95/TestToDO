import * as React from "react";
import { Button, AppBar, Box, Toolbar, Typography, Badge } from "@mui/material";
import ArchiveIcon from "@mui/icons-material/Archive";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { NavLink } from "react-router-dom";
import { NONE } from "apisauce";

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
          <Box
            sx={{
              display: { xs: "none", md: "flex", sm: "block" },
              alignItems: "center",
            }}
          >
            <Button
              onClick={props.showModal}
              variant="ghost"
              startIcon={<AddCircleIcon />}
            >
              Add Task
            </Button>
            <Button variant="ghost">
              <a
                href="/weather"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Weather{" "}
              </a>
            </Button>
            {/* <NavLink to="/weather">Weather</NavLink> */}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
