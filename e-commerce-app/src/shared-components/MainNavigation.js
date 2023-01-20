import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import AuthContext from "../store/auth-context";

function MainNavigation() {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <ul>
      <li>
        <FaHome />
      </li>
      {isLoggedIn && (
        <li>
          <FaShoppingCart />
        </li>
      )}
      {!isLoggedIn && (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
      {isLoggedIn && (
        <li>
          <button>Logout</button>
        </li>
      )}
      {isLoggedIn && (
        <li>
          <Link to='/profile'>Profile</Link>
        </li>
      )}
    </ul>
  );
}

export default MainNavigation;
