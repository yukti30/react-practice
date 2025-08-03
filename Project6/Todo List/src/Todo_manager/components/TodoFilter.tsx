interface Props {
  priorities: string[];
  handleChange: (category: string) => void;
}
const TodoFilter = ({ priorities, handleChange }: Props) => {
  return (
    <>
      <label htmlFor="" className="form-control">
        Filter
      </label>
      <select
        id="Filter"
        className="form-control"
        onChange={(e) => handleChange(e.target.value)}
      >
        <option value=""></option>
        {priorities.map((priority) => (
          <option key={priority} value={priority}>
            {priority}
          </option>
        ))}
      </select>
    </>
  );
};

export default TodoFilter;
