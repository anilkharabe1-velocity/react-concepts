import { useRef, useState } from "react";
const BasicUseRef = () => {
  const counterRef = useRef(0);
  const [counterState, setCounterState] = useState(0);

  const increaseValue = () => {
    counterRef.current = counterRef.current + 1;
    console.log("counterRef", counterRef);
  };

  const increaseValueForState = () => {
    setCounterState(counterState + 1);
    console.log("counterState", counterState);
  };

  return (
    <div>
      <h1>useRef counter</h1>
      <button onClick={increaseValue}>Increase useRef</button> <br />
      counter useRef: {counterRef.current}
      <hr />
      <h1>useState counter</h1>
      <button onClick={increaseValueForState}>Increase useState</button> <br />
      counter useState: {counterState}
    </div>
  );
};

export default BasicUseRef;
