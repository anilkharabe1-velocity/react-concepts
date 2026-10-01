const ChildComponent = ({ a, b, name, data }) => {
  return (
    <div>
      Child Component with props communication
      <h4>Multiplication is: {a * b}</h4>
      <h5>Name is {data.name}</h5>
      <h5>from: {data.city}</h5>
    </div>
  );
};

export default ChildComponent;
