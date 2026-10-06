import { useState, useContext } from "react";
import Parent from "./Parent";
import ValueContext from "../utils/ValueContex";

const GrandParent = () => {
  const [value, setValue] = useState(10);
  const data = useContext(ValueContext);
  console.log("data", data);
  return (
    <div>
      <h1>This is GrandParent Component, and value is {value}</h1>
      <h2>And the value from context is {data.value}</h2>
      <Parent value={value} />
    </div>
  );
};

export default GrandParent;
