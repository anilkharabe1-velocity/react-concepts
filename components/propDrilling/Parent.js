import { useContext } from "react";
import UserContext from "../utils/UserContext.";

import Child from "./Child";

const Parent = ({ value }) => {
  const data = useContext(UserContext);

  return (
    <div>
      <h1>This is Parent Component</h1>
      <h2>User Context data: {data.loggedInUser}</h2>
      <Child value={value} />
    </div>
  );
};

export default Parent;
