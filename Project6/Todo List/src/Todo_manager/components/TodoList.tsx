import { IoToggle } from "react-icons/io5";
interface Task {
  id: number;
  task: string;
  priority: string;
}

interface Props {
  tasks: Task[];
}

const TodoList = ({ tasks }: Props) => {
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
                    backgroundColor: task.priority === "high" ? "red" : "green",
                  }}
                >
                  {task.task}
                </td>
                <td>{task.priority}</td>
                <td>
                  <IoToggle style={{ color: "blue" }} />
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
