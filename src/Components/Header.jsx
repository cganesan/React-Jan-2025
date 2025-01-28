import { LOGO_URL } from "./Utils/Constants";
import { Link } from "react-router";
import useOnlineStatus from "./Utils/useOnlineStatus";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  return (
    <div className="Header">
      <div className="logoComp">
        <img src={LOGO_URL} alt="logo" className="logo" />
        <h4>FooDFlight</h4>
      </div>
      <div className="navSection">
        <ul className="listStyle">
          <li>onlineStatus:{onlineStatus ? "✔" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
