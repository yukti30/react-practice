interface Props {
  priorities: string[];
}
const TodoFilter = ({ priorities }: Props) => {
  return (
    <>
      <label htmlFor="" className="form-control">
        Filter
      </label>
      <select
        id="Filter"
        className="form-control"
        onChange={(e) => console.log(e.target.value)}
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
