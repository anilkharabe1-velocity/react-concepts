import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addProduct, clearCart } from "../redux/cartSlice";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(true);

  const userName = useSelector((store) => {
    return store.user.userName;
  });

  const dispatch = useDispatch();

  const handleAddProduct = () => {
    dispatch(addProduct("Shoe"));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div
      style={{
        background: darkMode ? "black" : "white",
        color: darkMode ? "white" : "black",
        padding: "30px",
      }}
    >
      <h2>User Name from Redux: {userName}</h2>
      <button
        onClick={() => {
          setDarkMode(!darkMode);
          console.log("darkMode", darkMode);
        }}
      >
        Toggle Model
      </button>
      <br></br>

      <button onClick={handleAddProduct}>add Product</button>
      <br></br>
      <button onClick={handleClearCart}>clear Cart</button>
    </div>
  );
};

export default DarkMode;
