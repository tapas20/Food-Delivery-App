import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList);
  const [filteredRestaurant, setFilteredRestaurant] = useState(restaurantList);

  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // console.log(json);

    // setListOfRestaurants(
    //   json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    // );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you're offline!! please check your Internet Connection :)
      </h1>
    );
  }

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4"
            onClick={() => {
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="rounded-lg"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div>
        <label htmlFor="">UserName : </label>
        <input
          type="text"
          value={loggedInUser}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
