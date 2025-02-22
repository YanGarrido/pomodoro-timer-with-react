import { useEffect, useState } from "react";


export default function PomodoroTimer(){
  const [minutes, setMinutes] = useState(25)
  const [seconds, setSeconds] = useState(0)
  const [focus, setFocus] = useState(25)
  const [relax, setRelax] = useState(5)
  const [modo, setModo] = useState("focus")
  const [exec, setExec] = useState(false)

  return (
    <div></div>
  )
}
