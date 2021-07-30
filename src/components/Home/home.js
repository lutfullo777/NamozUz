import React from "react";
import background from "../../images/home.jpg";
import Time from "../time";

const Home = () => {
  return (
    <div
      className="namoz-container"
      style={{
        background: `url(${background})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        <Time />
      </div>
    </div>
  );
};
export default Home;
