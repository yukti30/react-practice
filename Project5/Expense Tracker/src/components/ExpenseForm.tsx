import { useForm } from "react-hook-form";

interface FormData {
  description: string;
  amount: number;
  category: string;
}

interface Props {
  options: string[];
  onSubmit: (data: FormData) => void;
}

const ExpenseForm = ({ options, onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <div className="mb-3">
        <label htmlFor="Description" className="form-label">
          Description
        </label>
        <input
          {...register("description", { required: true })}
          id="Description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">This Description Field is required.</p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="Amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { required: true, valueAsNumber: true })}
          id="Amount"
          type="number"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">This Amount Field is required</p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="Category" className="form-label">
          Category
        </label>
        <select
          {...register("category", { required: true })}
          id="Category"
          className="form-control"
        >
          <option value="">Select category</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-danger">This Category Field is required</p>
        )}
      </div>

      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ExpenseForm;
