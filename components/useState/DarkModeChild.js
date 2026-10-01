const DarkModeChild = ({ darkMode }) => {
  return (
    <div
      style={{
        background: darkMode ? "black" : "white",
        color: darkMode ? "white" : "black",
        padding: "30px",
      }}
    >
      <h2>Testing Dark Mode using parent - child</h2>
    </div>
  );
};

export default DarkModeChild;
