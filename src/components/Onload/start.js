import React from "react";
import "./start.css";
import Salom from "../../images/salom.png";

const Start = () => {
  window.onload(() => {});
  return (
    <div className="start">
      <div className="start-element">
        <img src={Salom} alt="salom" />
        <h1>Assalomu alaykum</h1>
      </div>
    </div>
  );
};

export default Start;
