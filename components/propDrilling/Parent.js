import { useContext, memo } from "react";

import UserContext from "../utils/UserContext.";
import Child from "./Child";

const Parent = ({ value }) => {
  const data = useContext(UserContext);

  console.log("parent component- re-render");

  return (
    <div>
      <h1>This is Parent Component</h1>
      <h2>User Context data: {data.loggedInUser}</h2>
      <Child value={value} />
    </div>
  );
};

export default memo(Parent);
