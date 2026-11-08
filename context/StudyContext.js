"use client";

import {
  createContext,
  useContext,
  useState,
} from "react";

const StudyContext = createContext();

export function StudyProvider({ children }) {
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
  ]);

  const addTask = (title, subject) => {
    setTasks((previous) => [
      ...previous,
      {
        id: Date.now(),
        title,
        subject,
        completed: false,
      },
    ]);
  };

  const toggleTask = (id) => {
    setTasks((previous) =>
      previous.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  };

  return (
    <StudyContext.Provider
      value={{
        tasks,
        addTask,
        toggleTask,
      }}
    >
      {children}
    </StudyContext.Provider>
  );
}

export function useStudy() {
  return useContext(StudyContext);
}