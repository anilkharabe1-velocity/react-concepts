import { useState, useEffect } from "react";

const UseEffectComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  console.log("re-rendering");
  useEffect(() => {
    console.log("useEffect called");
  }, []);

  return (
    <>
      <h2>UseEffectComponent </h2>
      <input
        type="text"
        value={firstName}
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      ></input>
      <h2>{firstName}</h2>

      <input
        type="text"
        value={lastName}
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      ></input>
      <h2>{lastName}</h2>
    </>
  );
};

export default UseEffectComponent;
