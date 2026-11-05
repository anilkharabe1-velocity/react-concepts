// higher order component
const withStyle = (InputComponent) => {
  return function EnhancedComponent(props) {
    return (
      <div style={{ backgroundColor: "red", padding: "20px" }}>
        <InputComponent {...props} />
      </div>
    );
  };
};

export default withStyle;
