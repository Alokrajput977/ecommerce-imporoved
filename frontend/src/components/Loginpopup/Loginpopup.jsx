import React, { useState } from "react";
import "./Loginpopup.css";
import { assets } from "../../assets/assets";
const Loginpopup = ({ setshowLogin }) => {
  const [currState, setcurrState] = useState("Login");
  return (
    <div className="login-popup">
      <form className="login-popup-containor">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setshowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-input">
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="your name " required />
          )}

          <input type="email" placeholder="your email" required />
          <input type="password" placeholder="your password" required />
        </div>
        <button>{currState === "sign up" ? "create account" : "Login"}</button>
        <div className="login-popup-condiction">
          <input type="checkbox" required />
          <p>By continuing , i agree to the team of use & privacy policy..</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account ? <span onClick={()=>setcurrState('sign up')}>Click here</span>
          </p>
        ) : (
          <p>
            Already have a account ? <span onClick={()=>setcurrState('Login')}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Loginpopup;
