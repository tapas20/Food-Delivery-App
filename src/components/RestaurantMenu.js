import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import restaurantList from "../utils/mockData";
import { useParams } from "react-router-dom";

import useRestauranatMenu from "../utils/useRestauranatMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestauranatMenu(resId);

  const { name, cuisines, costForTwoString } = resInfo[0].data;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardsGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  console.log(
    resInfo?.cards[2]?.groupedCard?.cardsGroupMap?.REGULAR?.cards[1]?.card?.card
  );

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardsGroupMap?.REGULAR?.cards[1]?.card?.cards.filter(
      (c) => c.card?.card?.["@type"] == "Link"
    );
  console.log(categories);
  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoString}
      </p>
      {/* categories accordions */}
      {categories.map((categories) => (
        <RestaurantCategory data = {categories?.card?.card}/>
      ))}
    </div>
  );
};

export default RestaurantMenu;
