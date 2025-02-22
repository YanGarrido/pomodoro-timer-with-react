import React from "react";

interface timeDisplayProps {
  secondsLeft: number;
  modo: string;
}

export function TimeDisplay({ secondsLeft, modo }: timeDisplayProps) {
  const formatTimeLeft = (seconds: number) => {
    return `${Math.floor(seconds / 60)}:${
      seconds % 60 > 9 ? seconds % 60 : "0" + (seconds % 60)
    }`;
  };

  return (
    <div>
      <div>
        <h2>{formatTimeLeft(secondsLeft)}</h2>
      </div>
      <div>
        <p>{modo === "focus" ? "Foco" : "Descaso"}</p>
      </div>
    </div>
  );
}
