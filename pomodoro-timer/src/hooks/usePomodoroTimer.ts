import { useEffect, useState } from "react";
import useSound from "use-sound";
import timesUpSfx from "../sounds/timesUp.mp3";
export function usePomodoroTimer(focusTime: number, relaxTime: number) {
  const [modo, setModo] = useState("focus");
  const [secondsLeft, setSecondsLeft] = useState(focusTime * 60);
  const [isActive, setisActive] = useState(false);
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
        setModo("relax");
        setSecondsLeft(relaxTime * 60);
        timesUp();
      } else {
        setModo("focus");
        setSecondsLeft(focusTime * 60);
        timesUp();
      }
      setisActive(false);
    }
  }, [isActive, secondsLeft, modo, relaxTime, focusTime, timesUp]);

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
  };
}
