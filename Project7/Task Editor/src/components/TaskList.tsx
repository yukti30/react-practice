interface Task {
  id: number;
  task: string;
  priority: string;
  tag: string[];
  edited: boolean;
}
interface Props {
  tasks: Task[];
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}

const TaskList = ({ tasks, onDelete, onEdit }: Props) => {
  return (
    <>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>Title</th>
            <th>Priority</th>
            <th>Tags</th>
            <th>Manage</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              {task.edited ? (
                <td>
                  <textarea style={{ height: "50px" }}></textarea>
                </td>
              ) : (
                <td>{task.task}</td>
              )}
              <td>{task.priority}</td>
              <td>
                {task.tag.map((i, index) => (
                  <span
                    key={index}
                    style={{ overflowY: "auto", overflowX: "auto" }}
                  >
                    [{i}]{" "}
                  </span>
                ))}
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  style={{ marginRight: "10px" }}
                  onClick={() => onDelete(task.id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-warning"
                  onClick={() => onEdit(task.id)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TaskList;
