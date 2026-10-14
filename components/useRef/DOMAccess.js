import { useRef } from "react";

const DomAccess = () => {
  const divRef = useRef(null);

  const changeColor = () => {
    divRef.current.style.backgroundColor = "green";
  };

  return (
    <>
      <h2>Change Background Color</h2>
      <div
        ref={divRef}
        style={{ backgroundColor: "red", padding: "20px", margin: "20px" }}
      >
        <h3>Hello there</h3>
        <p>Click the button to change background color</p>
      </div>
      <button onClick={changeColor}>Change Background</button>
    </>
  );
};

export default DomAccess;
