import React from "react";
import { Link } from "react-router-dom";

import Homer from "@/assets/images/homer.png";

const Home = () => {
  return (
    <div>
      <h1>Page About</h1>
      <img src={Homer} alt="homer" />
      <Link to="/">Go Home</Link>
      <br />
      <Link to="/contact">Go contact</Link>
    </div>
  );
};

export default Home;
