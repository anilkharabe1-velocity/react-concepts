import { useContext } from "react";
import ValueContext from "../utils/ValueContex";

const Child = ({ value }) => {
  const data = useContext(ValueContext);
  return (
    <div>
      <h1>This is Child Component, and value is {value}</h1>
      <h3>The value from Value Context in child component is {data.value}</h3>
    </div>
  );
};

export default Child;
