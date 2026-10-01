import { useState } from "react";

const Counter = () => {
  let number = 5;
  const [counter, setCounter] = useState(0);

  console.log("number:", number);
  console.log("counter:", counter);

  return (
    <div>
      <button
        className="btn"
        onClick={() => {
          number = number + 1;
          setCounter(counter + 1); // counter = 0
          console.log("increment button clicked", number);
        }}
      >
        Increment
      </button>
      {number} : {counter}
      <button
        className="btn"
        onMouseEnter={() => {
          number = number - 1;
          setCounter(counter - 1);
          console.log("Decrement button double-clicked", number);
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
