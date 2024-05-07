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

const RestaurantCard = () => {
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="res-logo"
        src="https://b.zmtcdn.com/data/pictures/chains/0/19554120/0336617c9205e4ed6ccc70026f04fbbf.jpg"
        alt="res-logo"
      />
      <div className="res-des">
        <h3 className="brand-name">Meghana Foods</h3>
        <h4 className="cuisine">Biriyani, South Indian</h4>
        <h4 className="rating">4.4 stars</h4>
        <h4 className="time">Arrived in ): 38 minutes</h4>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
