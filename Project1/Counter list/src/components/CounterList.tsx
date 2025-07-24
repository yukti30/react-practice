import { useState } from "react";
import Counter from "./Counter";
const CounterList = () => {
  const [counts, setCount] = useState([0, 0, 0]);
  const handleIncrement = (index: number) => {
    const updated = [...counts];
    updated[index]++;
    setCount(updated);
  };
  const handleDecrement = (index: number) => {
    const updated = [...counts];
    updated[index]--;
    setCount(updated);
  };
  return (
    <>
      {counts.map((value, index) => (
        <Counter
          counter_no={`Counter ${index + 1}`}
          value={value}
          incrementCounter={() => handleIncrement(index)}
          decrementCounter={() => handleDecrement(index)}
        ></Counter>
      ))}
    </>
  );
};

export default CounterList;
