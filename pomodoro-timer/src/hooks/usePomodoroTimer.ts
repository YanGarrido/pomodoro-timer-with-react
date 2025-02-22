import { useEffect, useState } from "react";

export function usePomodoroTimer(focusTime: number, relaxTime: number) {
  const [modo, setModo] = useState("focus");
  const [secondsLeft, setSecondsLeft] = useState(focusTime * 60);
  const [isActive, setisActive] = useState(false);

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
      } else {
        setModo("focus");
        setSecondsLeft(focusTime * 60);
      }
      setisActive(false);
    }
  }, [isActive, secondsLeft, modo, relaxTime, focusTime]);

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
