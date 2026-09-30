import { useState } from "react";

import DarkModeChild from "./DarkModeChild";

const DarkModeParent = () => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div>
      <button
        onClick={() => {
          setDarkMode(!darkMode);
          console.log("darkMode", darkMode);
        }}
      >
        Toggle Model
      </button>

      <DarkModeChild darkMode={darkMode} />
    </div>
  );
};

export default DarkModeParent;
