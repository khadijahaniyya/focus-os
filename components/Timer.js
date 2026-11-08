"use client";

import { useEffect, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState(25 * 60);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running || time <= 0) return;

    const interval = setInterval(() => {
      setTime((previous) => previous - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [running, time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

      <p className="text-sm font-medium text-indigo-400">
        FOCUS TIMER
      </p>

      <div className="py-8 text-center">

        <p className="text-7xl font-bold tracking-wider">
          {minutes.toString().padStart(2, "0")}:
          {seconds.toString().padStart(2, "0")}
        </p>

        <div className="mt-8 flex justify-center gap-3">

          <button
            onClick={() => setRunning(!running)}
            className="rounded-lg bg-indigo-600 px-6 py-3 font-medium hover:bg-indigo-700"
          >
            {running ? "Pause" : "Start"}
          </button>

          <button
            onClick={() => {
              setTime(25 * 60);
              setRunning(false);
            }}
            className="rounded-lg bg-slate-700 px-6 py-3 font-medium hover:bg-slate-600"
          >
            Reset
          </button>

        </div>

      </div>

    </div>
  );
}