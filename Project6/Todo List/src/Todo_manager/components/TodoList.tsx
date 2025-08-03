// import { useState } from "react";
// import { FaToggleOff, FaToggleOn } from "react-icons/fa6";
interface Task {
  id: number;
  task: string;
  priority: string;
  completed?: boolean;
}

interface Props {
  //   textStyle: boolean;
  tasks: Task[];
  handleCompleteButton: (id: number) => void;
}

const TodoList = ({ tasks, handleCompleteButton }: Props) => {
  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Task</th>
            <th>Priority</th>
            <th>Completed</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((task) => (
            <>
              <tr key={task.id}>
                <td
                  style={{
                    padding: "4px 10px",
                    color: "#fff",
                    backgroundColor:
                      task.priority === "High" ? "crimson" : "seagreen",
                    borderRadius: "4px",
                  }}
                >
                  {task.task}
                </td>
                <td>{task.priority}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleCompleteButton(task.id)}
                  >
                    Completed
                  </button>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TodoList;
