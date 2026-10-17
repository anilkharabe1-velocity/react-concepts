import { useContext, memo } from "react";
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

  // console.log("cart", cart);

  return (
    <div className="nav-items">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {/* <li>
          <Link to="/basiccomponent">props</Link>
        </li> */}
        {/* <li>
          <Link to="/counter">Counter</Link>
        </li> */}
        <li>
          <Link to="/counterwithuseRef">Counter With Use Ref</Link>
        </li>
        <li>
          <Link to="/studentform">Student Form: useRef</Link>
        </li>
        <li>
          <Link to="/registrationform">Student Form: useState</Link>
        </li>
        <li>
          <Link to="/domaccess">Dom Access</Link>
        </li>
        <li>
          <Link to="/darkmode">Dark Mode</Link>
        </li>
        {/*<li>
          <Link to="/basicuseeffect">BasicUseEffect</Link>
        </li> */}
        {/* <li>
          <Link to="/apiwithuseeffect">APIWithUseEffect</Link>
        </li> */}
        <li>
          <Link to="/apiwithrq">APIWithRQ</Link>
        </li>
        <li>
          <Link to="/usememodemo">useMemo Demo</Link>
        </li>
        <li>
          <Link to="/usecallbackdemo">useCallback Demo</Link>
        </li>
        {/* <li>
          <Link to="/postrq">Post RQ</Link>
        </li> */}
        {/* <li>
          <Link to="/grandparent">Parent-Child Relation</Link>
        </li>
        <li>
          <Link to="/bigcomponent">Big Component</Link>
        </li> */}
        {/* <li>Context UserName: {data.loggedInUser}</li>*/}
        {/* <li>Redux Cart: {cart.length}</li>
        <li>Redux UserName: {userName}</li> */}
      </ul>
    </div>
  );
};

export default memo(Header);
