import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  // Destructuring on the fly
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.data;
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} alt="res-logo" />

      <div className="res-des">
        <h3 className="brand-name">{name}</h3>
        <h4 className="cuisine">{cuisines.join(",")}</h4>
        <h4 className="rating">{avgRating} stars</h4>
        <h4 className="offer">₹{costForTwo / 100} FOR TWO</h4>
        <h4 className="time">{deliveryTime} minutes</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
