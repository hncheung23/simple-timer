import React, { useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    fontSize: 100,
  },
  buttons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: '0 20%',
  },
});

interface Props {
  lap: (value: string) => void;
  resetLap: () => void;
}

const Clock = (props: Props) => {
  const classes = useStyles();
  const [date, setDate] = React.useState(new Date());
  const [orgDate, setOrgDate] = React.useState(new Date());
  const [timeGap, setTimeGap] = React.useState(0);
  const [pauseAt, setPauseAt] = React.useState(new Date());
  const [stop, setStop] = React.useState(false);
  const {lap, resetLap} = props;

  useEffect(() => {
    if (stop) return;
    var timerID = setInterval(() => tick(), 10);
    return function cleanup() {
      clearInterval(timerID);
    };
  }, [date, stop]);

  function tick() {
    setDate(new Date());
  }

  const stopHandler = () => {
    if (stop) {
      //unpause
      //update timeGap
      const current = new Date();
      const diff = current.getTime() - pauseAt.getTime();
      setTimeGap(timeGap + diff); 
    } else {
      //pause
      setPauseAt(new Date())
    }
    setStop(!stop);
  }
  const timeDiff = () => {
    const diff = date.getTime() - orgDate.getTime() - timeGap;
    const msDiff = Math.floor(diff / 10) % 100;
    const sDiff = Math.floor(diff / 1000) % 60;
    const mDiff = Math.floor(diff / 1000 / 60);

    const result = `${mDiff}:${sDiff >= 10 ? sDiff : '0'+sDiff}.${msDiff}`
    return result;
  };

  const resetAll = () => {
    setDate(new Date());
    setOrgDate(new Date());
    setTimeGap(0);
    setPauseAt(new Date());
    setStop(false);
    resetLap();
  }
  return (
    <div>
      <div className={classes.root}>{timeDiff()}</div>
      <div className={classes.buttons}>
        <Button variant="contained" onClick={() => lap(timeDiff())}>Lap</Button>
        <Button variant="contained" onClick={stopHandler}>{stop ? "unpause" : "pause"}</Button>
        <Button variant="contained" onClick={resetAll}>Reset</Button>
      </div>
    </div>
  );
};

export default Clock;
