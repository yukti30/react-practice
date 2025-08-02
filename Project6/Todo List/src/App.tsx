import TodoFilter from "./Todo_manager/components/TodoFilter";
import TodoList from "./Todo_manager/components/TodoList";

function App() {
  const priorities = ["High", "Low"];
  const tasks = [
    { id: 1, task: "Wash clothes", priority: "high" },
    { id: 2, task: "Video lessons", priority: "high" },
    { id: 3, task: "Complete paitaing", priority: "low" },
    { id: 4, task: "Call electrician", priority: "high" },
  ];
  return (
    <>
      <div className="mb-3">
        <TodoFilter priorities={priorities}></TodoFilter>
      </div>
      <div className="mb-3">
        <TodoList tasks={tasks}></TodoList>
      </div>
    </>
  );
}

export default App;
