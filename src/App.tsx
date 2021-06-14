import React, { useState } from "react";
import "./App.css";
import SimpleBottomNavigation from "./components/bottomNavigation";
import { makeStyles } from "@material-ui/core/styles";
import Clock from "./components/timeCounter";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import TimerIcon from "@material-ui/icons/Timer";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  content: {},
});

const App = () => {
  const classes = useStyles();
  const [tab, setTab] = useState("");
  const onTabChange = (value: string) => {
    setTab(value);
  };
  const [records, setRecords] = useState([] as any);

  const lap = (value: string) => {
    setRecords([...records, value]);
  };

  const resetLap = () => {
    setRecords([]);
  };
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Clock lap={lap} resetLap={resetLap} />
      </div>

      <List dense={false}>
        {records.map((r: string, index: number) => {
          return (
            <ListItem key={index}>
              <ListItemIcon>
                <TimerIcon />
              </ListItemIcon>
              <ListItemText primary={r} />
            </ListItem>
          );
        })}
      </List>
      <SimpleBottomNavigation value={tab} onChange={onTabChange} />
    </div>
  );
};

export default App;
