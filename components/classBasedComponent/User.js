import { useState } from "react";

const User = ({ name, city }) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(0);

  return (
    <div>
      <h2>Name: {name}</h2>
      <h3>City: {city}</h3>
      <h4>Contact: +91 39483846762</h4>
      <h4>Counter: {count}</h4>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase Counter
      </button>
    </div>
  );
};

export default User;
