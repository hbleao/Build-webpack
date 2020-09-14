import React from "react";
import { Link } from "react-router-dom";

import Button from "@/components/button";

const Home = () => {
  return (
    <div>
      <h1>Page Home</h1>
      <Button />
      <br />
      <Link to="/about">Go About</Link>
      <br />
      <br />
      <Link to="/contact">Go Contact</Link>
    </div>
  );
};

export default Home;
