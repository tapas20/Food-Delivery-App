import React from "react";
import ReactDOM from "react-dom/client";
import FoodFireLogo from "./Images/Food Fire Logo.png";
/**
 * -> Header
 *      -) Logo
 *      -) Nav items
 * -> Body
 *      -) Search
 *      -) RestaurantContainer
 *          -< RestaurantCard
 *              - Image
 *              - Rating
 *              - Cuisine
 *              - Delivering Time
 *  -> Footer
 *      -) CopyRight
 *      -) Links
 *      -) Address
 *      -) Contact
 *
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={FoodFireLogo} alt="Food Fire Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
