import { Link } from "react-router-dom";
import { FaHome, FaShoppingCart } from "react-icons/fa";

function MainNavigation() {
  return (
    <ul>
      <li>
        <FaHome />
      </li>
      <li>
        <FaShoppingCart />
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      
    </ul>
  );
}

export default MainNavigation;
