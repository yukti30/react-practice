interface Props {
  options: string[];
  onSelectCategory: (category: string) => void;
}
const ExpenseFilter = ({ options, onSelectCategory }: Props) => {
  return (
    <>
      <select
        className="form-control"
        onChange={(event) => onSelectCategory(event.target.value)}
      >
        <option value="">All Categories</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
};

export default ExpenseFilter;
