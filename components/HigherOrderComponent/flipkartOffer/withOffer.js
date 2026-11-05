const withOffer = (InputComponent) => {
  return (props) => (
    <InputComponent {...props} offer="Value 365"></InputComponent>
  );
};

export default withOffer;
