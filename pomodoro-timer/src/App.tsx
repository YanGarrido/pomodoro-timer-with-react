import { useEffect, useState } from "react";

export default function PomodoroTimer() {
  const [focustime, setTime] = useState(25);
  const [focus30, setFocus30] = useState(30);
  const [focus60, setFocus60] = useState(60);
  const [relax, setRelax] = useState(5);
  const [modo, setModo] = useState("focus");
  const [secondsLeft, setSecondsLeft] = useState(focustime * 60);
  const [isActive, setisActive] = useState(false);

  useEffect(() => {
    if (isActive && secondsLeft > 0) {
      const interval = setInterval(() => {
        setSecondsLeft((secondsLeft) => secondsLeft - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (secondsLeft === 0) {
      if (modo === "focus") {
        setModo("relax");
        setSecondsLeft(relax * 60);
      } else {
        setModo("focus");
        setSecondsLeft(focustime * 60);
      }
      setisActive(false);
    }
  }, [isActive, secondsLeft, modo, relax, focustime]);

  const formatTimeLeft = (seconds: number) => {
    return `${Math.floor(seconds / 60)}:${
      seconds % 60 > 9 ? seconds % 60 : "0" + (seconds % 60)
    }`;
  };

  function toggleTimer() {
    setisActive(!isActive);
  }

  function resetTimer() {
    setisActive(false);
    setModo('focus');
    setSecondsLeft(focustime * 60);
  }

  function setPomoTimer(time: string) {
    if (time === '25') {
      setSecondsLeft(focustime * 60)
      formatTimeLeft(secondsLeft)
    } else if (time === '30') {
      setSecondsLeft(focus30 * 60)
      formatTimeLeft(secondsLeft)
    } else if (time === '60') {
      setSecondsLeft(focus60 * 60)
      formatTimeLeft(secondsLeft)
  }
}
  return (
    <div>
      <h1>Pomodoro Timer</h1>
      <h2>Modo: {modo === "focus" ? "Foco" : "Descanso"}</h2>
      <h2>Tempo Restante: {formatTimeLeft(secondsLeft)}</h2>
      <button onClick={() => setPomoTimer('25')}>25</button>
      <button onClick={() => setPomoTimer('30')}>30</button>
      <button onClick={() => setPomoTimer('60')}>60</button>
      
      <br />
      <br />
      <button onClick={toggleTimer}>{isActive ? "PAUSE" : "START"}</button>
      <button onClick={resetTimer}>RESET</button>
    </div>
  );
}
