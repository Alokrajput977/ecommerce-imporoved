import React, { useContext } from "react";
import "./fooddisplay.css";
import { StoreContext } from "../../context/storecontext";
import Fooditem from "../fooditem/fooditem";
import { food_list } from "../../assets/assets";

const FoodDisplay = ({ category }) => {
  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item) => {
          if (category === "all" || category === item.category) {
            return (
              <Fooditem
                key={item._id}
                id={item._id} // Ensure `id` is correctly passed
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
