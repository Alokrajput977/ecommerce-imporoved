// import { useEffect, useState } from "react";
// import "./fooditem.css";
// import { assets } from "../../assets/assets";
// import { StoreContext } from "../../context/storecontext";
// const Fooditem = ({ id, name, price, description, image }) => {
//   const [itemCount, setitemCount] = useState(0);
//   console.log(itemCount);
//   return (
//     <div data-aos="flip-left" className="food-item">
//       <div className="food-item-image-containor">
//         <img className="food-item-image" src={image} alt="" />
//         {!itemCount ? (
//           <img
//             className="add"
//             onClick={() => setitemCount((prev) => prev + 1)}
//             src={assets.add_icon_white}
//             alt=""
//           />
//         ) : (
//           <div className="food-item-counter">
//             <img onClick={()=>setitemCount(prev=>prev-1)} src={assets.remove_icon_red} alt="" />
//             <p>{itemCount}</p>
//             <img onClick={()=>setitemCount(prev=>prev+1)} src={assets.add_icon_green} alt="" />
//           </div>
//         )}
//       </div>
//       <div className="food-item-info">
//         <div className="food-item-name-rating">
//           <p>{name}</p>
//           <img src={assets.rating_starts} alt="" />
//         </div>
//         <p className="food-item-description">{description}</p>
//         <p className="food-item-price">${price}</p>
//       </div>
//     </div>
//   );
// };

// export default Fooditem;

import React, { useContext } from "react";
import "./fooditem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/storecontext";

const Fooditem = ({ id, name, price, description, image }) => {
  const { addToCart, removeFromCart, cartItems = {} } = useContext(StoreContext); // Ensure context is correctly used

  const itemCount = cartItems[id] || 0; // Safely access itemCount

  return (
    <div data-aos="flip-left" className="food-item">
      <div className="food-item-image-containor">
        <img className="food-item-image" src={image} alt={name} />
        {!itemCount ? (
          <img
            className="add"
            onClick={() => id && addToCart(id)} // Ensure id is not undefined before using it
            src={assets.add_icon_white}
            alt="Add"
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => id && removeFromCart(id)} // Ensure id is not undefined before using it
              src={assets.remove_icon_red}
              alt="Remove"
            />
            <p>{itemCount}</p>
            <img
              onClick={() => id && addToCart(id)} // Ensure id is not undefined before using it
              src={assets.add_icon_green}
              alt="Add"
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating" />
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default Fooditem;
