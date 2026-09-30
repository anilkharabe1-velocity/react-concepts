import { useState } from "react";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div
      style={{
        background: darkMode ? "black" : "white",
        color: darkMode ? "white" : "black",
        padding: "30px",
      }}
    >
      <h2>Testing Dark Mode</h2>
      <button
        onClick={() => {
          setDarkMode(!darkMode);
          console.log("darkMode", darkMode);
        }}
      >
        Toggle Model
      </button>
    </div>
  );
};

export default DarkMode;
