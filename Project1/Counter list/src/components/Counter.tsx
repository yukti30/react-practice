interface Props {
  counter_no: string;
  value: number;
  incrementCounter: () => void;
  decrementCounter: () => void;
}
const Counter = ({
  counter_no,
  value,
  incrementCounter,
  decrementCounter,
}: Props) => {
  return (
    <>
      <div>
        <div>
          {counter_no}:{value}
        </div>
        <button className="btn btn-dark" onClick={() => incrementCounter()}>
          Increment
        </button>
        <button className="btn btn-dark" onClick={() => decrementCounter()}>
          Decrement
        </button>
      </div>
    </>
  );
};

export default Counter;
