import ReactDOM from "react-dom/client";

const BasicComponent = () => {
  let a = 10;
  let b = 20;
  let c = a + b;
  let arr = [3, 12, 10, 1, 200];

  return (
    <div>
      {arr.sort((a, b) => a - b).join(", ")}
      <h2>This is react heading</h2>
      <h3>value of c is {c}</h3>
    </div>
  );
};

const ParentComponent = () => {
  return (
    <>
      <BasicComponent />
      <BasicComponent />
    </>
  );
};

const app = ReactDOM.createRoot(document.getElementById("root"));
app.render(<ParentComponent />);
