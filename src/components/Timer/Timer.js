import { useEffect, useState } from "react";
import Button from "../Button/Button";
import styles from './Timer.module.scss';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(0);
  const [disabledStart, setDisabledStart] = useState(false);
  const [disabledStop, setDisabledStop] = useState(true);
  const [disabledReset, setDisabledReset] = useState(true);

  const parseMillisecondsIntoReadableTime = (milliseconds) => {

    const hours = milliseconds / (1000 * 60 * 60);
    const absoluteHours = Math.floor(hours);
    const h = absoluteHours > 9 ? absoluteHours : '0' + absoluteHours;

    const minutes = (hours - absoluteHours) * 60;
    const absoluteMinutes = Math.floor(minutes);
    const m = absoluteMinutes > 9 ? absoluteMinutes : '0' + absoluteMinutes;

    const seconds = (minutes - absoluteMinutes) * 60;
    const absoluteSeconds = Math.floor(seconds);
    const s = absoluteSeconds > 9 ? absoluteSeconds : '0' + absoluteSeconds;

    const mSeconds = (seconds - absoluteSeconds) * 100;
    const absoluteMSeconds = Math.floor(mSeconds);
    const mil = absoluteMSeconds > 9 ? absoluteMSeconds : '0' + absoluteMSeconds;
    return h + ':' + m + ':' + s + ':' + mil;
  }

  useEffect(() => {
    return () => {
      console.log('aaaaa');
      clearInterval(intervalId);
    };
  }, [intervalId])

  const startClick = () => {
    setDisabledStart(true);
    setDisabledStop(false);
    setDisabledReset(false);
    clearInterval(intervalId);
    const newIntervalId = setInterval(() => {
      setTime(time => time + 10);
      console.log('fjjj')
    }, 10);
    setIntervalId(newIntervalId);
  }

  const stopClick = () => {
    setDisabledStart(false);
    setDisabledStop(true);
    clearInterval(intervalId);
  }

  const resetClick = () => {
    setDisabledReset(true);
    setDisabledStart(false);
    stopClick();
    setTime(0);
  }

  return (
    <div>
      <div className={styles.div}>
        <span className={styles.timer}>{parseMillisecondsIntoReadableTime(time)}</span>
      </div>
      <div className={styles.div}>
        <Button onClick={startClick} disabled={disabledStart}>Start</Button>
        <Button onClick={stopClick} disabled={disabledStop}>Stop</Button>
        <Button onClick={resetClick} disabled={disabledReset}>Reset</Button>
      </div>
    </div>
  )
}

export default Timer;