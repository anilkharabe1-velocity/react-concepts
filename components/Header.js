import { useContext } from "react";
import UserContext from "./utils/UserContext.";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const data = useContext(UserContext);

  //selector

  const cart = useSelector((store) => {
    return store.cart.products;
  });

  const userName = useSelector((store) => {
    return store.user.userName;
  });

  console.log("cart", cart);

  return (
    <div className="nav-items">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/basiccomponent">props</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/darkmode">Dark Mode</Link>
        </li>
        <li>
          <Link to="/basicuseeffect">BasicUseEffect</Link>
        </li>
        <li>
          <Link to="/apiwithuseeffect">APIWithUseEffect</Link>
        </li>
        <li>Context UserName: {data.loggedInUser}</li>
        <li>Redux Cart: {cart.length}</li>
        <li>Redux UserName: {userName}</li>
      </ul>
    </div>
  );
};

export default Header;
