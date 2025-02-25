import { useEffect, useState } from "react";
import useSound from "use-sound";
import timesUpSfx from "../sounds/timesUp.mp3";
export function usePomodoroTimer(focusTime: number) {
  const [modo, setModo] = useState("focus");
  const [secondsLeft, setSecondsLeft] = useState(focusTime * 60);
  const [isActive, setisActive] = useState(false);
  const [count, setCount] = useState(0)
  const [relaxTime, setRelaxTime] = useState(5)
  const volume = 1;

  const [timesUp] = useSound(timesUpSfx, volume);

  useEffect(() => {
    setSecondsLeft(focusTime * 60);
  }, [focusTime]);

  useEffect(() => {
    if (isActive && secondsLeft > 0) {
      const interval = setInterval(() => {
        setSecondsLeft((secondsLeft) => secondsLeft - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (secondsLeft === 0) {
      if (modo === "focus") {
        const newRelaxTime = ((count + 1) % 4 === 0 ? 15 : 5)
        setRelaxTime(newRelaxTime)
        setModo("relax");
        setSecondsLeft(newRelaxTime * 60);
        setCount(count => { return count + 1})
        timesUp();
        console.log(relaxTime)
      } else {
        setModo("focus");
        setSecondsLeft(focusTime * 60);
        timesUp();
      }
      setisActive(false);
    }
  }, [isActive, secondsLeft, modo, relaxTime, focusTime, timesUp, count]);

  
  
  const toggleTimer = () => {
    setisActive(!isActive);
  };

  const resetTimer = () => {
    setisActive(false);
    setModo("focus");
    setSecondsLeft(focusTime * 60);
  };

  return {
    modo,
    secondsLeft,
    isActive,
    toggleTimer,
    resetTimer,
    count
  };
}
