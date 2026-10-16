// useMemo // useCallback => memoize => cache

// common js import
// const { useMemo, useState } = require("react");

// es6 import
import { useMemo, useState, memo } from "react";

const UseMemoDemo = () => {
  const [number, setNumber] = useState(5);
  const [count, setCount] = useState(0);

  console.log("re-render");

  //   const calculateSquare = () => {
  //     console.log("calculating square");
  //     return number * number;
  //   };

  //   const square = calculateSquare();

  const square = useMemo(() => {
    console.log("calculating square");
    return number * number;
  }, [number]);

  return (
    <>
      <h2>Number: {number}</h2>
      <h2>Square: {square}</h2>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        Increase Number
      </button>
      <hr></hr>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase count
      </button>
      : {count}
    </>
  );
};

export default memo(UseMemoDemo);
