import React from "react";
import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function About() {
  return (
    <Card>
      <h1>About This project</h1>
      <p>This is a react app to leave feedback fopr a product or service</p>
      <p>Version: 1.0.0</p>

      <p>
        <Link to="/">Bacl To Home</Link>
      </p>
    </Card>
  );
}

export default About;
