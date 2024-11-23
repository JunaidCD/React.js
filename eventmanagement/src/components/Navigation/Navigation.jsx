import { Link } from "react-router-dom";
import "./Navigation.css";


import { FaHome, FaSearch,FaShoppingCart, FaCog, FaEllipsisH } from 'react-icons/fa';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <FaHome /> Home
          </Link>
        </li>
        <li>
          <Link to="/find-events">
            <FaSearch /> Find Events
          </Link>
        </li>
        <li>
          <Link to="/Subscription">
          <FaShoppingCart /> Subscription
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <FaCog /> Settings
          </Link>
        </li>
        <li>
          <Link to="/more">
            <FaEllipsisH /> More
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
