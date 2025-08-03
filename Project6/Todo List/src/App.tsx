// import { useState } from "rea/ct";
import { useState } from "react";
import TodoFilter from "./Todo_manager/components/TodoFilter";
import TodoList from "./Todo_manager/components/TodoList";
import TodoForm from "./Todo_manager/components/TodoForm";

function App() {
  const priorities = ["High", "Low"];

  const [tasks, setTask] = useState([
    { id: 1, task: "Wash clothes", priority: "High", completed: false },
    { id: 2, task: "Video lessons", priority: "High", completed: false },
    { id: 3, task: "Complete painting", priority: "Low", completed: false },
    { id: 4, task: "Call electrician", priority: "High", completed: false },
  ]);
  const [category, setCategory] = useState("");
  const visibleCategory = category
    ? tasks.filter((task) => task.priority === category)
    : tasks;
  return (
    <>
      <div className="mb-5">
        <TodoForm
          priorities={priorities}
          handleFormData={(data) =>
            setTask([
              ...tasks,
              { ...data, id: tasks.length + 1, completed: false },
            ])
          }
        ></TodoForm>
      </div>
      <div className="mb-5">
        <TodoFilter
          priorities={priorities}
          handleChange={setCategory}
        ></TodoFilter>
      </div>
      <div className="mb-3">
        <TodoList
          tasks={visibleCategory}
          handleCompleteButton={(id) =>
            setTask(
              tasks.map((task) =>
                task.id === id ? { ...task, completed: true } : task
              )
            )
          }
        ></TodoList>
      </div>
    </>
  );
}

export default App;
