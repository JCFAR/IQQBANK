import React from "react";
import IQQBANK from "../assets/IQQBANK.png";
import NavBar from "./NavBar";

const Home = () => {
  return (
    <div className="mx-auto " style={{ width: "1580px" }}>
      <NavBar />
      <img src={IQQBANK} className="img-fluid mt-5" alt="Bad Bank Logo" />
    </div>
  );
};

export default Home;
