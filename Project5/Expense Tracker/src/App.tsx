import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseFilter from "./components/ExpenseFilter";
// import type { FieldValues } from "react-hook-form";

const options = ["Groceries", "Entertainment", "Utilities"];
function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "electricity",
      amount: 500,
      category: "Utilities",
    },
    {
      id: 2,
      description: "rent",
      amount: 500,
      category: "Utilities",
    },
    {
      id: 3,
      description: "water",
      amount: 500,
      category: "Utilities",
    },
    {
      id: 4,
      description: "wifi",
      amount: 500,
      category: "Utilities",
    },
  ]);

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };
  const [selectedCategory, setSelectedCategory] = useState("");
  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  // if (expenses.length === 0) return null;
  return (
    <>
      <div className="mb-3">
        <ExpenseForm
          options={options}
          onSubmit={(data) =>
            setExpenses([
              ...expenses,
              {
                ...data,
                id: expenses.length + 1,
              },
            ])
          }
        ></ExpenseForm>
      </div>
      <div className="mb-3">
        <ExpenseFilter
          options={options}
          onSelectCategory={(category) => setSelectedCategory(category)}
        ></ExpenseFilter>
      </div>

      <ExpenseList
        onDelete={handleDelete}
        expenses={visibleExpenses}
      ></ExpenseList>
    </>
  );
}

export default App;
