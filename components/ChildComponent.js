const ChildComponent = ({ a, b, name, data }) => {
  //   console.log("props", props);

  //   const { a, b } = props;
  console.log("a:", a);
  console.log("b:", b);
  console.log("data:", data);

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
