import { useState, useContext } from "react";
import Parent from "./Parent";
import ValueContext from "../utils/ValueContex";

const GrandParent = () => {
  const [value, setValue] = useState(10);
  const [counter, setCounter] = useState(0);
  const data = useContext(ValueContext);

  console.log("grand-parent re-render");
  return (
    <div style={{ backgroundColor: "#F2AA9D" }}>
      <h1>This is GrandParent Component, and value is {value}</h1>
      <h2>And the value from context is {data.value}</h2>
      <h4>Counter: {counter}</h4>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increase Counter
      </button>
      <Parent value={value} />
    </div>
  );
};

export default GrandParent;
