import { useEffect, useState } from "react";
import "./Countdown.css";

const UNITS = [
  { key: "days", label: "dager" },
  { key: "hours", label: "timer" },
  { key: "minutes", label: "minutter" },
  { key: "seconds", label: "sekunder" },
];

function getTimeLeft(target) {
  const diff = Math.max(0, new Date(target).getTime() - Date.now());
  return {
    done: diff === 0,
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor(diff / 3_600_000) % 24,
    minutes: Math.floor(diff / 60_000) % 60,
    seconds: Math.floor(diff / 1000) % 60,
  };
}

/** Nedtelling til en dato (ISO-streng, f.eks. "2027-06-19T13:30:00+02:00") */
export default function Countdown({ target, doneText = "Vi er gift!", className = "" }) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(target));

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  if (timeLeft.done) {
    return <p className={`countdown__done ${className}`.trim()}>{doneText}</p>;
  }

  return (
    <div className={`countdown ${className}`.trim()} role="timer" aria-label="Tid igjen til bryllupet">
      {UNITS.map(({ key, label }) => (
        <div className="countdown__unit" key={key}>
          <span className="countdown__value">{String(timeLeft[key]).padStart(2, "0")}</span>
          <span className="countdown__label">{label}</span>
        </div>
      ))}
    </div>
  );
}