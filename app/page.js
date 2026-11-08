"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete DSA Assignment",
      subject: "Data Structures",
      completed: false,
    },
    {
      id: 2,
      title: "Revise Java",
      subject: "Java Programming",
      completed: false,
    },
    {
      id: 3,
      title: "Read OS Notes",
      subject: "Operating Systems",
      completed: true,
    },
  ]);

  const [notes, setNotes] = useState(
    "Remember to revise important topics before the exam."
  );

  const [time, setTime] = useState(25 * 60);
  const [running, setRunning] = useState(false);
  useEffect(() => {
  if (!running || time <= 0) return;

  const timer = setInterval(() => {
    setTime((previous) => previous - 1);
  }, 1000);

  return () => clearInterval(timer);
}, [running, time]);

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <main className="min-h-screen bg-[#0f172a] text-white">
      
      {/* NAVBAR */}
      <nav className="flex items-center justify-between border-b border-slate-700 bg-[#111827] px-8 py-5">
        <h1 className="text-2xl font-bold text-indigo-400">
          Focus OS
        </h1>

        <div className="flex gap-6 text-sm text-slate-300">
          <a href="#dashboard">Dashboard</a>
          <a href="#tasks">Tasks</a>
          <a href="#notes">Notes</a>
          <a href="#timer">Focus</a>
        </div>
      </nav>

      {/* DASHBOARD */}
      <section
        id="dashboard"
        className="mx-auto max-w-7xl px-8 py-10"
      >
        <div className="mb-8">
          <p className="text-sm text-indigo-400">
            YOUR STUDY SPACE
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            Focus. Study. Finish.
          </h2>

          <p className="mt-2 text-slate-400">
            Everything you need for a focused study session.
          </p>
        </div>

        {/* STATS */}
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-700 bg-[#1e293b] p-6">
            <p className="text-sm text-slate-400">
              Study Sessions
            </p>

            <p className="mt-2 text-3xl font-bold">
              4
            </p>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-[#1e293b] p-6">
            <p className="text-sm text-slate-400">
              Completed Tasks
            </p>

            <p className="mt-2 text-3xl font-bold">
              {completedTasks}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-[#1e293b] p-6">
            <p className="text-sm text-slate-400">
              Focus Time
            </p>

            <p className="mt-2 text-3xl font-bold">
              100 min
            </p>
          </div>
        </div>

        {/* TIMER + TASKS */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">

          {/* TIMER */}
          <div
            id="timer"
            className="rounded-2xl border border-slate-700 bg-[#1e293b] p-8"
          >
            <p className="text-sm text-indigo-400">
              FOCUS TIMER
            </p>

            <div className="py-8 text-center">
              <p className="text-7xl font-bold tracking-wider">
                {formatTime()}
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

          {/* TASKS */}
          <div
            id="tasks"
            className="rounded-2xl border border-slate-700 bg-[#1e293b] p-8"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-indigo-400">
                  TASKS
                </p>

                <h3 className="mt-1 text-xl font-bold">
                  Today's Tasks
                </h3>
              </div>

              <button
                onClick={() => {
                  const title = prompt("Enter task name:");

                  if (title) {
                    setTasks([
                      ...tasks,
                      {
                        id: Date.now(),
                        title,
                        subject: "General",
                        completed: false,
                      },
                    ]);
                  }
                }}
                className="rounded-lg bg-indigo-600 px-4 py-2 text-sm hover:bg-indigo-700"
              >
                + Add Task
              </button>
            </div>

            <div className="mt-5 space-y-3">

              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center justify-between rounded-xl bg-slate-800 p-4"
                >
                  <div>
                    <p
                      className={`font-medium ${
                        task.completed
                          ? "text-slate-500 line-through"
                          : ""
                      }`}
                    >
                      {task.title}
                    </p>

                    <p className="text-xs text-slate-500">
                      {task.subject}
                    </p>
                  </div>

                  <button
                    onClick={() => toggleTask(task.id)}
                    className={`rounded-lg px-3 py-2 text-xs ${
                      task.completed
                        ? "bg-slate-700 text-slate-400"
                        : "bg-green-600 text-white"
                    }`}
                  >
                    {task.completed
                      ? "Completed"
                      : "Complete"}
                  </button>
                </div>
              ))}

            </div>
          </div>
        </div>

        {/* NOTES */}
        <section
          id="notes"
          className="mt-6 rounded-2xl border border-slate-700 bg-[#1e293b] p-8"
        >
          <p className="text-sm text-indigo-400">
            SCRATCHPAD
          </p>

          <h3 className="mt-1 text-xl font-bold">
            Quick Notes
          </h3>

          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="mt-5 min-h-40 w-full rounded-xl border border-slate-700 bg-slate-900 p-4 text-slate-200 outline-none focus:border-indigo-500"
            placeholder="Write your study notes here..."
          />

          <p className="mt-2 text-xs text-slate-500">
            Your notes are available during this session.
          </p>
        </section>

      </section>
    </main>
  );
}