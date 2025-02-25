import { useState } from "react";
import { ControlButtons } from "./components/controlButtons";
import { TimeDisplay } from "./components/timeDisplay";
import { TimeSelectorButtons } from "./components/timeSelectorButtons";
import { usePomodoroTimer } from "./hooks/usePomodoroTimer";
import { CycleProgressDots } from "./components/cycleProgressDots";
export default function PomodoroTimer() {
  const [focusTime, setFocusTime] = useState(25);
  

  const { modo, secondsLeft, isActive, toggleTimer, resetTimer, count } =
    usePomodoroTimer(focusTime);

  return (
    <div className="flex justify-center items-center flex-col h-screen bg-gray-900 border-solid ">
      <div className="bg-green-900 w-[300px] text-center flex justify-center items-center flex-col rounded-3xl">
        <h1 className="font-bold text-5xl text-amber-200">Pomodoro Timer</h1>
        <TimeDisplay secondsLeft={secondsLeft} modo={modo} />
        <CycleProgressDots count={count}/>
        <TimeSelectorButtons setFocusTime={setFocusTime} />
        <ControlButtons
          isActive={isActive}
          toggleTimer={toggleTimer}
          resetTimer={resetTimer}
        />
      </div>
    </div>
  );
}
