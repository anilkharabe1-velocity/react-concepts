import { useEffect } from "react";

const BasicUseEffect = () => {
  const a = 10;
  const b = 20;
  console.log("a + b", a + b);

  useEffect(() => {
    console.log("useEffect called");
  }, []);

  return (
    <div>
      {console.log("component rendering")}
      <h1>This is JSX code: addition is {a + b}</h1>
    </div>
  );
};

export default BasicUseEffect;
