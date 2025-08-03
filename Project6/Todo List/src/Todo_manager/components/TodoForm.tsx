import { useForm } from "react-hook-form";
interface Props {
  priorities: string[];
  handleFormData: (data: formData) => void;
}
interface formData {
  task: string;
  priority: string;
}
const TodoForm = ({ priorities, handleFormData }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formData>();
  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          handleFormData(data);
          reset();
        })}
      >
        <div className="mb-3">
          <label htmlFor="task" className="form-control">
            Task Description
          </label>
          <input
            {...register("task", { required: true })}
            id="task"
            type="text"
            className="form-control"
          />
        </div>
        {errors.task && <p className="tex-danger">This Field is required</p>}
        <div className="mb-3">
          <label htmlFor="priority" className="form-control">
            Select Category
          </label>
          <select
            {...register("priority", { required: true })}
            name="priority"
            id="priority"
            className="form-control"
          >
            <option value=""></option>
            {priorities.map((priority) => (
              <option key={priority}>{priority} </option>
            ))}
          </select>
        </div>
        {errors.priority && (
          <p className="text-danger">This Field is required</p>
        )}
        <button className="btn btn-primary" type="submit">
          {" "}
          Submit
        </button>
      </form>
    </>
  );
};

export default TodoForm;
