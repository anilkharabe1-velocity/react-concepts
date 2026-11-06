const Welcome = ({ name, children }) => {
  return (
    <div>
      {children}
      <h1>This is welcome message:{name}</h1>
      {children}
    </div>
  );
};

const Parent = () => {
  return (
    <div>
      <Welcome name={"Karn"}>
        <h1>This is jsx coming as children(another form of props)</h1>
      </Welcome>
    </div>
  );
};

export default Parent;
