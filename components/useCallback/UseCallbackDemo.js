import { memo, useState, useCallback } from "react";

const UseCallbackDemo = () => {
  console.log("re-render");
  const [count, setCount] = useState(0);

  // it is getting created everytime with component re-render
  //   const showMessage = () => {
  //     console.log("hello react");
  //   };

  const showMessage = useCallback(() => {
    console.log("hello react");
  }, []);

  return (
    <>
      <h2>useCallback Demo </h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      : {count}
      <hr></hr>
      <button onClick={showMessage}>Show Message</button>
    </>
  );
};

export default memo(UseCallbackDemo);

// array, object, function => call by reference
// number, string, boolean => call by value
