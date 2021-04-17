import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
export default function FirstPage(props) {
  return (
    <div className={"mt25"}>
      <section>Mayank Gupta</section>
      <Link to={"/commentstable"}>Comments Table</Link>
    </div>
  );
}
