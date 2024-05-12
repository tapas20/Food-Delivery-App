// import { LOGO_URL } from "../utils/constants";
import FoodFireLogo from "../../images/Food Fire Logo.png";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={FoodFireLogo} alt="HOT CHEF" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>
            {" "}
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
