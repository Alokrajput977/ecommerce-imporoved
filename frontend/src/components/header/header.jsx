import React from "react";
import "./header.css"
const header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>Food is more than just sustenance; it is a language that speaks to our senses and brings people together.One cannot think well, love well, sleep well, if one has not dined well." - Virginia Woolf</p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default header;
