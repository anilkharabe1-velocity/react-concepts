const Product = ({ image, offer }) => {
  console.log("offer", offer);
  return (
    <div style={{ width: "250px" }}>
      <img src={image}></img>
    </div>
  );
};

export default Product;
