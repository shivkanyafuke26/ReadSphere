import React from "react";
import { Link } from "react-router-dom";
import Books from "../assets/books.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${Books})` }}>
      <div className="headerContainer">
        <h1> Boundless Books </h1>
        <p>Unlock the Power of Reading.</p>
        <Link to="/menu">
          <button> ReadSphere </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
