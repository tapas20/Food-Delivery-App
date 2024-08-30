import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/userContext";

const RestaurantCard = (props) => {
  // Destructuring on the fly
  const { resData } = props;
  const {loggedInUser} = useContext(UserContext);

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
      className="m-4 p-4 rounded-lg"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />

      <div className="res-des">
        <h3 className="font-bold py-2 text-lg">{name}</h3>
        <h4 className="cuisine">{cuisines.join(",")}</h4>
        <h4 className="rating">{avgRating} stars</h4>
        <h4 className="offer">₹{costForTwo / 100} FOR TWO</h4>
        <h4 className="time">{deliveryTime} minutes</h4>
        <h4 className="defaultUser">User : {loggedInUser}</h4>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return () => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard />
      </div>
    );
  };
};

export default RestaurantCard;
