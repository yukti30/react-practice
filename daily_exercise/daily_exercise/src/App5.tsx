// import { useEffect, useRef } from "react";
import { ProductList } from "./componenets/ProductList";
import { useEffect, useState } from "react";

const connect = () => console.log("Connecting");
const disconnect = () => console.log("Disconnecting");
const App = () => {
  //   const ref = useRef<HTMLInputElement>(null);
  //afterrendering of the component
  //   useEffect(() => {
  //     //sideEffect Impure component
  //     if (ref.current) ref.current.focus();
  //   });
  //   useEffect(() => {
  //     document.title = "My App";
  //   });
  useEffect(() => {
    connect();
    //apposite of what effect function was doing
    return () => disconnect();
  });
  const [category, setCategory] = useState("");
  return (
    <div>
      {/* <input ref={ref} type="text" className="form-control" /> */}
      <select
        name=""
        id=""
        className="form-select"
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value="">Select Category</option>
        <option value="clothing">Clothing</option>
        <option value="household">Household</option>
      </select>
      <ProductList category={category}></ProductList>
    </div>
  );
};

export default App;
