import { useContext } from "react";
import ValueContext from "../utils/ValueContex";
import UserContext from "../utils/UserContext.";

const Child = ({ value }) => {
  const data = useContext(UserContext);
  console.log("data from child", data);
  return (
    <div>
      <h1>This is Child Component, and value is {value}</h1>
      <label>User Name:</label>
      <input
        type="text"
        onChange={(e) => {
          data.setUserName(e.target.value);
        }}
      ></input>
    </div>
  );
};

export default Child;
