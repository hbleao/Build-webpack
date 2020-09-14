import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <h1>Page Contact</h1>
      <Link to="/about">Go About</Link>
      <br />
      <br />
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default Contact;
