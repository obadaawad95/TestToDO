import React from "react";
import { Header, AddTask, EditTask, DialogComponent } from "../../components";
import { uuid } from "uuidv4";
import { Box } from "@mui/system";
import {
  Typography,
  Container,
  Button,
  Checkbox,
  Switch,
  CssBaseline,
  Paper,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getWeather, selectWeather } from "../../store/weather";
import ArchieveForm from "../../components/archievedTask/lib/ArchieveForm";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
// import { Container, Switch, CssBaseline } from "@material-ui/core";
export const HomePage = ({ lat, lon }) => {
  const localData = JSON.parse(localStorage.getItem("tasks"));
  const [mode, setMode] = React.useState("light");
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const weatherInfo = useSelector(selectWeather);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openDialog, setDialog] = React.useState(false);
  const [openArch, setOpenArch] = React.useState(false);
  const [editedTask, setEditedTask] = React.useState();
  const [showedTask, setShowed] = React.useState();
  const [title, setTitle] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [titleE, setTitleE] = React.useState(editedTask?.title);
  const [descE, setDescE] = React.useState(editedTask?.desc);
  const [show, setShow] = React.useState();
  const [showA, setShowA] = React.useState();
  const [latt, setLat] = React.useState(lat);
  const [lonn, setLon] = React.useState(lon);
  const [tasks, setTasks] = React.useState(localData || []);
  const [archived, setArchived] = React.useState([]);

  let reqParams = {
    lat: lat,
    lon: lon,
    appid: "e1d52bfd158b679d2d6fd667d18db607",
  };

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);

      dispatch(
        getWeather({
          lon: position.coords.latitude,
          appid: "7956ac64be1e40e0f8bbb3aebfd4d201",
          lat: position.coords.longitude,
        })
      );
    });
  }, [dispatch]);
  console.log("weather", weatherInfo);
  React.useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  console.log("lat", lon);
  React.useEffect(() => {
    setTitleE(editedTask?.title);
    setDescE(editedTask?.desc);
  }, [editedTask]);
  const deleteTask = (task) => {
    let newTasks = [...tasks];
    newTasks = newTasks.filter((el) => {
      return el.id !== task?.id;
    });

    setTasks(newTasks);
  };
  const archiveTask = (task) => {
    let newTasks = [...tasks];
    newTasks = newTasks.filter((el) => {
      return el.id !== task?.id;
    });
    task.ArchiveAt = new Date().toString();
    archived.push(task);
    setTasks(newTasks);
  };
  const UnarchiveTask = (task) => {
    let newTasks = [...archived];
    newTasks = newTasks.filter((el) => {
      return el.id !== task?.id;
    });
    task.ArchiveAt = "Not Archieved Yet";
    tasks.push(task);
    setArchived(newTasks);
  };
  const changeStatus = (task) => {
    const newTasks = [...tasks];
    newTasks.forEach((element) => {
      if (element.id === task.id) {
        task.Checked = !task.Checked;
        task.Checked
          ? (task.FinishedAt = new Date().toString())
          : (task.FinishedAt = "Not Finished Yet");
      }
    });
    setTasks(newTasks);
  };
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: mode,
          background: {
            dark: "hsl(230, 17%, 14%)",
            light: "hsl(0, 0%, 100%)",
          },
        },
      }),
    [mode]
  );
  const showArchModel = () => {
    setOpenArch(true);
  };
  const closeArchModel = () => {
    setOpenArch(false);
  };
  const _handleAddTask = () => {
    let newTask = [...tasks];
    if (title === "" || desc === "") {
      alert("put the values !!!!!!!!");
      setTasks(newTask);
    } else {
      newTask.push({
        id: uuid(),
        title,
        desc,
        Checked: false,
        createdAt: new Date().toString(),
        FinishedAt: "Not Finished Yet",
        ArchiveAt: "Not Archieved Yet",
      });
      setTasks(newTask);
    }
    setTitle("");
    setDesc("");
  };
  const _handleEdit = () => {
    let newTasks = [...tasks];
    let index = newTasks.findIndex((c) => {
      return c.id === editedTask.id;
    });
    newTasks[index].title = titleE;
    newTasks[index].desc = descE;
    setTasks(newTasks);
  };
  // console.log("taskes", tasks, archived);
  return (
    <>
      {/* <Switch onChange={() => setMode(mode === "light" ? "dark" : "light")} /> */}

      <Header
        showModal={() => setOpen(true)}
        archived={archived.length}
        showArchModel={showArchModel}
      />
      <Container maxWidth="lg" sx={{ marginTop: 10 }}>
        {tasks?.map((task, index) => {
          return (
            <div
              key={index}
              style={{
                justifyContent: "space-between",
                display: "flex",
                flexDirection: "row",
              }}
              onMouseEnter={() => setShow(index)}
              onMouseLeave={() => setShow()}
            >
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Checkbox
                  size="small"
                  checked={task?.Checked === true ? true : false}
                  onClick={() => changeStatus(task)}
                />
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
                    sx={{ color: "#4C4C4C" }}
                    variant="text"
                    onClick={() => {
                      setShowed(task);
                      setDialog(true);
                    }}
                  >
                    Show Details
                  </Button>
                  <Button
                    sx={{ color: "#76AAFF" }}
                    variant="text"
                    onClick={() => {
                      setEditedTask(task);
                      setOpenEdit(true);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    sx={{ color: "#DB4C3F" }}
                    variant="text"
                    onClick={() => deleteTask(task)}
                  >
                    Delete
                  </Button>
                  <Button
                    sx={{ color: "#39f" }}
                    variant="text"
                    onClick={() => archiveTask(task)}
                  >
                    Archive
                  </Button>
                </div>
              ) : null}
            </div>
          );
        })}
      </Container>

      <AddTask
        open={open}
        handleClose={() => setOpen(false)}
        title={title}
        setTitle={(event) => setTitle(event.target.value)}
        desc={desc}
        setDesc={(event) => setDesc(event.target.value)}
        addNewTask={_handleAddTask}
      />
      <EditTask
        open={openEdit}
        handleClose={() => setOpenEdit(false)}
        title={titleE}
        desc={descE}
        setDesc={(event) => setDescE(event.target.value)}
        setTitle={(event) => setTitleE(event.target.value)}
        _handleEdit={() => _handleEdit()}
      />

      <ArchieveForm
        archivedTask={archived}
        handleClose={() => setOpenArch(false)}
        open={openArch}
        _handleUnArchiveTask={(task) => UnarchiveTask(task)}
        show={showA}
        setShow={setShowA}
      />
      <DialogComponent
        ArchiveAt={showedTask?.ArchiveAt}
        FinishedAt={showedTask?.FinishedAt}
        createdAt={showedTask?.createdAt}
        open={openDialog}
        title={showedTask?.title}
        desc={showedTask?.desc}
        handleClose={() => setDialog(false)}
        Delete={() => console.log("delete")}
        Archive={() => console.log("Archeived")}
      />
    </>
  );
};
