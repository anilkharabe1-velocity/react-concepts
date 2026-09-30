import { useState } from "react";

const UserInput = () => {
  //   let name = "Pooja";
  const [name, setName] = useState("Pooja");
  console.log("rerending");

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="Enter your name"
      />

      <h2>{name}</h2>
    </div>
  );
};

export default UserInput;
