import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="nav-items">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/basiccomponent">Basic Component: props</Link>
        </li>
        <li>
          <Link to="/counter">UseState: Counter</Link>
        </li>
        <li>
          <Link to="/darkmode">UserState: Dark Mode</Link>
        </li>
        <li>
          <Link to="/basicuseeffect">UseEffect: BasicUseEffect</Link>
        </li>
        <li>
          <Link to="/apiwithuseeffect">UseEffect: APIWithUseEffect</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
