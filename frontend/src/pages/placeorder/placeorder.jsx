import React, { useContext } from "react";
import "./placeorder.css";
import { StoreContext } from "../../context/storecontext";
const placeorder = () => {


  const {gettotalcartAmount} = useContext(StoreContext)
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>

        <input type="email" placeholder="Email address" />
        <input type="text" placeholder="Street" />
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>

        <div className="multi-fields">
          <input type="text" placeholder="Zip Code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="phone" />
      </div>

      <div className="place-order-right">
      <div className="cart-total">
      <h2>Cart Total</h2>
      <div>
      <div className="cart-total-details">
      <p>Subtotal</p>
      <p>${gettotalcartAmount()}</p>
    </div>
    <hr />
    <div className="cart-total-details">
      <p>Dilevery Fee</p>
      <p>${gettotalcartAmount()===0?0:2}</p>
    </div>
    <hr />
    <div className="cart-total-details">
      <b>Total</b>
      <b>${gettotalcartAmount()===0?0: gettotalcartAmount() + 2}</b>
    </div>
      </div>
      <button onClick={()=>navigate('/order')}> PROCEED TO PAYMENT </button>
    </div>
      
      
      </div>
    </form>
  );
};

export default placeorder;
