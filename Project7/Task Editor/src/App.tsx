import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { useState } from "react";
function App() {
  const priorities = ["High", "Medium", "Low"];
  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: "Wtering Plants",
      priority: "Medium",
      tag: ["Household"],
      edited: false,
    },
    {
      id: 2,
      task: "Java Lessons",
      priority: "High",
      tag: ["Office", "Learning"],
      edited: false,
    },
    {
      id: 3,
      task: "Going Gym",
      priority: "High",
      tag: ["Health", "Fatloss"],
      edited: false,
    },
    {
      id: 4,
      task: "Calling Plumber",
      priority: "Low",
      tag: ["Household", "Call"],
      edited: false,
    },
  ]);
  const handleDelete = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const handleEdit = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, edited: true } : { ...task }
      )
    );
  };
  return (
    <>
      <TaskForm
        priorities={priorities}
        onFormSubmit={(data) =>
          setTasks([
            ...tasks,
            {
              id: tasks.length + 1,
              task: data.task,
              priority: data.priority,
              tag: data.tags,
              edited: false,
            },
          ])
        }
      ></TaskForm>
      <TaskList
        tasks={tasks}
        onDelete={handleDelete}
        onEdit={handleEdit}
      ></TaskList>
    </>
  );
}

export default App;
